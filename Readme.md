# Repository setup for the codility challenges

## Install dependencies

```sh
npm install
```

## Start the project

```sh
npm start
```

> The output is only visible on browser console

### Usage

```js
const text = `text to be tokenized`

console.log(JSON.stringify(tokenizeText(text), null, 2))
/**
[{"value":"text","index":0,"offset":4},{"value":"to","index":5,"offset":2},{"value":"be","index":8,"offset":2},{"value":"tokenized","index":11,"offset":9}]
 * /
```