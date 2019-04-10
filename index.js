const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(objectArray) {
  let win = objectArray.find( o => o.result === "W")
  if (win === undefined) {
    return undefined
  } else {
    return win.year
  }
}
