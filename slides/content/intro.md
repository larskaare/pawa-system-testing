<!-- .slide: data-background-image="./content/images/appsec-icon.svg" data-background-size="7%" data-background-position="right 2% top 2%"-->
<!-- markdownlint-disable MD041 -->

# Running system tests with active authn/z

---

## Objective

> Encourage teams to divert more effort on to system testing with authn/z (and other security features) activated.

Active = Components runing in "production mode", security features like authn/z not mocked or disabled<!-- .element: style="font-size:0.5em"-->
---

## Disclaimer

> The more I learn about the topic at hand, the more I realize how complex it is. I am not an expert. Life is not simple. All solutions have trade-off's. There are always more than one solution. Context matters - a lot!  <!-- .element: style="font-size:0.8em"-->

Code examples is not production quality!! </br>Some patterns that are discussed are quite risky - be cautious<!-- .element: style="font-size:0.5em"-->

---

## Whoami

<div style="display: grid;grid-column-gap: 1%; grid-auto-columns: 50% 50%;">

<div  style="grid-area: 1 / 1"><!-- .element: style="font-size:0.9em"-->

- Lars Kåre Skjørestad - </br> __Lars__ will do just fine 🙂
- Application Security Advocate @ [Equinor](https://loop.equinor.com/en/stories) (an Energy company)
- Curious since late 60's, abusing computers since mid 80's
- Living at the west coast of [Norway](https://en.wikipedia.org/wiki/Norway)
- Married, 3 grown-up kids
- Hobbies with too little time to pursue (besides coding), cycling, fly-fishing, hunting, hiking
- larskaare @ [linkedIn](https://www.linkedin.com/in/larskaare/), [twitter](https://twitter.com/larskaare) and [github](https://github.com/larskaare/)

</div>

<div  style="grid-area: 1 / 2"><img src="./content/images/lk-avatar.png" width="100%" height="auto" display="block" margin-left="auto" margin-right="auto">
</div>

</div>

---

## Outline

- Intro (this)
- Some observations
- Our demo application/system
- Test principles, Technical Challenges
- Exploring one potential solution
- Wrapping up, Q&A

I really encourage asking questions during the presentation.
</br>"There is no end state for application security, we just learn and improve"<!-- .element: style="font-size:0.7em"-->
