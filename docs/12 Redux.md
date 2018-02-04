# Redux

### 3 Principles of Redux
1. The state of your whole application is stored in an object tree within a single store.

1. The only way to change the state is to emit an action, an object describing what happened.

1. To specify how the state tree is transformed by actions, you write pure reducers.

https://redux.js.org/docs/introduction/ThreePrinciples.html

## Install Redux

```
npm install --save redux react-redux
```

## State Tree
```
app : {
    query,
    results
}
```

# Root Reducer
The reducer that initializes state. It MUST have signature:
```
const reducer(state, action)
```
Reducers must be pure functions - they do not mutate given data but return a completely new object in response to an action.

Why? Because Redux compares the memory locations of objects to see if they have changed or not. If you mutate an object instead of creating a new one, redux can't tell that state has changed, it doesn't trigger a re-render of subscribed components === bugs.

# Redux Dev Tool
```
createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
```

You should see your state with 'results' in the dev tool after the redux store and reducer is implemented correctly