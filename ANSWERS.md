- [x] Why would you use class component over function components (removing hooks from the question)?
Because class component give us full access to the whole component life cycle.

- [x] Name three lifecycle methods and their purposes:
componentDidMount, componentDidUpdate, componentWillUmount. when app render, react can added the dom, then call  componentDidMount:  in this state is where the first time we interact with the Dom.  Some actions happen, state has changed so we call componentDidUpdate. Then right before it get remove from the dom, call componentWillUmount clean up.

- [x] What is the purpose of a custom hook?
Custom hook define reusable behavior so we can use what we build to define more reusable behavior.

- [x] Why is it important to test our apps?
To make sure it works at each component level and to help verify the behavior as our app continue to grow.