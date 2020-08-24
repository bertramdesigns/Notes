# ReactJS

- [Introduction](#introduction)
- [Components (Classes and Functions) in JSX](#components-classes-and-functions-in-jsx)
  - [Boilerplates](#boilerplates)
    - [Functions](#functions)
    - [Classes](#classes)
  - [Converting a Function to a Class](#converting-a-function-to-a-class)
- [Forms](#forms)
  - [Controlled](#controlled)
  - [Uncontrolled](#uncontrolled)

## Introduction

A really good overview of how to structure React projects is written by Dan Abramov, a co-creator of Redux. It covers separation of concerns in the code and when to split stuff out. It can be found [here](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) - Updated 2019.

[Read this?](https://medium.com/wesionary-team/react-functional-components-vs-class-components-86a2d2821a22)

## Components (Classes and Functions) in JSX

A component can be either made of a function or a class. The major difference comes down to scoping `this` and passing `props`in JSX.

- Documentation on the subject can be found [here](https://reactjs.org/docs/components-and-props.html)
- A good explanation Medium article [here](https://medium.com/wesionary-team/react-functional-components-vs-class-components-86a2d2821a22)

### Boilerplates

_Good examples [here](https://upmostly.com/tutorials/react-onclick-event-handling-with-examples)._

#### Functions

```jsx
import React, { useState } from "react";

// Props need to be passed in function components
const Toggle = (props) => {
  // Declare a new state variable, which we'll call "count"
  const [isToggleOn, setIsToggleOn] = useState(true);

  handleClick() {
      setIsToggleOn(!isToggleOn);
  }

  return (
    // No ...()! Else it will execute on every re-render.
    <button onClick={handleClick}>{isToggleOn}</button>
    // Or to pass prop
    // ... onClick={() => handleClick(isToggleOn)} ...
  );
};

ReactDOM.render(<Toggle />, document.getElementById("root"));
```

_**Note:** The difference beteween ES6 regular and arrow functions is how `this` is bound. Regular functions have their own bindings of [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this), [`arguments`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments), [`super`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super), and [`new.target`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target), whereas arrow functions inherit `this` from the parent. More about this [here](https://stackoverflow.com/questions/34361379/are-arrow-functions-and-functions-equivalent-exchangeable) and more about arrow functions [here](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)._

- _Use non-arrow functions for methods that will be called using the `object.method()` syntax. Those are the functions that will receive a meaningful this value from their caller._
- _Use arrow functions for everything else._

#### Classes

```jsx
import React, { Component } from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // because using itself must pass state
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
    // otherwise it would be
    // this.setState({isToggleOn: true});
  }

  render() {
    return (
      // No ...()! Else it will execute on every re-render.
      <button onClick={this.handleClick}>
        {" "}
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
      // Or to pass prop
      // ... onClick={() => this.handleClick(isToggleOn)} ...
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById("root"));
```

### Converting a Function to a Class

_copied from [React Docs](https://reactjs.org/docs/state-and-lifecycle.html)_

You can convert a function component like Clock to a class in five steps:

1. Create an ES6 class, with the same name, that extends React.Component.
1. Add a single empty method to it called render().
1. Move the body of the function into the render() method.
1. Replace props with this.props in the render() body.
1. Delete the remaining empty function declaration.

```js
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```
## Forms

There are two types of forms in React: 
- [Controlled](#controlled)
- [Uncontrolled](#uncontrolled)

A good article about forms can be found [here](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/). 

* Controlled forms documentation can be found in the [ReactJS Main Concepts docs](https://reactjs.org/docs/forms.html)
* Uncontrolled forms documentation can be found in the [ReactJS Advanced Concepts docs](https://reactjs.org/docs/uncontrolled-components.html)

### Controlled
Rely on state to keep everything synced. Should be used more often.

### Uncontrolled
These use refs. Should only be used for simple forms.