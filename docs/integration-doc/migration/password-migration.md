---
stoplight-id: x2kqcp1r5agbi
---

# Password Hashing Algorithms and Pluggable Hashing

cidaas provides a set of hashing algorithms out of the box, and we continuously add the latest algorithms, and migrate the user passwords on the fly to a more secure hashing method. 

The hashing method applied is defined in the cidaas Configuration.

To achieve a proper migration you can use the user migration (bulk) api and specify the algorithm used for the passwordhash of the user. Using the `algorithmTypeId` you can define your password hash algorithm used.

API | Description | Link to the API
----|--------------|---------
Migrate (add or update) user entities | The migration API accepts password_hash_info. In hData you can provide the required information to validate the password like salt-values. | [Link](https://docs.cidaas.com/docs/integration-doc/a20291b88d28a-migrate-add-or-update-user-entities)


```json
"password_hash_info": {
  "algorithmTypeId": "CUSTOM_SHA1Hash",
  "passwordHash": "da1800bf53301b5dbadbf85e991ba8eed93164cb",
  "hData":{
    "salt":"mycustomsalt"
  }
}
```

<!--
type: tab
title: Supported Hashing Algorithms
-->

## Supported Hashing Algorithms


AlgorithmType | Description/Migration Information
---|---
SHA1 |using digest `hex`
SHA256| using digest `hex`
PBKDF2 | configuration that can be overhanded to cidaas are _salt_, _iterations_ and _keylen_. Those can be overhanded in equally named fields in the `password_hash_info` object
ARGON (`argon2id`, `argon2i`, `argon2d`) | the configurations are already present in the Hashing Algorithm, so no need to do any particular configuration on cidaas side to recognize migrated passwords
HMAC-SHA-256 | this uses sha256 and digest hex. The `salt` can be overhanded in `password_hash_info` with field key 
HMAC | Basically you can use any HMAC Method you would like to use. Therefore you need to use the prefix `HMAC`and include the Hmac-algorithm and digest. The `salt` need to be overhanded in `password_hash_info` with field key `salt`
BCRYPT | the configurations are already present in the Hashing Algorithm, so no need to do any particular configuration on cidaas side to recognize migrated passwords

### Peppering or Salts

Depending on the algorithm you have used, you might hae also used salts and peppered Strings to even achieve a less guessable passwordhash.

To allow a smooth migration we are also supporting salts and pepperization.

* `pepperOrder` ([]string): An array defining the order in which the components (systemsalt, password, usersalt) should be concatenated.
* `pepperDelimiter` (string): An optional delimiter to be used between concatenated components.

**Examples**:

If you have used a system salt, a user specific salt and of course the password the user entered to generate a string which should be hashed, this we call in here a pepperedString.

* `pepperOrder` ([]string): ["systemsalt", "password", usersalt"]
* `pepperDelimiter` (string): ";"

It could look like: `thisisthesystemsalt;HereComesMyPassword123;AndUserSpecificSalt`
* systemsalt: `thisisthesystemsalt`
* password: `HereComesMyPassword123`
* usersalt: `AndUserSpecificSalt`

Or it could look like: `thisisthesystemsalt;StrongPW$3;BestSaltEver`
* systemsalt: `thisisthesystemsalt`
* password: `StrongPW$3`
* usersalt: `BestSaltEver`

The `systemsalt` will be provided in the configuration of the algorithm, also the `pepperOrder` . For this you can contact support@cidaas.com or visith support.cidaas.com.

The user specific salt, herein referred as `usersalt`, will be provied during the user migration:


```json
"password_hash_info": {
  "algorithmTypeId": "SHA256",
  "passwordHash": "da1800bf53301b5dbadbf85e991ba8eed93164cb",
  "hData":{
    "salt":"BestSaltEver"
  }
}
```


<!--
type: tab
title: Implementing Custom Hash Algorithms
-->

## Implementing Custom Hash Algorithms

There are occasions where other systems might implement a custom hash algorithm to encrypt passwords. To still be able to login using differently encrypted password, that was migrated to cidaas, it is possible to allow a verification of this password by a pluggable approach.

Therefore, you need to use a HashAlgorithm with prefix `CUSTOM`. This indicates that the system needs to call another service which can verify the passwords.

After a successful verification, those are migrated to the current Hash Algorithm applied in cidaas.

The Custom Hash Algorithms need:
        
- to be a Custom Service can be secured using OAuth2 against cidaas.
- to have an endpoint that `accepts ?action=compare` as query param.
- to return StatusCodes.OK and as body the following response.


**Request Body**

```json
{
  "passwordVerification":{
      "passwordHash":"",
      "hData":{
         "salt":<salt used for passwordhashing>
      }
   },
  "password":<clear text password>,
  "algorithm":<the algorithm id>
}
```
**Response Body**

```json
{
  "data":{
      "verified":true
   }
}
```

<!-- type: tab-end -->

<!-- theme: warning -->
> ### Need Support?
> Please contact us directly on our [support page](https://support.cidaas.com/en/support/home)



