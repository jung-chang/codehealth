---
title: "DRY Isn't Always Best"
summary: "It is generally best to avoid strict DRY for test code in favor of clarity and maintainability."
date: 2022-02-03
tags: ["testing", "typescript"]
draft: true
---

The **DRY (Don't Repeat Yourself)**<sup><a href="#fn1">[1]</a></sup> principle is a widely accepted software development principle that encourages avoiding duplication of code. While it is a good principle to follow for production code, it may not be ideal for test code!

Let's take a look at this example unit test; can you figure out what it's testing?

{{< red-code >}}
{{< highlight javascript >}}
test('bank account works correct', () => {
    const account = new Account({owner: 'alice', balance: 100})
    for (let i = 1; i <= 2; i++) {
        account.withdraw(50, 'alice')
        assert.equal(account.balance, 100 - 50*i)
        assert.throws(() => account.withdraw(100, 'bob'), UnauthorizedError)
    }
    assert.throws(() => account.withdraw(100, 'alice'), EmptyBalanceError)
})

{{< /highlight >}}
{{< /red-code >}}

While this code works and provides test coverage, it **fails to give a clear pictur about what it's testing for**. The test has overly complex logic and favors cleverness over clarity with multiple seemingly unrelated assertions.

Let's refactor the unit test

{{< green-code >}}
{{< highlight javascript >}}

test('cannot withdraw with empty balance', () => {
    const account = new Account({owner: 'alice', balance: 0})
    assert.throws(() => account.withdraw(100, 'alice'), EmptyBalanceError)   
})

test('unathorized withdrawal', => {
    const account = new Account({owner: 'alice', balance: 100})
    assert.throws(() => account.withdraw(100, 'bob'), UnauthorizedError)
})

test.each([[100, 50, 50], [50, 50, 0]])
("balance after withdrawing", (initialBalance, amount, expectedBalance) => {
    const account = new Account({owner: 'alice', balance: initialBalance})
    account.withdraw(amount, 'alice')
    assert.equal(account.balance, expectedBalance)
});

{{< /highlight >}}
{{< /green-code >}}
 
Notice that although the amount of test code increased, the test coverage remains the same. **That's ultimately okay because we are prioritizing clarity over the DRY principle**:

- Each test has clear setup code that initializes relevant testing parameters
- Each test has single purpose responsibility<sup><a href="#fn1">[2]</a></sup>
- Assertions are clear and relevant to each case
- Uses parameterized testing to reduce code duplication

One of the main reasons developers read test code is to gain an **understanding of the behavior and expectations of the running code**. Thus, test code should aim to be clear, straightforward, and easy to read, even if it means duplicating some code. This will make it simple to maintain and add more tests in the future!

{{% tldr %}}

General rules for test code readability:

1. Avoid overly complex logic in test code
2. Keep unit tests single purpose with clear and relevant assertions
3. Use clear setup code and parameterized testing to promote code reuse while maintaing readability and clarity

{{% /tldr %}}

<br>

## 📚 Additional Resources

Here are some additional resources:

- Google: <a href="https://testing.googleblog.com/2019/12/testing-on-toilet-tests-too-dry-make.html" target="_blank">Testing on the Toilet: Tests Too DRY? Make Them DAMP! </a>
- Wikipedia: <a id="fn1" href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself" target="_blank">Don't Repeat Yourself</a> and <a id="fn2"  href="https://en.wikipedia.org/wiki/Single-responsibility_principle" target="_blank">Single Responsibility Principle</a>