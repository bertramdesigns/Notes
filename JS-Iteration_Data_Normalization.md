# Iterating over Objects & Arrays
- [Data Normalization](#data-normalization)
    - [Arrays](#arrays)
    - [Objects](#objects)
  - [When to use what?](#when-to-use-what)
- [Summary of structures](#summary-of-structures)
    - [Read](#read)
    - [Update](#update)
    - [Delete](#delete)
    - [Add](#add)
    - [Map over object](#map-over-object)
      - [Quick note on array returns:](#quick-note-on-array-returns)

## Data Normalization

The struggle when deciding to on the data structure is usually in determining if there should be an array of objects or to just keep to objects.

#### Arrays

- **Pro:** Can use the typical push commands and manipulate easily with JS methods
- **Pro:** Can render a list with map very easily
- **Con:** Must use taxing filters and searches to do any manipulation of specific entries

#### Objects

- **Pro:** Can easily manipulate an entry without searching for it
- **Pro:** Having a unique identifier means less error prone
- **Con:** Cannot be mapped over to create a list

### When to use what?

- **Object:** When fetching from an API or needing data accuracy with lots of manipulations.
- **Array:** If you don’t have a unique identifier for each item. Or you want to keep an order without using an extra property.

[Link to the absolutely best article for this.](https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-why-you-should-use-an-object-not-an-array-for-lists-bee4a1fbc8bd)

## Summary of structures

C(RUD) operations - Read, Update, Delete

```jsx
// array
const comments = [
  { id: "1", text: "add code examples" },
  { id: "2", text: "examples would be great for this article" },
  { id: "3", text: "hi there" },
]; // object
const comments = {
  "1": { id: "1", text: "please add code examples" },
  "2": { id: "2", text: "examples would be great for this article" },
  "3": { id: "3", text: "hi there" },
};
```

#### Read

```jsx
const commentId = "2"; // array
comments.find((comment) => comment.id === commentId); // object
comments[commentId];
```

#### Update

```jsx
const updatedComment = { id: "1", text: "add code examples, please" }; // array
comments.map((comment) => {
  if (comment.id === updatedComment.id) {
    return updatedComment;
  }
  return comment;
}); // object
comments[updatedComment.id] = updatedComment;
```

#### Delete

```jsx
const commentId = "3"; // array
comments.filter((comment) => comment.id !== commentId); // object
delete comments[commentId];
```

#### Add

```jsx
const newComment = { id: '4', text: 'thanks for the code examples!' };// array
if (comments.find((comment) => comment.id === newComment.id) {
  comments = comments.map((comment) => {
    if (comment.id === newComment.id) {
      return newComment;
    }
    return comment;
  });
} else {
  comments = comments.concat([newComment]);
}// object
comments[newComment.id] = newComment;
```

#### Map over object

```js
// object
const comments = {
  "1": { id: "1", text: "please add code examples" },
  "2": { id: "2", text: "examples would be great for this article" },
  "3": { id: "3", text: "hi there" },
}; // transform to array
const commentsSelector = (commentsObj) => {
  return Object.keys(commentsObj).map((commentKey) => commentsObj[commentKey]);
}; // usage of the selector
const commentsArray = commentsSelector(comments);
```


##### Quick note on array returns:
Read documentation [here](https://javascript.info/keys-values-entries).

**Quick View:**
For plain objects, the following methods are available:
```js
Object.keys(obj) // returns an array of keys.
Object.values(obj) // returns an array of values.
Object.entries(obj) // returns an array of [key, value] pairs.
```

