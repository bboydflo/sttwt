import { log } from './utils'

// log('hello world!')

var WORD_BOUNDARY_CHARS = '\t\r\n\u00A0 ↵!\"#$%&()*+,\-.\\/:;<=>?@\[\\\]^_`{|}~';
var WORD_BOUNDARY_REGEX = new RegExp('[' + WORD_BOUNDARY_CHARS + ']', 'g');

function tokenizeText(text) {
  const tokens = []
  if (!text || !text.trim()) {
    return tokens
  }

  const boundaryMarks = []
  for(let i=0; i<text.length; i++) {
    if (WORD_BOUNDARY_REGEX.test(text[i])) {
      boundaryMarks.push(i)
    }
  }

  let startPos = 0
  let markIndex = 0
  let mark
  while((mark = boundaryMarks.shift())) {
    let nextString = text.substring(startPos, mark)
    if (nextString) {
      tokens.push({
        value: nextString,
        index: startPos,
        offset: nextString.length
      })
    }
    startPos += nextString.length + 1
  }

  const lastToken = tokens[tokens.length - 1]

  if (lastToken && lastToken.index + lastToken.offset < text.length) {
    let newToken = text.substring(lastToken.index + lastToken.offset + 1, text.length)
    if (newToken && newToken.trim()) {
      tokens.push({
        value: newToken,
        index: lastToken.index + lastToken.offset + 1,
        offset: newToken.length
      })
    }
  }
  return tokens
}

/**
 * find succesive matches based on this example
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#Finding_successive_matches
 */
function tokenizeTextRegex(text) {
  const tokens = []
  const WORD_BOUNDARY_REGEX = new RegExp('[^' + WORD_BOUNDARY_CHARS + ']+', 'g')
  let myArray
  while((myArray = WORD_BOUNDARY_REGEX.exec(text)) !== null) {
    let value = myArray[0]
    if (value && value.trim()) {
      tokens.push({
        value,
        index: myArray.index,
        offset: value.length
      })
    }
  }
  return tokens
}

var textToTokenize = `Coming through the youth ranks of AaB, he signed his first professional contract with the club in January 2006, being described as the future goalscorer for the club.[2] 2 years and 2 first team league appearances later, he signed a new contract that was set to expire in the summer of 2011.[3]

Despite being marked as a talent, for the remainder of his AaB time, he never managed to establish himself as a regular in the starting eleven. When his contract expired, he decided to leave AaB and join Randers in the Danish 1st Division, who had just been relegated the previous season, signing a three-year contract.[4] `

var textToTokenize = `Coming through the youth ranks of AaB, he signed his first professional \n
  contract with the club in January 2006, being described as the future goalscorer
  for the club.[2] 2 years and 2 first team league appearances later, he signed
  a new contract that was set to expire in the summer of 2011.[3]\n
  Despite being marked as a talent, for the remainder of his AaB time, he never
  managed to establish himself as a regular in the starting eleven. When his
  contract expired, he decided to leave AaB and join Randers in the Danish 1st
  Division, who had just been relegated the previous season, signing a
  three-year contract.[4]`;

// textToTokenize = "To-Do List↵~ Today I need to"
// textToTokenize = "text to be tokenized"

// log(JSON.stringify(tokenizeText(textToTokenize)), null, 2)
// log(JSON.stringify(tokenizeTextRegex(textToTokenize)), null, 2)
log(tokenizeTextRegex(textToTokenize))
