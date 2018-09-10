"use strict";

var _five, _, _ref;

function multiply(x, y) {
  return x * y;
}

function double(x) {
  return x * 2;
} // (5 * 2) * 3 = 30


var x = (_five = (_ = 5, double(_)), multiply(_five, 3));
console.log(x);
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // An array where each element in arr has 1 added to it

var arrPlusOne = (_ref = function _ref(n) {
  return n + 1;
}, arr.map(_ref));
console.log(arrPlusOne);