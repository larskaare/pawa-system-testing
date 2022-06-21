# Test Principles, Technical Challenges

<!-- ---

## A short side note

Software Testing is a large topic an a craft on it's own.

"I do not believe that _everyone_ can test as an argument against including professional testers in software development teams. Developers are rarely passionate and good testers."

Developers should write tests. Testers should write code.

In our company we need more focus on testers as a dedicated skill set in our teams! -->

---

## Test Principles

<div style="font-size:0.7em">

We could benefit from having a few [principles](https://en.wikipedia.org/wiki/Principle) to guide our testing.
</div>
A few selected could be:

<div style="font-size:0.7em">

1. We automate more or less all of our testing
2. Non-functional tests are as important as the functional ones
3. Don't test in production
4. **Running code should not know that it's under test**
5. **Testing should not involve components that we don't control/own**

Our scenario explore/challenge principles 4 & 5.

</div>

---

## Technical challenges

<div><!-- .element: style="font-size:0.6em"-->

- We must do a login through the browser (to create a valid session)
  - This comes with many issues on it's own.
  - Handing over authentication to a different site will typically break many web drivers.
- There are no tokens in the browser, we must utilize the backend.
- Could we acquire tokens in the tests and manipulate the token cache?
- Could we mess around with the session objects in the back-end?
- Corporate users have MFA enabled.
- Which Azure AD (AAD) to use (Corporate Prod, Development)?
- Could we mock the AAD with an "oAuth2 Mock Server" component?

</div>
</br>
<div style="background-color:grey; font-size:0.6em">The choices we make should, as far as possible, not disable the security features of our system!</div>

<font size="3em">A more elaborate [discussion](https://github.com/larskaare/pawa-system-testing/blob/main/scenario/doc/the-test-challenges.md) is available.</font>

---

## Time to make some choices

... all solutions/choices are trade-off's trying to balance risk/cost? ...

<div style="font-size:0.6em">

- We use Azure AD, using the MS O365 developer program to acquire separate Azure test environment
- We create synthetic test users with out MFA to support automated tests
- Our Client component will "know" that's its under test
  - The "test footprint" should be as little as possible
  - If in test, we use a different flow (ROPC) to login and get the initial tokens
- We use Docker and docker-compose to build and serve the infrastructure
- We drive the test from the browser and from the perspective of the end-user. For this we use [Cypress](https://www.cypress.io/).
  
</div>

The system tests must be fully automated and be able to execute in a pipeline.<!-- .element: style="font-size:0.8em"-->
