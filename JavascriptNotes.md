## Introduction

I have found myself looking for the same thing over and over. Here are the solutions to some of the typical situations I find myself in.

### Check variable type

Dylan... remember:
**First, just cosole.log the variable!**

Next do it in code: 

* **typeof()** - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
    - Good for checking objects
    - returns string descriptor

* **isArray()** - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    - returns bool

### Objects and arrays

#### Manipulating Objects directly

**With variables:** 
Post ES6 it is as easy as 
(credit: https://www.samanthaming.com/tidbits/37-dynamic-property-name-with-es6/)

let cake = '🍰'; 

// ❌ Old way requires 2 steps
let pan = {
  id: 1, 
}; 
pan[cake] = '🥞'; 

// ✅ YAY, much easier with ES6
let pan = {
  id: 1, 
  [cake]: '🥞', 
}; 

### Handling Image Uploads with File Input

https://yaz.in/p/blobs-files-and-data-uris/

#### Iterating through Objects and Arrays

**Examples:**

* manipulating_object_array.js

Objects : https://zellwk.com/blog/looping-through-js-objects/
https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-why-you-should-use-an-object-not-an-array-for-lists-bee4a1fbc8bd

##### Pre-ES6:

The problem with a for...in loop is that it iterates through properties in the Prototype chain. When you loop through an object with the for...in loop, you need to check if the property belongs to the object. You can do this with hasOwnProperty.

    for (var property in object) {
        if (object.hasOwnProperty(property)) {
            // Do things here
        }

    }

##### ES6:

### Conditional REndering 
https://www.robinwieruch.de/conditional-rendering-react

#### Enums

Example:
`

``` 
    function Notification({ text, status }) {
        return (
            <div>
            {
                {
                info: <Info text={text} />,
                warning: <Warning text={text} />,
                error: <Error text={text} />,
                }[status]
            }
            </div>
        );
     }
```

`

## Spread Syntax (...)

https://code4developers.com/spread-syntax-in-javascript/
https://codeburst.io/a-simple-guide-to-destructuring-and-es6-spread-operator-e02212af5831

## React

### useEffect()
https://dev.to/spukas/4-ways-to-useeffect-pf6

## Redux

### Summary

* STORE
* ACTION
* REDUCER
* DISPATCH

``` 
//STORE -> Globalized state

//ACTION
const savePost = () => {

    return {
        type: 'SAVE_POST'

    }

}

//REDUCER
const post = (state = [], action) => {

    switch (action.type) {
        case 'ADD_META':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ]
        case 'ADD_IMAGE':
            return [
                ...state,
                {
                    id: 'image'
                }
            ]

    }

}

//DISPATCH
```

https://medium.com/javascript-scene/10-tips-for-better-redux-architecture-69250425af44

### Async Functions

https://hackernoon.com/should-i-use-promises-or-async-await-126ab5c98789
https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1
https://hackernoon.com/understanding-async-await-in-javascript-1d81bb079b2c
