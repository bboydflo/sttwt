# Simple tokenize text to word tokens

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
import textToWordTokens from 'simple-text2word-tokens'
const text = 'text to be tokenized'

console.log(JSON.stringify(textToWordTokens(text), null, 2))
/**
 [
  {
    "value": "text",
    "index": 0,
    "offset": 4
  },
  {
    "value": "to",
    "index": 5,
    "offset": 2
  },
  {
    "value": "be",
    "index": 8,
    "offset": 2
  },
  {
    "value": "tokenized",
    "index": 11,
    "offset": 9
  }
 ]
*/
```