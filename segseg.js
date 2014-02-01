"use strict"

module.exports = segmentsIntersect

var orient = require("robust-orientation")

function crosses(a0, a1, b0, b1) {
  var x = orient(a0, b0, b1)
  var y = orient(a1, b0, b1)
  if((x > 0 && y > 0) || (x < 0 && y < 0)) {
    return false
  }
  return true
}

function segmentsIntersect(a0, a1, b0, b1) {
  return crosses(a0, a1, b0, b1) && crosses(b0, b1, a0, a1)
}