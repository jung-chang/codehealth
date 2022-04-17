---
title: "Avoid Nested Conditionals"
summary: "Improve readability code by flattening nested conditionals with guard clauses."
date: 2022-04-07T20:28:13-04:00
tags: ["clean code", "javascript"]
draft: false
---

Let’s take a look at this example code block for error checking a response from a network request. Can we easily determine which errors are returned for which conditional?

{{< red-code >}}
{{< highlight javascript >}}

const response = await fetch('www.example.com');
if (response.status === HTTP_200_OK) {
  if (response.getContentType() === 'application/json') {
    const data = response.getData();
    if (data.success) {
      return data;
    } else {
      return Error('Data unsuccessful');
    }
  } else {
    return Error('Bad content type');
  }
} else {
  return Error('Response unsuccessful');
}

{{< /highlight >}}
{{< /red-code >}}

It’s not obvious which errors are a result of which if statement due to the complexities introduced by nested conditionals.

How can we improve this? We can flatten the nested conditionals by decoupling the if statements like the following:

{{< green-code >}}
{{< highlight javascript >}}

const response = await fetch("www.example.com");
if (response.status !== HTTP_200_OK) {
  return Error("Response unsuccessful");
}
if (response.getContentType() !== "application/json") {
  return Error("Bad content type");
}
const data = response.getData();
if (!data.success) {
  return Error("Data unsuccessful");
}
return data;

{{< /highlight >}}
{{< /green-code >}}

By refactoring the conditional statements we are able to **improve readability** and clarify which errors are returned for each specific condition. This coding pattern uses **guard clauses** as an effective way to guard against invalid conditions to avoid errors.

{{% tldr %}}

General rules to reduce complexity for nested conditionals:

1. Avoid nesting beyond two levels; this will greatly improve code readability.
2. Use guard clauses to effectively flatten nested logic.
3. Decouple nested logic into separate functions if it’s not easily understandable.

{{% /tldr %}}

Always think about simplifying code whenever possible to improve readability and maintainability!

<br>

## 📚 Additional Resources

Here are some additional resources to help the understanding of reducing complexity by avoiding nested conditionals:

- Khan Academy: [What are nested conditionals](https://www.khanacademy.org/computing/ap-computer-science-principles/programming-101/boolean-logic/a/nested-conditionals)
- Wikipedia: [Guard clauses (computer science)](<https://en.wikipedia.org/wiki/Guard_(computer_science)>)

<br>

## ❤️ Special Thanks

Special thanks to @kevinchang, @jungchang, and @bettycakez for contributing and providing guidance for this post.
