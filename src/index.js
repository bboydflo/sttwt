const WORD_BOUNDARY_CHARS = '\t\r\n\u00A0 ↵!\"#$%&()*+,\-.\\/:;<=>?@\[\\\]^_`{|}~'
const WORD_BOUNDARY_REGEX = new RegExp('[^' + WORD_BOUNDARY_CHARS + ']+', 'g')

/**
 * simple tokenize a text into tokens.
 * @param {string} text to be tokenized. string must not be empty and has to contain non white space characters
 * @param {Regex} [customRegex] - custom regex to test for
 * @return {[{value: String, index: Number, offset: Number}]}
 */
function tokenizeTextToWordTokens(text, customRegex) {
  const tokens = []
  // text does not contain non blank characters
  if (typeof text !== 'string' || !text || !text.replace(/\s*/, '')) {
    return tokens
  }
  // customRegex is not a valid RegExp object
  if (customRegex && Object.prototype.toString.call(customRegex) !== '[object RegExp]') {
    return tokens
  }
  let myArray
  while((myArray = (customRegex || WORD_BOUNDARY_REGEX).exec(text)) !== null) {
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

export default tokenizeTextToWordTokens
