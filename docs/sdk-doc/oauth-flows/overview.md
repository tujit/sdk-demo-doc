---
sidebar_position: 1
sidebar_label: Overview
---

# OAuth Flows Overview

The Cidaas SDKs support multiple OAuth 2.0 flows to accommodate different types of applications and use cases.

## Available Flows

- [Authorization Code Flow](#authorization-code-flow)
- [PKCE Flow](#pkce-flow)
- [Implicit Flow](#implicit-flow)
- [Device Code Flow](#device-code-flow)


### Authorization Code Flow
Best for server-side applications where the source code is not publicly exposed.

### PKCE Flow
Recommended for mobile and native applications, adds an additional security layer.

### Implicit Flow
Simplified flow for client-side applications where immediate access token retrieval is needed.

### Device Code Flow
Optimized for devices with limited input capabilities or no browser.

## Choosing the Right Flow

The choice of OAuth flow depends on your application type:

| Flow Type | Best For | Security Level |
|-----------|----------|----------------|
| Authorization Code | Web apps with backend | High |
| PKCE | Mobile apps, SPAs | High |
| Implicit | Legacy browser apps | Medium |
| Device Code | IoT devices, CLI apps | High |