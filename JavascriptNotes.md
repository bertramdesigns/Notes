## Introduction

I have found myself looking for the same thing over and over. Here are the solutions to some of the typical situations I find myself in.

### Check variable type
Dylan... remember:
**First, just cosole.log the variable!**

Next do it in code: 
* **typeof()** - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
    * Good for checking objects
    * returns string descriptor

* **isArray()** - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    * returns bool

### Iterating through objects and arrays

**Examples:**
* manipulating_object_array.js

#### Objects
https://zellwk.com/blog/looping-through-js-objects/
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
````
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
````