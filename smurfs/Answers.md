1. What problem does the context API help solve?

It's aimed at solving the problem of prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store. dispatch() .
A reducer is a function that determines changes to an application's state. It uses the action it receives to determine this change.
Redux is a state container for JavaScript apps, often called a Redux store. It stores the whole state of the app in an immutable object tree that's why it is known as a single source of truth.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Your application state is global, and your component state is local. It makes sense to use one over the other
depending on the size of what you are building. Application state for larger projects and component state for smaller ones. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It is a function insided a function and it delays the action that is coming from the reducer.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Context is my favorite because it is much easier to manage than Redux.
