---
title: "Avoid Nested Conditionals"
date: 2022-04-07T20:28:13-04:00
tags: ["code health", "javascript"]
draft: true
---

Let’s take a look at this example code block for error checking a response from a network request. Can we easily determine which errors are returned for which conditional?

{{< green-code-block >}}
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
{{< /green-code-block >}}

It’s not obvious which errors are a result of which if statement due to the complexities introduced by nested conditionals.

How can we improve this? We can flatten the nested conditionals by decoupling the if statements like the following:

{{< red-code-block >}}
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
{{< /red-code-block >}}

By refactoring the conditional statements we are able to improve readability and clarify which errors are returned for each specific condition. This coding pattern uses guard clauses as an effective way to guard against invalid conditions to avoid errors.

General rules to reduce complexity for nested conditionals

1. Avoid nesting beyond two levels. This will greatly improve the readability of the code.
2. Guard clauses are an effective way to flatten nested logic.
3. Decouple nested logic into separate functions if it’s not easily understandable.

Always think about simplifying code whenever possible to improve readability and maintainability!

# Additional Resources

Here are some additional resources to help the understanding of reducing complexity by avoiding nested conditionals:

- CodeHealth: Why readability matters issue
- Khan Academy: What are nested conditionals
- Wikipedia: Guard clauses (computer science)

# Special Thanks

Special thanks to @kevinchang, @jungchang, and @bettycakez for contributing and advising content for this issue.
