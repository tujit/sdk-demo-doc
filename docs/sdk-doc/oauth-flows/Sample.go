package main

import (
	"log"
	"net/http"
)

func get(w http.ResponseWriter, r *http.Request) {
	// set response to ok and return Status ok and response
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(respJSON))
	return
}

func main() {
	r := mux.NewRouter()
	api := r.PathPrefix("/api/v2").Subrouter()
	// Base URI is mandatory, ClientID is optional, if ClientID is set the interceptor will only allow requests from this Client
	cidaasInterceptor, err := cidaasinterceptor.New(cidaasinterceptor.Options{BaseURI: "https://base.cidaas.de", ClientID: "clientID"})
	if err != nil {
		log.Panicf("Initialization of cidaas interceptor failed! Error: %v", err)
		panic("Panic!")
	}
	getHandler := http.HandlerFunc(get)
	api.Handle("/", cidaasInterceptor.VerifyTokenBySignature(getHandler, cidaasinterceptor.SecurityOptions{
		Scopes: []string{"your scope"},
		Roles:  []string{"role:Admin"},
	})).Methods(http.MethodGet)
	api.Handle("/user", cidaasInterceptor.VerifyTokenBySignature(getHandler, cidaasinterceptor.SecurityOptions{
		AllowAnonymousSub: true, // add this flag if you want to allow tokens with an anonymous sub
		Scopes:            []string{"your scope"},
		Roles:             []string{"role:Admin"},
	})).Methods(http.MethodGet)
	log.Fatal(http.ListenAndServe(":8080", r))
}
