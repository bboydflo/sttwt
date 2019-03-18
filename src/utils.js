export function log(msg) {
  if (typeof msg === 'object') {
    console.log(JSON.stringify(msg, null, 2), '\n')
  } else {
    console.log(msg)
  }
}
