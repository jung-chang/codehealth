---
title: "Good Error Messages"
date: 2022-04-28T02:26:59-04:00
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

It’s very difficult to figure out what went wrong especially since it’s a generic error type. All we know is that and error occurred when calling the `percentage()` function. 

We can greatly improve this error message by **providing enough information to diagnose** the issue through specific error types and messages along with **suggestions for next steps**. 

{{< green-code >}}
<pre style="margin: 0">
Traceback (most recent call last):
  File "main.py", line 42, in <module>
    percentage(numerator, denominator)
<b style="color: var(--dark-green)">ZeroDivisionError: Division by zero when calculating percentage. Check if the denominator 0.</b>
</pre>
{{< /green-code >}}

This error message is much better to help with determining the root cause of the error and what to do to resolve it. It also uses **consistent language** when referring to the function parameters to avoid confusion.

<br/>

### Example 2: Parsing Files

Our next example, the starting error message is pretty good as it contains information on the type of error that occurs. We know that the file contents may be malformed and our `parse()` function is unable to interpret it for parsing.

{{< red-code >}}
<pre style="margin: 0">
Traceback (most recent call last):
  File "main.py", line 17, in <module>
    parse(file_path)
<b style="color: var(--dark-red)">SyntaxError: Failed to parse file.</b>
</pre>
{{< /red-code >}}

However, what can we do with this information? This error message is only useful in identifying the error type but is not helpful in determining the root case and finding a solution.

To improve this, we include **code pointers** to where the parsing failedand a link to detailed logs as an **additional resource** for more insight into the parsing process. Finally, the error can include **information about limitations** that are present in the system that is useful to be aware of. 

{{< green-code >}}
<pre style="margin: 0">
Traceback (most recent call last):
  File "main.py", line 17, in <module>
    parse(file_path)
<b style="color: var(--dark-green)">SyntaxError: Failed to parse file (max size 2MB) at line 42 column 3. <u>Click here to view detailed logs.</u></b>
</pre>
{{< /green-code >}}

Overall, error messages are meant to aid understanding of the problem and help arrive at a solution. They should be **clear and concise** as well as **simple yet comprehensive**.

{{% tldr %}}

Considerations when writing good error messages:

1. Use clear and concise error messages to provide enough information to help diagnose the error.
2. Include helpful pointers and suggestions that provide more context to the problem space. 
3. Prioritize clarity and keep language consistent to avoid confusion.

{{% /tldr %}}

<br>

## 📚 Additional Resources

Here are some additional resources to help understand how error messages and debugging go together:

- MDN Web Docs: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error" target="_blank">Builtin Error Object</a>
- Khan Academy: <a href="https://www.khanacademy.org/computing/computer-programming/programming/debugging-programs/a/more-debugging-tips" target="_blank">More Debugging Tips</a>