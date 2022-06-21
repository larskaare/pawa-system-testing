My context and 
# The Challenge

---

## The general context

<div><!-- .element: style="font-size:0.6em"-->

- The context is a corporate environment.
- We have a lot of systems (thousands)</br> that has been developed over the last two decades in production.
- We also pretty much have a permutation of all techs invented over </br>the same period in prod as well.
- We have a lot of teams - many of them are quite small (2-3 persons).
- For each internal professional software developer
  - we have at least 2 temporary ones from an outsourcing partner.
  - we have at least 2 people business and / or business doing sw development
- To a large degree, we have yet to acknowledge that there are other disciplines </br>in software development than "developers"
- We are hurrying into the cloud.
- Security is shifting left - </br> but much of our security culture is still in the "age of castle and knights".
- The company (culture and mgmt) has yet to recognise that we are becoming a "software company"
- We operate in a scandinavian culture - flat organisations - </br>high level of trust - large degree of autonomy to teams/units.


</div>
---

## Observations on sw development,</br> testing and security

<div><!-- .element: style="font-size:0.8em"-->

- Many developers write automated test's
- 80%+ of the effort is spent on unit testing
  - Authentication and Authorization are either mocked/stubbed or "turned off" when testing
  - The same goes for many security features
- We don't write security related tests
- We do little integration, system and acceptance testing
- Integration and system testing in a corporate context is often very challenging to automate (rules, regulations, tech stack)
- Our business are rarely involved creating automated tests, they are _bugged down_ by manual testing
- Acceptance testing, is more often than not, a manual effort.

</div>

---

## Challenge

> If you had $1M to spend on testing, how would you split the funds on the various types of testing?

- Should we shift more effort into system testing?
- How can we avoid turning off A&A (or any security feature) when doing system testing? What needs to happen?
- What impact does this have on patterns and architectures?
- Could we involve the customer in writing, running and maintaining system tests (acceptance tests)? What would need to happen to make this work?
  