---
title: "Simplify Long List of Parameters"
date: 2022-12-22
tags: ["clean code", "typescript"]
draft: false
---

Suppose we have a function that helps draw a rectangle with some characteristics provided as function arguments.

{{< red-code >}}
{{< highlight javascript >}}

function draw(x: number, y: number, height: number, width: number, color: string, opacity: number, border: number) {
    // ...drawing logic
}

{{< /highlight >}}
{{< /red-code >}}

There are seven parameters for this function already and all of them are necessary to draw the rectangle. What happens when we want to add a new characteristic (e.g. border radius) when drawing a rectangle?

A possible solution is to continually increase the number of function parameters. A better solution is to simplify and **group parameters appropriately**.

{{< green-code >}}
{{< highlight javascript >}}

interface Rectangle {
    x: number;
    y: number;
    height: number;
    width: number;
}

interface Attributes {
    color: string;
    opacity: number;
    border: number;
}

function draw(rectangle: Rectangle, attributes: Attributes) {
    // ...dawing logic
}

{{< /highlight >}}
{{< /green-code >}}

By grouping the parameters into easily understandable interfaces, we **improve readability** of the function as well as **simplify future refactors** to accomodate new attributes.

However, this is ultimately a tradeoff as primitive parameters provide powerful versatility in how functions can be defined. Simply, not every parameter needs to be grouped!

{{% tldr %}}

General rules to follow to simplify a long list of parameters:

1. Avoid using more than five parameters for a single function.
2. Group similar parameters together appropriate to the context.
3. A large number of parameters usually indicate splitting up the function.

{{% /tldr %}}

<br>

## 📚 Additional Resources

Here are some additional resources to understand more about function parameters:

- MDN Web Docs: <a href="https://developer.mozilla.org/en-US/docs/Glossary/Parameter" target="_blank">Parameters</a>
- Wikipedia: <a href="https://en.wikipedia.org/wiki/Single-responsibility_principle" target="_blank">Single Responsibility Principle</a> (when to split up functions)
