1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    We use map, filter, reduce, etc. Anything that doesn't mutate the original array. Object.create for creating new objects.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions will be the object that contains both the type and payload. The Reducers will take in an action and determine what logic to run based on that. The store is
the single source of truth because it's where global state is located and any component can connect to it and grab different pieces of state that it needs.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    To my understanding, application state is state that is at the top-most level that every component would potentially need whereas component state is local to the component
    itself and only that component would use that state in addition to the application state.

4.  What is middleware?
    Middleware intercepts an action before it goes to the reducer and applies whatever middleware you have such as logger.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    A thunk is a function that returns a function so when it comes to the action creators, it allows us to perform asynchronous calls and gives us the dispatch method.

6.  Which `react-redux` method links up our `components` with our `redux store`?
    Connect!
