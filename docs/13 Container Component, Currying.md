# Container Component, Currying

## Container/Component

A commonly used pattern with React is to separate UI components for the same unit of code into two files -
a 'smart' container, and a 'dumb' component.

The container contains the app logic, links to necessary stores or files to aggregate data and supplies this data to the component.

The component contains the presentational logic, and little to no app logic should be done here.


## Currying
Currying is the act of turning a function into a new function that takes slightly fewer arguments, achieving a slightly more specific task.

```
f(n, m) --> f'(n)(m)
```

```
multiply = (n, m) => (n * m)
multiply(3, 4)
```

or

```
curryedMultiply = (n) => { return (m) => multiply(n, m) }
curryedMultiply(3)(4)
```

# New Files
SearchContainer.js
