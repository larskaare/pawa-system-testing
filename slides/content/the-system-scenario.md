<!-- markdownlint-disable MD033 -->

# The demo system

---

## The Application

![The App](./content/images/the-app.png)

---

## Components

<img src="./content/images/pawa-scenario.jpg" width="60%" height="auto">

---

## The Feature we test

<div style="background-color:grey">For our testing we are focusing on one specific feature;</br> retrieve a list of GOT episodes for a logged in user.</div>

Detailed and steps are [documented](https://github.com/larskaare/pawa-system-testing/blob/main/scenario/doc/the-feature.md) in our scenario documentation.

---

## Technical challenges when testing

<div><!-- .element: style="font-size:0.6em"-->

- We must do a login through the browser (to create a valid session)
  - This comes with many issues on it's own. </br>Handing over authentication to a different site will typically break many web drivers.
- There are no tokens in the browser, we must utilize the backend.
- Could we mess around with the session objects in the back-end?
- Could we acquire tokens in the tests and  inject into the token cache?
- Should we use Azure AD - the production one?
- Could we mock the AD with an external oAuth2 Mock Server?
- Is this where we turn of A&A?

</div>
</br>
<div style="background-color:grey; font-size:0.6em">The choices we make should negatively impact as few as possible of the </br>security features of our system! The secure default should be the goal!</div>

<font size="3em">A more elaborate [discussion](https://github.com/larskaare/pawa-system-testing/blob/main/scenario/doc/the-test-challenges.md) is available.</font>

---

## Time to make some choices

<div style="font-size:0.8em">

- We use Azure AD, but we do not want to test using the Official/prod Azure AD
- We use the MS O365 developer program to acquire separate Azure test environment
- We create synthetic test users with out MFA to support automated tests
- We let our code know that's its under test
  - The "test footprint" should be as little as possible
  - If in test, use a different flow (ROPC) to login and get the initial tokens
- We use Docker and docker-compose to build and serve the infrastructure
- We drive the test from the perspective of the end-user (acceptance) and use Cypress for this. (Cypress executes on the back-end and could have access to back-end resources.)
</div>

The system/acceptance tests should be fully automated </br>and be able to run in a pipeline.
