## What is a Hook? 
A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components. We’ll learn other Hooks later.

##When would I use a Hook? 
If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component. We’re going to do that right now!

## useState

useState is used to have state in functinal components. Before react 16.8 we need to have class components in order to have state in a component. But by using useState we can have the state in functional component.
##### Why did react add hooks? [click here for answer](https://reactjs.org/docs/hooks-intro.html#motivation)

##useEffect

The Effect Hook lets you perform side effects in function components:
import React, { useState, useEffect } from 'react';

function Example() {  
  const [count, setCount] = useState(0);  

  // Similar to componentDidMount and componentDidUpdate:  
  useEffect(() => {  
    // Update the document title using the browser API  
    document.title = `You clicked ${count} times`;  
  });  

  return ();  
}  

- Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. Whether or not you’re used to calling these operations “side effects” (or just “effects”), you’ve likely performed them in your components before.

- Tip : If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.

