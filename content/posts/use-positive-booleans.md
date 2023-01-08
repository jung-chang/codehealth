---
title: "Prefer Positive Booleans"
date: 2022-04-12T23:41:20-04:00
tags: ["clean code", "typescript"]
draft: true
---

When reading code, it is oftentimes difficult to understand how conditionals resolve. For example:

{{< red-code >}}
{{< highlight javascript >}}
if (!user.notAuthorized || !user.isNotAdmin()) {
  setPermissions();
}
{{< /highlight >}}
{{< /red-code >}}

When does the conditional pass?

It’s not easily understandable because the **double negatives are confusing**. One way to simplify this logic is to use **positive booleans** like such:

{{< green-code >}}
{{< highlight javascript >}}
if (authorized || isAdmin()) {
// give access
}
{{< /highlight >}}
{{< /green-code >}}

This provides a much clearer understanding about what the conditional is trying to accomplish. Furthermore, we favor terms that are natural to the language (`authorized` vs `isAuthorized`) to remove the use of redundant prefixes. There are many of these special (but common) cases such as:

- `Enabled` vs `Disabled`
- `Active` vs `Inactive`
- `Complete` vs `Incomplete`
- `hasValues` vs `Empty`

Finally, it's a good convention to name and set booleans in a way that defaults them to `false`. Developers will gain insight and understand that this conditional only runs when the variables are not in their default states (which is a great mental model for logic flow in general).

Conventional naming and structure for your booleans are effective and impactful ways to improve code readability and **avoid logical errors**. 

{{% tldr %}}

General rules when using booleans:

1. Use positive booleans to avoid confusion from double negatives
2. Implicitly default boolean logic to false
3. use consistent and appropriate language when defining booleans

{{% /tldr %}}

<br>

## 📚 Additional Resources

Here are some additional resources about simplifying boolean statements:

- Serendipidata: <a href="https://www.serendipidata.com/posts/naming-guidelines-for-boolean-variables" target="_blank">Naming Guidelines for Boolean Variables</a>
