<!-- markdownlint-disable MD033 -->
# Test Principles, Technical Challenges

---

## Test Principles

<div style="font-size:0.7em">

We could benefit from having a few [principles](https://en.wikipedia.org/wiki/Principle) to guide our testing.
</div>
A few selected could be:

<div style="font-size:0.7em">

1. We automate more or less all of our testing<!-- .element: class="fragment" data-fragment-index="1" -->
2. Non-functional tests are as important as the functional ones<!-- .element: class="fragment" data-fragment-index="2" -->
3. Don't test in production<!-- .element: class="fragment" data-fragment-index="3" -->
4. Use synthetic test data<!-- .element: class="fragment" data-fragment-index="4" -->
5. Running code should not know that it's under test<!-- .element: class="fragment" data-fragment-index="5" -->
6. Testing should not involve components that we don't control/own<!-- .element: class="fragment" data-fragment-index="6" -->

The list is not exhaustive. Teams should have their own list!<!-- .element: class="fragment" data-fragment-index="6" style="font-size:0.6em"-->

</div>

---

## Technical challenges

<div><!-- .element: style="font-size:0.6em"-->

- We must do a login through the browser (to create a valid session)
  - This comes with many issues on it's own.
  - Handing over authentication to a different site will typically break many web drivers.
- There are no tokens in the browser, we must utilize the backend.<!-- .element: class="fragment" data-fragment-index="2" -->
- Could we acquire tokens in the tests and manipulate the token cache?<!-- .element: class="fragment" data-fragment-index="3" -->
- Could we mess around with the session objects in the back-end?<!-- .element: class="fragment" data-fragment-index="4" -->
- Corporate environments/users have MFA enabled.<!-- .element: class="fragment" data-fragment-index="5" -->
  - Makes login automation more or less impossible...<!-- .element: class="fragment" data-fragment-index="5" -->
  - And we should not put test users in our prod system anyway?<!-- .element: class="fragment" data-fragment-index="5" -->
- Which IAM solution to use (Corporate Prod, Development)?<!-- .element: class="fragment" data-fragment-index="6" -->
  - The same vendor we use in prod, Azure AD (AAD) for us.<!-- .element: class="fragment" data-fragment-index="6" -->
- Could we mock the IAM with an "oAuth2 Mock Server" component?<!-- .element: class="fragment" data-fragment-index="7" -->

</div>
</br>
<div style="background-color:grey; font-size:0.6em">The choices we make should, as far as possible, not disable the security features of our system!</div><!-- .element: class="fragment" data-fragment-index="8" -->

<font size="3em">A more elaborate [discussion](https://github.com/larskaare/pawa-system-testing/blob/main/scenario/doc/the-test-challenges.md) is available.</font><!-- .element: class="fragment" data-fragment-index="8" -->

---

## Time to make some decisions

... all solutions/choices are trade-off's trying to balance risk/cost? ...

<div><!-- .element: style="font-size:0.6em"-->

- We use Azure AD, using the MS O365 developer program to acquire separate Azure test environment
- We create synthetic test users with out MFA to support automated tests <!-- .element: class="fragment" data-fragment-index="1" -->
- Our Client component will "know" that's its under test<!-- .element: class="fragment" data-fragment-index="2" -->
  - The "test footprint" should be as little as possible<!-- .element: class="fragment" data-fragment-index="2" -->
  - If in test, we use a different flow (ROPC) to login and get the initial tokens<!-- .element: class="fragment" data-fragment-index="2" -->
- We use Docker and docker-compose to build and serve the infrastructure<!-- .element: class="fragment" data-fragment-index="3" -->
- We drive the test from the browser and from the perspective of the end-user.<!-- .element: class="fragment" data-fragment-index="4" -->
  - For this we use [Cypress](https://www.cypress.io/) <!-- .element: class="fragment" data-fragment-index="4" -->
  
</div>

The system tests must be fully automated and be able to execute in a pipeline.<!-- .element: style="font-size:0.8em" class="fragment" data-fragment-index="5"-->
