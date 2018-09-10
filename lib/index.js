"use strict";

function multiply(x, y) {
  return x * y;
}

function double(x) {
  return x * 2;
}

function printf(template) {
  function _print(objs) {
    if (!objs) {
      console.log(objs);
      return objs;
    }

    if (template) {
      if (Symbol.iterator in Object(objs)) {
        for (var i = 0; i < objs.length; i++) {
          var regexp = new RegExp('\\{' + i + '\\}', 'gi');
          template = template.replace(regexp, objs[i]);
        }

        console.log(template);
      } else {
        var _regexp = new RegExp('\\{0\\}', 'gi');

        template = template.replace(_regexp, objs);
        console.log(template);
      }
    } else {
      console.log(objs);
    }

    return objs;
  }

  return _print;
}

function map(action) {
  function _map(arr) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
      newArr[i] = action(arr[i]);
    }

    return newArr;
  }

  return _map;
}

function filter(predicate) {
  function _filter(arr) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
      if (predicate(arr[i])) {
        newArr.push(arr[i]);
      }
    }

    return newArr;
  }

  return _filter;
} // TODO


function reduce(accumulate) {
  function _reduce(arr, accumulator) {
    if (Symbol.iterator in Object(arr)) {
      if (arr.length < 2) {
        return accumulate(accumulator, arr[0]);
      }

      for (var i = 0; i < arr.length; i++) {
        accumulator = accumulate(accumulator, arr[i]);
      }

      return accumulator;
    }

    return accumulate(accumulator, arr);
  }

  return _reduce;
}

function main() {
  var _ref, _five, _, _ref2, _ref3, _ref4, _ref5, _arr;

  // (5 * 2) * 3 = 30
  var x = (_ref = (_five = (_ = 5, double(_)), multiply(_five, 3)), printf("5 * 2 * 3 = {0}")(_ref));
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // An array where each element in arr has 1 added to it

  var arrPlusOne = (_ref2 = function _ref2(n) {
    return n + 1;
  }, arr.map(_ref2));
  console.log('arr + 1: ' + arrPlusOne); // Pipes work well with currying:
  // f(x)(g)
  // can be done with:
  // g |> f(x)

  var bigArr = (_ref3 = (_ref4 = (_ref5 = (_arr = arr, map(function (x) {
    return x * 10;
  })(_arr)), filter(function (x) {
    return x > 40;
  })(_ref5)), printf("Numbers greater than 40: ")(_ref4)), printf()(_ref3));
}

main();