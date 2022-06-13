Let's briefly look at 
# Testing and Test Principles

---

## Software testing

Software Testing is a large topic an a craft on it's own. </br>Again context matters!

"I do not believe that _everyone_ can test as an argument against including professional testers in software development teams. Developers are rarely passionate and good testers."

Developers should write tests. Testers should write code.

<div style="background-color:grey;">
"Software testing is the process of evaluating and verifying that a software product or application does what it is supposed to do" ??
</div>
---
## Types of Software testing

<div style="display: grid;grid-column-gap: 1%; grid-auto-columns: 50% 50%;">

<div  style="grid-area: 1 / 1; font-size:0.6em">

- <div style="background-color:grey">Unit Testing</div>Validating that each software unit performs as expected. A unit is the smallest testable component of an application.
- <div style="background-color:grey">Integration Testing</div>Ensuring that software components or functions operate together.
- <div style="background-color:grey">System Testing</div>Ensuring that a system of components work together as a system
- <div style="background-color:grey">Acceptance testing</div>Verifying the whole system from an end-user-perspective
- Functional testing: Checking functions by emulating business scenarios, based on functional requirements.
- Performance testing: Testing how the software performs under different workloads.
- Recovery testing
- Migration Testing
- Ad-hoc / heuristic testing
- Exploration testing

</div>

<div  style="grid-area: 1 / 2; font-size:0.6em">

- Regression testing: Checking whether new features break or degrade functionality. 
- Stress testing: Testing how much strain the system can take before it fails. Considered to be a type of non-functional testing.
- Usability testing: Validating how well a customer can use a system or web application to complete a task.
- Compatibility testing
- Smoke and sanity testing
- Alpha and beta testing
- Continuous testing
- Accessibility / usability testing
- Security testing
- Fuzzing
- Negative / positive testing
- Penetration testing
- A/B testing
- Hardware/software testing
- ... and quite a few more ....
</div>

</div>

---
## We focus on system testing

>System Testing validates the complete and fully integrated software product. The purpose of a system test is to evaluate the end-to-end system specifications.

---

## Test Principles

We could benefit from having a few [principles](https://en.wikipedia.org/wiki/Principle) to guide our testing.

A few selected could be:

<div style="font-size:0.7em">

1. Testing is context dependent - rarely a right or wrong answer
2. We automate more or less all of our testing
3. We strive for a good balance between unit and other testing
4. Non-functional tests are as important as the functional ones
5. Negative testing will make our systems more robust
6… Testability of our systems/code is crucial
7. Asking "How to test this" should be the most important question to ask.
8. Don't test in production?
9. The artifacts that are tested are the exact ones we intend to promote to production.
10. **Running code should not known that it's under test**
11. **Testing should not involve components that we don't control/own**

Teams would benefit from agreeing on test principles for their context!

Our scenario explore/challenge principles 10 and 11, and potentially 9 as well.

</div>
