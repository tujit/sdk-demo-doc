---
title: 'User Migration'
sidebar_position: 2
# stoplight-id: 2de
---
# User Migration

The user migration is often the first part of setting cidaas live. 
Therefore it is important to have a step by step guide, how to start to migrate the users, how to map the data and what are the issues you need to address during migration.

<!-- theme: info -->

#### Migration Procedures

For decision making how to go live, the documentation for [one-time-migration](./one_time_migration.md), [bidirectional-sync](./bidirectional_sync_migration.md) or [long-term migration](./sync_migration.md) is more helpful.

<!--
type: tab
title: Understanding the Bulk API Structure
-->

Term | Description
----|---------
API Link | [Bulk User Migration API](https://docs.cidaas.com/docs/integration-doc/a20291b88d28a-migrate-add-or-update-user-entities)
Security by Scope | To secure the API you need to use `cidaas:bulk_user_create` 
Security by Config | Furthermore there is a configuration called `migrationMode`. Only if this is set to true you are allowed to **overwrite passwords** a second time


#### Step 1. Determine the information to migrate

Verify the information you would like to migrate.

Question | Description
---------|-------------
Which information are you going to migrate | e.g. `email`, `mobile_number`, `password_hash_info`. Those are so called system fields. You need to ensure those are `enabled` in the field setup
Do you also migrate customFields?| If you have custom information that is not covered by the [system information](https://docs.cidaas.com/docs/cidaas-iam/ffldwxjouiicj-user-field-settings#system-fields) you can create your own custom fields. This you need to provide in the `customFields`as key-value Pair.
Do you want to migrate users, that have multiple providers? | If you want to migrate users which can have two or more providerinformation e.g. facebook, google and a password, you need to use the `identities` array. [UserEntity](../../../examples/user/models/userEntityIdentities.yaml)

#### Step 2. Create a Token using the client credentials Token

To Create a Token using the Client Credentials OAuth2 Flow, you can find a flow chart and API Explantion [here](https://docs.cidaas.com/docs/cidaas-iam/7t3k9xc18627z-o-auth2-flows)

Please ensure that your App is having the proper scope `cidaas:bulk_user_create` and create a `NON_INTERACTIVE` App, which can be called `user-migration`. To create your first [App](https://docs.cidaas.com/docs/cidaas-iam/288aa0f48e2fc-app-management), you can use this small [guide](https://docs.cidaas.com/docs/getting-started/9pp1fuigop0mh-lets-start-building). 

#### Step 3. Integrate the User Bulk API

1. You will need to get the data from your data source 
2. Map the incoming (source) data to a structure described in the Bulk API
3. Add the Token generated in Step 2. as `Authorization: Bearer eyxxxx` Header
4. Call the API via Post Call

The simplest json is this one: 

```json
{
  "userStatus": "VERIFIED",
  "sub": "8dfc4306-9f3b-4a33-95d0-98c8954da2c1",
  "email": "user@example.com",
  "password_hash_info": {
    "algorithmTypeId": "BCRYPT_10",
    "passwordHash": "$2b$10$EfrjjYYGih4j4AbnpIWT2OEjvvRoYNBDJ0Wv2E.MwE/oZ87hasAHi"
  },
  "provider": "self"
}
```

<!--
type: tab
title: Validations in Bulk API
-->


Validations | How to enable those
------------|-----------------------
Missing required Fields| A useraccount must have a valid user identifier e.g. an email. Else the API will return a BAD_REQUEST (400)
Allow Disposable Emails and Validate Mobile Numbers | It is possible to enable or disable email/mobile number validation. The `allow_disposable_email`:true and `validate_phone_number`: false will skip the validation
Invalid Datatype | Please ensure that you are providing the fields (custom and sytem fields) in the same datatype format that is set in the field setup. Any invalid value for datatype or invalid format can lead to failures during migration. Also disabled fields will be skipped




### How cidaas uniquely identifies and updates the user if already migrated


Description | Example
------------|-------------
Update users via sub | To update a user via sub, which remains stable, is the best way to re-migrate/update the useraccount and identities
Update via useridentifier combined with provider | If the sub is not provided, the incoming useridentifier like email as well as the provider e.g. facebook is search and the retrieved users sub will be set automatically by cidaas. 

<!-- theme: warning -->

> #### Add further identities to an existing user
>
> If you migrate users with multiple providers, please ensure that you provide a sub, else it will lead to conflicts. 
>
> To prevent a conflict, if the user already exists you can do following: 
> 1. Call the existence api by `userId` https://docs.cidaas.com/docs/cidaas-iam/4yh82qism78xf-find-user-by-identifier
> 2. Take the sub and set this in the requestBody for the bulk API. 





<!-- type: tab-end -->