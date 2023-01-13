---
title: "Good Error Messages"
date: 2023-01-12
tags: ["debugging"]
draft: false
---

### Example 1: Calculating Percentage

Looking at the error message below, can we pinpoint exactly what went wrong?

{{< red-code >}}

<pre style="margin: 0">
Traceback (most recent call last):
  File "main.py", line 42, in <module>
    percentage(numerator, denominator)
<b style="color: var(--dark-red)">Exception: Something went wrong.</b>
</pre>

{{< /red-code >}}

This error message doesn't provide any information about the error that occurred. The only useful information is from the stack trace pointing to the `percentage()` function.

We can improve this by **providing enough information to diagnose** the issue through specific error types along with **debugging suggestions**.

{{< green-code >}}

<pre style="margin: 0">
Traceback (most recent call last):
  File "main.py", line 42, in <module>
    percentage(numerator, denominator)
<b style="color: var(--dark-green)">ZeroDivisionError: Division by zero when calculating percentage. Check if the denominator 0.</b>
</pre>

{{< /green-code >}}

This error message helps determine the root cause of the error and provides possible steps to resolve it. It also uses **consistent language** when referring to the function parameters for clarity to avoid confusion.

<br/>

### Example 2: Parsing Files

This error message is decent and contains information on the type of error that occurs. We know that the file contents may be malformed and our `parse()` function is unable to successfully interpret the contents.

{{< red-code >}}

<pre style="margin: 0">
Traceback (most recent call last):
  File "main.py", line 17, in <module>
    parse(file_path)
<b style="color: var(--dark-red)">SyntaxError: Failed to parse file.</b>
</pre>

{{< /red-code >}}

However, what can we do with this information? This error message is only useful for identifying the error type but is not helpful in determining the root case and finding a solution.

To improve this, we can include **code pointers** to indicate where it failed and a link to detailed logs as **additional resources** for further insight into the parsing process. Finally, the error can include **information about limitations** that are present in the system and are important to be aware of.

{{< green-code >}}

<pre style="margin: 0">
Traceback (most recent call last):
  File "main.py", line 17, in <module>
    parse(file_path)
<b style="color: var(--dark-green)">SyntaxError: Failed to parse file (max size 2MB) at line 42 column 3. <u>Click here to view detailed logs.</u></b>
</pre>

{{< /green-code >}}

Overall, error messages are meant to aid understanding of the problem and help arrive at a solution. They should be **clear and concise** and **simple yet comprehensive**.

{{% tldr %}}

Considerations when writing good error messages:

1. Use clear and concise error messages to present information to help diagnose the error.
2. Include helpful pointers and suggestions that provide context to the problem space.
3. Prioritize clarity and keep language consistent to avoid confusion.

{{% /tldr %}}

<br>

## 📚 Additional Resources

Here are some additional resources to help understand how error messages and debugging work together:

- Association for Computing Machinery: <a href="https://dl.acm.org/doi/fullHtml/10.1145/3411764.3445696" target="_blank">On Designing Programming Error Messages for Novices: Readability and its Constituent Factors</a>
- Khan Academy: <a href="https://www.khanacademy.org/computing/computer-programming/programming#debugging-programs" target="_blank">Debugging Programs Course</a>
