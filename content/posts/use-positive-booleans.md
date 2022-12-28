---
title: "Use Positive Booleans"
date: 2022-04-12T23:41:20-04:00
tags: ["clean code", "typescript"]
draft: true
---

example:
class user
isAdmin or notAdmin

- boolean variables
- member functions (getters/setters)

- Confusing as double or triple negatives in conditionals
  (!notAdmin || !)

- Confusing when used with a combination conditional
- implicitly default to false why?
  - convention and readability (feature flagging)
  - enabling new featurres

special cases

- enabled, disabled
- active vs inactive
- complete vs incomplete
- length vs has value vs empty
