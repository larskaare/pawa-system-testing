# Configuring the system

Configuring the various components typically have two steps; configuring the IAM parts (for us in Azure AD) and then the necessary environment variables to drive each of the components. The key component configuration are typically documented for each component (the readme.md files). We will put each component that we control into docker containers, and the use docker-compose to run/test the system.

This section contains some highlight for configuring the system for our scenario.

## Identity and access management (Azure AD)

### App registrations

Why Azure AD? Our scenario uses the Microsoft MSAL library which more or less _demands_ AAD to work properly.

- The Client
  - Must have an App Registration in the AAD
  - Must have a client secret (as in an oAuth2 client secret)
- The Episodes Api
  - Must have an App Registration in the AAD
  - Must have a client secret (as in an oAuth2 client secret)
  - Must Expose an Api with a scope named "Episodes.Read"
  - Must have granted the client component permissions to the "Episodes.Read" scope
- The Quotes Api
  - Must have an App Registration in the AAD
  - Must have a client secret (as in an oAuth2 client secret)
  - Must Expose an Api with a scope named "Quote.Read"
  - Must have granted the episodes api component permissions to the "Quote.Read" scope

This should be the bare minimum set-up for utilizing AAD as the "authorization server" for our system.

### Test users

Test users should be defined in our AAD and made available for testing. The userid and creds are stored as part of our config.

## Docker-compose config

The Docker-compose set-up have 4 services, one for each component and the one for Cypress that we use to drive the testing. Docker-compose expects to find most of the configuration from environment variables. A template for the necessary config is available in [./templates/pawa-compose.env.template](./../templates/pawa-compose.env.template). I recommend to take a copy of the template to a _safe_ place outside the code repository, then add the necessary config and source the file prior to running docker-compose. 

Remember to create the directory that will hold the token cache - and keep it out of the source code repository.

## Risky business

In our testing for the scenario we are introducing quite a risky pratcies that should be captured and potentially mitigated in your threat model. Some are:

- Storing the token cache, unencrypted, in a file on client host
- Storing client secrets for components in config files
- Storing creds for test users in config files
- Extensive logging for debug purposes reveal a lot of sensitive information.

## Technical assumptions

The scenario have been verified with the following technologies:

- Node 16.15.1 (If you want to run the components outside the containers)
- Docker (v20.10.16)
- Docker-compose (v.2.6.0)
- Cypress (v9.5.0, on intel and with some work on Apple Silicon)