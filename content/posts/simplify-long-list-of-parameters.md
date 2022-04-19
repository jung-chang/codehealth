---
title: "Simplify Long List of Parameters"
date: 2022-04-08T01:48:59-04:00
tags: ["clean code", "typescript"]
draft: true
---

Suppose we have a function that helps draw a rectangle with some initial characteristics provided as function arguments.

{{< red-code >}}
{{< highlight javascript >}}

function draw(x: number, y: number, height: number,
              width: number, color: string, 
              opacity: number, border: number) {
    // ...dawing logic
}

{{< /highlight >}}
{{< /red-code >}}

There are already seven parameters for this function and all of them are important and used to draw the rectangle. However, what happens when we want to add a new characteristic when drawing a rectangle?

A solution may be to continually increase the number of function parameters to support the new characteristics. A better solution is to simplify function parameters and group them appropriately.

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

By grouping the parameters into easily understandable interfaces, we **improve readability** of the function as well as **simplify future refactors** to accomodate new characteristics.

{{% tldr %}}

General rules for long list of parameters:

1. Avoid using more than five parameters for a single function.
2. Group similar parameters together appropriately that makes sense to the context.
3. Usually a large number of parameters indicate splitting up the function (see Single Purpose Functions).

{{% /tldr %}}

Always think about simplifying code whenever possible to improve readability and maintainability!

<br>

## 📚 Additional Resources

Here are some additional resources to help the understanding of reducing complexity by avoiding nested conditionals:

- MDN Web Docs: [Parameter](https://developer.mozilla.org/en-US/docs/Glossary/Parameter)
- Wikipedia: [Parameter (computer programming)](<https://en.wikipedia.org/wiki/Parameter_(computer_programming)>)

<br>

## ❤️ Special Thanks

Special thanks to @kevinchang, @jungchang, and @bettycakez for contributing and providing guidance for this post.