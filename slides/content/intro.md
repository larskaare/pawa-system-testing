<!-- .slide: data-background-image="./content/images/appsec-icon.svg" data-background-size="7%" data-background-position="right 2% top 2%"-->
<!-- markdownlint-disable MD041 MD033-->

# Running system tests with active authn/z </br>🕺🏻

---
## The story starts with </br>/.well-known/security.txt 

---

## Talk objective

> Make teams curious on diverting more effort into system testing with authn/z (and other security features) activated.

Active = Components running in "production mode", security features like authn/z not mocked or disabled<!-- .element: style="font-size:0.5em"-->

---

## Why do we pursue this objective?

It will have an impact on mitigating well known security risks!

</hr>

<div style="display: grid;grid-column-gap: 1%; grid-auto-columns: 50% 50%;">

<div  style="grid-area: 1 / 1;font-size:0.7em"">

[OWASP Top 10:2021 risks](https://owasp.org/Top10/)

- A01-Broken Access Control
- A05-Security Misconfiguration
- A07-Identification and Authentication Failures
- A09-Security Logging and Monitoring Failures

</div>

<div  style="grid-area: 1 / 2; font-size:0.7em"">

[OWASP API Top 10:2019 risks](https://owasp.org/www-project-api-security/)

- API1 Broken Object Level Authorization
- API2 Broken User Authentication
- API5 Broken Function Level Authorization
- API7 Security Misconfiguration
- API10 Insufficient Logging & Monitoring

</div>

</div>

---

## ⚠️ Disclaimer

> The more I learn about the topic at hand, the more I realize how complex it is. I am not an expert. Life is not simple. All solutions have trade-off's. There are always more than one solution. Context matters - a lot!  <!-- .element: style="font-size:0.8em"-->

</br>🧘🏻‍♂️ There is no end state for application security, we just learn and improve 🧘🏻‍♂️<!-- .element: style="font-size:0.7em"-->

Code examples is not production quality!! </br>Some patterns that are discussed are risky - be cautious</br>I recommend to threat model your test system!<!-- .element: style="font-size:0.65em"-->

---

## Whoami

<div style="display: grid;grid-column-gap: 1%; grid-auto-columns: 50% 50%;">

<div  style="grid-area: 1 / 1"><!-- .element: style="font-size:0.8em"-->

- Lars Kåre Skjørestad - </br> __Lars__ will do just fine 🙂
- Software Developer
- Application Security Advocate in Equinor's AppSec Team
- Abusing computers since mid 80's
- Living at the west coast of Norway
- 1 wife, 3 grown-up kids
- Hobbies with too little time to pursue (besides coding), Gran Fondo cycling, fly-fishing
- <a style="color:red">larskaare</a> @ linkedIn, twitter, github and @infosec.exchange (🐘)
- https://appsec.equinor.com

</div>

<div  style="grid-area: 1 / 2"><img src="./content/images/lk-avatar.png" width="100%" height="auto" display="block" margin-left="auto" margin-right="auto">
</div>

</div>

---

## Outline

- Observations
- Presenting our demo system
- Test principles - Technical Challenges
- Exploring one potential solution
- Wrapping up
- Q&A

(I will share the link to slides and code)<!-- .element: style="font-size:0.7em"-->
