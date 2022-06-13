# Demo of one potential solution

---

## Running the application

- We are putting the system components into containers
- We have created Azure AD objects for the [components](https://github.com/larskaare/pawa-system-testing/blob/main/scenario/doc/configuring-the-system.md)
- We user Docker-compose to [run](https://github.com/larskaare/pawa-system-testing/blob/main/scenario/doc/running-the-system.md) the application

> Demo of running application.

---

## Putting the system in test mode

- We use the NODE_ENV environment variable</br> to tell the system it is under test
- When testing, we switch from the oAuth2 Auth Code flow to ROPC
- We provide user name/pwd from the back-end as config params.
  
> Demo of running application in test mode

---

## Running the test

- We use Cypress to drive the tests
- Would system users accept the invite to write [Cypress Tests](https://github.com/larskaare/pawa-system-testing/blob/main/scenario/client-cypress/cypress/integration/client-o365dev.spec.js)?

> Demo of cypress running the test

---

## Bringing it all together

- We use docker-compose to
  - Start the system components
  - Put the system under test
  - Run headless tests in cypress

```shell
./source ~/path-to-my-env-file/pawa-compose.env
export NODE_ENV=test
docker-compose up --abort-on-container-exit --exit-code-from cypress
```

---

## Current status

<div style="font-size:0.6em">

- We now have a fully automation scenario running. </br>This could easily be executed in any CI environment, like Github Actions.
- We have
  - moved effort from unit testing to integration/acceptance testing
  - a fully automated scenario
  - good support for continuos testing
  - a fully synthetic test environment
  - not turned off A&A
  - the opportunity to create any scenario of users, groups etc and test from end-user perspective.
  - an opportunity to invite end-users to contribute to write tests?</br> (tests which become part of our regression suite)
- We have broken a few principles to reach this state - </br>An ok balance of risks?
- We have a pretty complex set-up (micro services patten)
  - Many moving component
  - A dynamic setup with a lot of config parameters, AD registrations etc.
  - For a "real-life" set-up everything should be scripted - like creating AD object
  - Secrets stores (like KeyVault) should be used to hold config
  - Routines needs to be developed to rotate secrets
  - Enabling https for the test environment would enable more prod like security features
</div>