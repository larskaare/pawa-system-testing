# Running system tests with active authn/z

## Purpose

> Encourage teams to divert more effort on to system testing with authn/z (and other security features) activated.

## Context

Experience have shown that we spend most of our test effort on unit testing. Many team reports that a key blocker for spending more time on system testing is the effort required to manage/mock the authentication and authorization parts of the system. In this talk we will briefly explore this problem and present one potential solution that could work for some teams.

## The Scenario

The Scenario that we will look at, and automate, is found in the [./scenario](./scenario/readme.md) directory. It consists of a web application (front-end-for-back-end pattern) talking to two api's as well as Office365.

## Slides

Slides are available from the [./slides](./slides/README.md) folder and live from [Omnia Radix](https://pawa-system-test-slides.app.playground.radix.equinor.com/)
