const data = [
      {
        "id": "all",
        "title": "all",
        "type": "snippet",
        "attributes": {
          "fileName": "all.md",
          "text": "Returns `true` if the provided predicate function returns `true` for all elements in a collection, `false` otherwise.\n\nUse `Array.prototype.every()` to test if all elements in the collection return `true` based on `fn`.\nOmit the second argument, `fn`, to use `Boolean` as a default.\n\n",
          "codeBlocks": {
            "es6": "const all = (arr, fn = Boolean) => arr.every(fn);",
            "es5": "var all = function all(arr) {\n  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Boolean;\n  return arr.every(fn);\n};",
            "example": "all([4, 2, 3], x => x > 1); // true\nall([1, 2, 3]); // true"
          },
          "tags": [
            "array",
            "function",
            "beginner"
          ]
        },
        "meta": {
          "hash": "ba8e5f17500d1e5428f4ca7fcc8095934a7ad3aa496b35465e8f7799f1715aaa",
          "firstSeen": "1518601575",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "allEqual",
        "title": "allEqual",
        "type": "snippet",
        "attributes": {
          "fileName": "allEqual.md",
          "text": "Check if all elements in an array are equal.\n\nUse `Array.prototype.every()` to check if all the elements of the array are the same as the first one.\nElements in the array are compared using the strict comparison operator, which does not account for `NaN` self-inequality.\n\n",
          "codeBlocks": {
            "es6": "const allEqual = arr => arr.every(val => val === arr[0]);",
            "es5": "var allEqual = function allEqual(arr) {\n  return arr.every(function (val) {\n    return val === arr[0];\n  });\n};",
            "example": "allEqual([1, 2, 3, 4, 5, 6]); // false\nallEqual([1, 1, 1, 1]); // true"
          },
          "tags": [
            "array",
            "function",
            "beginner"
          ]
        },
        "meta": {
          "hash": "bda519858588ad61c9200acbb4ea5ce66630eb2ed7ceda96d12518b772b986b9",
          "firstSeen": "1533243788",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "any",
        "title": "any",
        "type": "snippet",
        "attributes": {
          "fileName": "any.md",
          "text": "Returns `true` if the provided predicate function returns `true` for at least one element in a collection, `false` otherwise.\n\nUse `Array.prototype.some()` to test if any elements in the collection return `true` based on `fn`.\nOmit the second argument, `fn`, to use `Boolean` as a default.\n\n",
          "codeBlocks": {
            "es6": "const any = (arr, fn = Boolean) => arr.some(fn);",
            "es5": "var any = function any(arr) {\n  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Boolean;\n  return arr.some(fn);\n};",
            "example": "any([0, 1, 2, 0], x => x >= 2); // true\nany([0, 0, 1, 0]); // true"
          },
          "tags": [
            "array",
            "function",
            "beginner"
          ]
        },
        "meta": {
          "hash": "061b791456507197b9be0ff9b791b830fe0b550823868075bbe04962501f83a3",
          "firstSeen": "1518601575",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "approximatelyEqual",
        "title": "approximatelyEqual",
        "type": "snippet",
        "attributes": {
          "fileName": "approximatelyEqual.md",
          "text": "Checks if two numbers are approximately equal to each other.\n\nUse `Math.abs()` to compare the absolute difference of the two values to `epsilon`.\nOmit the third parameter, `epsilon`, to use a default value of `0.001`.\n\n",
          "codeBlocks": {
            "es6": "const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;",
            "es5": "var approximatelyEqual = function approximatelyEqual(v1, v2) {\n  var epsilon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.001;\n  return Math.abs(v1 - v2) < epsilon;\n};",
            "example": "approximatelyEqual(Math.PI / 2.0, 1.5708); // true"
          },
          "tags": [
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "805f11e2f230c3a6b7dc590fcee27b4083b2188b6f1d0a8afb93868891cdba22",
          "firstSeen": "1518605233",
          "lastUpdated": "1565681352",
          "updateCount": 4,
          "authorCount": 3
        }
      },
      {
        "id": "arrayToCSV",
        "title": "arrayToCSV",
        "type": "snippet",
        "attributes": {
          "fileName": "arrayToCSV.md",
          "text": "Converts a 2D array to a comma-separated values (CSV) string.\n\nUse `Array.prototype.map()` and `Array.prototype.join(delimiter)` to combine individual 1D arrays (rows) into strings.\nUse `Array.prototype.join('\\n')` to combine all rows into a CSV string, separating each row with a newline.\nOmit the second argument, `delimiter`, to use a default delimiter of `,`.\n\n",
          "codeBlocks": {
            "es6": "const arrayToCSV = (arr, delimiter = ',') =>\n  arr\n    .map(v => v.map(x => (isNaN(x) ? `\"${x.replace(/\"/g, '\"\"')}\"` : x)).join(delimiter))\n    .join('\\n');",
            "es5": "var arrayToCSV = function arrayToCSV(arr) {\n  var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';\n  return arr.map(function (v) {\n    return v.map(function (x) {\n      return isNaN(x) ? \"\\\"\".concat(x.replace(/\"/g, '\"\"'), \"\\\"\") : x;\n    }).join(delimiter);\n  }).join('\\n');\n};",
            "example": "arrayToCSV([['a', 'b'], ['c', 'd']]); // '\"a\",\"b\"\\n\"c\",\"d\"'\narrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '\"a\";\"b\"\\n\"c\";\"d\"'\narrayToCSV([['a', '\"b\" great'], ['c', 3.1415]]); // '\"a\",\"\"\"b\"\" great\"\\n\"c\",3.1415'"
          },
          "tags": [
            "array",
            "string",
            "utility",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "aeabb3d1d2be2d44fd8a20da3b069fdd1a8ad963f27e3e1ae9f5e8b40a8908cb",
          "firstSeen": "1530120403",
          "lastUpdated": "1565681352",
          "updateCount": 11,
          "authorCount": 5
        }
      },
      {
        "id": "arrayToHtmlList",
        "title": "arrayToHtmlList",
        "type": "snippet",
        "attributes": {
          "fileName": "arrayToHtmlList.md",
          "text": "Converts the given array elements into `<li>` tags and appends them to the list of the given id.\n\nUse `Array.prototype.map()`, `document.querySelector()`, and an anonymous inner closure to create a list of html tags.\n\n",
          "codeBlocks": {
            "es6": "const arrayToHtmlList = (arr, listID) =>\n  (el => (\n    (el = document.querySelector('#' + listID)),\n    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))\n  ))();",
            "es5": "var arrayToHtmlList = function arrayToHtmlList(arr, listID) {\n  return function (el) {\n    return el = document.querySelector('#' + listID), el.innerHTML += arr.map(function (item) {\n      return \"<li>\".concat(item, \"</li>\");\n    }).join('');\n  }();\n};",
            "example": "arrayToHtmlList(['item 1', 'item 2'], 'myListID');"
          },
          "tags": [
            "browser",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "9d7e2db4a98688ab199ed2f75242bbff40a6083cc3c0ef483ed679c5d3878239",
          "firstSeen": "1513706585",
          "lastUpdated": "1565681352",
          "updateCount": 16,
          "authorCount": 9
        }
      },
      {
        "id": "ary",
        "title": "ary",
        "type": "snippet",
        "attributes": {
          "fileName": "ary.md",
          "text": "Creates a function that accepts up to `n` arguments, ignoring any additional arguments.\n\nCall the provided function, `fn`, with up to `n` arguments, using `Array.prototype.slice(0, n)` and the spread operator (`...`).\n\n",
          "codeBlocks": {
            "es6": "const ary = (fn, n) => (...args) => fn(...args.slice(0, n));",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar ary = function ary(fn, n) {\n  return function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return fn.apply(void 0, _toConsumableArray(args.slice(0, n)));\n  };\n};",
            "example": "const firstTwoMax = ary(Math.max, 2);\n[[2, 6, 'a'], [6, 4, 8], [10]].map(x => firstTwoMax(...x)); // [6, 6, 10]"
          },
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "533ab7f8259624322b5911b076d8e6fcd08f2fd396e9e0bec85449fc42769d9b",
          "firstSeen": "1516795194",
          "lastUpdated": "1578902643",
          "updateCount": 7,
          "authorCount": 5
        }
      },
      {
        "id": "atob",
        "title": "atob",
        "type": "snippet",
        "attributes": {
          "fileName": "atob.md",
          "text": "Decodes a string of data which has been encoded using base-64 encoding.\n\nCreate a `Buffer` for the given string with base-64 encoding and use `Buffer.toString('binary')` to return the decoded string.\n\n",
          "codeBlocks": {
            "es6": "const atob = str => Buffer.from(str, 'base64').toString('binary');",
            "es5": "var atob = function atob(str) {\n  return Buffer.from(str, 'base64').toString('binary');\n};",
            "example": "atob('Zm9vYmFy'); // 'foobar'"
          },
          "tags": [
            "node",
            "string",
            "utility",
            "beginner"
          ]
        },
        "meta": {
          "hash": "32988360d63d6d62251314a88d3f4482ec3a265d67154a92a86d4140bd61c54b",
          "firstSeen": "1516218201",
          "lastUpdated": "1565681352",
          "updateCount": 4,
          "authorCount": 3
        }
      },
      {
        "id": "attempt",
        "title": "attempt",
        "type": "snippet",
        "attributes": {
          "fileName": "attempt.md",
          "text": "Attempts to invoke a function with the provided arguments, returning either the result or the caught error object.\n\nUse a `try... catch` block to return either the result of the function or an appropriate error.\n\n",
          "codeBlocks": {
            "es6": "const attempt = (fn, ...args) => {\n  try {\n    return fn(...args);\n  } catch (e) {\n    return e instanceof Error ? e : new Error(e);\n  }\n};",
            "es5": "var attempt = function attempt(fn) {\n  try {\n    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n      args[_key - 1] = arguments[_key];\n    }\n\n    return fn.apply(void 0, args);\n  } catch (e) {\n    return e instanceof Error ? e : new Error(e);\n  }\n};",
            "example": "var elements = attempt(function(selector) {\n  return document.querySelectorAll(selector);\n}, '>_>');\nif (elements instanceof Error) elements = []; // elements = []"
          },
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "a511836ad4a5755d469af2e6a331cbcd85df14b6231bbed6a1b0fe44aee3d2cf",
          "firstSeen": "1517143480",
          "lastUpdated": "1565681352",
          "updateCount": 4,
          "authorCount": 3
        }
      },
      {
        "id": "average",
        "title": "average",
        "type": "snippet",
        "attributes": {
          "fileName": "average.md",
          "text": "Returns the average of two or more numbers.\n\nUse `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`, divide by the `length` of the array.\n\n",
          "codeBlocks": {
            "es6": "const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;",
            "es5": "var average = function average() {\n  for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {\n    nums[_key] = arguments[_key];\n  }\n\n  return nums.reduce(function (acc, val) {\n    return acc + val;\n  }, 0) / nums.length;\n};",
            "example": "average(...[1, 2, 3]); // 2\naverage(1, 2, 3); // 2"
          },
          "tags": [
            "math",
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "edf5c7f142e59e4467ca7142eaf0ac95957abcb0dad1d439484b2b70fe8be6d3",
          "firstSeen": "1514546989",
          "lastUpdated": "1565681352",
          "updateCount": 8,
          "authorCount": 6
        }
      },
      {
        "id": "averageBy",
        "title": "averageBy",
        "type": "snippet",
        "attributes": {
          "fileName": "averageBy.md",
          "text": "Returns the average of an array, after mapping each element to a value using the provided function.\n\nUse `Array.prototype.map()` to map each element to the value returned by `fn`, `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`, divide by the `length` of the array.\n\n",
          "codeBlocks": {
            "es6": "const averageBy = (arr, fn) =>\n  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /\n  arr.length;",
            "es5": "var averageBy = function averageBy(arr, fn) {\n  return arr.map(typeof fn === 'function' ? fn : function (val) {\n    return val[fn];\n  }).reduce(function (acc, val) {\n    return acc + val;\n  }, 0) / arr.length;\n};",
            "example": "averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5\naverageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5"
          },
          "tags": [
            "math",
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "7aa2052a6196029116ef9f2f7dda69b7d17344c0acc659ffedf002024b38d8b7",
          "firstSeen": "1515666354",
          "lastUpdated": "1565681352",
          "updateCount": 7,
          "authorCount": 4
        }
      },
      {
        "id": "bifurcate",
        "title": "bifurcate",
        "type": "snippet",
        "attributes": {
          "fileName": "bifurcate.md",
          "text": "Splits values into two groups. If an element in `filter` is truthy, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.\n\nUse `Array.prototype.reduce()` and `Array.prototype.push()` to add elements to groups, based on `filter`.\n\n",
          "codeBlocks": {
            "es6": "const bifurcate = (arr, filter) =>\n  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);",
            "es5": "var bifurcate = function bifurcate(arr, filter) {\n  return arr.reduce(function (acc, val, i) {\n    return acc[filter[i] ? 0 : 1].push(val), acc;\n  }, [[], []]);\n};",
            "example": "bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); // [ ['beep', 'boop', 'bar'], ['foo'] ]"
          },
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "a801974915906c11a30deef1baa3994f44f548f1ca1cf599aede4bb730543ec6",
          "firstSeen": "1518603187",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "bifurcateBy",
        "title": "bifurcateBy",
        "type": "snippet",
        "attributes": {
          "fileName": "bifurcateBy.md",
          "text": "Splits values into two groups according to a predicate function, which specifies which group an element in the input collection belongs to. If the predicate function returns a truthy value, the collection element belongs to the first group; otherwise, it belongs to the second group.\n\nUse `Array.prototype.reduce()` and `Array.prototype.push()` to add elements to groups, based on the value returned by `fn` for each element.\n\n",
          "codeBlocks": {
            "es6": "const bifurcateBy = (arr, fn) =>\n  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);",
            "es5": "var bifurcateBy = function bifurcateBy(arr, fn) {\n  return arr.reduce(function (acc, val, i) {\n    return acc[fn(val, i) ? 0 : 1].push(val), acc;\n  }, [[], []]);\n};",
            "example": "bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); // [ ['beep', 'boop', 'bar'], ['foo'] ]"
          },
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "db1b8580ab11b6ba05a7d47776b97d700c5a7e945ddc5ad9ca1f37e50f039b54",
          "firstSeen": "1518603187",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "bind",
        "title": "bind",
        "type": "snippet",
        "attributes": {
          "fileName": "bind.md",
          "text": "Creates a function that invokes `fn` with a given context, optionally adding any additional supplied parameters to the beginning of the arguments.\n\nReturn a `function` that uses `Function.prototype.apply()` to apply the given `context` to `fn`.\nUse `Array.prototype.concat()` to prepend any additional supplied parameters to the arguments.\n\n",
          "codeBlocks": {
            "es6": "const bind = (fn, context, ...boundArgs) => (...args) => fn.apply(context, [...boundArgs, ...args]);",
            "es5": "var bind = function bind(fn, context) {\n  for (var _len = arguments.length, boundArgs = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    boundArgs[_key - 2] = arguments[_key];\n  }\n\n  return function () {\n    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      args[_key2] = arguments[_key2];\n    }\n\n    return fn.apply(context, [].concat(boundArgs, args));\n  };\n};",
            "example": "function greet(greeting, punctuation) {\n  return greeting + ' ' + this.user + punctuation;\n}\nconst freddy = { user: 'fred' };\nconst freddyBound = bind(greet, freddy);\nconsole.log(freddyBound('hi', '!')); // 'hi fred!'"
          },
          "tags": [
            "function",
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "d15851c4e6991e41014768c3f2dd28df71615e44180c732b67eed1d162ea4b95",
          "firstSeen": "1516796089",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 5
        }
      },
      {
        "id": "bindAll",
        "title": "bindAll",
        "type": "snippet",
        "attributes": {
          "fileName": "bindAll.md",
          "text": "Binds methods of an object to the object itself, overwriting the existing method.\n\nUse `Array.prototype.forEach()` to return a `function` that uses `Function.prototype.apply()` to apply the given context (`obj`) to `fn` for each function specified.\n\n",
          "codeBlocks": {
            "es6": "const bindAll = (obj, ...fns) =>\n  fns.forEach(\n    fn => (\n      (f = obj[fn]),\n      (obj[fn] = function() {\n        return f.apply(obj);\n      })\n    )\n  );",
            "es5": "var bindAll = function bindAll(obj) {\n  for (var _len = arguments.length, fns = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    fns[_key - 1] = arguments[_key];\n  }\n\n  return fns.forEach(function (fn) {\n    return f = obj[fn], obj[fn] = function () {\n      return f.apply(obj);\n    };\n  });\n};",
            "example": "var view = {\n  label: 'docs',\n  click: function() {\n    console.log('clicked ' + this.label);\n  }\n};\nbindAll(view, 'click');\njQuery(element).on('click', view.click); // Logs 'clicked docs' when clicked."
          },
          "tags": [
            "object",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "e159b77ba0bde0f38d339348b9a69b4702cf036abd767777507159aa75ce151b",
          "firstSeen": "1516968893",
          "lastUpdated": "1565681352",
          "updateCount": 9,
          "authorCount": 5
        }
      },
      {
        "id": "bindKey",
        "title": "bindKey",
        "type": "snippet",
        "attributes": {
          "fileName": "bindKey.md",
          "text": "Creates a function that invokes the method at a given key of an object, optionally adding any additional supplied parameters to the beginning of the arguments.\n\nReturn a `function` that uses `Function.prototype.apply()` to bind `context[fn]` to `context`.\nUse the spread operator (`...`) to prepend any additional supplied parameters to the arguments.\n\n",
          "codeBlocks": {
            "es6": "const bindKey = (context, fn, ...boundArgs) => (...args) =>\n  context[fn].apply(context, [...boundArgs, ...args]);",
            "es5": "var bindKey = function bindKey(context, fn) {\n  for (var _len = arguments.length, boundArgs = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    boundArgs[_key - 2] = arguments[_key];\n  }\n\n  return function () {\n    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      args[_key2] = arguments[_key2];\n    }\n\n    return context[fn].apply(context, [].concat(boundArgs, args));\n  };\n};",
            "example": "const freddy = {\n  user: 'fred',\n  greet: function(greeting, punctuation) {\n    return greeting + ' ' + this.user + punctuation;\n  }\n};\nconst freddyBound = bindKey(freddy, 'greet');\nconsole.log(freddyBound('hi', '!')); // 'hi fred!'"
          },
          "tags": [
            "function",
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "e854f774dd81cdb291fb57b276a61e5d7f7ab13a6aae490c89c0e00acde820b4",
          "firstSeen": "1516796563",
          "lastUpdated": "1565681352",
          "updateCount": 8,
          "authorCount": 5
        }
      },
      {
        "id": "binomialCoefficient",
        "title": "binomialCoefficient",
        "type": "snippet",
        "attributes": {
          "fileName": "binomialCoefficient.md",
          "text": "Evaluates the binomial coefficient of two integers `n` and `k`.\n\nUse `Number.isNaN()` to check if any of the two values is `NaN`.\nCheck if `k` is less than `0`, greater than or equal to `n`, equal to `1` or `n - 1` and return the appropriate result.\nCheck if `n - k` is less than `k` and switch their values accordingly.\nLoop from `2` through `k` and calculate the binomial coefficient.\nUse `Math.round()` to account for rounding errors in the calculation.\n\n",
          "codeBlocks": {
            "es6": "const binomialCoefficient = (n, k) => {\n  if (Number.isNaN(n) || Number.isNaN(k)) return NaN;\n  if (k < 0 || k > n) return 0;\n  if (k === 0 || k === n) return 1;\n  if (k === 1 || k === n - 1) return n;\n  if (n - k < k) k = n - k;\n  let res = n;\n  for (let j = 2; j <= k; j++) res *= (n - j + 1) / j;\n  return Math.round(res);\n};",
            "es5": "var binomialCoefficient = function binomialCoefficient(n, k) {\n  if (Number.isNaN(n) || Number.isNaN(k)) return NaN;\n  if (k < 0 || k > n) return 0;\n  if (k === 0 || k === n) return 1;\n  if (k === 1 || k === n - 1) return n;\n  if (n - k < k) k = n - k;\n  var res = n;\n\n  for (var j = 2; j <= k; j++) {\n    res *= (n - j + 1) / j;\n  }\n\n  return Math.round(res);\n};",
            "example": "binomialCoefficient(8, 2); // 28"
          },
          "tags": [
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "0f36f6b8c7f803a55d8e888c8794cacba02db79c4d54043a8ddc71249c2f8a9f",
          "firstSeen": "1518604442",
          "lastUpdated": "1565681352",
          "updateCount": 3,
          "authorCount": 2
        }
      },
      {
        "id": "bottomVisible",
        "title": "bottomVisible",
        "type": "snippet",
        "attributes": {
          "fileName": "bottomVisible.md",
          "text": "Returns `true` if the bottom of the page is visible, `false` otherwise.\n\nUse `scrollY`, `scrollHeight` and `clientHeight` to determine if the bottom of the page is visible.\n\n",
          "codeBlocks": {
            "es6": "const bottomVisible = () =>\n  document.documentElement.clientHeight + window.scrollY >=\n  (document.documentElement.scrollHeight || document.documentElement.clientHeight);",
            "es5": "var bottomVisible = function bottomVisible() {\n  return document.documentElement.clientHeight + window.scrollY >= (document.documentElement.scrollHeight || document.documentElement.clientHeight);\n};",
            "example": "bottomVisible(); // true"
          },
          "tags": [
            "browser",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "9c2b4a28ae4f39cc034dc75e98d2f405af6113541f796041f142b85e90e27800",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 8,
          "authorCount": 5
        }
      },
      {
        "id": "btoa",
        "title": "btoa",
        "type": "snippet",
        "attributes": {
          "fileName": "btoa.md",
          "text": "Creates a base-64 encoded ASCII string from a String object in which each character in the string is treated as a byte of binary data.\n\nCreate a `Buffer` for the given string with binary encoding and use `Buffer.toString('base64')` to return the encoded string.\n\n",
          "codeBlocks": {
            "es6": "const btoa = str => Buffer.from(str, 'binary').toString('base64');",
            "es5": "var btoa = function btoa(str) {\n  return Buffer.from(str, 'binary').toString('base64');\n};",
            "example": "btoa('foobar'); // 'Zm9vYmFy'"
          },
          "tags": [
            "node",
            "string",
            "utility",
            "beginner"
          ]
        },
        "meta": {
          "hash": "1c7836009987b8b1097b54a84c38144f6cb643477f08f00b1a37e274cf0c9f78",
          "firstSeen": "1516218201",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 3
        }
      },
      {
        "id": "byteSize",
        "title": "byteSize",
        "type": "snippet",
        "attributes": {
          "fileName": "byteSize.md",
          "text": "Returns the length of a string in bytes.\n\nConvert a given string to a [`Blob` Object](https://developer.mozilla.org/en-US/docs/Web/API/Blob) and find its `size`.\n\n",
          "codeBlocks": {
            "es6": "const byteSize = str => new Blob([str]).size;",
            "es5": "var byteSize = function byteSize(str) {\n  return new Blob([str]).size;\n};",
            "example": "byteSize('😀'); // 4\nbyteSize('Hello World'); // 11"
          },
          "tags": [
            "string",
            "beginner"
          ]
        },
        "meta": {
          "hash": "c347c3d7b5fdc40df6d480810318d1ba644a74719bda3708b3ee3290f0ff953f",
          "firstSeen": "1514550634",
          "lastUpdated": "1565681352",
          "updateCount": 8,
          "authorCount": 5
        }
      },
      {
        "id": "call",
        "title": "call",
        "type": "snippet",
        "attributes": {
          "fileName": "call.md",
          "text": "Given a key and a set of arguments, call them when given a context. Primarily useful in composition.\n\nUse a closure to call a stored key with stored arguments.\n\n",
          "codeBlocks": {
            "es6": "const call = (key, ...args) => context => context[key](...args);",
            "es5": "var call = function call(key) {\n  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    args[_key - 1] = arguments[_key];\n  }\n\n  return function (context) {\n    return context[key].apply(context, args);\n  };\n};",
            "example": "Promise.resolve([1, 2, 3])\r\n  .then(call('map', x => 2 * x))\r\n  .then(console.log); // [ 2, 4, 6 ]\r\nconst map = call.bind(null, 'map');\r\nPromise.resolve([1, 2, 3])\r\n  .then(map(x => 2 * x))\r\n  .then(console.log); // [ 2, 4, 6 ]"
          },
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "8b606a9b76e65d602238eb487d504dda0f1fe8bba9166ae2accbc7984c8d6530",
          "firstSeen": "1513972470",
          "lastUpdated": "1578903585",
          "updateCount": 12,
          "authorCount": 6
        }
      },
      {
        "id": "capitalize",
        "title": "capitalize",
        "type": "snippet",
        "attributes": {
          "fileName": "capitalize.md",
          "text": "Capitalizes the first letter of a string.\n\nUse array destructuring and `String.prototype.toUpperCase()` to capitalize first letter, `...rest` to get array of characters after first letter and then `Array.prototype.join('')` to make it a string again.\nOmit the `lowerRest` parameter to keep the rest of the string intact, or set it to `true` to convert to lowercase.\n\n",
          "codeBlocks": {
            "es6": "const capitalize = ([first, ...rest], lowerRest = false) =>\n  first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));",
            "es5": "function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar capitalize = function capitalize(_ref) {\n  var _ref2 = _toArray(_ref),\n      first = _ref2[0],\n      rest = _ref2.slice(1);\n\n  var lowerRest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  return first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));\n};",
            "example": "capitalize('fooBar'); // 'FooBar'\ncapitalize('fooBar', true); // 'Foobar'"
          },
          "tags": [
            "string",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "0c94a28b30fdfe112c8981a86868917d24cc5ddd1c84212a29783cec2d3a5ab4",
          "firstSeen": "1513521691",
          "lastUpdated": "1565681352",
          "updateCount": 12,
          "authorCount": 6
        }
      },
      {
        "id": "capitalizeEveryWord",
        "title": "capitalizeEveryWord",
        "type": "snippet",
        "attributes": {
          "fileName": "capitalizeEveryWord.md",
          "text": "Capitalizes the first letter of every word in a string.\n\nUse `String.prototype.replace()` to match the first character of each word and `String.prototype.toUpperCase()` to capitalize it.\n\n",
          "codeBlocks": {
            "es6": "const capitalizeEveryWord = str => str.replace(/\\b[a-z]/g, char => char.toUpperCase());",
            "es5": "var capitalizeEveryWord = function capitalizeEveryWord(str) {\n  return str.replace(/\\b[a-z]/g, function (_char) {\n    return _char.toUpperCase();\n  });\n};",
            "example": "capitalizeEveryWord('hello world!'); // 'Hello World!'"
          },
          "tags": [
            "string",
            "regexp",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "aaf38afdc8033b2070b0e29ddb380db8570bbed490c6f39f55ff95167cdded8e",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 8,
          "authorCount": 5
        }
      },
      {
        "id": "castArray",
        "title": "castArray",
        "type": "snippet",
        "attributes": {
          "fileName": "castArray.md",
          "text": "Casts the provided value as an array if it's not one.\n\nUse `Array.prototype.isArray()` to determine if `val` is an array and return it as-is or encapsulated in an array accordingly.\n\n",
          "codeBlocks": {
            "es6": "const castArray = val => (Array.isArray(val) ? val : [val]);",
            "es5": "var castArray = function castArray(val) {\n  return Array.isArray(val) ? val : [val];\n};",
            "example": "castArray('foo'); // ['foo']\ncastArray([1]); // [1]"
          },
          "tags": [
            "utility",
            "array",
            "type",
            "beginner"
          ]
        },
        "meta": {
          "hash": "307add91ea4d5c2a122256f799120f580ac235567523dddeeadd6500f1e81e94",
          "firstSeen": "1516733652",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "chainAsync",
        "title": "chainAsync",
        "type": "snippet",
        "attributes": {
          "fileName": "chainAsync.md",
          "text": "Chains asynchronous functions.\n\nLoop through an array of functions containing asynchronous events, calling `next` when each asynchronous event has completed.\n\n",
          "codeBlocks": {
            "es6": "const chainAsync = fns => {\n  let curr = 0;\n  const last = fns[fns.length - 1];\n  const next = () => {\n    const fn = fns[curr++];\n    fn === last ? fn() : fn(next);\n  };\n  next();\n};",
            "es5": "var chainAsync = function chainAsync(fns) {\n  var curr = 0;\n  var last = fns[fns.length - 1];\n\n  var next = function next() {\n    var fn = fns[curr++];\n    fn === last ? fn() : fn(next);\n  };\n\n  next();\n};",
            "example": "chainAsync([\n  next => {\n    console.log('0 seconds');\n    setTimeout(next, 1000);\n  },\n  next => {\n    console.log('1 second');\n    setTimeout(next, 1000);\n  },\n  () => {\n    console.log('2 second');\n  }\n]);"
          },
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "cd48981af62f6ba75694f796fc5537e6af53a58045465ebd52f8bdd1a1f892af",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 10,
          "authorCount": 6
        }
      },
      {
        "id": "checkProp",
        "title": "checkProp",
        "type": "snippet",
        "attributes": {
          "fileName": "checkProp.md",
          "text": "Given a `predicate` function and a `prop` string, this curried function will then take an `object` to inspect by calling the property and passing it to the predicate.\n\nSummon `prop` on `obj`, pass it to a provided `predicate` function and return a masked boolean.\n\n",
          "codeBlocks": {
            "es6": "const checkProp = (predicate, prop) => obj => !!predicate(obj[prop]);",
            "es5": "var checkProp = function checkProp(predicate, prop) {\n  return function (obj) {\n    return !!predicate(obj[prop]);\n  };\n};",
            "example": "const lengthIs4 = checkProp(l => l === 4, 'length');\nlengthIs4([]); // false\nlengthIs4([1, 2, 3, 4]); // true\nlengthIs4(new Set([1, 2, 3, 4])); // false (Set uses Size, not length)\n\nconst session = { user: {} };\nconst validUserSession = checkProp(u => u.active && !u.disabled, 'user');\n\nvalidUserSession(session); // false\n\nsession.user.active = true;\nvalidUserSession(session); // true\n\nconst noLength = checkProp(l => l === undefined, 'length');\nnoLength([]); // false\nnoLength({}); // true\nnoLength(new Set()); // true"
          },
          "tags": [
            "function",
            "object",
            "utility",
            "beginner"
          ]
        },
        "meta": {
          "hash": "52eca7b91d4205abe619c672895a773fc7ed7c2e151fd37e83ceda54ee74ad71",
          "firstSeen": "1552787580",
          "lastUpdated": "1577784150",
          "updateCount": 77,
          "authorCount": 7
        }
      },
      {
        "id": "chunk",
        "title": "chunk",
        "type": "snippet",
        "attributes": {
          "fileName": "chunk.md",
          "text": "Chunks an array into smaller arrays of a specified size.\n\nUse `Array.from()` to create a new array, that fits the number of chunks that will be produced.\nUse `Array.prototype.slice()` to map each element of the new array to a chunk the length of `size`.\nIf the original array can't be split evenly, the final chunk will contain the remaining elements.\n\n",
          "codeBlocks": {
            "es6": "const chunk = (arr, size) =>\n  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>\n    arr.slice(i * size, i * size + size)\n  );",
            "es5": "var chunk = function chunk(arr, size) {\n  return Array.from({\n    length: Math.ceil(arr.length / size)\n  }, function (v, i) {\n    return arr.slice(i * size, i * size + size);\n  });\n};",
            "example": "chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]"
          },
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "4af3783b8b490cdf70853b0a01780244556a18a7398f5bef123e4f39edbadebe",
          "firstSeen": "1513521691",
          "lastUpdated": "1565681352",
          "updateCount": 8,
          "authorCount": 5
        }
      },
      {
        "id": "clampNumber",
        "title": "clampNumber",
        "type": "snippet",
        "attributes": {
          "fileName": "clampNumber.md",
          "text": "Clamps `num` within the inclusive range specified by the boundary values `a` and `b`.\n\nIf `num` falls within the range, return `num`.\nOtherwise, return the nearest number in the range.\n\n",
          "codeBlocks": {
            "es6": "const clampNumber = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));",
            "es5": "var clampNumber = function clampNumber(num, a, b) {\n  return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));\n};",
            "example": "clampNumber(2, 3, 5); // 3\nclampNumber(1, -1, -5); // -1"
          },
          "tags": [
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "32fc5181c38c6d5bb16ac7373b68ad971c6b3cff6b80aee8cb69c296d47d0607",
          "firstSeen": "1513790358",
          "lastUpdated": "1565681352",
          "updateCount": 13,
          "authorCount": 7
        }
      },
      {
        "id": "cloneRegExp",
        "title": "cloneRegExp",
        "type": "snippet",
        "attributes": {
          "fileName": "cloneRegExp.md",
          "text": "Clones a regular expression.\n\nUse `new RegExp()`, `RegExp.source` and `RegExp.flags` to clone the given regular expression.\n\n",
          "codeBlocks": {
            "es6": "const cloneRegExp = regExp => new RegExp(regExp.source, regExp.flags);",
            "es5": "var cloneRegExp = function cloneRegExp(regExp) {\n  return new RegExp(regExp.source, regExp.flags);\n};",
            "example": "const regExp = /lorem ipsum/gi;\nconst regExp2 = cloneRegExp(regExp); // /lorem ipsum/gi"
          },
          "tags": [
            "utility",
            "regexp",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "3b7e9a506c229c792da093336574e3524cd1a8c794d18fc450f469f171ff83cf",
          "firstSeen": "1514828747",
          "lastUpdated": "1565681352",
          "updateCount": 3,
          "authorCount": 2
        }
      },
      {
        "id": "coalesce",
        "title": "coalesce",
        "type": "snippet",
        "attributes": {
          "fileName": "coalesce.md",
          "text": "Returns the first defined, non-null argument.\n\nUse `Array.prototype.find()` and `Array.prototype.includes()` to find the first value that is not equal to `undefined` or `null`.\n\n",
          "codeBlocks": {
            "es6": "const coalesce = (...args) => args.find(v => ![undefined, null].includes(v));",
            "es5": "var coalesce = function coalesce() {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  return args.find(function (v) {\n    return ![undefined, null].includes(v);\n  });\n};",
            "example": "coalesce(null, undefined, '', NaN, 'Waldo'); // ''"
          },
          "tags": [
            "utility",
            "beginner"
          ]
        },
        "meta": {
          "hash": "7c0db11447039e7d9bce2ed420ca1f69671b25928d272596587192a84aa78e31",
          "firstSeen": "1513498135",
          "lastUpdated": "1583442418",
          "updateCount": 11,
          "authorCount": 6
        }
      },
      {
        "id": "coalesceFactory",
        "title": "coalesceFactory",
        "type": "snippet",
        "attributes": {
          "fileName": "coalesceFactory.md",
          "text": "Returns a customized coalesce function that returns the first argument that returns `true` from the provided argument validation function.\n\nUse `Array.prototype.find()` to return the first argument that returns `true` from the provided argument validation function.\n\n",
          "codeBlocks": {
            "es6": "const coalesceFactory = valid => (...args) => args.find(valid);",
            "es5": "var coalesceFactory = function coalesceFactory(valid) {\n  return function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return args.find(valid);\n  };\n};",
            "example": "const customCoalesce = coalesceFactory(_ => ![null, undefined, '', NaN].includes(_));\ncustomCoalesce(undefined, null, NaN, '', 'Waldo'); // \"Waldo\""
          },
          "tags": [
            "utility",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "b85ec57d815ff34ba3906195440fce5d2ad9f33b64d7d96159c0e1125fee283c",
          "firstSeen": "1513592136",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 5
        }
      },
      {
        "id": "collectInto",
        "title": "collectInto",
        "type": "snippet",
        "attributes": {
          "fileName": "collectInto.md",
          "text": "Changes a function that accepts an array into a variadic function.\n\nGiven a function, return a closure that collects all inputs into an array-accepting function.\n\n",
          "codeBlocks": {
            "es6": "const collectInto = fn => (...args) => fn(args);",
            "es5": "var collectInto = function collectInto(fn) {\n  return function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return fn(args);\n  };\n};",
            "example": "const Pall = collectInto(Promise.all.bind(Promise));\r\nlet p1 = Promise.resolve(1);\r\nlet p2 = Promise.resolve(2);\r\nlet p3 = new Promise(resolve => setTimeout(resolve, 2000, 3));\r\nPall(p1, p2, p3).then(console.log); // [1, 2, 3] (after about 2 seconds)"
          },
          "tags": [
            "function",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "cbf8e15f8c0f47c8e38f6f070ff90ac694aab206cc57ceef7e457d93d794e69c",
          "firstSeen": "1513912116",
          "lastUpdated": "1578903585",
          "updateCount": 14,
          "authorCount": 6
        }
      },
      {
        "id": "colorize",
        "title": "colorize",
        "type": "snippet",
        "attributes": {
          "fileName": "colorize.md",
          "text": "Add special characters to text to print in color in the console (combined with `console.log()`).\n\nUse template literals and special characters to add the appropriate color code to the string output.\nFor background colors, add a special character that resets the background color at the end of the string.\n\n",
          "codeBlocks": {
            "es6": "const colorize = (...args) => ({\n  black: `\\x1b[30m${args.join(' ')}`,\n  red: `\\x1b[31m${args.join(' ')}`,\n  green: `\\x1b[32m${args.join(' ')}`,\n  yellow: `\\x1b[33m${args.join(' ')}`,\n  blue: `\\x1b[34m${args.join(' ')}`,\n  magenta: `\\x1b[35m${args.join(' ')}`,\n  cyan: `\\x1b[36m${args.join(' ')}`,\n  white: `\\x1b[37m${args.join(' ')}`,\n  bgBlack: `\\x1b[40m${args.join(' ')}\\x1b[0m`,\n  bgRed: `\\x1b[41m${args.join(' ')}\\x1b[0m`,\n  bgGreen: `\\x1b[42m${args.join(' ')}\\x1b[0m`,\n  bgYellow: `\\x1b[43m${args.join(' ')}\\x1b[0m`,\n  bgBlue: `\\x1b[44m${args.join(' ')}\\x1b[0m`,\n  bgMagenta: `\\x1b[45m${args.join(' ')}\\x1b[0m`,\n  bgCyan: `\\x1b[46m${args.join(' ')}\\x1b[0m`,\n  bgWhite: `\\x1b[47m${args.join(' ')}\\x1b[0m`\n});",
            "es5": "var colorize = function colorize() {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  return {\n    black: \"\\x1B[30m\".concat(args.join(' ')),\n    red: \"\\x1B[31m\".concat(args.join(' ')),\n    green: \"\\x1B[32m\".concat(args.join(' ')),\n    yellow: \"\\x1B[33m\".concat(args.join(' ')),\n    blue: \"\\x1B[34m\".concat(args.join(' ')),\n    magenta: \"\\x1B[35m\".concat(args.join(' ')),\n    cyan: \"\\x1B[36m\".concat(args.join(' ')),\n    white: \"\\x1B[37m\".concat(args.join(' ')),\n    bgBlack: \"\\x1B[40m\".concat(args.join(' '), \"\\x1B[0m\"),\n    bgRed: \"\\x1B[41m\".concat(args.join(' '), \"\\x1B[0m\"),\n    bgGreen: \"\\x1B[42m\".concat(args.join(' '), \"\\x1B[0m\"),\n    bgYellow: \"\\x1B[43m\".concat(args.join(' '), \"\\x1B[0m\"),\n    bgBlue: \"\\x1B[44m\".concat(args.join(' '), \"\\x1B[0m\"),\n    bgMagenta: \"\\x1B[45m\".concat(args.join(' '), \"\\x1B[0m\"),\n    bgCyan: \"\\x1B[46m\".concat(args.join(' '), \"\\x1B[0m\"),\n    bgWhite: \"\\x1B[47m\".concat(args.join(' '), \"\\x1B[0m\")\n  };\n};",
            "example": "console.log(colorize('foo').red); // 'foo' (red letters)\nconsole.log(colorize('foo', 'bar').bgBlue); // 'foo bar' (blue background)\nconsole.log(colorize(colorize('foo').yellow, colorize('foo').green).bgWhite); // 'foo bar' (first word in yellow letters, second word in green letters, white background for both)"
          },
          "tags": [
            "node",
            "utility",
            "string",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "1ce726b8cbc9f87ff8ff6d68e0678325523b1118fa038b97f53ddad9031dbe23",
          "firstSeen": "1515843419",
          "lastUpdated": "1565681352",
          "updateCount": 4,
          "authorCount": 3
        }
      },
      {
        "id": "compact",
        "title": "compact",
        "type": "snippet",
        "attributes": {
          "fileName": "compact.md",
          "text": "Removes falsy values from an array.\n\nUse `Array.prototype.filter()` to filter out falsy values (`false`, `null`, `0`, `\"\"`, `undefined`, and `NaN`).\n\n",
          "codeBlocks": {
            "es6": "const compact = arr => arr.filter(Boolean);",
            "es5": "var compact = function compact(arr) {\n  return arr.filter(Boolean);\n};",
            "example": "compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); // [ 1, 2, 3, 'a', 's', 34 ]"
          },
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "fdd7fd5631e5c1b541eff445f3388488dc060d435e339d9c0f1f257d5733e2fe",
          "firstSeen": "1513232355",
          "lastUpdated": "1565681352",
          "updateCount": 13,
          "authorCount": 9
        }
      },
      {
        "id": "compactWhitespace",
        "title": "compactWhitespace",
        "type": "snippet",
        "attributes": {
          "fileName": "compactWhitespace.md",
          "text": "Returns a string with whitespaces compacted.\n\nUse `String.prototype.replace()` with a regular expression to replace all occurrences of 2 or more whitespace characters with a single space.\n\n",
          "codeBlocks": {
            "es6": "const compactWhitespace = str => str.replace(/\\s{2,}/g, ' ');",
            "es5": "var compactWhitespace = function compactWhitespace(str) {\n  return str.replace(/\\s{2,}/g, ' ');\n};",
            "example": "compactWhitespace('Lorem    Ipsum'); // 'Lorem Ipsum'\ncompactWhitespace('Lorem \\n Ipsum'); // 'Lorem Ipsum'"
          },
          "tags": [
            "string",
            "regexp",
            "beginner"
          ]
        },
        "meta": {
          "hash": "7b6007e94c262a97cfab69ddb111d101103c095dbf2fd7680053d8733e6f2914",
          "firstSeen": "1544634693",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "compose",
        "title": "compose",
        "type": "snippet",
        "attributes": {
          "fileName": "compose.md",
          "text": "Performs right-to-left function composition.\n\nUse `Array.prototype.reduce()` to perform right-to-left function composition.\nThe last (rightmost) function can accept one or more arguments; the remaining functions must be unary.\n\n",
          "codeBlocks": {
            "es6": "const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));",
            "es5": "var compose = function compose() {\n  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {\n    fns[_key] = arguments[_key];\n  }\n\n  return fns.reduce(function (f, g) {\n    return function () {\n      return f(g.apply(void 0, arguments));\n    };\n  });\n};",
            "example": "const add5 = x => x + 5;\nconst multiply = (x, y) => x * y;\nconst multiplyAndAdd5 = compose(\n  add5,\n  multiply\n);\nmultiplyAndAdd5(5, 2); // 15"
          },
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "200b26d1e1016c56ba796665b94266e57127b6bcf23bb00b702df01676f95443",
          "firstSeen": "1513521691",
          "lastUpdated": "1565681352",
          "updateCount": 11,
          "authorCount": 6
        }
      },
      {
        "id": "composeRight",
        "title": "composeRight",
        "type": "snippet",
        "attributes": {
          "fileName": "composeRight.md",
          "text": "Performs left-to-right function composition.\n\nUse `Array.prototype.reduce()` to perform left-to-right function composition.\nThe first (leftmost) function can accept one or more arguments; the remaining functions must be unary.\n\n",
          "codeBlocks": {
            "es6": "const composeRight = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));",
            "es5": "var composeRight = function composeRight() {\n  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {\n    fns[_key] = arguments[_key];\n  }\n\n  return fns.reduce(function (f, g) {\n    return function () {\n      return g(f.apply(void 0, arguments));\n    };\n  });\n};",
            "example": "const add = (x, y) => x + y;\nconst square = x => x * x;\nconst addAndSquare = composeRight(add, square);\naddAndSquare(1, 2); // 9"
          },
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "90b2780517322e1c847b7e7ae5325f1e69765eb22b72cf3472e1cd7d07f06347",
          "firstSeen": "1516738376",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "containsWhitespace",
        "title": "containsWhitespace",
        "type": "snippet",
        "attributes": {
          "fileName": "containsWhitespace.md",
          "text": "Returns `true` if the given string contains any whitespace characters, `false` otherwise.\n\nUse `RegExp.prototype.test()` with an appropriate regular expression to check if the given string contains any whitespace characters.\n\n",
          "codeBlocks": {
            "es6": "const containsWhitespace = str => /\\s/.test(str);",
            "es5": "var containsWhitespace = function containsWhitespace(str) {\n  return /\\s/.test(str);\n};",
            "example": "containsWhitespace('lorem'); // false\ncontainsWhitespace('lorem ipsum'); // true"
          },
          "tags": [
            "string",
            "regexp",
            "beginner"
          ]
        },
        "meta": {
          "hash": "47f23b75a3d6600f5eb67b2a8535e83b6467c5f63e6184c774ddaa2421f198a3",
          "firstSeen": "1585132633",
          "lastUpdated": "1585132633",
          "updateCount": 2,
          "authorCount": 2
        }
      },
      {
        "id": "converge",
        "title": "converge",
        "type": "snippet",
        "attributes": {
          "fileName": "converge.md",
          "text": "Accepts a converging function and a list of branching functions and returns a function that applies each branching function to the arguments and the results of the branching functions are passed as arguments to the converging function.\n\nUse `Array.prototype.map()` and `Function.prototype.apply()` to apply each function to the given arguments.\nUse the spread operator (`...`) to call `coverger` with the results of all other functions.\n\n",
          "codeBlocks": {
            "es6": "const converge = (converger, fns) => (...args) => converger(...fns.map(fn => fn.apply(null, args)));",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar converge = function converge(converger, fns) {\n  return function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return converger.apply(void 0, _toConsumableArray(fns.map(function (fn) {\n      return fn.apply(null, args);\n    })));\n  };\n};",
            "example": "const average = converge((a, b) => a / b, [\n  arr => arr.reduce((a, v) => a + v, 0),\n  arr => arr.length\n]);\naverage([1, 2, 3, 4, 5, 6, 7]); // 4"
          },
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "37cf3e2c4a2b41cb94eab31680088761236be2fc817c2c4322a0f9f1a16ae475",
          "firstSeen": "1517998984",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "copyToClipboard",
        "title": "copyToClipboard",
        "type": "snippet",
        "attributes": {
          "fileName": "copyToClipboard.md",
          "text": "Copy a string to the clipboard. \nOnly works as a result of user action (i.e. inside a `click` event listener).\n\n⚠️ **NOTICE:** The same functionality can be easily implemented by using the new asynchronous Clipboard API, which is still experimental but should be used in the future instead of this snippet. Find out more about it [here](https://github.com/w3c/clipboard-apis/blob/master/explainer.adoc#writing-to-the-clipboard).\n\nCreate a new `<textarea>` element, fill it with the supplied data and add it to the HTML document.\nUse `Selection.getRangeAt()`to store the selected range (if any).\nUse `document.execCommand('copy')` to copy to the clipboard.\nRemove the `<textarea>` element from the HTML document.\nFinally, use `Selection().addRange()` to recover the original selected range (if any).\n\n",
          "codeBlocks": {
            "es6": "const copyToClipboard = str => {\n  const el = document.createElement('textarea');\n  el.value = str;\n  el.setAttribute('readonly', '');\n  el.style.position = 'absolute';\n  el.style.left = '-9999px';\n  document.body.appendChild(el);\n  const selected =\n    document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;\n  el.select();\n  document.execCommand('copy');\n  document.body.removeChild(el);\n  if (selected) {\n    document.getSelection().removeAllRanges();\n    document.getSelection().addRange(selected);\n  }\n};",
            "es5": "var copyToClipboard = function copyToClipboard(str) {\n  var el = document.createElement('textarea');\n  el.value = str;\n  el.setAttribute('readonly', '');\n  el.style.position = 'absolute';\n  el.style.left = '-9999px';\n  document.body.appendChild(el);\n  var selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;\n  el.select();\n  document.execCommand('copy');\n  document.body.removeChild(el);\n\n  if (selected) {\n    document.getSelection().removeAllRanges();\n    document.getSelection().addRange(selected);\n  }\n};",
            "example": "copyToClipboard('Lorem ipsum'); // 'Lorem ipsum' copied to clipboard."
          },
          "tags": [
            "browser",
            "string",
            "advanced"
          ]
        },
        "meta": {
          "hash": "33014c31be5dadcdb16c56726db905ff10b9878a5f4e85f23d9ee303e71f0039",
          "firstSeen": "1514713233",
          "lastUpdated": "1574366564",
          "updateCount": 13,
          "authorCount": 4
        }
      },
      {
        "id": "countBy",
        "title": "countBy",
        "type": "snippet",
        "attributes": {
          "fileName": "countBy.md",
          "text": "Groups the elements of an array based on the given function and returns the count of elements in each group.\n\nUse `Array.prototype.map()` to map the values of an array to a function or property name.\nUse `Array.prototype.reduce()` to create an object, where the keys are produced from the mapped results.\n\n",
          "codeBlocks": {
            "es6": "const countBy = (arr, fn) =>\n  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => {\n    acc[val] = (acc[val] || 0) + 1;\n    return acc;\n  }, {});",
            "es5": "var countBy = function countBy(arr, fn) {\n  return arr.map(typeof fn === 'function' ? fn : function (val) {\n    return val[fn];\n  }).reduce(function (acc, val) {\n    acc[val] = (acc[val] || 0) + 1;\n    return acc;\n  }, {});\n};",
            "example": "countBy([6.1, 4.2, 6.3], Math.floor); // {4: 1, 6: 2}\ncountBy(['one', 'two', 'three'], 'length'); // {3: 2, 5: 1}"
          },
          "tags": [
            "array",
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "d5c19dc814e9776782419f3e560dd132c1fdbf0493162e8a7a05b6ac84991f87",
          "firstSeen": "1515671153",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "counter",
        "title": "counter",
        "type": "snippet",
        "attributes": {
          "fileName": "counter.md",
          "text": "Creates a counter with the specified range, step and duration for the specified selector.\n\nCheck if `step` has the proper sign and change it accordingly.\nUse `setInterval()` in combination with `Math.abs()` and `Math.floor()` to calculate the time between each new text draw.\nUse `document.querySelector().innerHTML` to update the value of the selected element.\nOmit the fourth parameter, `step`, to use a default step of `1`.\nOmit the fifth parameter, `duration`, to use a default duration of `2000`ms.\n\n",
          "codeBlocks": {
            "es6": "const counter = (selector, start, end, step = 1, duration = 2000) => {\n  let current = start,\n    _step = (end - start) * step < 0 ? -step : step,\n    timer = setInterval(() => {\n      current += _step;\n      document.querySelector(selector).innerHTML = current;\n      if (current >= end) document.querySelector(selector).innerHTML = end;\n      if (current >= end) clearInterval(timer);\n    }, Math.abs(Math.floor(duration / (end - start))));\n  return timer;\n};",
            "es5": "var counter = function counter(selector, start, end) {\n  var step = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;\n  var duration = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2000;\n\n  var current = start,\n      _step = (end - start) * step < 0 ? -step : step,\n      timer = setInterval(function () {\n    current += _step;\n    document.querySelector(selector).innerHTML = current;\n    if (current >= end) document.querySelector(selector).innerHTML = end;\n    if (current >= end) clearInterval(timer);\n  }, Math.abs(Math.floor(duration / (end - start))));\n\n  return timer;\n};",
            "example": "counter('#my-id', 1, 1000, 5, 2000); // Creates a 2-second timer for the element with id=\"my-id\""
          },
          "tags": [
            "browser",
            "advanced"
          ]
        },
        "meta": {
          "hash": "3143db5361ae9b8f20ee19ab2d5baeeebb976a195f60110522b558873204142c",
          "firstSeen": "1525618546",
          "lastUpdated": "1565681352",
          "updateCount": 4,
          "authorCount": 3
        }
      },
      {
        "id": "countOccurrences",
        "title": "countOccurrences",
        "type": "snippet",
        "attributes": {
          "fileName": "countOccurrences.md",
          "text": "Counts the occurrences of a value in an array.\n\nUse `Array.prototype.reduce()` to increment a counter each time you encounter the specific value inside the array.\n\n",
          "codeBlocks": {
            "es6": "const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);",
            "es5": "var countOccurrences = function countOccurrences(arr, val) {\n  return arr.reduce(function (a, v) {\n    return v === val ? a + 1 : a;\n  }, 0);\n};",
            "example": "countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3"
          },
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "1ae0916c575409305f4e1f1a2af7966f0f4b9260a9986711805a936ac6ebd9f7",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 10,
          "authorCount": 7
        }
      },
      {
        "id": "createDirIfNotExists",
        "title": "createDirIfNotExists",
        "type": "snippet",
        "attributes": {
          "fileName": "createDirIfNotExists.md",
          "text": "Creates a directory, if it does not exist.\n\nUse `fs.existsSync()` to check if the directory exists, `fs.mkdirSync()` to create it.\n\n",
          "codeBlocks": {
            "es6": "const fs = require('fs');\nconst createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);",
            "es5": "var fs = require('fs');\n\nvar createDirIfNotExists = function createDirIfNotExists(dir) {\n  return !fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined;\n};",
            "example": "createDirIfNotExists('test'); // creates the directory 'test', if it doesn't exist"
          },
          "tags": [
            "node",
            "beginner"
          ]
        },
        "meta": {
          "hash": "233be96d6436773d7f6ceb16ad0cf63bdc63a961b59fc1faa11707af182ed510",
          "firstSeen": "1544635516",
          "lastUpdated": "1565681352",
          "updateCount": 4,
          "authorCount": 3
        }
      },
      {
        "id": "createElement",
        "title": "createElement",
        "type": "snippet",
        "attributes": {
          "fileName": "createElement.md",
          "text": "Creates an element from a string (without appending it to the document). \nIf the given string contains multiple elements, only the first one will be returned.\n\nUse `document.createElement()` to create a new element.\nSet its `innerHTML` to the string supplied as the argument. \nUse `ParentNode.firstElementChild` to return the element version of the string.\n\n",
          "codeBlocks": {
            "es6": "const createElement = str => {\n  const el = document.createElement('div');\n  el.innerHTML = str;\n  return el.firstElementChild;\n};",
            "es5": "var createElement = function createElement(str) {\n  var el = document.createElement('div');\n  el.innerHTML = str;\n  return el.firstElementChild;\n};",
            "example": "const el = createElement(\n  `<div class=\"container\">\n    <p>Hello!</p>\n  </div>`\n);\nconsole.log(el.className); // 'container'"
          },
          "tags": [
            "browser",
            "utility",
            "beginner"
          ]
        },
        "meta": {
          "hash": "d162fbc50166f304216db6ea700e5fc7f428ea33d50b204ae921e1c58552a4e0",
          "firstSeen": "1515169304",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 3
        }
      },
      {
        "id": "createEventHub",
        "title": "createEventHub",
        "type": "snippet",
        "attributes": {
          "fileName": "createEventHub.md",
          "text": "Creates a pub/sub ([publish–subscribe](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)) event hub with `emit`, `on`, and `off` methods.\n\nUse `Object.create(null)` to create an empty `hub` object that does not inherit properties from `Object.prototype`.\nFor `emit`, resolve the array of handlers based on the `event` argument and then run each one with `Array.prototype.forEach()` by passing in the data as an argument.\nFor `on`, create an array for the event if it does not yet exist, then use `Array.prototype.push()` to add the handler\nto the array.\nFor `off`, use `Array.prototype.findIndex()` to find the index of the handler in the event array and remove it using `Array.prototype.splice()`.\n\n",
          "codeBlocks": {
            "es6": "const createEventHub = () => ({\n  hub: Object.create(null),\n  emit(event, data) {\n    (this.hub[event] || []).forEach(handler => handler(data));\n  },\n  on(event, handler) {\n    if (!this.hub[event]) this.hub[event] = [];\n    this.hub[event].push(handler);\n  },\n  off(event, handler) {\n    const i = (this.hub[event] || []).findIndex(h => h === handler);\n    if (i > -1) this.hub[event].splice(i, 1);\n    if (this.hub[event].length === 0) delete this.hub[event];\n  }\n});",
            "es5": "var createEventHub = function createEventHub() {\n  return {\n    hub: Object.create(null),\n    emit: function emit(event, data) {\n      (this.hub[event] || []).forEach(function (handler) {\n        return handler(data);\n      });\n    },\n    on: function on(event, handler) {\n      if (!this.hub[event]) this.hub[event] = [];\n      this.hub[event].push(handler);\n    },\n    off: function off(event, handler) {\n      var i = (this.hub[event] || []).findIndex(function (h) {\n        return h === handler;\n      });\n      if (i > -1) this.hub[event].splice(i, 1);\n      if (this.hub[event].length === 0) delete this.hub[event];\n    }\n  };\n};",
            "example": "const handler = data => console.log(data);\nconst hub = createEventHub();\nlet increment = 0;\n\n// Subscribe: listen for different types of events\nhub.on('message', handler);\nhub.on('message', () => console.log('Message event fired'));\nhub.on('increment', () => increment++);\n\n// Publish: emit events to invoke all handlers subscribed to them, passing the data to them as an argument\nhub.emit('message', 'hello world'); // logs 'hello world' and 'Message event fired'\nhub.emit('message', { hello: 'world' }); // logs the object and 'Message event fired'\nhub.emit('increment'); // `increment` variable is now 1\n\n// Unsubscribe: stop a specific handler from listening to the 'message' event\nhub.off('message', handler);"
          },
          "tags": [
            "browser",
            "event",
            "advanced"
          ]
        },
        "meta": {
          "hash": "bc41a9baac70cfa4415f23550ff0f0ac92ad5aa2192e577437e72c732956ada7",
          "firstSeen": "1515157646",
          "lastUpdated": "1565681352",
          "updateCount": 23,
          "authorCount": 6
        }
      },
      {
        "id": "CSVToArray",
        "title": "CSVToArray",
        "type": "snippet",
        "attributes": {
          "fileName": "CSVToArray.md",
          "text": "Converts a comma-separated values (CSV) string to a 2D array.\n\nUse `Array.prototype.slice()` and `Array.prototype.indexOf('\\n')` to remove the first row (title row) if `omitFirstRow` is `true`.\nUse `String.prototype.split('\\n')` to create a string for each row, then `String.prototype.split(delimiter)` to separate the values in each row.\nOmit the second argument, `delimiter`, to use a default delimiter of `,`.\nOmit the third argument, `omitFirstRow`, to include the first row (title row) of the CSV string.\n\n",
          "codeBlocks": {
            "es6": "const CSVToArray = (data, delimiter = ',', omitFirstRow = false) =>\n  data\n    .slice(omitFirstRow ? data.indexOf('\\n') + 1 : 0)\n    .split('\\n')\n    .map(v => v.split(delimiter));",
            "es5": "var CSVToArray = function CSVToArray(data) {\n  var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';\n  var omitFirstRow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  return data.slice(omitFirstRow ? data.indexOf('\\n') + 1 : 0).split('\\n').map(function (v) {\n    return v.split(delimiter);\n  });\n};",
            "example": "CSVToArray('a,b\\nc,d'); // [['a','b'],['c','d']];\nCSVToArray('a;b\\nc;d', ';'); // [['a','b'],['c','d']];\nCSVToArray('col1,col2\\na,b\\nc,d', ',', true); // [['a','b'],['c','d']];"
          },
          "tags": [
            "string",
            "array",
            "utility",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "3169ab83e588063262fa6a01f7d7df7bd9521345c65a7c7f874f577478c90305",
          "firstSeen": "1530122274",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "CSVToJSON",
        "title": "CSVToJSON",
        "type": "snippet",
        "attributes": {
          "fileName": "CSVToJSON.md",
          "text": "Converts a comma-separated values (CSV) string to a 2D array of objects.\nThe first row of the string is used as the title row.\n\nUse `Array.prototype.slice()` and `Array.prototype.indexOf('\\n')` and `String.prototype.split(delimiter)` to separate the first row (title row) into values.\nUse `String.prototype.split('\\n')` to create a string for each row, then `Array.prototype.map()` and `String.prototype.split(delimiter)` to separate the values in each row.\nUse `Array.prototype.reduce()` to create an object for each row's values, with the keys parsed from the title row.\nOmit the second argument, `delimiter`, to use a default delimiter of `,`.\n\n",
          "codeBlocks": {
            "es6": "const CSVToJSON = (data, delimiter = ',') => {\n  const titles = data.slice(0, data.indexOf('\\n')).split(delimiter);\n  return data\n    .slice(data.indexOf('\\n') + 1)\n    .split('\\n')\n    .map(v => {\n      const values = v.split(delimiter);\n      return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});\n    });\n};",
            "es5": "var CSVToJSON = function CSVToJSON(data) {\n  var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';\n  var titles = data.slice(0, data.indexOf('\\n')).split(delimiter);\n  return data.slice(data.indexOf('\\n') + 1).split('\\n').map(function (v) {\n    var values = v.split(delimiter);\n    return titles.reduce(function (obj, title, index) {\n      return obj[title] = values[index], obj;\n    }, {});\n  });\n};",
            "example": "CSVToJSON('col1,col2\\na,b\\nc,d'); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];\nCSVToJSON('col1;col2\\na;b\\nc;d', ';'); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];"
          },
          "tags": [
            "string",
            "array",
            "object",
            "advanced"
          ]
        },
        "meta": {
          "hash": "786d9d7dc8544fd49678b8bb71eb4a068ade86a30b2a58d07bef20da2fc28db1",
          "firstSeen": "1530123264",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "currentURL",
        "title": "currentURL",
        "type": "snippet",
        "attributes": {
          "fileName": "currentURL.md",
          "text": "Returns the current URL.\n\nUse `window.location.href` to get the current URL.\n\n",
          "codeBlocks": {
            "es6": "const currentURL = () => window.location.href;",
            "es5": "var currentURL = function currentURL() {\n  return window.location.href;\n};",
            "example": "currentURL(); // 'https://google.com'"
          },
          "tags": [
            "browser",
            "url",
            "beginner"
          ]
        },
        "meta": {
          "hash": "a28cd0828b50d589cda564a36076a297c0181598d7400aefe5184412682485e3",
          "firstSeen": "1513587903",
          "lastUpdated": "1583481460",
          "updateCount": 8,
          "authorCount": 5
        }
      },
      {
        "id": "curry",
        "title": "curry",
        "type": "snippet",
        "attributes": {
          "fileName": "curry.md",
          "text": "Curries a function.\n\nUse recursion.\nIf the number of provided arguments (`args`) is sufficient, call the passed function `fn`.\nOtherwise, return a curried function `fn` that expects the rest of the arguments.\nIf you want to curry a function that accepts a variable number of arguments (a variadic function, e.g. `Math.min()`), you can optionally pass the number of arguments to the second parameter `arity`.\n\n",
          "codeBlocks": {
            "es6": "const curry = (fn, arity = fn.length, ...args) =>\n  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);",
            "es5": "var curry = function curry(fn) {\n  var arity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : fn.length;\n\n  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    args[_key - 2] = arguments[_key];\n  }\n\n  return arity <= args.length ? fn.apply(void 0, args) : curry.bind.apply(curry, [null, fn, arity].concat(args));\n};",
            "example": "curry(Math.pow)(2)(10); // 1024\ncurry(Math.min, 3)(10)(50)(2); // 2"
          },
          "tags": [
            "function",
            "recursion",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "80e76d37fa79511f3256d5e1c113d223fc8875fd9d6cfe8b7530b567def30456",
          "firstSeen": "1512912095",
          "lastUpdated": "1565681352",
          "updateCount": 17,
          "authorCount": 8
        }
      },
      {
        "id": "dayOfYear",
        "title": "dayOfYear",
        "type": "snippet",
        "attributes": {
          "fileName": "dayOfYear.md",
          "text": "Gets the day of the year from a `Date` object.\n\nUse `new Date()` and `Date.prototype.getFullYear()` to get the first day of the year as a `Date` object, subtract it from the provided `date` and divide with the milliseconds in each day to get the result.\nUse `Math.floor()` to appropriately round the resulting day count to an integer.\n\n",
          "codeBlocks": {
            "es6": "const dayOfYear = date =>\n  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);",
            "es5": "var dayOfYear = function dayOfYear(date) {\n  return Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);\n};",
            "example": "dayOfYear(new Date()); // 272"
          },
          "tags": [
            "date",
            "beginner"
          ]
        },
        "meta": {
          "hash": "9057876a6323ed24bbc3db2a6db7ddc8bdf59663493d07935b9c9238d879a689",
          "firstSeen": "1538216540",
          "lastUpdated": "1565681352",
          "updateCount": 4,
          "authorCount": 2
        }
      },
      {
        "id": "debounce",
        "title": "debounce",
        "type": "snippet",
        "attributes": {
          "fileName": "debounce.md",
          "text": "Creates a debounced function that delays invoking the provided function until at least `ms` milliseconds have elapsed since the last time it was invoked.\n\nEach time the debounced function is invoked, clear the current pending timeout with `clearTimeout()` and use `setTimeout()` to create a new timeout that delays invoking the function until at least `ms` milliseconds has elapsed. Use `Function.prototype.apply()` to apply the `this` context to the function and provide the necessary arguments.\nOmit the second argument, `ms`, to set the timeout at a default of 0 ms.\n\n",
          "codeBlocks": {
            "es6": "const debounce = (fn, ms = 0) => {\n  let timeoutId;\n  return function(...args) {\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => fn.apply(this, args), ms);\n  };\n};",
            "es5": "var debounce = function debounce(fn) {\n  var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  var timeoutId;\n  return function () {\n    var _this = this;\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(function () {\n      return fn.apply(_this, args);\n    }, ms);\n  };\n};",
            "example": "window.addEventListener(\n  'resize',\n  debounce(() => {\n    console.log(window.innerWidth);\n    console.log(window.innerHeight);\n  }, 250)\n); // Will log the window dimensions at most every 250ms"
          },
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "bbf4d763429f499c0e1c3feb381e6291d3643d45613d25812ac5c47789d4d4f9",
          "firstSeen": "1517145506",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "decapitalize",
        "title": "decapitalize",
        "type": "snippet",
        "attributes": {
          "fileName": "decapitalize.md",
          "text": "Decapitalizes the first letter of a string.\n\nUse array destructuring and `String.toLowerCase()` to decapitalize first letter, `...rest` to get array of characters after first letter and then `Array.prototype.join('')` to make it a string again.\nOmit the `upperRest` parameter to keep the rest of the string intact, or set it to `true` to convert to uppercase.\n\n",
          "codeBlocks": {
            "es6": "const decapitalize = ([first, ...rest], upperRest = false) =>\n  first.toLowerCase() + (upperRest ? rest.join('').toUpperCase() : rest.join(''));",
            "es5": "function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar decapitalize = function decapitalize(_ref) {\n  var _ref2 = _toArray(_ref),\n      first = _ref2[0],\n      rest = _ref2.slice(1);\n\n  var upperRest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  return first.toLowerCase() + (upperRest ? rest.join('').toUpperCase() : rest.join(''));\n};",
            "example": "decapitalize('FooBar'); // 'fooBar'\ndecapitalize('FooBar', true); // 'fOOBAR'"
          },
          "tags": [
            "string",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "cb1b9240e8dae6a351937afeeccb1e200017a3729844b812721b8a8fcffdaa54",
          "firstSeen": "1515664720",
          "lastUpdated": "1565681352",
          "updateCount": 4,
          "authorCount": 3
        }
      },
      {
        "id": "deepClone",
        "title": "deepClone",
        "type": "snippet",
        "attributes": {
          "fileName": "deepClone.md",
          "text": "Creates a deep clone of an object.\n\nUse recursion.\nCheck if the passed object is `null` and, if so, return `null`.\nUse `Object.assign()` and an empty object (`{}`) to create a shallow clone of the original.\nUse `Object.keys()` and `Array.prototype.forEach()` to determine which key-value pairs need to be deep cloned.\n\n",
          "codeBlocks": {
            "es6": "const deepClone = obj => {\n  if (obj === null) return null;\n  let clone = Object.assign({}, obj);\n  Object.keys(clone).forEach(\n    key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])\n  );\n  return Array.isArray(obj) && obj.length\n    ? (clone.length = obj.length) && Array.from(clone)\n    : Array.isArray(obj)\n      ? Array.from(obj)\n      : clone;\n};",
            "es5": "function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar deepClone = function deepClone(obj) {\n  if (obj === null) return null;\n  var clone = Object.assign({}, obj);\n  Object.keys(clone).forEach(function (key) {\n    return clone[key] = _typeof(obj[key]) === 'object' ? deepClone(obj[key]) : obj[key];\n  });\n  return Array.isArray(obj) && obj.length ? (clone.length = obj.length) && Array.from(clone) : Array.isArray(obj) ? Array.from(obj) : clone;\n};",
            "example": "const a = { foo: 'bar', obj: { a: 1, b: 2 } };\nconst b = deepClone(a); // a !== b, a.obj !== b.obj"
          },
          "tags": [
            "object",
            "recursion",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "5ab25ab96afd4f1f481fc318b5b290ba8c57a468ef6bca0ca200cfb7fcf3ba9f",
          "firstSeen": "1516733326",
          "lastUpdated": "1585031872",
          "updateCount": 77,
          "authorCount": 9
        }
      },
      {
        "id": "deepFlatten",
        "title": "deepFlatten",
        "type": "snippet",
        "attributes": {
          "fileName": "deepFlatten.md",
          "text": "Deep flattens an array.\n\nUse recursion.\nUse `Array.prototype.concat()` with an empty array (`[]`) and the spread operator (`...`) to flatten an array.\nRecursively flatten each element that is an array.\n\n",
          "codeBlocks": {
            "es6": "const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar deepFlatten = function deepFlatten(arr) {\n  var _ref;\n\n  return (_ref = []).concat.apply(_ref, _toConsumableArray(arr.map(function (v) {\n    return Array.isArray(v) ? deepFlatten(v) : v;\n  })));\n};",
            "example": "deepFlatten([1, [2], [[3], 4], 5]); // [1, 2, 3, 4, 5]"
          },
          "tags": [
            "array",
            "recursion",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "2c9d854091ce0c7eedb607acaba299a46fd02b9d0ee5bc8aebe95bc2303d8a0d",
          "firstSeen": "1513526151",
          "lastUpdated": "1582040094",
          "updateCount": 8,
          "authorCount": 5
        }
      },
      {
        "id": "deepFreeze",
        "title": "deepFreeze",
        "type": "snippet",
        "attributes": {
          "fileName": "deepFreeze.md",
          "text": "Deep freezes an object.\n\nUse `Object.keys()` to get all the properties of the passed object, `Array.prototype.forEach()` to iterate over them.\nCall `Object.freeze(obj)` recursively on all properties, checking if each one is frozen using `Object.isFrozen()` and applying `deepFreeze()` as necessary.\nFinally, use `Object.freeze()` to freeze the given object.\n\n",
          "codeBlocks": {
            "es6": "const deepFreeze = obj => {\n  Object.keys(obj).forEach(prop => {\n    if (obj[prop] === 'object' && !Object.isFrozen(obj[prop])) deepFreeze(v[prop]);\n  });\n  return Object.freeze(obj);\n};",
            "es5": "var deepFreeze = function deepFreeze(obj) {\n  Object.keys(obj).forEach(function (prop) {\n    if (obj[prop] === 'object' && !Object.isFrozen(obj[prop])) deepFreeze(v[prop]);\n  });\n  return Object.freeze(obj);\n};",
            "example": "'use strict';\n\nconst o = deepFreeze([1, [2, 3]]);\n\no[0] = 3; // not allowed\no[1][0] = 4; // not allowed as well"
          },
          "tags": [
            "object",
            "recursion",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "28f2ec9d8a34e4e57ab8ebb28ff23c62cae8b71cc3269946b760abdd57be9135",
          "firstSeen": "1535212456",
          "lastUpdated": "1584454251",
          "updateCount": 11,
          "authorCount": 4
        }
      },
      {
        "id": "deepGet",
        "title": "deepGet",
        "type": "snippet",
        "attributes": {
          "fileName": "deepGet.md",
          "text": "Returns the target value in a nested JSON object, based on the `keys` array.\n\nCompare the keys you want in the nested JSON object as an `Array`.\nUse `Array.prototype.reduce()` to get value from nested JSON object one by one. \nIf the key exists in object, return target value, otherwise, return `null`.\n\n",
          "codeBlocks": {
            "es6": "const deepGet = (obj, keys) => keys.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), obj);",
            "es5": "var deepGet = function deepGet(obj, keys) {\n  return keys.reduce(function (xs, x) {\n    return xs && xs[x] ? xs[x] : null;\n  }, obj);\n};",
            "example": "let index = 2;\nconst data = {\n  foo: {\n    foz: [1, 2, 3],\n    bar: {\n      baz: ['a', 'b', 'c']\n    }\n  }\n};\ndeepGet(data, ['foo', 'foz', index]); // get 3\ndeepGet(data, ['foo', 'bar', 'baz', 8, 'foz']); // null"
          },
          "tags": [
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "818735e4b97db79e60544be6339c8e260b630f375b542ea51e1bc60e4171be42",
          "firstSeen": "1557397852",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 3
        }
      },
      {
        "id": "deepMapKeys",
        "title": "deepMapKeys",
        "type": "snippet",
        "attributes": {
          "fileName": "deepMapKeys.md",
          "text": "Deep maps an object's keys.\n\nCreates an object with the same values as the provided object and keys generated by running the provided function for each key.\nUse `Object.keys(obj)` to iterate over the object's keys. \nUse `Array.prototype.reduce()` to create a new object with the same values and mapped keys using `fn`.\n\n",
          "codeBlocks": {
            "es6": "const deepMapKeys = (obj, f) =>\n  Array.isArray(obj)\n    ? obj.map(val => deepMapKeys(val, f))\n    : typeof obj === 'object'\n      ? Object.keys(obj).reduce((acc, current) => {\n        const val = obj[current];\n        acc[f(current)] =\n          val !== null && typeof val === 'object' ? deepMapKeys(val, f) : (acc[f(current)] = val);\n        return acc;\n      }, {})\n      : obj;",
            "es5": "function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar deepMapKeys = function deepMapKeys(obj, f) {\n  return Array.isArray(obj) ? obj.map(function (val) {\n    return deepMapKeys(val, f);\n  }) : _typeof(obj) === 'object' ? Object.keys(obj).reduce(function (acc, current) {\n    var val = obj[current];\n    acc[f(current)] = val !== null && _typeof(val) === 'object' ? deepMapKeys(val, f) : acc[f(current)] = val;\n    return acc;\n  }, {}) : obj;\n};",
            "example": "const obj = {\n  foo: '1',\n  nested: {\n    child: {\n      withArray: [\n        {\n          grandChild: ['hello']\n        }\n      ]\n    }\n  }\n};\nconst upperKeysObj = deepMapKeys(obj, key => key.toUpperCase());\n/*\n{\n  \"FOO\":\"1\",\n  \"NESTED\":{\n    \"CHILD\":{\n      \"WITHARRAY\":[\n        {\n          \"GRANDCHILD\":[ 'hello' ]\n        }\n      ]\n    }\n  }\n}\n*/"
          },
          "tags": [
            "object",
            "recursion",
            "advanced"
          ]
        },
        "meta": {
          "hash": "7a228b650ff668f697e524e0d27ebeff1bfa35e04333b6cd5e742ff63bfea25d",
          "firstSeen": "1544374334",
          "lastUpdated": "1585031872",
          "updateCount": 89,
          "authorCount": 4
        }
      },
      {
        "id": "defaults",
        "title": "defaults",
        "type": "snippet",
        "attributes": {
          "fileName": "defaults.md",
          "text": "Assigns default values for all properties in an object that are `undefined`.\n\nUse `Object.assign()` to create a new empty object and copy the original one to maintain key order, use `Array.prototype.reverse()` and the spread operator `...` to combine the default values from left to right, finally use `obj` again to overwrite properties that originally had a value.\n\n",
          "codeBlocks": {
            "es6": "const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar defaults = function defaults(obj) {\n  for (var _len = arguments.length, defs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    defs[_key - 1] = arguments[_key];\n  }\n\n  return Object.assign.apply(Object, [{}, obj].concat(_toConsumableArray(defs.reverse()), [obj]));\n};",
            "example": "defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }"
          },
          "tags": [
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "f891cda1417a4f1c3646c3d7451aad99833062eb28a9fcad4d414b98d1925bc6",
          "firstSeen": "1516362665",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "defer",
        "title": "defer",
        "type": "snippet",
        "attributes": {
          "fileName": "defer.md",
          "text": "Defers invoking a function until the current call stack has cleared.\n\nUse `setTimeout()` with a timeout of 1ms to add a new event to the browser event queue and allow the rendering engine to complete its work. Use the spread (`...`) operator to supply the function with an arbitrary number of arguments.\n\n",
          "codeBlocks": {
            "es6": "const defer = (fn, ...args) => setTimeout(fn, 1, ...args);",
            "es5": "var defer = function defer(fn) {\n  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    args[_key - 1] = arguments[_key];\n  }\n\n  return setTimeout.apply(void 0, [fn, 1].concat(args));\n};",
            "example": "// Example A:\ndefer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'\n\n// Example B:\ndocument.querySelector('#someElement').innerHTML = 'Hello';\nlongRunningFunction(); // Browser will not update the HTML until this has finished\ndefer(longRunningFunction); // Browser will update the HTML then run the function"
          },
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "7a750cc36b1a97252c4048a6896e0e01816ccf0bcb6db634db42b4ae5be1ed3b",
          "firstSeen": "1514842831",
          "lastUpdated": "1565681352",
          "updateCount": 7,
          "authorCount": 3
        }
      },
      {
        "id": "degreesToRads",
        "title": "degreesToRads",
        "type": "snippet",
        "attributes": {
          "fileName": "degreesToRads.md",
          "text": "Converts an angle from degrees to radians.\n\nUse `Math.PI` and the degree to radian formula to convert the angle from degrees to radians.\n\n",
          "codeBlocks": {
            "es6": "const degreesToRads = deg => (deg * Math.PI) / 180.0;",
            "es5": "var degreesToRads = function degreesToRads(deg) {\n  return deg * Math.PI / 180.0;\n};",
            "example": "degreesToRads(90.0); // ~1.5708"
          },
          "tags": [
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "2bc5b5959725150f5c678769b6dffc05f44692ad2e201b9ac1ff40c00e5dc419",
          "firstSeen": "1518603890",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 3
        }
      },
      {
        "id": "delay",
        "title": "delay",
        "type": "snippet",
        "attributes": {
          "fileName": "delay.md",
          "text": "Invokes the provided function after `wait` milliseconds.\n\nUse `setTimeout()` to delay execution of `fn`.\nUse the spread (`...`) operator to supply the function with an arbitrary number of arguments.\n\n",
          "codeBlocks": {
            "es6": "const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);",
            "es5": "var delay = function delay(fn, wait) {\n  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    args[_key - 2] = arguments[_key];\n  }\n\n  return setTimeout.apply(void 0, [fn, wait].concat(args));\n};",
            "example": "delay(\n  function(text) {\n    console.log(text);\n  },\n  1000,\n  'later'\n); // Logs 'later' after one second."
          },
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "cfa17f3a578f2790d22b5054c728a07515678b72eccef8500218b78d8a3d9e4b",
          "firstSeen": "1516797140",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "detectDeviceType",
        "title": "detectDeviceType",
        "type": "snippet",
        "attributes": {
          "fileName": "detectDeviceType.md",
          "text": "Detects whether the website is being opened in a mobile device or a desktop/laptop.\n\nUse a regular expression to test the `navigator.userAgent` property to figure out if the device is a mobile device or a desktop/laptop.\n\n",
          "codeBlocks": {
            "es6": "const detectDeviceType = () =>\n  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)\n    ? 'Mobile'\n    : 'Desktop';",
            "es5": "var detectDeviceType = function detectDeviceType() {\n  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';\n};",
            "example": "detectDeviceType(); // \"Mobile\" or \"Desktop\""
          },
          "tags": [
            "browser",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "ab72248448b94658fbbe2842d7feb3ec1621703384472f424a2355634d1aa774",
          "firstSeen": "1514101163",
          "lastUpdated": "1565681352",
          "updateCount": 11,
          "authorCount": 6
        }
      },
      {
        "id": "difference",
        "title": "difference",
        "type": "snippet",
        "attributes": {
          "fileName": "difference.md",
          "text": "Returns the difference between two arrays.\n\nCreate a `Set` from `b`, then use `Array.prototype.filter()` on `a` to only keep values not contained in `b`.\n\n",
          "codeBlocks": {
            "es6": "const difference = (a, b) => {\n  const s = new Set(b);\n  return a.filter(x => !s.has(x));\n};",
            "es5": "var difference = function difference(a, b) {\n  var s = new Set(b);\n  return a.filter(function (x) {\n    return !s.has(x);\n  });\n};",
            "example": "difference([1, 2, 3], [1, 2, 4]); // [3]"
          },
          "tags": [
            "array",
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "7e49ef3e36b2fe6f1cc680e2be782bda7af3e05fa75b4bacf59c63428a6ebf50",
          "firstSeen": "1513521691",
          "lastUpdated": "1565681352",
          "updateCount": 8,
          "authorCount": 5
        }
      },
      {
        "id": "differenceBy",
        "title": "differenceBy",
        "type": "snippet",
        "attributes": {
          "fileName": "differenceBy.md",
          "text": "Returns the difference between two arrays, after applying the provided function to each array element of both.\n\nCreate a `Set` by applying `fn` to each element in `b`, then use `Array.prototype.map()` to apply `fn` to each element in `a`, then `Array.prototype.filter()`\n\n",
          "codeBlocks": {
            "es6": "const differenceBy = (a, b, fn) => {\n  const s = new Set(b.map(fn));\n  return a.map(fn).filter(el => !s.has(el));\n};",
            "es5": "var differenceBy = function differenceBy(a, b, fn) {\n  var s = new Set(b.map(fn));\n  return a.map(fn).filter(function (el) {\n    return !s.has(el);\n  });\n};",
            "example": "differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1]\ndifferenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [2]"
          },
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "1be0503ca3298cf2c05ff64889181fc35e682785476bb5617d439978b80fd35e",
          "firstSeen": "1516787343",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 5
        }
      },
      {
        "id": "differenceWith",
        "title": "differenceWith",
        "type": "snippet",
        "attributes": {
          "fileName": "differenceWith.md",
          "text": "Filters out all values from an array for which the comparator function does not return `true`.\n\nUse `Array.prototype.filter()` and `Array.prototype.findIndex()` to find the appropriate values.\n\n",
          "codeBlocks": {
            "es6": "const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);",
            "es5": "var differenceWith = function differenceWith(arr, val, comp) {\n  return arr.filter(function (a) {\n    return val.findIndex(function (b) {\n      return comp(a, b);\n    }) === -1;\n  });\n};",
            "example": "differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); // [1, 1.2]"
          },
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "b265f3860be86344badb79b74074e3dfe37da6b2c4ff95bd8865b6e6f7c0d73b",
          "firstSeen": "1513679544",
          "lastUpdated": "1565681352",
          "updateCount": 9,
          "authorCount": 6
        }
      },
      {
        "id": "dig",
        "title": "dig",
        "type": "snippet",
        "attributes": {
          "fileName": "dig.md",
          "text": "Returns the target value in a nested JSON object, based on the given key.\n\nUse the `in` operator to check if `target` exists in `obj`.\nIf found, return the value of `obj[target]`, otherwise use `Object.values(obj)` and `Array.prototype.reduce()` to recursively call `dig` on each nested object until the first matching key/value pair is found.\n\n",
          "codeBlocks": {
            "es6": "const dig = (obj, target) =>\n  target in obj\n    ? obj[target]\n    : Object.values(obj).reduce((acc, val) => {\n      if (acc !== undefined) return acc;\n      if (typeof val === 'object') return dig(val, target);\n    }, undefined);",
            "es5": "function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar dig = function dig(obj, target) {\n  return target in obj ? obj[target] : Object.values(obj).reduce(function (acc, val) {\n    if (acc !== undefined) return acc;\n    if (_typeof(val) === 'object') return dig(val, target);\n  }, undefined);\n};",
            "example": "const data = {\n  level1: {\n    level2: {\n      level3: 'some data'\n    }\n  }\n};\ndig(data, 'level3'); // 'some data'\ndig(data, 'level4'); // undefined"
          },
          "tags": [
            "object",
            "recursion",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "5f38360819f9225b887a94221bfee1a80f1bcc224a364440b3388f60491b03ba",
          "firstSeen": "1531080384",
          "lastUpdated": "1585031872",
          "updateCount": 114,
          "authorCount": 5
        }
      },
      {
        "id": "digitize",
        "title": "digitize",
        "type": "snippet",
        "attributes": {
          "fileName": "digitize.md",
          "text": "Converts a number to an array of digits.\n\nConvert the number to a string, using the spread operator (`...`) to build an array.\nUse `Array.prototype.map()` and `parseInt()` to transform each value to an integer.\n\n",
          "codeBlocks": {
            "es6": "const digitize = n => [...`${n}`].map(i => parseInt(i));",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar digitize = function digitize(n) {\n  return _toConsumableArray(\"\".concat(n)).map(function (i) {\n    return parseInt(i);\n  });\n};",
            "example": "digitize(123); // [1, 2, 3]"
          },
          "tags": [
            "math",
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "adc3d101e4cdb91158dceb8053b684dfdc1f16cedcbf6cf6429fc4ed8a164b59",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 11,
          "authorCount": 6
        }
      },
      {
        "id": "distance",
        "title": "distance",
        "type": "snippet",
        "attributes": {
          "fileName": "distance.md",
          "text": "Returns the distance between two points.\n\nUse `Math.hypot()` to calculate the Euclidean distance between two points.\n\n",
          "codeBlocks": {
            "es6": "const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);",
            "es5": "var distance = function distance(x0, y0, x1, y1) {\n  return Math.hypot(x1 - x0, y1 - y0);\n};",
            "example": "distance(1, 1, 2, 3); // 2.23606797749979"
          },
          "tags": [
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "4a9da71c7d722ae58f12c73771d00cab86e74c3167254451660d26197ba6bd19",
          "firstSeen": "1513521691",
          "lastUpdated": "1565681352",
          "updateCount": 7,
          "authorCount": 4
        }
      },
      {
        "id": "drop",
        "title": "drop",
        "type": "snippet",
        "attributes": {
          "fileName": "drop.md",
          "text": "Returns a new array with `n` elements removed from the left.\n\nUse `Array.prototype.slice()` to remove the specified number of elements from the left.\n\n",
          "codeBlocks": {
            "es6": "const drop = (arr, n = 1) => arr.slice(n);",
            "es5": "var drop = function drop(arr) {\n  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n  return arr.slice(n);\n};",
            "example": "drop([1, 2, 3]); // [2,3]\ndrop([1, 2, 3], 2); // [3]\ndrop([1, 2, 3], 42); // []"
          },
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "bf545684ca0c4abe2fc44e3fcaf15df7986430630e306ad3c009e629e63a1fab",
          "firstSeen": "1516962198",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "dropRight",
        "title": "dropRight",
        "type": "snippet",
        "attributes": {
          "fileName": "dropRight.md",
          "text": "Returns a new array with `n` elements removed from the right.\n\nUse `Array.prototype.slice()` to remove the specified number of elements from the right.\n\n",
          "codeBlocks": {
            "es6": "const dropRight = (arr, n = 1) => arr.slice(0, -n);",
            "es5": "var dropRight = function dropRight(arr) {\n  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n  return arr.slice(0, -n);\n};",
            "example": "dropRight([1, 2, 3]); // [1,2]\ndropRight([1, 2, 3], 2); // [1]\ndropRight([1, 2, 3], 42); // []"
          },
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "36905bae3e3177bb5999580342141975020ea45d7162f240af5cc418425c871a",
          "firstSeen": "1513678007",
          "lastUpdated": "1565681352",
          "updateCount": 11,
          "authorCount": 7
        }
      },
      {
        "id": "dropRightWhile",
        "title": "dropRightWhile",
        "type": "snippet",
        "attributes": {
          "fileName": "dropRightWhile.md",
          "text": "Removes elements from the end of an array until the passed function returns `true`. Returns the remaining elements in the array.\n\nLoop through the array, using `Array.prototype.slice()` to drop the last element of the array until the returned value from the function is `true`.\nReturns the remaining elements.\n\n",
          "codeBlocks": {
            "es6": "const dropRightWhile = (arr, func) => {\n  let rightIndex = arr.length;\n  while (rightIndex-- && !func(arr[rightIndex]));\n  return arr.slice(0, rightIndex + 1);\n};",
            "es5": "var dropRightWhile = function dropRightWhile(arr, func) {\n  var rightIndex = arr.length;\n\n  while (rightIndex-- && !func(arr[rightIndex])) {\n    ;\n  }\n\n  return arr.slice(0, rightIndex + 1);\n};",
            "example": "dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]"
          },
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "252b49a7c475d830e22c7e6dbae7df45be37a97b400e93125935c2de5c24b0a1",
          "firstSeen": "1516962198",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 5
        }
      },
      {
        "id": "dropWhile",
        "title": "dropWhile",
        "type": "snippet",
        "attributes": {
          "fileName": "dropWhile.md",
          "text": "Removes elements in an array until the passed function returns `true`. Returns the remaining elements in the array.\n\nLoop through the array, using `Array.prototype.slice()` to drop the first element of the array until the returned value from the function is `true`.\nReturns the remaining elements.\n\n",
          "codeBlocks": {
            "es6": "const dropWhile = (arr, func) => {\n  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);\n  return arr;\n};",
            "es5": "var dropWhile = function dropWhile(arr, func) {\n  while (arr.length > 0 && !func(arr[0])) {\n    arr = arr.slice(1);\n  }\n\n  return arr;\n};",
            "example": "dropWhile([1, 2, 3, 4], n => n >= 3); // [3, 4]"
          },
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "909ed2f1e923d0abbec9065f43469f7c3990c0d1f65befd24b4f0cdd85e8e5ba",
          "firstSeen": "1516962198",
          "lastUpdated": "1582035663",
          "updateCount": 5,
          "authorCount": 3
        }
      },
      {
        "id": "elementContains",
        "title": "elementContains",
        "type": "snippet",
        "attributes": {
          "fileName": "elementContains.md",
          "text": "Returns `true` if the `parent` element contains the `child` element, `false` otherwise.\n\nCheck that `parent` is not the same element as `child`, use `parent.contains(child)` to check if the `parent` element contains the `child` element.\n\n",
          "codeBlocks": {
            "es6": "const elementContains = (parent, child) => parent !== child && parent.contains(child);",
            "es5": "var elementContains = function elementContains(parent, child) {\n  return parent !== child && parent.contains(child);\n};",
            "example": "elementContains(document.querySelector('head'), document.querySelector('title')); // true\nelementContains(document.querySelector('body'), document.querySelector('body')); // false"
          },
          "tags": [
            "browser",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "2c6c186cf8b62305ab88307d24b413acd96dba006c80ee7835e5fb8e33e72256",
          "firstSeen": "1529431078",
          "lastUpdated": "1565681352",
          "updateCount": 3,
          "authorCount": 2
        }
      },
      {
        "id": "elementIsVisibleInViewport",
        "title": "elementIsVisibleInViewport",
        "type": "snippet",
        "attributes": {
          "fileName": "elementIsVisibleInViewport.md",
          "text": "Returns `true` if the element specified is visible in the viewport, `false` otherwise.\n\nUse `Element.getBoundingClientRect()` and the `window.inner(Width|Height)` values\nto determine if a given element is visible in the viewport.\nOmit the second argument to determine if the element is entirely visible, or specify `true` to determine if\nit is partially visible.\n\n",
          "codeBlocks": {
            "es6": "const elementIsVisibleInViewport = (el, partiallyVisible = false) => {\n  const { top, left, bottom, right } = el.getBoundingClientRect();\n  const { innerHeight, innerWidth } = window;\n  return partiallyVisible\n    ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&\n        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))\n    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;\n};",
            "es5": "var elementIsVisibleInViewport = function elementIsVisibleInViewport(el) {\n  var partiallyVisible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n\n  var _el$getBoundingClient = el.getBoundingClientRect(),\n      top = _el$getBoundingClient.top,\n      left = _el$getBoundingClient.left,\n      bottom = _el$getBoundingClient.bottom,\n      right = _el$getBoundingClient.right;\n\n  var _window = window,\n      innerHeight = _window.innerHeight,\n      innerWidth = _window.innerWidth;\n  return partiallyVisible ? (top > 0 && top < innerHeight || bottom > 0 && bottom < innerHeight) && (left > 0 && left < innerWidth || right > 0 && right < innerWidth) : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;\n};",
            "example": "// e.g. 100x100 viewport and a 10x10px element at position {top: -1, left: 0, bottom: 9, right: 10}\nelementIsVisibleInViewport(el); // false - (not fully visible)\nelementIsVisibleInViewport(el, true); // true - (partially visible)"
          },
          "tags": [
            "browser",
            "advanced"
          ]
        },
        "meta": {
          "hash": "46fed254db32437f3f54938d293aee32ebda0bac4dda24e6af33c039f4bc6f9f",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 8,
          "authorCount": 5
        }
      },
      {
        "id": "elo",
        "title": "elo",
        "type": "snippet",
        "attributes": {
          "fileName": "elo.md",
          "text": "Computes the new ratings between two or more opponents using the [Elo rating system](https://en.wikipedia.org/wiki/Elo_rating_system). It takes an array\nof pre-ratings and returns an array containing post-ratings.\nThe array should be ordered from best performer to worst performer (winner -> loser).\n\nUse the exponent `**` operator and math operators to compute the expected score (chance of winning).\nof each opponent and compute the new rating for each.\nLoop through the ratings, using each permutation to compute the post-Elo rating for each player in a pairwise fashion. \nOmit the second argument to use the default `kFactor` of 32.\n\n",
          "codeBlocks": {
            "es6": "const elo = ([...ratings], kFactor = 32, selfRating) => {\n  const [a, b] = ratings;\n  const expectedScore = (self, opponent) => 1 / (1 + 10 ** ((opponent - self) / 400));\n  const newRating = (rating, i) =>\n    (selfRating || rating) + kFactor * (i - expectedScore(i ? a : b, i ? b : a));\n  if (ratings.length === 2) return [newRating(a, 1), newRating(b, 0)];\n\n  for (let i = 0, len = ratings.length; i < len; i++) {\n    let j = i;\n    while (j < len - 1) {\n      j++;\n      [ratings[i], ratings[j]] = elo([ratings[i], ratings[j]], kFactor);\n    }\n  }\n  return ratings;\n};",
            "es5": "function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar elo = function elo(_ref) {\n  var _ref2 = _toArray(_ref),\n      ratings = _ref2.slice(0);\n\n  var kFactor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 32;\n  var selfRating = arguments.length > 2 ? arguments[2] : undefined;\n\n  var _ratings = _slicedToArray(ratings, 2),\n      a = _ratings[0],\n      b = _ratings[1];\n\n  var expectedScore = function expectedScore(self, opponent) {\n    return 1 / (1 + Math.pow(10, (opponent - self) / 400));\n  };\n\n  var newRating = function newRating(rating, i) {\n    return (selfRating || rating) + kFactor * (i - expectedScore(i ? a : b, i ? b : a));\n  };\n\n  if (ratings.length === 2) return [newRating(a, 1), newRating(b, 0)];\n\n  for (var i = 0, len = ratings.length; i < len; i++) {\n    var j = i;\n\n    while (j < len - 1) {\n      j++;\n\n      var _elo = elo([ratings[i], ratings[j]], kFactor);\n\n      var _elo2 = _slicedToArray(_elo, 2);\n\n      ratings[i] = _elo2[0];\n      ratings[j] = _elo2[1];\n    }\n  }\n\n  return ratings;\n};",
            "example": "// Standard 1v1s\nelo([1200, 1200]); // [1216, 1184]\nelo([1200, 1200], 64); // [1232, 1168]\n// 4 player FFA, all same rank\nelo([1200, 1200, 1200, 1200]).map(Math.round); // [1246, 1215, 1185, 1154]\n/*\nFor teams, each rating can adjusted based on own team's average rating vs.\naverage rating of opposing team, with the score being added to their\nown individual rating by supplying it as the third argument.\n*/"
          },
          "tags": [
            "math",
            "array",
            "advanced"
          ]
        },
        "meta": {
          "hash": "7f506f1d9999e20da3deebf7d51b80d9f56f9d87bddac6637faf63316bcd1790",
          "firstSeen": "1514637905",
          "lastUpdated": "1565681352",
          "updateCount": 22,
          "authorCount": 5
        }
      },
      {
        "id": "equals",
        "title": "equals",
        "type": "snippet",
        "attributes": {
          "fileName": "equals.md",
          "text": "Performs a deep comparison between two values to determine if they are equivalent.\n\nCheck if the two values are identical, if they are both `Date` objects with the same time, using `Date.getTime()` or if they are both non-object values with an equivalent value (strict comparison).\nCheck if only one value is `null` or `undefined` or if their prototypes differ.\nIf none of the above conditions are met, use `Object.keys()` to check if both values have the same number of keys, then use `Array.prototype.every()` to check if every key in the first value exists in the second one and if they are equivalent by calling this method recursively.\n\n",
          "codeBlocks": {
            "es6": "const equals = (a, b) => {\n  if (a === b) return true;\n  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();\n  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;\n  if (a.prototype !== b.prototype) return false;\n  let keys = Object.keys(a);\n  if (keys.length !== Object.keys(b).length) return false;\n  return keys.every(k => equals(a[k], b[k]));\n};",
            "es5": "function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar equals = function equals(a, b) {\n  if (a === b) return true;\n  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();\n  if (!a || !b || _typeof(a) !== 'object' && _typeof(b) !== 'object') return a === b;\n  if (a.prototype !== b.prototype) return false;\n  var keys = Object.keys(a);\n  if (keys.length !== Object.keys(b).length) return false;\n  return keys.every(function (k) {\n    return equals(a[k], b[k]);\n  });\n};",
            "example": "equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' }); // true"
          },
          "tags": [
            "object",
            "array",
            "type",
            "advanced"
          ]
        },
        "meta": {
          "hash": "7738cec1d3804a4542cd80899d7f6d2890d8950aae5751a76e733b0ed270d802",
          "firstSeen": "1516034051",
          "lastUpdated": "1570640396",
          "updateCount": 8,
          "authorCount": 6
        }
      },
      {
        "id": "escapeHTML",
        "title": "escapeHTML",
        "type": "snippet",
        "attributes": {
          "fileName": "escapeHTML.md",
          "text": "Escapes a string for use in HTML.\n\nUse `String.prototype.replace()` with a regexp that matches the characters that need to be escaped, using a callback function to replace each character instance with its associated escaped character using a dictionary (object).\n\n",
          "codeBlocks": {
            "es6": "const escapeHTML = str =>\n  str.replace(\n    /[&<>'\"]/g,\n    tag =>\n      ({\n        '&': '&amp;',\n        '<': '&lt;',\n        '>': '&gt;',\n        \"'\": '&#39;',\n        '\"': '&quot;'\n      }[tag] || tag)\n  );",
            "es5": "var escapeHTML = function escapeHTML(str) {\n  return str.replace(/[&<>'\"]/g, function (tag) {\n    return {\n      '&': '&amp;',\n      '<': '&lt;',\n      '>': '&gt;',\n      \"'\": '&#39;',\n      '\"': '&quot;'\n    }[tag] || tag;\n  });\n};",
            "example": "escapeHTML('<a href=\"#\">Me & you</a>'); // '&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'"
          },
          "tags": [
            "string",
            "browser",
            "regexp",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "456a613a9ad94c219753a2ad2ad6f5e1668b974e9f503d221791745c570a35d4",
          "firstSeen": "1514552961",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 5
        }
      },
      {
        "id": "escapeRegExp",
        "title": "escapeRegExp",
        "type": "snippet",
        "attributes": {
          "fileName": "escapeRegExp.md",
          "text": "Escapes a string to use in a regular expression.\n\nUse `String.prototype.replace()` to escape special characters.\n\n",
          "codeBlocks": {
            "es6": "const escapeRegExp = str => str.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');",
            "es5": "var escapeRegExp = function escapeRegExp(str) {\n  return str.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');\n};",
            "example": "escapeRegExp('(test)'); // \\\\(test\\\\)"
          },
          "tags": [
            "string",
            "regexp",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "91c52b53fe79cc811678086b90b073f84bf168a1bd59dfa6796462ac96adfb17",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 8,
          "authorCount": 5
        }
      },
      {
        "id": "everyNth",
        "title": "everyNth",
        "type": "snippet",
        "attributes": {
          "fileName": "everyNth.md",
          "text": "Returns every nth element in an array.\n\nUse `Array.prototype.filter()` to create a new array that contains every nth element of a given array.\n\n",
          "codeBlocks": {
            "es6": "const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);",
            "es5": "var everyNth = function everyNth(arr, nth) {\n  return arr.filter(function (e, i) {\n    return i % nth === nth - 1;\n  });\n};",
            "example": "everyNth([1, 2, 3, 4, 5, 6], 2); // [ 2, 4, 6 ]"
          },
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "a111e4110ff4fe4895ba42b32ed7cb294ab8a0b1103d43cf5bf2d0c483f2ec7e",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 9,
          "authorCount": 6
        }
      },
      {
        "id": "extendHex",
        "title": "extendHex",
        "type": "snippet",
        "attributes": {
          "fileName": "extendHex.md",
          "text": "Extends a 3-digit color code to a 6-digit color code.\n\nUse `Array.prototype.map()`, `String.prototype.split()` and `Array.prototype.join()` to join the mapped array for converting a 3-digit RGB notated hexadecimal color-code to the 6-digit form.\n`Array.prototype.slice()` is used to remove `#` from string start since it's added once.\n\n",
          "codeBlocks": {
            "es6": "const extendHex = shortHex =>\n  '#' +\n  shortHex\n    .slice(shortHex.startsWith('#') ? 1 : 0)\n    .split('')\n    .map(x => x + x)\n    .join('');",
            "es5": "var extendHex = function extendHex(shortHex) {\n  return '#' + shortHex.slice(shortHex.startsWith('#') ? 1 : 0).split('').map(function (x) {\n    return x + x;\n  }).join('');\n};",
            "example": "extendHex('#03f'); // '#0033ff'\nextendHex('05a'); // '#0055aa'"
          },
          "tags": [
            "utility",
            "string",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "34df599e00a3541dfecf1c0780514006d8d6cadfe28905ead9e782cc3903902c",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 12,
          "authorCount": 7
        }
      },
      {
        "id": "factorial",
        "title": "factorial",
        "type": "snippet",
        "attributes": {
          "fileName": "factorial.md",
          "text": "Calculates the factorial of a number.\n\nUse recursion.\nIf `n` is less than or equal to `1`, return `1`.\nOtherwise, return the product of `n` and the factorial of `n - 1`.\nThrows an exception if `n` is a negative number.\n\n",
          "codeBlocks": {
            "es6": "const factorial = n =>\n  n < 0\n    ? (() => {\n      throw new TypeError('Negative numbers are not allowed!');\n    })()\n    : n <= 1\n      ? 1\n      : n * factorial(n - 1);",
            "es5": "var factorial = function factorial(n) {\n  return n < 0 ? function () {\n    throw new TypeError('Negative numbers are not allowed!');\n  }() : n <= 1 ? 1 : n * factorial(n - 1);\n};",
            "example": "factorial(6); // 720"
          },
          "tags": [
            "math",
            "recursion",
            "beginner"
          ]
        },
        "meta": {
          "hash": "55b1ce0a892110d792a9487e40331774015525479faa2b8961f6c2ea6291c27b",
          "firstSeen": "1512650493",
          "lastUpdated": "1585031872",
          "updateCount": 119,
          "authorCount": 6
        }
      },
      {
        "id": "fibonacci",
        "title": "fibonacci",
        "type": "snippet",
        "attributes": {
          "fileName": "fibonacci.md",
          "text": "Generates an array, containing the Fibonacci sequence, up until the nth term.\n\nCreate an empty array of the specific length, initializing the first two values (`0` and `1`).\nUse `Array.prototype.reduce()` to add values into the array, using the sum of the last two values, except for the first two.\n\n",
          "codeBlocks": {
            "es6": "const fibonacci = n =>\n  Array.from({ length: n }).reduce(\n    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),\n    []\n  );",
            "es5": "var fibonacci = function fibonacci(n) {\n  return Array.from({\n    length: n\n  }).reduce(function (acc, val, i) {\n    return acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i);\n  }, []);\n};",
            "example": "fibonacci(6); // [0, 1, 1, 2, 3, 5]"
          },
          "tags": [
            "math",
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "156e9481207c96ff8e9fe054a5d72144933a5a0f4215e721925e3da0054f6be2",
          "firstSeen": "1513521691",
          "lastUpdated": "1565681352",
          "updateCount": 12,
          "authorCount": 8
        }
      },
      {
        "id": "filterNonUnique",
        "title": "filterNonUnique",
        "type": "snippet",
        "attributes": {
          "fileName": "filterNonUnique.md",
          "text": "Filters out the non-unique values in an array.\n\nUse `Array.prototype.filter()` for an array containing only the unique values.\n\n",
          "codeBlocks": {
            "es6": "const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));",
            "es5": "var filterNonUnique = function filterNonUnique(arr) {\n  return arr.filter(function (i) {\n    return arr.indexOf(i) === arr.lastIndexOf(i);\n  });\n};",
            "example": "filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]"
          },
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "f9abec985874548f8020c4b1a3f657981989c08e1c8d5547f21d1f36566b093c",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 8,
          "authorCount": 5
        }
      },
      {
        "id": "filterNonUniqueBy",
        "title": "filterNonUniqueBy",
        "type": "snippet",
        "attributes": {
          "fileName": "filterNonUniqueBy.md",
          "text": "Filters out the non-unique values in an array, based on a provided comparator function.\n\nUse `Array.prototype.filter()` and `Array.prototype.every()` for an array containing only the unique values, based on the comparator function, `fn`.\nThe comparator function takes four arguments: the values of the two elements being compared and their indexes.\n\n",
          "codeBlocks": {
            "es6": "const filterNonUniqueBy = (arr, fn) =>\n  arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));",
            "es5": "var filterNonUniqueBy = function filterNonUniqueBy(arr, fn) {\n  return arr.filter(function (v, i) {\n    return arr.every(function (x, j) {\n      return i === j === fn(v, x, i, j);\n    });\n  });\n};",
            "example": "filterNonUniqueBy(\n  [\n    { id: 0, value: 'a' },\n    { id: 1, value: 'b' },\n    { id: 2, value: 'c' },\n    { id: 1, value: 'd' },\n    { id: 0, value: 'e' }\n  ],\n  (a, b) => a.id == b.id\n); // [ { id: 2, value: 'c' } ]"
          },
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "9179ddcbbbf42b58c2fa5b2f079154bee2739e5a843ed8be84a8dc0dc9946116",
          "firstSeen": "1531935653",
          "lastUpdated": "1565681352",
          "updateCount": 7,
          "authorCount": 4
        }
      },
      {
        "id": "findKey",
        "title": "findKey",
        "type": "snippet",
        "attributes": {
          "fileName": "findKey.md",
          "text": "Returns the first key that satisfies the provided testing function. Otherwise `undefined` is returned.\n\nUse `Object.keys(obj)` to get all the properties of the object, `Array.prototype.find()` to test the provided function for each key-value pair. The callback receives three arguments - the value, the key and the object.\n\n",
          "codeBlocks": {
            "es6": "const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));",
            "es5": "var findKey = function findKey(obj, fn) {\n  return Object.keys(obj).find(function (key) {\n    return fn(obj[key], key, obj);\n  });\n};",
            "example": "findKey(\n  {\n    barney: { age: 36, active: true },\n    fred: { age: 40, active: false },\n    pebbles: { age: 1, active: true }\n  },\n  o => o['active']\n); // 'barney'"
          },
          "tags": [
            "object",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "cd829971748368811b0c202243f3d968be259e24805715b7459657394eb9f302",
          "firstSeen": "1516724600",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "findLast",
        "title": "findLast",
        "type": "snippet",
        "attributes": {
          "fileName": "findLast.md",
          "text": "Returns the last element for which the provided function returns a truthy value.\n\nUse `Array.prototype.filter()` to remove elements for which `fn` returns falsy values, `Array.prototype.pop()` to get the last one.\n\n",
          "codeBlocks": {
            "es6": "const findLast = (arr, fn) => arr.filter(fn).pop();",
            "es5": "var findLast = function findLast(arr, fn) {\n  return arr.filter(fn).pop();\n};",
            "example": "findLast([1, 2, 3, 4], n => n % 2 === 1); // 3"
          },
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "2f79feebcfde7153bc7d457358d3ce9f0c544f98ea2cd35553a5d5e9ac88be6e",
          "firstSeen": "1515671518",
          "lastUpdated": "1565681352",
          "updateCount": 9,
          "authorCount": 6
        }
      },
      {
        "id": "findLastIndex",
        "title": "findLastIndex",
        "type": "snippet",
        "attributes": {
          "fileName": "findLastIndex.md",
          "text": "Returns the index of the last element for which the provided function returns a truthy value.\n\nUse `Array.prototype.map()` to map each element to an array with its index and value.\nUse `Array.prototype.filter()` to remove elements for which `fn` returns falsy values, `Array.prototype.pop()` to get the last one.\n`-1` is the default value when not found.\n\n",
          "codeBlocks": {
            "es6": "const findLastIndex = (arr, fn) =>\n  (arr\n    .map((val, i) => [i, val])\n    .filter(([i, val]) => fn(val, i, arr))\n    .pop() || [-1])[0];",
            "es5": "function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar findLastIndex = function findLastIndex(arr, fn) {\n  return (arr.map(function (val, i) {\n    return [i, val];\n  }).filter(function (_ref) {\n    var _ref2 = _slicedToArray(_ref, 2),\n        i = _ref2[0],\n        val = _ref2[1];\n\n    return fn(val, i, arr);\n  }).pop() || [-1])[0];\n};",
            "example": "findLastIndex([1, 2, 3, 4], n => n % 2 === 1); // 2 (index of the value 3)\nfindLastIndex([1, 2, 3, 4], n => n === 5); // -1 (default value when not found)"
          },
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "48e20e5a2457427add5094d4fb588bebb98c244178758610678d25fd64b60f6c",
          "firstSeen": "1516791711",
          "lastUpdated": "1565681352",
          "updateCount": 7,
          "authorCount": 6
        }
      },
      {
        "id": "findLastKey",
        "title": "findLastKey",
        "type": "snippet",
        "attributes": {
          "fileName": "findLastKey.md",
          "text": "Returns the last key that satisfies the provided testing function.\nOtherwise `undefined` is returned.\n\nUse `Object.keys(obj)` to get all the properties of the object, `Array.prototype.reverse()` to reverse their order and `Array.prototype.find()` to test the provided function for each key-value pair.\nThe callback receives three arguments - the value, the key and the object.\n\n",
          "codeBlocks": {
            "es6": "const findLastKey = (obj, fn) =>\n  Object.keys(obj)\n    .reverse()\n    .find(key => fn(obj[key], key, obj));",
            "es5": "var findLastKey = function findLastKey(obj, fn) {\n  return Object.keys(obj).reverse().find(function (key) {\n    return fn(obj[key], key, obj);\n  });\n};",
            "example": "findLastKey(\n  {\n    barney: { age: 36, active: true },\n    fred: { age: 40, active: false },\n    pebbles: { age: 1, active: true }\n  },\n  o => o['active']\n); // 'pebbles'"
          },
          "tags": [
            "object",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "884ac6ea5ebaf84aa9d83bba6e2848e0b524fa4a39632cd96bf797474caf4b34",
          "firstSeen": "1516724600",
          "lastUpdated": "1565681352",
          "updateCount": 7,
          "authorCount": 4
        }
      },
      {
        "id": "flatten",
        "title": "flatten",
        "type": "snippet",
        "attributes": {
          "fileName": "flatten.md",
          "text": "Flattens an array up to the specified depth.\n\nUse recursion, decrementing `depth` by 1 for each level of depth.\nUse `Array.prototype.reduce()` and `Array.prototype.concat()` to merge elements or arrays.\nBase case, for `depth` equal to `1` stops recursion.\nOmit the second argument, `depth` to flatten only to a depth of `1` (single flatten).\n\n",
          "codeBlocks": {
            "es6": "const flatten = (arr, depth = 1) =>\n  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);",
            "es5": "var flatten = function flatten(arr) {\n  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n  return arr.reduce(function (a, v) {\n    return a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v);\n  }, []);\n};",
            "example": "flatten([1, [2], 3, 4]); // [1, 2, 3, 4]\nflatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]"
          },
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "e1793f61af6def69138bf162d0efb8f11578e7be5d718e701075dab4c510ceaa",
          "firstSeen": "1513521691",
          "lastUpdated": "1565681352",
          "updateCount": 20,
          "authorCount": 7
        }
      },
      {
        "id": "flattenObject",
        "title": "flattenObject",
        "type": "snippet",
        "attributes": {
          "fileName": "flattenObject.md",
          "text": "Flatten an object with the paths for keys.\n\nUse recursion.\nUse `Object.keys(obj)` combined with `Array.prototype.reduce()` to convert every leaf node to a flattened path node.\nIf the value of a key is an object, the function calls itself with the appropriate `prefix` to create the path using `Object.assign()`.\nOtherwise, it adds the appropriate prefixed key-value pair to the accumulator object.\nYou should always omit the second argument, `prefix`, unless you want every key to have a prefix.\n\n",
          "codeBlocks": {
            "es6": "const flattenObject = (obj, prefix = '') =>\n  Object.keys(obj).reduce((acc, k) => {\n    const pre = prefix.length ? prefix + '.' : '';\n    if (typeof obj[k] === 'object') Object.assign(acc, flattenObject(obj[k], pre + k));\n    else acc[pre + k] = obj[k];\n    return acc;\n  }, {});",
            "es5": "function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar flattenObject = function flattenObject(obj) {\n  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  return Object.keys(obj).reduce(function (acc, k) {\n    var pre = prefix.length ? prefix + '.' : '';\n    if (_typeof(obj[k]) === 'object') Object.assign(acc, flattenObject(obj[k], pre + k));else acc[pre + k] = obj[k];\n    return acc;\n  }, {});\n};",
            "example": "flattenObject({ a: { b: { c: 1 } }, d: 1 }); // { 'a.b.c': 1, d: 1 }"
          },
          "tags": [
            "object",
            "recursion",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "5c49020c066977d2f001fb1101301768cb0e1a757ad76982c0cd0ea9b990e27c",
          "firstSeen": "1517995818",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "flip",
        "title": "flip",
        "type": "snippet",
        "attributes": {
          "fileName": "flip.md",
          "text": "Flip takes a function as an argument, then makes the first argument the last.\n\nReturn a closure that takes variadic inputs, and splices the last argument to make it the first argument before applying the rest.\n\n",
          "codeBlocks": {
            "es6": "const flip = fn => (first, ...rest) => fn(...rest, first);",
            "es5": "var flip = function flip(fn) {\n  return function (first) {\n    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n      rest[_key - 1] = arguments[_key];\n    }\n\n    return fn.apply(void 0, rest.concat([first]));\n  };\n};",
            "example": "let a = { name: 'John Smith' };\r\nlet b = {};\r\nconst mergeFrom = flip(Object.assign);\r\nlet mergePerson = mergeFrom.bind(null, a);\r\nmergePerson(b); // == b\r\nb = {};\r\nObject.assign(b, a); // == b"
          },
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "553f8cccba3bd6339b01a926661a2a3fcca310f02bbb7402d1e0eeca5bf5d729",
          "firstSeen": "1513903335",
          "lastUpdated": "1578903585",
          "updateCount": 20,
          "authorCount": 8
        }
      },
      {
        "id": "forEachRight",
        "title": "forEachRight",
        "type": "snippet",
        "attributes": {
          "fileName": "forEachRight.md",
          "text": "Executes a provided function once for each array element, starting from the array's last element.\n\nUse `Array.prototype.slice(0)` to clone the given array, `Array.prototype.reverse()` to reverse it and `Array.prototype.forEach()` to iterate over the reversed array.\n\n",
          "codeBlocks": {
            "es6": "const forEachRight = (arr, callback) =>\n  arr\n    .slice(0)\n    .reverse()\n    .forEach(callback);",
            "es5": "var forEachRight = function forEachRight(arr, callback) {\n  return arr.slice(0).reverse().forEach(callback);\n};",
            "example": "forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'"
          },
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "31b710c7f120ba4e484fb3c782ab6cb3da0a47e84521220d474473229103ed5a",
          "firstSeen": "1515454730",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "formatDuration",
        "title": "formatDuration",
        "type": "snippet",
        "attributes": {
          "fileName": "formatDuration.md",
          "text": "Returns the human readable format of the given number of milliseconds.\n\nDivide `ms` with the appropriate values to obtain the appropriate values for `day`, `hour`, `minute`, `second` and `millisecond`.\nUse `Object.entries()` with `Array.prototype.filter()` to keep only non-zero values.\nUse `Array.prototype.map()` to create the string for each value, pluralizing appropriately.\nUse `String.prototype.join(', ')` to combine the values into a string.\n\n",
          "codeBlocks": {
            "es6": "const formatDuration = ms => {\n  if (ms < 0) ms = -ms;\n  const time = {\n    day: Math.floor(ms / 86400000),\n    hour: Math.floor(ms / 3600000) % 24,\n    minute: Math.floor(ms / 60000) % 60,\n    second: Math.floor(ms / 1000) % 60,\n    millisecond: Math.floor(ms) % 1000\n  };\n  return Object.entries(time)\n    .filter(val => val[1] !== 0)\n    .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)\n    .join(', ');\n};",
            "es5": "function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar formatDuration = function formatDuration(ms) {\n  if (ms < 0) ms = -ms;\n  var time = {\n    day: Math.floor(ms / 86400000),\n    hour: Math.floor(ms / 3600000) % 24,\n    minute: Math.floor(ms / 60000) % 60,\n    second: Math.floor(ms / 1000) % 60,\n    millisecond: Math.floor(ms) % 1000\n  };\n  return Object.entries(time).filter(function (val) {\n    return val[1] !== 0;\n  }).map(function (_ref) {\n    var _ref2 = _slicedToArray(_ref, 2),\n        key = _ref2[0],\n        val = _ref2[1];\n\n    return \"\".concat(val, \" \").concat(key).concat(val !== 1 ? 's' : '');\n  }).join(', ');\n};",
            "example": "formatDuration(1001); // '1 second, 1 millisecond'\nformatDuration(34325055574); // '397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds'"
          },
          "tags": [
            "date",
            "math",
            "string",
            "utility",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "176cd07a9486286924a7393fe631e83471e7123e3b6349309a7c1cee7746d764",
          "firstSeen": "1515050802",
          "lastUpdated": "1565681352",
          "updateCount": 9,
          "authorCount": 6
        }
      },
      {
        "id": "formToObject",
        "title": "formToObject",
        "type": "snippet",
        "attributes": {
          "fileName": "formToObject.md",
          "text": "Encode a set of form elements as an `object`.\n\nUse the `FormData` constructor to convert the HTML `form` to `FormData`, `Array.from()` to convert to an array.\nCollect the object from the array, using `Array.prototype.reduce()`.\n\n",
          "codeBlocks": {
            "es6": "const formToObject = form =>\n  Array.from(new FormData(form)).reduce(\n    (acc, [key, value]) => ({\n      ...acc,\n      [key]: value\n    }),\n    {}\n  );",
            "es5": "function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar formToObject = function formToObject(form) {\n  return Array.from(new FormData(form)).reduce(function (acc, _ref) {\n    var _ref2 = _slicedToArray(_ref, 2),\n        key = _ref2[0],\n        value = _ref2[1];\n\n    return _objectSpread({}, acc, _defineProperty({}, key, value));\n  }, {});\n};",
            "example": "formToObject(document.querySelector('#form')); // { email: 'test@email.com', name: 'Test Name' }"
          },
          "tags": [
            "browser",
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "24c79c76a89e64ad0d4a29f542400937bf280f49cd7bbafff3e26b63f0c4ad4d",
          "firstSeen": "1552481406",
          "lastUpdated": "1565681352",
          "updateCount": 7,
          "authorCount": 4
        }
      },
      {
        "id": "forOwn",
        "title": "forOwn",
        "type": "snippet",
        "attributes": {
          "fileName": "forOwn.md",
          "text": "Iterates over all own properties of an object, running a callback for each one.\n\nUse `Object.keys(obj)` to get all the properties of the object, `Array.prototype.forEach()` to run the provided function for each key-value pair. The callback receives three arguments - the value, the key and the object.\n\n",
          "codeBlocks": {
            "es6": "const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));",
            "es5": "var forOwn = function forOwn(obj, fn) {\n  return Object.keys(obj).forEach(function (key) {\n    return fn(obj[key], key, obj);\n  });\n};",
            "example": "forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1"
          },
          "tags": [
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "0f4525106d39a394413f7623eff35661baad618f49d7c2265496153804862c55",
          "firstSeen": "1516286756",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "forOwnRight",
        "title": "forOwnRight",
        "type": "snippet",
        "attributes": {
          "fileName": "forOwnRight.md",
          "text": "Iterates over all own properties of an object in reverse, running a callback for each one.\n\nUse `Object.keys(obj)` to get all the properties of the object, `Array.prototype.reverse()` to reverse their order and `Array.prototype.forEach()` to run the provided function for each key-value pair. The callback receives three arguments - the value, the key and the object.\n\n",
          "codeBlocks": {
            "es6": "const forOwnRight = (obj, fn) =>\n  Object.keys(obj)\n    .reverse()\n    .forEach(key => fn(obj[key], key, obj));",
            "es5": "var forOwnRight = function forOwnRight(obj, fn) {\n  return Object.keys(obj).reverse().forEach(function (key) {\n    return fn(obj[key], key, obj);\n  });\n};",
            "example": "forOwnRight({ foo: 'bar', a: 1 }, v => console.log(v)); // 1, 'bar'"
          },
          "tags": [
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "8810b76dac2c4294a0a029e697441ad73aa87f98a7b1698a61f31c62d5981ec8",
          "firstSeen": "1516286756",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "frequencies",
        "title": "frequencies",
        "type": "snippet",
        "attributes": {
          "fileName": "frequencies.md",
          "text": "Returns an object with the unique values of an array as keys and their frequencies as the values.\n\nUse `Array.prototype.reduce()` to map unique values to an object's keys, adding to existing keys every time the same value is encountered.\n\n",
          "codeBlocks": {
            "es6": "const frequencies = arr =>\n  arr.reduce((a, v) => {\n    a[v] = a[v] ? a[v] + 1 : 1;\n    return a;\n  }, {});",
            "es5": "var frequencies = function frequencies(arr) {\n  return arr.reduce(function (a, v) {\n    a[v] = a[v] ? a[v] + 1 : 1;\n    return a;\n  }, {});\n};",
            "example": "frequencies(['a', 'b', 'a', 'c', 'a', 'a', 'b']); // { a: 4, b: 2, c: 1 }"
          },
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "227fc1043f5a7850c32f4ecce686a97de0b8badf4d487462a1c25e8312465124",
          "firstSeen": "1578058355",
          "lastUpdated": "1578058637",
          "updateCount": 3,
          "authorCount": 3
        }
      },
      {
        "id": "fromCamelCase",
        "title": "fromCamelCase",
        "type": "snippet",
        "attributes": {
          "fileName": "fromCamelCase.md",
          "text": "Converts a string from camelcase.\n\nUse `String.prototype.replace()` to remove underscores, hyphens, and spaces and convert words to camelcase.\nOmit the second argument to use a default `separator` of `_`.\n\n",
          "codeBlocks": {
            "es6": "const fromCamelCase = (str, separator = '_') =>\n  str\n    .replace(/([a-z\\d])([A-Z])/g, '$1' + separator + '$2')\n    .replace(/([A-Z]+)([A-Z][a-z\\d]+)/g, '$1' + separator + '$2')\n    .toLowerCase();",
            "es5": "var fromCamelCase = function fromCamelCase(str) {\n  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_';\n  return str.replace(/([a-z\\d])([A-Z])/g, '$1' + separator + '$2').replace(/([A-Z]+)([A-Z][a-z\\d]+)/g, '$1' + separator + '$2').toLowerCase();\n};",
            "example": "fromCamelCase('someDatabaseFieldName', ' '); // 'some database field name'\nfromCamelCase('someLabelThatNeedsToBeCamelized', '-'); // 'some-label-that-needs-to-be-camelized'\nfromCamelCase('someJavascriptProperty', '_'); // 'some_javascript_property'"
          },
          "tags": [
            "string",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "1b4fe94ee0e82ecd4c77de9ea258ded34a8a834da1bb021b5b25fe84ab8e4eea",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 10,
          "authorCount": 7
        }
      },
      {
        "id": "functionName",
        "title": "functionName",
        "type": "snippet",
        "attributes": {
          "fileName": "functionName.md",
          "text": "Logs the name of a function.\n\nUse `console.debug()` and the `name` property of the passed method to log the method's name to the `debug` channel of the console.\n\n",
          "codeBlocks": {
            "es6": "const functionName = fn => (console.debug(fn.name), fn);",
            "es5": "var functionName = function functionName(fn) {\n  return console.debug(fn.name), fn;\n};",
            "example": "functionName(Math.max); // max (logged in debug channel of console)"
          },
          "tags": [
            "function",
            "utility",
            "beginner"
          ]
        },
        "meta": {
          "hash": "9f8947652b9c2faba5f1bda82f992bdc81a71c67374fcc843e96ce2a327a28db",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "functions",
        "title": "functions",
        "type": "snippet",
        "attributes": {
          "fileName": "functions.md",
          "text": "Returns an array of function property names from own (and optionally inherited) enumerable properties of an object.\n\nUse `Object.keys(obj)` to iterate over the object's own properties.\nIf `inherited` is `true`, use `Object.get.PrototypeOf(obj)` to also get the object's inherited properties.\nUse `Array.prototype.filter()` to keep only those properties that are functions.\nOmit the second argument, `inherited`, to not include inherited properties by default.\n\n",
          "codeBlocks": {
            "es6": "const functions = (obj, inherited = false) =>\n  (inherited\n    ? [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))]\n    : Object.keys(obj)\n  ).filter(key => typeof obj[key] === 'function');",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar functions = function functions(obj) {\n  var inherited = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  return (inherited ? [].concat(_toConsumableArray(Object.keys(obj)), _toConsumableArray(Object.keys(Object.getPrototypeOf(obj)))) : Object.keys(obj)).filter(function (key) {\n    return typeof obj[key] === 'function';\n  });\n};",
            "example": "function Foo() {\n  this.a = () => 1;\n  this.b = () => 2;\n}\nFoo.prototype.c = () => 3;\nfunctions(new Foo()); // ['a', 'b']\nfunctions(new Foo(), true); // ['a', 'b', 'c']"
          },
          "tags": [
            "object",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "1ad875e1b31348464b3eedddc0e0a4b0e10154e16b08025fa5e46d94995aa887",
          "firstSeen": "1515698338",
          "lastUpdated": "1565681352",
          "updateCount": 7,
          "authorCount": 4
        }
      },
      {
        "id": "gcd",
        "title": "gcd",
        "type": "snippet",
        "attributes": {
          "fileName": "gcd.md",
          "text": "Calculates the greatest common divisor between two or more numbers/arrays.\n\nThe inner `_gcd` function uses recursion.\nBase case is when `y` equals `0`. In this case, return `x`.\nOtherwise, return the GCD of `y` and the remainder of the division `x/y`.\n\n",
          "codeBlocks": {
            "es6": "const gcd = (...arr) => {\n  const _gcd = (x, y) => (!y ? x : gcd(y, x % y));\n  return [...arr].reduce((a, b) => _gcd(a, b));\n};",
            "es5": "var gcd = function gcd() {\n  var _gcd = function _gcd(x, y) {\n    return !y ? x : gcd(y, x % y);\n  };\n\n  for (var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++) {\n    arr[_key] = arguments[_key];\n  }\n\n  return [].concat(arr).reduce(function (a, b) {\n    return _gcd(a, b);\n  });\n};",
            "example": "gcd(8, 36); // 4\ngcd(...[12, 8, 32]); // 4"
          },
          "tags": [
            "math",
            "recursion",
            "beginner"
          ]
        },
        "meta": {
          "hash": "751df689bc853192c8302d245e96684deaf158da463d8cdcbd54f84bb0d7c6dc",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 14,
          "authorCount": 7
        }
      },
      {
        "id": "geometricProgression",
        "title": "geometricProgression",
        "type": "snippet",
        "attributes": {
          "fileName": "geometricProgression.md",
          "text": "Initializes an array containing the numbers in the specified range where `start` and `end` are inclusive and the ratio between two terms is `step`.\nReturns an error if `step` equals `1`.\n\nUse `Array.from()`, `Math.log()` and `Math.floor()` to create an array of the desired length, `Array.prototype.map()` to fill with the desired values in a range.\nOmit the second argument, `start`, to use a default value of `1`.\nOmit the third argument, `step`, to use a default value of `2`.\n\n",
          "codeBlocks": {
            "es6": "const geometricProgression = (end, start = 1, step = 2) =>\n  Array.from({ length: Math.floor(Math.log(end / start) / Math.log(step)) + 1 }).map(\n    (v, i) => start * step ** i\n  );",
            "es5": "var geometricProgression = function geometricProgression(end) {\n  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;\n  return Array.from({\n    length: Math.floor(Math.log(end / start) / Math.log(step)) + 1\n  }).map(function (v, i) {\n    return start * Math.pow(step, i);\n  });\n};",
            "example": "geometricProgression(256); // [1, 2, 4, 8, 16, 32, 64, 128, 256]\ngeometricProgression(256, 3); // [3, 6, 12, 24, 48, 96, 192]\ngeometricProgression(256, 1, 4); // [1, 4, 16, 64, 256]"
          },
          "tags": [
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "dec4fa85a58d11deefd90a66b0ede5ec73ad3e2481d5cf76918d13235c3238d9",
          "firstSeen": "1514964983",
          "lastUpdated": "1565681352",
          "updateCount": 7,
          "authorCount": 5
        }
      },
      {
        "id": "get",
        "title": "get",
        "type": "snippet",
        "attributes": {
          "fileName": "get.md",
          "text": "Retrieve a set of properties indicated by the given selectors from an object.\n\nUse `Array.prototype.map()` for each selector, `String.prototype.replace()` to replace square brackets with dots, `String.prototype.split('.')` to split each selector, `Array.prototype.filter()` to remove empty values and `Array.prototype.reduce()` to get the value indicated by it.\n\n",
          "codeBlocks": {
            "es6": "const get = (from, ...selectors) =>\n  [...selectors].map(s =>\n    s\n      .replace(/\\[([^\\[\\]]*)\\]/g, '.$1.')\n      .split('.')\n      .filter(t => t !== '')\n      .reduce((prev, cur) => prev && prev[cur], from)\n  );",
            "es5": "var get = function get(from) {\n  for (var _len = arguments.length, selectors = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    selectors[_key - 1] = arguments[_key];\n  }\n\n  return [].concat(selectors).map(function (s) {\n    return s.replace(/\\[([^\\[\\]]*)\\]/g, '.$1.').split('.').filter(function (t) {\n      return t !== '';\n    }).reduce(function (prev, cur) {\n      return prev && prev[cur];\n    }, from);\n  });\n};",
            "example": "const obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] };\nget(obj, 'selector.to.val', 'target[0]', 'target[2].a'); // ['val to select', 1, 'test']"
          },
          "tags": [
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "9f1b9128c94cd905327d5f09904f924fee541e8114e298fe7e01855d87cfe3d2",
          "firstSeen": "1516290042",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "getColonTimeFromDate",
        "title": "getColonTimeFromDate",
        "type": "snippet",
        "attributes": {
          "fileName": "getColonTimeFromDate.md",
          "text": "Returns a string of the form `HH:MM:SS` from a `Date` object.\n\nUse `Date.prototype.toTimeString()` and `String.prototype.slice()` to get the `HH:MM:SS` part of a given `Date` object.\n\n",
          "codeBlocks": {
            "es6": "const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);",
            "es5": "var getColonTimeFromDate = function getColonTimeFromDate(date) {\n  return date.toTimeString().slice(0, 8);\n};",
            "example": "getColonTimeFromDate(new Date()); // \"08:38:00\""
          },
          "tags": [
            "date",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "b2802086a18e09907de87f5409547d902ce7f6ae4f5a39cbc8869a662353303e",
          "firstSeen": "1515856488",
          "lastUpdated": "1565681352",
          "updateCount": 7,
          "authorCount": 5
        }
      },
      {
        "id": "getDaysDiffBetweenDates",
        "title": "getDaysDiffBetweenDates",
        "type": "snippet",
        "attributes": {
          "fileName": "getDaysDiffBetweenDates.md",
          "text": "Returns the difference (in days) between two dates.\n\nCalculate the difference (in days) between two `Date` objects.\n\n",
          "codeBlocks": {
            "es6": "const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>\n  (dateFinal - dateInitial) / (1000 * 3600 * 24);",
            "es5": "var getDaysDiffBetweenDates = function getDaysDiffBetweenDates(dateInitial, dateFinal) {\n  return (dateFinal - dateInitial) / (1000 * 3600 * 24);\n};",
            "example": "getDaysDiffBetweenDates(new Date('2017-12-13'), new Date('2017-12-22')); // 9"
          },
          "tags": [
            "date",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "0a2c0629c3c0661519c08d21768dadd5bebac35c892d980d390b16b60c60a2eb",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 7,
          "authorCount": 5
        }
      },
      {
        "id": "getImages",
        "title": "getImages",
        "type": "snippet",
        "attributes": {
          "fileName": "getImages.md",
          "text": "Fetches all images from within an element and puts them into an array\n\nUse `Element.prototype.getElementsByTagName()` to fetch all `<img>` elements inside the provided element, `Array.prototype.map()` to map every `src` attribute of their respective `<img>` element, then create a `Set` to eliminate duplicates and return the array.\n\n",
          "codeBlocks": {
            "es6": "const getImages = (el, includeDuplicates = false) => {\n  const images = [...el.getElementsByTagName('img')].map(img => img.getAttribute('src'));\n  return includeDuplicates ? images : [...new Set(images)];\n};",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar getImages = function getImages(el) {\n  var includeDuplicates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n\n  var images = _toConsumableArray(el.getElementsByTagName('img')).map(function (img) {\n    return img.getAttribute('src');\n  });\n\n  return includeDuplicates ? images : _toConsumableArray(new Set(images));\n};",
            "example": "getImages(document, true); // ['image1.jpg', 'image2.png', 'image1.png', '...']\ngetImages(document, false); // ['image1.jpg', 'image2.png', '...']"
          },
          "tags": [
            "browser",
            "beginner"
          ]
        },
        "meta": {
          "hash": "1caa2b9a8817bc11874785cdcf9f676e169caec6487c54124287ce85bb818c93",
          "firstSeen": "1538918676",
          "lastUpdated": "1565681352",
          "updateCount": 4,
          "authorCount": 4
        }
      },
      {
        "id": "getMeridiemSuffixOfInteger",
        "title": "getMeridiemSuffixOfInteger",
        "type": "snippet",
        "attributes": {
          "fileName": "getMeridiemSuffixOfInteger.md",
          "text": "Converts an integer to a suffixed string, adding `am` or `pm` based on its value.\n\nUse the modulo operator (`%`) and conditional checks to transform an integer to a stringified 12-hour format with meridiem suffix.\n\n",
          "codeBlocks": {
            "es6": "const getMeridiemSuffixOfInteger = num =>\n  num === 0 || num === 24\n    ? 12 + 'am'\n    : num === 12\n      ? 12 + 'pm'\n      : num < 12\n        ? (num % 12) + 'am'\n        : (num % 12) + 'pm';",
            "es5": "var getMeridiemSuffixOfInteger = function getMeridiemSuffixOfInteger(num) {\n  return num === 0 || num === 24 ? 12 + 'am' : num === 12 ? 12 + 'pm' : num < 12 ? num % 12 + 'am' : num % 12 + 'pm';\n};",
            "example": "getMeridiemSuffixOfInteger(0); // \"12am\"\ngetMeridiemSuffixOfInteger(11); // \"11am\"\ngetMeridiemSuffixOfInteger(13); // \"1pm\"\ngetMeridiemSuffixOfInteger(25); // \"1pm\""
          },
          "tags": [
            "date",
            "beginner"
          ]
        },
        "meta": {
          "hash": "16c3b724b653dcb31f3e59f1664a59951abb15a93eb3697cade4d3ae0e63c532",
          "firstSeen": "1515856488",
          "lastUpdated": "1585031872",
          "updateCount": 78,
          "authorCount": 4
        }
      },
      {
        "id": "getScrollPosition",
        "title": "getScrollPosition",
        "type": "snippet",
        "attributes": {
          "fileName": "getScrollPosition.md",
          "text": "Returns the scroll position of the current page.\n\nUse `pageXOffset` and `pageYOffset` if they are defined, otherwise `scrollLeft` and `scrollTop`.\nYou can omit `el` to use a default value of `window`.\n\n",
          "codeBlocks": {
            "es6": "const getScrollPosition = (el = window) => ({\n  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,\n  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop\n});",
            "es5": "var getScrollPosition = function getScrollPosition() {\n  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;\n  return {\n    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,\n    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop\n  };\n};",
            "example": "getScrollPosition(); // {x: 0, y: 200}"
          },
          "tags": [
            "browser",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "255afa82679e614e1388476fb4392f0e1bb45f11e1c02e965925e231401f1f2c",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 7,
          "authorCount": 4
        }
      },
      {
        "id": "getStyle",
        "title": "getStyle",
        "type": "snippet",
        "attributes": {
          "fileName": "getStyle.md",
          "text": "Returns the value of a CSS rule for the specified element.\n\nUse `Window.getComputedStyle()` to get the value of the CSS rule for the specified element.\n\n",
          "codeBlocks": {
            "es6": "const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];",
            "es5": "var getStyle = function getStyle(el, ruleName) {\n  return getComputedStyle(el)[ruleName];\n};",
            "example": "getStyle(document.querySelector('p'), 'font-size'); // '16px'"
          },
          "tags": [
            "browser",
            "css",
            "beginner"
          ]
        },
        "meta": {
          "hash": "f779277f9fb5fe54aa4b122bf87d73d921cd2550253a5bda3a2b512ebf70a976",
          "firstSeen": "1514498897",
          "lastUpdated": "1565681352",
          "updateCount": 4,
          "authorCount": 3
        }
      },
      {
        "id": "getType",
        "title": "getType",
        "type": "snippet",
        "attributes": {
          "fileName": "getType.md",
          "text": "Returns the native type of a value.\n\nReturn `\"undefined\"` or `\"null\"` if the value is `undefined` or `null`.\nOtherwise, use `Object.prototype.constructor.name` to get the name of the constructor, `String.prototype.toLowerCase()` to return it in lowercase.\n\n",
          "codeBlocks": {
            "es6": "const getType = v =>\n  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();",
            "es5": "var getType = function getType(v) {\n  return v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();\n};",
            "example": "getType(new Set([1, 2, 3])); // 'set'"
          },
          "tags": [
            "type",
            "beginner"
          ]
        },
        "meta": {
          "hash": "87c0b3cc13caebf6bb46f0769fecc8b13140ea133bbf096136c740154c1d456f",
          "firstSeen": "1513526151",
          "lastUpdated": "1583442386",
          "updateCount": 11,
          "authorCount": 6
        }
      },
      {
        "id": "getURLParameters",
        "title": "getURLParameters",
        "type": "snippet",
        "attributes": {
          "fileName": "getURLParameters.md",
          "text": "Returns an object containing the parameters of the current URL.\n\nUse `String.match()` with an appropriate regular expression to get all key-value pairs, `Array.prototype.reduce()` to map and combine them into a single object.\nPass `location.search` as the argument to apply to the current `url`.\n\n",
          "codeBlocks": {
            "es6": "const getURLParameters = url =>\n  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(\n    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),\n    {}\n  );",
            "es5": "var getURLParameters = function getURLParameters(url) {\n  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(function (a, v) {\n    return a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a;\n  }, {});\n};",
            "example": "getURLParameters('http://url.com/page?name=Adam&surname=Smith'); // {name: 'Adam', surname: 'Smith'}\ngetURLParameters('google.com'); // {}"
          },
          "tags": [
            "utility",
            "browser",
            "string",
            "url",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "460d0f75a526126cabbc1a0b7b727b78999332bec7876959519c187cd8db96db",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 11,
          "authorCount": 6
        }
      },
      {
        "id": "groupBy",
        "title": "groupBy",
        "type": "snippet",
        "attributes": {
          "fileName": "groupBy.md",
          "text": "Groups the elements of an array based on the given function.\n\nUse `Array.prototype.map()` to map the values of an array to a function or property name.\nUse `Array.prototype.reduce()` to create an object, where the keys are produced from the mapped results.\n\n",
          "codeBlocks": {
            "es6": "const groupBy = (arr, fn) =>\n  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {\n    acc[val] = (acc[val] || []).concat(arr[i]);\n    return acc;\n  }, {});",
            "es5": "var groupBy = function groupBy(arr, fn) {\n  return arr.map(typeof fn === 'function' ? fn : function (val) {\n    return val[fn];\n  }).reduce(function (acc, val, i) {\n    acc[val] = (acc[val] || []).concat(arr[i]);\n    return acc;\n  }, {});\n};",
            "example": "groupBy([6.1, 4.2, 6.3], Math.floor); // {4: [4.2], 6: [6.1, 6.3]}\ngroupBy(['one', 'two', 'three'], 'length'); // {3: ['one', 'two'], 5: ['three']}"
          },
          "tags": [
            "array",
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "8f501c922c2d5d7fcb20bc84153e7b392b4209592f54b7bae5c61b77bb107f81",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 9,
          "authorCount": 6
        }
      },
      {
        "id": "hammingDistance",
        "title": "hammingDistance",
        "type": "snippet",
        "attributes": {
          "fileName": "hammingDistance.md",
          "text": "Calculates the Hamming distance between two values.\n\nUse the XOR operator (`^`) to find the bit difference between the two numbers, convert to a binary string using `toString(2)`.\nCount and return the number of `1`s in the string, using `match(/1/g)`.\n\n",
          "codeBlocks": {
            "es6": "const hammingDistance = (num1, num2) => ((num1 ^ num2).toString(2).match(/1/g) || '').length;",
            "es5": "var hammingDistance = function hammingDistance(num1, num2) {\n  return ((num1 ^ num2).toString(2).match(/1/g) || '').length;\n};",
            "example": "hammingDistance(2, 3); // 1"
          },
          "tags": [
            "math",
            "regexp",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "bab775633603d798a5475f4bd22afdcbdea8bfdf81ea58eba661c16ee2a1ffbf",
          "firstSeen": "1513526151",
          "lastUpdated": "1583442408",
          "updateCount": 8,
          "authorCount": 5
        }
      },
      {
        "id": "hasClass",
        "title": "hasClass",
        "type": "snippet",
        "attributes": {
          "fileName": "hasClass.md",
          "text": "Returns `true` if the element has the specified class, `false` otherwise.\n\nUse `element.classList.contains()` to check if the element has the specified class.\n\n",
          "codeBlocks": {
            "es6": "const hasClass = (el, className) => el.classList.contains(className);",
            "es5": "var hasClass = function hasClass(el, className) {\n  return el.classList.contains(className);\n};",
            "example": "hasClass(document.querySelector('p.special'), 'special'); // true"
          },
          "tags": [
            "browser",
            "css",
            "beginner"
          ]
        },
        "meta": {
          "hash": "bb20ea2c4697a6036f1d149063f91a973de3bb5902649ca7ac6c9271a3561375",
          "firstSeen": "1514497593",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 3
        }
      },
      {
        "id": "hasFlags",
        "title": "hasFlags",
        "type": "snippet",
        "attributes": {
          "fileName": "hasFlags.md",
          "text": "Check if the current process's arguments contain the specified flags.\n\nUse `Array.prototype.every()` and `Array.prototype.includes()` to check if `process.argv` contains all the specified flags.\nUse a regular expression to test if the specified flags are prefixed with `-` or `--` and prefix them accordingly.\n\n",
          "codeBlocks": {
            "es6": "const hasFlags = (...flags) =>\n  flags.every(flag => process.argv.includes(/^-{1,2}/.test(flag) ? flag : '--' + flag));",
            "es5": "var hasFlags = function hasFlags() {\n  for (var _len = arguments.length, flags = new Array(_len), _key = 0; _key < _len; _key++) {\n    flags[_key] = arguments[_key];\n  }\n\n  return flags.every(function (flag) {\n    return process.argv.includes(/^-{1,2}/.test(flag) ? flag : '--' + flag);\n  });\n};",
            "example": "// node myScript.js -s --test --cool=true\nhasFlags('-s'); // true\nhasFlags('--test', 'cool=true', '-s'); // true\nhasFlags('special'); // false"
          },
          "tags": [
            "node",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "45c7a17b5debde35c4b31270a22e1a052fb4b4f1d7c05d10c8045caec96ef550",
          "firstSeen": "1514823883",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "hashBrowser",
        "title": "hashBrowser",
        "type": "snippet",
        "attributes": {
          "fileName": "hashBrowser.md",
          "text": "Creates a hash for a value using the [SHA-256](https://en.wikipedia.org/wiki/SHA-2) algorithm. Returns a promise.\n\nUse the [SubtleCrypto](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto) API to create a hash for the given value.\n\n",
          "codeBlocks": {
            "es6": "const hashBrowser = val =>\n  crypto.subtle.digest('SHA-256', new TextEncoder('utf-8').encode(val)).then(h => {\n    let hexes = [],\n      view = new DataView(h);\n    for (let i = 0; i < view.byteLength; i += 4)\n      hexes.push(('00000000' + view.getUint32(i).toString(16)).slice(-8));\n    return hexes.join('');\n  });",
            "es5": "var hashBrowser = function hashBrowser(val) {\n  return crypto.subtle.digest('SHA-256', new TextEncoder('utf-8').encode(val)).then(function (h) {\n    var hexes = [],\n        view = new DataView(h);\n\n    for (var i = 0; i < view.byteLength; i += 4) {\n      hexes.push(('00000000' + view.getUint32(i).toString(16)).slice(-8));\n    }\n\n    return hexes.join('');\n  });\n};",
            "example": "hashBrowser(JSON.stringify({ a: 'a', b: [1, 2, 3, 4], foo: { c: 'bar' } })).then(console.log); // '04aa106279f5977f59f9067fa9712afc4aedc6f5862a8defc34552d8c7206393'"
          },
          "tags": [
            "browser",
            "utility",
            "advanced",
            "promise"
          ]
        },
        "meta": {
          "hash": "beb6f68f5a8b63fd90a671758556aa72b5c061b681df049779cdf5631837966c",
          "firstSeen": "1516190941",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 3
        }
      },
      {
        "id": "hashNode",
        "title": "hashNode",
        "type": "snippet",
        "attributes": {
          "fileName": "hashNode.md",
          "text": "Creates a hash for a value using the [SHA-256](https://en.wikipedia.org/wiki/SHA-2) algorithm. Returns a promise.\n\nUse `crypto` API to create a hash for the given value, `setTimeout` to prevent blocking on a long operation, and a `Promise` to give it a familiar interface.\n\n",
          "codeBlocks": {
            "es6": "const crypto = require('crypto');\nconst hashNode = val =>\n  new Promise(resolve =>\n    setTimeout(\n      () =>\n        resolve(\n          crypto\n            .createHash('sha256')\n            .update(val)\n            .digest('hex')\n        ),\n      0\n    )\n  );",
            "es5": "var crypto = require('crypto');\n\nvar hashNode = function hashNode(val) {\n  return new Promise(function (resolve) {\n    return setTimeout(function () {\n      return resolve(crypto.createHash('sha256').update(val).digest('hex'));\n    }, 0);\n  });\n};",
            "example": "hashNode(JSON.stringify({ a: 'a', b: [1, 2, 3, 4], foo: { c: 'bar' } })).then(console.log); // '04aa106279f5977f59f9067fa9712afc4aedc6f5862a8defc34552d8c7206393'"
          },
          "tags": [
            "node",
            "utility",
            "promise",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "e7b6164cfaacf4869f997747df3e135a1ec4342abf5a56498586513332272a96",
          "firstSeen": "1516190941",
          "lastUpdated": "1565681352",
          "updateCount": 8,
          "authorCount": 4
        }
      },
      {
        "id": "hasKey",
        "title": "hasKey",
        "type": "snippet",
        "attributes": {
          "fileName": "hasKey.md",
          "text": "Returns `true` if the target value exists in a JSON object, `false` otherwise.\n\nCheck if `keys` is non-empty and use `Array.prototype.every()` to sequentially check its keys to internal depth of the object, `obj`. \nUse `Object.prototype.hasOwnProperty()` to check if `obj` does not have the current key or is not an object, stop propagation and return `false`.\nOtherwise assign the key's value to `obj` to use on the next iteration.\nReturn `false` beforehand if given key list is empty.\n\n",
          "codeBlocks": {
            "es6": "const hasKey = (obj, keys) => {\n  return (\n    keys.length > 0 &&\n    keys.every(key => {\n      if (typeof obj !== 'object' || !obj.hasOwnProperty(key)) return false;\n      obj = obj[key];\n      return true;\n    })\n  );\n};",
            "es5": "function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar hasKey = function hasKey(obj, keys) {\n  return keys.length > 0 && keys.every(function (key) {\n    if (_typeof(obj) !== 'object' || !obj.hasOwnProperty(key)) return false;\n    obj = obj[key];\n    return true;\n  });\n};",
            "example": "let obj = {\n  a: 1,\n  b: { c: 4 },\n  'b.d': 5\n};\nhasKey(obj, ['a']); // true\nhasKey(obj, ['b']); // true\nhasKey(obj, ['b', 'c']); // true\nhasKey(obj, ['b.d']); // true\nhasKey(obj, ['d']); // false\nhasKey(obj, ['c']); // false\nhasKey(obj, ['b', 'f']); // false"
          },
          "tags": [
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "09664f8ede4cc568302d52fe37d3a29dc6c4b052e76834e761a02c391178f33a",
          "firstSeen": "1571143513",
          "lastUpdated": "1574366548",
          "updateCount": 9,
          "authorCount": 4
        }
      },
      {
        "id": "haveSameContents",
        "title": "haveSameContents",
        "type": "snippet",
        "attributes": {
          "fileName": "haveSameContents.md",
          "text": "Returns `true` if two arrays contain the same elements regardless of order, `false` otherwise.\n\nUse a `for...of` loop over a `Set` created from the values of both arrays.\nUse `Array.prototype.filter()` to compare the amount of occurrences of each distinct value in both arrays.\nReturn `false` if the counts do not match for any element, `true` otherwise.\n\n",
          "codeBlocks": {
            "es6": "const haveSameContents = (a, b) => {\n  for (const v of new Set([...a, ...b]))\n    if (a.filter(e => e === v).length !== b.filter(e => e === v).length) return false;\n  return true;\n};",
            "es5": "function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar haveSameContents = function haveSameContents(a, b) {\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    var _loop = function _loop() {\n      var v = _step.value;\n      if (a.filter(function (e) {\n        return e === v;\n      }).length !== b.filter(function (e) {\n        return e === v;\n      }).length) return {\n        v: false\n      };\n    };\n\n    for (var _iterator = new Set([].concat(_toConsumableArray(a), _toConsumableArray(b)))[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var _ret = _loop();\n\n      if (_typeof(_ret) === \"object\") return _ret.v;\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  return true;\n};",
            "example": "haveSameContents([1, 2, 4], [2, 4, 1]); // true"
          },
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "f0d0ce8ae4bacbe68423d78be06d4d1afad8a2361954a4e06fea12aaac9c4392",
          "firstSeen": "1578253239",
          "lastUpdated": "1584841330",
          "updateCount": 4,
          "authorCount": 4
        }
      },
      {
        "id": "head",
        "title": "head",
        "type": "snippet",
        "attributes": {
          "fileName": "head.md",
          "text": "Returns the head of a list.\n\nCheck if `arr` is truthy and has a `length` property, use `arr[0]` if possible to return the first element, otherwise return `undefined`.\n\n",
          "codeBlocks": {
            "es6": "const head = arr => (arr && arr.length ? arr[0] : undefined);",
            "es5": "var head = function head(arr) {\n  return arr && arr.length ? arr[0] : undefined;\n};",
            "example": "head([1, 2, 3]); // 1\nhead([]); // undefined\nhead(null); // undefined\nhead(undefined); // undefined"
          },
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "5ab776577e1c861d4a2b17fbc72837b77b9cbeeea2bacb5614c8bd9b7efcec7a",
          "firstSeen": "1513521691",
          "lastUpdated": "1576050720",
          "updateCount": 9,
          "authorCount": 5
        }
      },
      {
        "id": "hexToRGB",
        "title": "hexToRGB",
        "type": "snippet",
        "attributes": {
          "fileName": "hexToRGB.md",
          "text": "Converts a color code to a `rgb()` or `rgba()` string if alpha value is provided.\n\nUse bitwise right-shift operator and mask bits with `&` (and) operator to convert a hexadecimal color code (with or without prefixed with `#`) to a string with the RGB values. If it's 3-digit color code, first convert to 6-digit version. If an alpha value is provided alongside 6-digit hex, give `rgba()` string in return.\n\n",
          "codeBlocks": {
            "es6": "const hexToRGB = hex => {\n  let alpha = false,\n    h = hex.slice(hex.startsWith('#') ? 1 : 0);\n  if (h.length === 3) h = [...h].map(x => x + x).join('');\n  else if (h.length === 8) alpha = true;\n  h = parseInt(h, 16);\n  return (\n    'rgb' +\n    (alpha ? 'a' : '') +\n    '(' +\n    (h >>> (alpha ? 24 : 16)) +\n    ', ' +\n    ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +\n    ', ' +\n    ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +\n    (alpha ? `, ${h & 0x000000ff}` : '') +\n    ')'\n  );\n};",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar hexToRGB = function hexToRGB(hex) {\n  var alpha = false,\n      h = hex.slice(hex.startsWith('#') ? 1 : 0);\n  if (h.length === 3) h = _toConsumableArray(h).map(function (x) {\n    return x + x;\n  }).join('');else if (h.length === 8) alpha = true;\n  h = parseInt(h, 16);\n  return 'rgb' + (alpha ? 'a' : '') + '(' + (h >>> (alpha ? 24 : 16)) + ', ' + ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) + ', ' + ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) + (alpha ? \", \".concat(h & 0x000000ff) : '') + ')';\n};",
            "example": "hexToRGB('#27ae60ff'); // 'rgba(39, 174, 96, 255)'\nhexToRGB('27ae60'); // 'rgb(39, 174, 96)'\nhexToRGB('#fff'); // 'rgb(255, 255, 255)'"
          },
          "tags": [
            "utility",
            "string",
            "math",
            "advanced"
          ]
        },
        "meta": {
          "hash": "f61b08541372ded95a947cc570f57f7bbc9c7908ede569d59f294c5b9ef6feb1",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 10,
          "authorCount": 8
        }
      },
      {
        "id": "hide",
        "title": "hide",
        "type": "snippet",
        "attributes": {
          "fileName": "hide.md",
          "text": "Hides all the elements specified.\n\nUse `NodeList.prototype.forEach()` to apply `display: none` to each element specified.\n\n",
          "codeBlocks": {
            "es6": "const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));",
            "es5": "var hide = function hide() {\n  for (var _len = arguments.length, el = new Array(_len), _key = 0; _key < _len; _key++) {\n    el[_key] = arguments[_key];\n  }\n\n  return [].concat(el).forEach(function (e) {\n    return e.style.display = 'none';\n  });\n};",
            "example": "hide(document.querySelectorAll('img')); // Hides all <img> elements on the page"
          },
          "tags": [
            "browser",
            "css",
            "beginner"
          ]
        },
        "meta": {
          "hash": "b2cb8be1a0e2b2d6471762cdac531925aa3c0c695f2ef162e0c8c1f4a1c174aa",
          "firstSeen": "1514496801",
          "lastUpdated": "1565681352",
          "updateCount": 11,
          "authorCount": 7
        }
      },
      {
        "id": "httpGet",
        "title": "httpGet",
        "type": "snippet",
        "attributes": {
          "fileName": "httpGet.md",
          "text": "Makes a `GET` request to the passed URL.\n\nUse [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) web api to make a `get` request to the given `url`.\nHandle the `onload` event, by calling the given `callback` the `responseText`.\nHandle the `onerror` event, by running the provided `err` function.\nOmit the third argument, `err`, to log errors to the console's `error` stream by default.\n\n",
          "codeBlocks": {
            "es6": "const httpGet = (url, callback, err = console.error) => {\n  const request = new XMLHttpRequest();\n  request.open('GET', url, true);\n  request.onload = () => callback(request.responseText);\n  request.onerror = () => err(request);\n  request.send();\n};",
            "es5": "var httpGet = function httpGet(url, callback) {\n  var err = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : console.error;\n  var request = new XMLHttpRequest();\n  request.open('GET', url, true);\n\n  request.onload = function () {\n    return callback(request.responseText);\n  };\n\n  request.onerror = function () {\n    return err(request);\n  };\n\n  request.send();\n};",
            "example": "httpGet(\n  'https://jsonplaceholder.typicode.com/posts/1',\n  console.log\n); /*\nLogs: {\n  \"userId\": 1,\n  \"id\": 1,\n  \"title\": \"sunt aut facere repellat provident occaecati excepturi optio reprehenderit\",\n  \"body\": \"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\"\n}\n*/"
          },
          "tags": [
            "utility",
            "url",
            "browser",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "c138c0e5f16d48997691a98de7c0bc43b228a0b4285f0ab2b26d230e209d1530",
          "firstSeen": "1515428512",
          "lastUpdated": "1565681352",
          "updateCount": 12,
          "authorCount": 4
        }
      },
      {
        "id": "httpPost",
        "title": "httpPost",
        "type": "snippet",
        "attributes": {
          "fileName": "httpPost.md",
          "text": "Makes a `POST` request to the passed URL.\n\nUse [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) web api to make a `post` request to the given `url`.\nSet the value of an `HTTP` request header with `setRequestHeader` method.\nHandle the `onload` event, by calling the given `callback` the `responseText`.\nHandle the `onerror` event, by running the provided `err` function.\nOmit the third argument, `data`, to send no data to the provided `url`.\nOmit the fourth argument, `err`, to log errors to the console's `error` stream by default.\n\n",
          "codeBlocks": {
            "es6": "const httpPost = (url, data, callback, err = console.error) => {\n  const request = new XMLHttpRequest();\n  request.open('POST', url, true);\n  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');\n  request.onload = () => callback(request.responseText);\n  request.onerror = () => err(request);\n  request.send(data);\n};",
            "es5": "var httpPost = function httpPost(url, data, callback) {\n  var err = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : console.error;\n  var request = new XMLHttpRequest();\n  request.open('POST', url, true);\n  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');\n\n  request.onload = function () {\n    return callback(request.responseText);\n  };\n\n  request.onerror = function () {\n    return err(request);\n  };\n\n  request.send(data);\n};",
            "example": "const newPost = {\n  userId: 1,\n  id: 1337,\n  title: 'Foo',\n  body: 'bar bar bar'\n};\nconst data = JSON.stringify(newPost);\nhttpPost(\n  'https://jsonplaceholder.typicode.com/posts',\n  data,\n  console.log\n); /*\nLogs: {\n  \"userId\": 1,\n  \"id\": 1337,\n  \"title\": \"Foo\",\n  \"body\": \"bar bar bar\"\n}\n*/\nhttpPost(\n  'https://jsonplaceholder.typicode.com/posts',\n  null, // does not send a body\n  console.log\n); /*\nLogs: {\n  \"id\": 101\n}\n*/"
          },
          "tags": [
            "utility",
            "url",
            "browser",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "5b29941074f19769531b3320ec8d61e2b2bdc69735fb781bf7e880ff2080ec04",
          "firstSeen": "1515442022",
          "lastUpdated": "1565681352",
          "updateCount": 30,
          "authorCount": 5
        }
      },
      {
        "id": "httpsRedirect",
        "title": "httpsRedirect",
        "type": "snippet",
        "attributes": {
          "fileName": "httpsRedirect.md",
          "text": "Redirects the page to HTTPS if its currently in HTTP. Also, pressing the back button doesn't take it back to the HTTP page as its replaced in the history.\n\nUse `location.protocol` to get the protocol currently being used. If it's not HTTPS, use `location.replace()` to replace the existing page with the HTTPS version of the page. Use `location.href` to get the full address, split it with `String.prototype.split()` and remove the protocol part of the URL.\n\n",
          "codeBlocks": {
            "es6": "const httpsRedirect = () => {\n  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);\n};",
            "es5": "var httpsRedirect = function httpsRedirect() {\n  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);\n};",
            "example": "httpsRedirect(); // If you are on http://mydomain.com, you are redirected to https://mydomain.com"
          },
          "tags": [
            "browser",
            "url",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "37468f75e3b2200d43906644eacce72a17a0e22441367bf1b8689e01e3c9ee76",
          "firstSeen": "1513838036",
          "lastUpdated": "1565681352",
          "updateCount": 8,
          "authorCount": 5
        }
      },
      {
        "id": "hz",
        "title": "hz",
        "type": "snippet",
        "attributes": {
          "fileName": "hz.md",
          "text": "Returns the number of times a function executed per second. \n`hz` is the unit for `hertz`, the unit of frequency defined as one cycle per second.\n\nUse `performance.now()` to get the difference in milliseconds before and after the iteration loop to calculate the time elapsed executing the function `iterations` times. \nReturn the number of cycles per second by converting milliseconds to seconds and dividing it by the time elapsed. \nOmit the second argument, `iterations`, to use the default of 100 iterations.\n\n",
          "codeBlocks": {
            "es6": "const hz = (fn, iterations = 100) => {\n  const before = performance.now();\n  for (let i = 0; i < iterations; i++) fn();\n  return (1000 * iterations) / (performance.now() - before);\n};",
            "es5": "var hz = function hz(fn) {\n  var iterations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;\n  var before = performance.now();\n\n  for (var i = 0; i < iterations; i++) {\n    fn();\n  }\n\n  return 1000 * iterations / (performance.now() - before);\n};",
            "example": "// 10,000 element array\nconst numbers = Array(10000)\n  .fill()\n  .map((_, i) => i);\n\n// Test functions with the same goal: sum up the elements in the array\nconst sumReduce = () => numbers.reduce((acc, n) => acc + n, 0);\nconst sumForLoop = () => {\n  let sum = 0;\n  for (let i = 0; i < numbers.length; i++) sum += numbers[i];\n  return sum;\n};\n\n// `sumForLoop` is nearly 10 times faster\nMath.round(hz(sumReduce)); // 572\nMath.round(hz(sumForLoop)); // 4784"
          },
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "542bc8c7cc17654b02dc9fdcd6791901f61a6907c89e42192f6e5d2a8eba41be",
          "firstSeen": "1523453989",
          "lastUpdated": "1565681352",
          "updateCount": 9,
          "authorCount": 4
        }
      },
      {
        "id": "includesAll",
        "title": "includesAll",
        "type": "snippet",
        "attributes": {
          "fileName": "includesAll.md",
          "text": "Returns `true` if all the elements in `values` are included in `arr`, `false` otherwise.\n\nUse `Array.prototype.every()` and `Array.prototype.includes()` to check if all elements of `values` are included in `arr`.\n\n",
          "codeBlocks": {
            "es6": "const includesAll = (arr, values) => values.every(v => arr.includes(v));",
            "es5": "var includesAll = function includesAll(arr, values) {\n  return values.every(function (v) {\n    return arr.includes(v);\n  });\n};",
            "example": "includesAll([1, 2, 3, 4], [1, 4]); // true\nincludesAll([1, 2, 3, 4], [1, 5]); // false"
          },
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "c1fa01ef5f13cc1f814d0ca0814f73fc7e74e394302fdc34724ba21e0c62be7b",
          "firstSeen": "1572896236",
          "lastUpdated": "1582040633",
          "updateCount": 4,
          "authorCount": 3
        }
      },
      {
        "id": "includesAny",
        "title": "includesAny",
        "type": "snippet",
        "attributes": {
          "fileName": "includesAny.md",
          "text": "Returns `true` if at least one element of values is included in arr , `false` otherwise.\n\nUse `Array.prototype.some()` and `Array.prototype.includes()` to check if at least one element of `values` is included in `arr`.\n\n",
          "codeBlocks": {
            "es6": "const includesAny = (arr, values) => values.some(v => arr.includes(v));",
            "es5": "var includesAny = function includesAny(arr, values) {\n  return values.some(function (v) {\n    return arr.includes(v);\n  });\n};",
            "example": "includesAny([1, 2, 3, 4], [2, 9]); // true\nincludesAny([1, 2, 3, 4], [8, 9]); // false"
          },
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "8f19064ba89ab86c50456844646b56f6bd2afec2fc4f9ab3478bd6201510a745",
          "firstSeen": "1572817757",
          "lastUpdated": "1572817757",
          "updateCount": 2,
          "authorCount": 2
        }
      },
      {
        "id": "indentString",
        "title": "indentString",
        "type": "snippet",
        "attributes": {
          "fileName": "indentString.md",
          "text": "Indents each line in the provided string.\n\nUse `String.replace` and a regular expression to add the character specified by `indent` `count` times at the start of each line.\nOmit the third parameter, `indent`, to use a default indentation character of `' '`.\n\n",
          "codeBlocks": {
            "es6": "const indentString = (str, count, indent = ' ') => str.replace(/^/gm, indent.repeat(count));",
            "es5": "var indentString = function indentString(str, count) {\n  var indent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';\n  return str.replace(/^/gm, indent.repeat(count));\n};",
            "example": "indentString('Lorem\\nIpsum', 2); // '  Lorem\\n  Ipsum'\nindentString('Lorem\\nIpsum', 2, '_'); // '__Lorem\\n__Ipsum'"
          },
          "tags": [
            "string",
            "utility",
            "beginner"
          ]
        },
        "meta": {
          "hash": "544ebe19f71cab5f4b4ad5a6121d4327ebf2b09f04451151e7339c90c8924789",
          "firstSeen": "1537816467",
          "lastUpdated": "1565681352",
          "updateCount": 4,
          "authorCount": 3
        }
      },
      {
        "id": "indexOfAll",
        "title": "indexOfAll",
        "type": "snippet",
        "attributes": {
          "fileName": "indexOfAll.md",
          "text": "Returns all indices of `val` in an array.\nIf `val` never occurs, returns `[]`.\n\nUse `Array.prototype.reduce()` to loop over elements and store indices for matching elements.\nReturn the array of indices.\n\n",
          "codeBlocks": {
            "es6": "const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar indexOfAll = function indexOfAll(arr, val) {\n  return arr.reduce(function (acc, el, i) {\n    return el === val ? [].concat(_toConsumableArray(acc), [i]) : acc;\n  }, []);\n};",
            "example": "indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0, 3]\nindexOfAll([1, 2, 3], 4); // []"
          },
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "758f29d3ce7faa946104229405156da66ca357bd70dccfe18ec5cabd4841f286",
          "firstSeen": "1515233276",
          "lastUpdated": "1582050266",
          "updateCount": 15,
          "authorCount": 7
        }
      },
      {
        "id": "initial",
        "title": "initial",
        "type": "snippet",
        "attributes": {
          "fileName": "initial.md",
          "text": "Returns all the elements of an array except the last one.\n\nUse `arr.slice(0,-1)` to return all but the last element of the array.\n\n",
          "codeBlocks": {
            "es6": "const initial = arr => arr.slice(0, -1);",
            "es5": "var initial = function initial(arr) {\n  return arr.slice(0, -1);\n};",
            "example": "initial([1, 2, 3]); // [1,2]"
          },
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "c2479bc7d9e651dde057378ed2641f37b75d5b4fc8ed295997bea8d37d46bba0",
          "firstSeen": "1513521691",
          "lastUpdated": "1565681352",
          "updateCount": 8,
          "authorCount": 5
        }
      },
      {
        "id": "initialize2DArray",
        "title": "initialize2DArray",
        "type": "snippet",
        "attributes": {
          "fileName": "initialize2DArray.md",
          "text": "Initializes a 2D array of given width and height and value.\n\nUse `Array.prototype.map()` to generate h rows where each is a new array of size w initialize with value. If the value is not provided, default to `null`.\n\n",
          "codeBlocks": {
            "es6": "const initialize2DArray = (w, h, val = null) =>\n  Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val));",
            "es5": "var initialize2DArray = function initialize2DArray(w, h) {\n  var val = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n  return Array.from({\n    length: h\n  }).map(function () {\n    return Array.from({\n      length: w\n    }).fill(val);\n  });\n};",
            "example": "initialize2DArray(2, 2, 0); // [[0,0], [0,0]]"
          },
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "ada7e68c9a5a701265c1ea38dfc253b8ccb7d9c261dffcf9a42cc560b264cabc",
          "firstSeen": "1513719498",
          "lastUpdated": "1565681352",
          "updateCount": 15,
          "authorCount": 9
        }
      },
      {
        "id": "initializeArrayWithRange",
        "title": "initializeArrayWithRange",
        "type": "snippet",
        "attributes": {
          "fileName": "initializeArrayWithRange.md",
          "text": "Initializes an array containing the numbers in the specified range where `start` and `end` are inclusive with their common difference `step`.\n\nUse `Array.from()` to create an array of the desired length, `(end - start + 1)/step`, and a map function to fill it with the desired values in the given range.\nYou can omit `start` to use a default value of `0`.\nYou can omit `step` to use a default value of `1`.\n\n",
          "codeBlocks": {
            "es6": "const initializeArrayWithRange = (end, start = 0, step = 1) =>\n  Array.from({ length: Math.ceil((end - start + 1) / step) }, (v, i) => i * step + start);",
            "es5": "var initializeArrayWithRange = function initializeArrayWithRange(end) {\n  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n  return Array.from({\n    length: Math.ceil((end - start + 1) / step)\n  }, function (v, i) {\n    return i * step + start;\n  });\n};",
            "example": "initializeArrayWithRange(5); // [0,1,2,3,4,5]\ninitializeArrayWithRange(7, 3); // [3,4,5,6,7]\ninitializeArrayWithRange(9, 0, 2); // [0,2,4,6,8]"
          },
          "tags": [
            "array",
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "f4e970fb09664acfd567ee0ebc9867672095c529778b8b9169ed5b13d431c563",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 23,
          "authorCount": 11
        }
      },
      {
        "id": "initializeArrayWithRangeRight",
        "title": "initializeArrayWithRangeRight",
        "type": "snippet",
        "attributes": {
          "fileName": "initializeArrayWithRangeRight.md",
          "text": "Initializes an array containing the numbers in the specified range (in reverse) where `start` and `end` are inclusive with their common difference `step`.\n\nUse `Array.from(Math.ceil((end+1-start)/step))` to create an array of the desired length(the amounts of elements is equal to `(end-start)/step` or `(end+1-start)/step` for inclusive end), `Array.prototype.map()` to fill with the desired values in a range.\nYou can omit `start` to use a default value of `0`.\nYou can omit `step` to use a default value of `1`.\n\n",
          "codeBlocks": {
            "es6": "const initializeArrayWithRangeRight = (end, start = 0, step = 1) =>\n  Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(\n    (v, i, arr) => (arr.length - i - 1) * step + start\n  );",
            "es5": "var initializeArrayWithRangeRight = function initializeArrayWithRangeRight(end) {\n  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n  return Array.from({\n    length: Math.ceil((end + 1 - start) / step)\n  }).map(function (v, i, arr) {\n    return (arr.length - i - 1) * step + start;\n  });\n};",
            "example": "initializeArrayWithRangeRight(5); // [5,4,3,2,1,0]\ninitializeArrayWithRangeRight(7, 3); // [7,6,5,4,3]\ninitializeArrayWithRangeRight(9, 0, 2); // [8,6,4,2,0]"
          },
          "tags": [
            "array",
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "59cc7791996547b646472153ebb1fb0bee4d177199e6a7311791eab98c58e3be",
          "firstSeen": "1516115379",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "initializeArrayWithValues",
        "title": "initializeArrayWithValues",
        "type": "snippet",
        "attributes": {
          "fileName": "initializeArrayWithValues.md",
          "text": "Initializes and fills an array with the specified values.\n\nUse `Array(n)` to create an array of the desired length, `fill(v)` to fill it with the desired values.\nYou can omit `val` to use a default value of `0`.\n\n",
          "codeBlocks": {
            "es6": "const initializeArrayWithValues = (n, val = 0) => Array(n).fill(val);",
            "es5": "var initializeArrayWithValues = function initializeArrayWithValues(n) {\n  var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  return Array(n).fill(val);\n};",
            "example": "initializeArrayWithValues(5, 2); // [2, 2, 2, 2, 2]"
          },
          "tags": [
            "array",
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "0e8321b0286c38321fdb3e27353567cdb03c6767152210e8e14e4925057adfe1",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 9,
          "authorCount": 4
        }
      },
      {
        "id": "initializeNDArray",
        "title": "initializeNDArray",
        "type": "snippet",
        "attributes": {
          "fileName": "initializeNDArray.md",
          "text": "Create a n-dimensional array with given value.\n\nUse recursion.\nUse `Array.prototype.map()` to generate rows where each is a new array initialized using `initializeNDArray`.\n\n",
          "codeBlocks": {
            "es6": "const initializeNDArray = (val, ...args) =>\n  args.length === 0\n    ? val\n    : Array.from({ length: args[0] }).map(() => initializeNDArray(val, ...args.slice(1)));",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar initializeNDArray = function initializeNDArray(val) {\n  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    args[_key - 1] = arguments[_key];\n  }\n\n  return args.length === 0 ? val : Array.from({\n    length: args[0]\n  }).map(function () {\n    return initializeNDArray.apply(void 0, [val].concat(_toConsumableArray(args.slice(1))));\n  });\n};",
            "example": "initializeNDArray(1, 3); // [1,1,1]\ninitializeNDArray(5, 2, 2, 2); // [[[5,5],[5,5]],[[5,5],[5,5]]]"
          },
          "tags": [
            "array",
            "recursion",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "21b455190adbd8b80d2559a88d9ec244ac32544235b7cfed8caca65c11c8ab80",
          "firstSeen": "1523692359",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 5
        }
      },
      {
        "id": "inRange",
        "title": "inRange",
        "type": "snippet",
        "attributes": {
          "fileName": "inRange.md",
          "text": "Checks if the given number falls within the given range.\n\nUse arithmetic comparison to check if the given number is in the specified range.\nIf the second parameter, `end`, is not specified, the range is considered to be from `0` to `start`.\n\n",
          "codeBlocks": {
            "es6": "const inRange = (n, start, end = null) => {\n  if (end && start > end) [end, start] = [start, end];\n  return end == null ? n >= 0 && n < start : n >= start && n < end;\n};",
            "es5": "var inRange = function inRange(n, start) {\n  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n\n  if (end && start > end) {\n    var _ref = [start, end];\n    end = _ref[0];\n    start = _ref[1];\n  }\n\n  return end == null ? n >= 0 && n < start : n >= start && n < end;\n};",
            "example": "inRange(3, 2, 5); // true\ninRange(3, 4); // true\ninRange(2, 3, 5); // false\ninRange(3, 2); // false"
          },
          "tags": [
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "911d4a90c6ded62d063887e772d4017d4612e4fce48e79836ad19fc41e2c1abe",
          "firstSeen": "1513787638",
          "lastUpdated": "1565681352",
          "updateCount": 12,
          "authorCount": 7
        }
      },
      {
        "id": "insertAfter",
        "title": "insertAfter",
        "type": "snippet",
        "attributes": {
          "fileName": "insertAfter.md",
          "text": "Inserts an HTML string after the end of the specified element.\n\nUse `el.insertAdjacentHTML()` with a position of `'afterend'` to parse `htmlString` and insert it after the end of `el`.\n\n",
          "codeBlocks": {
            "es6": "const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);",
            "es5": "var insertAfter = function insertAfter(el, htmlString) {\n  return el.insertAdjacentHTML('afterend', htmlString);\n};",
            "example": "insertAfter(document.getElementById('myId'), '<p>after</p>');\n// <div id=\"myId\">...</div> <p>after</p>"
          },
          "tags": [
            "browser",
            "beginner"
          ]
        },
        "meta": {
          "hash": "ed0aaf8c5ebaa3b1e75a60af42c56ad19d3b99c6ba7257e1cfd4b245546b528f",
          "firstSeen": "1529431078",
          "lastUpdated": "1583481460",
          "updateCount": 5,
          "authorCount": 3
        }
      },
      {
        "id": "insertBefore",
        "title": "insertBefore",
        "type": "snippet",
        "attributes": {
          "fileName": "insertBefore.md",
          "text": "Inserts an HTML string before the start of the specified element.\n\nUse `el.insertAdjacentHTML()` with a position of `'beforebegin'` to parse `htmlString` and insert it before the start of `el`.\n\n",
          "codeBlocks": {
            "es6": "const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);",
            "es5": "var insertBefore = function insertBefore(el, htmlString) {\n  return el.insertAdjacentHTML('beforebegin', htmlString);\n};",
            "example": "insertBefore(document.getElementById('myId'), '<p>before</p>');\n// <p>before</p> <div id=\"myId\">...</div>"
          },
          "tags": [
            "browser",
            "beginner"
          ]
        },
        "meta": {
          "hash": "bf4e5f5e31ce7057a18c2b54dd516ec647819b5a5246a93e883ade756ff39fd9",
          "firstSeen": "1529431078",
          "lastUpdated": "1583481460",
          "updateCount": 5,
          "authorCount": 3
        }
      },
      {
        "id": "intersection",
        "title": "intersection",
        "type": "snippet",
        "attributes": {
          "fileName": "intersection.md",
          "text": "Returns a list of elements that exist in both arrays.\n\nCreate a `Set` from `b`, then use `Array.prototype.filter()` on `a` to only keep values contained in `b`.\n\n",
          "codeBlocks": {
            "es6": "const intersection = (a, b) => {\n  const s = new Set(b);\n  return [...new Set(a)].filter(x => s.has(x));\n};",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar intersection = function intersection(a, b) {\n  var s = new Set(b);\n  return _toConsumableArray(new Set(a)).filter(function (x) {\n    return s.has(x);\n  });\n};",
            "example": "intersection([1, 2, 3], [4, 3, 2]); // [2, 3]"
          },
          "tags": [
            "array",
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "2aaacc455daf09a786616441e0f63fb5036d02d16611221135eede83724e9b73",
          "firstSeen": "1513521691",
          "lastUpdated": "1582054138",
          "updateCount": 10,
          "authorCount": 5
        }
      },
      {
        "id": "intersectionBy",
        "title": "intersectionBy",
        "type": "snippet",
        "attributes": {
          "fileName": "intersectionBy.md",
          "text": "Returns a list of elements that exist in both arrays, after applying the provided function to each array element of both.\n\nCreate a `Set` by applying `fn` to all elements in `b`, then use `Array.prototype.filter()` on `a` to only keep elements, which produce values contained in `b` when `fn` is applied to them.\n\n",
          "codeBlocks": {
            "es6": "const intersectionBy = (a, b, fn) => {\n  const s = new Set(b.map(fn));\n  return [...new Set(a)].filter(x => s.has(fn(x)));\n};",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar intersectionBy = function intersectionBy(a, b, fn) {\n  var s = new Set(b.map(fn));\n  return _toConsumableArray(new Set(a)).filter(function (x) {\n    return s.has(fn(x));\n  });\n};",
            "example": "intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]"
          },
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "6fd8156a416578b0051bd7aaa5078ee3f34a6c6d0c1dbab97436ad10f6d3efc9",
          "firstSeen": "1516791198",
          "lastUpdated": "1582054161",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "intersectionWith",
        "title": "intersectionWith",
        "type": "snippet",
        "attributes": {
          "fileName": "intersectionWith.md",
          "text": "Returns a list of elements that exist in both arrays, using a provided comparator function.\n\nUse `Array.prototype.filter()` and `Array.prototype.findIndex()` in combination with the provided comparator to determine intersecting values.\n\n",
          "codeBlocks": {
            "es6": "const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);",
            "es5": "var intersectionWith = function intersectionWith(a, b, comp) {\n  return a.filter(function (x) {\n    return b.findIndex(function (y) {\n      return comp(x, y);\n    }) !== -1;\n  });\n};",
            "example": "intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1.5, 3, 0]"
          },
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "3dd3ad662f52d4189d00c5abea2e3d8f408acc789065d2071d16ff2a442c7c55",
          "firstSeen": "1516791198",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "invertKeyValues",
        "title": "invertKeyValues",
        "type": "snippet",
        "attributes": {
          "fileName": "invertKeyValues.md",
          "text": "Inverts the key-value pairs of an object, without mutating it. The corresponding inverted value of each inverted key is an array of keys responsible for generating the inverted value. If a function is supplied, it is applied to each inverted key.\n\nUse `Object.keys()` and `Array.prototype.reduce()` to invert the key-value pairs of an object and apply the function provided (if any).\nOmit the second argument, `fn`, to get the inverted keys without applying a function to them.\n\n",
          "codeBlocks": {
            "es6": "const invertKeyValues = (obj, fn) =>\n  Object.keys(obj).reduce((acc, key) => {\n    const val = fn ? fn(obj[key]) : obj[key];\n    acc[val] = acc[val] || [];\n    acc[val].push(key);\n    return acc;\n  }, {});",
            "es5": "var invertKeyValues = function invertKeyValues(obj, fn) {\n  return Object.keys(obj).reduce(function (acc, key) {\n    var val = fn ? fn(obj[key]) : obj[key];\n    acc[val] = acc[val] || [];\n    acc[val].push(key);\n    return acc;\n  }, {});\n};",
            "example": "invertKeyValues({ a: 1, b: 2, c: 1 }); // { 1: [ 'a', 'c' ], 2: [ 'b' ] }\ninvertKeyValues({ a: 1, b: 2, c: 1 }, value => 'group' + value); // { group1: [ 'a', 'c' ], group2: [ 'b' ] }"
          },
          "tags": [
            "object",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "193618c3f15f2aa14ce53dd88ee928aa8f6be6891c5253d7921eb87547ee7dbd",
          "firstSeen": "1514820826",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "is",
        "title": "is",
        "type": "snippet",
        "attributes": {
          "fileName": "is.md",
          "text": "Checks if the provided value is of the specified type.\n\nEnsure the value is not `undefined` or `null` using `Array.prototype.includes()`, and compare the `constructor` property on the value with `type` to check if the provided value is of the specified `type`.\n\n",
          "codeBlocks": {
            "es6": "const is = (type, val) => ![, null].includes(val) && val.constructor === type;",
            "es5": "var is = function is(type, val) {\n  return ![, null].includes(val) && val.constructor === type;\n};",
            "example": "is(Array, [1]); // true\nis(ArrayBuffer, new ArrayBuffer()); // true\nis(Map, new Map()); // true\nis(RegExp, /./g); // true\nis(Set, new Set()); // true\nis(WeakMap, new WeakMap()); // true\nis(WeakSet, new WeakSet()); // true\nis(String, ''); // true\nis(String, new String('')); // true\nis(Number, 1); // true\nis(Number, new Number(1)); // true\nis(Boolean, true); // true\nis(Boolean, new Boolean(true)); // true"
          },
          "tags": [
            "type",
            "array",
            "regexp",
            "beginner"
          ]
        },
        "meta": {
          "hash": "c9bbbe9ff32915b2c44849dfe8e1ab3554383cb0b7df9551424ca2597e355f41",
          "firstSeen": "1516217026",
          "lastUpdated": "1565681352",
          "updateCount": 8,
          "authorCount": 5
        }
      },
      {
        "id": "isAbsoluteURL",
        "title": "isAbsoluteURL",
        "type": "snippet",
        "attributes": {
          "fileName": "isAbsoluteURL.md",
          "text": "Returns `true` if the given string is an absolute URL, `false` otherwise.\n\nUse a regular expression to test if the string is an absolute URL.\n\n",
          "codeBlocks": {
            "es6": "const isAbsoluteURL = str => /^[a-z][a-z0-9+.-]*:/.test(str);",
            "es5": "var isAbsoluteURL = function isAbsoluteURL(str) {\n  return /^[a-z][a-z0-9+.-]*:/.test(str);\n};",
            "example": "isAbsoluteURL('https://google.com'); // true\nisAbsoluteURL('ftp://www.myserver.net'); // true\nisAbsoluteURL('/foo/bar'); // false"
          },
          "tags": [
            "string",
            "utility",
            "browser",
            "url",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "7523c5d3ab85075efa61efc135bb1c8d85e2a2e5407ddc5768099993d46f13b5",
          "firstSeen": "1514724165",
          "lastUpdated": "1565681352",
          "updateCount": 4,
          "authorCount": 3
        }
      },
      {
        "id": "isAfterDate",
        "title": "isAfterDate",
        "type": "snippet",
        "attributes": {
          "fileName": "isAfterDate.md",
          "text": "Check if a date is after another date.\n\nUse the greater than operator (`>`) to check if the first date comes after the second one.\n\n",
          "codeBlocks": {
            "es6": "const isAfterDate = (dateA, dateB) => dateA > dateB;",
            "es5": "var isAfterDate = function isAfterDate(dateA, dateB) {\n  return dateA > dateB;\n};",
            "example": "isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true"
          },
          "tags": [
            "date",
            "utility",
            "beginner"
          ]
        },
        "meta": {
          "hash": "19efe22718bca00459c41fa9df56c3574270c500bdd670873358052ccc870f5b",
          "firstSeen": "1538218718",
          "lastUpdated": "1565681352",
          "updateCount": 3,
          "authorCount": 2
        }
      },
      {
        "id": "isAnagram",
        "title": "isAnagram",
        "type": "snippet",
        "attributes": {
          "fileName": "isAnagram.md",
          "text": "Checks if a string is an anagram of another string (case-insensitive, ignores spaces, punctuation and special characters).\n\nUse `String.prototype.toLowerCase()`, `String.prototype.replace()` with an appropriate regular expression to remove unnecessary characters, `String.prototype.split('')`, `Array.prototype.sort()` and `Array.prototype.join('')` on both strings to normalize them, then check if their normalized forms are equal.\n\n",
          "codeBlocks": {
            "es6": "const isAnagram = (str1, str2) => {\n  const normalize = str =>\n    str\n      .toLowerCase()\n      .replace(/[^a-z0-9]/gi, '')\n      .split('')\n      .sort()\n      .join('');\n  return normalize(str1) === normalize(str2);\n};",
            "es5": "var isAnagram = function isAnagram(str1, str2) {\n  var normalize = function normalize(str) {\n    return str.toLowerCase().replace(/[^a-z0-9]/gi, '').split('').sort().join('');\n  };\n\n  return normalize(str1) === normalize(str2);\n};",
            "example": "isAnagram('iceman', 'cinema'); // true"
          },
          "tags": [
            "string",
            "regexp",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "0988d3506c206c544948142c4b65b471d0d0bdabdfc464fc40260f9ccc054f52",
          "firstSeen": "1519048067",
          "lastUpdated": "1579682956",
          "updateCount": 7,
          "authorCount": 4
        }
      },
      {
        "id": "isArrayLike",
        "title": "isArrayLike",
        "type": "snippet",
        "attributes": {
          "fileName": "isArrayLike.md",
          "text": "Checks if the provided argument is array-like (i.e. is iterable).\n\nCheck if the provided argument is not `null` and that its `Symbol.iterator` property is a function.\n\n",
          "codeBlocks": {
            "es6": "const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';",
            "es5": "var isArrayLike = function isArrayLike(obj) {\n  return obj != null && typeof obj[Symbol.iterator] === 'function';\n};",
            "example": "isArrayLike(document.querySelectorAll('.className')); // true\nisArrayLike('abc'); // true\nisArrayLike(null); // false"
          },
          "tags": [
            "type",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "0694b883486ca56109cb2c2ad8ed3477c0c4ee84d2fa81884409c40302a13fa7",
          "firstSeen": "1514724781",
          "lastUpdated": "1565681352",
          "updateCount": 18,
          "authorCount": 5
        }
      },
      {
        "id": "isBeforeDate",
        "title": "isBeforeDate",
        "type": "snippet",
        "attributes": {
          "fileName": "isBeforeDate.md",
          "text": "Check if a date is before another date.\n\nUse the less than operator (`<`) to check if the first date comes before the second one.\n\n",
          "codeBlocks": {
            "es6": "const isBeforeDate = (dateA, dateB) => dateA < dateB;",
            "es5": "var isBeforeDate = function isBeforeDate(dateA, dateB) {\n  return dateA < dateB;\n};",
            "example": "isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true"
          },
          "tags": [
            "date",
            "utility",
            "beginner"
          ]
        },
        "meta": {
          "hash": "e0d70480b239a585f907c965214a037ce23ae15f5484ab80930ea9f57cbe529e",
          "firstSeen": "1538218718",
          "lastUpdated": "1565681352",
          "updateCount": 3,
          "authorCount": 2
        }
      },
      {
        "id": "isBoolean",
        "title": "isBoolean",
        "type": "snippet",
        "attributes": {
          "fileName": "isBoolean.md",
          "text": "Checks if the given argument is a native boolean element.\n\nUse `typeof` to check if a value is classified as a boolean primitive.\n\n",
          "codeBlocks": {
            "es6": "const isBoolean = val => typeof val === 'boolean';",
            "es5": "var isBoolean = function isBoolean(val) {\n  return typeof val === 'boolean';\n};",
            "example": "isBoolean(null); // false\nisBoolean(false); // true"
          },
          "tags": [
            "type",
            "beginner"
          ]
        },
        "meta": {
          "hash": "2c2e66152db8a6445af911c49a181d4cd5ca92db5bd23f24124d2df06bebbc15",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "isBrowser",
        "title": "isBrowser",
        "type": "snippet",
        "attributes": {
          "fileName": "isBrowser.md",
          "text": "Determines if the current runtime environment is a browser so that front-end modules can run on the server (Node) without throwing errors.\n\nUse `Array.prototype.includes()` on the `typeof` values of both `window` and `document` (globals usually only available in a browser environment unless they were explicitly defined), which will return `true` if one of them is `undefined`.\n`typeof` allows globals to be checked for existence without throwing a `ReferenceError`.\nIf both of them are not `undefined`, then the current environment is assumed to be a browser.\n\n",
          "codeBlocks": {
            "es6": "const isBrowser = () => ![typeof window, typeof document].includes('undefined');",
            "es5": "function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar isBrowser = function isBrowser() {\n  return ![typeof window === \"undefined\" ? \"undefined\" : _typeof(window), typeof document === \"undefined\" ? \"undefined\" : _typeof(document)].includes('undefined');\n};",
            "example": "isBrowser(); // true (browser)\nisBrowser(); // false (Node)"
          },
          "tags": [
            "utility",
            "browser",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "6fb24837c043a0cc320a46695ef0e286a558aaf06e9354407569ae61c4a8d0bd",
          "firstSeen": "1521427855",
          "lastUpdated": "1565681352",
          "updateCount": 7,
          "authorCount": 5
        }
      },
      {
        "id": "isBrowserTabFocused",
        "title": "isBrowserTabFocused",
        "type": "snippet",
        "attributes": {
          "fileName": "isBrowserTabFocused.md",
          "text": "Returns `true` if the browser tab of the page is focused, `false` otherwise.\n\nUse the `Document.hidden` property, introduced by the Page Visibility API to check if the browser tab of the page is visible or hidden.\n\n",
          "codeBlocks": {
            "es6": "const isBrowserTabFocused = () => !document.hidden;",
            "es5": "var isBrowserTabFocused = function isBrowserTabFocused() {\n  return !document.hidden;\n};",
            "example": "isBrowserTabFocused(); // true"
          },
          "tags": [
            "browser",
            "beginner"
          ]
        },
        "meta": {
          "hash": "3aab66b09df0070568e0ff69717ac0d5c62d88727262419d07b0f50e1a6677e4",
          "firstSeen": "1523809124",
          "lastUpdated": "1565681352",
          "updateCount": 3,
          "authorCount": 2
        }
      },
      {
        "id": "isContainedIn",
        "title": "isContainedIn",
        "type": "snippet",
        "attributes": {
          "fileName": "isContainedIn.md",
          "text": "Returns `true` if the elements of the first array are contained in the second one regardless of order, `false` otherwise.\n\nUse a `for...of` loop over a `Set` created from the first array.\nUse `Array.prototype.some()` to check if all distinct values are contained in the second array, use `Array.prototype.filter()` to compare the number of occurrences of each distinct value in both arrays.\nReturn `false` if the count of any element is greater in the first array than the second one, `true` otherwise.\n\n",
          "codeBlocks": {
            "es6": "const isContainedIn = (a, b) => {\n  for (const v of new Set(a)) {\n    if (!b.some(e => e === v) || a.filter(e => e === v).length > b.filter(e => e === v).length)\n      return false;\n  }\n  return true;\n};",
            "es5": "function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar isContainedIn = function isContainedIn(a, b) {\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    var _loop = function _loop() {\n      var v = _step.value;\n      if (!b.some(function (e) {\n        return e === v;\n      }) || a.filter(function (e) {\n        return e === v;\n      }).length > b.filter(function (e) {\n        return e === v;\n      }).length) return {\n        v: false\n      };\n    };\n\n    for (var _iterator = new Set(a)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var _ret = _loop();\n\n      if (_typeof(_ret) === \"object\") return _ret.v;\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  return true;\n};",
            "example": "isContainedIn([1, 4], [2, 4, 1]); // true"
          },
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "a6e27de05fd710d2837571011dd7bb2031169053438ef998c9b3aa212c24a2f6",
          "firstSeen": "1578253251",
          "lastUpdated": "1579635322",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "isDivisible",
        "title": "isDivisible",
        "type": "snippet",
        "attributes": {
          "fileName": "isDivisible.md",
          "text": "Checks if the first numeric argument is divisible by the second one.\n\nUse the modulo operator (`%`) to check if the remainder is equal to `0`.\n\n",
          "codeBlocks": {
            "es6": "const isDivisible = (dividend, divisor) => dividend % divisor === 0;",
            "es5": "var isDivisible = function isDivisible(dividend, divisor) {\n  return dividend % divisor === 0;\n};",
            "example": "isDivisible(6, 3); // true"
          },
          "tags": [
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "e89795b1f8240e97e4ed1825f2cb38deaa356b8c08ecdd3eaaeb6fe243363f7f",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "isDuplexStream",
        "title": "isDuplexStream",
        "type": "snippet",
        "attributes": {
          "fileName": "isDuplexStream.md",
          "text": "Checks if the given argument is a duplex (readable and writable) stream.\n\nCheck if the value is different from `null`, use `typeof` to check if a value is of type `object` and the `pipe` property is of type `function`.\nAdditionally check if the `typeof` the `_read`, `_write` and `_readableState`, `_writableState` properties are `function` and `object` respectively.\n\n",
          "codeBlocks": {
            "es6": "const isDuplexStream = val =>\n  val !== null &&\n  typeof val === 'object' &&\n  typeof val.pipe === 'function' &&\n  typeof val._read === 'function' &&\n  typeof val._readableState === 'object' &&\n  typeof val._write === 'function' &&\n  typeof val._writableState === 'object';",
            "es5": "function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar isDuplexStream = function isDuplexStream(val) {\n  return val !== null && _typeof(val) === 'object' && typeof val.pipe === 'function' && typeof val._read === 'function' && _typeof(val._readableState) === 'object' && typeof val._write === 'function' && _typeof(val._writableState) === 'object';\n};",
            "example": "const Stream = require('stream');\nisDuplexStream(new Stream.Duplex()); // true"
          },
          "tags": [
            "node",
            "type",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "f2ca078f493b19d44dddd6556e933b056bc9fff56e493a5481c3d943b24f1e01",
          "firstSeen": "1538594170",
          "lastUpdated": "1565681352",
          "updateCount": 4,
          "authorCount": 2
        }
      },
      {
        "id": "isEmpty",
        "title": "isEmpty",
        "type": "snippet",
        "attributes": {
          "fileName": "isEmpty.md",
          "text": "Returns true if the a value is an empty object, collection, has no enumerable properties or is any type that is not considered a collection.\n\nCheck if the provided value is `null` or if its `length` is equal to `0`.\n\n",
          "codeBlocks": {
            "es6": "const isEmpty = val => val == null || !(Object.keys(val) || val).length;",
            "es5": "var isEmpty = function isEmpty(val) {\n  return val == null || !(Object.keys(val) || val).length;\n};",
            "example": "isEmpty([]); // true\nisEmpty({}); // true\nisEmpty(''); // true\nisEmpty([1, 2]); // false\nisEmpty({ a: 1, b: 2 }); // false\nisEmpty('text'); // false\nisEmpty(123); // true - type is not considered a collection\nisEmpty(true); // true - type is not considered a collection"
          },
          "tags": [
            "type",
            "array",
            "object",
            "string",
            "beginner"
          ]
        },
        "meta": {
          "hash": "ff080fab7095a63d01048bca4ed77d033af852303d26668c1ee7f564db8407d1",
          "firstSeen": "1516728317",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 3
        }
      },
      {
        "id": "isEven",
        "title": "isEven",
        "type": "snippet",
        "attributes": {
          "fileName": "isEven.md",
          "text": "Returns `true` if the given number is even, `false` otherwise.\n\nChecks whether a number is odd or even using the modulo (`%`) operator.\nReturns `true` if the number is even, `false` if the number is odd.\n\n",
          "codeBlocks": {
            "es6": "const isEven = num => num % 2 === 0;",
            "es5": "var isEven = function isEven(num) {\n  return num % 2 === 0;\n};",
            "example": "isEven(3); // false"
          },
          "tags": [
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "fa16462c8309a49d282421fd80c995fd3f8a9debaba5e492dd4a3625eecce101",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "isFunction",
        "title": "isFunction",
        "type": "snippet",
        "attributes": {
          "fileName": "isFunction.md",
          "text": "Checks if the given argument is a function.\n\nUse `typeof` to check if a value is classified as a function primitive.\n\n",
          "codeBlocks": {
            "es6": "const isFunction = val => typeof val === 'function';",
            "es5": "var isFunction = function isFunction(val) {\n  return typeof val === 'function';\n};",
            "example": "isFunction('x'); // false\nisFunction(x => x); // true"
          },
          "tags": [
            "type",
            "function",
            "beginner"
          ]
        },
        "meta": {
          "hash": "c9004512c957ceeda55d851452ad2b2d59235648272222fd36ca75d98965f0b6",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 8,
          "authorCount": 5
        }
      },
      {
        "id": "isLowerCase",
        "title": "isLowerCase",
        "type": "snippet",
        "attributes": {
          "fileName": "isLowerCase.md",
          "text": "Checks if a string is lower case.\n\nConvert the given string to lower case, using `String.toLowerCase()` and compare it to the original.\n\n",
          "codeBlocks": {
            "es6": "const isLowerCase = str => str === str.toLowerCase();",
            "es5": "var isLowerCase = function isLowerCase(str) {\n  return str === str.toLowerCase();\n};",
            "example": "isLowerCase('abc'); // true\nisLowerCase('a3@$'); // true\nisLowerCase('Ab4'); // false"
          },
          "tags": [
            "string",
            "utility",
            "beginner"
          ]
        },
        "meta": {
          "hash": "e47bc176d868f3aab83f762997bf9d355258607594648573d2482faf7fc08826",
          "firstSeen": "1515230165",
          "lastUpdated": "1565681352",
          "updateCount": 7,
          "authorCount": 4
        }
      },
      {
        "id": "isNegativeZero",
        "title": "isNegativeZero",
        "type": "snippet",
        "attributes": {
          "fileName": "isNegativeZero.md",
          "text": "Checks if the given value is equal to negative zero (`-0`).\n\nChecks whether a passed value is equal to `0` and if `1` divided by the value equals `-Infinity`.\n\n",
          "codeBlocks": {
            "es6": "const isNegativeZero = val => val === 0 && 1 / val === -Infinity;",
            "es5": "var isNegativeZero = function isNegativeZero(val) {\n  return val === 0 && 1 / val === -Infinity;\n};",
            "example": "isNegativeZero(-0); // true\nisNegativeZero(0); // false"
          },
          "tags": [
            "math",
            "utility",
            "beginner"
          ]
        },
        "meta": {
          "hash": "ec55fd2848f1443613e33d59634ecaefc9dc82b721424b5416830a7389e1ce6e",
          "firstSeen": "1542030336",
          "lastUpdated": "1565681352",
          "updateCount": 4,
          "authorCount": 3
        }
      },
      {
        "id": "isNil",
        "title": "isNil",
        "type": "snippet",
        "attributes": {
          "fileName": "isNil.md",
          "text": "Returns `true` if the specified value is `null` or `undefined`, `false` otherwise.\n\nUse the strict equality operator to check if the value of `val` is equal to `null` or `undefined`.\n\n",
          "codeBlocks": {
            "es6": "const isNil = val => val === undefined || val === null;",
            "es5": "var isNil = function isNil(val) {\n  return val === undefined || val === null;\n};",
            "example": "isNil(null); // true\nisNil(undefined); // true"
          },
          "tags": [
            "type",
            "beginner"
          ]
        },
        "meta": {
          "hash": "c09e927ebf399af3fa3bd3873b407f26130f86e6abb7871f88e1892baed899bf",
          "firstSeen": "1516114221",
          "lastUpdated": "1583442386",
          "updateCount": 4,
          "authorCount": 2
        }
      },
      {
        "id": "isNull",
        "title": "isNull",
        "type": "snippet",
        "attributes": {
          "fileName": "isNull.md",
          "text": "Returns `true` if the specified value is `null`, `false` otherwise.\n\nUse the strict equality operator to check if the value of `val` is equal to `null`.\n\n",
          "codeBlocks": {
            "es6": "const isNull = val => val === null;",
            "es5": "var isNull = function isNull(val) {\n  return val === null;\n};",
            "example": "isNull(null); // true"
          },
          "tags": [
            "type",
            "beginner"
          ]
        },
        "meta": {
          "hash": "4247f69d4cb570cccbe23e147336e5a610070be0fce5d3c5011f7b04a6f9ed3e",
          "firstSeen": "1514715979",
          "lastUpdated": "1583442386",
          "updateCount": 6,
          "authorCount": 3
        }
      },
      {
        "id": "isNumber",
        "title": "isNumber",
        "type": "snippet",
        "attributes": {
          "fileName": "isNumber.md",
          "text": "Checks if the given argument is a number.\n\nUse `typeof` to check if a value is classified as a number primitive. \nTo safeguard against `NaN`, check if `val === val` (as `NaN` has a `typeof` equal to `number` and is the only value not equal to itself).\n\n",
          "codeBlocks": {
            "es6": "const isNumber = val => typeof val === 'number' && val === val;",
            "es5": "var isNumber = function isNumber(val) {\n  return typeof val === 'number' && val === val;\n};",
            "example": "isNumber(1); // true\nisNumber('1'); // false\nisNumber(NaN); // false"
          },
          "tags": [
            "type",
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "5c6e6defd17719973b507d6c55cf00f958ea92ea3c55b6d9dff6d0441f53dc9a",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 9,
          "authorCount": 5
        }
      },
      {
        "id": "isObject",
        "title": "isObject",
        "type": "snippet",
        "attributes": {
          "fileName": "isObject.md",
          "text": "Returns a boolean determining if the passed value is an object or not.\n\nUses the  `Object` constructor to create an object wrapper for the given value. \nIf the value is `null` or `undefined`, create and return an empty object. Οtherwise, return an object of a type that corresponds to the given value.\n\n",
          "codeBlocks": {
            "es6": "const isObject = obj => obj === Object(obj);",
            "es5": "var isObject = function isObject(obj) {\n  return obj === Object(obj);\n};",
            "example": "isObject([1, 2, 3, 4]); // true\nisObject([]); // true\nisObject(['Hello!']); // true\nisObject({ a: 1 }); // true\nisObject({}); // true\nisObject(true); // false"
          },
          "tags": [
            "type",
            "object",
            "beginner"
          ]
        },
        "meta": {
          "hash": "06b78776522f9e213357c031e21568295d7a528871fe05781ae2ac4f7e5d8451",
          "firstSeen": "1515666246",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "isObjectLike",
        "title": "isObjectLike",
        "type": "snippet",
        "attributes": {
          "fileName": "isObjectLike.md",
          "text": "Checks if a value is object-like.\n\nCheck if the provided value is not `null` and its `typeof` is equal to `'object'`.\n\n",
          "codeBlocks": {
            "es6": "const isObjectLike = val => val !== null && typeof val === 'object';",
            "es5": "function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar isObjectLike = function isObjectLike(val) {\n  return val !== null && _typeof(val) === 'object';\n};",
            "example": "isObjectLike({}); // true\nisObjectLike([1, 2, 3]); // true\nisObjectLike(x => x); // false\nisObjectLike(null); // false"
          },
          "tags": [
            "type",
            "object",
            "beginner"
          ]
        },
        "meta": {
          "hash": "c3424342e1ccfaff2b8f0b0727595fc2cd8063a185ecc42708fa41a2a7c25fc4",
          "firstSeen": "1516728603",
          "lastUpdated": "1565681352",
          "updateCount": 3,
          "authorCount": 2
        }
      },
      {
        "id": "isOdd",
        "title": "isOdd",
        "type": "snippet",
        "attributes": {
          "fileName": "isOdd.md",
          "text": "Returns `true` if the given number is odd, `false` otherwise.\n\nChecks whether a number is odd or even using the modulo (`%`) operator.\nReturns `true` if the number is odd, `false` if the number is even.\n\n",
          "codeBlocks": {
            "es6": "const isOdd = num => num % 2 === 1;",
            "es5": "var isOdd = function isOdd(num) {\n  return num % 2 === 1;\n};",
            "example": "isOdd(3); // true"
          },
          "tags": [
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "9d259b2877b38e255222f876d6f00247b6449da44082d24eadd48f46d71ccd9d",
          "firstSeen": "1569432906",
          "lastUpdated": "1569432906",
          "updateCount": 2,
          "authorCount": 2
        }
      },
      {
        "id": "isPlainObject",
        "title": "isPlainObject",
        "type": "snippet",
        "attributes": {
          "fileName": "isPlainObject.md",
          "text": "Checks if the provided value is an object created by the Object constructor.\n\nCheck if the provided value is truthy, use `typeof` to check if it is an object and `Object.constructor` to make sure the constructor is equal to `Object`.\n\n",
          "codeBlocks": {
            "es6": "const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;",
            "es5": "function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar isPlainObject = function isPlainObject(val) {\n  return !!val && _typeof(val) === 'object' && val.constructor === Object;\n};",
            "example": "isPlainObject({ a: 1 }); // true\nisPlainObject(new Map()); // false"
          },
          "tags": [
            "type",
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "8a9ef17eda1a977bdd1149a4a782d7d0e7addd8c6db8d4bd3734c9269863b12c",
          "firstSeen": "1516363152",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "isPowerOfTwo",
        "title": "isPowerOfTwo",
        "type": "snippet",
        "attributes": {
          "fileName": "isPowerOfTwo.md",
          "text": "Returns `true` if the given number is a power of `2`, `false` otherwise.\n\nUse the bitwise binary AND operator (`&`) to determine if `n is a power of `2. \nAdditionally, check that `n` is not falsy.\n\n",
          "codeBlocks": {
            "es6": "const isPowerOfTwo = n => !!n && (n & (n - 1)) == 0;",
            "es5": "var isPowerOfTwo = function isPowerOfTwo(n) {\n  return !!n && (n & n - 1) == 0;\n};",
            "example": "isPowerOfTwo(0); // false\nisPowerOfTwo(1); // true\nisPowerOfTwo(8); // true"
          },
          "tags": [
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "93dcd24b208880ba16d9aa32e59e718187cb4178cadb5876a4bc7c588ddcdebd",
          "firstSeen": "1577791032",
          "lastUpdated": "1577791301",
          "updateCount": 3,
          "authorCount": 3
        }
      },
      {
        "id": "isPrime",
        "title": "isPrime",
        "type": "snippet",
        "attributes": {
          "fileName": "isPrime.md",
          "text": "Checks if the provided integer is a prime number.\n\nCheck numbers from `2` to the square root of the given number.\nReturn `false` if any of them divides the given number, else return `true`, unless the number is less than `2`.\n\n",
          "codeBlocks": {
            "es6": "const isPrime = num => {\n  const boundary = Math.floor(Math.sqrt(num));\n  for (var i = 2; i <= boundary; i++) if (num % i === 0) return false;\n  return num >= 2;\n};",
            "es5": "var isPrime = function isPrime(num) {\n  var boundary = Math.floor(Math.sqrt(num));\n\n  for (var i = 2; i <= boundary; i++) {\n    if (num % i === 0) return false;\n  }\n\n  return num >= 2;\n};",
            "example": "isPrime(11); // true"
          },
          "tags": [
            "math",
            "beginner",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "aafa416b434137db2540668a13e8a33138cb04d652f29e8793a6c76b6a62983d",
          "firstSeen": "1513715756",
          "lastUpdated": "1565681352",
          "updateCount": 14,
          "authorCount": 5
        }
      },
      {
        "id": "isPrimitive",
        "title": "isPrimitive",
        "type": "snippet",
        "attributes": {
          "fileName": "isPrimitive.md",
          "text": "Returns a boolean determining if the passed value is primitive or not.\n\nCreate an object from `val` and compare it with `val` to determine if the passed value is primitive (i.e. not equal to the created object).\n\n",
          "codeBlocks": {
            "es6": "const isPrimitive = val => Object(val) !== val;",
            "es5": "var isPrimitive = function isPrimitive(val) {\n  return Object(val) !== val;\n};",
            "example": "isPrimitive(null); // true\nisPrimitive(50); // true\nisPrimitive('Hello!'); // true\nisPrimitive(false); // true\nisPrimitive(Symbol()); // true\nisPrimitive([]); // false"
          },
          "tags": [
            "type",
            "function",
            "array",
            "string",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "2df9322464af125f8a33dad1f15a7df5ccd7d8f9322efe871dc026974971ac85",
          "firstSeen": "1514717293",
          "lastUpdated": "1565681352",
          "updateCount": 9,
          "authorCount": 6
        }
      },
      {
        "id": "isPromiseLike",
        "title": "isPromiseLike",
        "type": "snippet",
        "attributes": {
          "fileName": "isPromiseLike.md",
          "text": "Returns `true` if an object looks like a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), `false` otherwise.\n\nCheck if the object is not `null`, its `typeof` matches either `object` or `function` and if it has a `.then` property, which is also a `function`.\n\n",
          "codeBlocks": {
            "es6": "const isPromiseLike = obj =>\n  obj !== null &&\n  (typeof obj === 'object' || typeof obj === 'function') &&\n  typeof obj.then === 'function';",
            "es5": "function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar isPromiseLike = function isPromiseLike(obj) {\n  return obj !== null && (_typeof(obj) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';\n};",
            "example": "isPromiseLike({\n  then: function() {\n    return '';\n  }\n}); // true\nisPromiseLike(null); // false\nisPromiseLike({}); // false"
          },
          "tags": [
            "type",
            "function",
            "promise",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "3edbaa911db73b703d8af9a0681a18f4c61d65db15cbd5812b78ecd3ac364cef",
          "firstSeen": "1514723143",
          "lastUpdated": "1565681352",
          "updateCount": 4,
          "authorCount": 3
        }
      },
      {
        "id": "isReadableStream",
        "title": "isReadableStream",
        "type": "snippet",
        "attributes": {
          "fileName": "isReadableStream.md",
          "text": "Checks if the given argument is a readable stream.\n\nCheck if the value is different from `null`, use `typeof` to check if the value is of type `object` and the `pipe` property is of type `function`.\nAdditionally check if the `typeof` the `_read` and `_readableState` properties are `function` and `object` respectively.\n\n",
          "codeBlocks": {
            "es6": "const isReadableStream = val =>\n  val !== null &&\n  typeof val === 'object' &&\n  typeof val.pipe === 'function' &&\n  typeof val._read === 'function' &&\n  typeof val._readableState === 'object';",
            "es5": "function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar isReadableStream = function isReadableStream(val) {\n  return val !== null && _typeof(val) === 'object' && typeof val.pipe === 'function' && typeof val._read === 'function' && _typeof(val._readableState) === 'object';\n};",
            "example": "const fs = require('fs');\nisReadableStream(fs.createReadStream('test.txt')); // true"
          },
          "tags": [
            "node",
            "type",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "a8199a2ae7965f48651bc7996e810423b2de44467204d481df54f7c8fa2dd44e",
          "firstSeen": "1538594170",
          "lastUpdated": "1565681352",
          "updateCount": 3,
          "authorCount": 2
        }
      },
      {
        "id": "isSameDate",
        "title": "isSameDate",
        "type": "snippet",
        "attributes": {
          "fileName": "isSameDate.md",
          "text": "Check if a date is the same as another date.\n\nUse `Date.prototype.toISOString()` and strict equality checking (`===`) to check if the first date is the same as the second one.\n\n",
          "codeBlocks": {
            "es6": "const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();",
            "es5": "var isSameDate = function isSameDate(dateA, dateB) {\n  return dateA.toISOString() === dateB.toISOString();\n};",
            "example": "isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true"
          },
          "tags": [
            "date",
            "utility",
            "beginner"
          ]
        },
        "meta": {
          "hash": "4accb95c8fb5ac770c73c78b6236938773499c74617df09a1f73a60abd6f44d7",
          "firstSeen": "1538218718",
          "lastUpdated": "1565681352",
          "updateCount": 4,
          "authorCount": 2
        }
      },
      {
        "id": "isSorted",
        "title": "isSorted",
        "type": "snippet",
        "attributes": {
          "fileName": "isSorted.md",
          "text": "Returns `1` if the array is sorted in ascending order, `-1` if it is sorted in descending order or `0` if it is not sorted.\n\nCalculate the ordering `direction` for the first two elements.\nUse `Object.entries()` to loop over array objects and compare them in pairs.\nReturn `0` if the `direction` changes or the `direction` if the last element is reached.\n\n",
          "codeBlocks": {
            "es6": "const isSorted = arr => {\n  let direction = -(arr[0] - arr[1]);\n  for (let [i, val] of arr.entries()) {\n    direction = !direction ? -(arr[i - 1] - arr[i]) : direction;\n    if (i === arr.length - 1) return !direction ? 0 : direction;\n    else if ((val - arr[i + 1]) * direction > 0) return 0;\n  }\n};",
            "es5": "function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar isSorted = function isSorted(arr) {\n  var direction = -(arr[0] - arr[1]);\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = arr.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var _step$value = _slicedToArray(_step.value, 2),\n          i = _step$value[0],\n          val = _step$value[1];\n\n      direction = !direction ? -(arr[i - 1] - arr[i]) : direction;\n      if (i === arr.length - 1) return !direction ? 0 : direction;else if ((val - arr[i + 1]) * direction > 0) return 0;\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n};",
            "example": "isSorted([0, 1, 2, 2]); // 1\nisSorted([4, 3, 2]); // -1\nisSorted([4, 3, 5]); // 0"
          },
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "b916ab345483f3d11d921f5f54da89bbf1c724aceb1d1c16f5b7365794da6e0e",
          "firstSeen": "1514827814",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 3
        }
      },
      {
        "id": "isStream",
        "title": "isStream",
        "type": "snippet",
        "attributes": {
          "fileName": "isStream.md",
          "text": "Checks if the given argument is a stream.\n\nCheck if the value is different from `null`, use `typeof` to check if the value is of type `object` and the `pipe` property is of type `function`.\n\n",
          "codeBlocks": {
            "es6": "const isStream = val => val !== null && typeof val === 'object' && typeof val.pipe === 'function';",
            "es5": "function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar isStream = function isStream(val) {\n  return val !== null && _typeof(val) === 'object' && typeof val.pipe === 'function';\n};",
            "example": "const fs = require('fs');\nisStream(fs.createReadStream('test.txt')); // true"
          },
          "tags": [
            "node",
            "type",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "5e2955867dd0b233a65bf95587e4a190da61629a4cba61e270d36e0a26c7946e",
          "firstSeen": "1538413939",
          "lastUpdated": "1565681352",
          "updateCount": 4,
          "authorCount": 2
        }
      },
      {
        "id": "isString",
        "title": "isString",
        "type": "snippet",
        "attributes": {
          "fileName": "isString.md",
          "text": "Checks if the given argument is a string. Only works for string primitives.\n\nUse `typeof` to check if a value is classified as a string primitive.\n\n",
          "codeBlocks": {
            "es6": "const isString = val => typeof val === 'string';",
            "es5": "var isString = function isString(val) {\n  return typeof val === 'string';\n};",
            "example": "isString('10'); // true"
          },
          "tags": [
            "type",
            "string",
            "beginner"
          ]
        },
        "meta": {
          "hash": "4a29ea0e99857a128109e6cf7d1120bc4cdb6b05be2ce4602715e6c863b1cc3d",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 8,
          "authorCount": 4
        }
      },
      {
        "id": "isSymbol",
        "title": "isSymbol",
        "type": "snippet",
        "attributes": {
          "fileName": "isSymbol.md",
          "text": "Checks if the given argument is a symbol.\n\nUse `typeof` to check if a value is classified as a symbol primitive.\n\n",
          "codeBlocks": {
            "es6": "const isSymbol = val => typeof val === 'symbol';",
            "es5": "function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar isSymbol = function isSymbol(val) {\n  return _typeof(val) === 'symbol';\n};",
            "example": "isSymbol(Symbol('x')); // true"
          },
          "tags": [
            "type",
            "beginner"
          ]
        },
        "meta": {
          "hash": "8599f274909a26bd17178514b849ee803959f3c69207fce2951923d1719fbddb",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 7,
          "authorCount": 4
        }
      },
      {
        "id": "isTravisCI",
        "title": "isTravisCI",
        "type": "snippet",
        "attributes": {
          "fileName": "isTravisCI.md",
          "text": "Checks if the current environment is [Travis CI](https://travis-ci.org/).\n\nChecks if the current environment has the `TRAVIS` and `CI` environment variables ([reference](https://docs.travis-ci.com/user/environment-variables/#Default-Environment-Variables)).\n\n",
          "codeBlocks": {
            "es6": "const isTravisCI = () => 'TRAVIS' in process.env && 'CI' in process.env;",
            "es5": "var isTravisCI = function isTravisCI() {\n  return 'TRAVIS' in process.env && 'CI' in process.env;\n};",
            "example": "isTravisCI(); // true (if code is running on Travis CI)"
          },
          "tags": [
            "node",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "aaf7f8a0beaeedb11a5b13b304fa1c51eddf66e103d2b44a1c3648de39fd1e23",
          "firstSeen": "1514820488",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 3
        }
      },
      {
        "id": "isUndefined",
        "title": "isUndefined",
        "type": "snippet",
        "attributes": {
          "fileName": "isUndefined.md",
          "text": "Returns `true` if the specified value is `undefined`, `false` otherwise.\n\nUse the strict equality operator to check if `val` is equal to `undefined`.\n\n",
          "codeBlocks": {
            "es6": "const isUndefined = val => val === undefined;",
            "es5": "var isUndefined = function isUndefined(val) {\n  return val === undefined;\n};",
            "example": "isUndefined(undefined); // true"
          },
          "tags": [
            "type",
            "beginner"
          ]
        },
        "meta": {
          "hash": "c76d495087390da80a6a0d54f27220254b0cd547a79ac1357a4b04e43938794a",
          "firstSeen": "1516114221",
          "lastUpdated": "1583442386",
          "updateCount": 4,
          "authorCount": 2
        }
      },
      {
        "id": "isUpperCase",
        "title": "isUpperCase",
        "type": "snippet",
        "attributes": {
          "fileName": "isUpperCase.md",
          "text": "Checks if a string is upper case.\n\nConvert the given string to upper case, using `String.prototype.toUpperCase()` and compare it to the original.\n\n",
          "codeBlocks": {
            "es6": "const isUpperCase = str => str === str.toUpperCase();",
            "es5": "var isUpperCase = function isUpperCase(str) {\n  return str === str.toUpperCase();\n};",
            "example": "isUpperCase('ABC'); // true\nisUpperCase('A3@$'); // true\nisUpperCase('aB4'); // false"
          },
          "tags": [
            "string",
            "utility",
            "beginner"
          ]
        },
        "meta": {
          "hash": "e9f213bd74fba0cfc5e7706967f03dee72ee516e213715dab97c5fd32ba7f4f3",
          "firstSeen": "1515230165",
          "lastUpdated": "1567395249",
          "updateCount": 8,
          "authorCount": 5
        }
      },
      {
        "id": "isValidJSON",
        "title": "isValidJSON",
        "type": "snippet",
        "attributes": {
          "fileName": "isValidJSON.md",
          "text": "Checks if the provided string is a valid JSON.\n\nUse `JSON.parse()` and a `try... catch` block to check if the provided string is a valid JSON.\n\n",
          "codeBlocks": {
            "es6": "const isValidJSON = str => {\n  try {\n    JSON.parse(str);\n    return true;\n  } catch (e) {\n    return false;\n  }\n};",
            "es5": "var isValidJSON = function isValidJSON(str) {\n  try {\n    JSON.parse(str);\n    return true;\n  } catch (e) {\n    return false;\n  }\n};",
            "example": "isValidJSON('{\"name\":\"Adam\",\"age\":20}'); // true\nisValidJSON('{\"name\":\"Adam\",age:\"20\"}'); // false\nisValidJSON(null); // true"
          },
          "tags": [
            "type",
            "json",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "3b695d9ce6aa94aea1a367fba124a615d0132c8894e702f96e042fd6e6349ac1",
          "firstSeen": "1514724781",
          "lastUpdated": "1565681352",
          "updateCount": 13,
          "authorCount": 5
        }
      },
      {
        "id": "isWeekday",
        "title": "isWeekday",
        "type": "snippet",
        "attributes": {
          "fileName": "isWeekday.md",
          "text": "Results in a boolean representation of a specific date.\n\nPass the specific date object firstly.\nUse `Date.getDay()` to check weekday by using a modulo operator and then returning a boolean.\n\n",
          "codeBlocks": {
            "es6": "const isWeekday = (t = new Date()) => {\n  return t.getDay() % 6 !== 0;\n};",
            "es5": "var isWeekday = function isWeekday() {\n  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();\n  return t.getDay() % 6 !== 0;\n};",
            "example": "isWeekday(); // true (if current date is 2019-07-19)"
          },
          "tags": [
            "date",
            "beginner"
          ]
        },
        "meta": {
          "hash": "f4b7c801ff0d3a23d10d2cb4de23d63e0d1dd09cd0d014c414a81c5628b8ff8b",
          "firstSeen": "1563527529",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "isWeekend",
        "title": "isWeekend",
        "type": "snippet",
        "attributes": {
          "fileName": "isWeekend.md",
          "text": "Results in a boolean representation of a specific date.\n\nPass the specific date object firstly.\nUse `Date.getDay()` to check weekend based on the day being returned as 0 - 6 using a modulo operation then return a boolean.\n\n",
          "codeBlocks": {
            "es6": "const isWeekend = (t = new Date()) => {\n  return t.getDay() % 6 === 0;\n};",
            "es5": "var isWeekend = function isWeekend() {\n  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();\n  return t.getDay() % 6 === 0;\n};",
            "example": "isWeekend(); // 2018-10-19 (if current date is 2018-10-18)"
          },
          "tags": [
            "date",
            "beginner"
          ]
        },
        "meta": {
          "hash": "6b2bfb3ce5798f702332f4cf14749b4b044fe7de6ee1d79bc786c1e3fe704dbd",
          "firstSeen": "1563545222",
          "lastUpdated": "1565681352",
          "updateCount": 4,
          "authorCount": 4
        }
      },
      {
        "id": "isWritableStream",
        "title": "isWritableStream",
        "type": "snippet",
        "attributes": {
          "fileName": "isWritableStream.md",
          "text": "Checks if the given argument is a writable stream.\n\nCheck if the value is different from `null`, use `typeof` to check if the value is of type `object` and the `pipe` property is of type `function`.\nAdditionally check if the `typeof` the `_write` and `_writableState` properties are `function` and `object` respectively.\n\n",
          "codeBlocks": {
            "es6": "const isWritableStream = val =>\n  val !== null &&\n  typeof val === 'object' &&\n  typeof val.pipe === 'function' &&\n  typeof val._write === 'function' &&\n  typeof val._writableState === 'object';",
            "es5": "function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar isWritableStream = function isWritableStream(val) {\n  return val !== null && _typeof(val) === 'object' && typeof val.pipe === 'function' && typeof val._write === 'function' && _typeof(val._writableState) === 'object';\n};",
            "example": "const fs = require('fs');\nisWritableStream(fs.createWriteStream('test.txt')); // true"
          },
          "tags": [
            "node",
            "type",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "8f9400b2f8204180520e4cb2d2150ea515eb704d684f483377ba3e5513268bb0",
          "firstSeen": "1538594170",
          "lastUpdated": "1565681352",
          "updateCount": 3,
          "authorCount": 2
        }
      },
      {
        "id": "join",
        "title": "join",
        "type": "snippet",
        "attributes": {
          "fileName": "join.md",
          "text": "Joins all elements of an array into a string and returns this string.\nUses a separator and an end separator.\n\nUse `Array.prototype.reduce()` to combine elements into a string.\nOmit the second argument, `separator`, to use a default separator of `','`.\nOmit the third argument, `end`, to use the same value as `separator` by default.\n\n",
          "codeBlocks": {
            "es6": "const join = (arr, separator = ',', end = separator) =>\n  arr.reduce(\n    (acc, val, i) =>\n      i === arr.length - 2\n        ? acc + val + end\n        : i === arr.length - 1\n          ? acc + val\n          : acc + val + separator,\n    ''\n  );",
            "es5": "var join = function join(arr) {\n  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';\n  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : separator;\n  return arr.reduce(function (acc, val, i) {\n    return i === arr.length - 2 ? acc + val + end : i === arr.length - 1 ? acc + val : acc + val + separator;\n  }, '');\n};",
            "example": "join(['pen', 'pineapple', 'apple', 'pen'], ',', '&'); // \"pen,pineapple,apple&pen\"\njoin(['pen', 'pineapple', 'apple', 'pen'], ','); // \"pen,pineapple,apple,pen\"\njoin(['pen', 'pineapple', 'apple', 'pen']); // \"pen,pineapple,apple,pen\""
          },
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "362fddaa6244404741e84bca6fc442a101fdb642af53b299e8b9994d0d7162d8",
          "firstSeen": "1514801920",
          "lastUpdated": "1585031872",
          "updateCount": 85,
          "authorCount": 7
        }
      },
      {
        "id": "JSONtoCSV",
        "title": "JSONtoCSV",
        "type": "snippet",
        "attributes": {
          "fileName": "JSONtoCSV.md",
          "text": "Converts an array of objects to a comma-separated values (CSV) string that contains only the `columns` specified.\n\nUse `Array.prototype.join(delimiter)` to combine all the names in `columns` to create the first row.\nUse `Array.prototype.map()` and `Array.prototype.reduce()` to create a row for each object, substituting non-existent values with empty strings and only mapping values in `columns`.\nUse `Array.prototype.join('\\n')` to combine all rows into a string.\nOmit the third argument, `delimiter`, to use a default delimiter of `,`.\n\n",
          "codeBlocks": {
            "es6": "const JSONtoCSV = (arr, columns, delimiter = ',') =>\n  [\n    columns.join(delimiter),\n    ...arr.map(obj =>\n      columns.reduce(\n        (acc, key) => `${acc}${!acc.length ? '' : delimiter}\"${!obj[key] ? '' : obj[key]}\"`,\n        ''\n      )\n    )\n  ].join('\\n');",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar JSONtoCSV = function JSONtoCSV(arr, columns) {\n  var delimiter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ',';\n  return [columns.join(delimiter)].concat(_toConsumableArray(arr.map(function (obj) {\n    return columns.reduce(function (acc, key) {\n      return \"\".concat(acc).concat(!acc.length ? '' : delimiter, \"\\\"\").concat(!obj[key] ? '' : obj[key], \"\\\"\");\n    }, '');\n  }))).join('\\n');\n};",
            "example": "JSONtoCSV([{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }], ['a', 'b']); // 'a,b\\n\"1\",\"2\"\\n\"3\",\"4\"\\n\"6\",\"\"\\n\"\",\"7\"'\nJSONtoCSV([{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }], ['a', 'b'], ';'); // 'a;b\\n\"1\";\"2\"\\n\"3\";\"4\"\\n\"6\";\"\"\\n\"\";\"7\"'"
          },
          "tags": [
            "array",
            "string",
            "object",
            "advanced"
          ]
        },
        "meta": {
          "hash": "5b76a1a772d79233e7d8c87d903f1ef48b4c4bc52a05df4d13753ed810795380",
          "firstSeen": "1530897946",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "JSONToFile",
        "title": "JSONToFile",
        "type": "snippet",
        "attributes": {
          "fileName": "JSONToFile.md",
          "text": "Writes a JSON object to a file.\n\nUse `fs.writeFile()`, template literals and `JSON.stringify()` to write a `json` object to a `.json` file.\n\n",
          "codeBlocks": {
            "es6": "const fs = require('fs');\nconst JSONToFile = (obj, filename) =>\n  fs.writeFile(`${filename}.json`, JSON.stringify(obj, null, 2));",
            "es5": "var fs = require('fs');\n\nvar JSONToFile = function JSONToFile(obj, filename) {\n  return fs.writeFile(\"\".concat(filename, \".json\"), JSON.stringify(obj, null, 2));\n};",
            "example": "JSONToFile({ test: 'is passed' }, 'testJsonFile'); // writes the object to 'testJsonFile.json'"
          },
          "tags": [
            "node",
            "json",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "e7b3dc5eaa43f1ccf6b4863e437b9b4b275ec79fb18623a4c3d0e6ec300d9bcb",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 8,
          "authorCount": 4
        }
      },
      {
        "id": "last",
        "title": "last",
        "type": "snippet",
        "attributes": {
          "fileName": "last.md",
          "text": "Returns the last element in an array.\n\nCheck if `arr` is truthy and has a `length` property, use `arr.length - 1` to compute the index of the last element of the given array and return it, otherwise return `undefined`.\n\n",
          "codeBlocks": {
            "es6": "const last = arr => (arr && arr.length ? arr[arr.length - 1] : undefined);",
            "es5": "var last = function last(arr) {\n  return arr && arr.length ? arr[arr.length - 1] : undefined;\n};",
            "example": "last([1, 2, 3]); // 3\nlast([]); // undefined\nlast(null); // undefined\nlast(undefined); // undefined"
          },
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "0cf1faf6ccf465c4f35c162a2d40775ebef33b27e4456d856551cc5a1f3def56",
          "firstSeen": "1513526151",
          "lastUpdated": "1576050753",
          "updateCount": 9,
          "authorCount": 6
        }
      },
      {
        "id": "lcm",
        "title": "lcm",
        "type": "snippet",
        "attributes": {
          "fileName": "lcm.md",
          "text": "Returns the least common multiple of two or more numbers.\n\nUse the greatest common divisor (GCD) formula and the fact that `lcm(x,y) = x * y / gcd(x,y)` to determine the least common multiple.\nThe GCD formula uses recursion.\n\n",
          "codeBlocks": {
            "es6": "const lcm = (...arr) => {\n  const gcd = (x, y) => (!y ? x : gcd(y, x % y));\n  const _lcm = (x, y) => (x * y) / gcd(x, y);\n  return [...arr].reduce((a, b) => _lcm(a, b));\n};",
            "es5": "var lcm = function lcm() {\n  var gcd = function gcd(x, y) {\n    return !y ? x : gcd(y, x % y);\n  };\n\n  var _lcm = function _lcm(x, y) {\n    return x * y / gcd(x, y);\n  };\n\n  for (var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++) {\n    arr[_key] = arguments[_key];\n  }\n\n  return [].concat(arr).reduce(function (a, b) {\n    return _lcm(a, b);\n  });\n};",
            "example": "lcm(12, 7); // 84\nlcm(...[1, 3, 4, 5]); // 60"
          },
          "tags": [
            "math",
            "recursion",
            "beginner"
          ]
        },
        "meta": {
          "hash": "31f59a2480a0c840666af05f87ede6b169aece233b0323e9f03fd79ac7d4bc44",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 17,
          "authorCount": 7
        }
      },
      {
        "id": "longestItem",
        "title": "longestItem",
        "type": "snippet",
        "attributes": {
          "fileName": "longestItem.md",
          "text": "Takes any number of iterable objects or objects with a `length` property and returns the longest one.\nIf multiple objects have the same length, the first one will be returned.\nReturns `undefined` if no arguments are provided.\n\nUse `Array.prototype.reduce()`, comparing the `length` of objects to find the longest one.\n\n",
          "codeBlocks": {
            "es6": "const longestItem = (...vals) => vals.reduce((a, x) => (x.length > a.length ? x : a));",
            "es5": "var longestItem = function longestItem() {\n  for (var _len = arguments.length, vals = new Array(_len), _key = 0; _key < _len; _key++) {\n    vals[_key] = arguments[_key];\n  }\n\n  return vals.reduce(function (a, x) {\n    return x.length > a.length ? x : a;\n  });\n};",
            "example": "longestItem('this', 'is', 'a', 'testcase'); // 'testcase'\nlongestItem(...['a', 'ab', 'abc']); // 'abc'\nlongestItem(...['a', 'ab', 'abc'], 'abcd'); // 'abcd'\nlongestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]\nlongestItem([1, 2, 3], 'foobar'); // 'foobar'"
          },
          "tags": [
            "array",
            "string",
            "utility",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "1277ce52444adcbc3a7b62d5c9019aa3cf01293e7749b8d0e1871ae2aa6a8c88",
          "firstSeen": "1515440027",
          "lastUpdated": "1565681352",
          "updateCount": 13,
          "authorCount": 7
        }
      },
      {
        "id": "lowercaseKeys",
        "title": "lowercaseKeys",
        "type": "snippet",
        "attributes": {
          "fileName": "lowercaseKeys.md",
          "text": "Creates a new object from the specified object, where all the keys are in lowercase.\n\nUse `Object.keys()` and `Array.prototype.reduce()` to create a new object from the specified object.\nConvert each key in the original object to lowercase, using `String.toLowerCase()`.\n\n",
          "codeBlocks": {
            "es6": "const lowercaseKeys = obj =>\n  Object.keys(obj).reduce((acc, key) => {\n    acc[key.toLowerCase()] = obj[key];\n    return acc;\n  }, {});",
            "es5": "var lowercaseKeys = function lowercaseKeys(obj) {\n  return Object.keys(obj).reduce(function (acc, key) {\n    acc[key.toLowerCase()] = obj[key];\n    return acc;\n  }, {});\n};",
            "example": "const myObj = { Name: 'Adam', sUrnAME: 'Smith' };\nconst myObjLower = lowercaseKeys(myObj); // {name: 'Adam', surname: 'Smith'};"
          },
          "tags": [
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "5a7033d47335bedd0239adab9cc2f112a311c28398d46da2bc2196fe61c9ce78",
          "firstSeen": "1514546898",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "luhnCheck",
        "title": "luhnCheck",
        "type": "snippet",
        "attributes": {
          "fileName": "luhnCheck.md",
          "text": "Implementation of the [Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm) used to validate a variety of identification numbers, such as credit card numbers, IMEI numbers, National Provider Identifier numbers etc.\n\nUse `String.prototype.split('')`, `Array.prototype.reverse()` and `Array.prototype.map()` in combination with `parseInt()` to obtain an array of digits.\nUse `Array.prototype.splice(0,1)` to obtain the last digit.\nUse `Array.prototype.reduce()` to implement the Luhn Algorithm.\nReturn `true` if `sum` is divisible by `10`, `false` otherwise.\n\n",
          "codeBlocks": {
            "es6": "const luhnCheck = num => {\n  let arr = (num + '')\n    .split('')\n    .reverse()\n    .map(x => parseInt(x));\n  let lastDigit = arr.splice(0, 1)[0];\n  let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);\n  sum += lastDigit;\n  return sum % 10 === 0;\n};",
            "es5": "var luhnCheck = function luhnCheck(num) {\n  var arr = (num + '').split('').reverse().map(function (x) {\n    return parseInt(x);\n  });\n  var lastDigit = arr.splice(0, 1)[0];\n  var sum = arr.reduce(function (acc, val, i) {\n    return i % 2 !== 0 ? acc + val : acc + val * 2 % 9 || 9;\n  }, 0);\n  sum += lastDigit;\n  return sum % 10 === 0;\n};",
            "example": "luhnCheck('4485275742308327'); // true\nluhnCheck(6011329933655299); //  false\nluhnCheck(123456789); // false"
          },
          "tags": [
            "math",
            "utility",
            "advanced"
          ]
        },
        "meta": {
          "hash": "ab83bac8546d02dfe4227792750f0b4c64cd2c8f8ce6063eef2a3f4357210d63",
          "firstSeen": "1514970155",
          "lastUpdated": "1565681352",
          "updateCount": 13,
          "authorCount": 6
        }
      },
      {
        "id": "mapKeys",
        "title": "mapKeys",
        "type": "snippet",
        "attributes": {
          "fileName": "mapKeys.md",
          "text": "Creates an object with keys generated by running the provided function for each key and the same values as the provided object.\n\nUse `Object.keys(obj)` to iterate over the object's keys.\nUse `Array.prototype.reduce()` to create a new object with the same values and mapped keys using `fn`.\n\n",
          "codeBlocks": {
            "es6": "const mapKeys = (obj, fn) =>\n  Object.keys(obj).reduce((acc, k) => {\n    acc[fn(obj[k], k, obj)] = obj[k];\n    return acc;\n  }, {});",
            "es5": "var mapKeys = function mapKeys(obj, fn) {\n  return Object.keys(obj).reduce(function (acc, k) {\n    acc[fn(obj[k], k, obj)] = obj[k];\n    return acc;\n  }, {});\n};",
            "example": "mapKeys({ a: 1, b: 2 }, (val, key) => key + val); // { a1: 1, b2: 2 }"
          },
          "tags": [
            "object",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "3e721dd4b5fc9a41ed7f3ae6eb888848c8ae557a0feea28f17f945a24ab677ae",
          "firstSeen": "1515695594",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "mapNumRange",
        "title": "mapNumRange",
        "type": "snippet",
        "attributes": {
          "fileName": "mapNumRange.md",
          "text": "Maps a number from one range to another range.\n\nReturns `num` mapped between `outMin`-`outMax` from `inMin`-`inMax`.\n\n",
          "codeBlocks": {
            "es6": "const mapNumRange = (num, inMin, inMax, outMin, outMax) =>\n  ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;",
            "es5": "var mapNumRange = function mapNumRange(num, inMin, inMax, outMin, outMax) {\n  return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;\n};",
            "example": "mapNumRange(5, 0, 10, 0, 100); // 50"
          },
          "tags": [
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "46da170d5f14d8070725e9f31e5b24de72aa4b0b476912d602e0480400638c9c",
          "firstSeen": "1550918296",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 3
        }
      },
      {
        "id": "mapObject",
        "title": "mapObject",
        "type": "snippet",
        "attributes": {
          "fileName": "mapObject.md",
          "text": "Maps the values of an array to an object using a function, where the key-value pairs consist of the stringified value as the key and the mapped value.\n\nUse an anonymous inner function scope to declare an undefined memory space, using closures to store a return value. Use a new `Array` to store the array with a map of the function over its data set and a comma operator to return a second step, without needing to move from one context to another (due to closures and order of operations).\n\n",
          "codeBlocks": {
            "es6": "const mapObject = (arr, fn) =>\n  (a => (\n    (a = [arr, arr.map(fn)]), a[0].reduce((acc, val, ind) => ((acc[val] = a[1][ind]), acc), {})\n  ))();",
            "es5": "var mapObject = function mapObject(arr, fn) {\n  return function (a) {\n    return a = [arr, arr.map(fn)], a[0].reduce(function (acc, val, ind) {\n      return acc[val] = a[1][ind], acc;\n    }, {});\n  }();\n};",
            "example": "const squareIt = arr => mapObject(arr, a => a * a);\nsquareIt([1, 2, 3]); // { 1: 1, 2: 4, 3: 9 }"
          },
          "tags": [
            "array",
            "object",
            "advanced"
          ]
        },
        "meta": {
          "hash": "3afc30c02480be79ae5fb41e05ee2b1cc6f3b408ccb64a1a192d0ad34148ede2",
          "firstSeen": "1513591918",
          "lastUpdated": "1565681352",
          "updateCount": 9,
          "authorCount": 6
        }
      },
      {
        "id": "mapString",
        "title": "mapString",
        "type": "snippet",
        "attributes": {
          "fileName": "mapString.md",
          "text": "Creates a new string with the results of calling a provided function on every character in the calling string.\n\nUse `String.prototype.split('')` and `Array.prototype.map()` to call the provided function, `fn`, for each character in `str`.\nUse `Array.prototype.join('')` to recombine the array of characters into a string.\nThe callback function, `fn`, takes three arguments (the current character, the index of the current character and the string `mapString` was called upon).\n\n",
          "codeBlocks": {
            "es6": "const mapString = (str, fn) =>\n  str\n    .split('')\n    .map((c, i) => fn(c, i, str))\n    .join('');",
            "es5": "var mapString = function mapString(str, fn) {\n  return str.split('').map(function (c, i) {\n    return fn(c, i, str);\n  }).join('');\n};",
            "example": "mapString('lorem ipsum', c => c.toUpperCase()); // 'LOREM IPSUM'"
          },
          "tags": [
            "string",
            "array",
            "function",
            "utility",
            "beginner"
          ]
        },
        "meta": {
          "hash": "c4df98d941aeadd165c6a02143d79f7a9bf013f8c221f709aa545bf83495a956",
          "firstSeen": "1531555196",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "mapValues",
        "title": "mapValues",
        "type": "snippet",
        "attributes": {
          "fileName": "mapValues.md",
          "text": "Creates an object with the same keys as the provided object and values generated by running the provided function for each value.\n\nUse `Object.keys(obj)` to iterate over the object's keys.\nUse `Array.prototype.reduce()` to create a new object with the same keys and mapped values using `fn`.\n\n",
          "codeBlocks": {
            "es6": "const mapValues = (obj, fn) =>\n  Object.keys(obj).reduce((acc, k) => {\n    acc[k] = fn(obj[k], k, obj);\n    return acc;\n  }, {});",
            "es5": "var mapValues = function mapValues(obj, fn) {\n  return Object.keys(obj).reduce(function (acc, k) {\n    acc[k] = fn(obj[k], k, obj);\n    return acc;\n  }, {});\n};",
            "example": "const users = {\n  fred: { user: 'fred', age: 40 },\n  pebbles: { user: 'pebbles', age: 1 }\n};\nmapValues(users, u => u.age); // { fred: 40, pebbles: 1 }"
          },
          "tags": [
            "object",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "3853716eb171ac10f5b6dbd0b6afda1342262de305336cd0effd43dc75592f3c",
          "firstSeen": "1515695594",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "mask",
        "title": "mask",
        "type": "snippet",
        "attributes": {
          "fileName": "mask.md",
          "text": "Replaces all but the last `num` of characters with the specified mask character.\n\nUse `String.prototype.slice()` to grab the portion of the characters that will remain unmasked and use `String.padStart()` to fill the beginning of the string with the mask character up to the original length.\nOmit the second argument, `num`, to keep a default of `4` characters unmasked. If `num` is negative, the unmasked characters will be at the start of the string.\nOmit the third argument, `mask`, to use a default character of `'*'` for the mask.\n\n",
          "codeBlocks": {
            "es6": "const mask = (cc, num = 4, mask = '*') => `${cc}`.slice(-num).padStart(`${cc}`.length, mask);",
            "es5": "var mask = function mask(cc) {\n  var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;\n  var mask = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '*';\n  return \"\".concat(cc).slice(-num).padStart(\"\".concat(cc).length, mask);\n};",
            "example": "mask(1234567890); // '******7890'\nmask(1234567890, 3); // '*******890'\nmask(1234567890, -4, '$'); // '$$$$567890'"
          },
          "tags": [
            "string",
            "utility",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "d95e586ebffdfdbaa182feb6a21c41619d6bacde9b7a49ace88b2c958480f25d",
          "firstSeen": "1514804579",
          "lastUpdated": "1579690066",
          "updateCount": 17,
          "authorCount": 8
        }
      },
      {
        "id": "matches",
        "title": "matches",
        "type": "snippet",
        "attributes": {
          "fileName": "matches.md",
          "text": "Compares two objects to determine if the first one contains equivalent property values to the second one.\n\nUse `Object.keys(source)` to get all the keys of the second object, then `Array.prototype.every()`, `Object.hasOwnProperty()` and strict comparison to determine if all keys exist in the first object and have the same values.\n\n",
          "codeBlocks": {
            "es6": "const matches = (obj, source) =>\n  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);",
            "es5": "var matches = function matches(obj, source) {\n  return Object.keys(source).every(function (key) {\n    return obj.hasOwnProperty(key) && obj[key] === source[key];\n  });\n};",
            "example": "matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true\nmatches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false"
          },
          "tags": [
            "object",
            "type",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "45206aac5046169bce32aeeb14785735eb11b42e0bf8d3911531ae1ce6a56282",
          "firstSeen": "1516731452",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "matchesWith",
        "title": "matchesWith",
        "type": "snippet",
        "attributes": {
          "fileName": "matchesWith.md",
          "text": "Compares two objects to determine if the first one contains equivalent property values to the second one, based on a provided function.\n\nUse `Object.keys(source)` to get all the keys of the second object, then `Array.prototype.every()`, `Object.hasOwnProperty()` and the provided function to determine if all keys exist in the first object and have equivalent values.\nIf no function is provided, the values will be compared using the equality operator.\n\n",
          "codeBlocks": {
            "es6": "const matchesWith = (obj, source, fn) =>\n  Object.keys(source).every(key =>\n    obj.hasOwnProperty(key) && fn\n      ? fn(obj[key], source[key], key, obj, source)\n      : obj[key] == source[key]\n  );",
            "es5": "var matchesWith = function matchesWith(obj, source, fn) {\n  return Object.keys(source).every(function (key) {\n    return obj.hasOwnProperty(key) && fn ? fn(obj[key], source[key], key, obj, source) : obj[key] == source[key];\n  });\n};",
            "example": "const isGreeting = val => /^h(?:i|ello)$/.test(val);\nmatchesWith(\n  { greeting: 'hello' },\n  { greeting: 'hi' },\n  (oV, sV) => isGreeting(oV) && isGreeting(sV)\n); // true"
          },
          "tags": [
            "object",
            "type",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "27bc40621fd8cb1b6ded57d7bbbbb33590d889ff87a5e418ef2c0ec6e4005505",
          "firstSeen": "1516731452",
          "lastUpdated": "1566202717",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "maxBy",
        "title": "maxBy",
        "type": "snippet",
        "attributes": {
          "fileName": "maxBy.md",
          "text": "Returns the maximum value of an array, after mapping each element to a value using the provided function.\n\nUse `Array.prototype.map()` to map each element to the value returned by `fn`, `Math.max()` to get the maximum value.\n\n",
          "codeBlocks": {
            "es6": "const maxBy = (arr, fn) => Math.max(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar maxBy = function maxBy(arr, fn) {\n  return Math.max.apply(Math, _toConsumableArray(arr.map(typeof fn === 'function' ? fn : function (val) {\n    return val[fn];\n  })));\n};",
            "example": "maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 8\nmaxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 8"
          },
          "tags": [
            "math",
            "array",
            "function",
            "beginner"
          ]
        },
        "meta": {
          "hash": "bcedf0ea886a7ef2c3a4a925335f087c0bab2e2cb3eb4bc5843f7951cbd5c798",
          "firstSeen": "1515666354",
          "lastUpdated": "1565681352",
          "updateCount": 7,
          "authorCount": 4
        }
      },
      {
        "id": "maxDate",
        "title": "maxDate",
        "type": "snippet",
        "attributes": {
          "fileName": "maxDate.md",
          "text": "Returns the maximum of the given dates.\n\nUse the ES6 spread syntax with `Math.max` to find the maximum date value, `new Date()` to convert it to a `Date` object.\n\n",
          "codeBlocks": {
            "es6": "const maxDate = dates => new Date(Math.max(...dates));",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar maxDate = function maxDate(dates) {\n  return new Date(Math.max.apply(Math, _toConsumableArray(dates)));\n};",
            "example": "const array = [\n  new Date(2017, 4, 13),\n  new Date(2018, 2, 12),\n  new Date(2016, 0, 10),\n  new Date(2016, 0, 9)\n];\nmaxDate(array); // 2018-03-11T22:00:00.000Z"
          },
          "tags": [
            "date",
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "dc618772c3321607f451b13b124358fd3207f81fbeaa7f2deb3b7cd1da671175",
          "firstSeen": "1538217500",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 3
        }
      },
      {
        "id": "maxN",
        "title": "maxN",
        "type": "snippet",
        "attributes": {
          "fileName": "maxN.md",
          "text": "Returns the `n` maximum elements from the provided array.\nIf `n` is greater than or equal to the provided array's length, then return the original array (sorted in descending order).\n\nUse `Array.prototype.sort()` combined with the spread operator (`...`) to create a shallow clone of the array and sort it in descending order.\nUse `Array.prototype.slice()` to get the specified number of elements.\nOmit the second argument, `n`, to get a one-element array.\n\n",
          "codeBlocks": {
            "es6": "const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar maxN = function maxN(arr) {\n  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n  return _toConsumableArray(arr).sort(function (a, b) {\n    return b - a;\n  }).slice(0, n);\n};",
            "example": "maxN([1, 2, 3]); // [3]\nmaxN([1, 2, 3], 2); // [3,2]"
          },
          "tags": [
            "array",
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "888b1addde4cd2fa6137733130e9d847a87299d6753ddda5c8dd8c94b542db80",
          "firstSeen": "1514949509",
          "lastUpdated": "1565681352",
          "updateCount": 9,
          "authorCount": 5
        }
      },
      {
        "id": "median",
        "title": "median",
        "type": "snippet",
        "attributes": {
          "fileName": "median.md",
          "text": "Returns the median of an array of numbers.\n\nFind the middle of the array, use `Array.prototype.sort()` to sort the values.\nReturn the number at the midpoint if `length` is odd, otherwise the average of the two middle numbers.\n\n",
          "codeBlocks": {
            "es6": "const median = arr => {\n  const mid = Math.floor(arr.length / 2),\n    nums = [...arr].sort((a, b) => a - b);\n  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;\n};",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar median = function median(arr) {\n  var mid = Math.floor(arr.length / 2),\n      nums = _toConsumableArray(arr).sort(function (a, b) {\n    return a - b;\n  });\n\n  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;\n};",
            "example": "median([5, 6, 50, 1, -5]); // 5"
          },
          "tags": [
            "math",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "bf0a5bf2fe4d28262fe7e8f3eec16d24c05a177b06d20937db413c0d404cda12",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 9,
          "authorCount": 6
        }
      },
      {
        "id": "memoize",
        "title": "memoize",
        "type": "snippet",
        "attributes": {
          "fileName": "memoize.md",
          "text": "Returns the memoized (cached) function.\n\nCreate an empty cache by instantiating a new `Map` object.\nReturn a function which takes a single argument to be supplied to the memoized function by first checking if the function's output for that specific input value is already cached, or store and return it if not. The `function` keyword must be used in order to allow the memoized function to have its `this` context changed if necessary.\nAllow access to the `cache` by setting it as a property on the returned function.\n\n",
          "codeBlocks": {
            "es6": "const memoize = fn => {\n  const cache = new Map();\n  const cached = function(val) {\n    return cache.has(val) ? cache.get(val) : cache.set(val, fn.call(this, val)) && cache.get(val);\n  };\n  cached.cache = cache;\n  return cached;\n};",
            "es5": "var memoize = function memoize(fn) {\n  var cache = new Map();\n\n  var cached = function cached(val) {\n    return cache.has(val) ? cache.get(val) : cache.set(val, fn.call(this, val)) && cache.get(val);\n  };\n\n  cached.cache = cache;\n  return cached;\n};",
            "example": "// See the `anagrams` snippet.\nconst anagramsCached = memoize(anagrams);\nanagramsCached('javascript'); // takes a long time\nanagramsCached('javascript'); // returns virtually instantly since it's now cached\nconsole.log(anagramsCached.cache); // The cached anagrams map"
          },
          "tags": [
            "function",
            "advanced"
          ]
        },
        "meta": {
          "hash": "451dd1fad58f3d4984363426a0f77e9a26697f6be944d53ed82d32c71849280e",
          "firstSeen": "1514721355",
          "lastUpdated": "1565681352",
          "updateCount": 10,
          "authorCount": 4
        }
      },
      {
        "id": "merge",
        "title": "merge",
        "type": "snippet",
        "attributes": {
          "fileName": "merge.md",
          "text": "Creates a new object from the combination of two or more objects.\n\nUse `Array.prototype.reduce()` combined with `Object.keys(obj)` to iterate over all objects and keys.\nUse `hasOwnProperty()` and `Array.prototype.concat()` to append values for keys existing in multiple objects.\n\n",
          "codeBlocks": {
            "es6": "const merge = (...objs) =>\n  [...objs].reduce(\n    (acc, obj) =>\n      Object.keys(obj).reduce((a, k) => {\n        acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k];\n        return acc;\n      }, {}),\n    {}\n  );",
            "es5": "var merge = function merge() {\n  for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {\n    objs[_key] = arguments[_key];\n  }\n\n  return [].concat(objs).reduce(function (acc, obj) {\n    return Object.keys(obj).reduce(function (a, k) {\n      acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k];\n      return acc;\n    }, {});\n  }, {});\n};",
            "example": "const object = {\n  a: [{ x: 2 }, { y: 4 }],\n  b: 1\n};\nconst other = {\n  a: { z: 3 },\n  b: [2, 3],\n  c: 'foo'\n};\nmerge(object, other); // { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }"
          },
          "tags": [
            "object",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "cda4db6e9da35706f6e4b13f2860a210433c8bc2ac6078f9ff63aef6771c72d3",
          "firstSeen": "1515761060",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "midpoint",
        "title": "midpoint",
        "type": "snippet",
        "attributes": {
          "fileName": "midpoint.md",
          "text": "Calculates the midpoint between two pairs of (x,y) points.\n\nDestructure the array to get `x1`, `y1`, `x2` and `y2`, calculate the midpoint for each dimension by dividing the sum of the two endpoints by `2`.\n\n",
          "codeBlocks": {
            "es6": "const midpoint = ([x1, y1], [x2, y2]) => [(x1 + x2) / 2, (y1 + y2) / 2];",
            "es5": "function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar midpoint = function midpoint(_ref, _ref2) {\n  var _ref3 = _slicedToArray(_ref, 2),\n      x1 = _ref3[0],\n      y1 = _ref3[1];\n\n  var _ref4 = _slicedToArray(_ref2, 2),\n      x2 = _ref4[0],\n      y2 = _ref4[1];\n\n  return [(x1 + x2) / 2, (y1 + y2) / 2];\n};",
            "example": "midpoint([2, 2], [4, 4]); // [3, 3]\nmidpoint([4, 4], [6, 6]); // [5, 5]\nmidpoint([1, 3], [2, 4]); // [1.5, 3.5]"
          },
          "tags": [
            "math",
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "f9db07575860cfcc7fc619788c33821d7adb390d44b68160d6e561bfe41f7316",
          "firstSeen": "1542296944",
          "lastUpdated": "1565681352",
          "updateCount": 4,
          "authorCount": 3
        }
      },
      {
        "id": "minBy",
        "title": "minBy",
        "type": "snippet",
        "attributes": {
          "fileName": "minBy.md",
          "text": "Returns the minimum value of an array, after mapping each element to a value using the provided function.\n\nUse `Array.prototype.map()` to map each element to the value returned by `fn`, `Math.min()` to get the minimum value.\n\n",
          "codeBlocks": {
            "es6": "const minBy = (arr, fn) => Math.min(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar minBy = function minBy(arr, fn) {\n  return Math.min.apply(Math, _toConsumableArray(arr.map(typeof fn === 'function' ? fn : function (val) {\n    return val[fn];\n  })));\n};",
            "example": "minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 2\nminBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 2"
          },
          "tags": [
            "math",
            "array",
            "function",
            "beginner"
          ]
        },
        "meta": {
          "hash": "4c4ea74f666a35184db36bd5084614743446091a699086a5e5280ac2891be1c2",
          "firstSeen": "1515666354",
          "lastUpdated": "1565681352",
          "updateCount": 9,
          "authorCount": 5
        }
      },
      {
        "id": "minDate",
        "title": "minDate",
        "type": "snippet",
        "attributes": {
          "fileName": "minDate.md",
          "text": "Returns the minimum of the given dates.\n\nUse the ES6 spread syntax to find the minimum date value, `new Date()` to convert it to a `Date` object.\n\n",
          "codeBlocks": {
            "es6": "const minDate = dates => new Date(Math.min(...dates));",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar minDate = function minDate(dates) {\n  return new Date(Math.min.apply(Math, _toConsumableArray(dates)));\n};",
            "example": "const array = [\n  new Date(2017, 4, 13),\n  new Date(2018, 2, 12),\n  new Date(2016, 0, 10),\n  new Date(2016, 0, 9)\n];\nminDate(array); // 2016-01-08T22:00:00.000Z"
          },
          "tags": [
            "date",
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "cf59c98e2fc56230399d301d1e3645dd5961389c5c361d763e4a5fce01d22db2",
          "firstSeen": "1538217500",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 3
        }
      },
      {
        "id": "minN",
        "title": "minN",
        "type": "snippet",
        "attributes": {
          "fileName": "minN.md",
          "text": "Returns the `n` minimum elements from the provided array.\nIf `n` is greater than or equal to the provided array's length, then return the original array (sorted in ascending order).\n\nUse `Array.prototype.sort()` combined with the spread operator (`...`) to create a shallow clone of the array and sort it in ascending order.\nUse `Array.prototype.slice()` to get the specified number of elements.\nOmit the second argument, `n`, to get a one-element array.\n\n",
          "codeBlocks": {
            "es6": "const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar minN = function minN(arr) {\n  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n  return _toConsumableArray(arr).sort(function (a, b) {\n    return a - b;\n  }).slice(0, n);\n};",
            "example": "minN([1, 2, 3]); // [1]\nminN([1, 2, 3], 2); // [1,2]"
          },
          "tags": [
            "array",
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "65bcfbbf3937f35f591285306ec3bfbee46a1738a6a8f097c99bf07150aec198",
          "firstSeen": "1514949509",
          "lastUpdated": "1565681352",
          "updateCount": 9,
          "authorCount": 5
        }
      },
      {
        "id": "mostFrequent",
        "title": "mostFrequent",
        "type": "snippet",
        "attributes": {
          "fileName": "mostFrequent.md",
          "text": "Returns the most frequent element in an array.\n\nUse `Array.prototype.reduce()` to map unique values to an object's keys, adding to existing keys every time the same value is encountered.\nUse `Object.entries()` on the result in combination with `Array.prototype.reduce()` to get the most frequent value in the array.\n\n",
          "codeBlocks": {
            "es6": "const mostFrequent = arr =>\n  Object.entries(\n    arr.reduce((a, v) => {\n      a[v] = a[v] ? a[v] + 1 : 1;\n      return a;\n    }, {})\n  ).reduce((a, v) => (v[1] >= a[1] ? v : a), [null, 0])[0];",
            "es5": "var mostFrequent = function mostFrequent(arr) {\n  return Object.entries(arr.reduce(function (a, v) {\n    a[v] = a[v] ? a[v] + 1 : 1;\n    return a;\n  }, {})).reduce(function (a, v) {\n    return v[1] >= a[1] ? v : a;\n  }, [null, 0])[0];\n};",
            "example": "mostFrequent(['a', 'b', 'a', 'c', 'a', 'a', 'b']); // 'a'"
          },
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "0c04c74cdbb51195f740a163776cb5c4e21a57a59099a1740211cf0764c6c9cc",
          "firstSeen": "1578058366",
          "lastUpdated": "1578058637",
          "updateCount": 3,
          "authorCount": 3
        }
      },
      {
        "id": "mostPerformant",
        "title": "mostPerformant",
        "type": "snippet",
        "attributes": {
          "fileName": "mostPerformant.md",
          "text": "Returns the index of the function in an array of functions which executed the fastest.\n\nUse `Array.prototype.map()` to generate an array where each value is the total time taken to execute the function after `iterations` times. Use the difference in `performance.now()` values before and after to get the total time in milliseconds to a high degree of accuracy.\nUse `Math.min()` to find the minimum execution time, and return the index of that shortest time which corresponds to the index of the most performant function.\nOmit the second argument, `iterations`, to use a default of 10,000 iterations. The more iterations, the more reliable the result but the longer it will take.\n\n",
          "codeBlocks": {
            "es6": "const mostPerformant = (fns, iterations = 10000) => {\n  const times = fns.map(fn => {\n    const before = performance.now();\n    for (let i = 0; i < iterations; i++) fn();\n    return performance.now() - before;\n  });\n  return times.indexOf(Math.min(...times));\n};",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar mostPerformant = function mostPerformant(fns) {\n  var iterations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10000;\n  var times = fns.map(function (fn) {\n    var before = performance.now();\n\n    for (var i = 0; i < iterations; i++) {\n      fn();\n    }\n\n    return performance.now() - before;\n  });\n  return times.indexOf(Math.min.apply(Math, _toConsumableArray(times)));\n};",
            "example": "mostPerformant([\n  () => {\n    // Loops through the entire array before returning `false`\n    [1, 2, 3, 4, 5, 6, 7, 8, 9, '10'].every(el => typeof el === 'number');\n  },\n  () => {\n    // Only needs to reach index `1` before returning false\n    [1, '2', 3, 4, 5, 6, 7, 8, 9, 10].every(el => typeof el === 'number');\n  }\n]); // 1"
          },
          "tags": [
            "utility",
            "function"
          ]
        },
        "meta": {
          "hash": "120e31fa38796906a99beccdc457e83a8075e6ec72b5a937e03913b2e996ae26",
          "firstSeen": "1518608325",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 5
        }
      },
      {
        "id": "negate",
        "title": "negate",
        "type": "snippet",
        "attributes": {
          "fileName": "negate.md",
          "text": "Negates a predicate function.\n\nTake a predicate function and apply the not operator (`!`) to it with its arguments.\n\n",
          "codeBlocks": {
            "es6": "const negate = func => (...args) => !func(...args);",
            "es5": "var negate = function negate(func) {\n  return function () {\n    return !func.apply(void 0, arguments);\n  };\n};",
            "example": "[1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]"
          },
          "tags": [
            "function",
            "beginner"
          ]
        },
        "meta": {
          "hash": "20deb11c89b14b294b13f9846fde62e4a9ac8df0a71553509431b16b5c88d24a",
          "firstSeen": "1514096932",
          "lastUpdated": "1565681352",
          "updateCount": 13,
          "authorCount": 5
        }
      },
      {
        "id": "nest",
        "title": "nest",
        "type": "snippet",
        "attributes": {
          "fileName": "nest.md",
          "text": "Given a flat array of objects linked to one another, it will nest them recursively.\nUseful for nesting comments, such as the ones on reddit.com.\n\nUse recursion.\nUse `Array.prototype.filter()` to filter the items where the `id` matches the `link`, then `Array.prototype.map()` to map each one to a new object that has a `children` property which recursively nests the items based on which ones are children of the current item.\nOmit the second argument, `id`, to default to `null` which indicates the object is not linked to another one (i.e. it is a top level object).\nOmit the third argument, `link`, to use `'parent_id'` as the default property which links the object to another one by its `id`.\n\n",
          "codeBlocks": {
            "es6": "const nest = (items, id = null, link = 'parent_id') =>\n  items\n    .filter(item => item[link] === id)\n    .map(item => ({ ...item, children: nest(items, item.id) }));",
            "es5": "function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar nest = function nest(items) {\n  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  var link = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'parent_id';\n  return items.filter(function (item) {\n    return item[link] === id;\n  }).map(function (item) {\n    return _objectSpread({}, item, {\n      children: nest(items, item.id)\n    });\n  });\n};",
            "example": "// One top level comment\nconst comments = [\n  { id: 1, parent_id: null },\n  { id: 2, parent_id: 1 },\n  { id: 3, parent_id: 1 },\n  { id: 4, parent_id: 2 },\n  { id: 5, parent_id: 4 }\n];\nconst nestedComments = nest(comments); // [{ id: 1, parent_id: null, children: [...] }]"
          },
          "tags": [
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "6133ec3409b8c18ccfc89d857149c7875eb4733803772b43743df3b7c51bd02c",
          "firstSeen": "1519472996",
          "lastUpdated": "1565681352",
          "updateCount": 7,
          "authorCount": 5
        }
      },
      {
        "id": "nodeListToArray",
        "title": "nodeListToArray",
        "type": "snippet",
        "attributes": {
          "fileName": "nodeListToArray.md",
          "text": "Converts a `NodeList` to an array.\n\nUse spread operator inside new array to convert a `NodeList` to an array.\n\n",
          "codeBlocks": {
            "es6": "const nodeListToArray = nodeList => [...nodeList];",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar nodeListToArray = function nodeListToArray(nodeList) {\n  return _toConsumableArray(nodeList);\n};",
            "example": "nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]"
          },
          "tags": [
            "browser",
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "3c4f99f0a0b9d2103e7ed3553bf7268475135603aa46d2eae204d3f34fe51ffd",
          "firstSeen": "1525619481",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 3
        }
      },
      {
        "id": "none",
        "title": "none",
        "type": "snippet",
        "attributes": {
          "fileName": "none.md",
          "text": "Returns `true` if the provided predicate function returns `false` for all elements in a collection, `false` otherwise.\n\nUse `Array.prototype.some()` to test if any elements in the collection return `true` based on `fn`.\nOmit the second argument, `fn`, to use `Boolean` as a default.\n\n",
          "codeBlocks": {
            "es6": "const none = (arr, fn = Boolean) => !arr.some(fn);",
            "es5": "var none = function none(arr) {\n  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Boolean;\n  return !arr.some(fn);\n};",
            "example": "none([0, 1, 3, 0], x => x == 2); // true\nnone([0, 0, 0]); // true"
          },
          "tags": [
            "array",
            "function",
            "beginner"
          ]
        },
        "meta": {
          "hash": "a11f7bdacee4978a1cc579091b04a912962a239dc7bd442518420a4d39c290d5",
          "firstSeen": "1518601575",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "nthArg",
        "title": "nthArg",
        "type": "snippet",
        "attributes": {
          "fileName": "nthArg.md",
          "text": "Creates a function that gets the argument at index `n`. If `n` is negative, the nth argument from the end is returned.\n\nUse `Array.prototype.slice()` to get the desired argument at index `n`.\n\n",
          "codeBlocks": {
            "es6": "const nthArg = n => (...args) => args.slice(n)[0];",
            "es5": "var nthArg = function nthArg(n) {\n  return function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return args.slice(n)[0];\n  };\n};",
            "example": "const third = nthArg(2);\nthird(1, 2, 3); // 3\nthird(1, 2); // undefined\nconst last = nthArg(-1);\nlast(1, 2, 3, 4, 5); // 5"
          },
          "tags": [
            "utility",
            "function",
            "beginner"
          ]
        },
        "meta": {
          "hash": "1885078f5fddc5de00844a837ab3c427f770c5325a70d5362ecab26c1c904125",
          "firstSeen": "1516735657",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "nthElement",
        "title": "nthElement",
        "type": "snippet",
        "attributes": {
          "fileName": "nthElement.md",
          "text": "Returns the nth element of an array.\n\nUse `Array.prototype.slice()` to get an array containing the nth element at the first place.\nIf the index is out of bounds, return `undefined`.\nOmit the second argument, `n`, to get the first element of the array.\n\n",
          "codeBlocks": {
            "es6": "const nthElement = (arr, n = 0) => (n === -1 ? arr.slice(n) : arr.slice(n, n + 1))[0];",
            "es5": "var nthElement = function nthElement(arr) {\n  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  return (n === -1 ? arr.slice(n) : arr.slice(n, n + 1))[0];\n};",
            "example": "nthElement(['a', 'b', 'c'], 1); // 'b'\nnthElement(['a', 'b', 'b'], -3); // 'a'"
          },
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "51af30db5952a0473fe9ae72c338b974a88813cbca522ba56d0dc3b4ec6fc51c",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 10,
          "authorCount": 7
        }
      },
      {
        "id": "objectFromPairs",
        "title": "objectFromPairs",
        "type": "snippet",
        "attributes": {
          "fileName": "objectFromPairs.md",
          "text": "Creates an object from the given key-value pairs.\n\nUse `Array.prototype.reduce()` to create and combine key-value pairs.\n\n",
          "codeBlocks": {
            "es6": "const objectFromPairs = arr => arr.reduce((a, [key, val]) => ((a[key] = val), a), {});",
            "es5": "function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar objectFromPairs = function objectFromPairs(arr) {\n  return arr.reduce(function (a, _ref) {\n    var _ref2 = _slicedToArray(_ref, 2),\n        key = _ref2[0],\n        val = _ref2[1];\n\n    return a[key] = val, a;\n  }, {});\n};",
            "example": "objectFromPairs([['a', 1], ['b', 2]]); // {a: 1, b: 2}"
          },
          "tags": [
            "object",
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "99537507288f1e101bfc0f80ba708b415832b27ce060033fbba8bdfc32cc3cea",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 10,
          "authorCount": 6
        }
      },
      {
        "id": "objectToPairs",
        "title": "objectToPairs",
        "type": "snippet",
        "attributes": {
          "fileName": "objectToPairs.md",
          "text": "Creates an array of key-value pair arrays from an object.\n\nUse `Object.entries()` to get an array of key-value pair arrays from the given object.\n\n",
          "codeBlocks": {
            "es6": "const objectToPairs = obj => Object.entries(obj);",
            "es5": "var objectToPairs = function objectToPairs(obj) {\n  return Object.entries(obj);\n};",
            "example": "objectToPairs({ a: 1, b: 2 }); // [ ['a', 1], ['b', 2] ]"
          },
          "tags": [
            "object",
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "dac621c1f33fd6a1a404690d73ad5f7b0a89aae180e9e16aa3af9e0e6d64e411",
          "firstSeen": "1513526151",
          "lastUpdated": "1584968807",
          "updateCount": 10,
          "authorCount": 5
        }
      },
      {
        "id": "objectToQueryString",
        "title": "objectToQueryString",
        "type": "snippet",
        "attributes": {
          "fileName": "objectToQueryString.md",
          "text": "Returns a query string generated from the key-value pairs of the given object.\n\nUse `Array.prototype.reduce()` on `Object.entries(queryParameters)` to create the query string.\nDetermine the `symbol` to be either `?` or `&` based on the `length` of `queryString` and concatenate `val` to `queryString` only if it's a string.\nReturn the `queryString` or an empty string when the `queryParameters` are falsy.\n\n",
          "codeBlocks": {
            "es6": "const objectToQueryString = queryParameters => {\n  return queryParameters\n    ? Object.entries(queryParameters).reduce((queryString, [key, val], index) => {\n      const symbol = queryString.length === 0 ? '?' : '&';\n      queryString += typeof val === 'string' ? `${symbol}${key}=${val}` : '';\n      return queryString;\n    }, '')\n    : '';\n};",
            "es5": "function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar objectToQueryString = function objectToQueryString(queryParameters) {\n  return queryParameters ? Object.entries(queryParameters).reduce(function (queryString, _ref, index) {\n    var _ref2 = _slicedToArray(_ref, 2),\n        key = _ref2[0],\n        val = _ref2[1];\n\n    var symbol = queryString.length === 0 ? '?' : '&';\n    queryString += typeof val === 'string' ? \"\".concat(symbol).concat(key, \"=\").concat(val) : '';\n    return queryString;\n  }, '') : '';\n};",
            "example": "objectToQueryString({ page: '1', size: '2kg', key: undefined }); // '?page=1&size=2kg'"
          },
          "tags": [
            "utility",
            "object",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "b031c3387ef66411ab5d295788eac4247ada5b4b068dda90603d3c973890bc26",
          "firstSeen": "1570824965",
          "lastUpdated": "1585031872",
          "updateCount": 52,
          "authorCount": 4
        }
      },
      {
        "id": "observeMutations",
        "title": "observeMutations",
        "type": "snippet",
        "attributes": {
          "fileName": "observeMutations.md",
          "text": "Returns a new MutationObserver and runs the provided callback for each mutation on the specified element.\n\nUse a [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) to observe mutations on the given element.\nUse `Array.prototype.forEach()` to run the callback for each mutation that is observed.\nOmit the third argument, `options`, to use the default [options](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver#MutationObserverInit) (all `true`).\n\n",
          "codeBlocks": {
            "es6": "const observeMutations = (element, callback, options) => {\n  const observer = new MutationObserver(mutations => mutations.forEach(m => callback(m)));\n  observer.observe(\n    element,\n    Object.assign(\n      {\n        childList: true,\n        attributes: true,\n        attributeOldValue: true,\n        characterData: true,\n        characterDataOldValue: true,\n        subtree: true\n      },\n      options\n    )\n  );\n  return observer;\n};",
            "es5": "var observeMutations = function observeMutations(element, callback, options) {\n  var observer = new MutationObserver(function (mutations) {\n    return mutations.forEach(function (m) {\n      return callback(m);\n    });\n  });\n  observer.observe(element, Object.assign({\n    childList: true,\n    attributes: true,\n    attributeOldValue: true,\n    characterData: true,\n    characterDataOldValue: true,\n    subtree: true\n  }, options));\n  return observer;\n};",
            "example": "const obs = observeMutations(document, console.log); // Logs all mutations that happen on the page\nobs.disconnect(); // Disconnects the observer and stops logging mutations on the page"
          },
          "tags": [
            "browser",
            "event",
            "advanced"
          ]
        },
        "meta": {
          "hash": "98673c6d6bebe907c0ac285f342147f30de01bc326feb5109b6d25739fe473aa",
          "firstSeen": "1515848332",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "off",
        "title": "off",
        "type": "snippet",
        "attributes": {
          "fileName": "off.md",
          "text": "Removes an event listener from an element.\n\nUse `EventTarget.removeEventListener()` to remove an event listener from an element. \nOmit the fourth argument `opts` to use `false` or specify it based on the options used when the event listener was added.\n\n",
          "codeBlocks": {
            "es6": "const off = (el, evt, fn, opts = false) => el.removeEventListener(evt, fn, opts);",
            "es5": "var off = function off(el, evt, fn) {\n  var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n  return el.removeEventListener(evt, fn, opts);\n};",
            "example": "const fn = () => console.log('!');\ndocument.body.addEventListener('click', fn);\noff(document.body, 'click', fn); // no longer logs '!' upon clicking on the page"
          },
          "tags": [
            "browser",
            "event",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "ab081473a5589edddab0b641758744ee5a65bf43cb93eeca23f48e86e0fdbb9c",
          "firstSeen": "1515155628",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 3
        }
      },
      {
        "id": "offset",
        "title": "offset",
        "type": "snippet",
        "attributes": {
          "fileName": "offset.md",
          "text": "Moves the specified amount of elements to the end of the array.\n\nUse `Array.prototype.slice()` twice to get the elements after the specified index and the elements before that.\nUse the spread operator(`...`) to combine the two into one array.\nIf `offset` is negative, the elements will be moved from end to start.\n\n",
          "codeBlocks": {
            "es6": "const offset = (arr, offset) => [...arr.slice(offset), ...arr.slice(0, offset)];",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar offset = function offset(arr, _offset) {\n  return [].concat(_toConsumableArray(arr.slice(_offset)), _toConsumableArray(arr.slice(0, _offset)));\n};",
            "example": "offset([1, 2, 3, 4, 5], 2); // [3, 4, 5, 1, 2]\noffset([1, 2, 3, 4, 5], -2); // [4, 5, 1, 2, 3]"
          },
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "87cd3d6c458b2ecbb373645230a03c7e0770ca3991c635571ffaae5d7a40987c",
          "firstSeen": "1523376470",
          "lastUpdated": "1565681352",
          "updateCount": 4,
          "authorCount": 3
        }
      },
      {
        "id": "omit",
        "title": "omit",
        "type": "snippet",
        "attributes": {
          "fileName": "omit.md",
          "text": "Omits the key-value pairs corresponding to the given keys from an object.\n\nUse `Object.keys(obj)`, `Array.prototype.filter()` and `Array.prototype.includes()` to remove the provided keys.\nUse `Array.prototype.reduce()` to convert the filtered keys back to an object with the corresponding key-value pairs.\n\n",
          "codeBlocks": {
            "es6": "const omit = (obj, arr) =>\n  Object.keys(obj)\n    .filter(k => !arr.includes(k))\n    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});",
            "es5": "var omit = function omit(obj, arr) {\n  return Object.keys(obj).filter(function (k) {\n    return !arr.includes(k);\n  }).reduce(function (acc, key) {\n    return acc[key] = obj[key], acc;\n  }, {});\n};",
            "example": "omit({ a: 1, b: '2', c: 3 }, ['b']); // { 'a': 1, 'c': 3 }"
          },
          "tags": [
            "object",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "64c941025c6bf130b6b6639427cf64c8af5759734118efbbbec9e8d490845a10",
          "firstSeen": "1516360486",
          "lastUpdated": "1565681352",
          "updateCount": 4,
          "authorCount": 3
        }
      },
      {
        "id": "omitBy",
        "title": "omitBy",
        "type": "snippet",
        "attributes": {
          "fileName": "omitBy.md",
          "text": "Creates an object composed of the properties the given function returns falsy for. The function is invoked with two arguments: (value, key).\n\nUse `Object.keys(obj)` and `Array.prototype.filter()`to remove the keys for which `fn` returns a truthy value.\nUse `Array.prototype.reduce()` to convert the filtered keys back to an object with the corresponding key-value pairs.\n\n",
          "codeBlocks": {
            "es6": "const omitBy = (obj, fn) =>\n  Object.keys(obj)\n    .filter(k => !fn(obj[k], k))\n    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});",
            "es5": "var omitBy = function omitBy(obj, fn) {\n  return Object.keys(obj).filter(function (k) {\n    return !fn(obj[k], k);\n  }).reduce(function (acc, key) {\n    return acc[key] = obj[key], acc;\n  }, {});\n};",
            "example": "omitBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'); // { b: '2' }"
          },
          "tags": [
            "object",
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "2119b62768ca88da15cef3bb1671c65a557d81f224c846bdaa6a75d320577366",
          "firstSeen": "1516361025",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "on",
        "title": "on",
        "type": "snippet",
        "attributes": {
          "fileName": "on.md",
          "text": "Adds an event listener to an element with the ability to use event delegation.\n\nUse `EventTarget.addEventListener()` to add an event listener to an element. If there is a `target` property supplied to the options object, ensure the event target matches the target specified and then invoke the callback by supplying the correct `this` context.\nReturns a reference to the custom delegator function, in order to be possible to use with [`off`](#off).\nOmit `opts` to default to non-delegation behavior and event bubbling.\n\n",
          "codeBlocks": {
            "es6": "const on = (el, evt, fn, opts = {}) => {\n  const delegatorFn = e => e.target.matches(opts.target) && fn.call(e.target, e);\n  el.addEventListener(evt, opts.target ? delegatorFn : fn, opts.options || false);\n  if (opts.target) return delegatorFn;\n};",
            "es5": "var on = function on(el, evt, fn) {\n  var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};\n\n  var delegatorFn = function delegatorFn(e) {\n    return e.target.matches(opts.target) && fn.call(e.target, e);\n  };\n\n  el.addEventListener(evt, opts.target ? delegatorFn : fn, opts.options || false);\n  if (opts.target) return delegatorFn;\n};",
            "example": "const fn = () => console.log('!');\non(document.body, 'click', fn); // logs '!' upon clicking the body\non(document.body, 'click', fn, { target: 'p' }); // logs '!' upon clicking a `p` element child of the body\non(document.body, 'click', fn, { options: true }); // use capturing instead of bubbling"
          },
          "tags": [
            "browser",
            "event",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "37b8c9323006f3eb66cbfbe240d5020ef0896e312e9f1ed949b200a767324877",
          "firstSeen": "1515155628",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 3
        }
      },
      {
        "id": "once",
        "title": "once",
        "type": "snippet",
        "attributes": {
          "fileName": "once.md",
          "text": "Ensures a function is called only once.\n\nUtilizing a closure, use a flag, `called`, and set it to `true` once the function is called for the first time, preventing it from being called again. In order to allow the function to have its `this` context changed (such as in an event listener), the `function` keyword must be used, and the supplied function must have the context applied.\nAllow the function to be supplied with an arbitrary number of arguments using the rest/spread (`...`) operator.\n\n",
          "codeBlocks": {
            "es6": "const once = fn => {\n  let called = false;\n  return function(...args) {\n    if (called) return;\n    called = true;\n    return fn.apply(this, args);\n  };\n};",
            "es5": "var once = function once(fn) {\n  var called = false;\n  return function () {\n    if (called) return;\n    called = true;\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return fn.apply(this, args);\n  };\n};",
            "example": "const startApp = function(event) {\n  console.log(this, event); // document.body, MouseEvent\n};\ndocument.body.addEventListener('click', once(startApp)); // only runs `startApp` once upon click"
          },
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "61603245edccd32edad26ecdbf39d3c8d99bde8d2672a1a392508ca9c30c6d22",
          "firstSeen": "1514846446",
          "lastUpdated": "1565681352",
          "updateCount": 8,
          "authorCount": 4
        }
      },
      {
        "id": "onUserInputChange",
        "title": "onUserInputChange",
        "type": "snippet",
        "attributes": {
          "fileName": "onUserInputChange.md",
          "text": "Run the callback whenever the user input type changes (`mouse` or `touch`). Useful for enabling/disabling code depending on the input device. This process is dynamic and works with hybrid devices (e.g. touchscreen laptops).\n\nUse two event listeners. Assume `mouse` input initially and bind a `touchstart` event listener to the document. \nOn `touchstart`, add a `mousemove` event listener to listen for two consecutive `mousemove` events firing within 20ms, using `performance.now()`.\nRun the callback with the input type as an argument in either of these situations.\n\n",
          "codeBlocks": {
            "es6": "const onUserInputChange = callback => {\n  let type = 'mouse',\n    lastTime = 0;\n  const mousemoveHandler = () => {\n    const now = performance.now();\n    if (now - lastTime < 20)\n      (type = 'mouse'), callback(type), document.removeEventListener('mousemove', mousemoveHandler);\n    lastTime = now;\n  };\n  document.addEventListener('touchstart', () => {\n    if (type === 'touch') return;\n    (type = 'touch'), callback(type), document.addEventListener('mousemove', mousemoveHandler);\n  });\n};",
            "es5": "var onUserInputChange = function onUserInputChange(callback) {\n  var type = 'mouse',\n      lastTime = 0;\n\n  var mousemoveHandler = function mousemoveHandler() {\n    var now = performance.now();\n    if (now - lastTime < 20) type = 'mouse', callback(type), document.removeEventListener('mousemove', mousemoveHandler);\n    lastTime = now;\n  };\n\n  document.addEventListener('touchstart', function () {\n    if (type === 'touch') return;\n    type = 'touch', callback(type), document.addEventListener('mousemove', mousemoveHandler);\n  });\n};",
            "example": "onUserInputChange(type => {\n  console.log('The user is now using', type, 'as an input method.');\n});"
          },
          "tags": [
            "browser",
            "event",
            "advanced"
          ]
        },
        "meta": {
          "hash": "f12c78c23280839489bf4dfae847eeab3ceb72fef326b5bca3f2ed1bdcc44ee3",
          "firstSeen": "1514562113",
          "lastUpdated": "1565681352",
          "updateCount": 7,
          "authorCount": 4
        }
      },
      {
        "id": "orderBy",
        "title": "orderBy",
        "type": "snippet",
        "attributes": {
          "fileName": "orderBy.md",
          "text": "Returns a sorted array of objects ordered by properties and orders.\n\nUses `Array.prototype.sort()`, `Array.prototype.reduce()` on the `props` array with a default value of `0`, use array destructuring to swap the properties position depending on the order passed.\nIf no `orders` array is passed it sort by `'asc'` by default.\n\n",
          "codeBlocks": {
            "es6": "const orderBy = (arr, props, orders) =>\n  [...arr].sort((a, b) =>\n    props.reduce((acc, prop, i) => {\n      if (acc === 0) {\n        const [p1, p2] = orders && orders[i] === 'desc' ? [b[prop], a[prop]] : [a[prop], b[prop]];\n        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;\n      }\n      return acc;\n    }, 0)\n  );",
            "es5": "function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar orderBy = function orderBy(arr, props, orders) {\n  return _toConsumableArray(arr).sort(function (a, b) {\n    return props.reduce(function (acc, prop, i) {\n      if (acc === 0) {\n        var _ref = orders && orders[i] === 'desc' ? [b[prop], a[prop]] : [a[prop], b[prop]],\n            _ref2 = _slicedToArray(_ref, 2),\n            p1 = _ref2[0],\n            p2 = _ref2[1];\n\n        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;\n      }\n\n      return acc;\n    }, 0);\n  });\n};",
            "example": "const users = [{ name: 'fred', age: 48 }, { name: 'barney', age: 36 }, { name: 'fred', age: 40 }];\norderBy(users, ['name', 'age'], ['asc', 'desc']); // [{name: 'barney', age: 36}, {name: 'fred', age: 48}, {name: 'fred', age: 40}]\norderBy(users, ['name', 'age']); // [{name: 'barney', age: 36}, {name: 'fred', age: 40}, {name: 'fred', age: 48}]"
          },
          "tags": [
            "object",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "a53f86761dacc7d0bc184c304dd2e59461a393d45214212d17d02a8df94144b0",
          "firstSeen": "1513762400",
          "lastUpdated": "1565681352",
          "updateCount": 13,
          "authorCount": 9
        }
      },
      {
        "id": "over",
        "title": "over",
        "type": "snippet",
        "attributes": {
          "fileName": "over.md",
          "text": "Creates a function that invokes each provided function with the arguments it receives and returns the results.\n\nUse `Array.prototype.map()` and `Function.prototype.apply()` to apply each function to the given arguments.\n\n",
          "codeBlocks": {
            "es6": "const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));",
            "es5": "var over = function over() {\n  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {\n    fns[_key] = arguments[_key];\n  }\n\n  return function () {\n    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      args[_key2] = arguments[_key2];\n    }\n\n    return fns.map(function (fn) {\n      return fn.apply(null, args);\n    });\n  };\n};",
            "example": "const minMax = over(Math.min, Math.max);\nminMax(1, 2, 3, 4, 5); // [1,5]"
          },
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "d19ede265d140ecd73abb0a471042ab93591ef7b19ba92d3f8a0462661bdc99f",
          "firstSeen": "1516734137",
          "lastUpdated": "1578902833",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "overArgs",
        "title": "overArgs",
        "type": "snippet",
        "attributes": {
          "fileName": "overArgs.md",
          "text": "Creates a function that invokes the provided function with its arguments transformed.\n\nUse `Array.prototype.map()` to apply `transforms` to `args` in combination with the spread operator (`...`) to pass the transformed arguments to `fn`.\n\n",
          "codeBlocks": {
            "es6": "const overArgs = (fn, transforms) => (...args) => fn(...args.map((val, i) => transforms[i](val)));",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar overArgs = function overArgs(fn, transforms) {\n  return function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return fn.apply(void 0, _toConsumableArray(args.map(function (val, i) {\n      return transforms[i](val);\n    })));\n  };\n};",
            "example": "const square = n => n * n;\nconst double = n => n * 2;\nconst fn = overArgs((x, y) => [x, y], [square, double]);\nfn(9, 3); // [81, 6]"
          },
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "5a47cd886751568aa2ce0bd8a935d3f4730076c509666b66f7305f3660320847",
          "firstSeen": "1517144056",
          "lastUpdated": "1578902749",
          "updateCount": 9,
          "authorCount": 5
        }
      },
      {
        "id": "pad",
        "title": "pad",
        "type": "snippet",
        "attributes": {
          "fileName": "pad.md",
          "text": "Pads a string on both sides with the specified character, if it's shorter than the specified length.\n\nUse `String.prototype.padStart()` and `String.prototype.padEnd()` to pad both sides of the given string.\nOmit the third argument, `char`, to use the whitespace character as the default padding character.\n\n",
          "codeBlocks": {
            "es6": "const pad = (str, length, char = ' ') =>\n  str.padStart((str.length + length) / 2, char).padEnd(length, char);",
            "es5": "var pad = function pad(str, length) {\n  var _char = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';\n\n  return str.padStart((str.length + length) / 2, _char).padEnd(length, _char);\n};",
            "example": "pad('cat', 8); // '  cat   '\npad(String(42), 6, '0'); // '004200'\npad('foobar', 3); // 'foobar'"
          },
          "tags": [
            "string",
            "beginner"
          ]
        },
        "meta": {
          "hash": "d330cea0a63c1e50ca7f0203024ab7a7994e15cdaa04361e8a99feaf71ffb42f",
          "firstSeen": "1519465887",
          "lastUpdated": "1583481487",
          "updateCount": 5,
          "authorCount": 3
        }
      },
      {
        "id": "palindrome",
        "title": "palindrome",
        "type": "snippet",
        "attributes": {
          "fileName": "palindrome.md",
          "text": "Returns `true` if the given string is a palindrome, `false` otherwise.\n\nConvert the string to `String.prototype.toLowerCase()` and use `String.prototype.replace()` to remove non-alphanumeric characters from it.\nThen, use the spread operator (`...`) to split the string into individual characters, `Array.prototype.reverse()`, `String.prototype.join('')` and compare it to the original, unreversed string, after converting it to `String.prototype.toLowerCase()`.\n\n",
          "codeBlocks": {
            "es6": "const palindrome = str => {\n  const s = str.toLowerCase().replace(/[\\W_]/g, '');\n  return s === [...s].reverse().join('');\n};",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar palindrome = function palindrome(str) {\n  var s = str.toLowerCase().replace(/[\\W_]/g, '');\n  return s === _toConsumableArray(s).reverse().join('');\n};",
            "example": "palindrome('taco cat'); // true"
          },
          "tags": [
            "string",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "1cb29029bb6d17d5ab853b7f932e39e56639d294d732eff00d621fcffb24adb3",
          "firstSeen": "1513521691",
          "lastUpdated": "1565681352",
          "updateCount": 15,
          "authorCount": 6
        }
      },
      {
        "id": "parseCookie",
        "title": "parseCookie",
        "type": "snippet",
        "attributes": {
          "fileName": "parseCookie.md",
          "text": "Parse an HTTP Cookie header string and return an object of all cookie name-value pairs.\n\nUse `String.prototype.split(';')` to separate key-value pairs from each other.\nUse `Array.prototype.map()` and `String.prototype.split('=')` to separate keys from values in each pair.\nUse `Array.prototype.reduce()` and `decodeURIComponent()` to create an object with all key-value pairs.\n\n",
          "codeBlocks": {
            "es6": "const parseCookie = str =>\n  str\n    .split(';')\n    .map(v => v.split('='))\n    .reduce((acc, v) => {\n      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());\n      return acc;\n    }, {});",
            "es5": "var parseCookie = function parseCookie(str) {\n  return str.split(';').map(function (v) {\n    return v.split('=');\n  }).reduce(function (acc, v) {\n    acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());\n    return acc;\n  }, {});\n};",
            "example": "parseCookie('foo=bar; equation=E%3Dmc%5E2'); // { foo: 'bar', equation: 'E=mc^2' }"
          },
          "tags": [
            "utility",
            "string",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "c25aef075df93042a81bd98ebd7b77aefb91df3f08b9f1d2e7859ec0d95ad55b",
          "firstSeen": "1515845961",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "partial",
        "title": "partial",
        "type": "snippet",
        "attributes": {
          "fileName": "partial.md",
          "text": "Creates a function that invokes `fn` with `partials` prepended to the arguments it receives.\n\nUse the spread operator (`...`) to prepend `partials` to the list of arguments of `fn`.\n\n",
          "codeBlocks": {
            "es6": "const partial = (fn, ...partials) => (...args) => fn(...partials, ...args);",
            "es5": "var partial = function partial(fn) {\n  for (var _len = arguments.length, partials = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    partials[_key - 1] = arguments[_key];\n  }\n\n  return function () {\n    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      args[_key2] = arguments[_key2];\n    }\n\n    return fn.apply(void 0, partials.concat(args));\n  };\n};",
            "example": "const greet = (greeting, name) => greeting + ' ' + name + '!';\nconst greetHello = partial(greet, 'Hello');\ngreetHello('John'); // 'Hello John!'"
          },
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "fc0a07189064e1026c5a350923b1aa833523c2755eef1d66f9567a15caeebdf8",
          "firstSeen": "1516797616",
          "lastUpdated": "1565681352",
          "updateCount": 4,
          "authorCount": 2
        }
      },
      {
        "id": "partialRight",
        "title": "partialRight",
        "type": "snippet",
        "attributes": {
          "fileName": "partialRight.md",
          "text": "Creates a function that invokes `fn` with `partials` appended to the arguments it receives.\n\nUse the spread operator (`...`) to append `partials` to the list of arguments of `fn`.\n\n",
          "codeBlocks": {
            "es6": "const partialRight = (fn, ...partials) => (...args) => fn(...args, ...partials);",
            "es5": "var partialRight = function partialRight(fn) {\n  for (var _len = arguments.length, partials = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    partials[_key - 1] = arguments[_key];\n  }\n\n  return function () {\n    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      args[_key2] = arguments[_key2];\n    }\n\n    return fn.apply(void 0, args.concat(partials));\n  };\n};",
            "example": "const greet = (greeting, name) => greeting + ' ' + name + '!';\nconst greetJohn = partialRight(greet, 'John');\ngreetJohn('Hello'); // 'Hello John!'"
          },
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "4d3cd9630e00f8c723b8321f1c17d17c4c7d0b7ad025dbafda492897b8300a24",
          "firstSeen": "1516797616",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 3
        }
      },
      {
        "id": "partition",
        "title": "partition",
        "type": "snippet",
        "attributes": {
          "fileName": "partition.md",
          "text": "Groups the elements into two arrays, depending on the provided function's truthiness for each element.\n\nUse `Array.prototype.reduce()` to create an array of two arrays.\nUse `Array.prototype.push()` to add elements for which `fn` returns `true` to the first array and elements for which `fn` returns `false` to the second one.\n\n",
          "codeBlocks": {
            "es6": "const partition = (arr, fn) =>\n  arr.reduce(\n    (acc, val, i, arr) => {\n      acc[fn(val, i, arr) ? 0 : 1].push(val);\n      return acc;\n    },\n    [[], []]\n  );",
            "es5": "var partition = function partition(arr, fn) {\n  return arr.reduce(function (acc, val, i, arr) {\n    acc[fn(val, i, arr) ? 0 : 1].push(val);\n    return acc;\n  }, [[], []]);\n};",
            "example": "const users = [{ user: 'barney', age: 36, active: false }, { user: 'fred', age: 40, active: true }];\npartition(users, o => o.active); // [[{ 'user': 'fred',    'age': 40, 'active': true }],[{ 'user': 'barney',  'age': 36, 'active': false }]]"
          },
          "tags": [
            "array",
            "object",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "fdaa6d4470e5bb113a2c20008652bf0030d23fbee789ca6c3c4ce0c9be9ae700",
          "firstSeen": "1515423503",
          "lastUpdated": "1565681352",
          "updateCount": 7,
          "authorCount": 5
        }
      },
      {
        "id": "percentile",
        "title": "percentile",
        "type": "snippet",
        "attributes": {
          "fileName": "percentile.md",
          "text": "Uses the percentile formula to calculate how many numbers in the given array are less or equal to the given value.\n\nUse `Array.prototype.reduce()` to calculate how many numbers are below the value and how many are the same value and apply the percentile formula.\n\n",
          "codeBlocks": {
            "es6": "const percentile = (arr, val) =>\n  (100 * arr.reduce((acc, v) => acc + (v < val ? 1 : 0) + (v === val ? 0.5 : 0), 0)) / arr.length;",
            "es5": "var percentile = function percentile(arr, val) {\n  return 100 * arr.reduce(function (acc, v) {\n    return acc + (v < val ? 1 : 0) + (v === val ? 0.5 : 0);\n  }, 0) / arr.length;\n};",
            "example": "percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6); // 55"
          },
          "tags": [
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "6fb26c1c3157de2309d5fe08354345d9bd18d175cc29e049cc5f19363f7ed374",
          "firstSeen": "1513162216",
          "lastUpdated": "1565681352",
          "updateCount": 15,
          "authorCount": 7
        }
      },
      {
        "id": "permutations",
        "title": "permutations",
        "type": "snippet",
        "attributes": {
          "fileName": "permutations.md",
          "text": "Generates all permutations of an array's elements (contains duplicates).\n\n⚠️ **WARNING**: This function's execution time increases exponentially with each array element. Anything more than 8 to 10 entries will cause your browser to hang as it tries to solve all the different combinations.\n\nUse recursion.\nFor each element in the given array, create all the partial permutations for the rest of its elements.\nUse `Array.prototype.map()` to combine the element with each partial permutation, then `Array.prototype.reduce()` to combine all permutations in one array.\nBase cases are for array `length` equal to `2` or `1`.\n\n",
          "codeBlocks": {
            "es6": "const permutations = arr => {\n  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;\n  return arr.reduce(\n    (acc, item, i) =>\n      acc.concat(\n        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [item, ...val])\n      ),\n    []\n  );\n};",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar permutations = function permutations(arr) {\n  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;\n  return arr.reduce(function (acc, item, i) {\n    return acc.concat(permutations([].concat(_toConsumableArray(arr.slice(0, i)), _toConsumableArray(arr.slice(i + 1)))).map(function (val) {\n      return [item].concat(_toConsumableArray(val));\n    }));\n  }, []);\n};",
            "example": "permutations([1, 33, 5]); // [ [ 1, 33, 5 ], [ 1, 5, 33 ], [ 33, 1, 5 ], [ 33, 5, 1 ], [ 5, 1, 33 ], [ 5, 33, 1 ] ]"
          },
          "tags": [
            "array",
            "recursion",
            "advanced"
          ]
        },
        "meta": {
          "hash": "821e55db97be7e29b6a969cafbaf06da5ad72d5677eb9e275fb43d536052655b",
          "firstSeen": "1519048067",
          "lastUpdated": "1574366512",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "pick",
        "title": "pick",
        "type": "snippet",
        "attributes": {
          "fileName": "pick.md",
          "text": "Picks the key-value pairs corresponding to the given keys from an object.\n\nUse `Array.prototype.reduce()` to convert the filtered/picked keys back to an object with the corresponding key-value pairs if the key exists in the object.\n\n",
          "codeBlocks": {
            "es6": "const pick = (obj, arr) =>\n  arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});",
            "es5": "var pick = function pick(obj, arr) {\n  return arr.reduce(function (acc, curr) {\n    return curr in obj && (acc[curr] = obj[curr]), acc;\n  }, {});\n};",
            "example": "pick({ a: 1, b: '2', c: 3 }, ['a', 'c']); // { 'a': 1, 'c': 3 }"
          },
          "tags": [
            "object",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "d8d3bc54bdc1ba649c052658a09ddd415ad88a30409d13489b32684c150cb799",
          "firstSeen": "1513201894",
          "lastUpdated": "1565681352",
          "updateCount": 12,
          "authorCount": 7
        }
      },
      {
        "id": "pickBy",
        "title": "pickBy",
        "type": "snippet",
        "attributes": {
          "fileName": "pickBy.md",
          "text": "Creates an object composed of the properties the given function returns truthy for. The function is invoked with two arguments: (value, key).\n\nUse `Object.keys(obj)` and `Array.prototype.filter()`to remove the keys for which `fn` returns a falsy value.\nUse `Array.prototype.reduce()` to convert the filtered keys back to an object with the corresponding key-value pairs.\n\n",
          "codeBlocks": {
            "es6": "const pickBy = (obj, fn) =>\n  Object.keys(obj)\n    .filter(k => fn(obj[k], k))\n    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});",
            "es5": "var pickBy = function pickBy(obj, fn) {\n  return Object.keys(obj).filter(function (k) {\n    return fn(obj[k], k);\n  }).reduce(function (acc, key) {\n    return acc[key] = obj[key], acc;\n  }, {});\n};",
            "example": "pickBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'); // { 'a': 1, 'c': 3 }"
          },
          "tags": [
            "object",
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "19851ac642bb32dcc56042f8e4f15184b293e300bd818a07573b8e23d1a1d06e",
          "firstSeen": "1516361025",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "pipeAsyncFunctions",
        "title": "pipeAsyncFunctions",
        "type": "snippet",
        "attributes": {
          "fileName": "pipeAsyncFunctions.md",
          "text": "Performs left-to-right function composition for asynchronous functions.\n\nUse `Array.prototype.reduce()` with the spread operator (`...`) to perform left-to-right function composition using `Promise.then()`.\nThe functions can return a combination of: simple values, `Promise`'s, or they can be defined as `async` ones returning through `await`.\nAll functions must be unary.\n\n",
          "codeBlocks": {
            "es6": "const pipeAsyncFunctions = (...fns) => arg => fns.reduce((p, f) => p.then(f), Promise.resolve(arg));",
            "es5": "var pipeAsyncFunctions = function pipeAsyncFunctions() {\n  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {\n    fns[_key] = arguments[_key];\n  }\n\n  return function (arg) {\n    return fns.reduce(function (p, f) {\n      return p.then(f);\n    }, Promise.resolve(arg));\n  };\n};",
            "example": "const sum = pipeAsyncFunctions(\n  x => x + 1,\n  x => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)),\n  x => x + 3,\n  async x => (await x) + 4\n);\n(async() => {\n  console.log(await sum(5)); // 15 (after one second)\n})();"
          },
          "tags": [
            "function",
            "promise",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "0eb844801e767edcaa6a882a6dce4b5b1dadecb53a92d6ec259d36c57b6a3dd0",
          "firstSeen": "1517069864",
          "lastUpdated": "1585031872",
          "updateCount": 110,
          "authorCount": 5
        }
      },
      {
        "id": "pipeFunctions",
        "title": "pipeFunctions",
        "type": "snippet",
        "attributes": {
          "fileName": "pipeFunctions.md",
          "text": "Performs left-to-right function composition.\n\nUse `Array.prototype.reduce()` with the spread operator (`...`) to perform left-to-right function composition.\nThe first (leftmost) function can accept one or more arguments; the remaining functions must be unary.\n\n",
          "codeBlocks": {
            "es6": "const pipeFunctions = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));",
            "es5": "var pipeFunctions = function pipeFunctions() {\n  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {\n    fns[_key] = arguments[_key];\n  }\n\n  return fns.reduce(function (f, g) {\n    return function () {\n      return g(f.apply(void 0, arguments));\n    };\n  });\n};",
            "example": "const add5 = x => x + 5;\nconst multiply = (x, y) => x * y;\nconst multiplyAndAdd5 = pipeFunctions(multiply, add5);\nmultiplyAndAdd5(5, 2); // 15"
          },
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "6b85e9e5022873b5f6d6e955b383edb46e8c37615d9266fb5ee1af7939f08686",
          "firstSeen": "1514307747",
          "lastUpdated": "1578902773",
          "updateCount": 8,
          "authorCount": 6
        }
      },
      {
        "id": "pluralize",
        "title": "pluralize",
        "type": "snippet",
        "attributes": {
          "fileName": "pluralize.md",
          "text": "Returns the singular or plural form of the word based on the input number. If the first argument is an `object`, it will use a closure by returning a function that can auto-pluralize words that don't simply end in `s` if the supplied dictionary contains the word.\n\nIf `num` is either `-1` or `1`, return the singular form of the word. If `num` is any other number, return the plural form. Omit the third argument to use the default of the singular word + `s`, or supply a custom pluralized word when necessary. If the first argument is an `object`, utilize a closure by returning a function which can use the supplied dictionary to resolve the correct plural form of the word.\n\n",
          "codeBlocks": {
            "es6": "const pluralize = (val, word, plural = word + 's') => {\n  const _pluralize = (num, word, plural = word + 's') =>\n    [1, -1].includes(Number(num)) ? word : plural;\n  if (typeof val === 'object') return (num, word) => _pluralize(num, word, val[word]);\n  return _pluralize(val, word, plural);\n};",
            "es5": "function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar pluralize = function pluralize(val, word) {\n  var plural = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : word + 's';\n\n  var _pluralize = function _pluralize(num, word) {\n    var plural = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : word + 's';\n    return [1, -1].includes(Number(num)) ? word : plural;\n  };\n\n  if (_typeof(val) === 'object') return function (num, word) {\n    return _pluralize(num, word, val[word]);\n  };\n  return _pluralize(val, word, plural);\n};",
            "example": "pluralize(0, 'apple'); // 'apples'\npluralize(1, 'apple'); // 'apple'\npluralize(2, 'apple'); // 'apples'\npluralize(2, 'person', 'people'); // 'people'\n\nconst PLURALS = {\n  person: 'people',\n  radius: 'radii'\n};\nconst autoPluralize = pluralize(PLURALS);\nautoPluralize(2, 'person'); // 'people'"
          },
          "tags": [
            "string",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "3bcd52927608bd59de8e20369fbd51f39b99d77b19f66de4de8bbc80140ea009",
          "firstSeen": "1514978239",
          "lastUpdated": "1565681352",
          "updateCount": 12,
          "authorCount": 5
        }
      },
      {
        "id": "powerset",
        "title": "powerset",
        "type": "snippet",
        "attributes": {
          "fileName": "powerset.md",
          "text": "Returns the powerset of a given array of numbers.\n\nUse `Array.prototype.reduce()` combined with `Array.prototype.map()` to iterate over elements and combine into an array containing all combinations.\n\n",
          "codeBlocks": {
            "es6": "const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);",
            "es5": "var powerset = function powerset(arr) {\n  return arr.reduce(function (a, v) {\n    return a.concat(a.map(function (r) {\n      return [v].concat(r);\n    }));\n  }, [[]]);\n};",
            "example": "powerset([1, 2]); // [[], [1], [2], [2, 1]]"
          },
          "tags": [
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "b19b526319caff44e7b15c3126128701dedaa76b74cedb50761003268676b5b6",
          "firstSeen": "1512650493",
          "lastUpdated": "1565681352",
          "updateCount": 13,
          "authorCount": 7
        }
      },
      {
        "id": "prefix",
        "title": "prefix",
        "type": "snippet",
        "attributes": {
          "fileName": "prefix.md",
          "text": "Returns the prefixed version (if necessary) of a CSS property that the browser supports.\n\nUse `Array.prototype.findIndex()` on an array of vendor prefix strings to test if `document.body` has one of them defined in its `CSSStyleDeclaration` object, otherwise return `null`.\nUse `String.prototype.charAt()` and `String.prototype.toUpperCase()` to capitalize the property, which will be appended to the vendor prefix string.\n\n",
          "codeBlocks": {
            "es6": "const prefix = prop => {\n  const capitalizedProp = prop.charAt(0).toUpperCase() + prop.slice(1);\n  const prefixes = ['', 'webkit', 'moz', 'ms', 'o'];\n  const i = prefixes.findIndex(\n    prefix => typeof document.body.style[prefix ? prefix + capitalizedProp : prop] !== 'undefined'\n  );\n  return i !== -1 ? (i === 0 ? prop : prefixes[i] + capitalizedProp) : null;\n};",
            "es5": "var prefix = function prefix(prop) {\n  var capitalizedProp = prop.charAt(0).toUpperCase() + prop.slice(1);\n  var prefixes = ['', 'webkit', 'moz', 'ms', 'o'];\n  var i = prefixes.findIndex(function (prefix) {\n    return typeof document.body.style[prefix ? prefix + capitalizedProp : prop] !== 'undefined';\n  });\n  return i !== -1 ? i === 0 ? prop : prefixes[i] + capitalizedProp : null;\n};",
            "example": "prefix('appearance'); // 'appearance' on a supported browser, otherwise 'webkitAppearance', 'mozAppearance', 'msAppearance' or 'oAppearance'"
          },
          "tags": [
            "browser",
            "utility",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "6668f37f9f1158b2bdd292ad64defea6e33a0b2908ea1e494b191dcaa9f039d6",
          "firstSeen": "1520515374",
          "lastUpdated": "1565681352",
          "updateCount": 8,
          "authorCount": 5
        }
      },
      {
        "id": "prettyBytes",
        "title": "prettyBytes",
        "type": "snippet",
        "attributes": {
          "fileName": "prettyBytes.md",
          "text": "Converts a number in bytes to a human-readable string.\n\nUse an array dictionary of units to be accessed based on the exponent.\nUse `Number.toPrecision()` to truncate the number to a certain number of digits.\nReturn the prettified string by building it up, taking into account the supplied options and whether it is negative or not.\nOmit the second argument, `precision`, to use a default precision of `3` digits.\nOmit the third argument, `addSpace`, to add space between the number and unit by default.\n\n",
          "codeBlocks": {
            "es6": "const prettyBytes = (num, precision = 3, addSpace = true) => {\n  const UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];\n  if (Math.abs(num) < 1) return num + (addSpace ? ' ' : '') + UNITS[0];\n  const exponent = Math.min(Math.floor(Math.log10(num < 0 ? -num : num) / 3), UNITS.length - 1);\n  const n = Number(((num < 0 ? -num : num) / 1000 ** exponent).toPrecision(precision));\n  return (num < 0 ? '-' : '') + n + (addSpace ? ' ' : '') + UNITS[exponent];\n};",
            "es5": "var prettyBytes = function prettyBytes(num) {\n  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;\n  var addSpace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n  var UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];\n  if (Math.abs(num) < 1) return num + (addSpace ? ' ' : '') + UNITS[0];\n  var exponent = Math.min(Math.floor(Math.log10(num < 0 ? -num : num) / 3), UNITS.length - 1);\n  var n = Number(((num < 0 ? -num : num) / Math.pow(1000, exponent)).toPrecision(precision));\n  return (num < 0 ? '-' : '') + n + (addSpace ? ' ' : '') + UNITS[exponent];\n};",
            "example": "prettyBytes(1000); // \"1 KB\"\nprettyBytes(-27145424323.5821, 5); // \"-27.145 GB\"\nprettyBytes(123456789, 3, false); // \"123MB\""
          },
          "tags": [
            "utility",
            "string",
            "math",
            "advanced"
          ]
        },
        "meta": {
          "hash": "e752de4a4f2b339851e796a5289e7adde51cf7e672b8230fd97bf79cf7330758",
          "firstSeen": "1514823609",
          "lastUpdated": "1565681352",
          "updateCount": 14,
          "authorCount": 5
        }
      },
      {
        "id": "primes",
        "title": "primes",
        "type": "snippet",
        "attributes": {
          "fileName": "primes.md",
          "text": "Generates primes up to a given number, using the Sieve of Eratosthenes.\n\nGenerate an array from `2` to the given number. Use `Array.prototype.filter()` to filter out the values divisible by any number from `2` to the square root of the provided number.\n\n",
          "codeBlocks": {
            "es6": "const primes = num => {\n  let arr = Array.from({ length: num - 1 }).map((x, i) => i + 2),\n    sqroot = Math.floor(Math.sqrt(num)),\n    numsTillSqroot = Array.from({ length: sqroot - 1 }).map((x, i) => i + 2);\n  numsTillSqroot.forEach(x => (arr = arr.filter(y => y % x !== 0 || y === x)));\n  return arr;\n};",
            "es5": "var primes = function primes(num) {\n  var arr = Array.from({\n    length: num - 1\n  }).map(function (x, i) {\n    return i + 2;\n  }),\n      sqroot = Math.floor(Math.sqrt(num)),\n      numsTillSqroot = Array.from({\n    length: sqroot - 1\n  }).map(function (x, i) {\n    return i + 2;\n  });\n  numsTillSqroot.forEach(function (x) {\n    return arr = arr.filter(function (y) {\n      return y % x !== 0 || y === x;\n    });\n  });\n  return arr;\n};",
            "example": "primes(10); // [2,3,5,7]"
          },
          "tags": [
            "math",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "8c11b6647c91c22969f8c568cf248a9c3c5b08323fe9491c3fad2cbbce90a8ac",
          "firstSeen": "1513851622",
          "lastUpdated": "1565681352",
          "updateCount": 11,
          "authorCount": 6
        }
      },
      {
        "id": "promisify",
        "title": "promisify",
        "type": "snippet",
        "attributes": {
          "fileName": "promisify.md",
          "text": "Converts an asynchronous function to return a promise.\n\n*In Node 8+, you can use [`util.promisify`](https://nodejs.org/api/util.html#util_util_promisify_original)*\n\nUse currying to return a function returning a `Promise` that calls the original function.\nUse the `...rest` operator to pass in all the parameters.\n\n",
          "codeBlocks": {
            "es6": "const promisify = func => (...args) =>\n  new Promise((resolve, reject) =>\n    func(...args, (err, result) => (err ? reject(err) : resolve(result)))\n  );",
            "es5": "var promisify = function promisify(func) {\n  return function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return new Promise(function (resolve, reject) {\n      return func.apply(void 0, args.concat([function (err, result) {\n        return err ? reject(err) : resolve(result);\n      }]));\n    });\n  };\n};",
            "example": "const delay = promisify((d, cb) => setTimeout(cb, d));\ndelay(2000).then(() => console.log('Hi!')); // // Promise resolves after 2s"
          },
          "tags": [
            "function",
            "promise",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "fa80063e1d74810a551c7f01397b126868a1a7f7b306859182b033aa4a2696d4",
          "firstSeen": "1513160863",
          "lastUpdated": "1578902784",
          "updateCount": 14,
          "authorCount": 5
        }
      },
      {
        "id": "pull",
        "title": "pull",
        "type": "snippet",
        "attributes": {
          "fileName": "pull.md",
          "text": "Mutates the original array to filter out the values specified.\n\nUse `Array.prototype.filter()` and `Array.prototype.includes()` to pull out the values that are not needed.\nUse `Array.prototype.length = 0` to mutate the passed in an array by resetting it's length to zero and `Array.prototype.push()` to re-populate it with only the pulled values.\n\n",
          "codeBlocks": {
            "es6": "const pull = (arr, ...args) => {\n  let argState = Array.isArray(args[0]) ? args[0] : args;\n  let pulled = arr.filter(v => !argState.includes(v));\n  arr.length = 0;\n  pulled.forEach(v => arr.push(v));\n};",
            "es5": "var pull = function pull(arr) {\n  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    args[_key - 1] = arguments[_key];\n  }\n\n  var argState = Array.isArray(args[0]) ? args[0] : args;\n  var pulled = arr.filter(function (v) {\n    return !argState.includes(v);\n  });\n  arr.length = 0;\n  pulled.forEach(function (v) {\n    return arr.push(v);\n  });\n};",
            "example": "let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];\npull(myArray, 'a', 'c'); // myArray = [ 'b', 'b' ]"
          },
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "72fb580d39611c91cd9fa263a0f1bcb44bfd4c77815051bb2dd68e9931d21701",
          "firstSeen": "1513521691",
          "lastUpdated": "1577156460",
          "updateCount": 16,
          "authorCount": 9
        }
      },
      {
        "id": "pullAtIndex",
        "title": "pullAtIndex",
        "type": "snippet",
        "attributes": {
          "fileName": "pullAtIndex.md",
          "text": "Mutates the original array to filter out the values at the specified indexes.\n\nUse `Array.prototype.filter()` and `Array.prototype.includes()` to pull out the values that are not needed.\nUse `Array.prototype.length = 0` to mutate the passed in an array by resetting it's length to zero and `Array.prototype.push()` to re-populate it with only the pulled values.\nUse `Array.prototype.push()` to keep track of pulled values\n\n",
          "codeBlocks": {
            "es6": "const pullAtIndex = (arr, pullArr) => {\n  let removed = [];\n  let pulled = arr\n    .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))\n    .filter((v, i) => !pullArr.includes(i));\n  arr.length = 0;\n  pulled.forEach(v => arr.push(v));\n  return removed;\n};",
            "es5": "var pullAtIndex = function pullAtIndex(arr, pullArr) {\n  var removed = [];\n  var pulled = arr.map(function (v, i) {\n    return pullArr.includes(i) ? removed.push(v) : v;\n  }).filter(function (v, i) {\n    return !pullArr.includes(i);\n  });\n  arr.length = 0;\n  pulled.forEach(function (v) {\n    return arr.push(v);\n  });\n  return removed;\n};",
            "example": "let myArray = ['a', 'b', 'c', 'd'];\nlet pulled = pullAtIndex(myArray, [1, 3]); // myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]"
          },
          "tags": [
            "array",
            "advanced"
          ]
        },
        "meta": {
          "hash": "dacbce5a4a058056f0c33a7975c4bdb586037223f6713d2d27379c9cb2eb93cd",
          "firstSeen": "1513636967",
          "lastUpdated": "1565681352",
          "updateCount": 11,
          "authorCount": 7
        }
      },
      {
        "id": "pullAtValue",
        "title": "pullAtValue",
        "type": "snippet",
        "attributes": {
          "fileName": "pullAtValue.md",
          "text": "Mutates the original array to filter out the values specified. Returns the removed elements.\n\nUse `Array.prototype.filter()` and `Array.prototype.includes()` to pull out the values that are not needed.\nUse `Array.prototype.length = 0` to mutate the passed in an array by resetting it's length to zero and `Array.prototype.push()` to re-populate it with only the pulled values.\nUse `Array.prototype.push()` to keep track of pulled values\n\n",
          "codeBlocks": {
            "es6": "const pullAtValue = (arr, pullArr) => {\n  let removed = [],\n    pushToRemove = arr.forEach((v, i) => (pullArr.includes(v) ? removed.push(v) : v)),\n    mutateTo = arr.filter((v, i) => !pullArr.includes(v));\n  arr.length = 0;\n  mutateTo.forEach(v => arr.push(v));\n  return removed;\n};",
            "es5": "var pullAtValue = function pullAtValue(arr, pullArr) {\n  var removed = [],\n      pushToRemove = arr.forEach(function (v, i) {\n    return pullArr.includes(v) ? removed.push(v) : v;\n  }),\n      mutateTo = arr.filter(function (v, i) {\n    return !pullArr.includes(v);\n  });\n  arr.length = 0;\n  mutateTo.forEach(function (v) {\n    return arr.push(v);\n  });\n  return removed;\n};",
            "example": "let myArray = ['a', 'b', 'c', 'd'];\nlet pulled = pullAtValue(myArray, ['b', 'd']); // myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]"
          },
          "tags": [
            "array",
            "advanced"
          ]
        },
        "meta": {
          "hash": "760685e275cac5e2b81b035cfd4799eb8e39483d56d5a483a0a04e19bf46a29d",
          "firstSeen": "1513663589",
          "lastUpdated": "1565681352",
          "updateCount": 11,
          "authorCount": 7
        }
      },
      {
        "id": "pullBy",
        "title": "pullBy",
        "type": "snippet",
        "attributes": {
          "fileName": "pullBy.md",
          "text": "Mutates the original array to filter out the values specified, based on a given iterator function.\n\nCheck if the last argument provided in a function.\nUse `Array.prototype.map()` to apply the iterator function `fn` to all array elements.\nUse `Array.prototype.filter()` and `Array.prototype.includes()` to pull out the values that are not needed.\nUse `Array.prototype.length = 0` to mutate the passed in an array by resetting it's length to zero and `Array.prototype.push()` to re-populate it with only the pulled values.\n\n",
          "codeBlocks": {
            "es6": "const pullBy = (arr, ...args) => {\n  const length = args.length;\n  let fn = length > 1 ? args[length - 1] : undefined;\n  fn = typeof fn == 'function' ? (args.pop(), fn) : undefined;\n  let argState = (Array.isArray(args[0]) ? args[0] : args).map(val => fn(val));\n  let pulled = arr.filter((v, i) => !argState.includes(fn(v)));\n  arr.length = 0;\n  pulled.forEach(v => arr.push(v));\n};",
            "es5": "var pullBy = function pullBy(arr) {\n  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    args[_key - 1] = arguments[_key];\n  }\n\n  var length = args.length;\n  var fn = length > 1 ? args[length - 1] : undefined;\n  fn = typeof fn == 'function' ? (args.pop(), fn) : undefined;\n  var argState = (Array.isArray(args[0]) ? args[0] : args).map(function (val) {\n    return fn(val);\n  });\n  var pulled = arr.filter(function (v, i) {\n    return !argState.includes(fn(v));\n  });\n  arr.length = 0;\n  pulled.forEach(function (v) {\n    return arr.push(v);\n  });\n};",
            "example": "var myArray = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];\npullBy(myArray, [{ x: 1 }, { x: 3 }], o => o.x); // myArray = [{ x: 2 }]"
          },
          "tags": [
            "array",
            "function",
            "advanced"
          ]
        },
        "meta": {
          "hash": "5166b5b5b9812d42c50364953ceb2311cafad66eb8881f21ec7d949396e6effb",
          "firstSeen": "1516967330",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "radsToDegrees",
        "title": "radsToDegrees",
        "type": "snippet",
        "attributes": {
          "fileName": "radsToDegrees.md",
          "text": "Converts an angle from radians to degrees.\n\nUse `Math.PI` and the radian to degree formula to convert the angle from radians to degrees.\n\n",
          "codeBlocks": {
            "es6": "const radsToDegrees = rad => (rad * 180.0) / Math.PI;",
            "es5": "var radsToDegrees = function radsToDegrees(rad) {\n  return rad * 180.0 / Math.PI;\n};",
            "example": "radsToDegrees(Math.PI / 2); // 90"
          },
          "tags": [
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "1a510a46746f7ea0eafcdc6a06eec78da731788311ef42a70e3a42c2a4080f60",
          "firstSeen": "1518603890",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 3
        }
      },
      {
        "id": "randomHexColorCode",
        "title": "randomHexColorCode",
        "type": "snippet",
        "attributes": {
          "fileName": "randomHexColorCode.md",
          "text": "Generates a random hexadecimal color code.\n\nUse `Math.random` to generate a random 24-bit(6x4bits) hexadecimal number. Use bit shifting and then convert it to an hexadecimal String using `toString(16)`.\n\n",
          "codeBlocks": {
            "es6": "const randomHexColorCode = () => {\n  let n = (Math.random() * 0xfffff * 1000000).toString(16);\n  return '#' + n.slice(0, 6);\n};",
            "es5": "var randomHexColorCode = function randomHexColorCode() {\n  var n = (Math.random() * 0xfffff * 1000000).toString(16);\n  return '#' + n.slice(0, 6);\n};",
            "example": "randomHexColorCode(); // \"#e34155\""
          },
          "tags": [
            "utility",
            "random",
            "beginner"
          ]
        },
        "meta": {
          "hash": "42788f8392f5511db3641dbe2ab92b2c043b3b5209e95c386c73e5d96eaa63af",
          "firstSeen": "1514383576",
          "lastUpdated": "1565681352",
          "updateCount": 22,
          "authorCount": 10
        }
      },
      {
        "id": "randomIntArrayInRange",
        "title": "randomIntArrayInRange",
        "type": "snippet",
        "attributes": {
          "fileName": "randomIntArrayInRange.md",
          "text": "Returns an array of n random integers in the specified range.\n\nUse `Array.from()` to create an empty array of the specific length, `Math.random()` to generate a random number and map it to the desired range, using `Math.floor()` to make it an integer.\n\n",
          "codeBlocks": {
            "es6": "const randomIntArrayInRange = (min, max, n = 1) =>\n  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);",
            "es5": "var randomIntArrayInRange = function randomIntArrayInRange(min, max) {\n  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n  return Array.from({\n    length: n\n  }, function () {\n    return Math.floor(Math.random() * (max - min + 1)) + min;\n  });\n};",
            "example": "randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]"
          },
          "tags": [
            "math",
            "utility",
            "random",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "7bff02cd849d994da1229f3153cca71b4c054d6774ab732101a5f60a0a04ba3a",
          "firstSeen": "1516015518",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "randomIntegerInRange",
        "title": "randomIntegerInRange",
        "type": "snippet",
        "attributes": {
          "fileName": "randomIntegerInRange.md",
          "text": "Returns a random integer in the specified range.\n\nUse `Math.random()` to generate a random number and map it to the desired range, using `Math.floor()` to make it an integer.\n\n",
          "codeBlocks": {
            "es6": "const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;",
            "es5": "var randomIntegerInRange = function randomIntegerInRange(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n};",
            "example": "randomIntegerInRange(0, 5); // 2"
          },
          "tags": [
            "math",
            "utility",
            "random",
            "beginner"
          ]
        },
        "meta": {
          "hash": "8d8cca3d593e677c8a4ffc17e9f97b3018f800e7c014daa3462edc152fbbeec7",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "randomNumberInRange",
        "title": "randomNumberInRange",
        "type": "snippet",
        "attributes": {
          "fileName": "randomNumberInRange.md",
          "text": "Returns a random number in the specified range.\n\nUse `Math.random()` to generate a random value, map it to the desired range using multiplication.\n\n",
          "codeBlocks": {
            "es6": "const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;",
            "es5": "var randomNumberInRange = function randomNumberInRange(min, max) {\n  return Math.random() * (max - min) + min;\n};",
            "example": "randomNumberInRange(2, 10); // 6.0211363285087005"
          },
          "tags": [
            "math",
            "utility",
            "random",
            "beginner"
          ]
        },
        "meta": {
          "hash": "c86e3227e32565afb301805798da3a46756e13bff0115b880fcc3175a58d95af",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 7,
          "authorCount": 4
        }
      },
      {
        "id": "readFileLines",
        "title": "readFileLines",
        "type": "snippet",
        "attributes": {
          "fileName": "readFileLines.md",
          "text": "Returns an array of lines from the specified file.\n\nUse `readFileSync` function in `fs` node package to create a `Buffer` from a file.\nconvert buffer to string using `toString(encoding)` function.\ncreating an array from contents of file by `split`ing file content line by line (each `\\n`).\n\n",
          "codeBlocks": {
            "es6": "const fs = require('fs');\nconst readFileLines = filename =>\n  fs\n    .readFileSync(filename)\n    .toString('UTF8')\n    .split('\\n');",
            "es5": "var fs = require('fs');\n\nvar readFileLines = function readFileLines(filename) {\n  return fs.readFileSync(filename).toString('UTF8').split('\\n');\n};",
            "example": "/*\ncontents of test.txt :\n  line1\n  line2\n  line3\n  ___________________________\n*/\nlet arr = readFileLines('test.txt');\nconsole.log(arr); // ['line1', 'line2', 'line3']"
          },
          "tags": [
            "node",
            "array",
            "string",
            "beginner"
          ]
        },
        "meta": {
          "hash": "d84f789a1b8a11d0fa4daf8e5f015e9839340adfefbc210e2304de8d63649f9e",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 12,
          "authorCount": 6
        }
      },
      {
        "id": "rearg",
        "title": "rearg",
        "type": "snippet",
        "attributes": {
          "fileName": "rearg.md",
          "text": "Creates a function that invokes the provided function with its arguments arranged according to the specified indexes.\n\nUse `Array.prototype.map()` to reorder arguments based on `indexes` in combination with the spread operator (`...`) to pass the transformed arguments to `fn`.\n\n",
          "codeBlocks": {
            "es6": "const rearg = (fn, indexes) => (...args) => fn(...indexes.map(i => args[i]));",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar rearg = function rearg(fn, indexes) {\n  return function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return fn.apply(void 0, _toConsumableArray(indexes.map(function (i) {\n      return args[i];\n    })));\n  };\n};",
            "example": "var rearged = rearg(\n  function(a, b, c) {\n    return [a, b, c];\n  },\n  [2, 0, 1]\n);\nrearged('b', 'c', 'a'); // ['a', 'b', 'c']"
          },
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "cb2326c19a1292426193785d4cf2c47b5e8d83a99edb7f3415f8c4e057f6a70b",
          "firstSeen": "1517144661",
          "lastUpdated": "1578902791",
          "updateCount": 7,
          "authorCount": 4
        }
      },
      {
        "id": "recordAnimationFrames",
        "title": "recordAnimationFrames",
        "type": "snippet",
        "attributes": {
          "fileName": "recordAnimationFrames.md",
          "text": "Invokes the provided callback on each animation frame.\n\nUse recursion. \nProvided that `running` is `true`, continue invoking `window.requestAnimationFrame()` which invokes the provided callback. \nReturn an object with two methods `start` and `stop` to allow manual control of the recording. \nOmit the second argument, `autoStart`, to implicitly call `start` when the function is invoked.\n\n",
          "codeBlocks": {
            "es6": "const recordAnimationFrames = (callback, autoStart = true) => {\n  let running = true,\n    raf;\n  const stop = () => {\n    running = false;\n    cancelAnimationFrame(raf);\n  };\n  const start = () => {\n    running = true;\n    run();\n  };\n  const run = () => {\n    raf = requestAnimationFrame(() => {\n      callback();\n      if (running) run();\n    });\n  };\n  if (autoStart) start();\n  return { start, stop };\n};",
            "es5": "var recordAnimationFrames = function recordAnimationFrames(callback) {\n  var autoStart = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n  var running = true,\n      raf;\n\n  var stop = function stop() {\n    running = false;\n    cancelAnimationFrame(raf);\n  };\n\n  var start = function start() {\n    running = true;\n    run();\n  };\n\n  var run = function run() {\n    raf = requestAnimationFrame(function () {\n      callback();\n      if (running) run();\n    });\n  };\n\n  if (autoStart) start();\n  return {\n    start: start,\n    stop: stop\n  };\n};",
            "example": "const cb = () => console.log('Animation frame fired');\nconst recorder = recordAnimationFrames(cb); // logs 'Animation frame fired' on each animation frame\nrecorder.stop(); // stops logging\nrecorder.start(); // starts again\nconst recorder2 = recordAnimationFrames(cb, false); // `start` needs to be explicitly called to begin recording frames"
          },
          "tags": [
            "browser",
            "utility",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "b780a5af9c22faa9601191aff53c24d55f5e88b62ac79fd2e02517f9a724b502",
          "firstSeen": "1519798747",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "redirect",
        "title": "redirect",
        "type": "snippet",
        "attributes": {
          "fileName": "redirect.md",
          "text": "Redirects to a specified URL.\n\nUse `window.location.href` or `window.location.replace()` to redirect to `url`.\nPass a second argument to simulate a link click (`true` - default) or an HTTP redirect (`false`).\n\n",
          "codeBlocks": {
            "es6": "const redirect = (url, asLink = true) =>\n  asLink ? (window.location.href = url) : window.location.replace(url);",
            "es5": "var redirect = function redirect(url) {\n  var asLink = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n  return asLink ? window.location.href = url : window.location.replace(url);\n};",
            "example": "redirect('https://google.com');"
          },
          "tags": [
            "browser",
            "url",
            "beginner"
          ]
        },
        "meta": {
          "hash": "b5eb860bad14f54d114103321b8135e474057c63b703dfb06183a97530af402f",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "reducedFilter",
        "title": "reducedFilter",
        "type": "snippet",
        "attributes": {
          "fileName": "reducedFilter.md",
          "text": "Filter an array of objects based on a condition while also filtering out unspecified keys.\n\nUse `Array.prototype.filter()` to filter the array based on the predicate `fn` so that it returns the objects for which the condition returned a truthy value.\nOn the filtered array, use `Array.prototype.map()` to return the new object using `Array.prototype.reduce()` to filter out the keys which were not supplied as the `keys` argument.\n\n",
          "codeBlocks": {
            "es6": "const reducedFilter = (data, keys, fn) =>\n  data.filter(fn).map(el =>\n    keys.reduce((acc, key) => {\n      acc[key] = el[key];\n      return acc;\n    }, {})\n  );",
            "es5": "var reducedFilter = function reducedFilter(data, keys, fn) {\n  return data.filter(fn).map(function (el) {\n    return keys.reduce(function (acc, key) {\n      acc[key] = el[key];\n      return acc;\n    }, {});\n  });\n};",
            "example": "const data = [\n  {\n    id: 1,\n    name: 'john',\n    age: 24\n  },\n  {\n    id: 2,\n    name: 'mike',\n    age: 50\n  }\n];\n\nreducedFilter(data, ['id', 'name'], item => item.age > 24); // [{ id: 2, name: 'mike'}]"
          },
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "eb9a81be04298dc36d5b01dbbff22b9aac19d5ef1f1c752ef4c48e6a2cc0ea32",
          "firstSeen": "1513928256",
          "lastUpdated": "1565681352",
          "updateCount": 14,
          "authorCount": 6
        }
      },
      {
        "id": "reduceSuccessive",
        "title": "reduceSuccessive",
        "type": "snippet",
        "attributes": {
          "fileName": "reduceSuccessive.md",
          "text": "Applies a function against an accumulator and each element in the array (from left to right), returning an array of successively reduced values.\n\nUse `Array.prototype.reduce()` to apply the given function to the given array, storing each new result.\n\n",
          "codeBlocks": {
            "es6": "const reduceSuccessive = (arr, fn, acc) =>\n  arr.reduce((res, val, i, arr) => (res.push(fn(res.slice(-1)[0], val, i, arr)), res), [acc]);",
            "es5": "var reduceSuccessive = function reduceSuccessive(arr, fn, acc) {\n  return arr.reduce(function (res, val, i, arr) {\n    return res.push(fn(res.slice(-1)[0], val, i, arr)), res;\n  }, [acc]);\n};",
            "example": "reduceSuccessive([1, 2, 3, 4, 5, 6], (acc, val) => acc + val, 0); // [0, 1, 3, 6, 10, 15, 21]"
          },
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "276b7cc7252a0c5202520e4903d8083153240ca6fd035eb709eaf5bf6cc1eccc",
          "firstSeen": "1516804688",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "reduceWhich",
        "title": "reduceWhich",
        "type": "snippet",
        "attributes": {
          "fileName": "reduceWhich.md",
          "text": "Returns the minimum/maximum value of an array, after applying the provided function to set comparing rule.\n\nUse `Array.prototype.reduce()` in combination with the `comparator` function to get the appropriate element in the array.\nYou can omit the second parameter, `comparator`, to use the default one that returns the minimum element in the array.\n\n",
          "codeBlocks": {
            "es6": "const reduceWhich = (arr, comparator = (a, b) => a - b) =>\n  arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));",
            "es5": "var reduceWhich = function reduceWhich(arr) {\n  var comparator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (a, b) {\n    return a - b;\n  };\n  return arr.reduce(function (a, b) {\n    return comparator(a, b) >= 0 ? b : a;\n  });\n};",
            "example": "reduceWhich([1, 3, 2]); // 1\nreduceWhich([1, 3, 2], (a, b) => b - a); // 3\nreduceWhich(\n  [{ name: 'Tom', age: 12 }, { name: 'Jack', age: 18 }, { name: 'Lucy', age: 9 }],\n  (a, b) => a.age - b.age\n); // {name: \"Lucy\", age: 9}"
          },
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "4da6106d2a999166888ef3f2d1cfaa3b32666ef12bbdfddac832cd0b8c7404d4",
          "firstSeen": "1516790463",
          "lastUpdated": "1565681352",
          "updateCount": 8,
          "authorCount": 5
        }
      },
      {
        "id": "reject",
        "title": "reject",
        "type": "snippet",
        "attributes": {
          "fileName": "reject.md",
          "text": "Filters an array's values based on a predicate function, returning only values for which the predicate function returns `true`.\n\nUse `Array.prototype.filter()` in combination with the predicate function, `pred`, to return only the values for which `pred()` returns `true`.\n\n",
          "codeBlocks": {
            "es6": "const reject = (pred, array) => array.filter((...args) => !pred(...args));",
            "es5": "var reject = function reject(pred, array) {\n  return array.filter(function () {\n    return !pred.apply(void 0, arguments);\n  });\n};",
            "example": "reject(x => x % 2 === 0, [1, 2, 3, 4, 5]); // [1, 3, 5]\nreject(word => word.length > 4, ['Apple', 'Pear', 'Kiwi', 'Banana']); // ['Pear', 'Kiwi']"
          },
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "64c311bfab7115cd3df81172f9ed524a1f71e1d57100f8b003830ca41d9fd77f",
          "firstSeen": "1524788235",
          "lastUpdated": "1568054097",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "remove",
        "title": "remove",
        "type": "snippet",
        "attributes": {
          "fileName": "remove.md",
          "text": "Mutates an array by removing elements for which the given function returns `false`.\n\nUse `Array.prototype.filter()` to find array elements that return truthy values and `Array.prototype.reduce()` to remove elements using `Array.prototype.splice()`.\nThe `func` is invoked with three arguments (`value, index, array`).\n\n",
          "codeBlocks": {
            "es6": "const remove = (arr, func) =>\n  Array.isArray(arr)\n    ? arr.filter(func).reduce((acc, val) => {\n        arr.splice(arr.indexOf(val), 1);\n        return acc.concat(val);\n      }, [])\n    : [];",
            "es5": "var remove = function remove(arr, func) {\n  return Array.isArray(arr) ? arr.filter(func).reduce(function (acc, val) {\n    arr.splice(arr.indexOf(val), 1);\n    return acc.concat(val);\n  }, []) : [];\n};",
            "example": "remove([1, 2, 3, 4], n => n % 2 === 0); // [2, 4]"
          },
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "ffb9c0d1d09aeb989789286efb91cc237b89ce13f44ad9510a014f9ab150df71",
          "firstSeen": "1513521691",
          "lastUpdated": "1585031872",
          "updateCount": 107,
          "authorCount": 6
        }
      },
      {
        "id": "removeNonASCII",
        "title": "removeNonASCII",
        "type": "snippet",
        "attributes": {
          "fileName": "removeNonASCII.md",
          "text": "Removes non-printable ASCII characters.\n\nUse a regular expression to remove non-printable ASCII characters.\n\n",
          "codeBlocks": {
            "es6": "const removeNonASCII = str => str.replace(/[^\\x20-\\x7E]/g, '');",
            "es5": "var removeNonASCII = function removeNonASCII(str) {\n  return str.replace(/[^\\x20-\\x7E]/g, '');\n};",
            "example": "removeNonASCII('äÄçÇéÉêlorem-ipsumöÖÐþúÚ'); // 'lorem-ipsum'"
          },
          "tags": [
            "string",
            "regexp",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "b557e3d59a04dac19161e9d69b5c347a758ad491c2214d56437d1592614f6944",
          "firstSeen": "1516968054",
          "lastUpdated": "1565681352",
          "updateCount": 3,
          "authorCount": 2
        }
      },
      {
        "id": "renameKeys",
        "title": "renameKeys",
        "type": "snippet",
        "attributes": {
          "fileName": "renameKeys.md",
          "text": "Replaces the names of multiple object keys with the values provided.\n\nUse `Object.keys()` in combination with `Array.prototype.reduce()` and the spread operator (`...`) to get the object's keys and rename them according to `keysMap`.\n\n",
          "codeBlocks": {
            "es6": "const renameKeys = (keysMap, obj) =>\n  Object.keys(obj).reduce(\n    (acc, key) => ({\n      ...acc,\n      ...{ [keysMap[key] || key]: obj[key] }\n    }),\n    {}\n  );",
            "es5": "function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar renameKeys = function renameKeys(keysMap, obj) {\n  return Object.keys(obj).reduce(function (acc, key) {\n    return _objectSpread({}, acc, {}, _defineProperty({}, keysMap[key] || key, obj[key]));\n  }, {});\n};",
            "example": "const obj = { name: 'Bobo', job: 'Front-End Master', shoeSize: 100 };\nrenameKeys({ name: 'firstName', job: 'passion' }, obj); // { firstName: 'Bobo', passion: 'Front-End Master', shoeSize: 100 }"
          },
          "tags": [
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "d425dd9806d3ae9b3ac08404c43cf28c48084835ffbce5fbd01f04ee1d7a7e5a",
          "firstSeen": "1523380959",
          "lastUpdated": "1565681352",
          "updateCount": 7,
          "authorCount": 5
        }
      },
      {
        "id": "reverseString",
        "title": "reverseString",
        "type": "snippet",
        "attributes": {
          "fileName": "reverseString.md",
          "text": "Reverses a string.\n\nUse the spread operator (`...`) and `Array.prototype.reverse()` to reverse the order of the characters in the string.\nCombine characters to get a string using `String.prototype.join('')`.\n\n",
          "codeBlocks": {
            "es6": "const reverseString = str => [...str].reverse().join('');",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar reverseString = function reverseString(str) {\n  return _toConsumableArray(str).reverse().join('');\n};",
            "example": "reverseString('foobar'); // 'raboof'"
          },
          "tags": [
            "string",
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "f608179567e28f0c7de78fce112c5dda6cf01989f9d8499119c80bdd119b0c8d",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 15,
          "authorCount": 8
        }
      },
      {
        "id": "RGBToHex",
        "title": "RGBToHex",
        "type": "snippet",
        "attributes": {
          "fileName": "RGBToHex.md",
          "text": "Converts the values of RGB components to a color code.\n\nConvert given RGB parameters to hexadecimal string using bitwise left-shift operator (`<<`) and `toString(16)`, then `String.padStart(6,'0')` to get a 6-digit hexadecimal value.\n\n",
          "codeBlocks": {
            "es6": "const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');",
            "es5": "var RGBToHex = function RGBToHex(r, g, b) {\n  return ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');\n};",
            "example": "RGBToHex(255, 165, 1); // 'ffa501'"
          },
          "tags": [
            "utility",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "592446fabae44d631396de3441738710626c4d274eaabe3dfdb9b822ce3a5179",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 9,
          "authorCount": 5
        }
      },
      {
        "id": "round",
        "title": "round",
        "type": "snippet",
        "attributes": {
          "fileName": "round.md",
          "text": "Rounds a number to a specified amount of digits.\n\nUse `Math.round()` and template literals to round the number to the specified number of digits.\nOmit the second argument, `decimals` to round to an integer.\n\n",
          "codeBlocks": {
            "es6": "const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);",
            "es5": "var round = function round(n) {\n  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  return Number(\"\".concat(Math.round(\"\".concat(n, \"e\").concat(decimals)), \"e-\").concat(decimals));\n};",
            "example": "round(1.005, 2); // 1.01"
          },
          "tags": [
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "8e1d9b3d05e81deb58e6608a0dbf9a336deb73e17820490defc4e98b1febf8e1",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 7,
          "authorCount": 4
        }
      },
      {
        "id": "runAsync",
        "title": "runAsync",
        "type": "snippet",
        "attributes": {
          "fileName": "runAsync.md",
          "text": "Runs a function in a separate thread by using a [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers), allowing long running functions to not block the UI.\n\nCreate a new `Worker` using a `Blob` object URL, the contents of which should be the stringified version of the supplied function.\nImmediately post the return value of calling the function back.\nReturn a promise, listening for `onmessage` and `onerror` events and resolving the data posted back from the worker, or throwing an error.\n\n",
          "codeBlocks": {
            "es6": "const runAsync = fn => {\n  const worker = new Worker(\n    URL.createObjectURL(new Blob([`postMessage((${fn})());`]), {\n      type: 'application/javascript; charset=utf-8'\n    })\n  );\n  return new Promise((res, rej) => {\n    worker.onmessage = ({ data }) => {\n      res(data), worker.terminate();\n    };\n    worker.onerror = err => {\n      rej(err), worker.terminate();\n    };\n  });\n};",
            "es5": "var runAsync = function runAsync(fn) {\n  var worker = new Worker(URL.createObjectURL(new Blob([\"postMessage((\".concat(fn, \")());\")]), {\n    type: 'application/javascript; charset=utf-8'\n  }));\n  return new Promise(function (res, rej) {\n    worker.onmessage = function (_ref) {\n      var data = _ref.data;\n      res(data), worker.terminate();\n    };\n\n    worker.onerror = function (err) {\n      rej(err), worker.terminate();\n    };\n  });\n};",
            "example": "const longRunningFunction = () => {\n  let result = 0;\n  for (let i = 0; i < 1000; i++)\n    for (let j = 0; j < 700; j++) for (let k = 0; k < 300; k++) result = result + i + j + k;\n\n  return result;\n};\n/*\n  NOTE: Since the function is running in a different context, closures are not supported.\n  The function supplied to `runAsync` gets stringified, so everything becomes literal.\n  All variables and functions must be defined inside.\n*/\nrunAsync(longRunningFunction).then(console.log); // 209685000000\nrunAsync(() => 10 ** 3).then(console.log); // 1000\nlet outsideVariable = 50;\nrunAsync(() => typeof outsideVariable).then(console.log); // 'undefined'"
          },
          "tags": [
            "browser",
            "function",
            "advanced",
            "promise",
            "url"
          ]
        },
        "meta": {
          "hash": "e8e3b0389a64049fccb2dec854868d94ce03c2ff9e9fdcef9b9b5e9477a7602b",
          "firstSeen": "1514852272",
          "lastUpdated": "1565681352",
          "updateCount": 10,
          "authorCount": 4
        }
      },
      {
        "id": "runPromisesInSeries",
        "title": "runPromisesInSeries",
        "type": "snippet",
        "attributes": {
          "fileName": "runPromisesInSeries.md",
          "text": "Runs an array of promises in series.\n\nUse `Array.prototype.reduce()` to create a promise chain, where each promise returns the next promise when resolved.\n\n",
          "codeBlocks": {
            "es6": "const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());",
            "es5": "var runPromisesInSeries = function runPromisesInSeries(ps) {\n  return ps.reduce(function (p, next) {\n    return p.then(next);\n  }, Promise.resolve());\n};",
            "example": "const delay = d => new Promise(r => setTimeout(r, d));\nrunPromisesInSeries([() => delay(1000), () => delay(2000)]); // Executes each promise sequentially, taking a total of 3 seconds to complete"
          },
          "tags": [
            "function",
            "promise",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "0999832f2ad6dd8f9726494cffed82f85db80121f81b7d7ba43f184911abaf05",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 9,
          "authorCount": 5
        }
      },
      {
        "id": "sample",
        "title": "sample",
        "type": "snippet",
        "attributes": {
          "fileName": "sample.md",
          "text": "Returns a random element from an array.\n\nUse `Math.random()` to generate a random number, multiply it by `length` and round it off to the nearest whole number using `Math.floor()`.\nThis method also works with strings.\n\n",
          "codeBlocks": {
            "es6": "const sample = arr => arr[Math.floor(Math.random() * arr.length)];",
            "es5": "var sample = function sample(arr) {\n  return arr[Math.floor(Math.random() * arr.length)];\n};",
            "example": "sample([3, 7, 9, 11]); // 9"
          },
          "tags": [
            "array",
            "random",
            "beginner"
          ]
        },
        "meta": {
          "hash": "c17b6181734f37fd452c486dc37b85500aeffeb6472874cd4ff1b71bd79288b1",
          "firstSeen": "1513521691",
          "lastUpdated": "1565681352",
          "updateCount": 9,
          "authorCount": 6
        }
      },
      {
        "id": "sampleSize",
        "title": "sampleSize",
        "type": "snippet",
        "attributes": {
          "fileName": "sampleSize.md",
          "text": "Gets `n` random elements at unique keys from `array` up to the size of `array`.\n\nShuffle the array using the [Fisher-Yates algorithm](https://github.com/30-seconds/30-seconds-of-code#shuffle).\nUse `Array.prototype.slice()` to get the first `n` elements.\nOmit the second argument, `n` to get only one element at random from the array.\n\n",
          "codeBlocks": {
            "es6": "const sampleSize = ([...arr], n = 1) => {\n  let m = arr.length;\n  while (m) {\n    const i = Math.floor(Math.random() * m--);\n    [arr[m], arr[i]] = [arr[i], arr[m]];\n  }\n  return arr.slice(0, n);\n};",
            "es5": "function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar sampleSize = function sampleSize(_ref) {\n  var _ref2 = _toArray(_ref),\n      arr = _ref2.slice(0);\n\n  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n  var m = arr.length;\n\n  while (m) {\n    var i = Math.floor(Math.random() * m--);\n    var _ref3 = [arr[i], arr[m]];\n    arr[m] = _ref3[0];\n    arr[i] = _ref3[1];\n  }\n\n  return arr.slice(0, n);\n};",
            "example": "sampleSize([1, 2, 3], 2); // [3,1]\nsampleSize([1, 2, 3], 4); // [2,3,1]"
          },
          "tags": [
            "array",
            "random",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "dbca8b17910aa993f1a5746193a915a46b0825a8d69210e3d99d9fbcb484b919",
          "firstSeen": "1514721388",
          "lastUpdated": "1565681352",
          "updateCount": 8,
          "authorCount": 5
        }
      },
      {
        "id": "scrollToTop",
        "title": "scrollToTop",
        "type": "snippet",
        "attributes": {
          "fileName": "scrollToTop.md",
          "text": "Smooth-scrolls to the top of the page.\n\nGet distance from top using `document.documentElement.scrollTop` or `document.body.scrollTop`.\nScroll by a fraction of the distance from the top. Use `window.requestAnimationFrame()` to animate the scrolling.\n\n",
          "codeBlocks": {
            "es6": "const scrollToTop = () => {\n  const c = document.documentElement.scrollTop || document.body.scrollTop;\n  if (c > 0) {\n    window.requestAnimationFrame(scrollToTop);\n    window.scrollTo(0, c - c / 8);\n  }\n};",
            "es5": "var scrollToTop = function scrollToTop() {\n  var c = document.documentElement.scrollTop || document.body.scrollTop;\n\n  if (c > 0) {\n    window.requestAnimationFrame(scrollToTop);\n    window.scrollTo(0, c - c / 8);\n  }\n};",
            "example": "scrollToTop();"
          },
          "tags": [
            "browser",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "2e8250f339e49af92c10c877ae4dbc9d2889ed14bdab24f96bfda82a095d4989",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 5
        }
      },
      {
        "id": "sdbm",
        "title": "sdbm",
        "type": "snippet",
        "attributes": {
          "fileName": "sdbm.md",
          "text": "Hashes the input string into a whole number.\n\nUse `String.prototype.split('')` and `Array.prototype.reduce()` to create a hash of the input string, utilizing bit shifting.\n\n",
          "codeBlocks": {
            "es6": "const sdbm = str => {\n  let arr = str.split('');\n  return arr.reduce(\n    (hashCode, currentVal) =>\n      (hashCode = currentVal.charCodeAt(0) + (hashCode << 6) + (hashCode << 16) - hashCode),\n    0\n  );\n};",
            "es5": "var sdbm = function sdbm(str) {\n  var arr = str.split('');\n  return arr.reduce(function (hashCode, currentVal) {\n    return hashCode = currentVal.charCodeAt(0) + (hashCode << 6) + (hashCode << 16) - hashCode;\n  }, 0);\n};",
            "example": "sdbm('name'); // -3521204949"
          },
          "tags": [
            "math",
            "utility",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "58d91b4760b4af29df95cf1b073166c02660f9af3d46c950fba64b922c999ba1",
          "firstSeen": "1514387554",
          "lastUpdated": "1565681352",
          "updateCount": 10,
          "authorCount": 6
        }
      },
      {
        "id": "serializeCookie",
        "title": "serializeCookie",
        "type": "snippet",
        "attributes": {
          "fileName": "serializeCookie.md",
          "text": "Serialize a cookie name-value pair into a Set-Cookie header string.\n\nUse template literals and `encodeURIComponent()` to create the appropriate string.\n\n",
          "codeBlocks": {
            "es6": "const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;",
            "es5": "var serializeCookie = function serializeCookie(name, val) {\n  return \"\".concat(encodeURIComponent(name), \"=\").concat(encodeURIComponent(val));\n};",
            "example": "serializeCookie('foo', 'bar'); // 'foo=bar'"
          },
          "tags": [
            "utility",
            "string",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "defdaa306864196a4f561c37c4c7f74ffc159406c4538a0f7e1f3f153840eebe",
          "firstSeen": "1515845961",
          "lastUpdated": "1565681352",
          "updateCount": 3,
          "authorCount": 2
        }
      },
      {
        "id": "serializeForm",
        "title": "serializeForm",
        "type": "snippet",
        "attributes": {
          "fileName": "serializeForm.md",
          "text": "Encode a set of form elements as a query string.\n\nUse the `FormData` constructor to convert the HTML `form` to `FormData`, `Array.from()` to convert to an array, passing a map function as the second argument.\nUse `Array.prototype.map()` and `window.encodeURIComponent()` to encode each field's value.\nUse `Array.prototype.join()` with appropriate argumens to produce an appropriate query string.\n\n",
          "codeBlocks": {
            "es6": "const serializeForm = form =>\n  Array.from(new FormData(form), field => field.map(encodeURIComponent).join('=')).join('&');",
            "es5": "var serializeForm = function serializeForm(form) {\n  return Array.from(new FormData(form), function (field) {\n    return field.map(encodeURIComponent).join('=');\n  }).join('&');\n};",
            "example": "serializeForm(document.querySelector('#form')); // email=test%40email.com&name=Test%20Name"
          },
          "tags": [
            "browser",
            "string",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "8edd4093e584bbfae52b464e55a335c0af33861ee2d580d4ec005b85cd7491ee",
          "firstSeen": "1552480185",
          "lastUpdated": "1565681352",
          "updateCount": 8,
          "authorCount": 4
        }
      },
      {
        "id": "setStyle",
        "title": "setStyle",
        "type": "snippet",
        "attributes": {
          "fileName": "setStyle.md",
          "text": "Sets the value of a CSS rule for the specified HTML element.\n\nUse `element.style` to set the value of the CSS rule for the specified element to `val`.\n\n",
          "codeBlocks": {
            "es6": "const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);",
            "es5": "var setStyle = function setStyle(el, ruleName, val) {\n  return el.style[ruleName] = val;\n};",
            "example": "setStyle(document.querySelector('p'), 'font-size', '20px');\n// The first <p> element on the page will have a font-size of 20px"
          },
          "tags": [
            "browser",
            "beginner"
          ]
        },
        "meta": {
          "hash": "3af57aa88e446dcfa4f1a7a8a434b541445e91cb366f0c56184c5e09f7c961cb",
          "firstSeen": "1514498897",
          "lastUpdated": "1583481460",
          "updateCount": 6,
          "authorCount": 3
        }
      },
      {
        "id": "shallowClone",
        "title": "shallowClone",
        "type": "snippet",
        "attributes": {
          "fileName": "shallowClone.md",
          "text": "Creates a shallow clone of an object.\n\nUse `Object.assign()` and an empty object (`{}`) to create a shallow clone of the original.\n\n",
          "codeBlocks": {
            "es6": "const shallowClone = obj => Object.assign({}, obj);",
            "es5": "var shallowClone = function shallowClone(obj) {\n  return Object.assign({}, obj);\n};",
            "example": "const a = { x: true, y: 1 };\nconst b = shallowClone(a); // a !== b"
          },
          "tags": [
            "object",
            "beginner"
          ]
        },
        "meta": {
          "hash": "4a19fb8e2ef816c5dfa373d3f0cbcb223c34fe8fe2861f09f139edb18bfb2978",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 7,
          "authorCount": 4
        }
      },
      {
        "id": "shank",
        "title": "shank",
        "type": "snippet",
        "attributes": {
          "fileName": "shank.md",
          "text": "Has the same functionality as [`Array.prototype.splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), but returning a new array instead of mutating the original array.\n\nUse `Array.prototype.slice()` and `Array.prototype.concat()` to get a new array with the new contents after removing existing elements and/or adding new elements.\nOmit the second argument, `index`, to start at `0`.\nOmit the third argument, `delCount`, to remove `0` elements.\nOmit the fourth argument, `elements`, in order to not add any new elements.\n\n",
          "codeBlocks": {
            "es6": "const shank = (arr, index = 0, delCount = 0, ...elements) =>\n  arr\n    .slice(0, index)\n    .concat(elements)\n    .concat(arr.slice(index + delCount));",
            "es5": "var shank = function shank(arr) {\n  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  var delCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n\n  for (var _len = arguments.length, elements = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {\n    elements[_key - 3] = arguments[_key];\n  }\n\n  return arr.slice(0, index).concat(elements).concat(arr.slice(index + delCount));\n};",
            "example": "const names = ['alpha', 'bravo', 'charlie'];\nconst namesAndDelta = shank(names, 1, 0, 'delta'); // [ 'alpha', 'delta', 'bravo', 'charlie' ]\nconst namesNoBravo = shank(names, 1, 1); // [ 'alpha', 'charlie' ]\nconsole.log(names); // ['alpha', 'bravo', 'charlie']"
          },
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "65d097127b81a7fd3bfbaf79e804ce09114ef4ad08e27d64fa98891f4d68cb6b",
          "firstSeen": "1538002530",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 6
        }
      },
      {
        "id": "show",
        "title": "show",
        "type": "snippet",
        "attributes": {
          "fileName": "show.md",
          "text": "Shows all the elements specified.\n\nUse the spread operator (`...`) and `Array.prototype.forEach()` to clear the `display` property for each element specified.\n\n",
          "codeBlocks": {
            "es6": "const show = (...el) => [...el].forEach(e => (e.style.display = ''));",
            "es5": "var show = function show() {\n  for (var _len = arguments.length, el = new Array(_len), _key = 0; _key < _len; _key++) {\n    el[_key] = arguments[_key];\n  }\n\n  return [].concat(el).forEach(function (e) {\n    return e.style.display = '';\n  });\n};",
            "example": "show(...document.querySelectorAll('img')); // Shows all <img> elements on the page"
          },
          "tags": [
            "browser",
            "css",
            "beginner"
          ]
        },
        "meta": {
          "hash": "541411afec987a2cf11bfa2d3d6a4f5f3e1b4f3e7363dd57281715bbf433cc40",
          "firstSeen": "1514496801",
          "lastUpdated": "1565681352",
          "updateCount": 7,
          "authorCount": 4
        }
      },
      {
        "id": "shuffle",
        "title": "shuffle",
        "type": "snippet",
        "attributes": {
          "fileName": "shuffle.md",
          "text": "Randomizes the order of the values of an array, returning a new array.\n\nUse the [Fisher-Yates algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#Fisher_and_Yates'_original_method) to reorder the elements of the array.\n\n",
          "codeBlocks": {
            "es6": "const shuffle = ([...arr]) => {\n  let m = arr.length;\n  while (m) {\n    const i = Math.floor(Math.random() * m--);\n    [arr[m], arr[i]] = [arr[i], arr[m]];\n  }\n  return arr;\n};",
            "es5": "function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar shuffle = function shuffle(_ref) {\n  var _ref2 = _toArray(_ref),\n      arr = _ref2.slice(0);\n\n  var m = arr.length;\n\n  while (m) {\n    var i = Math.floor(Math.random() * m--);\n    var _ref3 = [arr[i], arr[m]];\n    arr[m] = _ref3[0];\n    arr[i] = _ref3[1];\n  }\n\n  return arr;\n};",
            "example": "const foo = [1, 2, 3];\nshuffle(foo); // [2, 3, 1], foo = [1, 2, 3]"
          },
          "tags": [
            "array",
            "random",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "d01a5226fd9306ed492f80e84b22e6c7cc7950500f9cabbeac699103c83e5643",
          "firstSeen": "1513526151",
          "lastUpdated": "1577049705",
          "updateCount": 16,
          "authorCount": 7
        }
      },
      {
        "id": "similarity",
        "title": "similarity",
        "type": "snippet",
        "attributes": {
          "fileName": "similarity.md",
          "text": "Returns an array of elements that appear in both arrays.\n\nUse `Array.prototype.filter()` to remove values that are not part of `values`, determined using `Array.prototype.includes()`.\n\n",
          "codeBlocks": {
            "es6": "const similarity = (arr, values) => arr.filter(v => values.includes(v));",
            "es5": "var similarity = function similarity(arr, values) {\n  return arr.filter(function (v) {\n    return values.includes(v);\n  });\n};",
            "example": "similarity([1, 2, 3], [1, 2, 4]); // [1, 2]"
          },
          "tags": [
            "array",
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "9a8cf04ac3d6a593ef6e5169338c96feaec5b19a799256cbc26543f1fac8234a",
          "firstSeen": "1513521691",
          "lastUpdated": "1565681352",
          "updateCount": 10,
          "authorCount": 5
        }
      },
      {
        "id": "size",
        "title": "size",
        "type": "snippet",
        "attributes": {
          "fileName": "size.md",
          "text": "Gets the size of an array, object or string.\n\nGet type of `val` (`array`, `object` or `string`). \nUse `length` property for arrays.\nUse `length` or `size` value if available or number of keys for objects.\nUse `size` of a [`Blob` object](https://developer.mozilla.org/en-US/docs/Web/API/Blob) created from `val` for strings.\nSplit strings into array of characters with `split('')` and return its length.\n\n",
          "codeBlocks": {
            "es6": "const size = val =>\n  Array.isArray(val)\n    ? val.length\n    : val && typeof val === 'object'\n      ? val.size || val.length || Object.keys(val).length\n      : typeof val === 'string'\n        ? new Blob([val]).size\n        : 0;",
            "es5": "function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar size = function size(val) {\n  return Array.isArray(val) ? val.length : val && _typeof(val) === 'object' ? val.size || val.length || Object.keys(val).length : typeof val === 'string' ? new Blob([val]).size : 0;\n};",
            "example": "size([1, 2, 3, 4, 5]); // 5\nsize('size'); // 4\nsize({ one: 1, two: 2, three: 3 }); // 3"
          },
          "tags": [
            "object",
            "array",
            "string",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "24b93b68a59b49f245590930fed6fb82e286ce09f90e292466cde63c1784c347",
          "firstSeen": "1514645161",
          "lastUpdated": "1585031872",
          "updateCount": 49,
          "authorCount": 5
        }
      },
      {
        "id": "sleep",
        "title": "sleep",
        "type": "snippet",
        "attributes": {
          "fileName": "sleep.md",
          "text": "Delays the execution of an asynchronous function.\n\nDelay executing part of an `async` function, by putting it to sleep, returning a `Promise`.\n\n",
          "codeBlocks": {
            "es6": "const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));",
            "es5": "var sleep = function sleep(ms) {\n  return new Promise(function (resolve) {\n    return setTimeout(resolve, ms);\n  });\n};",
            "example": "async function sleepyWork() {\n  console.log(\"I'm going to sleep for 1 second.\");\n  await sleep(1000);\n  console.log('I woke up after 1 second.');\n}"
          },
          "tags": [
            "function",
            "promise",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "07393d7a0e2d433b57abea9792aef5165990bf0ba81eb4e45a01cabceffdaed6",
          "firstSeen": "1513197656",
          "lastUpdated": "1565681352",
          "updateCount": 8,
          "authorCount": 5
        }
      },
      {
        "id": "smoothScroll",
        "title": "smoothScroll",
        "type": "snippet",
        "attributes": {
          "fileName": "smoothScroll.md",
          "text": "Smoothly scrolls the element on which it's called into the visible area of the browser window.\n\nUse `.scrollIntoView` method to scroll the element. \nPass `{ behavior: 'smooth' }` to `.scrollIntoView` so it scrolls smoothly.\n\n",
          "codeBlocks": {
            "es6": "const smoothScroll = element =>\n  document.querySelector(element).scrollIntoView({\n    behavior: 'smooth'\n  });",
            "es5": "var smoothScroll = function smoothScroll(element) {\n  return document.querySelector(element).scrollIntoView({\n    behavior: 'smooth'\n  });\n};",
            "example": "smoothScroll('#fooBar'); // scrolls smoothly to the element with the id fooBar\nsmoothScroll('.fooBar'); // scrolls smoothly to the first element with a class of fooBar"
          },
          "tags": [
            "browser",
            "css",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "e7d3354d7f5e16a3e7f26ebde9fa93a58c806f2eb7767e9f4269136a408dacb3",
          "firstSeen": "1520007771",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "sortCharactersInString",
        "title": "sortCharactersInString",
        "type": "snippet",
        "attributes": {
          "fileName": "sortCharactersInString.md",
          "text": "Alphabetically sorts the characters in a string.\n\nUse the spread operator (`...`), `Array.prototype.sort()` and  `String.localeCompare()` to sort the characters in `str`, recombine using `String.prototype.join('')`.\n\n",
          "codeBlocks": {
            "es6": "const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar sortCharactersInString = function sortCharactersInString(str) {\n  return _toConsumableArray(str).sort(function (a, b) {\n    return a.localeCompare(b);\n  }).join('');\n};",
            "example": "sortCharactersInString('cabbage'); // 'aabbceg'"
          },
          "tags": [
            "string",
            "beginner"
          ]
        },
        "meta": {
          "hash": "5aaca9e4e7703fd856345cd3cd124f7db9d3d9b33fc8971ded6e0692f1a5df79",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 9,
          "authorCount": 6
        }
      },
      {
        "id": "sortedIndex",
        "title": "sortedIndex",
        "type": "snippet",
        "attributes": {
          "fileName": "sortedIndex.md",
          "text": "Returns the lowest index at which value should be inserted into array in order to maintain its sort order.\n\nCheck if the array is sorted in descending order (loosely).\nUse `Array.prototype.findIndex()` to find the appropriate index where the element should be inserted.\n\n",
          "codeBlocks": {
            "es6": "const sortedIndex = (arr, n) => {\n  const isDescending = arr[0] > arr[arr.length - 1];\n  const index = arr.findIndex(el => (isDescending ? n >= el : n <= el));\n  return index === -1 ? arr.length : index;\n};",
            "es5": "var sortedIndex = function sortedIndex(arr, n) {\n  var isDescending = arr[0] > arr[arr.length - 1];\n  var index = arr.findIndex(function (el) {\n    return isDescending ? n >= el : n <= el;\n  });\n  return index === -1 ? arr.length : index;\n};",
            "example": "sortedIndex([5, 3, 2, 1], 4); // 1\nsortedIndex([30, 50], 40); // 1"
          },
          "tags": [
            "array",
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "86849a05d8395934e7f83d52d2c70a9b9d7982db85cfc264ffb4410c03496f79",
          "firstSeen": "1514731146",
          "lastUpdated": "1565681352",
          "updateCount": 10,
          "authorCount": 5
        }
      },
      {
        "id": "sortedIndexBy",
        "title": "sortedIndexBy",
        "type": "snippet",
        "attributes": {
          "fileName": "sortedIndexBy.md",
          "text": "Returns the lowest index at which value should be inserted into array in order to maintain its sort order, based on a provided iterator function.\n\nCheck if the array is sorted in descending order (loosely).\nUse `Array.prototype.findIndex()` to find the appropriate index where the element should be inserted, based on the iterator function `fn`.\n\n",
          "codeBlocks": {
            "es6": "const sortedIndexBy = (arr, n, fn) => {\n  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);\n  const val = fn(n);\n  const index = arr.findIndex(el => (isDescending ? val >= fn(el) : val <= fn(el)));\n  return index === -1 ? arr.length : index;\n};",
            "es5": "var sortedIndexBy = function sortedIndexBy(arr, n, fn) {\n  var isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);\n  var val = fn(n);\n  var index = arr.findIndex(function (el) {\n    return isDescending ? val >= fn(el) : val <= fn(el);\n  });\n  return index === -1 ? arr.length : index;\n};",
            "example": "sortedIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x); // 0"
          },
          "tags": [
            "array",
            "math",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "1b3e4c56abe1a9a8d3fa17798c1efc281f0294be4e2877e8e8c323dfcb4ca591",
          "firstSeen": "1516966749",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "sortedLastIndex",
        "title": "sortedLastIndex",
        "type": "snippet",
        "attributes": {
          "fileName": "sortedLastIndex.md",
          "text": "Returns the highest index at which value should be inserted into array in order to maintain its sort order.\n\nCheck if the array is sorted in descending order (loosely).\nUse `Array.prototype.reverse()` and `Array.prototype.findIndex()` to find the appropriate last index where the element should be inserted.\n\n",
          "codeBlocks": {
            "es6": "const sortedLastIndex = (arr, n) => {\n  const isDescending = arr[0] > arr[arr.length - 1];\n  const index = arr.reverse().findIndex(el => (isDescending ? n <= el : n >= el));\n  return index === -1 ? 0 : arr.length - index;\n};",
            "es5": "var sortedLastIndex = function sortedLastIndex(arr, n) {\n  var isDescending = arr[0] > arr[arr.length - 1];\n  var index = arr.reverse().findIndex(function (el) {\n    return isDescending ? n <= el : n >= el;\n  });\n  return index === -1 ? 0 : arr.length - index;\n};",
            "example": "sortedLastIndex([10, 20, 30, 30, 40], 30); // 4"
          },
          "tags": [
            "array",
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "82ced04bfc70d243245fad7f3ebf9ef5945bd102d74e77102f917687b3e53d22",
          "firstSeen": "1516792607",
          "lastUpdated": "1565681352",
          "updateCount": 9,
          "authorCount": 5
        }
      },
      {
        "id": "sortedLastIndexBy",
        "title": "sortedLastIndexBy",
        "type": "snippet",
        "attributes": {
          "fileName": "sortedLastIndexBy.md",
          "text": "Returns the highest index at which value should be inserted into array in order to maintain its sort order, based on a provided iterator function.\n\nCheck if the array is sorted in descending order (loosely).\nUse `Array.prototype.map()` to apply the iterator function to all elements of the array.\nUse `Array.prototype.reverse()` and `Array.prototype.findIndex()` to find the appropriate last index where the element should be inserted, based on the provided iterator function.\n\n",
          "codeBlocks": {
            "es6": "const sortedLastIndexBy = (arr, n, fn) => {\n  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);\n  const val = fn(n);\n  const index = arr\n    .map(fn)\n    .reverse()\n    .findIndex(el => (isDescending ? val <= el : val >= el));\n  return index === -1 ? 0 : arr.length - index;\n};",
            "es5": "var sortedLastIndexBy = function sortedLastIndexBy(arr, n, fn) {\n  var isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);\n  var val = fn(n);\n  var index = arr.map(fn).reverse().findIndex(function (el) {\n    return isDescending ? val <= el : val >= el;\n  });\n  return index === -1 ? 0 : arr.length - index;\n};",
            "example": "sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x); // 1"
          },
          "tags": [
            "array",
            "math",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "517118a841e0a4f3feb0e73d2d7012fc48c9cb655129002b399a2c5c3fd7a3f6",
          "firstSeen": "1516966749",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "splitLines",
        "title": "splitLines",
        "type": "snippet",
        "attributes": {
          "fileName": "splitLines.md",
          "text": "Splits a multiline string into an array of lines.\n\nUse `String.prototype.split()` and a regular expression to match line breaks and create an array.\n\n",
          "codeBlocks": {
            "es6": "const splitLines = str => str.split(/\\r?\\n/);",
            "es5": "var splitLines = function splitLines(str) {\n  return str.split(/\\r?\\n/);\n};",
            "example": "splitLines('This\\nis a\\nmultiline\\nstring.\\n'); // ['This', 'is a', 'multiline', 'string.' , '']"
          },
          "tags": [
            "string",
            "beginner"
          ]
        },
        "meta": {
          "hash": "0c21e5e8c3549051085ada0effdfa8f3e19a266778967ef46697c7b9b78b5227",
          "firstSeen": "1514545138",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "spreadOver",
        "title": "spreadOver",
        "type": "snippet",
        "attributes": {
          "fileName": "spreadOver.md",
          "text": "Takes a variadic function and returns a closure that accepts an array of arguments to map to the inputs of the function.\n\nUse closures and the spread operator (`...`) to map the array of arguments to the inputs of the function.\n\n",
          "codeBlocks": {
            "es6": "const spreadOver = fn => argsArr => fn(...argsArr);",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar spreadOver = function spreadOver(fn) {\n  return function (argsArr) {\n    return fn.apply(void 0, _toConsumableArray(argsArr));\n  };\n};",
            "example": "const arrayMax = spreadOver(Math.max);\r\narrayMax([1, 2, 3]); // 3"
          },
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "b94cbdec64a2897b1a193d5fd32eeb59b315ea590d609a50b7fe50012b1d4ce4",
          "firstSeen": "1513910037",
          "lastUpdated": "1578903585",
          "updateCount": 14,
          "authorCount": 7
        }
      },
      {
        "id": "stableSort",
        "title": "stableSort",
        "type": "snippet",
        "attributes": {
          "fileName": "stableSort.md",
          "text": "Performs stable sorting of an array, preserving the initial indexes of items when their values are the same.\nDoes not mutate the original array, but returns a new array instead.\n\nUse `Array.prototype.map()` to pair each element of the input array with its corresponding index.\nUse `Array.prototype.sort()` and a `compare` function to sort the list, preserving their initial order if the items compared are equal.\nUse `Array.prototype.map()` to convert back to the initial array items.\n\n",
          "codeBlocks": {
            "es6": "const stableSort = (arr, compare) =>\n  arr\n    .map((item, index) => ({ item, index }))\n    .sort((a, b) => compare(a.item, b.item) || a.index - b.index)\n    .map(({ item }) => item);",
            "es5": "var stableSort = function stableSort(arr, compare) {\n  return arr.map(function (item, index) {\n    return {\n      item: item,\n      index: index\n    };\n  }).sort(function (a, b) {\n    return compare(a.item, b.item) || a.index - b.index;\n  }).map(function (_ref) {\n    var item = _ref.item;\n    return item;\n  });\n};",
            "example": "const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nconst stable = stableSort(arr, () => 0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
          },
          "tags": [
            "array",
            "sort",
            "advanced",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "4f0ace59a000b0898eab157f0d5232fb8e0a19d854baf8496442a2928c15f87d",
          "firstSeen": "1517934829",
          "lastUpdated": "1565681352",
          "updateCount": 9,
          "authorCount": 4
        }
      },
      {
        "id": "standardDeviation",
        "title": "standardDeviation",
        "type": "snippet",
        "attributes": {
          "fileName": "standardDeviation.md",
          "text": "Returns the standard deviation of an array of numbers.\n\nUse `Array.prototype.reduce()` to calculate the mean, variance and the sum of the variance of the values, the variance of the values, then\ndetermine the standard deviation.\nYou can omit the second argument to get the sample standard deviation or set it to `true` to get the population standard deviation.\n\n",
          "codeBlocks": {
            "es6": "const standardDeviation = (arr, usePopulation = false) => {\n  const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;\n  return Math.sqrt(\n    arr.reduce((acc, val) => acc.concat((val - mean) ** 2), []).reduce((acc, val) => acc + val, 0) /\n      (arr.length - (usePopulation ? 0 : 1))\n  );\n};",
            "es5": "var standardDeviation = function standardDeviation(arr) {\n  var usePopulation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  var mean = arr.reduce(function (acc, val) {\n    return acc + val;\n  }, 0) / arr.length;\n  return Math.sqrt(arr.reduce(function (acc, val) {\n    return acc.concat(Math.pow(val - mean, 2));\n  }, []).reduce(function (acc, val) {\n    return acc + val;\n  }, 0) / (arr.length - (usePopulation ? 0 : 1)));\n};",
            "example": "standardDeviation([10, 2, 38, 23, 38, 23, 21]); // 13.284434142114991 (sample)\nstandardDeviation([10, 2, 38, 23, 38, 23, 21], true); // 12.29899614287479 (population)"
          },
          "tags": [
            "math",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "f0fe3943b1ac2f0935a3a5a3b7004f88f168faebe9bb4088f4dc441a06975cbb",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 8,
          "authorCount": 6
        }
      },
      {
        "id": "stringPermutations",
        "title": "stringPermutations",
        "type": "snippet",
        "attributes": {
          "fileName": "stringPermutations.md",
          "text": "Generates all permutations of a string (contains duplicates).\n\n⚠️ **WARNING**: This function's execution time increases exponentially with each character. Anything more than 8 to 10 characters will cause your browser to hang as it tries to solve all the different combinations.\n\nUse recursion.\nFor each letter in the given string, create all the partial permutations for the rest of its letters.\nUse `Array.prototype.map()` to combine the letter with each partial permutation, then `Array.prototype.reduce()` to combine all permutations in one array.\nBase cases are for string `length` equal to `2` or `1`.\n\n",
          "codeBlocks": {
            "es6": "const stringPermutations = str => {\n  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];\n  return str\n    .split('')\n    .reduce(\n      (acc, letter, i) =>\n        acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),\n      []\n    );\n};",
            "es5": "var stringPermutations = function stringPermutations(str) {\n  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];\n  return str.split('').reduce(function (acc, letter, i) {\n    return acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(function (val) {\n      return letter + val;\n    }));\n  }, []);\n};",
            "example": "stringPermutations('abc'); // ['abc','acb','bac','bca','cab','cba']"
          },
          "tags": [
            "string",
            "recursion",
            "advanced"
          ]
        },
        "meta": {
          "hash": "1a4c3427df70f2633c0d1a2c47b9ef7452664e1b6ea58525ce4067e1ea6a51a8",
          "firstSeen": "1519048067",
          "lastUpdated": "1574366533",
          "updateCount": 5,
          "authorCount": 3
        }
      },
      {
        "id": "stripHTMLTags",
        "title": "stripHTMLTags",
        "type": "snippet",
        "attributes": {
          "fileName": "stripHTMLTags.md",
          "text": "Removes HTML/XML tags from string.\n\nUse a regular expression to remove HTML/XML tags from a string.\n\n",
          "codeBlocks": {
            "es6": "const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');",
            "es5": "var stripHTMLTags = function stripHTMLTags(str) {\n  return str.replace(/<[^>]*>/g, '');\n};",
            "example": "stripHTMLTags('<p><em>lorem</em> <strong>ipsum</strong></p>'); // 'lorem ipsum'"
          },
          "tags": [
            "string",
            "utility",
            "regexp",
            "beginner"
          ]
        },
        "meta": {
          "hash": "a33dbe87821f5017cf4238c69d9effcfe993698f055fec5e915f4fff68c01e34",
          "firstSeen": "1516969049",
          "lastUpdated": "1565681352",
          "updateCount": 3,
          "authorCount": 2
        }
      },
      {
        "id": "sum",
        "title": "sum",
        "type": "snippet",
        "attributes": {
          "fileName": "sum.md",
          "text": "Returns the sum of two or more numbers/arrays.\n\nUse `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`.\n\n",
          "codeBlocks": {
            "es6": "const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);",
            "es5": "var sum = function sum() {\n  for (var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++) {\n    arr[_key] = arguments[_key];\n  }\n\n  return [].concat(arr).reduce(function (acc, val) {\n    return acc + val;\n  }, 0);\n};",
            "example": "sum(1, 2, 3, 4); // 10\nsum(...[1, 2, 3, 4]); // 10"
          },
          "tags": [
            "math",
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "a3ba3ba8f7bb293e1560c3140da2b50ac739ac4e5fb10c857f837b6dc54b029b",
          "firstSeen": "1514546989",
          "lastUpdated": "1565681352",
          "updateCount": 7,
          "authorCount": 5
        }
      },
      {
        "id": "sumBy",
        "title": "sumBy",
        "type": "snippet",
        "attributes": {
          "fileName": "sumBy.md",
          "text": "Returns the sum of an array, after mapping each element to a value using the provided function.\n\nUse `Array.prototype.map()` to map each element to the value returned by `fn`, `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`.\n\n",
          "codeBlocks": {
            "es6": "const sumBy = (arr, fn) =>\n  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0);",
            "es5": "var sumBy = function sumBy(arr, fn) {\n  return arr.map(typeof fn === 'function' ? fn : function (val) {\n    return val[fn];\n  }).reduce(function (acc, val) {\n    return acc + val;\n  }, 0);\n};",
            "example": "sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 20\nsumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 20"
          },
          "tags": [
            "math",
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "3e92614cb14073c51991cb6978e6a7e5871a00f1f24a886046f441fdc4633175",
          "firstSeen": "1515666354",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "sumPower",
        "title": "sumPower",
        "type": "snippet",
        "attributes": {
          "fileName": "sumPower.md",
          "text": "Returns the sum of the powers of all the numbers from `start` to `end` (both inclusive).\n\nUse `Array.prototype.fill()` to create an array of all the numbers in the target range, `Array.prototype.map()` and the exponent operator (`**`) to raise them to `power` and `Array.prototype.reduce()` to add them together.\nOmit the second argument, `power`, to use a default power of `2`.\nOmit the third argument, `start`, to use a default starting value of `1`.\n\n",
          "codeBlocks": {
            "es6": "const sumPower = (end, power = 2, start = 1) =>\n  Array(end + 1 - start)\n    .fill(0)\n    .map((x, i) => (i + start) ** power)\n    .reduce((a, b) => a + b, 0);",
            "es5": "var sumPower = function sumPower(end) {\n  var power = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;\n  var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n  return Array(end + 1 - start).fill(0).map(function (x, i) {\n    return Math.pow(i + start, power);\n  }).reduce(function (a, b) {\n    return a + b;\n  }, 0);\n};",
            "example": "sumPower(10); // 385\nsumPower(10, 3); // 3025\nsumPower(10, 3, 5); // 2925"
          },
          "tags": [
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "5ba3bb9fbfb3e5b61195b6e72e5b8f9f3e86b1a9b478e52f2429c4399718d118",
          "firstSeen": "1514814565",
          "lastUpdated": "1565681352",
          "updateCount": 10,
          "authorCount": 5
        }
      },
      {
        "id": "symmetricDifference",
        "title": "symmetricDifference",
        "type": "snippet",
        "attributes": {
          "fileName": "symmetricDifference.md",
          "text": "Returns the symmetric difference between two arrays, without filtering out duplicate values.\n\nCreate a `Set` from each array, then use `Array.prototype.filter()` on each of them to only keep values not contained in the other.\n\n",
          "codeBlocks": {
            "es6": "const symmetricDifference = (a, b) => {\n  const sA = new Set(a),\n    sB = new Set(b);\n  return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];\n};",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar symmetricDifference = function symmetricDifference(a, b) {\n  var sA = new Set(a),\n      sB = new Set(b);\n  return [].concat(_toConsumableArray(a.filter(function (x) {\n    return !sB.has(x);\n  })), _toConsumableArray(b.filter(function (x) {\n    return !sA.has(x);\n  })));\n};",
            "example": "symmetricDifference([1, 2, 3], [1, 2, 4]); // [3, 4]\nsymmetricDifference([1, 2, 2], [1, 3, 1]); // [2, 2, 3]"
          },
          "tags": [
            "array",
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "7f920d42aa9408822b33d9790b0664f7f289989a363f21e9a1a87cb88510fb54",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 12,
          "authorCount": 6
        }
      },
      {
        "id": "symmetricDifferenceBy",
        "title": "symmetricDifferenceBy",
        "type": "snippet",
        "attributes": {
          "fileName": "symmetricDifferenceBy.md",
          "text": "Returns the symmetric difference between two arrays, after applying the provided function to each array element of both.\n\nCreate a `Set` by applying `fn` to each array's elements, then use `Array.prototype.filter()` on each of them to only keep values not contained in the other.\n\n",
          "codeBlocks": {
            "es6": "const symmetricDifferenceBy = (a, b, fn) => {\n  const sA = new Set(a.map(v => fn(v))),\n    sB = new Set(b.map(v => fn(v)));\n  return [...a.filter(x => !sB.has(fn(x))), ...b.filter(x => !sA.has(fn(x)))];\n};",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar symmetricDifferenceBy = function symmetricDifferenceBy(a, b, fn) {\n  var sA = new Set(a.map(function (v) {\n    return fn(v);\n  })),\n      sB = new Set(b.map(function (v) {\n    return fn(v);\n  }));\n  return [].concat(_toConsumableArray(a.filter(function (x) {\n    return !sB.has(fn(x));\n  })), _toConsumableArray(b.filter(function (x) {\n    return !sA.has(fn(x));\n  })));\n};",
            "example": "symmetricDifferenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [ 1.2, 3.4 ]"
          },
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "f31a5937c12873095d7e167410eab03efdffb4bf6eb0561881a66111ddc750a7",
          "firstSeen": "1516787942",
          "lastUpdated": "1565681352",
          "updateCount": 4,
          "authorCount": 3
        }
      },
      {
        "id": "symmetricDifferenceWith",
        "title": "symmetricDifferenceWith",
        "type": "snippet",
        "attributes": {
          "fileName": "symmetricDifferenceWith.md",
          "text": "Returns the symmetric difference between two arrays, using a provided function as a comparator.\n\nUse `Array.prototype.filter()` and `Array.prototype.findIndex()` to find the appropriate values.\n\n",
          "codeBlocks": {
            "es6": "const symmetricDifferenceWith = (arr, val, comp) => [\n  ...arr.filter(a => val.findIndex(b => comp(a, b)) === -1),\n  ...val.filter(a => arr.findIndex(b => comp(a, b)) === -1)\n];",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar symmetricDifferenceWith = function symmetricDifferenceWith(arr, val, comp) {\n  return [].concat(_toConsumableArray(arr.filter(function (a) {\n    return val.findIndex(function (b) {\n      return comp(a, b);\n    }) === -1;\n  })), _toConsumableArray(val.filter(function (a) {\n    return arr.findIndex(function (b) {\n      return comp(a, b);\n    }) === -1;\n  })));\n};",
            "example": "symmetricDifferenceWith(\n  [1, 1.2, 1.5, 3, 0],\n  [1.9, 3, 0, 3.9],\n  (a, b) => Math.round(a) === Math.round(b)\n); // [1, 1.2, 3.9]"
          },
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "2d54a197d2cd14bddc7daf88f64413ad8c3b4a42fdee91a0a5cf45d71688d8cf",
          "firstSeen": "1516787942",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "tail",
        "title": "tail",
        "type": "snippet",
        "attributes": {
          "fileName": "tail.md",
          "text": "Returns all elements in an array except for the first one.\n\nReturn `Array.prototype.slice(1)` if the array's `length` is more than `1`, otherwise, return the whole array.\n\n",
          "codeBlocks": {
            "es6": "const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);",
            "es5": "var tail = function tail(arr) {\n  return arr.length > 1 ? arr.slice(1) : arr;\n};",
            "example": "tail([1, 2, 3]); // [2,3]\ntail([1]); // [1]"
          },
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "200a7d0c4ccca7ad8f80c9489ed461d46d5ad0ca75184d18c3414437fd99bad2",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 9,
          "authorCount": 6
        }
      },
      {
        "id": "take",
        "title": "take",
        "type": "snippet",
        "attributes": {
          "fileName": "take.md",
          "text": "Returns an array with n elements removed from the beginning.\n\nUse `Array.prototype.slice()` to create a slice of the array with `n` elements taken from the beginning.\n\n",
          "codeBlocks": {
            "es6": "const take = (arr, n = 1) => arr.slice(0, n);",
            "es5": "var take = function take(arr) {\n  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n  return arr.slice(0, n);\n};",
            "example": "take([1, 2, 3], 5); // [1, 2, 3]\ntake([1, 2, 3], 0); // []"
          },
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "670d66a804a498c3826e65fe1cb8917832f72ff3a41cdee9f3c29f357aadb7fb",
          "firstSeen": "1513244114",
          "lastUpdated": "1565681352",
          "updateCount": 12,
          "authorCount": 7
        }
      },
      {
        "id": "takeRight",
        "title": "takeRight",
        "type": "snippet",
        "attributes": {
          "fileName": "takeRight.md",
          "text": "Returns an array with n elements removed from the end.\n\nUse `Array.prototype.slice()` to create a slice of the array with `n` elements taken from the end.\n\n",
          "codeBlocks": {
            "es6": "const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);",
            "es5": "var takeRight = function takeRight(arr) {\n  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n  return arr.slice(arr.length - n, arr.length);\n};",
            "example": "takeRight([1, 2, 3], 2); // [ 2, 3 ]\ntakeRight([1, 2, 3]); // [3]"
          },
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "4c83bc03b1146f6a9f49f12855a4118dd32367b6b6d46e64e94959404411e823",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 9,
          "authorCount": 6
        }
      },
      {
        "id": "takeRightWhile",
        "title": "takeRightWhile",
        "type": "snippet",
        "attributes": {
          "fileName": "takeRightWhile.md",
          "text": "Removes elements from the end of an array until the passed function returns `true`. Returns the removed elements.\n\nLoop through the array, using a `Array.prototype.reduceRight()` and accumulating elements while the function returns falsy value.\n\n",
          "codeBlocks": {
            "es6": "const takeRightWhile = (arr, func) =>\n  arr.reduceRight((acc, el) => (func(el) ? acc : [el, ...acc]), []);",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar takeRightWhile = function takeRightWhile(arr, func) {\n  return arr.reduceRight(function (acc, el) {\n    return func(el) ? acc : [el].concat(_toConsumableArray(acc));\n  }, []);\n};",
            "example": "takeRightWhile([1, 2, 3, 4], n => n < 3); // [3, 4]"
          },
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "ee5e3e006f3b756090a5f3f02cd0d2ea06da048dd0550277c25719b83ceeeaf6",
          "firstSeen": "1516964131",
          "lastUpdated": "1565681352",
          "updateCount": 8,
          "authorCount": 4
        }
      },
      {
        "id": "takeWhile",
        "title": "takeWhile",
        "type": "snippet",
        "attributes": {
          "fileName": "takeWhile.md",
          "text": "Removes elements in an array until the passed function returns `true`. Returns the removed elements.\n\nLoop through the array, using a `for...of` loop over `Array.prototype.entries()` until the returned value from the function is `true`.\nReturn the removed elements, using `Array.prototype.slice()`.\n\n",
          "codeBlocks": {
            "es6": "const takeWhile = (arr, func) => {\n  for (const [i, val] of arr.entries()) if (func(val)) return arr.slice(0, i);\n  return arr;\n};",
            "es5": "function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar takeWhile = function takeWhile(arr, func) {\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = arr.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var _step$value = _slicedToArray(_step.value, 2),\n          i = _step$value[0],\n          val = _step$value[1];\n\n      if (func(val)) return arr.slice(0, i);\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  return arr;\n};",
            "example": "takeWhile([1, 2, 3, 4], n => n >= 3); // [1, 2]"
          },
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "1131730353754c8cdb3f3c2d81eb750fbfc99020ff7266987253e857b9aee6c5",
          "firstSeen": "1516964131",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 5
        }
      },
      {
        "id": "throttle",
        "title": "throttle",
        "type": "snippet",
        "attributes": {
          "fileName": "throttle.md",
          "text": "Creates a throttled function that only invokes the provided function at most once per every `wait` milliseconds\n\nUse `setTimeout()` and `clearTimeout()` to throttle the given method, `fn`.\nUse `Function.prototype.apply()` to apply the `this` context to the function and provide the necessary `arguments`.\nUse `Date.now()` to keep track of the last time the throttled function was invoked.\nOmit the second argument, `wait`, to set the timeout at a default of 0 ms.\n\n",
          "codeBlocks": {
            "es6": "const throttle = (fn, wait) => {\n  let inThrottle, lastFn, lastTime;\n  return function() {\n    const context = this,\n      args = arguments;\n    if (!inThrottle) {\n      fn.apply(context, args);\n      lastTime = Date.now();\n      inThrottle = true;\n    } else {\n      clearTimeout(lastFn);\n      lastFn = setTimeout(function() {\n        if (Date.now() - lastTime >= wait) {\n          fn.apply(context, args);\n          lastTime = Date.now();\n        }\n      }, Math.max(wait - (Date.now() - lastTime), 0));\n    }\n  };\n};",
            "es5": "var throttle = function throttle(fn, wait) {\n  var inThrottle, lastFn, lastTime;\n  return function () {\n    var context = this,\n        args = arguments;\n\n    if (!inThrottle) {\n      fn.apply(context, args);\n      lastTime = Date.now();\n      inThrottle = true;\n    } else {\n      clearTimeout(lastFn);\n      lastFn = setTimeout(function () {\n        if (Date.now() - lastTime >= wait) {\n          fn.apply(context, args);\n          lastTime = Date.now();\n        }\n      }, Math.max(wait - (Date.now() - lastTime), 0));\n    }\n  };\n};",
            "example": "window.addEventListener(\n  'resize',\n  throttle(function(evt) {\n    console.log(window.innerWidth);\n    console.log(window.innerHeight);\n  }, 250)\n); // Will log the window dimensions at most every 250ms"
          },
          "tags": [
            "function",
            "advanced"
          ]
        },
        "meta": {
          "hash": "0ff3f88fae6144b972137023cf882931df405a09413c1c48bdcb7ed78c1977aa",
          "firstSeen": "1517145781",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "times",
        "title": "times",
        "type": "snippet",
        "attributes": {
          "fileName": "times.md",
          "text": "Iterates over a callback `n` times\n\nUse `Function.call()` to call `fn` `n` times or until it returns `false`.\nOmit the last argument, `context`, to use an `undefined` object (or the global object in non-strict mode).\n\n",
          "codeBlocks": {
            "es6": "const times = (n, fn, context = undefined) => {\n  let i = 0;\n  while (fn.call(context, i) !== false && ++i < n) {}\n};",
            "es5": "var times = function times(n, fn) {\n  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;\n  var i = 0;\n\n  while (fn.call(context, i) !== false && ++i < n) {}\n};",
            "example": "var output = '';\ntimes(5, i => (output += i));\nconsole.log(output); // 01234"
          },
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "f4f19054ff681f91e6d45f0b08ce964192b96eac5a6807df85877457cb4b366c",
          "firstSeen": "1516794649",
          "lastUpdated": "1565681352",
          "updateCount": 4,
          "authorCount": 3
        }
      },
      {
        "id": "timeTaken",
        "title": "timeTaken",
        "type": "snippet",
        "attributes": {
          "fileName": "timeTaken.md",
          "text": "Measures the time taken by a function to execute.\n\nUse `console.time()` and `console.timeEnd()` to measure the difference between the start and end times to determine how long the callback took to execute.\n\n",
          "codeBlocks": {
            "es6": "const timeTaken = callback => {\n  console.time('timeTaken');\n  const r = callback();\n  console.timeEnd('timeTaken');\n  return r;\n};",
            "es5": "var timeTaken = function timeTaken(callback) {\n  console.time('timeTaken');\n  var r = callback();\n  console.timeEnd('timeTaken');\n  return r;\n};",
            "example": "timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms"
          },
          "tags": [
            "utility",
            "beginner"
          ]
        },
        "meta": {
          "hash": "26246364ba1e8e3f52a51c8e1f329af721b05a5d307ed88bf31ccd2620c0deee",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 9,
          "authorCount": 4
        }
      },
      {
        "id": "toCamelCase",
        "title": "toCamelCase",
        "type": "snippet",
        "attributes": {
          "fileName": "toCamelCase.md",
          "text": "Converts a string to camelcase.\n\nBreak the string into words and combine them capitalizing the first letter of each word, using a regexp.\n\n",
          "codeBlocks": {
            "es6": "const toCamelCase = str => {\n  let s =\n    str &&\n    str\n      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)\n      .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())\n      .join('');\n  return s.slice(0, 1).toLowerCase() + s.slice(1);\n};",
            "es5": "var toCamelCase = function toCamelCase(str) {\n  var s = str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (x) {\n    return x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase();\n  }).join('');\n  return s.slice(0, 1).toLowerCase() + s.slice(1);\n};",
            "example": "toCamelCase('some_database_field_name'); // 'someDatabaseFieldName'\ntoCamelCase('Some label that needs to be camelized'); // 'someLabelThatNeedsToBeCamelized'\ntoCamelCase('some-javascript-property'); // 'someJavascriptProperty'\ntoCamelCase('some-mixed_string with spaces_underscores-and-hyphens'); // 'someMixedStringWithSpacesUnderscoresAndHyphens'"
          },
          "tags": [
            "string",
            "regexp",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "5a38a98081a22fe5a56d272038bc1f7dadab097b1cf4c16c34286e9d51c26331",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 12,
          "authorCount": 6
        }
      },
      {
        "id": "toCurrency",
        "title": "toCurrency",
        "type": "snippet",
        "attributes": {
          "fileName": "toCurrency.md",
          "text": "Take a number and return specified currency formatting.\n\nUse `Intl.NumberFormat` to enable country / currency sensitive formatting.\n\n",
          "codeBlocks": {
            "es6": "const toCurrency = (n, curr, LanguageFormat = undefined) =>\n  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);",
            "es5": "var toCurrency = function toCurrency(n, curr) {\n  var LanguageFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;\n  return Intl.NumberFormat(LanguageFormat, {\n    style: 'currency',\n    currency: curr\n  }).format(n);\n};",
            "example": "toCurrency(123456.789, 'EUR'); // €123,456.79  | currency: Euro | currencyLangFormat: Local\ntoCurrency(123456.789, 'USD', 'en-us'); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)\ntoCurrency(123456.789, 'USD', 'fa'); // ۱۲۳٬۴۵۶٫۷۹ ؜$ | currency: US Dollar | currencyLangFormat: Farsi\ntoCurrency(322342436423.2435, 'JPY'); // ¥322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local\ntoCurrency(322342436423.2435, 'JPY', 'fi'); // 322 342 436 423 ¥ | currency: Japanese Yen | currencyLangFormat: Finnish"
          },
          "tags": [
            "utility",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "2f817f7dc3ca24a50bfaa1a59dec3ec6d8ee3392ac2d7f3ecae3a93a9c96f09c",
          "firstSeen": "1517066148",
          "lastUpdated": "1565681352",
          "updateCount": 7,
          "authorCount": 4
        }
      },
      {
        "id": "toDecimalMark",
        "title": "toDecimalMark",
        "type": "snippet",
        "attributes": {
          "fileName": "toDecimalMark.md",
          "text": "Converts a number to a decimal mark formatted string.\n\nUse `Number.prototype.toLocaleString()` to convert the numbre to decimal mark format.\n\n",
          "codeBlocks": {
            "es6": "const toDecimalMark = num => num.toLocaleString('en-US');",
            "es5": "var toDecimalMark = function toDecimalMark(num) {\n  return num.toLocaleString('en-US');\n};",
            "example": "toDecimalMark(12305030388.9087); // \"12,305,030,388.909\""
          },
          "tags": [
            "utility",
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "22c2a4835f37334d3b5fa5f83bbaaddc642feb71c1868f514928c656e250abe6",
          "firstSeen": "1513866591",
          "lastUpdated": "1583481487",
          "updateCount": 16,
          "authorCount": 7
        }
      },
      {
        "id": "toggleClass",
        "title": "toggleClass",
        "type": "snippet",
        "attributes": {
          "fileName": "toggleClass.md",
          "text": "Toggles a class for an HTML element.\n\nUse `element.classList.toggle()` to toggle the specified class for the element.\n\n",
          "codeBlocks": {
            "es6": "const toggleClass = (el, className) => el.classList.toggle(className);",
            "es5": "var toggleClass = function toggleClass(el, className) {\n  return el.classList.toggle(className);\n};",
            "example": "toggleClass(document.querySelector('p.special'), 'special');\n// The paragraph will not have the 'special' class anymore"
          },
          "tags": [
            "browser",
            "beginner"
          ]
        },
        "meta": {
          "hash": "34abfb52d68cbd59aa575d0a1620312798264526dfa006f3bf52883e92e41105",
          "firstSeen": "1514497593",
          "lastUpdated": "1583481460",
          "updateCount": 6,
          "authorCount": 3
        }
      },
      {
        "id": "toHash",
        "title": "toHash",
        "type": "snippet",
        "attributes": {
          "fileName": "toHash.md",
          "text": "Reduces a given Array-like into a value hash (keyed data store).\n\nGiven an Iterable or Array-like structure, call `Array.prototype.reduce.call()` on the provided object to step over it and return an Object, keyed by the reference value.\n\n",
          "codeBlocks": {
            "es6": "const toHash = (object, key) =>\n  Array.prototype.reduce.call(\n    object,\n    (acc, data, index) => ((acc[!key ? index : data[key]] = data), acc),\n    {}\n  );",
            "es5": "var toHash = function toHash(object, key) {\n  return Array.prototype.reduce.call(object, function (acc, data, index) {\n    return acc[!key ? index : data[key]] = data, acc;\n  }, {});\n};",
            "example": "toHash([4, 3, 2, 1]); // { 0: 4, 1: 3, 2: 2, 3: 1 }\ntoHash([{ a: 'label' }], 'a'); // { label: { a: 'label' } }\n// A more in depth example:\nlet users = [{ id: 1, first: 'Jon' }, { id: 2, first: 'Joe' }, { id: 3, first: 'Moe' }];\nlet managers = [{ manager: 1, employees: [2, 3] }];\n// We use function here because we want a bindable reference, but a closure referencing the hash would work, too.\nmanagers.forEach(\n  manager =>\n    (manager.employees = manager.employees.map(function(id) {\n      return this[id];\n    }, toHash(users, 'id')))\n);\nmanagers; // [ { manager:1, employees: [ { id: 2, first: \"Joe\" }, { id: 3, first: \"Moe\" } ] } ]"
          },
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "4d9656f6d96e3cdd49ab1df4389315e004c5a134fe22ad1036befb6168ee1e54",
          "firstSeen": "1527722044",
          "lastUpdated": "1565681352",
          "updateCount": 11,
          "authorCount": 6
        }
      },
      {
        "id": "toKebabCase",
        "title": "toKebabCase",
        "type": "snippet",
        "attributes": {
          "fileName": "toKebabCase.md",
          "text": "Converts a string to kebab case.\n\nBreak the string into words and combine them adding `-` as a separator, using a regexp.\n\n",
          "codeBlocks": {
            "es6": "const toKebabCase = str =>\n  str &&\n  str\n    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)\n    .map(x => x.toLowerCase())\n    .join('-');",
            "es5": "var toKebabCase = function toKebabCase(str) {\n  return str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (x) {\n    return x.toLowerCase();\n  }).join('-');\n};",
            "example": "toKebabCase('camelCase'); // 'camel-case'\ntoKebabCase('some text'); // 'some-text'\ntoKebabCase('some-mixed_string With spaces_underscores-and-hyphens'); // 'some-mixed-string-with-spaces-underscores-and-hyphens'\ntoKebabCase('AllThe-small Things'); // \"all-the-small-things\"\ntoKebabCase('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'); // \"i-am-listening-to-fm-while-loading-different-url-on-my-browser-and-also-editing-xml-and-html\""
          },
          "tags": [
            "string",
            "regexp",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "0981cb8583c317d56894840bb31fd83e820b56fd7eef18d96db1edcb0a222860",
          "firstSeen": "1514034916",
          "lastUpdated": "1565681352",
          "updateCount": 15,
          "authorCount": 8
        }
      },
      {
        "id": "tomorrow",
        "title": "tomorrow",
        "type": "snippet",
        "attributes": {
          "fileName": "tomorrow.md",
          "text": "Results in a string representation of tomorrow's date.\n\nUse `new Date()` to get the current date, increment by one using `Date.getDate()` and set the value to the result using `Date.setDate()`. \nUse `Date.prototype.toISOString()` to return a string in `yyyy-mm-dd` format.\n\n",
          "codeBlocks": {
            "es6": "const tomorrow = () => {\n  let t = new Date();\n  t.setDate(t.getDate() + 1);\n  return t.toISOString().split('T')[0];\n};",
            "es5": "var tomorrow = function tomorrow() {\n  var t = new Date();\n  t.setDate(t.getDate() + 1);\n  return t.toISOString().split('T')[0];\n};",
            "example": "tomorrow(); // 2018-10-19 (if current date is 2018-10-18)"
          },
          "tags": [
            "date",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "79e76e143e7f595b4d2c5be657629728cd5fb2cc4248706dedb7e0c8e9512d3c",
          "firstSeen": "1514307384",
          "lastUpdated": "1565681352",
          "updateCount": 20,
          "authorCount": 11
        }
      },
      {
        "id": "toOrdinalSuffix",
        "title": "toOrdinalSuffix",
        "type": "snippet",
        "attributes": {
          "fileName": "toOrdinalSuffix.md",
          "text": "Adds an ordinal suffix to a number.\n\nUse the modulo operator (`%`) to find values of single and tens digits.\nFind which ordinal pattern digits match.\nIf digit is found in teens pattern, use teens ordinal.\n\n",
          "codeBlocks": {
            "es6": "const toOrdinalSuffix = num => {\n  const int = parseInt(num),\n    digits = [int % 10, int % 100],\n    ordinals = ['st', 'nd', 'rd', 'th'],\n    oPattern = [1, 2, 3, 4],\n    tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];\n  return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])\n    ? int + ordinals[digits[0] - 1]\n    : int + ordinals[3];\n};",
            "es5": "var toOrdinalSuffix = function toOrdinalSuffix(num) {\n  var _int = parseInt(num),\n      digits = [_int % 10, _int % 100],\n      ordinals = ['st', 'nd', 'rd', 'th'],\n      oPattern = [1, 2, 3, 4],\n      tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];\n\n  return oPattern.includes(digits[0]) && !tPattern.includes(digits[1]) ? _int + ordinals[digits[0] - 1] : _int + ordinals[3];\n};",
            "example": "toOrdinalSuffix('123'); // \"123rd\""
          },
          "tags": [
            "utility",
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "0ebd3351685fd96bf678c2baa38fabc9aa18bd6a3fa6674ea0bae9663424ea5f",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "toPairs",
        "title": "toPairs",
        "type": "snippet",
        "attributes": {
          "fileName": "toPairs.md",
          "text": "Creates an array of key-value pair arrays from an object or other iterable (object, array, string, set etc.).\n\nCheck if `Symbol.iterator` is defined and, if so, use `Array.prototype.entries()` to get an iterator for the given iterable, `Array.from()` to convert the result to an array of key-value pair arrays.\nIf `Symbol.iterator` is not defined for `obj`, use `Object.entries()` instead.\n\n",
          "codeBlocks": {
            "es6": "const toPairs = obj =>\n  obj[Symbol.iterator] instanceof Function && obj.entries instanceof Function\n    ? Array.from(obj.entries())\n    : Object.entries(obj);",
            "es5": "var toPairs = function toPairs(obj) {\n  return obj[Symbol.iterator] instanceof Function && obj.entries instanceof Function ? Array.from(obj.entries()) : Object.entries(obj);\n};",
            "example": "toPairs({ a: 1, b: 2 }); // [ ['a', 1], ['b', 2] ]\ntoPairs([2, 4, 8]); // [ [0, 2], [1, 4], [2, 8] ]\ntoPairs('shy'); // [ ['0', 's'], ['1', 'h'], ['2', 'y'] ]\ntoPairs(new Set(['a', 'b', 'c', 'a'])); // [ ['a', 'a'], ['b', 'b'], ['c', 'c'] ]"
          },
          "tags": [
            "object",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "3c8cbc59bcf4fb5f5c56d068596a8d059a1a487916beee4accb9a0ab29cd8bcb",
          "firstSeen": "1584968843",
          "lastUpdated": "1584968843",
          "updateCount": 2,
          "authorCount": 2
        }
      },
      {
        "id": "toSafeInteger",
        "title": "toSafeInteger",
        "type": "snippet",
        "attributes": {
          "fileName": "toSafeInteger.md",
          "text": "Converts a value to a safe integer.\n\nUse `Math.max()` and `Math.min()` to find the closest safe value.\nUse `Math.round()` to convert to an integer.\n\n",
          "codeBlocks": {
            "es6": "const toSafeInteger = num =>\n  Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));",
            "es5": "var toSafeInteger = function toSafeInteger(num) {\n  return Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));\n};",
            "example": "toSafeInteger('3.2'); // 3\ntoSafeInteger(Infinity); // 9007199254740991"
          },
          "tags": [
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "b893c5ab5d118c46dc7b673413adbeddd967093c36225eb31cf446c95de0ff39",
          "firstSeen": "1515424366",
          "lastUpdated": "1583442609",
          "updateCount": 5,
          "authorCount": 3
        }
      },
      {
        "id": "toSnakeCase",
        "title": "toSnakeCase",
        "type": "snippet",
        "attributes": {
          "fileName": "toSnakeCase.md",
          "text": "Converts a string to snake case.\n\nBreak the string into words and combine them adding `_` as a separator, using a regexp.\n\n",
          "codeBlocks": {
            "es6": "const toSnakeCase = str =>\n  str &&\n  str\n    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)\n    .map(x => x.toLowerCase())\n    .join('_');",
            "es5": "var toSnakeCase = function toSnakeCase(str) {\n  return str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (x) {\n    return x.toLowerCase();\n  }).join('_');\n};",
            "example": "toSnakeCase('camelCase'); // 'camel_case'\ntoSnakeCase('some text'); // 'some_text'\ntoSnakeCase('some-mixed_string With spaces_underscores-and-hyphens'); // 'some_mixed_string_with_spaces_underscores_and_hyphens'\ntoSnakeCase('AllThe-small Things'); // \"all_the_small_things\"\ntoSnakeCase('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'); // \"i_am_listening_to_fm_while_loading_different_url_on_my_browser_and_also_editing_some_xml_and_html\""
          },
          "tags": [
            "string",
            "regexp",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "7826ca6c690989e80204f4730b00c6eaedf316f4972a57b6c3f73473d02d0d91",
          "firstSeen": "1513959202",
          "lastUpdated": "1584315812",
          "updateCount": 20,
          "authorCount": 9
        }
      },
      {
        "id": "toTitleCase",
        "title": "toTitleCase",
        "type": "snippet",
        "attributes": {
          "fileName": "toTitleCase.md",
          "text": "Converts a string to title case.\n\nBreak the string into words, using a regexp, and combine them capitalizing the first letter of each word and adding a whitespace between them.\n\n",
          "codeBlocks": {
            "es6": "const toTitleCase = str =>\n  str\n    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)\n    .map(x => x.charAt(0).toUpperCase() + x.slice(1))\n    .join(' ');",
            "es5": "var toTitleCase = function toTitleCase(str) {\n  return str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (x) {\n    return x.charAt(0).toUpperCase() + x.slice(1);\n  }).join(' ');\n};",
            "example": "toTitleCase('some_database_field_name'); // 'Some Database Field Name'\ntoTitleCase('Some label that needs to be title-cased'); // 'Some Label That Needs To Be Title Cased'\ntoTitleCase('some-package-name'); // 'Some Package Name'\ntoTitleCase('some-mixed_string with spaces_underscores-and-hyphens'); // 'Some Mixed String With Spaces Underscores And Hyphens'"
          },
          "tags": [
            "string",
            "regepx",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "9ec5b60fcad2b633dfdbb342bf3fad8f3b63d2e06da09781c73481283f0cab1b",
          "firstSeen": "1539913774",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 5
        }
      },
      {
        "id": "transform",
        "title": "transform",
        "type": "snippet",
        "attributes": {
          "fileName": "transform.md",
          "text": "Applies a function against an accumulator and each key in the object (from left to right).\n\nUse `Object.keys(obj)` to iterate over each key in the object, `Array.prototype.reduce()` to call the apply the specified function against the given accumulator.\n\n",
          "codeBlocks": {
            "es6": "const transform = (obj, fn, acc) => Object.keys(obj).reduce((a, k) => fn(a, obj[k], k, obj), acc);",
            "es5": "var transform = function transform(obj, fn, acc) {\n  return Object.keys(obj).reduce(function (a, k) {\n    return fn(a, obj[k], k, obj);\n  }, acc);\n};",
            "example": "transform(\n  { a: 1, b: 2, c: 1 },\n  (r, v, k) => {\n    (r[v] || (r[v] = [])).push(k);\n    return r;\n  },\n  {}\n); // { '1': ['a', 'c'], '2': ['b'] }"
          },
          "tags": [
            "object",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "2186f42e4ed6452b13986c08af41e7e98b6fb6528ca1994e2ee843d0453ef695",
          "firstSeen": "1515758149",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "triggerEvent",
        "title": "triggerEvent",
        "type": "snippet",
        "attributes": {
          "fileName": "triggerEvent.md",
          "text": "Triggers a specific event on a given element, optionally passing custom data.\n\nUse `new CustomEvent()` to create an event from the specified `eventType` and details.\nUse `el.dispatchEvent()` to trigger the newly created event on the given element.\nOmit the third argument, `detail`, if you do not want to pass custom data to the triggered event.\n\n",
          "codeBlocks": {
            "es6": "const triggerEvent = (el, eventType, detail) =>\n  el.dispatchEvent(new CustomEvent(eventType, { detail }));",
            "es5": "var triggerEvent = function triggerEvent(el, eventType, detail) {\n  return el.dispatchEvent(new CustomEvent(eventType, {\n    detail: detail\n  }));\n};",
            "example": "triggerEvent(document.getElementById('myId'), 'click');\ntriggerEvent(document.getElementById('myId'), 'click', { username: 'bob' });"
          },
          "tags": [
            "browser",
            "event",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "61673214d218ca447cac81b95b6766264b66fd141462fbd5e3814e4c6cf7ded2",
          "firstSeen": "1529431078",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "truncateString",
        "title": "truncateString",
        "type": "snippet",
        "attributes": {
          "fileName": "truncateString.md",
          "text": "Truncates a string up to a specified length.\n\nDetermine if the string's `length` is greater than `num`.\nReturn the string truncated to the desired length, with `'...'` appended to the end or the original string.\n\n",
          "codeBlocks": {
            "es6": "const truncateString = (str, num) =>\n  str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;",
            "es5": "var truncateString = function truncateString(str, num) {\n  return str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;\n};",
            "example": "truncateString('boomerang', 7); // 'boom...'"
          },
          "tags": [
            "string",
            "beginner"
          ]
        },
        "meta": {
          "hash": "6f9ea1ee77d87c9b78e7b069bf27cf8bafd269023f3f7b675a65791446d7d2d3",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 8,
          "authorCount": 4
        }
      },
      {
        "id": "truthCheckCollection",
        "title": "truthCheckCollection",
        "type": "snippet",
        "attributes": {
          "fileName": "truthCheckCollection.md",
          "text": "Checks if the predicate (second argument) is truthy on all elements of a collection (first argument).\n\nUse `Array.prototype.every()` to check if each passed object has the specified property and if it returns a truthy value.\n\n",
          "codeBlocks": {
            "es6": "const truthCheckCollection = (collection, pre) => collection.every(obj => obj[pre]);",
            "es5": "var truthCheckCollection = function truthCheckCollection(collection, pre) {\n  return collection.every(function (obj) {\n    return obj[pre];\n  });\n};",
            "example": "truthCheckCollection([{ user: 'Tinky-Winky', sex: 'male' }, { user: 'Dipsy', sex: 'male' }], 'sex'); // true"
          },
          "tags": [
            "object",
            "logic",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "7e4b72845da78eb0665de207c9d94c2f728d945be47d6dd13a14b53101e7a6a4",
          "firstSeen": "1513595121",
          "lastUpdated": "1565681352",
          "updateCount": 9,
          "authorCount": 6
        }
      },
      {
        "id": "unary",
        "title": "unary",
        "type": "snippet",
        "attributes": {
          "fileName": "unary.md",
          "text": "Creates a function that accepts up to one argument, ignoring any additional arguments.\n\nCall the provided function, `fn`, with just the first argument given.\n\n",
          "codeBlocks": {
            "es6": "const unary = fn => val => fn(val);",
            "es5": "var unary = function unary(fn) {\n  return function (val) {\n    return fn(val);\n  };\n};",
            "example": "['6', '8', '10'].map(unary(parseInt)); // [6, 8, 10]"
          },
          "tags": [
            "function",
            "beginner"
          ]
        },
        "meta": {
          "hash": "f0eda594028997293121b8afca105772ce002f9fe0d5642ffd41c3167fd6b4f1",
          "firstSeen": "1516792952",
          "lastUpdated": "1578902854",
          "updateCount": 4,
          "authorCount": 2
        }
      },
      {
        "id": "uncurry",
        "title": "uncurry",
        "type": "snippet",
        "attributes": {
          "fileName": "uncurry.md",
          "text": "Uncurries a function up to depth `n`.\n\nReturn a variadic function.\nUse `Array.prototype.reduce()` on the provided arguments to call each subsequent curry level of the function.\nIf the `length` of the provided arguments is less than `n` throw an error.\nOtherwise, call `fn` with the proper amount of arguments, using `Array.prototype.slice(0, n)`.\nOmit the second argument, `n`, to uncurry up to depth `1`.\n\n",
          "codeBlocks": {
            "es6": "const uncurry = (fn, n = 1) => (...args) => {\n  const next = acc => args => args.reduce((x, y) => x(y), acc);\n  if (n > args.length) throw new RangeError('Arguments too few!');\n  return next(fn)(args.slice(0, n));\n};",
            "es5": "var uncurry = function uncurry(fn) {\n  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n  return function () {\n    var next = function next(acc) {\n      return function (args) {\n        return args.reduce(function (x, y) {\n          return x(y);\n        }, acc);\n      };\n    };\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    if (n > args.length) throw new RangeError('Arguments too few!');\n    return next(fn)(args.slice(0, n));\n  };\n};",
            "example": "const add = x => y => z => x + y + z;\nconst uncurriedAdd = uncurry(add, 3);\nuncurriedAdd(1, 2, 3); // 6"
          },
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "9947959c989195fe0581aa57ea3456f90d3c0e10a2f6e772f3a891ac81574f34",
          "firstSeen": "1518602204",
          "lastUpdated": "1565681352",
          "updateCount": 4,
          "authorCount": 3
        }
      },
      {
        "id": "unescapeHTML",
        "title": "unescapeHTML",
        "type": "snippet",
        "attributes": {
          "fileName": "unescapeHTML.md",
          "text": "Unescapes escaped HTML characters.\n\nUse `String.prototype.replace()` with a regex that matches the characters that need to be unescaped, using a callback function to replace each escaped character instance with its associated unescaped character using a dictionary (object).\n\n",
          "codeBlocks": {
            "es6": "const unescapeHTML = str =>\n  str.replace(\n    /&amp;|&lt;|&gt;|&#39;|&quot;/g,\n    tag =>\n      ({\n        '&amp;': '&',\n        '&lt;': '<',\n        '&gt;': '>',\n        '&#39;': \"'\",\n        '&quot;': '\"'\n      }[tag] || tag)\n  );",
            "es5": "var unescapeHTML = function unescapeHTML(str) {\n  return str.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g, function (tag) {\n    return {\n      '&amp;': '&',\n      '&lt;': '<',\n      '&gt;': '>',\n      '&#39;': \"'\",\n      '&quot;': '\"'\n    }[tag] || tag;\n  });\n};",
            "example": "unescapeHTML('&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'); // '<a href=\"#\">Me & you</a>'"
          },
          "tags": [
            "string",
            "browser",
            "beginner"
          ]
        },
        "meta": {
          "hash": "f469a318ae70e50251f0430c34d8fe0f57ca9158c2a8619ba146d2246adee8d5",
          "firstSeen": "1514552950",
          "lastUpdated": "1565681352",
          "updateCount": 8,
          "authorCount": 5
        }
      },
      {
        "id": "unflattenObject",
        "title": "unflattenObject",
        "type": "snippet",
        "attributes": {
          "fileName": "unflattenObject.md",
          "text": "Unflatten an object with the paths for keys.\n\nUse `Object.keys(obj)` combined with `Array.prototype.reduce()` to convert flattened path node to a leaf node.\nIf the value of a key contains a dot delimiter (`.`), use `Array.prototype.split('.')`, string transformations and `JSON.parse()` to create an object, then `Object.assign()` to create the leaf node.\nOtherwise, add the appropriate key-value pair to the accumulator object.\n\n",
          "codeBlocks": {
            "es6": "const unflattenObject = obj =>\n  Object.keys(obj).reduce((acc, k) => {\n    if (k.indexOf('.') !== -1) {\n      const keys = k.split('.');\n      Object.assign(\n        acc,\n        JSON.parse(\n          '{' +\n            keys.map((v, i) => (i !== keys.length - 1 ? `\"${v}\":{` : `\"${v}\":`)).join('') +\n            obj[k] +\n            '}'.repeat(keys.length)\n        )\n      );\n    } else acc[k] = obj[k];\n    return acc;\n  }, {});",
            "es5": "var unflattenObject = function unflattenObject(obj) {\n  return Object.keys(obj).reduce(function (acc, k) {\n    if (k.indexOf('.') !== -1) {\n      var keys = k.split('.');\n      Object.assign(acc, JSON.parse('{' + keys.map(function (v, i) {\n        return i !== keys.length - 1 ? \"\\\"\".concat(v, \"\\\":{\") : \"\\\"\".concat(v, \"\\\":\");\n      }).join('') + obj[k] + '}'.repeat(keys.length)));\n    } else acc[k] = obj[k];\n\n    return acc;\n  }, {});\n};",
            "example": "unflattenObject({ 'a.b.c': 1, d: 1 }); // { a: { b: { c: 1 } }, d: 1 }"
          },
          "tags": [
            "object",
            "advanced"
          ]
        },
        "meta": {
          "hash": "bc549ec3e2504bca06ef5ce7f1424b3b7dcd8959ebe983eeb576cda7eb5f6017",
          "firstSeen": "1517995818",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 5
        }
      },
      {
        "id": "unfold",
        "title": "unfold",
        "type": "snippet",
        "attributes": {
          "fileName": "unfold.md",
          "text": "Builds an array, using an iterator function and an initial seed value.\n\nUse a `while` loop and `Array.prototype.push()` to call the function repeatedly until it returns `false`.\nThe iterator function accepts one argument (`seed`) and must always return an array with two elements ([`value`, `nextSeed`]) or `false` to terminate.\n\n",
          "codeBlocks": {
            "es6": "const unfold = (fn, seed) => {\n  let result = [],\n    val = [null, seed];\n  while ((val = fn(val[1]))) result.push(val[0]);\n  return result;\n};",
            "es5": "var unfold = function unfold(fn, seed) {\n  var result = [],\n      val = [null, seed];\n\n  while (val = fn(val[1])) {\n    result.push(val[0]);\n  }\n\n  return result;\n};",
            "example": "var f = n => (n > 50 ? false : [-n, n + 10]);\nunfold(f, 10); // [-10, -20, -30, -40, -50]"
          },
          "tags": [
            "function",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "c1003c7baca5e5492e603c28aaa822cf24393036d6322fd90591519f9e7c74d9",
          "firstSeen": "1516803734",
          "lastUpdated": "1565681352",
          "updateCount": 4,
          "authorCount": 3
        }
      },
      {
        "id": "union",
        "title": "union",
        "type": "snippet",
        "attributes": {
          "fileName": "union.md",
          "text": "Returns every element that exists in any of the two arrays once.\n\nCreate a `Set` with all values of `a` and `b` and convert to an array.\n\n",
          "codeBlocks": {
            "es6": "const union = (a, b) => Array.from(new Set([...a, ...b]));",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar union = function union(a, b) {\n  return Array.from(new Set([].concat(_toConsumableArray(a), _toConsumableArray(b))));\n};",
            "example": "union([1, 2, 3], [4, 3, 2]); // [1, 2, 3, 4]"
          },
          "tags": [
            "array",
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "708c0fdf381b5eab2ea2df4de5da8e8171dbe38498c5d46ebab864b6ed1296a9",
          "firstSeen": "1513521691",
          "lastUpdated": "1582056925",
          "updateCount": 8,
          "authorCount": 4
        }
      },
      {
        "id": "unionBy",
        "title": "unionBy",
        "type": "snippet",
        "attributes": {
          "fileName": "unionBy.md",
          "text": "Returns every element that exists in any of the two arrays once, after applying the provided function to each array element of both.\n\nCreate a `Set` by applying all `fn` to all values of `a`.\nCreate a `Set` from `a` and all elements in `b` whose value, after applying `fn` does not match a value in the previously created set.\nReturn the last set converted to an array.\n\n",
          "codeBlocks": {
            "es6": "const unionBy = (a, b, fn) => {\n  const s = new Set(a.map(fn));\n  return Array.from(new Set([...a, ...b.filter(x => !s.has(fn(x)))]));\n};",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar unionBy = function unionBy(a, b, fn) {\n  var s = new Set(a.map(fn));\n  return Array.from(new Set([].concat(_toConsumableArray(a), _toConsumableArray(b.filter(function (x) {\n    return !s.has(fn(x));\n  })))));\n};",
            "example": "unionBy([2.1], [1.2, 2.3], Math.floor); // [2.1, 1.2]"
          },
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "db6fe4b924d30c2d844e7c55a1b73250c323ccccaa22ae15d936ce653a5c7a15",
          "firstSeen": "1516789181",
          "lastUpdated": "1565681352",
          "updateCount": 4,
          "authorCount": 3
        }
      },
      {
        "id": "unionWith",
        "title": "unionWith",
        "type": "snippet",
        "attributes": {
          "fileName": "unionWith.md",
          "text": "Returns every element that exists in any of the two arrays once, using a provided comparator function.\n\nCreate a `Set` with all values of `a` and values in `b` for which the comparator finds no matches in `a`, using `Array.prototype.findIndex()`.\n\n",
          "codeBlocks": {
            "es6": "const unionWith = (a, b, comp) =>\n  Array.from(new Set([...a, ...b.filter(x => a.findIndex(y => comp(x, y)) === -1)]));",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar unionWith = function unionWith(a, b, comp) {\n  return Array.from(new Set([].concat(_toConsumableArray(a), _toConsumableArray(b.filter(function (x) {\n    return a.findIndex(function (y) {\n      return comp(x, y);\n    }) === -1;\n  })))));\n};",
            "example": "unionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1, 1.2, 1.5, 3, 0, 3.9]"
          },
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "2784f965f4f4c04998f63b440c6554613bb2042ea1b45a461775c8ffc9e2ec29",
          "firstSeen": "1516789181",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "uniqueElements",
        "title": "uniqueElements",
        "type": "snippet",
        "attributes": {
          "fileName": "uniqueElements.md",
          "text": "Returns all unique values of an array.\n\nUse ES6 `Set` and the `...rest` operator to discard all duplicated values.\n\n",
          "codeBlocks": {
            "es6": "const uniqueElements = arr => [...new Set(arr)];",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar uniqueElements = function uniqueElements(arr) {\n  return _toConsumableArray(new Set(arr));\n};",
            "example": "uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]"
          },
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "474b3568e2a842246ff6ab2800aeec3f82353732080bb63911adb142d273e34c",
          "firstSeen": "1516208569",
          "lastUpdated": "1565681352",
          "updateCount": 4,
          "authorCount": 3
        }
      },
      {
        "id": "uniqueElementsBy",
        "title": "uniqueElementsBy",
        "type": "snippet",
        "attributes": {
          "fileName": "uniqueElementsBy.md",
          "text": "Returns all unique values of an array, based on a provided comparator function.\n\nUse `Array.prototype.reduce()` and `Array.prototype.some()` for an array containing only the first unique occurrence of each value, based on the comparator function, `fn`.\nThe comparator function takes two arguments: the values of the two elements being compared.\n\n",
          "codeBlocks": {
            "es6": "const uniqueElementsBy = (arr, fn) =>\n  arr.reduce((acc, v) => {\n    if (!acc.some(x => fn(v, x))) acc.push(v);\n    return acc;\n  }, []);",
            "es5": "var uniqueElementsBy = function uniqueElementsBy(arr, fn) {\n  return arr.reduce(function (acc, v) {\n    if (!acc.some(function (x) {\n      return fn(v, x);\n    })) acc.push(v);\n    return acc;\n  }, []);\n};",
            "example": "uniqueElementsBy(\n  [\n    { id: 0, value: 'a' },\n    { id: 1, value: 'b' },\n    { id: 2, value: 'c' },\n    { id: 1, value: 'd' },\n    { id: 0, value: 'e' }\n  ],\n  (a, b) => a.id == b.id\n); // [ { id: 0, value: 'a' }, { id: 1, value: 'b' }, { id: 2, value: 'c' } ]"
          },
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "a506c398c0d84b8c6926b70e62f28ca6180a02d010088c89fc9c8d7e2706e0bc",
          "firstSeen": "1531936147",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 5
        }
      },
      {
        "id": "uniqueElementsByRight",
        "title": "uniqueElementsByRight",
        "type": "snippet",
        "attributes": {
          "fileName": "uniqueElementsByRight.md",
          "text": "Returns all unique values of an array, based on a provided comparator function, starting from the right.\n\nUse `Array.prototype.reduceRight()` and `Array.prototype.some()` for an array containing only the last unique occurrence of each value, based on the comparator function, `fn`.\nThe comparator function takes two arguments: the values of the two elements being compared.\n\n",
          "codeBlocks": {
            "es6": "const uniqueElementsByRight = (arr, fn) =>\n  arr.reduceRight((acc, v) => {\n    if (!acc.some(x => fn(v, x))) acc.push(v);\n    return acc;\n  }, []);",
            "es5": "var uniqueElementsByRight = function uniqueElementsByRight(arr, fn) {\n  return arr.reduceRight(function (acc, v) {\n    if (!acc.some(function (x) {\n      return fn(v, x);\n    })) acc.push(v);\n    return acc;\n  }, []);\n};",
            "example": "uniqueElementsByRight(\n  [\n    { id: 0, value: 'a' },\n    { id: 1, value: 'b' },\n    { id: 2, value: 'c' },\n    { id: 1, value: 'd' },\n    { id: 0, value: 'e' }\n  ],\n  (a, b) => a.id == b.id\n); // [ { id: 0, value: 'e' }, { id: 1, value: 'd' }, { id: 2, value: 'c' } ]"
          },
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "59867a867b440985ad221def644ec15594908db1d2ae413fc8a41f2669e3798a",
          "firstSeen": "1531936147",
          "lastUpdated": "1565681352",
          "updateCount": 8,
          "authorCount": 6
        }
      },
      {
        "id": "uniqueSymmetricDifference",
        "title": "uniqueSymmetricDifference",
        "type": "snippet",
        "attributes": {
          "fileName": "uniqueSymmetricDifference.md",
          "text": "Returns the unique symmetric difference between two arrays, not containing duplicate values from either array.\n\nUse `Array.prototype.filter()` and `Array.prototype.includes()` on each array to remove values contained in the other, then create a `Set` from the results, removing duplicate values.\n\n",
          "codeBlocks": {
            "es6": "const uniqueSymmetricDifference = (a, b) => [\n  ...new Set([...a.filter(v => !b.includes(v)), ...b.filter(v => !a.includes(v))])\n];",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar uniqueSymmetricDifference = function uniqueSymmetricDifference(a, b) {\n  return _toConsumableArray(new Set([].concat(_toConsumableArray(a.filter(function (v) {\n    return !b.includes(v);\n  })), _toConsumableArray(b.filter(function (v) {\n    return !a.includes(v);\n  })))));\n};",
            "example": "uniqueSymmetricDifference([1, 2, 3], [1, 2, 4]); // [3, 4]\nuniqueSymmetricDifference([1, 2, 2], [1, 3, 1]); // [2, 3]"
          },
          "tags": [
            "array",
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "553400fbd0f95322a82a87440dcaef7c25277740e3116027b5d23731a926cc61",
          "firstSeen": "1534484228",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 3
        }
      },
      {
        "id": "untildify",
        "title": "untildify",
        "type": "snippet",
        "attributes": {
          "fileName": "untildify.md",
          "text": "Converts a tilde path to an absolute path.\n\nUse `String.prototype.replace()` with a regular expression and `OS.homedir()` to replace the `~` in the start of the path with the home directory.\n\n",
          "codeBlocks": {
            "es6": "const untildify = str => str.replace(/^~($|\\/|\\\\)/, `${require('os').homedir()}$1`);",
            "es5": "var untildify = function untildify(str) {\n  return str.replace(/^~($|\\/|\\\\)/, \"\".concat(require('os').homedir(), \"$1\"));\n};",
            "example": "untildify('~/node'); // '/Users/aUser/node'"
          },
          "tags": [
            "node",
            "string",
            "beginner"
          ]
        },
        "meta": {
          "hash": "fc0e9c9b78dfc63137bd1a7bf71d03089d732356803f16af37febce1adefda9a",
          "firstSeen": "1514821398",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "unzip",
        "title": "unzip",
        "type": "snippet",
        "attributes": {
          "fileName": "unzip.md",
          "text": "Creates an array of arrays, ungrouping the elements in an array produced by [zip](/js/s/zip).\n\nUse `Math.max.apply()` to get the longest subarray in the array, `Array.prototype.map()` to make each element an array.\nUse `Array.prototype.reduce()` and `Array.prototype.forEach()` to map grouped values to individual arrays.\n\n",
          "codeBlocks": {
            "es6": "const unzip = arr =>\n  arr.reduce(\n    (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),\n    Array.from({\n      length: Math.max(...arr.map(x => x.length))\n    }).map(x => [])\n  );",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar unzip = function unzip(arr) {\n  return arr.reduce(function (acc, val) {\n    return val.forEach(function (v, i) {\n      return acc[i].push(v);\n    }), acc;\n  }, Array.from({\n    length: Math.max.apply(Math, _toConsumableArray(arr.map(function (x) {\n      return x.length;\n    })))\n  }).map(function (x) {\n    return [];\n  }));\n};",
            "example": "unzip([['a', 1, true], ['b', 2, false]]); // [['a', 'b'], [1, 2], [true, false]]\nunzip([['a', 1, true], ['b', 2]]); // [['a', 'b'], [1, 2], [true]]"
          },
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "ae3c80b1e7de7581fbfc0f800190418de4173441876c3907b135bc35adcbf85b",
          "firstSeen": "1516790125",
          "lastUpdated": "1580849131",
          "updateCount": 7,
          "authorCount": 4
        }
      },
      {
        "id": "unzipWith",
        "title": "unzipWith",
        "type": "snippet",
        "attributes": {
          "fileName": "unzipWith.md",
          "text": "Creates an array of elements, ungrouping the elements in an array produced by [zip](#zip) and applying the provided function.\n\nUse `Math.max.apply()` to get the longest subarray in the array, `Array.prototype.map()` to make each element an array.\nUse `Array.prototype.reduce()` and `Array.prototype.forEach()` to map grouped values to individual arrays.\nUse `Array.prototype.map()` and the spread operator (`...`) to apply `fn` to each individual group of elements.\n\n",
          "codeBlocks": {
            "es6": "const unzipWith = (arr, fn) =>\n  arr\n    .reduce(\n      (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),\n      Array.from({\n        length: Math.max(...arr.map(x => x.length))\n      }).map(x => [])\n    )\n    .map(val => fn(...val));",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar unzipWith = function unzipWith(arr, fn) {\n  return arr.reduce(function (acc, val) {\n    return val.forEach(function (v, i) {\n      return acc[i].push(v);\n    }), acc;\n  }, Array.from({\n    length: Math.max.apply(Math, _toConsumableArray(arr.map(function (x) {\n      return x.length;\n    })))\n  }).map(function (x) {\n    return [];\n  })).map(function (val) {\n    return fn.apply(void 0, _toConsumableArray(val));\n  });\n};",
            "example": "unzipWith([[1, 10, 100], [2, 20, 200]], (...args) => args.reduce((acc, v) => acc + v, 0)); // [3, 30, 300]"
          },
          "tags": [
            "array",
            "function",
            "advanced"
          ]
        },
        "meta": {
          "hash": "12bf4549e753e503e1798b21dcebc3bc2026ee3e6f391887d4bb0fa99211e2f6",
          "firstSeen": "1516790656",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "URLJoin",
        "title": "URLJoin",
        "type": "snippet",
        "attributes": {
          "fileName": "URLJoin.md",
          "text": "Joins all given URL segments together, then normalizes the resulting URL.\n\nUse `String.prototype.join('/')` to combine URL segments, then a series of `String.prototype.replace()` calls with various regexps to normalize the resulting URL (remove double slashes, add proper slashes for protocol, remove slashes before parameters, combine parameters with `'&'` and normalize first parameter delimiter).\n\n",
          "codeBlocks": {
            "es6": "const URLJoin = (...args) =>\n  args\n    .join('/')\n    .replace(/[\\/]+/g, '/')\n    .replace(/^(.+):\\//, '$1://')\n    .replace(/^file:/, 'file:/')\n    .replace(/\\/(\\?|&|#[^!])/g, '$1')\n    .replace(/\\?/g, '&')\n    .replace('&', '?');",
            "es5": "var URLJoin = function URLJoin() {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  return args.join('/').replace(/[\\/]+/g, '/').replace(/^(.+):\\//, '$1://').replace(/^file:/, 'file:/').replace(/\\/(\\?|&|#[^!])/g, '$1').replace(/\\?/g, '&').replace('&', '?');\n};",
            "example": "URLJoin('http://www.google.com', 'a', '/b/cd', '?foo=123', '?bar=foo'); // 'http://www.google.com/a/b/cd?foo=123&bar=foo'"
          },
          "tags": [
            "string",
            "utility",
            "regexp",
            "advanced"
          ]
        },
        "meta": {
          "hash": "6050cfa3a2a39089151bacfce1f5cedaec12f5da253dbc20a56dfaf50cb8924b",
          "firstSeen": "1516110783",
          "lastUpdated": "1565681352",
          "updateCount": 5,
          "authorCount": 4
        }
      },
      {
        "id": "UUIDGeneratorBrowser",
        "title": "UUIDGeneratorBrowser",
        "type": "snippet",
        "attributes": {
          "fileName": "UUIDGeneratorBrowser.md",
          "text": "Generates a UUID in a browser.\n\nUse `crypto` API to generate a UUID, compliant with [RFC4122](https://www.ietf.org/rfc/rfc4122.txt) version 4.\n\n",
          "codeBlocks": {
            "es6": "const UUIDGeneratorBrowser = () =>\n  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>\n    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)\n  );",
            "es5": "var UUIDGeneratorBrowser = function UUIDGeneratorBrowser() {\n  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {\n    return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);\n  });\n};",
            "example": "UUIDGeneratorBrowser(); // '7982fcfe-5721-4632-bede-6000885be57d'"
          },
          "tags": [
            "browser",
            "utility",
            "random",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "9f84a12da85558ebdb189097dbc581b338e07d52eedc5975f1001133b123aad2",
          "firstSeen": "1514533630",
          "lastUpdated": "1565681352",
          "updateCount": 4,
          "authorCount": 3
        }
      },
      {
        "id": "UUIDGeneratorNode",
        "title": "UUIDGeneratorNode",
        "type": "snippet",
        "attributes": {
          "fileName": "UUIDGeneratorNode.md",
          "text": "Generates a UUID in Node.JS.\n\nUse `crypto` API to generate a UUID, compliant with [RFC4122](https://www.ietf.org/rfc/rfc4122.txt) version 4.\n\n",
          "codeBlocks": {
            "es6": "const crypto = require('crypto');\nconst UUIDGeneratorNode = () =>\n  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>\n    (c ^ (crypto.randomBytes(1)[0] & (15 >> (c / 4)))).toString(16)\n  );",
            "es5": "var crypto = require('crypto');\n\nvar UUIDGeneratorNode = function UUIDGeneratorNode() {\n  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {\n    return (c ^ crypto.randomBytes(1)[0] & 15 >> c / 4).toString(16);\n  });\n};",
            "example": "UUIDGeneratorNode(); // '79c7c136-60ee-40a2-beb2-856f1feabefc'"
          },
          "tags": [
            "node",
            "utility",
            "random",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "79604b0f854a91af789fea8416c7099acfb3633259ef387f52a21337d2242478",
          "firstSeen": "1514533630",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "validateNumber",
        "title": "validateNumber",
        "type": "snippet",
        "attributes": {
          "fileName": "validateNumber.md",
          "text": "Returns `true` if the given value is a number, `false` otherwise.\n\nUse `!isNaN()` in combination with `parseFloat()` to check if the argument is a number.\nUse `isFinite()` to check if the number is finite.\nUse `Number()` to check if the coercion holds.\n\n",
          "codeBlocks": {
            "es6": "const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;",
            "es5": "var validateNumber = function validateNumber(n) {\n  return !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;\n};",
            "example": "validateNumber('10'); // true"
          },
          "tags": [
            "utility",
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "73fc55564fa0b59a71553aa442bda666cbcddbcd618f9ca53c2b55e42a7c26ca",
          "firstSeen": "1513526151",
          "lastUpdated": "1565681352",
          "updateCount": 7,
          "authorCount": 4
        }
      },
      {
        "id": "vectorDistance",
        "title": "vectorDistance",
        "type": "snippet",
        "attributes": {
          "fileName": "vectorDistance.md",
          "text": "Returns the distance between two vectors.\n\nUse `Array.prototype.reduce()`, `Math.pow()` and `Math.sqrt()` to calculate the Euclidean distance between two vectors.\n\n",
          "codeBlocks": {
            "es6": "const vectorDistance = (...coords) => {\n  let pointLength = Math.trunc(coords.length / 2);\n  let sum = coords\n    .slice(0, pointLength)\n    .reduce((acc, val, i) => acc + Math.pow(val - coords[pointLength + i], 2), 0);\n  return Math.sqrt(sum);\n};",
            "es5": "var vectorDistance = function vectorDistance() {\n  for (var _len = arguments.length, coords = new Array(_len), _key = 0; _key < _len; _key++) {\n    coords[_key] = arguments[_key];\n  }\n\n  var pointLength = Math.trunc(coords.length / 2);\n  var sum = coords.slice(0, pointLength).reduce(function (acc, val, i) {\n    return acc + Math.pow(val - coords[pointLength + i], 2);\n  }, 0);\n  return Math.sqrt(sum);\n};",
            "example": "vectorDistance(10, 0, 5, 20, 0, 10); // 11.180339887498949"
          },
          "tags": [
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "a2c8560a2e285ebe11caad3a46c07ee0e41a64bd850b2e5a4f5aebc12da09dcc",
          "firstSeen": "1550942028",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "weightedSample",
        "title": "weightedSample",
        "type": "snippet",
        "attributes": {
          "fileName": "weightedSample.md",
          "text": "Returns a random element from an array, using the provided `weights` as the probabilities for each element.\n\nUse `Array.prototype.reduce()` to create an array of partial sums for each value in `weights`.\nUse `Math.random()` to generate a random number and `Array.prototype.findIndex()` to find the correct index based on the array previously produced.\nFinally, return the element of `arr` with the produced index.\n\n\n",
          "codeBlocks": {
            "es6": "const weightedSample = (arr, weights) => {\n  let roll = Math.random();\n  return arr[\n    weights\n      .reduce((acc, w, i) => (i === 0 ? [w] : [...acc, acc[acc.length - 1] + w]), [])\n      .findIndex((v, i, s) => roll >= (i === 0 ? 0 : s[i - 1]) && roll < v)\n  ];\n};",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar weightedSample = function weightedSample(arr, weights) {\n  var roll = Math.random();\n  return arr[weights.reduce(function (acc, w, i) {\n    return i === 0 ? [w] : [].concat(_toConsumableArray(acc), [acc[acc.length - 1] + w]);\n  }, []).findIndex(function (v, i, s) {\n    return roll >= (i === 0 ? 0 : s[i - 1]) && roll < v;\n  })];\n};",
            "example": "weightedSample([3, 7, 9, 11], [0.1, 0.2, 0.6, 0.1]); // 9"
          },
          "tags": [
            "array",
            "random",
            "advanced"
          ]
        },
        "meta": {
          "hash": "94d3b2ea296a94907be873c19381a525eeb96676cd52cb1baf1bd76bc22971a6",
          "firstSeen": "1577784866",
          "lastUpdated": "1577785133",
          "updateCount": 3,
          "authorCount": 3
        }
      },
      {
        "id": "when",
        "title": "when",
        "type": "snippet",
        "attributes": {
          "fileName": "when.md",
          "text": "Tests a value, `x`, against a predicate function. If `true`, return `fn(x)`. Else, return `x`. \n\nReturn a function expecting a single value, `x`, that returns the appropriate value based on `pred`.\n\n",
          "codeBlocks": {
            "es6": "const when = (pred, whenTrue) => x => (pred(x) ? whenTrue(x) : x);",
            "es5": "var when = function when(pred, whenTrue) {\n  return function (x) {\n    return pred(x) ? whenTrue(x) : x;\n  };\n};",
            "example": "const doubleEvenNumbers = when(x => x % 2 === 0, x => x * 2);\ndoubleEvenNumbers(2); // 4\ndoubleEvenNumbers(1); // 1"
          },
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "4ec8d33670ad1c716f00c72100c27c43a0031eb8ee411699aa4740df3bfe9659",
          "firstSeen": "1524098732",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "without",
        "title": "without",
        "type": "snippet",
        "attributes": {
          "fileName": "without.md",
          "text": "Filters out the elements of an array, that have one of the specified values.\n\nUse `Array.prototype.filter()` to create an array excluding(using `!Array.includes()`) all given values.\n\n",
          "codeBlocks": {
            "es6": "const without = (arr, ...args) => arr.filter(v => !args.includes(v));",
            "es5": "var without = function without(arr) {\n  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    args[_key - 1] = arguments[_key];\n  }\n\n  return arr.filter(function (v) {\n    return !args.includes(v);\n  });\n};",
            "example": "without([2, 1, 2, 3], 1, 2); // [3]"
          },
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "54f15178f6196172218aeffd14defe4e9af475ee3e29f0857ada823f618d3c8f",
          "firstSeen": "1513521691",
          "lastUpdated": "1565952466",
          "updateCount": 12,
          "authorCount": 7
        }
      },
      {
        "id": "words",
        "title": "words",
        "type": "snippet",
        "attributes": {
          "fileName": "words.md",
          "text": "Converts a given string into an array of words.\n\nUse `String.prototype.split()` with a supplied pattern (defaults to non-alpha as a regexp) to convert to an array of strings. Use `Array.prototype.filter()` to remove any empty strings.\nOmit the second argument to use the default regexp.\n\n",
          "codeBlocks": {
            "es6": "const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);",
            "es5": "var words = function words(str) {\n  var pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /[^a-zA-Z-]+/;\n  return str.split(pattern).filter(Boolean);\n};",
            "example": "words('I love javaScript!!'); // [\"I\", \"love\", \"javaScript\"]\nwords('python, javaScript & coffee'); // [\"python\", \"javaScript\", \"coffee\"]"
          },
          "tags": [
            "string",
            "regexp",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "b072b9cad23554279e7601cafb20813d6675459293aab607a22c820a2f2a0eb9",
          "firstSeen": "1513860657",
          "lastUpdated": "1565681352",
          "updateCount": 9,
          "authorCount": 7
        }
      },
      {
        "id": "xProd",
        "title": "xProd",
        "type": "snippet",
        "attributes": {
          "fileName": "xProd.md",
          "text": "Creates a new array out of the two supplied by creating each possible pair from the arrays.\n\nUse `Array.prototype.reduce()`, `Array.prototype.map()` and `Array.prototype.concat()` to produce every possible pair from the elements of the two arrays and save them in an array.\n\n",
          "codeBlocks": {
            "es6": "const xProd = (a, b) => a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);",
            "es5": "var xProd = function xProd(a, b) {\n  return a.reduce(function (acc, x) {\n    return acc.concat(b.map(function (y) {\n      return [x, y];\n    }));\n  }, []);\n};",
            "example": "xProd([1, 2], ['a', 'b']); // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]"
          },
          "tags": [
            "array",
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "8202d07045f90d897db21799a4daa0de39613c035b4ed1e92ab65c8cd5ce2e15",
          "firstSeen": "1516802103",
          "lastUpdated": "1565681352",
          "updateCount": 6,
          "authorCount": 4
        }
      },
      {
        "id": "yesNo",
        "title": "yesNo",
        "type": "snippet",
        "attributes": {
          "fileName": "yesNo.md",
          "text": "Returns `true` if the string is `y`/`yes` or `false` if the string is `n`/`no`.\n\nUse `RegExp.test()` to check if the string evaluates to `y/yes` or `n/no`.\nOmit the second argument, `def` to set the default answer as `no`.\n\n",
          "codeBlocks": {
            "es6": "const yesNo = (val, def = false) =>\n  /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;",
            "es5": "var yesNo = function yesNo(val) {\n  var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  return /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;\n};",
            "example": "yesNo('Y'); // true\nyesNo('yes'); // true\nyesNo('No'); // false\nyesNo('Foo', true); // true"
          },
          "tags": [
            "utility",
            "regexp",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "6365f144def8abb711b890f8689ff8c9f1f1aee092525583fa913057ba623472",
          "firstSeen": "1514651754",
          "lastUpdated": "1565681352",
          "updateCount": 4,
          "authorCount": 3
        }
      },
      {
        "id": "yesterday",
        "title": "yesterday",
        "type": "snippet",
        "attributes": {
          "fileName": "yesterday.md",
          "text": "Results in a string representation of yesterday's date.\n\nUse `new Date()` to get the current date, decrement by one using `Date.getDate()` and set the value to the result using `Date.setDate()`.\nUse `Date.prototype.toISOString()` to return a string in `yyyy-mm-dd` format.\n\n",
          "codeBlocks": {
            "es6": "const yesterday = () => {\n  let t = new Date();\n  t.setDate(t.getDate() - 1);\n  return t.toISOString().split('T')[0];\n};",
            "es5": "var yesterday = function yesterday() {\n  var t = new Date();\n  t.setDate(t.getDate() - 1);\n  return t.toISOString().split('T')[0];\n};",
            "example": "yesterday(); // 2018-10-17 (if current date is 2018-10-18)"
          },
          "tags": [
            "date",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "033e90570af5f5ed3d8c0ea4407d6ccaea760372562c5633a24bf08e1f8782d3",
          "firstSeen": "1563523041",
          "lastUpdated": "1565681352",
          "updateCount": 3,
          "authorCount": 3
        }
      },
      {
        "id": "zip",
        "title": "zip",
        "type": "snippet",
        "attributes": {
          "fileName": "zip.md",
          "text": "Creates an array of elements, grouped based on the position in the original arrays.\n\nUse `Math.max.apply()` to get the longest array in the arguments.\nCreates an array with that length as return value and use `Array.from()` with a map-function to create an array of grouped elements.\nIf lengths of the argument-arrays vary, `undefined` is used where no value could be found.\n\n",
          "codeBlocks": {
            "es6": "const zip = (...arrays) => {\n  const maxLength = Math.max(...arrays.map(x => x.length));\n  return Array.from({ length: maxLength }).map((_, i) => {\n    return Array.from({ length: arrays.length }, (_, k) => arrays[k][i]);\n  });\n};",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar zip = function zip() {\n  for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {\n    arrays[_key] = arguments[_key];\n  }\n\n  var maxLength = Math.max.apply(Math, _toConsumableArray(arrays.map(function (x) {\n    return x.length;\n  })));\n  return Array.from({\n    length: maxLength\n  }).map(function (_, i) {\n    return Array.from({\n      length: arrays.length\n    }, function (_, k) {\n      return arrays[k][i];\n    });\n  });\n};",
            "example": "zip(['a', 'b'], [1, 2], [true, false]); // [['a', 1, true], ['b', 2, false]]\nzip(['a'], [1, 2], [true, false]); // [['a', 1, true], [undefined, 2, false]]"
          },
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "ec0b5750affd681f1eed8dd7a4711c103675f559da38aab23162d5270567d329",
          "firstSeen": "1513521691",
          "lastUpdated": "1565681352",
          "updateCount": 8,
          "authorCount": 4
        }
      },
      {
        "id": "zipObject",
        "title": "zipObject",
        "type": "snippet",
        "attributes": {
          "fileName": "zipObject.md",
          "text": "Given an array of valid property identifiers and an array of values, return an object associating the properties to the values.\n\nSince an object can have undefined values but not undefined property pointers, the array of properties is used to decide the structure of the resulting object using `Array.prototype.reduce()`.\n\n",
          "codeBlocks": {
            "es6": "const zipObject = (props, values) =>\n  props.reduce((obj, prop, index) => ((obj[prop] = values[index]), obj), {});",
            "es5": "var zipObject = function zipObject(props, values) {\n  return props.reduce(function (obj, prop, index) {\n    return obj[prop] = values[index], obj;\n  }, {});\n};",
            "example": "zipObject(['a', 'b', 'c'], [1, 2]); // {a: 1, b: 2, c: undefined}\nzipObject(['a', 'b'], [1, 2, 3]); // {a: 1, b: 2}"
          },
          "tags": [
            "array",
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "f2c7e2c6a8e566946e631c92b295c76cc406650347ec0e21318522f26094acd7",
          "firstSeen": "1513810518",
          "lastUpdated": "1565681352",
          "updateCount": 16,
          "authorCount": 6
        }
      },
      {
        "id": "zipWith",
        "title": "zipWith",
        "type": "snippet",
        "attributes": {
          "fileName": "zipWith.md",
          "text": "Creates an array of elements, grouped based on the position in the original arrays and using function as the last value to specify how grouped values should be combined.\n\nCheck if the last argument provided is a function.\nUse `Math.max()` to get the longest array in the arguments.\nCreates an array with that length as return value and use `Array.from()` with a map-function to create an array of grouped elements.\nIf lengths of the argument-arrays vary, `undefined` is used where no value could be found.\nThe function is invoked with the elements of each group `(...group)`.\n\n",
          "codeBlocks": {
            "es6": "const zipWith = (...array) => {\n  const fn = typeof array[array.length - 1] === 'function' ? array.pop() : undefined;\n  return Array.from({ length: Math.max(...array.map(a => a.length)) }, (_, i) =>\n    fn ? fn(...array.map(a => a[i])) : array.map(a => a[i])\n  );\n};",
            "es5": "function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar zipWith = function zipWith() {\n  for (var _len = arguments.length, array = new Array(_len), _key = 0; _key < _len; _key++) {\n    array[_key] = arguments[_key];\n  }\n\n  var fn = typeof array[array.length - 1] === 'function' ? array.pop() : undefined;\n  return Array.from({\n    length: Math.max.apply(Math, _toConsumableArray(array.map(function (a) {\n      return a.length;\n    })))\n  }, function (_, i) {\n    return fn ? fn.apply(void 0, _toConsumableArray(array.map(function (a) {\n      return a[i];\n    }))) : array.map(function (a) {\n      return a[i];\n    });\n  });\n};",
            "example": "zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c); // [111,222]\nzipWith(\n  [1, 2, 3],\n  [10, 20],\n  [100, 200],\n  (a, b, c) => (a != null ? a : 'a') + (b != null ? b : 'b') + (c != null ? c : 'c')\n); // [111, 222, '3bc']"
          },
          "tags": [
            "array",
            "function",
            "advanced"
          ]
        },
        "meta": {
          "hash": "457830ee4df5b57b6605c4133b863cc3f3eebf0031ccd1358fae3c6f5cb3c75e",
          "firstSeen": "1516461694",
          "lastUpdated": "1566202717",
          "updateCount": 9,
          "authorCount": 4
        }
      }
    ];

export default data;