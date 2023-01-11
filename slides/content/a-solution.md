<!-- markdownlint-disable MD033 -->
# Exploring one potential solution </br>🕵🏻‍♂️ 

---

## Running the application

- We are putting the system components into containers
- We have created Azure AD objects for the [components](https://github.com/larskaare/pawa-system-testing/blob/main/scenario/doc/configuring-the-system.md)
- We user Docker-compose to [run](https://github.com/larskaare/pawa-system-testing/blob/main/scenario/doc/running-the-system.md) the application

> Demo of running application.

Testing in "private" mode, discussing some of the testing challenges<!-- .element: style="font-size:0.5em"-->

---

## Putting the system in test mode

- We use the NODE_ENV environment variable</br> to tell the system it is under test
- When testing, we switch from the oAuth2 **Auth Code** flow to **ROPC**
- We provide user name/pwd from the back-end as config params.
  
> Demo of running application in test mode

Exploring the test mode code and the login<!-- .element: style="font-size:0.5em"-->

---

## Running the test

- We use Cypress to drive the tests

> Demo of Cypress running the test </br>(gui and headless)

Exploring developing tests<!-- .element: style="font-size:0.5em"-->

---

## Bringing it all together

- We use docker-compose to
  - Start the system components
  - Put the system under test
  - Run headless tests in Cypress
  - Use exit-code from Cypress for further actions

```shell
./source ~/path-to-my-env-file/pawa-compose.env
export NODE_ENV=test
docker-compose up --abort-on-container-exit --exit-code-from cypress
```
