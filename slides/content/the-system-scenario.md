<!-- markdownlint-disable MD033 -->

# Presenting our demo system</br>🤖

... context matters ...

---

## The Application

![The App](./content/images/the-app.png)

---

## System Components

<img src="./content/images/pawa-scenario.jpg" width="60%" height="auto">

We are using OICD and oAuth2 for authn/z</br>We are using the Microsoft Authentication Library (MSAL) in the client back-end  </br>
We are using a "backend for frontend" (BFF) pattern.</br>
We will be using oAuth2 ROPC rather than Code Grant for the client login in test mode<!-- .element: style="font-size:0.5em"-->

---

## The Feature we test

<div style="background-color:grey; padding: 20px">For our testing we are focusing on one specific use case;</br> From the browser, log in a user and retrieve a list of Game of Thrones episodes.</div>

The test will utilize most of the components our test system.

Further details are [documented](https://github.com/larskaare/pawa-system-testing/blob/main/scenario/doc/the-feature.md) in our scenario documentation.
