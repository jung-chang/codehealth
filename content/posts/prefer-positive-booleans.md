---
title: "Prefer Positive Booleans"
date: 2023-09-09T23:41:20-04:00
tags: ["clean code", "typescript"]
draft: false
---

It is oftentimes difficult to understand how a conditional will resolve if the boolean logic is complex. The mental gymnastics needed to figure out all the edge cases soak up developer time and creates room for error.

For example, when does this conditional pass?

{{< red-code >}}
{{< highlight javascript >}}
if (!user.notAuthorized || !user.isNotAdmin()) {
    setPermissions();
}
{{< /highlight >}}
{{< /red-code >}}

It’s not easily understandable because the **double negatives are confusing**. One way to greatly simplify this logic is to use **positive booleans** like such:

{{< green-code >}}
{{< highlight javascript >}}
if (authorized || isAdmin()) {
    setPermissions();
}
{{< /highlight >}}
{{< /green-code >}}

This provides a much clearer understanding about what the conditional is trying to accomplish. Furthermore, we favor terms that are natural to the language (`authorized` vs `isAuthorized`) to remove the use of redundant prefixes. There are many of these special (but common) cases such as:

- `Enabled` vs `Disabled`
- `Active` vs `Inactive`
- `Complete` vs `Incomplete`
- `hasValues` vs `Empty`

Finally, it's a good convention to name and set booleans in a way that defaults them to `false`. Developers will gain insight and understand that this conditional only runs when the variables are not in their default states, which is a great mental model for logic flow in general.

Conventional naming and structure for your booleans are effective and impactful ways to improve code readability and **avoid logical errors**.

{{% tldr %}}

General rules when using booleans:

1. Use positive booleans to avoid confusion from double negatives
2. Implicitly default boolean logic to false
3. Use consistent and appropriate language when defining booleans

{{% /tldr %}}

<br>

## 📚 Additional Resources

Here are some additional resources about simplifying boolean statements:

- Serendipidata: <a href="https://www.serendipidata.com/posts/naming-guidelines-for-boolean-variables" target="_blank">Naming Guidelines for Boolean Variables</a>
