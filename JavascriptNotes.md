## Introduction

I have found myself looking for the same thing over and over. Here are the solutions to some of the typical situations I find mysleft in.

### Iterating through objects and arrays

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