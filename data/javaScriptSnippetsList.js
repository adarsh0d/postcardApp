const data = [
      {
        "id": "all",
        "type": "snippetListing",
        "title": "all",
        "attributes": {
          "text": "Returns `true` if the provided predicate function returns `true` for all elements in a collection, `false` otherwise.\n\nUse `Array.prototype.every()` to test if all elements in the collection return `true` based on `fn`.\nOmit the second argument, `fn`, to use `Boolean` as a default.\n\n",
          "tags": [
            "array",
            "function",
            "beginner"
          ]
        },
        "meta": {
          "hash": "ba8e5f17500d1e5428f4ca7fcc8095934a7ad3aa496b35465e8f7799f1715aaa"
        }
      },
      {
        "id": "allEqual",
        "type": "snippetListing",
        "title": "allEqual",
        "attributes": {
          "text": "Check if all elements in an array are equal.\n\nUse `Array.prototype.every()` to check if all the elements of the array are the same as the first one.\nElements in the array are compared using the strict comparison operator, which does not account for `NaN` self-inequality.\n\n",
          "tags": [
            "array",
            "function",
            "beginner"
          ]
        },
        "meta": {
          "hash": "bda519858588ad61c9200acbb4ea5ce66630eb2ed7ceda96d12518b772b986b9"
        }
      },
      {
        "id": "any",
        "type": "snippetListing",
        "title": "any",
        "attributes": {
          "text": "Returns `true` if the provided predicate function returns `true` for at least one element in a collection, `false` otherwise.\n\nUse `Array.prototype.some()` to test if any elements in the collection return `true` based on `fn`.\nOmit the second argument, `fn`, to use `Boolean` as a default.\n\n",
          "tags": [
            "array",
            "function",
            "beginner"
          ]
        },
        "meta": {
          "hash": "061b791456507197b9be0ff9b791b830fe0b550823868075bbe04962501f83a3"
        }
      },
      {
        "id": "approximatelyEqual",
        "type": "snippetListing",
        "title": "approximatelyEqual",
        "attributes": {
          "text": "Checks if two numbers are approximately equal to each other.\n\nUse `Math.abs()` to compare the absolute difference of the two values to `epsilon`.\nOmit the third parameter, `epsilon`, to use a default value of `0.001`.\n\n",
          "tags": [
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "805f11e2f230c3a6b7dc590fcee27b4083b2188b6f1d0a8afb93868891cdba22"
        }
      },
      {
        "id": "arrayToCSV",
        "type": "snippetListing",
        "title": "arrayToCSV",
        "attributes": {
          "text": "Converts a 2D array to a comma-separated values (CSV) string.\n\nUse `Array.prototype.map()` and `Array.prototype.join(delimiter)` to combine individual 1D arrays (rows) into strings.\nUse `Array.prototype.join('\\n')` to combine all rows into a CSV string, separating each row with a newline.\nOmit the second argument, `delimiter`, to use a default delimiter of `,`.\n\n",
          "tags": [
            "array",
            "string",
            "utility",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "aeabb3d1d2be2d44fd8a20da3b069fdd1a8ad963f27e3e1ae9f5e8b40a8908cb"
        }
      },
      {
        "id": "arrayToHtmlList",
        "type": "snippetListing",
        "title": "arrayToHtmlList",
        "attributes": {
          "text": "Converts the given array elements into `<li>` tags and appends them to the list of the given id.\n\nUse `Array.prototype.map()`, `document.querySelector()`, and an anonymous inner closure to create a list of html tags.\n\n",
          "tags": [
            "browser",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "9d7e2db4a98688ab199ed2f75242bbff40a6083cc3c0ef483ed679c5d3878239"
        }
      },
      {
        "id": "ary",
        "type": "snippetListing",
        "title": "ary",
        "attributes": {
          "text": "Creates a function that accepts up to `n` arguments, ignoring any additional arguments.\n\nCall the provided function, `fn`, with up to `n` arguments, using `Array.prototype.slice(0, n)` and the spread operator (`...`).\n\n",
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "533ab7f8259624322b5911b076d8e6fcd08f2fd396e9e0bec85449fc42769d9b"
        }
      },
      {
        "id": "atob",
        "type": "snippetListing",
        "title": "atob",
        "attributes": {
          "text": "Decodes a string of data which has been encoded using base-64 encoding.\n\nCreate a `Buffer` for the given string with base-64 encoding and use `Buffer.toString('binary')` to return the decoded string.\n\n",
          "tags": [
            "node",
            "string",
            "utility",
            "beginner"
          ]
        },
        "meta": {
          "hash": "32988360d63d6d62251314a88d3f4482ec3a265d67154a92a86d4140bd61c54b"
        }
      },
      {
        "id": "attempt",
        "type": "snippetListing",
        "title": "attempt",
        "attributes": {
          "text": "Attempts to invoke a function with the provided arguments, returning either the result or the caught error object.\n\nUse a `try... catch` block to return either the result of the function or an appropriate error.\n\n",
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "a511836ad4a5755d469af2e6a331cbcd85df14b6231bbed6a1b0fe44aee3d2cf"
        }
      },
      {
        "id": "average",
        "type": "snippetListing",
        "title": "average",
        "attributes": {
          "text": "Returns the average of two or more numbers.\n\nUse `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`, divide by the `length` of the array.\n\n",
          "tags": [
            "math",
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "edf5c7f142e59e4467ca7142eaf0ac95957abcb0dad1d439484b2b70fe8be6d3"
        }
      },
      {
        "id": "averageBy",
        "type": "snippetListing",
        "title": "averageBy",
        "attributes": {
          "text": "Returns the average of an array, after mapping each element to a value using the provided function.\n\nUse `Array.prototype.map()` to map each element to the value returned by `fn`, `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`, divide by the `length` of the array.\n\n",
          "tags": [
            "math",
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "7aa2052a6196029116ef9f2f7dda69b7d17344c0acc659ffedf002024b38d8b7"
        }
      },
      {
        "id": "bifurcate",
        "type": "snippetListing",
        "title": "bifurcate",
        "attributes": {
          "text": "Splits values into two groups. If an element in `filter` is truthy, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.\n\nUse `Array.prototype.reduce()` and `Array.prototype.push()` to add elements to groups, based on `filter`.\n\n",
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "a801974915906c11a30deef1baa3994f44f548f1ca1cf599aede4bb730543ec6"
        }
      },
      {
        "id": "bifurcateBy",
        "type": "snippetListing",
        "title": "bifurcateBy",
        "attributes": {
          "text": "Splits values into two groups according to a predicate function, which specifies which group an element in the input collection belongs to. If the predicate function returns a truthy value, the collection element belongs to the first group; otherwise, it belongs to the second group.\n\nUse `Array.prototype.reduce()` and `Array.prototype.push()` to add elements to groups, based on the value returned by `fn` for each element.\n\n",
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "db1b8580ab11b6ba05a7d47776b97d700c5a7e945ddc5ad9ca1f37e50f039b54"
        }
      },
      {
        "id": "bind",
        "type": "snippetListing",
        "title": "bind",
        "attributes": {
          "text": "Creates a function that invokes `fn` with a given context, optionally adding any additional supplied parameters to the beginning of the arguments.\n\nReturn a `function` that uses `Function.prototype.apply()` to apply the given `context` to `fn`.\nUse `Array.prototype.concat()` to prepend any additional supplied parameters to the arguments.\n\n",
          "tags": [
            "function",
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "d15851c4e6991e41014768c3f2dd28df71615e44180c732b67eed1d162ea4b95"
        }
      },
      {
        "id": "bindAll",
        "type": "snippetListing",
        "title": "bindAll",
        "attributes": {
          "text": "Binds methods of an object to the object itself, overwriting the existing method.\n\nUse `Array.prototype.forEach()` to return a `function` that uses `Function.prototype.apply()` to apply the given context (`obj`) to `fn` for each function specified.\n\n",
          "tags": [
            "object",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "e159b77ba0bde0f38d339348b9a69b4702cf036abd767777507159aa75ce151b"
        }
      },
      {
        "id": "bindKey",
        "type": "snippetListing",
        "title": "bindKey",
        "attributes": {
          "text": "Creates a function that invokes the method at a given key of an object, optionally adding any additional supplied parameters to the beginning of the arguments.\n\nReturn a `function` that uses `Function.prototype.apply()` to bind `context[fn]` to `context`.\nUse the spread operator (`...`) to prepend any additional supplied parameters to the arguments.\n\n",
          "tags": [
            "function",
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "e854f774dd81cdb291fb57b276a61e5d7f7ab13a6aae490c89c0e00acde820b4"
        }
      },
      {
        "id": "binomialCoefficient",
        "type": "snippetListing",
        "title": "binomialCoefficient",
        "attributes": {
          "text": "Evaluates the binomial coefficient of two integers `n` and `k`.\n\nUse `Number.isNaN()` to check if any of the two values is `NaN`.\nCheck if `k` is less than `0`, greater than or equal to `n`, equal to `1` or `n - 1` and return the appropriate result.\nCheck if `n - k` is less than `k` and switch their values accordingly.\nLoop from `2` through `k` and calculate the binomial coefficient.\nUse `Math.round()` to account for rounding errors in the calculation.\n\n",
          "tags": [
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "0f36f6b8c7f803a55d8e888c8794cacba02db79c4d54043a8ddc71249c2f8a9f"
        }
      },
      {
        "id": "bottomVisible",
        "type": "snippetListing",
        "title": "bottomVisible",
        "attributes": {
          "text": "Returns `true` if the bottom of the page is visible, `false` otherwise.\n\nUse `scrollY`, `scrollHeight` and `clientHeight` to determine if the bottom of the page is visible.\n\n",
          "tags": [
            "browser",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "9c2b4a28ae4f39cc034dc75e98d2f405af6113541f796041f142b85e90e27800"
        }
      },
      {
        "id": "btoa",
        "type": "snippetListing",
        "title": "btoa",
        "attributes": {
          "text": "Creates a base-64 encoded ASCII string from a String object in which each character in the string is treated as a byte of binary data.\n\nCreate a `Buffer` for the given string with binary encoding and use `Buffer.toString('base64')` to return the encoded string.\n\n",
          "tags": [
            "node",
            "string",
            "utility",
            "beginner"
          ]
        },
        "meta": {
          "hash": "1c7836009987b8b1097b54a84c38144f6cb643477f08f00b1a37e274cf0c9f78"
        }
      },
      {
        "id": "byteSize",
        "type": "snippetListing",
        "title": "byteSize",
        "attributes": {
          "text": "Returns the length of a string in bytes.\n\nConvert a given string to a [`Blob` Object](https://developer.mozilla.org/en-US/docs/Web/API/Blob) and find its `size`.\n\n",
          "tags": [
            "string",
            "beginner"
          ]
        },
        "meta": {
          "hash": "c347c3d7b5fdc40df6d480810318d1ba644a74719bda3708b3ee3290f0ff953f"
        }
      },
      {
        "id": "call",
        "type": "snippetListing",
        "title": "call",
        "attributes": {
          "text": "Given a key and a set of arguments, call them when given a context. Primarily useful in composition.\n\nUse a closure to call a stored key with stored arguments.\n\n",
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "8b606a9b76e65d602238eb487d504dda0f1fe8bba9166ae2accbc7984c8d6530"
        }
      },
      {
        "id": "capitalize",
        "type": "snippetListing",
        "title": "capitalize",
        "attributes": {
          "text": "Capitalizes the first letter of a string.\n\nUse array destructuring and `String.prototype.toUpperCase()` to capitalize first letter, `...rest` to get array of characters after first letter and then `Array.prototype.join('')` to make it a string again.\nOmit the `lowerRest` parameter to keep the rest of the string intact, or set it to `true` to convert to lowercase.\n\n",
          "tags": [
            "string",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "0c94a28b30fdfe112c8981a86868917d24cc5ddd1c84212a29783cec2d3a5ab4"
        }
      },
      {
        "id": "capitalizeEveryWord",
        "type": "snippetListing",
        "title": "capitalizeEveryWord",
        "attributes": {
          "text": "Capitalizes the first letter of every word in a string.\n\nUse `String.prototype.replace()` to match the first character of each word and `String.prototype.toUpperCase()` to capitalize it.\n\n",
          "tags": [
            "string",
            "regexp",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "aaf38afdc8033b2070b0e29ddb380db8570bbed490c6f39f55ff95167cdded8e"
        }
      },
      {
        "id": "castArray",
        "type": "snippetListing",
        "title": "castArray",
        "attributes": {
          "text": "Casts the provided value as an array if it's not one.\n\nUse `Array.prototype.isArray()` to determine if `val` is an array and return it as-is or encapsulated in an array accordingly.\n\n",
          "tags": [
            "utility",
            "array",
            "type",
            "beginner"
          ]
        },
        "meta": {
          "hash": "307add91ea4d5c2a122256f799120f580ac235567523dddeeadd6500f1e81e94"
        }
      },
      {
        "id": "chainAsync",
        "type": "snippetListing",
        "title": "chainAsync",
        "attributes": {
          "text": "Chains asynchronous functions.\n\nLoop through an array of functions containing asynchronous events, calling `next` when each asynchronous event has completed.\n\n",
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "cd48981af62f6ba75694f796fc5537e6af53a58045465ebd52f8bdd1a1f892af"
        }
      },
      {
        "id": "checkProp",
        "type": "snippetListing",
        "title": "checkProp",
        "attributes": {
          "text": "Given a `predicate` function and a `prop` string, this curried function will then take an `object` to inspect by calling the property and passing it to the predicate.\n\nSummon `prop` on `obj`, pass it to a provided `predicate` function and return a masked boolean.\n\n",
          "tags": [
            "function",
            "object",
            "utility",
            "beginner"
          ]
        },
        "meta": {
          "hash": "52eca7b91d4205abe619c672895a773fc7ed7c2e151fd37e83ceda54ee74ad71"
        }
      },
      {
        "id": "chunk",
        "type": "snippetListing",
        "title": "chunk",
        "attributes": {
          "text": "Chunks an array into smaller arrays of a specified size.\n\nUse `Array.from()` to create a new array, that fits the number of chunks that will be produced.\nUse `Array.prototype.slice()` to map each element of the new array to a chunk the length of `size`.\nIf the original array can't be split evenly, the final chunk will contain the remaining elements.\n\n",
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "4af3783b8b490cdf70853b0a01780244556a18a7398f5bef123e4f39edbadebe"
        }
      },
      {
        "id": "clampNumber",
        "type": "snippetListing",
        "title": "clampNumber",
        "attributes": {
          "text": "Clamps `num` within the inclusive range specified by the boundary values `a` and `b`.\n\nIf `num` falls within the range, return `num`.\nOtherwise, return the nearest number in the range.\n\n",
          "tags": [
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "32fc5181c38c6d5bb16ac7373b68ad971c6b3cff6b80aee8cb69c296d47d0607"
        }
      },
      {
        "id": "cloneRegExp",
        "type": "snippetListing",
        "title": "cloneRegExp",
        "attributes": {
          "text": "Clones a regular expression.\n\nUse `new RegExp()`, `RegExp.source` and `RegExp.flags` to clone the given regular expression.\n\n",
          "tags": [
            "utility",
            "regexp",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "3b7e9a506c229c792da093336574e3524cd1a8c794d18fc450f469f171ff83cf"
        }
      },
      {
        "id": "coalesce",
        "type": "snippetListing",
        "title": "coalesce",
        "attributes": {
          "text": "Returns the first defined, non-null argument.\n\nUse `Array.prototype.find()` and `Array.prototype.includes()` to find the first value that is not equal to `undefined` or `null`.\n\n",
          "tags": [
            "utility",
            "beginner"
          ]
        },
        "meta": {
          "hash": "7c0db11447039e7d9bce2ed420ca1f69671b25928d272596587192a84aa78e31"
        }
      },
      {
        "id": "coalesceFactory",
        "type": "snippetListing",
        "title": "coalesceFactory",
        "attributes": {
          "text": "Returns a customized coalesce function that returns the first argument that returns `true` from the provided argument validation function.\n\nUse `Array.prototype.find()` to return the first argument that returns `true` from the provided argument validation function.\n\n",
          "tags": [
            "utility",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "b85ec57d815ff34ba3906195440fce5d2ad9f33b64d7d96159c0e1125fee283c"
        }
      },
      {
        "id": "collectInto",
        "type": "snippetListing",
        "title": "collectInto",
        "attributes": {
          "text": "Changes a function that accepts an array into a variadic function.\n\nGiven a function, return a closure that collects all inputs into an array-accepting function.\n\n",
          "tags": [
            "function",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "cbf8e15f8c0f47c8e38f6f070ff90ac694aab206cc57ceef7e457d93d794e69c"
        }
      },
      {
        "id": "colorize",
        "type": "snippetListing",
        "title": "colorize",
        "attributes": {
          "text": "Add special characters to text to print in color in the console (combined with `console.log()`).\n\nUse template literals and special characters to add the appropriate color code to the string output.\nFor background colors, add a special character that resets the background color at the end of the string.\n\n",
          "tags": [
            "node",
            "utility",
            "string",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "1ce726b8cbc9f87ff8ff6d68e0678325523b1118fa038b97f53ddad9031dbe23"
        }
      },
      {
        "id": "compact",
        "type": "snippetListing",
        "title": "compact",
        "attributes": {
          "text": "Removes falsy values from an array.\n\nUse `Array.prototype.filter()` to filter out falsy values (`false`, `null`, `0`, `\"\"`, `undefined`, and `NaN`).\n\n",
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "fdd7fd5631e5c1b541eff445f3388488dc060d435e339d9c0f1f257d5733e2fe"
        }
      },
      {
        "id": "compactWhitespace",
        "type": "snippetListing",
        "title": "compactWhitespace",
        "attributes": {
          "text": "Returns a string with whitespaces compacted.\n\nUse `String.prototype.replace()` with a regular expression to replace all occurrences of 2 or more whitespace characters with a single space.\n\n",
          "tags": [
            "string",
            "regexp",
            "beginner"
          ]
        },
        "meta": {
          "hash": "7b6007e94c262a97cfab69ddb111d101103c095dbf2fd7680053d8733e6f2914"
        }
      },
      {
        "id": "compose",
        "type": "snippetListing",
        "title": "compose",
        "attributes": {
          "text": "Performs right-to-left function composition.\n\nUse `Array.prototype.reduce()` to perform right-to-left function composition.\nThe last (rightmost) function can accept one or more arguments; the remaining functions must be unary.\n\n",
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "200b26d1e1016c56ba796665b94266e57127b6bcf23bb00b702df01676f95443"
        }
      },
      {
        "id": "composeRight",
        "type": "snippetListing",
        "title": "composeRight",
        "attributes": {
          "text": "Performs left-to-right function composition.\n\nUse `Array.prototype.reduce()` to perform left-to-right function composition.\nThe first (leftmost) function can accept one or more arguments; the remaining functions must be unary.\n\n",
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "90b2780517322e1c847b7e7ae5325f1e69765eb22b72cf3472e1cd7d07f06347"
        }
      },
      {
        "id": "containsWhitespace",
        "type": "snippetListing",
        "title": "containsWhitespace",
        "attributes": {
          "text": "Returns `true` if the given string contains any whitespace characters, `false` otherwise.\n\nUse `RegExp.prototype.test()` with an appropriate regular expression to check if the given string contains any whitespace characters.\n\n",
          "tags": [
            "string",
            "regexp",
            "beginner"
          ]
        },
        "meta": {
          "hash": "47f23b75a3d6600f5eb67b2a8535e83b6467c5f63e6184c774ddaa2421f198a3"
        }
      },
      {
        "id": "converge",
        "type": "snippetListing",
        "title": "converge",
        "attributes": {
          "text": "Accepts a converging function and a list of branching functions and returns a function that applies each branching function to the arguments and the results of the branching functions are passed as arguments to the converging function.\n\nUse `Array.prototype.map()` and `Function.prototype.apply()` to apply each function to the given arguments.\nUse the spread operator (`...`) to call `coverger` with the results of all other functions.\n\n",
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "37cf3e2c4a2b41cb94eab31680088761236be2fc817c2c4322a0f9f1a16ae475"
        }
      },
      {
        "id": "copyToClipboard",
        "type": "snippetListing",
        "title": "copyToClipboard",
        "attributes": {
          "text": "Copy a string to the clipboard. \nOnly works as a result of user action (i.e. inside a `click` event listener).\n\n⚠️ **NOTICE:** The same functionality can be easily implemented by using the new asynchronous Clipboard API, which is still experimental but should be used in the future instead of this snippet. Find out more about it [here](https://github.com/w3c/clipboard-apis/blob/master/explainer.adoc#writing-to-the-clipboard).\n\nCreate a new `<textarea>` element, fill it with the supplied data and add it to the HTML document.\nUse `Selection.getRangeAt()`to store the selected range (if any).\nUse `document.execCommand('copy')` to copy to the clipboard.\nRemove the `<textarea>` element from the HTML document.\nFinally, use `Selection().addRange()` to recover the original selected range (if any).\n\n",
          "tags": [
            "browser",
            "string",
            "advanced"
          ]
        },
        "meta": {
          "hash": "33014c31be5dadcdb16c56726db905ff10b9878a5f4e85f23d9ee303e71f0039"
        }
      },
      {
        "id": "countBy",
        "type": "snippetListing",
        "title": "countBy",
        "attributes": {
          "text": "Groups the elements of an array based on the given function and returns the count of elements in each group.\n\nUse `Array.prototype.map()` to map the values of an array to a function or property name.\nUse `Array.prototype.reduce()` to create an object, where the keys are produced from the mapped results.\n\n",
          "tags": [
            "array",
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "d5c19dc814e9776782419f3e560dd132c1fdbf0493162e8a7a05b6ac84991f87"
        }
      },
      {
        "id": "counter",
        "type": "snippetListing",
        "title": "counter",
        "attributes": {
          "text": "Creates a counter with the specified range, step and duration for the specified selector.\n\nCheck if `step` has the proper sign and change it accordingly.\nUse `setInterval()` in combination with `Math.abs()` and `Math.floor()` to calculate the time between each new text draw.\nUse `document.querySelector().innerHTML` to update the value of the selected element.\nOmit the fourth parameter, `step`, to use a default step of `1`.\nOmit the fifth parameter, `duration`, to use a default duration of `2000`ms.\n\n",
          "tags": [
            "browser",
            "advanced"
          ]
        },
        "meta": {
          "hash": "3143db5361ae9b8f20ee19ab2d5baeeebb976a195f60110522b558873204142c"
        }
      },
      {
        "id": "countOccurrences",
        "type": "snippetListing",
        "title": "countOccurrences",
        "attributes": {
          "text": "Counts the occurrences of a value in an array.\n\nUse `Array.prototype.reduce()` to increment a counter each time you encounter the specific value inside the array.\n\n",
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "1ae0916c575409305f4e1f1a2af7966f0f4b9260a9986711805a936ac6ebd9f7"
        }
      },
      {
        "id": "createDirIfNotExists",
        "type": "snippetListing",
        "title": "createDirIfNotExists",
        "attributes": {
          "text": "Creates a directory, if it does not exist.\n\nUse `fs.existsSync()` to check if the directory exists, `fs.mkdirSync()` to create it.\n\n",
          "tags": [
            "node",
            "beginner"
          ]
        },
        "meta": {
          "hash": "233be96d6436773d7f6ceb16ad0cf63bdc63a961b59fc1faa11707af182ed510"
        }
      },
      {
        "id": "createElement",
        "type": "snippetListing",
        "title": "createElement",
        "attributes": {
          "text": "Creates an element from a string (without appending it to the document). \nIf the given string contains multiple elements, only the first one will be returned.\n\nUse `document.createElement()` to create a new element.\nSet its `innerHTML` to the string supplied as the argument. \nUse `ParentNode.firstElementChild` to return the element version of the string.\n\n",
          "tags": [
            "browser",
            "utility",
            "beginner"
          ]
        },
        "meta": {
          "hash": "d162fbc50166f304216db6ea700e5fc7f428ea33d50b204ae921e1c58552a4e0"
        }
      },
      {
        "id": "createEventHub",
        "type": "snippetListing",
        "title": "createEventHub",
        "attributes": {
          "text": "Creates a pub/sub ([publish–subscribe](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)) event hub with `emit`, `on`, and `off` methods.\n\nUse `Object.create(null)` to create an empty `hub` object that does not inherit properties from `Object.prototype`.\nFor `emit`, resolve the array of handlers based on the `event` argument and then run each one with `Array.prototype.forEach()` by passing in the data as an argument.\nFor `on`, create an array for the event if it does not yet exist, then use `Array.prototype.push()` to add the handler\nto the array.\nFor `off`, use `Array.prototype.findIndex()` to find the index of the handler in the event array and remove it using `Array.prototype.splice()`.\n\n",
          "tags": [
            "browser",
            "event",
            "advanced"
          ]
        },
        "meta": {
          "hash": "bc41a9baac70cfa4415f23550ff0f0ac92ad5aa2192e577437e72c732956ada7"
        }
      },
      {
        "id": "CSVToArray",
        "type": "snippetListing",
        "title": "CSVToArray",
        "attributes": {
          "text": "Converts a comma-separated values (CSV) string to a 2D array.\n\nUse `Array.prototype.slice()` and `Array.prototype.indexOf('\\n')` to remove the first row (title row) if `omitFirstRow` is `true`.\nUse `String.prototype.split('\\n')` to create a string for each row, then `String.prototype.split(delimiter)` to separate the values in each row.\nOmit the second argument, `delimiter`, to use a default delimiter of `,`.\nOmit the third argument, `omitFirstRow`, to include the first row (title row) of the CSV string.\n\n",
          "tags": [
            "string",
            "array",
            "utility",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "3169ab83e588063262fa6a01f7d7df7bd9521345c65a7c7f874f577478c90305"
        }
      },
      {
        "id": "CSVToJSON",
        "type": "snippetListing",
        "title": "CSVToJSON",
        "attributes": {
          "text": "Converts a comma-separated values (CSV) string to a 2D array of objects.\nThe first row of the string is used as the title row.\n\nUse `Array.prototype.slice()` and `Array.prototype.indexOf('\\n')` and `String.prototype.split(delimiter)` to separate the first row (title row) into values.\nUse `String.prototype.split('\\n')` to create a string for each row, then `Array.prototype.map()` and `String.prototype.split(delimiter)` to separate the values in each row.\nUse `Array.prototype.reduce()` to create an object for each row's values, with the keys parsed from the title row.\nOmit the second argument, `delimiter`, to use a default delimiter of `,`.\n\n",
          "tags": [
            "string",
            "array",
            "object",
            "advanced"
          ]
        },
        "meta": {
          "hash": "786d9d7dc8544fd49678b8bb71eb4a068ade86a30b2a58d07bef20da2fc28db1"
        }
      },
      {
        "id": "currentURL",
        "type": "snippetListing",
        "title": "currentURL",
        "attributes": {
          "text": "Returns the current URL.\n\nUse `window.location.href` to get the current URL.\n\n",
          "tags": [
            "browser",
            "url",
            "beginner"
          ]
        },
        "meta": {
          "hash": "a28cd0828b50d589cda564a36076a297c0181598d7400aefe5184412682485e3"
        }
      },
      {
        "id": "curry",
        "type": "snippetListing",
        "title": "curry",
        "attributes": {
          "text": "Curries a function.\n\nUse recursion.\nIf the number of provided arguments (`args`) is sufficient, call the passed function `fn`.\nOtherwise, return a curried function `fn` that expects the rest of the arguments.\nIf you want to curry a function that accepts a variable number of arguments (a variadic function, e.g. `Math.min()`), you can optionally pass the number of arguments to the second parameter `arity`.\n\n",
          "tags": [
            "function",
            "recursion",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "80e76d37fa79511f3256d5e1c113d223fc8875fd9d6cfe8b7530b567def30456"
        }
      },
      {
        "id": "dayOfYear",
        "type": "snippetListing",
        "title": "dayOfYear",
        "attributes": {
          "text": "Gets the day of the year from a `Date` object.\n\nUse `new Date()` and `Date.prototype.getFullYear()` to get the first day of the year as a `Date` object, subtract it from the provided `date` and divide with the milliseconds in each day to get the result.\nUse `Math.floor()` to appropriately round the resulting day count to an integer.\n\n",
          "tags": [
            "date",
            "beginner"
          ]
        },
        "meta": {
          "hash": "9057876a6323ed24bbc3db2a6db7ddc8bdf59663493d07935b9c9238d879a689"
        }
      },
      {
        "id": "debounce",
        "type": "snippetListing",
        "title": "debounce",
        "attributes": {
          "text": "Creates a debounced function that delays invoking the provided function until at least `ms` milliseconds have elapsed since the last time it was invoked.\n\nEach time the debounced function is invoked, clear the current pending timeout with `clearTimeout()` and use `setTimeout()` to create a new timeout that delays invoking the function until at least `ms` milliseconds has elapsed. Use `Function.prototype.apply()` to apply the `this` context to the function and provide the necessary arguments.\nOmit the second argument, `ms`, to set the timeout at a default of 0 ms.\n\n",
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "bbf4d763429f499c0e1c3feb381e6291d3643d45613d25812ac5c47789d4d4f9"
        }
      },
      {
        "id": "decapitalize",
        "type": "snippetListing",
        "title": "decapitalize",
        "attributes": {
          "text": "Decapitalizes the first letter of a string.\n\nUse array destructuring and `String.toLowerCase()` to decapitalize first letter, `...rest` to get array of characters after first letter and then `Array.prototype.join('')` to make it a string again.\nOmit the `upperRest` parameter to keep the rest of the string intact, or set it to `true` to convert to uppercase.\n\n",
          "tags": [
            "string",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "cb1b9240e8dae6a351937afeeccb1e200017a3729844b812721b8a8fcffdaa54"
        }
      },
      {
        "id": "deepClone",
        "type": "snippetListing",
        "title": "deepClone",
        "attributes": {
          "text": "Creates a deep clone of an object.\n\nUse recursion.\nCheck if the passed object is `null` and, if so, return `null`.\nUse `Object.assign()` and an empty object (`{}`) to create a shallow clone of the original.\nUse `Object.keys()` and `Array.prototype.forEach()` to determine which key-value pairs need to be deep cloned.\n\n",
          "tags": [
            "object",
            "recursion",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "5ab25ab96afd4f1f481fc318b5b290ba8c57a468ef6bca0ca200cfb7fcf3ba9f"
        }
      },
      {
        "id": "deepFlatten",
        "type": "snippetListing",
        "title": "deepFlatten",
        "attributes": {
          "text": "Deep flattens an array.\n\nUse recursion.\nUse `Array.prototype.concat()` with an empty array (`[]`) and the spread operator (`...`) to flatten an array.\nRecursively flatten each element that is an array.\n\n",
          "tags": [
            "array",
            "recursion",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "2c9d854091ce0c7eedb607acaba299a46fd02b9d0ee5bc8aebe95bc2303d8a0d"
        }
      },
      {
        "id": "deepFreeze",
        "type": "snippetListing",
        "title": "deepFreeze",
        "attributes": {
          "text": "Deep freezes an object.\n\nUse `Object.keys()` to get all the properties of the passed object, `Array.prototype.forEach()` to iterate over them.\nCall `Object.freeze(obj)` recursively on all properties, checking if each one is frozen using `Object.isFrozen()` and applying `deepFreeze()` as necessary.\nFinally, use `Object.freeze()` to freeze the given object.\n\n",
          "tags": [
            "object",
            "recursion",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "28f2ec9d8a34e4e57ab8ebb28ff23c62cae8b71cc3269946b760abdd57be9135"
        }
      },
      {
        "id": "deepGet",
        "type": "snippetListing",
        "title": "deepGet",
        "attributes": {
          "text": "Returns the target value in a nested JSON object, based on the `keys` array.\n\nCompare the keys you want in the nested JSON object as an `Array`.\nUse `Array.prototype.reduce()` to get value from nested JSON object one by one. \nIf the key exists in object, return target value, otherwise, return `null`.\n\n",
          "tags": [
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "818735e4b97db79e60544be6339c8e260b630f375b542ea51e1bc60e4171be42"
        }
      },
      {
        "id": "deepMapKeys",
        "type": "snippetListing",
        "title": "deepMapKeys",
        "attributes": {
          "text": "Deep maps an object's keys.\n\nCreates an object with the same values as the provided object and keys generated by running the provided function for each key.\nUse `Object.keys(obj)` to iterate over the object's keys. \nUse `Array.prototype.reduce()` to create a new object with the same values and mapped keys using `fn`.\n\n",
          "tags": [
            "object",
            "recursion",
            "advanced"
          ]
        },
        "meta": {
          "hash": "7a228b650ff668f697e524e0d27ebeff1bfa35e04333b6cd5e742ff63bfea25d"
        }
      },
      {
        "id": "defaults",
        "type": "snippetListing",
        "title": "defaults",
        "attributes": {
          "text": "Assigns default values for all properties in an object that are `undefined`.\n\nUse `Object.assign()` to create a new empty object and copy the original one to maintain key order, use `Array.prototype.reverse()` and the spread operator `...` to combine the default values from left to right, finally use `obj` again to overwrite properties that originally had a value.\n\n",
          "tags": [
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "f891cda1417a4f1c3646c3d7451aad99833062eb28a9fcad4d414b98d1925bc6"
        }
      },
      {
        "id": "defer",
        "type": "snippetListing",
        "title": "defer",
        "attributes": {
          "text": "Defers invoking a function until the current call stack has cleared.\n\nUse `setTimeout()` with a timeout of 1ms to add a new event to the browser event queue and allow the rendering engine to complete its work. Use the spread (`...`) operator to supply the function with an arbitrary number of arguments.\n\n",
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "7a750cc36b1a97252c4048a6896e0e01816ccf0bcb6db634db42b4ae5be1ed3b"
        }
      },
      {
        "id": "degreesToRads",
        "type": "snippetListing",
        "title": "degreesToRads",
        "attributes": {
          "text": "Converts an angle from degrees to radians.\n\nUse `Math.PI` and the degree to radian formula to convert the angle from degrees to radians.\n\n",
          "tags": [
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "2bc5b5959725150f5c678769b6dffc05f44692ad2e201b9ac1ff40c00e5dc419"
        }
      },
      {
        "id": "delay",
        "type": "snippetListing",
        "title": "delay",
        "attributes": {
          "text": "Invokes the provided function after `wait` milliseconds.\n\nUse `setTimeout()` to delay execution of `fn`.\nUse the spread (`...`) operator to supply the function with an arbitrary number of arguments.\n\n",
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "cfa17f3a578f2790d22b5054c728a07515678b72eccef8500218b78d8a3d9e4b"
        }
      },
      {
        "id": "detectDeviceType",
        "type": "snippetListing",
        "title": "detectDeviceType",
        "attributes": {
          "text": "Detects whether the website is being opened in a mobile device or a desktop/laptop.\n\nUse a regular expression to test the `navigator.userAgent` property to figure out if the device is a mobile device or a desktop/laptop.\n\n",
          "tags": [
            "browser",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "ab72248448b94658fbbe2842d7feb3ec1621703384472f424a2355634d1aa774"
        }
      },
      {
        "id": "difference",
        "type": "snippetListing",
        "title": "difference",
        "attributes": {
          "text": "Returns the difference between two arrays.\n\nCreate a `Set` from `b`, then use `Array.prototype.filter()` on `a` to only keep values not contained in `b`.\n\n",
          "tags": [
            "array",
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "7e49ef3e36b2fe6f1cc680e2be782bda7af3e05fa75b4bacf59c63428a6ebf50"
        }
      },
      {
        "id": "differenceBy",
        "type": "snippetListing",
        "title": "differenceBy",
        "attributes": {
          "text": "Returns the difference between two arrays, after applying the provided function to each array element of both.\n\nCreate a `Set` by applying `fn` to each element in `b`, then use `Array.prototype.map()` to apply `fn` to each element in `a`, then `Array.prototype.filter()`\n\n",
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "1be0503ca3298cf2c05ff64889181fc35e682785476bb5617d439978b80fd35e"
        }
      },
      {
        "id": "differenceWith",
        "type": "snippetListing",
        "title": "differenceWith",
        "attributes": {
          "text": "Filters out all values from an array for which the comparator function does not return `true`.\n\nUse `Array.prototype.filter()` and `Array.prototype.findIndex()` to find the appropriate values.\n\n",
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "b265f3860be86344badb79b74074e3dfe37da6b2c4ff95bd8865b6e6f7c0d73b"
        }
      },
      {
        "id": "dig",
        "type": "snippetListing",
        "title": "dig",
        "attributes": {
          "text": "Returns the target value in a nested JSON object, based on the given key.\n\nUse the `in` operator to check if `target` exists in `obj`.\nIf found, return the value of `obj[target]`, otherwise use `Object.values(obj)` and `Array.prototype.reduce()` to recursively call `dig` on each nested object until the first matching key/value pair is found.\n\n",
          "tags": [
            "object",
            "recursion",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "5f38360819f9225b887a94221bfee1a80f1bcc224a364440b3388f60491b03ba"
        }
      },
      {
        "id": "digitize",
        "type": "snippetListing",
        "title": "digitize",
        "attributes": {
          "text": "Converts a number to an array of digits.\n\nConvert the number to a string, using the spread operator (`...`) to build an array.\nUse `Array.prototype.map()` and `parseInt()` to transform each value to an integer.\n\n",
          "tags": [
            "math",
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "adc3d101e4cdb91158dceb8053b684dfdc1f16cedcbf6cf6429fc4ed8a164b59"
        }
      },
      {
        "id": "distance",
        "type": "snippetListing",
        "title": "distance",
        "attributes": {
          "text": "Returns the distance between two points.\n\nUse `Math.hypot()` to calculate the Euclidean distance between two points.\n\n",
          "tags": [
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "4a9da71c7d722ae58f12c73771d00cab86e74c3167254451660d26197ba6bd19"
        }
      },
      {
        "id": "drop",
        "type": "snippetListing",
        "title": "drop",
        "attributes": {
          "text": "Returns a new array with `n` elements removed from the left.\n\nUse `Array.prototype.slice()` to remove the specified number of elements from the left.\n\n",
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "bf545684ca0c4abe2fc44e3fcaf15df7986430630e306ad3c009e629e63a1fab"
        }
      },
      {
        "id": "dropRight",
        "type": "snippetListing",
        "title": "dropRight",
        "attributes": {
          "text": "Returns a new array with `n` elements removed from the right.\n\nUse `Array.prototype.slice()` to remove the specified number of elements from the right.\n\n",
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "36905bae3e3177bb5999580342141975020ea45d7162f240af5cc418425c871a"
        }
      },
      {
        "id": "dropRightWhile",
        "type": "snippetListing",
        "title": "dropRightWhile",
        "attributes": {
          "text": "Removes elements from the end of an array until the passed function returns `true`. Returns the remaining elements in the array.\n\nLoop through the array, using `Array.prototype.slice()` to drop the last element of the array until the returned value from the function is `true`.\nReturns the remaining elements.\n\n",
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "252b49a7c475d830e22c7e6dbae7df45be37a97b400e93125935c2de5c24b0a1"
        }
      },
      {
        "id": "dropWhile",
        "type": "snippetListing",
        "title": "dropWhile",
        "attributes": {
          "text": "Removes elements in an array until the passed function returns `true`. Returns the remaining elements in the array.\n\nLoop through the array, using `Array.prototype.slice()` to drop the first element of the array until the returned value from the function is `true`.\nReturns the remaining elements.\n\n",
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "909ed2f1e923d0abbec9065f43469f7c3990c0d1f65befd24b4f0cdd85e8e5ba"
        }
      },
      {
        "id": "elementContains",
        "type": "snippetListing",
        "title": "elementContains",
        "attributes": {
          "text": "Returns `true` if the `parent` element contains the `child` element, `false` otherwise.\n\nCheck that `parent` is not the same element as `child`, use `parent.contains(child)` to check if the `parent` element contains the `child` element.\n\n",
          "tags": [
            "browser",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "2c6c186cf8b62305ab88307d24b413acd96dba006c80ee7835e5fb8e33e72256"
        }
      },
      {
        "id": "elementIsVisibleInViewport",
        "type": "snippetListing",
        "title": "elementIsVisibleInViewport",
        "attributes": {
          "text": "Returns `true` if the element specified is visible in the viewport, `false` otherwise.\n\nUse `Element.getBoundingClientRect()` and the `window.inner(Width|Height)` values\nto determine if a given element is visible in the viewport.\nOmit the second argument to determine if the element is entirely visible, or specify `true` to determine if\nit is partially visible.\n\n",
          "tags": [
            "browser",
            "advanced"
          ]
        },
        "meta": {
          "hash": "46fed254db32437f3f54938d293aee32ebda0bac4dda24e6af33c039f4bc6f9f"
        }
      },
      {
        "id": "elo",
        "type": "snippetListing",
        "title": "elo",
        "attributes": {
          "text": "Computes the new ratings between two or more opponents using the [Elo rating system](https://en.wikipedia.org/wiki/Elo_rating_system). It takes an array\nof pre-ratings and returns an array containing post-ratings.\nThe array should be ordered from best performer to worst performer (winner -> loser).\n\nUse the exponent `**` operator and math operators to compute the expected score (chance of winning).\nof each opponent and compute the new rating for each.\nLoop through the ratings, using each permutation to compute the post-Elo rating for each player in a pairwise fashion. \nOmit the second argument to use the default `kFactor` of 32.\n\n",
          "tags": [
            "math",
            "array",
            "advanced"
          ]
        },
        "meta": {
          "hash": "7f506f1d9999e20da3deebf7d51b80d9f56f9d87bddac6637faf63316bcd1790"
        }
      },
      {
        "id": "equals",
        "type": "snippetListing",
        "title": "equals",
        "attributes": {
          "text": "Performs a deep comparison between two values to determine if they are equivalent.\n\nCheck if the two values are identical, if they are both `Date` objects with the same time, using `Date.getTime()` or if they are both non-object values with an equivalent value (strict comparison).\nCheck if only one value is `null` or `undefined` or if their prototypes differ.\nIf none of the above conditions are met, use `Object.keys()` to check if both values have the same number of keys, then use `Array.prototype.every()` to check if every key in the first value exists in the second one and if they are equivalent by calling this method recursively.\n\n",
          "tags": [
            "object",
            "array",
            "type",
            "advanced"
          ]
        },
        "meta": {
          "hash": "7738cec1d3804a4542cd80899d7f6d2890d8950aae5751a76e733b0ed270d802"
        }
      },
      {
        "id": "escapeHTML",
        "type": "snippetListing",
        "title": "escapeHTML",
        "attributes": {
          "text": "Escapes a string for use in HTML.\n\nUse `String.prototype.replace()` with a regexp that matches the characters that need to be escaped, using a callback function to replace each character instance with its associated escaped character using a dictionary (object).\n\n",
          "tags": [
            "string",
            "browser",
            "regexp",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "456a613a9ad94c219753a2ad2ad6f5e1668b974e9f503d221791745c570a35d4"
        }
      },
      {
        "id": "escapeRegExp",
        "type": "snippetListing",
        "title": "escapeRegExp",
        "attributes": {
          "text": "Escapes a string to use in a regular expression.\n\nUse `String.prototype.replace()` to escape special characters.\n\n",
          "tags": [
            "string",
            "regexp",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "91c52b53fe79cc811678086b90b073f84bf168a1bd59dfa6796462ac96adfb17"
        }
      },
      {
        "id": "everyNth",
        "type": "snippetListing",
        "title": "everyNth",
        "attributes": {
          "text": "Returns every nth element in an array.\n\nUse `Array.prototype.filter()` to create a new array that contains every nth element of a given array.\n\n",
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "a111e4110ff4fe4895ba42b32ed7cb294ab8a0b1103d43cf5bf2d0c483f2ec7e"
        }
      },
      {
        "id": "extendHex",
        "type": "snippetListing",
        "title": "extendHex",
        "attributes": {
          "text": "Extends a 3-digit color code to a 6-digit color code.\n\nUse `Array.prototype.map()`, `String.prototype.split()` and `Array.prototype.join()` to join the mapped array for converting a 3-digit RGB notated hexadecimal color-code to the 6-digit form.\n`Array.prototype.slice()` is used to remove `#` from string start since it's added once.\n\n",
          "tags": [
            "utility",
            "string",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "34df599e00a3541dfecf1c0780514006d8d6cadfe28905ead9e782cc3903902c"
        }
      },
      {
        "id": "factorial",
        "type": "snippetListing",
        "title": "factorial",
        "attributes": {
          "text": "Calculates the factorial of a number.\n\nUse recursion.\nIf `n` is less than or equal to `1`, return `1`.\nOtherwise, return the product of `n` and the factorial of `n - 1`.\nThrows an exception if `n` is a negative number.\n\n",
          "tags": [
            "math",
            "recursion",
            "beginner"
          ]
        },
        "meta": {
          "hash": "55b1ce0a892110d792a9487e40331774015525479faa2b8961f6c2ea6291c27b"
        }
      },
      {
        "id": "fibonacci",
        "type": "snippetListing",
        "title": "fibonacci",
        "attributes": {
          "text": "Generates an array, containing the Fibonacci sequence, up until the nth term.\n\nCreate an empty array of the specific length, initializing the first two values (`0` and `1`).\nUse `Array.prototype.reduce()` to add values into the array, using the sum of the last two values, except for the first two.\n\n",
          "tags": [
            "math",
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "156e9481207c96ff8e9fe054a5d72144933a5a0f4215e721925e3da0054f6be2"
        }
      },
      {
        "id": "filterNonUnique",
        "type": "snippetListing",
        "title": "filterNonUnique",
        "attributes": {
          "text": "Filters out the non-unique values in an array.\n\nUse `Array.prototype.filter()` for an array containing only the unique values.\n\n",
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "f9abec985874548f8020c4b1a3f657981989c08e1c8d5547f21d1f36566b093c"
        }
      },
      {
        "id": "filterNonUniqueBy",
        "type": "snippetListing",
        "title": "filterNonUniqueBy",
        "attributes": {
          "text": "Filters out the non-unique values in an array, based on a provided comparator function.\n\nUse `Array.prototype.filter()` and `Array.prototype.every()` for an array containing only the unique values, based on the comparator function, `fn`.\nThe comparator function takes four arguments: the values of the two elements being compared and their indexes.\n\n",
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "9179ddcbbbf42b58c2fa5b2f079154bee2739e5a843ed8be84a8dc0dc9946116"
        }
      },
      {
        "id": "findKey",
        "type": "snippetListing",
        "title": "findKey",
        "attributes": {
          "text": "Returns the first key that satisfies the provided testing function. Otherwise `undefined` is returned.\n\nUse `Object.keys(obj)` to get all the properties of the object, `Array.prototype.find()` to test the provided function for each key-value pair. The callback receives three arguments - the value, the key and the object.\n\n",
          "tags": [
            "object",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "cd829971748368811b0c202243f3d968be259e24805715b7459657394eb9f302"
        }
      },
      {
        "id": "findLast",
        "type": "snippetListing",
        "title": "findLast",
        "attributes": {
          "text": "Returns the last element for which the provided function returns a truthy value.\n\nUse `Array.prototype.filter()` to remove elements for which `fn` returns falsy values, `Array.prototype.pop()` to get the last one.\n\n",
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "2f79feebcfde7153bc7d457358d3ce9f0c544f98ea2cd35553a5d5e9ac88be6e"
        }
      },
      {
        "id": "findLastIndex",
        "type": "snippetListing",
        "title": "findLastIndex",
        "attributes": {
          "text": "Returns the index of the last element for which the provided function returns a truthy value.\n\nUse `Array.prototype.map()` to map each element to an array with its index and value.\nUse `Array.prototype.filter()` to remove elements for which `fn` returns falsy values, `Array.prototype.pop()` to get the last one.\n`-1` is the default value when not found.\n\n",
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "48e20e5a2457427add5094d4fb588bebb98c244178758610678d25fd64b60f6c"
        }
      },
      {
        "id": "findLastKey",
        "type": "snippetListing",
        "title": "findLastKey",
        "attributes": {
          "text": "Returns the last key that satisfies the provided testing function.\nOtherwise `undefined` is returned.\n\nUse `Object.keys(obj)` to get all the properties of the object, `Array.prototype.reverse()` to reverse their order and `Array.prototype.find()` to test the provided function for each key-value pair.\nThe callback receives three arguments - the value, the key and the object.\n\n",
          "tags": [
            "object",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "884ac6ea5ebaf84aa9d83bba6e2848e0b524fa4a39632cd96bf797474caf4b34"
        }
      },
      {
        "id": "flatten",
        "type": "snippetListing",
        "title": "flatten",
        "attributes": {
          "text": "Flattens an array up to the specified depth.\n\nUse recursion, decrementing `depth` by 1 for each level of depth.\nUse `Array.prototype.reduce()` and `Array.prototype.concat()` to merge elements or arrays.\nBase case, for `depth` equal to `1` stops recursion.\nOmit the second argument, `depth` to flatten only to a depth of `1` (single flatten).\n\n",
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "e1793f61af6def69138bf162d0efb8f11578e7be5d718e701075dab4c510ceaa"
        }
      },
      {
        "id": "flattenObject",
        "type": "snippetListing",
        "title": "flattenObject",
        "attributes": {
          "text": "Flatten an object with the paths for keys.\n\nUse recursion.\nUse `Object.keys(obj)` combined with `Array.prototype.reduce()` to convert every leaf node to a flattened path node.\nIf the value of a key is an object, the function calls itself with the appropriate `prefix` to create the path using `Object.assign()`.\nOtherwise, it adds the appropriate prefixed key-value pair to the accumulator object.\nYou should always omit the second argument, `prefix`, unless you want every key to have a prefix.\n\n",
          "tags": [
            "object",
            "recursion",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "5c49020c066977d2f001fb1101301768cb0e1a757ad76982c0cd0ea9b990e27c"
        }
      },
      {
        "id": "flip",
        "type": "snippetListing",
        "title": "flip",
        "attributes": {
          "text": "Flip takes a function as an argument, then makes the first argument the last.\n\nReturn a closure that takes variadic inputs, and splices the last argument to make it the first argument before applying the rest.\n\n",
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "553f8cccba3bd6339b01a926661a2a3fcca310f02bbb7402d1e0eeca5bf5d729"
        }
      },
      {
        "id": "forEachRight",
        "type": "snippetListing",
        "title": "forEachRight",
        "attributes": {
          "text": "Executes a provided function once for each array element, starting from the array's last element.\n\nUse `Array.prototype.slice(0)` to clone the given array, `Array.prototype.reverse()` to reverse it and `Array.prototype.forEach()` to iterate over the reversed array.\n\n",
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "31b710c7f120ba4e484fb3c782ab6cb3da0a47e84521220d474473229103ed5a"
        }
      },
      {
        "id": "formatDuration",
        "type": "snippetListing",
        "title": "formatDuration",
        "attributes": {
          "text": "Returns the human readable format of the given number of milliseconds.\n\nDivide `ms` with the appropriate values to obtain the appropriate values for `day`, `hour`, `minute`, `second` and `millisecond`.\nUse `Object.entries()` with `Array.prototype.filter()` to keep only non-zero values.\nUse `Array.prototype.map()` to create the string for each value, pluralizing appropriately.\nUse `String.prototype.join(', ')` to combine the values into a string.\n\n",
          "tags": [
            "date",
            "math",
            "string",
            "utility",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "176cd07a9486286924a7393fe631e83471e7123e3b6349309a7c1cee7746d764"
        }
      },
      {
        "id": "formToObject",
        "type": "snippetListing",
        "title": "formToObject",
        "attributes": {
          "text": "Encode a set of form elements as an `object`.\n\nUse the `FormData` constructor to convert the HTML `form` to `FormData`, `Array.from()` to convert to an array.\nCollect the object from the array, using `Array.prototype.reduce()`.\n\n",
          "tags": [
            "browser",
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "24c79c76a89e64ad0d4a29f542400937bf280f49cd7bbafff3e26b63f0c4ad4d"
        }
      },
      {
        "id": "forOwn",
        "type": "snippetListing",
        "title": "forOwn",
        "attributes": {
          "text": "Iterates over all own properties of an object, running a callback for each one.\n\nUse `Object.keys(obj)` to get all the properties of the object, `Array.prototype.forEach()` to run the provided function for each key-value pair. The callback receives three arguments - the value, the key and the object.\n\n",
          "tags": [
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "0f4525106d39a394413f7623eff35661baad618f49d7c2265496153804862c55"
        }
      },
      {
        "id": "forOwnRight",
        "type": "snippetListing",
        "title": "forOwnRight",
        "attributes": {
          "text": "Iterates over all own properties of an object in reverse, running a callback for each one.\n\nUse `Object.keys(obj)` to get all the properties of the object, `Array.prototype.reverse()` to reverse their order and `Array.prototype.forEach()` to run the provided function for each key-value pair. The callback receives three arguments - the value, the key and the object.\n\n",
          "tags": [
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "8810b76dac2c4294a0a029e697441ad73aa87f98a7b1698a61f31c62d5981ec8"
        }
      },
      {
        "id": "frequencies",
        "type": "snippetListing",
        "title": "frequencies",
        "attributes": {
          "text": "Returns an object with the unique values of an array as keys and their frequencies as the values.\n\nUse `Array.prototype.reduce()` to map unique values to an object's keys, adding to existing keys every time the same value is encountered.\n\n",
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "227fc1043f5a7850c32f4ecce686a97de0b8badf4d487462a1c25e8312465124"
        }
      },
      {
        "id": "fromCamelCase",
        "type": "snippetListing",
        "title": "fromCamelCase",
        "attributes": {
          "text": "Converts a string from camelcase.\n\nUse `String.prototype.replace()` to remove underscores, hyphens, and spaces and convert words to camelcase.\nOmit the second argument to use a default `separator` of `_`.\n\n",
          "tags": [
            "string",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "1b4fe94ee0e82ecd4c77de9ea258ded34a8a834da1bb021b5b25fe84ab8e4eea"
        }
      },
      {
        "id": "functionName",
        "type": "snippetListing",
        "title": "functionName",
        "attributes": {
          "text": "Logs the name of a function.\n\nUse `console.debug()` and the `name` property of the passed method to log the method's name to the `debug` channel of the console.\n\n",
          "tags": [
            "function",
            "utility",
            "beginner"
          ]
        },
        "meta": {
          "hash": "9f8947652b9c2faba5f1bda82f992bdc81a71c67374fcc843e96ce2a327a28db"
        }
      },
      {
        "id": "functions",
        "type": "snippetListing",
        "title": "functions",
        "attributes": {
          "text": "Returns an array of function property names from own (and optionally inherited) enumerable properties of an object.\n\nUse `Object.keys(obj)` to iterate over the object's own properties.\nIf `inherited` is `true`, use `Object.get.PrototypeOf(obj)` to also get the object's inherited properties.\nUse `Array.prototype.filter()` to keep only those properties that are functions.\nOmit the second argument, `inherited`, to not include inherited properties by default.\n\n",
          "tags": [
            "object",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "1ad875e1b31348464b3eedddc0e0a4b0e10154e16b08025fa5e46d94995aa887"
        }
      },
      {
        "id": "gcd",
        "type": "snippetListing",
        "title": "gcd",
        "attributes": {
          "text": "Calculates the greatest common divisor between two or more numbers/arrays.\n\nThe inner `_gcd` function uses recursion.\nBase case is when `y` equals `0`. In this case, return `x`.\nOtherwise, return the GCD of `y` and the remainder of the division `x/y`.\n\n",
          "tags": [
            "math",
            "recursion",
            "beginner"
          ]
        },
        "meta": {
          "hash": "751df689bc853192c8302d245e96684deaf158da463d8cdcbd54f84bb0d7c6dc"
        }
      },
      {
        "id": "geometricProgression",
        "type": "snippetListing",
        "title": "geometricProgression",
        "attributes": {
          "text": "Initializes an array containing the numbers in the specified range where `start` and `end` are inclusive and the ratio between two terms is `step`.\nReturns an error if `step` equals `1`.\n\nUse `Array.from()`, `Math.log()` and `Math.floor()` to create an array of the desired length, `Array.prototype.map()` to fill with the desired values in a range.\nOmit the second argument, `start`, to use a default value of `1`.\nOmit the third argument, `step`, to use a default value of `2`.\n\n",
          "tags": [
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "dec4fa85a58d11deefd90a66b0ede5ec73ad3e2481d5cf76918d13235c3238d9"
        }
      },
      {
        "id": "get",
        "type": "snippetListing",
        "title": "get",
        "attributes": {
          "text": "Retrieve a set of properties indicated by the given selectors from an object.\n\nUse `Array.prototype.map()` for each selector, `String.prototype.replace()` to replace square brackets with dots, `String.prototype.split('.')` to split each selector, `Array.prototype.filter()` to remove empty values and `Array.prototype.reduce()` to get the value indicated by it.\n\n",
          "tags": [
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "9f1b9128c94cd905327d5f09904f924fee541e8114e298fe7e01855d87cfe3d2"
        }
      },
      {
        "id": "getColonTimeFromDate",
        "type": "snippetListing",
        "title": "getColonTimeFromDate",
        "attributes": {
          "text": "Returns a string of the form `HH:MM:SS` from a `Date` object.\n\nUse `Date.prototype.toTimeString()` and `String.prototype.slice()` to get the `HH:MM:SS` part of a given `Date` object.\n\n",
          "tags": [
            "date",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "b2802086a18e09907de87f5409547d902ce7f6ae4f5a39cbc8869a662353303e"
        }
      },
      {
        "id": "getDaysDiffBetweenDates",
        "type": "snippetListing",
        "title": "getDaysDiffBetweenDates",
        "attributes": {
          "text": "Returns the difference (in days) between two dates.\n\nCalculate the difference (in days) between two `Date` objects.\n\n",
          "tags": [
            "date",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "0a2c0629c3c0661519c08d21768dadd5bebac35c892d980d390b16b60c60a2eb"
        }
      },
      {
        "id": "getImages",
        "type": "snippetListing",
        "title": "getImages",
        "attributes": {
          "text": "Fetches all images from within an element and puts them into an array\n\nUse `Element.prototype.getElementsByTagName()` to fetch all `<img>` elements inside the provided element, `Array.prototype.map()` to map every `src` attribute of their respective `<img>` element, then create a `Set` to eliminate duplicates and return the array.\n\n",
          "tags": [
            "browser",
            "beginner"
          ]
        },
        "meta": {
          "hash": "1caa2b9a8817bc11874785cdcf9f676e169caec6487c54124287ce85bb818c93"
        }
      },
      {
        "id": "getMeridiemSuffixOfInteger",
        "type": "snippetListing",
        "title": "getMeridiemSuffixOfInteger",
        "attributes": {
          "text": "Converts an integer to a suffixed string, adding `am` or `pm` based on its value.\n\nUse the modulo operator (`%`) and conditional checks to transform an integer to a stringified 12-hour format with meridiem suffix.\n\n",
          "tags": [
            "date",
            "beginner"
          ]
        },
        "meta": {
          "hash": "16c3b724b653dcb31f3e59f1664a59951abb15a93eb3697cade4d3ae0e63c532"
        }
      },
      {
        "id": "getScrollPosition",
        "type": "snippetListing",
        "title": "getScrollPosition",
        "attributes": {
          "text": "Returns the scroll position of the current page.\n\nUse `pageXOffset` and `pageYOffset` if they are defined, otherwise `scrollLeft` and `scrollTop`.\nYou can omit `el` to use a default value of `window`.\n\n",
          "tags": [
            "browser",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "255afa82679e614e1388476fb4392f0e1bb45f11e1c02e965925e231401f1f2c"
        }
      },
      {
        "id": "getStyle",
        "type": "snippetListing",
        "title": "getStyle",
        "attributes": {
          "text": "Returns the value of a CSS rule for the specified element.\n\nUse `Window.getComputedStyle()` to get the value of the CSS rule for the specified element.\n\n",
          "tags": [
            "browser",
            "css",
            "beginner"
          ]
        },
        "meta": {
          "hash": "f779277f9fb5fe54aa4b122bf87d73d921cd2550253a5bda3a2b512ebf70a976"
        }
      },
      {
        "id": "getType",
        "type": "snippetListing",
        "title": "getType",
        "attributes": {
          "text": "Returns the native type of a value.\n\nReturn `\"undefined\"` or `\"null\"` if the value is `undefined` or `null`.\nOtherwise, use `Object.prototype.constructor.name` to get the name of the constructor, `String.prototype.toLowerCase()` to return it in lowercase.\n\n",
          "tags": [
            "type",
            "beginner"
          ]
        },
        "meta": {
          "hash": "87c0b3cc13caebf6bb46f0769fecc8b13140ea133bbf096136c740154c1d456f"
        }
      },
      {
        "id": "getURLParameters",
        "type": "snippetListing",
        "title": "getURLParameters",
        "attributes": {
          "text": "Returns an object containing the parameters of the current URL.\n\nUse `String.match()` with an appropriate regular expression to get all key-value pairs, `Array.prototype.reduce()` to map and combine them into a single object.\nPass `location.search` as the argument to apply to the current `url`.\n\n",
          "tags": [
            "utility",
            "browser",
            "string",
            "url",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "460d0f75a526126cabbc1a0b7b727b78999332bec7876959519c187cd8db96db"
        }
      },
      {
        "id": "groupBy",
        "type": "snippetListing",
        "title": "groupBy",
        "attributes": {
          "text": "Groups the elements of an array based on the given function.\n\nUse `Array.prototype.map()` to map the values of an array to a function or property name.\nUse `Array.prototype.reduce()` to create an object, where the keys are produced from the mapped results.\n\n",
          "tags": [
            "array",
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "8f501c922c2d5d7fcb20bc84153e7b392b4209592f54b7bae5c61b77bb107f81"
        }
      },
      {
        "id": "hammingDistance",
        "type": "snippetListing",
        "title": "hammingDistance",
        "attributes": {
          "text": "Calculates the Hamming distance between two values.\n\nUse the XOR operator (`^`) to find the bit difference between the two numbers, convert to a binary string using `toString(2)`.\nCount and return the number of `1`s in the string, using `match(/1/g)`.\n\n",
          "tags": [
            "math",
            "regexp",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "bab775633603d798a5475f4bd22afdcbdea8bfdf81ea58eba661c16ee2a1ffbf"
        }
      },
      {
        "id": "hasClass",
        "type": "snippetListing",
        "title": "hasClass",
        "attributes": {
          "text": "Returns `true` if the element has the specified class, `false` otherwise.\n\nUse `element.classList.contains()` to check if the element has the specified class.\n\n",
          "tags": [
            "browser",
            "css",
            "beginner"
          ]
        },
        "meta": {
          "hash": "bb20ea2c4697a6036f1d149063f91a973de3bb5902649ca7ac6c9271a3561375"
        }
      },
      {
        "id": "hasFlags",
        "type": "snippetListing",
        "title": "hasFlags",
        "attributes": {
          "text": "Check if the current process's arguments contain the specified flags.\n\nUse `Array.prototype.every()` and `Array.prototype.includes()` to check if `process.argv` contains all the specified flags.\nUse a regular expression to test if the specified flags are prefixed with `-` or `--` and prefix them accordingly.\n\n",
          "tags": [
            "node",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "45c7a17b5debde35c4b31270a22e1a052fb4b4f1d7c05d10c8045caec96ef550"
        }
      },
      {
        "id": "hashBrowser",
        "type": "snippetListing",
        "title": "hashBrowser",
        "attributes": {
          "text": "Creates a hash for a value using the [SHA-256](https://en.wikipedia.org/wiki/SHA-2) algorithm. Returns a promise.\n\nUse the [SubtleCrypto](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto) API to create a hash for the given value.\n\n",
          "tags": [
            "browser",
            "utility",
            "advanced",
            "promise"
          ]
        },
        "meta": {
          "hash": "beb6f68f5a8b63fd90a671758556aa72b5c061b681df049779cdf5631837966c"
        }
      },
      {
        "id": "hashNode",
        "type": "snippetListing",
        "title": "hashNode",
        "attributes": {
          "text": "Creates a hash for a value using the [SHA-256](https://en.wikipedia.org/wiki/SHA-2) algorithm. Returns a promise.\n\nUse `crypto` API to create a hash for the given value, `setTimeout` to prevent blocking on a long operation, and a `Promise` to give it a familiar interface.\n\n",
          "tags": [
            "node",
            "utility",
            "promise",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "e7b6164cfaacf4869f997747df3e135a1ec4342abf5a56498586513332272a96"
        }
      },
      {
        "id": "hasKey",
        "type": "snippetListing",
        "title": "hasKey",
        "attributes": {
          "text": "Returns `true` if the target value exists in a JSON object, `false` otherwise.\n\nCheck if `keys` is non-empty and use `Array.prototype.every()` to sequentially check its keys to internal depth of the object, `obj`. \nUse `Object.prototype.hasOwnProperty()` to check if `obj` does not have the current key or is not an object, stop propagation and return `false`.\nOtherwise assign the key's value to `obj` to use on the next iteration.\nReturn `false` beforehand if given key list is empty.\n\n",
          "tags": [
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "09664f8ede4cc568302d52fe37d3a29dc6c4b052e76834e761a02c391178f33a"
        }
      },
      {
        "id": "haveSameContents",
        "type": "snippetListing",
        "title": "haveSameContents",
        "attributes": {
          "text": "Returns `true` if two arrays contain the same elements regardless of order, `false` otherwise.\n\nUse a `for...of` loop over a `Set` created from the values of both arrays.\nUse `Array.prototype.filter()` to compare the amount of occurrences of each distinct value in both arrays.\nReturn `false` if the counts do not match for any element, `true` otherwise.\n\n",
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "f0d0ce8ae4bacbe68423d78be06d4d1afad8a2361954a4e06fea12aaac9c4392"
        }
      },
      {
        "id": "head",
        "type": "snippetListing",
        "title": "head",
        "attributes": {
          "text": "Returns the head of a list.\n\nCheck if `arr` is truthy and has a `length` property, use `arr[0]` if possible to return the first element, otherwise return `undefined`.\n\n",
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "5ab776577e1c861d4a2b17fbc72837b77b9cbeeea2bacb5614c8bd9b7efcec7a"
        }
      },
      {
        "id": "hexToRGB",
        "type": "snippetListing",
        "title": "hexToRGB",
        "attributes": {
          "text": "Converts a color code to a `rgb()` or `rgba()` string if alpha value is provided.\n\nUse bitwise right-shift operator and mask bits with `&` (and) operator to convert a hexadecimal color code (with or without prefixed with `#`) to a string with the RGB values. If it's 3-digit color code, first convert to 6-digit version. If an alpha value is provided alongside 6-digit hex, give `rgba()` string in return.\n\n",
          "tags": [
            "utility",
            "string",
            "math",
            "advanced"
          ]
        },
        "meta": {
          "hash": "f61b08541372ded95a947cc570f57f7bbc9c7908ede569d59f294c5b9ef6feb1"
        }
      },
      {
        "id": "hide",
        "type": "snippetListing",
        "title": "hide",
        "attributes": {
          "text": "Hides all the elements specified.\n\nUse `NodeList.prototype.forEach()` to apply `display: none` to each element specified.\n\n",
          "tags": [
            "browser",
            "css",
            "beginner"
          ]
        },
        "meta": {
          "hash": "b2cb8be1a0e2b2d6471762cdac531925aa3c0c695f2ef162e0c8c1f4a1c174aa"
        }
      },
      {
        "id": "httpGet",
        "type": "snippetListing",
        "title": "httpGet",
        "attributes": {
          "text": "Makes a `GET` request to the passed URL.\n\nUse [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) web api to make a `get` request to the given `url`.\nHandle the `onload` event, by calling the given `callback` the `responseText`.\nHandle the `onerror` event, by running the provided `err` function.\nOmit the third argument, `err`, to log errors to the console's `error` stream by default.\n\n",
          "tags": [
            "utility",
            "url",
            "browser",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "c138c0e5f16d48997691a98de7c0bc43b228a0b4285f0ab2b26d230e209d1530"
        }
      },
      {
        "id": "httpPost",
        "type": "snippetListing",
        "title": "httpPost",
        "attributes": {
          "text": "Makes a `POST` request to the passed URL.\n\nUse [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) web api to make a `post` request to the given `url`.\nSet the value of an `HTTP` request header with `setRequestHeader` method.\nHandle the `onload` event, by calling the given `callback` the `responseText`.\nHandle the `onerror` event, by running the provided `err` function.\nOmit the third argument, `data`, to send no data to the provided `url`.\nOmit the fourth argument, `err`, to log errors to the console's `error` stream by default.\n\n",
          "tags": [
            "utility",
            "url",
            "browser",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "5b29941074f19769531b3320ec8d61e2b2bdc69735fb781bf7e880ff2080ec04"
        }
      },
      {
        "id": "httpsRedirect",
        "type": "snippetListing",
        "title": "httpsRedirect",
        "attributes": {
          "text": "Redirects the page to HTTPS if its currently in HTTP. Also, pressing the back button doesn't take it back to the HTTP page as its replaced in the history.\n\nUse `location.protocol` to get the protocol currently being used. If it's not HTTPS, use `location.replace()` to replace the existing page with the HTTPS version of the page. Use `location.href` to get the full address, split it with `String.prototype.split()` and remove the protocol part of the URL.\n\n",
          "tags": [
            "browser",
            "url",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "37468f75e3b2200d43906644eacce72a17a0e22441367bf1b8689e01e3c9ee76"
        }
      },
      {
        "id": "hz",
        "type": "snippetListing",
        "title": "hz",
        "attributes": {
          "text": "Returns the number of times a function executed per second. \n`hz` is the unit for `hertz`, the unit of frequency defined as one cycle per second.\n\nUse `performance.now()` to get the difference in milliseconds before and after the iteration loop to calculate the time elapsed executing the function `iterations` times. \nReturn the number of cycles per second by converting milliseconds to seconds and dividing it by the time elapsed. \nOmit the second argument, `iterations`, to use the default of 100 iterations.\n\n",
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "542bc8c7cc17654b02dc9fdcd6791901f61a6907c89e42192f6e5d2a8eba41be"
        }
      },
      {
        "id": "includesAll",
        "type": "snippetListing",
        "title": "includesAll",
        "attributes": {
          "text": "Returns `true` if all the elements in `values` are included in `arr`, `false` otherwise.\n\nUse `Array.prototype.every()` and `Array.prototype.includes()` to check if all elements of `values` are included in `arr`.\n\n",
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "c1fa01ef5f13cc1f814d0ca0814f73fc7e74e394302fdc34724ba21e0c62be7b"
        }
      },
      {
        "id": "includesAny",
        "type": "snippetListing",
        "title": "includesAny",
        "attributes": {
          "text": "Returns `true` if at least one element of values is included in arr , `false` otherwise.\n\nUse `Array.prototype.some()` and `Array.prototype.includes()` to check if at least one element of `values` is included in `arr`.\n\n",
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "8f19064ba89ab86c50456844646b56f6bd2afec2fc4f9ab3478bd6201510a745"
        }
      },
      {
        "id": "indentString",
        "type": "snippetListing",
        "title": "indentString",
        "attributes": {
          "text": "Indents each line in the provided string.\n\nUse `String.replace` and a regular expression to add the character specified by `indent` `count` times at the start of each line.\nOmit the third parameter, `indent`, to use a default indentation character of `' '`.\n\n",
          "tags": [
            "string",
            "utility",
            "beginner"
          ]
        },
        "meta": {
          "hash": "544ebe19f71cab5f4b4ad5a6121d4327ebf2b09f04451151e7339c90c8924789"
        }
      },
      {
        "id": "indexOfAll",
        "type": "snippetListing",
        "title": "indexOfAll",
        "attributes": {
          "text": "Returns all indices of `val` in an array.\nIf `val` never occurs, returns `[]`.\n\nUse `Array.prototype.reduce()` to loop over elements and store indices for matching elements.\nReturn the array of indices.\n\n",
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "758f29d3ce7faa946104229405156da66ca357bd70dccfe18ec5cabd4841f286"
        }
      },
      {
        "id": "initial",
        "type": "snippetListing",
        "title": "initial",
        "attributes": {
          "text": "Returns all the elements of an array except the last one.\n\nUse `arr.slice(0,-1)` to return all but the last element of the array.\n\n",
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "c2479bc7d9e651dde057378ed2641f37b75d5b4fc8ed295997bea8d37d46bba0"
        }
      },
      {
        "id": "initialize2DArray",
        "type": "snippetListing",
        "title": "initialize2DArray",
        "attributes": {
          "text": "Initializes a 2D array of given width and height and value.\n\nUse `Array.prototype.map()` to generate h rows where each is a new array of size w initialize with value. If the value is not provided, default to `null`.\n\n",
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "ada7e68c9a5a701265c1ea38dfc253b8ccb7d9c261dffcf9a42cc560b264cabc"
        }
      },
      {
        "id": "initializeArrayWithRange",
        "type": "snippetListing",
        "title": "initializeArrayWithRange",
        "attributes": {
          "text": "Initializes an array containing the numbers in the specified range where `start` and `end` are inclusive with their common difference `step`.\n\nUse `Array.from()` to create an array of the desired length, `(end - start + 1)/step`, and a map function to fill it with the desired values in the given range.\nYou can omit `start` to use a default value of `0`.\nYou can omit `step` to use a default value of `1`.\n\n",
          "tags": [
            "array",
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "f4e970fb09664acfd567ee0ebc9867672095c529778b8b9169ed5b13d431c563"
        }
      },
      {
        "id": "initializeArrayWithRangeRight",
        "type": "snippetListing",
        "title": "initializeArrayWithRangeRight",
        "attributes": {
          "text": "Initializes an array containing the numbers in the specified range (in reverse) where `start` and `end` are inclusive with their common difference `step`.\n\nUse `Array.from(Math.ceil((end+1-start)/step))` to create an array of the desired length(the amounts of elements is equal to `(end-start)/step` or `(end+1-start)/step` for inclusive end), `Array.prototype.map()` to fill with the desired values in a range.\nYou can omit `start` to use a default value of `0`.\nYou can omit `step` to use a default value of `1`.\n\n",
          "tags": [
            "array",
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "59cc7791996547b646472153ebb1fb0bee4d177199e6a7311791eab98c58e3be"
        }
      },
      {
        "id": "initializeArrayWithValues",
        "type": "snippetListing",
        "title": "initializeArrayWithValues",
        "attributes": {
          "text": "Initializes and fills an array with the specified values.\n\nUse `Array(n)` to create an array of the desired length, `fill(v)` to fill it with the desired values.\nYou can omit `val` to use a default value of `0`.\n\n",
          "tags": [
            "array",
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "0e8321b0286c38321fdb3e27353567cdb03c6767152210e8e14e4925057adfe1"
        }
      },
      {
        "id": "initializeNDArray",
        "type": "snippetListing",
        "title": "initializeNDArray",
        "attributes": {
          "text": "Create a n-dimensional array with given value.\n\nUse recursion.\nUse `Array.prototype.map()` to generate rows where each is a new array initialized using `initializeNDArray`.\n\n",
          "tags": [
            "array",
            "recursion",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "21b455190adbd8b80d2559a88d9ec244ac32544235b7cfed8caca65c11c8ab80"
        }
      },
      {
        "id": "inRange",
        "type": "snippetListing",
        "title": "inRange",
        "attributes": {
          "text": "Checks if the given number falls within the given range.\n\nUse arithmetic comparison to check if the given number is in the specified range.\nIf the second parameter, `end`, is not specified, the range is considered to be from `0` to `start`.\n\n",
          "tags": [
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "911d4a90c6ded62d063887e772d4017d4612e4fce48e79836ad19fc41e2c1abe"
        }
      },
      {
        "id": "insertAfter",
        "type": "snippetListing",
        "title": "insertAfter",
        "attributes": {
          "text": "Inserts an HTML string after the end of the specified element.\n\nUse `el.insertAdjacentHTML()` with a position of `'afterend'` to parse `htmlString` and insert it after the end of `el`.\n\n",
          "tags": [
            "browser",
            "beginner"
          ]
        },
        "meta": {
          "hash": "ed0aaf8c5ebaa3b1e75a60af42c56ad19d3b99c6ba7257e1cfd4b245546b528f"
        }
      },
      {
        "id": "insertBefore",
        "type": "snippetListing",
        "title": "insertBefore",
        "attributes": {
          "text": "Inserts an HTML string before the start of the specified element.\n\nUse `el.insertAdjacentHTML()` with a position of `'beforebegin'` to parse `htmlString` and insert it before the start of `el`.\n\n",
          "tags": [
            "browser",
            "beginner"
          ]
        },
        "meta": {
          "hash": "bf4e5f5e31ce7057a18c2b54dd516ec647819b5a5246a93e883ade756ff39fd9"
        }
      },
      {
        "id": "intersection",
        "type": "snippetListing",
        "title": "intersection",
        "attributes": {
          "text": "Returns a list of elements that exist in both arrays.\n\nCreate a `Set` from `b`, then use `Array.prototype.filter()` on `a` to only keep values contained in `b`.\n\n",
          "tags": [
            "array",
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "2aaacc455daf09a786616441e0f63fb5036d02d16611221135eede83724e9b73"
        }
      },
      {
        "id": "intersectionBy",
        "type": "snippetListing",
        "title": "intersectionBy",
        "attributes": {
          "text": "Returns a list of elements that exist in both arrays, after applying the provided function to each array element of both.\n\nCreate a `Set` by applying `fn` to all elements in `b`, then use `Array.prototype.filter()` on `a` to only keep elements, which produce values contained in `b` when `fn` is applied to them.\n\n",
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "6fd8156a416578b0051bd7aaa5078ee3f34a6c6d0c1dbab97436ad10f6d3efc9"
        }
      },
      {
        "id": "intersectionWith",
        "type": "snippetListing",
        "title": "intersectionWith",
        "attributes": {
          "text": "Returns a list of elements that exist in both arrays, using a provided comparator function.\n\nUse `Array.prototype.filter()` and `Array.prototype.findIndex()` in combination with the provided comparator to determine intersecting values.\n\n",
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "3dd3ad662f52d4189d00c5abea2e3d8f408acc789065d2071d16ff2a442c7c55"
        }
      },
      {
        "id": "invertKeyValues",
        "type": "snippetListing",
        "title": "invertKeyValues",
        "attributes": {
          "text": "Inverts the key-value pairs of an object, without mutating it. The corresponding inverted value of each inverted key is an array of keys responsible for generating the inverted value. If a function is supplied, it is applied to each inverted key.\n\nUse `Object.keys()` and `Array.prototype.reduce()` to invert the key-value pairs of an object and apply the function provided (if any).\nOmit the second argument, `fn`, to get the inverted keys without applying a function to them.\n\n",
          "tags": [
            "object",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "193618c3f15f2aa14ce53dd88ee928aa8f6be6891c5253d7921eb87547ee7dbd"
        }
      },
      {
        "id": "is",
        "type": "snippetListing",
        "title": "is",
        "attributes": {
          "text": "Checks if the provided value is of the specified type.\n\nEnsure the value is not `undefined` or `null` using `Array.prototype.includes()`, and compare the `constructor` property on the value with `type` to check if the provided value is of the specified `type`.\n\n",
          "tags": [
            "type",
            "array",
            "regexp",
            "beginner"
          ]
        },
        "meta": {
          "hash": "c9bbbe9ff32915b2c44849dfe8e1ab3554383cb0b7df9551424ca2597e355f41"
        }
      },
      {
        "id": "isAbsoluteURL",
        "type": "snippetListing",
        "title": "isAbsoluteURL",
        "attributes": {
          "text": "Returns `true` if the given string is an absolute URL, `false` otherwise.\n\nUse a regular expression to test if the string is an absolute URL.\n\n",
          "tags": [
            "string",
            "utility",
            "browser",
            "url",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "7523c5d3ab85075efa61efc135bb1c8d85e2a2e5407ddc5768099993d46f13b5"
        }
      },
      {
        "id": "isAfterDate",
        "type": "snippetListing",
        "title": "isAfterDate",
        "attributes": {
          "text": "Check if a date is after another date.\n\nUse the greater than operator (`>`) to check if the first date comes after the second one.\n\n",
          "tags": [
            "date",
            "utility",
            "beginner"
          ]
        },
        "meta": {
          "hash": "19efe22718bca00459c41fa9df56c3574270c500bdd670873358052ccc870f5b"
        }
      },
      {
        "id": "isAnagram",
        "type": "snippetListing",
        "title": "isAnagram",
        "attributes": {
          "text": "Checks if a string is an anagram of another string (case-insensitive, ignores spaces, punctuation and special characters).\n\nUse `String.prototype.toLowerCase()`, `String.prototype.replace()` with an appropriate regular expression to remove unnecessary characters, `String.prototype.split('')`, `Array.prototype.sort()` and `Array.prototype.join('')` on both strings to normalize them, then check if their normalized forms are equal.\n\n",
          "tags": [
            "string",
            "regexp",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "0988d3506c206c544948142c4b65b471d0d0bdabdfc464fc40260f9ccc054f52"
        }
      },
      {
        "id": "isArrayLike",
        "type": "snippetListing",
        "title": "isArrayLike",
        "attributes": {
          "text": "Checks if the provided argument is array-like (i.e. is iterable).\n\nCheck if the provided argument is not `null` and that its `Symbol.iterator` property is a function.\n\n",
          "tags": [
            "type",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "0694b883486ca56109cb2c2ad8ed3477c0c4ee84d2fa81884409c40302a13fa7"
        }
      },
      {
        "id": "isBeforeDate",
        "type": "snippetListing",
        "title": "isBeforeDate",
        "attributes": {
          "text": "Check if a date is before another date.\n\nUse the less than operator (`<`) to check if the first date comes before the second one.\n\n",
          "tags": [
            "date",
            "utility",
            "beginner"
          ]
        },
        "meta": {
          "hash": "e0d70480b239a585f907c965214a037ce23ae15f5484ab80930ea9f57cbe529e"
        }
      },
      {
        "id": "isBoolean",
        "type": "snippetListing",
        "title": "isBoolean",
        "attributes": {
          "text": "Checks if the given argument is a native boolean element.\n\nUse `typeof` to check if a value is classified as a boolean primitive.\n\n",
          "tags": [
            "type",
            "beginner"
          ]
        },
        "meta": {
          "hash": "2c2e66152db8a6445af911c49a181d4cd5ca92db5bd23f24124d2df06bebbc15"
        }
      },
      {
        "id": "isBrowser",
        "type": "snippetListing",
        "title": "isBrowser",
        "attributes": {
          "text": "Determines if the current runtime environment is a browser so that front-end modules can run on the server (Node) without throwing errors.\n\nUse `Array.prototype.includes()` on the `typeof` values of both `window` and `document` (globals usually only available in a browser environment unless they were explicitly defined), which will return `true` if one of them is `undefined`.\n`typeof` allows globals to be checked for existence without throwing a `ReferenceError`.\nIf both of them are not `undefined`, then the current environment is assumed to be a browser.\n\n",
          "tags": [
            "utility",
            "browser",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "6fb24837c043a0cc320a46695ef0e286a558aaf06e9354407569ae61c4a8d0bd"
        }
      },
      {
        "id": "isBrowserTabFocused",
        "type": "snippetListing",
        "title": "isBrowserTabFocused",
        "attributes": {
          "text": "Returns `true` if the browser tab of the page is focused, `false` otherwise.\n\nUse the `Document.hidden` property, introduced by the Page Visibility API to check if the browser tab of the page is visible or hidden.\n\n",
          "tags": [
            "browser",
            "beginner"
          ]
        },
        "meta": {
          "hash": "3aab66b09df0070568e0ff69717ac0d5c62d88727262419d07b0f50e1a6677e4"
        }
      },
      {
        "id": "isContainedIn",
        "type": "snippetListing",
        "title": "isContainedIn",
        "attributes": {
          "text": "Returns `true` if the elements of the first array are contained in the second one regardless of order, `false` otherwise.\n\nUse a `for...of` loop over a `Set` created from the first array.\nUse `Array.prototype.some()` to check if all distinct values are contained in the second array, use `Array.prototype.filter()` to compare the number of occurrences of each distinct value in both arrays.\nReturn `false` if the count of any element is greater in the first array than the second one, `true` otherwise.\n\n",
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "a6e27de05fd710d2837571011dd7bb2031169053438ef998c9b3aa212c24a2f6"
        }
      },
      {
        "id": "isDivisible",
        "type": "snippetListing",
        "title": "isDivisible",
        "attributes": {
          "text": "Checks if the first numeric argument is divisible by the second one.\n\nUse the modulo operator (`%`) to check if the remainder is equal to `0`.\n\n",
          "tags": [
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "e89795b1f8240e97e4ed1825f2cb38deaa356b8c08ecdd3eaaeb6fe243363f7f"
        }
      },
      {
        "id": "isDuplexStream",
        "type": "snippetListing",
        "title": "isDuplexStream",
        "attributes": {
          "text": "Checks if the given argument is a duplex (readable and writable) stream.\n\nCheck if the value is different from `null`, use `typeof` to check if a value is of type `object` and the `pipe` property is of type `function`.\nAdditionally check if the `typeof` the `_read`, `_write` and `_readableState`, `_writableState` properties are `function` and `object` respectively.\n\n",
          "tags": [
            "node",
            "type",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "f2ca078f493b19d44dddd6556e933b056bc9fff56e493a5481c3d943b24f1e01"
        }
      },
      {
        "id": "isEmpty",
        "type": "snippetListing",
        "title": "isEmpty",
        "attributes": {
          "text": "Returns true if the a value is an empty object, collection, has no enumerable properties or is any type that is not considered a collection.\n\nCheck if the provided value is `null` or if its `length` is equal to `0`.\n\n",
          "tags": [
            "type",
            "array",
            "object",
            "string",
            "beginner"
          ]
        },
        "meta": {
          "hash": "ff080fab7095a63d01048bca4ed77d033af852303d26668c1ee7f564db8407d1"
        }
      },
      {
        "id": "isEven",
        "type": "snippetListing",
        "title": "isEven",
        "attributes": {
          "text": "Returns `true` if the given number is even, `false` otherwise.\n\nChecks whether a number is odd or even using the modulo (`%`) operator.\nReturns `true` if the number is even, `false` if the number is odd.\n\n",
          "tags": [
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "fa16462c8309a49d282421fd80c995fd3f8a9debaba5e492dd4a3625eecce101"
        }
      },
      {
        "id": "isFunction",
        "type": "snippetListing",
        "title": "isFunction",
        "attributes": {
          "text": "Checks if the given argument is a function.\n\nUse `typeof` to check if a value is classified as a function primitive.\n\n",
          "tags": [
            "type",
            "function",
            "beginner"
          ]
        },
        "meta": {
          "hash": "c9004512c957ceeda55d851452ad2b2d59235648272222fd36ca75d98965f0b6"
        }
      },
      {
        "id": "isLowerCase",
        "type": "snippetListing",
        "title": "isLowerCase",
        "attributes": {
          "text": "Checks if a string is lower case.\n\nConvert the given string to lower case, using `String.toLowerCase()` and compare it to the original.\n\n",
          "tags": [
            "string",
            "utility",
            "beginner"
          ]
        },
        "meta": {
          "hash": "e47bc176d868f3aab83f762997bf9d355258607594648573d2482faf7fc08826"
        }
      },
      {
        "id": "isNegativeZero",
        "type": "snippetListing",
        "title": "isNegativeZero",
        "attributes": {
          "text": "Checks if the given value is equal to negative zero (`-0`).\n\nChecks whether a passed value is equal to `0` and if `1` divided by the value equals `-Infinity`.\n\n",
          "tags": [
            "math",
            "utility",
            "beginner"
          ]
        },
        "meta": {
          "hash": "ec55fd2848f1443613e33d59634ecaefc9dc82b721424b5416830a7389e1ce6e"
        }
      },
      {
        "id": "isNil",
        "type": "snippetListing",
        "title": "isNil",
        "attributes": {
          "text": "Returns `true` if the specified value is `null` or `undefined`, `false` otherwise.\n\nUse the strict equality operator to check if the value of `val` is equal to `null` or `undefined`.\n\n",
          "tags": [
            "type",
            "beginner"
          ]
        },
        "meta": {
          "hash": "c09e927ebf399af3fa3bd3873b407f26130f86e6abb7871f88e1892baed899bf"
        }
      },
      {
        "id": "isNull",
        "type": "snippetListing",
        "title": "isNull",
        "attributes": {
          "text": "Returns `true` if the specified value is `null`, `false` otherwise.\n\nUse the strict equality operator to check if the value of `val` is equal to `null`.\n\n",
          "tags": [
            "type",
            "beginner"
          ]
        },
        "meta": {
          "hash": "4247f69d4cb570cccbe23e147336e5a610070be0fce5d3c5011f7b04a6f9ed3e"
        }
      },
      {
        "id": "isNumber",
        "type": "snippetListing",
        "title": "isNumber",
        "attributes": {
          "text": "Checks if the given argument is a number.\n\nUse `typeof` to check if a value is classified as a number primitive. \nTo safeguard against `NaN`, check if `val === val` (as `NaN` has a `typeof` equal to `number` and is the only value not equal to itself).\n\n",
          "tags": [
            "type",
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "5c6e6defd17719973b507d6c55cf00f958ea92ea3c55b6d9dff6d0441f53dc9a"
        }
      },
      {
        "id": "isObject",
        "type": "snippetListing",
        "title": "isObject",
        "attributes": {
          "text": "Returns a boolean determining if the passed value is an object or not.\n\nUses the  `Object` constructor to create an object wrapper for the given value. \nIf the value is `null` or `undefined`, create and return an empty object. Οtherwise, return an object of a type that corresponds to the given value.\n\n",
          "tags": [
            "type",
            "object",
            "beginner"
          ]
        },
        "meta": {
          "hash": "06b78776522f9e213357c031e21568295d7a528871fe05781ae2ac4f7e5d8451"
        }
      },
      {
        "id": "isObjectLike",
        "type": "snippetListing",
        "title": "isObjectLike",
        "attributes": {
          "text": "Checks if a value is object-like.\n\nCheck if the provided value is not `null` and its `typeof` is equal to `'object'`.\n\n",
          "tags": [
            "type",
            "object",
            "beginner"
          ]
        },
        "meta": {
          "hash": "c3424342e1ccfaff2b8f0b0727595fc2cd8063a185ecc42708fa41a2a7c25fc4"
        }
      },
      {
        "id": "isOdd",
        "type": "snippetListing",
        "title": "isOdd",
        "attributes": {
          "text": "Returns `true` if the given number is odd, `false` otherwise.\n\nChecks whether a number is odd or even using the modulo (`%`) operator.\nReturns `true` if the number is odd, `false` if the number is even.\n\n",
          "tags": [
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "9d259b2877b38e255222f876d6f00247b6449da44082d24eadd48f46d71ccd9d"
        }
      },
      {
        "id": "isPlainObject",
        "type": "snippetListing",
        "title": "isPlainObject",
        "attributes": {
          "text": "Checks if the provided value is an object created by the Object constructor.\n\nCheck if the provided value is truthy, use `typeof` to check if it is an object and `Object.constructor` to make sure the constructor is equal to `Object`.\n\n",
          "tags": [
            "type",
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "8a9ef17eda1a977bdd1149a4a782d7d0e7addd8c6db8d4bd3734c9269863b12c"
        }
      },
      {
        "id": "isPowerOfTwo",
        "type": "snippetListing",
        "title": "isPowerOfTwo",
        "attributes": {
          "text": "Returns `true` if the given number is a power of `2`, `false` otherwise.\n\nUse the bitwise binary AND operator (`&`) to determine if `n is a power of `2. \nAdditionally, check that `n` is not falsy.\n\n",
          "tags": [
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "93dcd24b208880ba16d9aa32e59e718187cb4178cadb5876a4bc7c588ddcdebd"
        }
      },
      {
        "id": "isPrime",
        "type": "snippetListing",
        "title": "isPrime",
        "attributes": {
          "text": "Checks if the provided integer is a prime number.\n\nCheck numbers from `2` to the square root of the given number.\nReturn `false` if any of them divides the given number, else return `true`, unless the number is less than `2`.\n\n",
          "tags": [
            "math",
            "beginner",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "aafa416b434137db2540668a13e8a33138cb04d652f29e8793a6c76b6a62983d"
        }
      },
      {
        "id": "isPrimitive",
        "type": "snippetListing",
        "title": "isPrimitive",
        "attributes": {
          "text": "Returns a boolean determining if the passed value is primitive or not.\n\nCreate an object from `val` and compare it with `val` to determine if the passed value is primitive (i.e. not equal to the created object).\n\n",
          "tags": [
            "type",
            "function",
            "array",
            "string",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "2df9322464af125f8a33dad1f15a7df5ccd7d8f9322efe871dc026974971ac85"
        }
      },
      {
        "id": "isPromiseLike",
        "type": "snippetListing",
        "title": "isPromiseLike",
        "attributes": {
          "text": "Returns `true` if an object looks like a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), `false` otherwise.\n\nCheck if the object is not `null`, its `typeof` matches either `object` or `function` and if it has a `.then` property, which is also a `function`.\n\n",
          "tags": [
            "type",
            "function",
            "promise",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "3edbaa911db73b703d8af9a0681a18f4c61d65db15cbd5812b78ecd3ac364cef"
        }
      },
      {
        "id": "isReadableStream",
        "type": "snippetListing",
        "title": "isReadableStream",
        "attributes": {
          "text": "Checks if the given argument is a readable stream.\n\nCheck if the value is different from `null`, use `typeof` to check if the value is of type `object` and the `pipe` property is of type `function`.\nAdditionally check if the `typeof` the `_read` and `_readableState` properties are `function` and `object` respectively.\n\n",
          "tags": [
            "node",
            "type",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "a8199a2ae7965f48651bc7996e810423b2de44467204d481df54f7c8fa2dd44e"
        }
      },
      {
        "id": "isSameDate",
        "type": "snippetListing",
        "title": "isSameDate",
        "attributes": {
          "text": "Check if a date is the same as another date.\n\nUse `Date.prototype.toISOString()` and strict equality checking (`===`) to check if the first date is the same as the second one.\n\n",
          "tags": [
            "date",
            "utility",
            "beginner"
          ]
        },
        "meta": {
          "hash": "4accb95c8fb5ac770c73c78b6236938773499c74617df09a1f73a60abd6f44d7"
        }
      },
      {
        "id": "isSorted",
        "type": "snippetListing",
        "title": "isSorted",
        "attributes": {
          "text": "Returns `1` if the array is sorted in ascending order, `-1` if it is sorted in descending order or `0` if it is not sorted.\n\nCalculate the ordering `direction` for the first two elements.\nUse `Object.entries()` to loop over array objects and compare them in pairs.\nReturn `0` if the `direction` changes or the `direction` if the last element is reached.\n\n",
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "b916ab345483f3d11d921f5f54da89bbf1c724aceb1d1c16f5b7365794da6e0e"
        }
      },
      {
        "id": "isStream",
        "type": "snippetListing",
        "title": "isStream",
        "attributes": {
          "text": "Checks if the given argument is a stream.\n\nCheck if the value is different from `null`, use `typeof` to check if the value is of type `object` and the `pipe` property is of type `function`.\n\n",
          "tags": [
            "node",
            "type",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "5e2955867dd0b233a65bf95587e4a190da61629a4cba61e270d36e0a26c7946e"
        }
      },
      {
        "id": "isString",
        "type": "snippetListing",
        "title": "isString",
        "attributes": {
          "text": "Checks if the given argument is a string. Only works for string primitives.\n\nUse `typeof` to check if a value is classified as a string primitive.\n\n",
          "tags": [
            "type",
            "string",
            "beginner"
          ]
        },
        "meta": {
          "hash": "4a29ea0e99857a128109e6cf7d1120bc4cdb6b05be2ce4602715e6c863b1cc3d"
        }
      },
      {
        "id": "isSymbol",
        "type": "snippetListing",
        "title": "isSymbol",
        "attributes": {
          "text": "Checks if the given argument is a symbol.\n\nUse `typeof` to check if a value is classified as a symbol primitive.\n\n",
          "tags": [
            "type",
            "beginner"
          ]
        },
        "meta": {
          "hash": "8599f274909a26bd17178514b849ee803959f3c69207fce2951923d1719fbddb"
        }
      },
      {
        "id": "isTravisCI",
        "type": "snippetListing",
        "title": "isTravisCI",
        "attributes": {
          "text": "Checks if the current environment is [Travis CI](https://travis-ci.org/).\n\nChecks if the current environment has the `TRAVIS` and `CI` environment variables ([reference](https://docs.travis-ci.com/user/environment-variables/#Default-Environment-Variables)).\n\n",
          "tags": [
            "node",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "aaf7f8a0beaeedb11a5b13b304fa1c51eddf66e103d2b44a1c3648de39fd1e23"
        }
      },
      {
        "id": "isUndefined",
        "type": "snippetListing",
        "title": "isUndefined",
        "attributes": {
          "text": "Returns `true` if the specified value is `undefined`, `false` otherwise.\n\nUse the strict equality operator to check if `val` is equal to `undefined`.\n\n",
          "tags": [
            "type",
            "beginner"
          ]
        },
        "meta": {
          "hash": "c76d495087390da80a6a0d54f27220254b0cd547a79ac1357a4b04e43938794a"
        }
      },
      {
        "id": "isUpperCase",
        "type": "snippetListing",
        "title": "isUpperCase",
        "attributes": {
          "text": "Checks if a string is upper case.\n\nConvert the given string to upper case, using `String.prototype.toUpperCase()` and compare it to the original.\n\n",
          "tags": [
            "string",
            "utility",
            "beginner"
          ]
        },
        "meta": {
          "hash": "e9f213bd74fba0cfc5e7706967f03dee72ee516e213715dab97c5fd32ba7f4f3"
        }
      },
      {
        "id": "isValidJSON",
        "type": "snippetListing",
        "title": "isValidJSON",
        "attributes": {
          "text": "Checks if the provided string is a valid JSON.\n\nUse `JSON.parse()` and a `try... catch` block to check if the provided string is a valid JSON.\n\n",
          "tags": [
            "type",
            "json",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "3b695d9ce6aa94aea1a367fba124a615d0132c8894e702f96e042fd6e6349ac1"
        }
      },
      {
        "id": "isWeekday",
        "type": "snippetListing",
        "title": "isWeekday",
        "attributes": {
          "text": "Results in a boolean representation of a specific date.\n\nPass the specific date object firstly.\nUse `Date.getDay()` to check weekday by using a modulo operator and then returning a boolean.\n\n",
          "tags": [
            "date",
            "beginner"
          ]
        },
        "meta": {
          "hash": "f4b7c801ff0d3a23d10d2cb4de23d63e0d1dd09cd0d014c414a81c5628b8ff8b"
        }
      },
      {
        "id": "isWeekend",
        "type": "snippetListing",
        "title": "isWeekend",
        "attributes": {
          "text": "Results in a boolean representation of a specific date.\n\nPass the specific date object firstly.\nUse `Date.getDay()` to check weekend based on the day being returned as 0 - 6 using a modulo operation then return a boolean.\n\n",
          "tags": [
            "date",
            "beginner"
          ]
        },
        "meta": {
          "hash": "6b2bfb3ce5798f702332f4cf14749b4b044fe7de6ee1d79bc786c1e3fe704dbd"
        }
      },
      {
        "id": "isWritableStream",
        "type": "snippetListing",
        "title": "isWritableStream",
        "attributes": {
          "text": "Checks if the given argument is a writable stream.\n\nCheck if the value is different from `null`, use `typeof` to check if the value is of type `object` and the `pipe` property is of type `function`.\nAdditionally check if the `typeof` the `_write` and `_writableState` properties are `function` and `object` respectively.\n\n",
          "tags": [
            "node",
            "type",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "8f9400b2f8204180520e4cb2d2150ea515eb704d684f483377ba3e5513268bb0"
        }
      },
      {
        "id": "join",
        "type": "snippetListing",
        "title": "join",
        "attributes": {
          "text": "Joins all elements of an array into a string and returns this string.\nUses a separator and an end separator.\n\nUse `Array.prototype.reduce()` to combine elements into a string.\nOmit the second argument, `separator`, to use a default separator of `','`.\nOmit the third argument, `end`, to use the same value as `separator` by default.\n\n",
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "362fddaa6244404741e84bca6fc442a101fdb642af53b299e8b9994d0d7162d8"
        }
      },
      {
        "id": "JSONtoCSV",
        "type": "snippetListing",
        "title": "JSONtoCSV",
        "attributes": {
          "text": "Converts an array of objects to a comma-separated values (CSV) string that contains only the `columns` specified.\n\nUse `Array.prototype.join(delimiter)` to combine all the names in `columns` to create the first row.\nUse `Array.prototype.map()` and `Array.prototype.reduce()` to create a row for each object, substituting non-existent values with empty strings and only mapping values in `columns`.\nUse `Array.prototype.join('\\n')` to combine all rows into a string.\nOmit the third argument, `delimiter`, to use a default delimiter of `,`.\n\n",
          "tags": [
            "array",
            "string",
            "object",
            "advanced"
          ]
        },
        "meta": {
          "hash": "5b76a1a772d79233e7d8c87d903f1ef48b4c4bc52a05df4d13753ed810795380"
        }
      },
      {
        "id": "JSONToFile",
        "type": "snippetListing",
        "title": "JSONToFile",
        "attributes": {
          "text": "Writes a JSON object to a file.\n\nUse `fs.writeFile()`, template literals and `JSON.stringify()` to write a `json` object to a `.json` file.\n\n",
          "tags": [
            "node",
            "json",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "e7b3dc5eaa43f1ccf6b4863e437b9b4b275ec79fb18623a4c3d0e6ec300d9bcb"
        }
      },
      {
        "id": "last",
        "type": "snippetListing",
        "title": "last",
        "attributes": {
          "text": "Returns the last element in an array.\n\nCheck if `arr` is truthy and has a `length` property, use `arr.length - 1` to compute the index of the last element of the given array and return it, otherwise return `undefined`.\n\n",
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "0cf1faf6ccf465c4f35c162a2d40775ebef33b27e4456d856551cc5a1f3def56"
        }
      },
      {
        "id": "lcm",
        "type": "snippetListing",
        "title": "lcm",
        "attributes": {
          "text": "Returns the least common multiple of two or more numbers.\n\nUse the greatest common divisor (GCD) formula and the fact that `lcm(x,y) = x * y / gcd(x,y)` to determine the least common multiple.\nThe GCD formula uses recursion.\n\n",
          "tags": [
            "math",
            "recursion",
            "beginner"
          ]
        },
        "meta": {
          "hash": "31f59a2480a0c840666af05f87ede6b169aece233b0323e9f03fd79ac7d4bc44"
        }
      },
      {
        "id": "longestItem",
        "type": "snippetListing",
        "title": "longestItem",
        "attributes": {
          "text": "Takes any number of iterable objects or objects with a `length` property and returns the longest one.\nIf multiple objects have the same length, the first one will be returned.\nReturns `undefined` if no arguments are provided.\n\nUse `Array.prototype.reduce()`, comparing the `length` of objects to find the longest one.\n\n",
          "tags": [
            "array",
            "string",
            "utility",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "1277ce52444adcbc3a7b62d5c9019aa3cf01293e7749b8d0e1871ae2aa6a8c88"
        }
      },
      {
        "id": "lowercaseKeys",
        "type": "snippetListing",
        "title": "lowercaseKeys",
        "attributes": {
          "text": "Creates a new object from the specified object, where all the keys are in lowercase.\n\nUse `Object.keys()` and `Array.prototype.reduce()` to create a new object from the specified object.\nConvert each key in the original object to lowercase, using `String.toLowerCase()`.\n\n",
          "tags": [
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "5a7033d47335bedd0239adab9cc2f112a311c28398d46da2bc2196fe61c9ce78"
        }
      },
      {
        "id": "luhnCheck",
        "type": "snippetListing",
        "title": "luhnCheck",
        "attributes": {
          "text": "Implementation of the [Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm) used to validate a variety of identification numbers, such as credit card numbers, IMEI numbers, National Provider Identifier numbers etc.\n\nUse `String.prototype.split('')`, `Array.prototype.reverse()` and `Array.prototype.map()` in combination with `parseInt()` to obtain an array of digits.\nUse `Array.prototype.splice(0,1)` to obtain the last digit.\nUse `Array.prototype.reduce()` to implement the Luhn Algorithm.\nReturn `true` if `sum` is divisible by `10`, `false` otherwise.\n\n",
          "tags": [
            "math",
            "utility",
            "advanced"
          ]
        },
        "meta": {
          "hash": "ab83bac8546d02dfe4227792750f0b4c64cd2c8f8ce6063eef2a3f4357210d63"
        }
      },
      {
        "id": "mapKeys",
        "type": "snippetListing",
        "title": "mapKeys",
        "attributes": {
          "text": "Creates an object with keys generated by running the provided function for each key and the same values as the provided object.\n\nUse `Object.keys(obj)` to iterate over the object's keys.\nUse `Array.prototype.reduce()` to create a new object with the same values and mapped keys using `fn`.\n\n",
          "tags": [
            "object",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "3e721dd4b5fc9a41ed7f3ae6eb888848c8ae557a0feea28f17f945a24ab677ae"
        }
      },
      {
        "id": "mapNumRange",
        "type": "snippetListing",
        "title": "mapNumRange",
        "attributes": {
          "text": "Maps a number from one range to another range.\n\nReturns `num` mapped between `outMin`-`outMax` from `inMin`-`inMax`.\n\n",
          "tags": [
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "46da170d5f14d8070725e9f31e5b24de72aa4b0b476912d602e0480400638c9c"
        }
      },
      {
        "id": "mapObject",
        "type": "snippetListing",
        "title": "mapObject",
        "attributes": {
          "text": "Maps the values of an array to an object using a function, where the key-value pairs consist of the stringified value as the key and the mapped value.\n\nUse an anonymous inner function scope to declare an undefined memory space, using closures to store a return value. Use a new `Array` to store the array with a map of the function over its data set and a comma operator to return a second step, without needing to move from one context to another (due to closures and order of operations).\n\n",
          "tags": [
            "array",
            "object",
            "advanced"
          ]
        },
        "meta": {
          "hash": "3afc30c02480be79ae5fb41e05ee2b1cc6f3b408ccb64a1a192d0ad34148ede2"
        }
      },
      {
        "id": "mapString",
        "type": "snippetListing",
        "title": "mapString",
        "attributes": {
          "text": "Creates a new string with the results of calling a provided function on every character in the calling string.\n\nUse `String.prototype.split('')` and `Array.prototype.map()` to call the provided function, `fn`, for each character in `str`.\nUse `Array.prototype.join('')` to recombine the array of characters into a string.\nThe callback function, `fn`, takes three arguments (the current character, the index of the current character and the string `mapString` was called upon).\n\n",
          "tags": [
            "string",
            "array",
            "function",
            "utility",
            "beginner"
          ]
        },
        "meta": {
          "hash": "c4df98d941aeadd165c6a02143d79f7a9bf013f8c221f709aa545bf83495a956"
        }
      },
      {
        "id": "mapValues",
        "type": "snippetListing",
        "title": "mapValues",
        "attributes": {
          "text": "Creates an object with the same keys as the provided object and values generated by running the provided function for each value.\n\nUse `Object.keys(obj)` to iterate over the object's keys.\nUse `Array.prototype.reduce()` to create a new object with the same keys and mapped values using `fn`.\n\n",
          "tags": [
            "object",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "3853716eb171ac10f5b6dbd0b6afda1342262de305336cd0effd43dc75592f3c"
        }
      },
      {
        "id": "mask",
        "type": "snippetListing",
        "title": "mask",
        "attributes": {
          "text": "Replaces all but the last `num` of characters with the specified mask character.\n\nUse `String.prototype.slice()` to grab the portion of the characters that will remain unmasked and use `String.padStart()` to fill the beginning of the string with the mask character up to the original length.\nOmit the second argument, `num`, to keep a default of `4` characters unmasked. If `num` is negative, the unmasked characters will be at the start of the string.\nOmit the third argument, `mask`, to use a default character of `'*'` for the mask.\n\n",
          "tags": [
            "string",
            "utility",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "d95e586ebffdfdbaa182feb6a21c41619d6bacde9b7a49ace88b2c958480f25d"
        }
      },
      {
        "id": "matches",
        "type": "snippetListing",
        "title": "matches",
        "attributes": {
          "text": "Compares two objects to determine if the first one contains equivalent property values to the second one.\n\nUse `Object.keys(source)` to get all the keys of the second object, then `Array.prototype.every()`, `Object.hasOwnProperty()` and strict comparison to determine if all keys exist in the first object and have the same values.\n\n",
          "tags": [
            "object",
            "type",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "45206aac5046169bce32aeeb14785735eb11b42e0bf8d3911531ae1ce6a56282"
        }
      },
      {
        "id": "matchesWith",
        "type": "snippetListing",
        "title": "matchesWith",
        "attributes": {
          "text": "Compares two objects to determine if the first one contains equivalent property values to the second one, based on a provided function.\n\nUse `Object.keys(source)` to get all the keys of the second object, then `Array.prototype.every()`, `Object.hasOwnProperty()` and the provided function to determine if all keys exist in the first object and have equivalent values.\nIf no function is provided, the values will be compared using the equality operator.\n\n",
          "tags": [
            "object",
            "type",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "27bc40621fd8cb1b6ded57d7bbbbb33590d889ff87a5e418ef2c0ec6e4005505"
        }
      },
      {
        "id": "maxBy",
        "type": "snippetListing",
        "title": "maxBy",
        "attributes": {
          "text": "Returns the maximum value of an array, after mapping each element to a value using the provided function.\n\nUse `Array.prototype.map()` to map each element to the value returned by `fn`, `Math.max()` to get the maximum value.\n\n",
          "tags": [
            "math",
            "array",
            "function",
            "beginner"
          ]
        },
        "meta": {
          "hash": "bcedf0ea886a7ef2c3a4a925335f087c0bab2e2cb3eb4bc5843f7951cbd5c798"
        }
      },
      {
        "id": "maxDate",
        "type": "snippetListing",
        "title": "maxDate",
        "attributes": {
          "text": "Returns the maximum of the given dates.\n\nUse the ES6 spread syntax with `Math.max` to find the maximum date value, `new Date()` to convert it to a `Date` object.\n\n",
          "tags": [
            "date",
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "dc618772c3321607f451b13b124358fd3207f81fbeaa7f2deb3b7cd1da671175"
        }
      },
      {
        "id": "maxN",
        "type": "snippetListing",
        "title": "maxN",
        "attributes": {
          "text": "Returns the `n` maximum elements from the provided array.\nIf `n` is greater than or equal to the provided array's length, then return the original array (sorted in descending order).\n\nUse `Array.prototype.sort()` combined with the spread operator (`...`) to create a shallow clone of the array and sort it in descending order.\nUse `Array.prototype.slice()` to get the specified number of elements.\nOmit the second argument, `n`, to get a one-element array.\n\n",
          "tags": [
            "array",
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "888b1addde4cd2fa6137733130e9d847a87299d6753ddda5c8dd8c94b542db80"
        }
      },
      {
        "id": "median",
        "type": "snippetListing",
        "title": "median",
        "attributes": {
          "text": "Returns the median of an array of numbers.\n\nFind the middle of the array, use `Array.prototype.sort()` to sort the values.\nReturn the number at the midpoint if `length` is odd, otherwise the average of the two middle numbers.\n\n",
          "tags": [
            "math",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "bf0a5bf2fe4d28262fe7e8f3eec16d24c05a177b06d20937db413c0d404cda12"
        }
      },
      {
        "id": "memoize",
        "type": "snippetListing",
        "title": "memoize",
        "attributes": {
          "text": "Returns the memoized (cached) function.\n\nCreate an empty cache by instantiating a new `Map` object.\nReturn a function which takes a single argument to be supplied to the memoized function by first checking if the function's output for that specific input value is already cached, or store and return it if not. The `function` keyword must be used in order to allow the memoized function to have its `this` context changed if necessary.\nAllow access to the `cache` by setting it as a property on the returned function.\n\n",
          "tags": [
            "function",
            "advanced"
          ]
        },
        "meta": {
          "hash": "451dd1fad58f3d4984363426a0f77e9a26697f6be944d53ed82d32c71849280e"
        }
      },
      {
        "id": "merge",
        "type": "snippetListing",
        "title": "merge",
        "attributes": {
          "text": "Creates a new object from the combination of two or more objects.\n\nUse `Array.prototype.reduce()` combined with `Object.keys(obj)` to iterate over all objects and keys.\nUse `hasOwnProperty()` and `Array.prototype.concat()` to append values for keys existing in multiple objects.\n\n",
          "tags": [
            "object",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "cda4db6e9da35706f6e4b13f2860a210433c8bc2ac6078f9ff63aef6771c72d3"
        }
      },
      {
        "id": "midpoint",
        "type": "snippetListing",
        "title": "midpoint",
        "attributes": {
          "text": "Calculates the midpoint between two pairs of (x,y) points.\n\nDestructure the array to get `x1`, `y1`, `x2` and `y2`, calculate the midpoint for each dimension by dividing the sum of the two endpoints by `2`.\n\n",
          "tags": [
            "math",
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "f9db07575860cfcc7fc619788c33821d7adb390d44b68160d6e561bfe41f7316"
        }
      },
      {
        "id": "minBy",
        "type": "snippetListing",
        "title": "minBy",
        "attributes": {
          "text": "Returns the minimum value of an array, after mapping each element to a value using the provided function.\n\nUse `Array.prototype.map()` to map each element to the value returned by `fn`, `Math.min()` to get the minimum value.\n\n",
          "tags": [
            "math",
            "array",
            "function",
            "beginner"
          ]
        },
        "meta": {
          "hash": "4c4ea74f666a35184db36bd5084614743446091a699086a5e5280ac2891be1c2"
        }
      },
      {
        "id": "minDate",
        "type": "snippetListing",
        "title": "minDate",
        "attributes": {
          "text": "Returns the minimum of the given dates.\n\nUse the ES6 spread syntax to find the minimum date value, `new Date()` to convert it to a `Date` object.\n\n",
          "tags": [
            "date",
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "cf59c98e2fc56230399d301d1e3645dd5961389c5c361d763e4a5fce01d22db2"
        }
      },
      {
        "id": "minN",
        "type": "snippetListing",
        "title": "minN",
        "attributes": {
          "text": "Returns the `n` minimum elements from the provided array.\nIf `n` is greater than or equal to the provided array's length, then return the original array (sorted in ascending order).\n\nUse `Array.prototype.sort()` combined with the spread operator (`...`) to create a shallow clone of the array and sort it in ascending order.\nUse `Array.prototype.slice()` to get the specified number of elements.\nOmit the second argument, `n`, to get a one-element array.\n\n",
          "tags": [
            "array",
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "65bcfbbf3937f35f591285306ec3bfbee46a1738a6a8f097c99bf07150aec198"
        }
      },
      {
        "id": "mostFrequent",
        "type": "snippetListing",
        "title": "mostFrequent",
        "attributes": {
          "text": "Returns the most frequent element in an array.\n\nUse `Array.prototype.reduce()` to map unique values to an object's keys, adding to existing keys every time the same value is encountered.\nUse `Object.entries()` on the result in combination with `Array.prototype.reduce()` to get the most frequent value in the array.\n\n",
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "0c04c74cdbb51195f740a163776cb5c4e21a57a59099a1740211cf0764c6c9cc"
        }
      },
      {
        "id": "mostPerformant",
        "type": "snippetListing",
        "title": "mostPerformant",
        "attributes": {
          "text": "Returns the index of the function in an array of functions which executed the fastest.\n\nUse `Array.prototype.map()` to generate an array where each value is the total time taken to execute the function after `iterations` times. Use the difference in `performance.now()` values before and after to get the total time in milliseconds to a high degree of accuracy.\nUse `Math.min()` to find the minimum execution time, and return the index of that shortest time which corresponds to the index of the most performant function.\nOmit the second argument, `iterations`, to use a default of 10,000 iterations. The more iterations, the more reliable the result but the longer it will take.\n\n",
          "tags": [
            "utility",
            "function"
          ]
        },
        "meta": {
          "hash": "120e31fa38796906a99beccdc457e83a8075e6ec72b5a937e03913b2e996ae26"
        }
      },
      {
        "id": "negate",
        "type": "snippetListing",
        "title": "negate",
        "attributes": {
          "text": "Negates a predicate function.\n\nTake a predicate function and apply the not operator (`!`) to it with its arguments.\n\n",
          "tags": [
            "function",
            "beginner"
          ]
        },
        "meta": {
          "hash": "20deb11c89b14b294b13f9846fde62e4a9ac8df0a71553509431b16b5c88d24a"
        }
      },
      {
        "id": "nest",
        "type": "snippetListing",
        "title": "nest",
        "attributes": {
          "text": "Given a flat array of objects linked to one another, it will nest them recursively.\nUseful for nesting comments, such as the ones on reddit.com.\n\nUse recursion.\nUse `Array.prototype.filter()` to filter the items where the `id` matches the `link`, then `Array.prototype.map()` to map each one to a new object that has a `children` property which recursively nests the items based on which ones are children of the current item.\nOmit the second argument, `id`, to default to `null` which indicates the object is not linked to another one (i.e. it is a top level object).\nOmit the third argument, `link`, to use `'parent_id'` as the default property which links the object to another one by its `id`.\n\n",
          "tags": [
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "6133ec3409b8c18ccfc89d857149c7875eb4733803772b43743df3b7c51bd02c"
        }
      },
      {
        "id": "nodeListToArray",
        "type": "snippetListing",
        "title": "nodeListToArray",
        "attributes": {
          "text": "Converts a `NodeList` to an array.\n\nUse spread operator inside new array to convert a `NodeList` to an array.\n\n",
          "tags": [
            "browser",
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "3c4f99f0a0b9d2103e7ed3553bf7268475135603aa46d2eae204d3f34fe51ffd"
        }
      },
      {
        "id": "none",
        "type": "snippetListing",
        "title": "none",
        "attributes": {
          "text": "Returns `true` if the provided predicate function returns `false` for all elements in a collection, `false` otherwise.\n\nUse `Array.prototype.some()` to test if any elements in the collection return `true` based on `fn`.\nOmit the second argument, `fn`, to use `Boolean` as a default.\n\n",
          "tags": [
            "array",
            "function",
            "beginner"
          ]
        },
        "meta": {
          "hash": "a11f7bdacee4978a1cc579091b04a912962a239dc7bd442518420a4d39c290d5"
        }
      },
      {
        "id": "nthArg",
        "type": "snippetListing",
        "title": "nthArg",
        "attributes": {
          "text": "Creates a function that gets the argument at index `n`. If `n` is negative, the nth argument from the end is returned.\n\nUse `Array.prototype.slice()` to get the desired argument at index `n`.\n\n",
          "tags": [
            "utility",
            "function",
            "beginner"
          ]
        },
        "meta": {
          "hash": "1885078f5fddc5de00844a837ab3c427f770c5325a70d5362ecab26c1c904125"
        }
      },
      {
        "id": "nthElement",
        "type": "snippetListing",
        "title": "nthElement",
        "attributes": {
          "text": "Returns the nth element of an array.\n\nUse `Array.prototype.slice()` to get an array containing the nth element at the first place.\nIf the index is out of bounds, return `undefined`.\nOmit the second argument, `n`, to get the first element of the array.\n\n",
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "51af30db5952a0473fe9ae72c338b974a88813cbca522ba56d0dc3b4ec6fc51c"
        }
      },
      {
        "id": "objectFromPairs",
        "type": "snippetListing",
        "title": "objectFromPairs",
        "attributes": {
          "text": "Creates an object from the given key-value pairs.\n\nUse `Array.prototype.reduce()` to create and combine key-value pairs.\n\n",
          "tags": [
            "object",
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "99537507288f1e101bfc0f80ba708b415832b27ce060033fbba8bdfc32cc3cea"
        }
      },
      {
        "id": "objectToPairs",
        "type": "snippetListing",
        "title": "objectToPairs",
        "attributes": {
          "text": "Creates an array of key-value pair arrays from an object.\n\nUse `Object.entries()` to get an array of key-value pair arrays from the given object.\n\n",
          "tags": [
            "object",
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "dac621c1f33fd6a1a404690d73ad5f7b0a89aae180e9e16aa3af9e0e6d64e411"
        }
      },
      {
        "id": "objectToQueryString",
        "type": "snippetListing",
        "title": "objectToQueryString",
        "attributes": {
          "text": "Returns a query string generated from the key-value pairs of the given object.\n\nUse `Array.prototype.reduce()` on `Object.entries(queryParameters)` to create the query string.\nDetermine the `symbol` to be either `?` or `&` based on the `length` of `queryString` and concatenate `val` to `queryString` only if it's a string.\nReturn the `queryString` or an empty string when the `queryParameters` are falsy.\n\n",
          "tags": [
            "utility",
            "object",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "b031c3387ef66411ab5d295788eac4247ada5b4b068dda90603d3c973890bc26"
        }
      },
      {
        "id": "observeMutations",
        "type": "snippetListing",
        "title": "observeMutations",
        "attributes": {
          "text": "Returns a new MutationObserver and runs the provided callback for each mutation on the specified element.\n\nUse a [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) to observe mutations on the given element.\nUse `Array.prototype.forEach()` to run the callback for each mutation that is observed.\nOmit the third argument, `options`, to use the default [options](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver#MutationObserverInit) (all `true`).\n\n",
          "tags": [
            "browser",
            "event",
            "advanced"
          ]
        },
        "meta": {
          "hash": "98673c6d6bebe907c0ac285f342147f30de01bc326feb5109b6d25739fe473aa"
        }
      },
      {
        "id": "off",
        "type": "snippetListing",
        "title": "off",
        "attributes": {
          "text": "Removes an event listener from an element.\n\nUse `EventTarget.removeEventListener()` to remove an event listener from an element. \nOmit the fourth argument `opts` to use `false` or specify it based on the options used when the event listener was added.\n\n",
          "tags": [
            "browser",
            "event",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "ab081473a5589edddab0b641758744ee5a65bf43cb93eeca23f48e86e0fdbb9c"
        }
      },
      {
        "id": "offset",
        "type": "snippetListing",
        "title": "offset",
        "attributes": {
          "text": "Moves the specified amount of elements to the end of the array.\n\nUse `Array.prototype.slice()` twice to get the elements after the specified index and the elements before that.\nUse the spread operator(`...`) to combine the two into one array.\nIf `offset` is negative, the elements will be moved from end to start.\n\n",
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "87cd3d6c458b2ecbb373645230a03c7e0770ca3991c635571ffaae5d7a40987c"
        }
      },
      {
        "id": "omit",
        "type": "snippetListing",
        "title": "omit",
        "attributes": {
          "text": "Omits the key-value pairs corresponding to the given keys from an object.\n\nUse `Object.keys(obj)`, `Array.prototype.filter()` and `Array.prototype.includes()` to remove the provided keys.\nUse `Array.prototype.reduce()` to convert the filtered keys back to an object with the corresponding key-value pairs.\n\n",
          "tags": [
            "object",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "64c941025c6bf130b6b6639427cf64c8af5759734118efbbbec9e8d490845a10"
        }
      },
      {
        "id": "omitBy",
        "type": "snippetListing",
        "title": "omitBy",
        "attributes": {
          "text": "Creates an object composed of the properties the given function returns falsy for. The function is invoked with two arguments: (value, key).\n\nUse `Object.keys(obj)` and `Array.prototype.filter()`to remove the keys for which `fn` returns a truthy value.\nUse `Array.prototype.reduce()` to convert the filtered keys back to an object with the corresponding key-value pairs.\n\n",
          "tags": [
            "object",
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "2119b62768ca88da15cef3bb1671c65a557d81f224c846bdaa6a75d320577366"
        }
      },
      {
        "id": "on",
        "type": "snippetListing",
        "title": "on",
        "attributes": {
          "text": "Adds an event listener to an element with the ability to use event delegation.\n\nUse `EventTarget.addEventListener()` to add an event listener to an element. If there is a `target` property supplied to the options object, ensure the event target matches the target specified and then invoke the callback by supplying the correct `this` context.\nReturns a reference to the custom delegator function, in order to be possible to use with [`off`](#off).\nOmit `opts` to default to non-delegation behavior and event bubbling.\n\n",
          "tags": [
            "browser",
            "event",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "37b8c9323006f3eb66cbfbe240d5020ef0896e312e9f1ed949b200a767324877"
        }
      },
      {
        "id": "once",
        "type": "snippetListing",
        "title": "once",
        "attributes": {
          "text": "Ensures a function is called only once.\n\nUtilizing a closure, use a flag, `called`, and set it to `true` once the function is called for the first time, preventing it from being called again. In order to allow the function to have its `this` context changed (such as in an event listener), the `function` keyword must be used, and the supplied function must have the context applied.\nAllow the function to be supplied with an arbitrary number of arguments using the rest/spread (`...`) operator.\n\n",
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "61603245edccd32edad26ecdbf39d3c8d99bde8d2672a1a392508ca9c30c6d22"
        }
      },
      {
        "id": "onUserInputChange",
        "type": "snippetListing",
        "title": "onUserInputChange",
        "attributes": {
          "text": "Run the callback whenever the user input type changes (`mouse` or `touch`). Useful for enabling/disabling code depending on the input device. This process is dynamic and works with hybrid devices (e.g. touchscreen laptops).\n\nUse two event listeners. Assume `mouse` input initially and bind a `touchstart` event listener to the document. \nOn `touchstart`, add a `mousemove` event listener to listen for two consecutive `mousemove` events firing within 20ms, using `performance.now()`.\nRun the callback with the input type as an argument in either of these situations.\n\n",
          "tags": [
            "browser",
            "event",
            "advanced"
          ]
        },
        "meta": {
          "hash": "f12c78c23280839489bf4dfae847eeab3ceb72fef326b5bca3f2ed1bdcc44ee3"
        }
      },
      {
        "id": "orderBy",
        "type": "snippetListing",
        "title": "orderBy",
        "attributes": {
          "text": "Returns a sorted array of objects ordered by properties and orders.\n\nUses `Array.prototype.sort()`, `Array.prototype.reduce()` on the `props` array with a default value of `0`, use array destructuring to swap the properties position depending on the order passed.\nIf no `orders` array is passed it sort by `'asc'` by default.\n\n",
          "tags": [
            "object",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "a53f86761dacc7d0bc184c304dd2e59461a393d45214212d17d02a8df94144b0"
        }
      },
      {
        "id": "over",
        "type": "snippetListing",
        "title": "over",
        "attributes": {
          "text": "Creates a function that invokes each provided function with the arguments it receives and returns the results.\n\nUse `Array.prototype.map()` and `Function.prototype.apply()` to apply each function to the given arguments.\n\n",
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "d19ede265d140ecd73abb0a471042ab93591ef7b19ba92d3f8a0462661bdc99f"
        }
      },
      {
        "id": "overArgs",
        "type": "snippetListing",
        "title": "overArgs",
        "attributes": {
          "text": "Creates a function that invokes the provided function with its arguments transformed.\n\nUse `Array.prototype.map()` to apply `transforms` to `args` in combination with the spread operator (`...`) to pass the transformed arguments to `fn`.\n\n",
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "5a47cd886751568aa2ce0bd8a935d3f4730076c509666b66f7305f3660320847"
        }
      },
      {
        "id": "pad",
        "type": "snippetListing",
        "title": "pad",
        "attributes": {
          "text": "Pads a string on both sides with the specified character, if it's shorter than the specified length.\n\nUse `String.prototype.padStart()` and `String.prototype.padEnd()` to pad both sides of the given string.\nOmit the third argument, `char`, to use the whitespace character as the default padding character.\n\n",
          "tags": [
            "string",
            "beginner"
          ]
        },
        "meta": {
          "hash": "d330cea0a63c1e50ca7f0203024ab7a7994e15cdaa04361e8a99feaf71ffb42f"
        }
      },
      {
        "id": "palindrome",
        "type": "snippetListing",
        "title": "palindrome",
        "attributes": {
          "text": "Returns `true` if the given string is a palindrome, `false` otherwise.\n\nConvert the string to `String.prototype.toLowerCase()` and use `String.prototype.replace()` to remove non-alphanumeric characters from it.\nThen, use the spread operator (`...`) to split the string into individual characters, `Array.prototype.reverse()`, `String.prototype.join('')` and compare it to the original, unreversed string, after converting it to `String.prototype.toLowerCase()`.\n\n",
          "tags": [
            "string",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "1cb29029bb6d17d5ab853b7f932e39e56639d294d732eff00d621fcffb24adb3"
        }
      },
      {
        "id": "parseCookie",
        "type": "snippetListing",
        "title": "parseCookie",
        "attributes": {
          "text": "Parse an HTTP Cookie header string and return an object of all cookie name-value pairs.\n\nUse `String.prototype.split(';')` to separate key-value pairs from each other.\nUse `Array.prototype.map()` and `String.prototype.split('=')` to separate keys from values in each pair.\nUse `Array.prototype.reduce()` and `decodeURIComponent()` to create an object with all key-value pairs.\n\n",
          "tags": [
            "utility",
            "string",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "c25aef075df93042a81bd98ebd7b77aefb91df3f08b9f1d2e7859ec0d95ad55b"
        }
      },
      {
        "id": "partial",
        "type": "snippetListing",
        "title": "partial",
        "attributes": {
          "text": "Creates a function that invokes `fn` with `partials` prepended to the arguments it receives.\n\nUse the spread operator (`...`) to prepend `partials` to the list of arguments of `fn`.\n\n",
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "fc0a07189064e1026c5a350923b1aa833523c2755eef1d66f9567a15caeebdf8"
        }
      },
      {
        "id": "partialRight",
        "type": "snippetListing",
        "title": "partialRight",
        "attributes": {
          "text": "Creates a function that invokes `fn` with `partials` appended to the arguments it receives.\n\nUse the spread operator (`...`) to append `partials` to the list of arguments of `fn`.\n\n",
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "4d3cd9630e00f8c723b8321f1c17d17c4c7d0b7ad025dbafda492897b8300a24"
        }
      },
      {
        "id": "partition",
        "type": "snippetListing",
        "title": "partition",
        "attributes": {
          "text": "Groups the elements into two arrays, depending on the provided function's truthiness for each element.\n\nUse `Array.prototype.reduce()` to create an array of two arrays.\nUse `Array.prototype.push()` to add elements for which `fn` returns `true` to the first array and elements for which `fn` returns `false` to the second one.\n\n",
          "tags": [
            "array",
            "object",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "fdaa6d4470e5bb113a2c20008652bf0030d23fbee789ca6c3c4ce0c9be9ae700"
        }
      },
      {
        "id": "percentile",
        "type": "snippetListing",
        "title": "percentile",
        "attributes": {
          "text": "Uses the percentile formula to calculate how many numbers in the given array are less or equal to the given value.\n\nUse `Array.prototype.reduce()` to calculate how many numbers are below the value and how many are the same value and apply the percentile formula.\n\n",
          "tags": [
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "6fb26c1c3157de2309d5fe08354345d9bd18d175cc29e049cc5f19363f7ed374"
        }
      },
      {
        "id": "permutations",
        "type": "snippetListing",
        "title": "permutations",
        "attributes": {
          "text": "Generates all permutations of an array's elements (contains duplicates).\n\n⚠️ **WARNING**: This function's execution time increases exponentially with each array element. Anything more than 8 to 10 entries will cause your browser to hang as it tries to solve all the different combinations.\n\nUse recursion.\nFor each element in the given array, create all the partial permutations for the rest of its elements.\nUse `Array.prototype.map()` to combine the element with each partial permutation, then `Array.prototype.reduce()` to combine all permutations in one array.\nBase cases are for array `length` equal to `2` or `1`.\n\n",
          "tags": [
            "array",
            "recursion",
            "advanced"
          ]
        },
        "meta": {
          "hash": "821e55db97be7e29b6a969cafbaf06da5ad72d5677eb9e275fb43d536052655b"
        }
      },
      {
        "id": "pick",
        "type": "snippetListing",
        "title": "pick",
        "attributes": {
          "text": "Picks the key-value pairs corresponding to the given keys from an object.\n\nUse `Array.prototype.reduce()` to convert the filtered/picked keys back to an object with the corresponding key-value pairs if the key exists in the object.\n\n",
          "tags": [
            "object",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "d8d3bc54bdc1ba649c052658a09ddd415ad88a30409d13489b32684c150cb799"
        }
      },
      {
        "id": "pickBy",
        "type": "snippetListing",
        "title": "pickBy",
        "attributes": {
          "text": "Creates an object composed of the properties the given function returns truthy for. The function is invoked with two arguments: (value, key).\n\nUse `Object.keys(obj)` and `Array.prototype.filter()`to remove the keys for which `fn` returns a falsy value.\nUse `Array.prototype.reduce()` to convert the filtered keys back to an object with the corresponding key-value pairs.\n\n",
          "tags": [
            "object",
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "19851ac642bb32dcc56042f8e4f15184b293e300bd818a07573b8e23d1a1d06e"
        }
      },
      {
        "id": "pipeAsyncFunctions",
        "type": "snippetListing",
        "title": "pipeAsyncFunctions",
        "attributes": {
          "text": "Performs left-to-right function composition for asynchronous functions.\n\nUse `Array.prototype.reduce()` with the spread operator (`...`) to perform left-to-right function composition using `Promise.then()`.\nThe functions can return a combination of: simple values, `Promise`'s, or they can be defined as `async` ones returning through `await`.\nAll functions must be unary.\n\n",
          "tags": [
            "function",
            "promise",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "0eb844801e767edcaa6a882a6dce4b5b1dadecb53a92d6ec259d36c57b6a3dd0"
        }
      },
      {
        "id": "pipeFunctions",
        "type": "snippetListing",
        "title": "pipeFunctions",
        "attributes": {
          "text": "Performs left-to-right function composition.\n\nUse `Array.prototype.reduce()` with the spread operator (`...`) to perform left-to-right function composition.\nThe first (leftmost) function can accept one or more arguments; the remaining functions must be unary.\n\n",
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "6b85e9e5022873b5f6d6e955b383edb46e8c37615d9266fb5ee1af7939f08686"
        }
      },
      {
        "id": "pluralize",
        "type": "snippetListing",
        "title": "pluralize",
        "attributes": {
          "text": "Returns the singular or plural form of the word based on the input number. If the first argument is an `object`, it will use a closure by returning a function that can auto-pluralize words that don't simply end in `s` if the supplied dictionary contains the word.\n\nIf `num` is either `-1` or `1`, return the singular form of the word. If `num` is any other number, return the plural form. Omit the third argument to use the default of the singular word + `s`, or supply a custom pluralized word when necessary. If the first argument is an `object`, utilize a closure by returning a function which can use the supplied dictionary to resolve the correct plural form of the word.\n\n",
          "tags": [
            "string",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "3bcd52927608bd59de8e20369fbd51f39b99d77b19f66de4de8bbc80140ea009"
        }
      },
      {
        "id": "powerset",
        "type": "snippetListing",
        "title": "powerset",
        "attributes": {
          "text": "Returns the powerset of a given array of numbers.\n\nUse `Array.prototype.reduce()` combined with `Array.prototype.map()` to iterate over elements and combine into an array containing all combinations.\n\n",
          "tags": [
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "b19b526319caff44e7b15c3126128701dedaa76b74cedb50761003268676b5b6"
        }
      },
      {
        "id": "prefix",
        "type": "snippetListing",
        "title": "prefix",
        "attributes": {
          "text": "Returns the prefixed version (if necessary) of a CSS property that the browser supports.\n\nUse `Array.prototype.findIndex()` on an array of vendor prefix strings to test if `document.body` has one of them defined in its `CSSStyleDeclaration` object, otherwise return `null`.\nUse `String.prototype.charAt()` and `String.prototype.toUpperCase()` to capitalize the property, which will be appended to the vendor prefix string.\n\n",
          "tags": [
            "browser",
            "utility",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "6668f37f9f1158b2bdd292ad64defea6e33a0b2908ea1e494b191dcaa9f039d6"
        }
      },
      {
        "id": "prettyBytes",
        "type": "snippetListing",
        "title": "prettyBytes",
        "attributes": {
          "text": "Converts a number in bytes to a human-readable string.\n\nUse an array dictionary of units to be accessed based on the exponent.\nUse `Number.toPrecision()` to truncate the number to a certain number of digits.\nReturn the prettified string by building it up, taking into account the supplied options and whether it is negative or not.\nOmit the second argument, `precision`, to use a default precision of `3` digits.\nOmit the third argument, `addSpace`, to add space between the number and unit by default.\n\n",
          "tags": [
            "utility",
            "string",
            "math",
            "advanced"
          ]
        },
        "meta": {
          "hash": "e752de4a4f2b339851e796a5289e7adde51cf7e672b8230fd97bf79cf7330758"
        }
      },
      {
        "id": "primes",
        "type": "snippetListing",
        "title": "primes",
        "attributes": {
          "text": "Generates primes up to a given number, using the Sieve of Eratosthenes.\n\nGenerate an array from `2` to the given number. Use `Array.prototype.filter()` to filter out the values divisible by any number from `2` to the square root of the provided number.\n\n",
          "tags": [
            "math",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "8c11b6647c91c22969f8c568cf248a9c3c5b08323fe9491c3fad2cbbce90a8ac"
        }
      },
      {
        "id": "promisify",
        "type": "snippetListing",
        "title": "promisify",
        "attributes": {
          "text": "Converts an asynchronous function to return a promise.\n\n*In Node 8+, you can use [`util.promisify`](https://nodejs.org/api/util.html#util_util_promisify_original)*\n\nUse currying to return a function returning a `Promise` that calls the original function.\nUse the `...rest` operator to pass in all the parameters.\n\n",
          "tags": [
            "function",
            "promise",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "fa80063e1d74810a551c7f01397b126868a1a7f7b306859182b033aa4a2696d4"
        }
      },
      {
        "id": "pull",
        "type": "snippetListing",
        "title": "pull",
        "attributes": {
          "text": "Mutates the original array to filter out the values specified.\n\nUse `Array.prototype.filter()` and `Array.prototype.includes()` to pull out the values that are not needed.\nUse `Array.prototype.length = 0` to mutate the passed in an array by resetting it's length to zero and `Array.prototype.push()` to re-populate it with only the pulled values.\n\n",
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "72fb580d39611c91cd9fa263a0f1bcb44bfd4c77815051bb2dd68e9931d21701"
        }
      },
      {
        "id": "pullAtIndex",
        "type": "snippetListing",
        "title": "pullAtIndex",
        "attributes": {
          "text": "Mutates the original array to filter out the values at the specified indexes.\n\nUse `Array.prototype.filter()` and `Array.prototype.includes()` to pull out the values that are not needed.\nUse `Array.prototype.length = 0` to mutate the passed in an array by resetting it's length to zero and `Array.prototype.push()` to re-populate it with only the pulled values.\nUse `Array.prototype.push()` to keep track of pulled values\n\n",
          "tags": [
            "array",
            "advanced"
          ]
        },
        "meta": {
          "hash": "dacbce5a4a058056f0c33a7975c4bdb586037223f6713d2d27379c9cb2eb93cd"
        }
      },
      {
        "id": "pullAtValue",
        "type": "snippetListing",
        "title": "pullAtValue",
        "attributes": {
          "text": "Mutates the original array to filter out the values specified. Returns the removed elements.\n\nUse `Array.prototype.filter()` and `Array.prototype.includes()` to pull out the values that are not needed.\nUse `Array.prototype.length = 0` to mutate the passed in an array by resetting it's length to zero and `Array.prototype.push()` to re-populate it with only the pulled values.\nUse `Array.prototype.push()` to keep track of pulled values\n\n",
          "tags": [
            "array",
            "advanced"
          ]
        },
        "meta": {
          "hash": "760685e275cac5e2b81b035cfd4799eb8e39483d56d5a483a0a04e19bf46a29d"
        }
      },
      {
        "id": "pullBy",
        "type": "snippetListing",
        "title": "pullBy",
        "attributes": {
          "text": "Mutates the original array to filter out the values specified, based on a given iterator function.\n\nCheck if the last argument provided in a function.\nUse `Array.prototype.map()` to apply the iterator function `fn` to all array elements.\nUse `Array.prototype.filter()` and `Array.prototype.includes()` to pull out the values that are not needed.\nUse `Array.prototype.length = 0` to mutate the passed in an array by resetting it's length to zero and `Array.prototype.push()` to re-populate it with only the pulled values.\n\n",
          "tags": [
            "array",
            "function",
            "advanced"
          ]
        },
        "meta": {
          "hash": "5166b5b5b9812d42c50364953ceb2311cafad66eb8881f21ec7d949396e6effb"
        }
      },
      {
        "id": "radsToDegrees",
        "type": "snippetListing",
        "title": "radsToDegrees",
        "attributes": {
          "text": "Converts an angle from radians to degrees.\n\nUse `Math.PI` and the radian to degree formula to convert the angle from radians to degrees.\n\n",
          "tags": [
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "1a510a46746f7ea0eafcdc6a06eec78da731788311ef42a70e3a42c2a4080f60"
        }
      },
      {
        "id": "randomHexColorCode",
        "type": "snippetListing",
        "title": "randomHexColorCode",
        "attributes": {
          "text": "Generates a random hexadecimal color code.\n\nUse `Math.random` to generate a random 24-bit(6x4bits) hexadecimal number. Use bit shifting and then convert it to an hexadecimal String using `toString(16)`.\n\n",
          "tags": [
            "utility",
            "random",
            "beginner"
          ]
        },
        "meta": {
          "hash": "42788f8392f5511db3641dbe2ab92b2c043b3b5209e95c386c73e5d96eaa63af"
        }
      },
      {
        "id": "randomIntArrayInRange",
        "type": "snippetListing",
        "title": "randomIntArrayInRange",
        "attributes": {
          "text": "Returns an array of n random integers in the specified range.\n\nUse `Array.from()` to create an empty array of the specific length, `Math.random()` to generate a random number and map it to the desired range, using `Math.floor()` to make it an integer.\n\n",
          "tags": [
            "math",
            "utility",
            "random",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "7bff02cd849d994da1229f3153cca71b4c054d6774ab732101a5f60a0a04ba3a"
        }
      },
      {
        "id": "randomIntegerInRange",
        "type": "snippetListing",
        "title": "randomIntegerInRange",
        "attributes": {
          "text": "Returns a random integer in the specified range.\n\nUse `Math.random()` to generate a random number and map it to the desired range, using `Math.floor()` to make it an integer.\n\n",
          "tags": [
            "math",
            "utility",
            "random",
            "beginner"
          ]
        },
        "meta": {
          "hash": "8d8cca3d593e677c8a4ffc17e9f97b3018f800e7c014daa3462edc152fbbeec7"
        }
      },
      {
        "id": "randomNumberInRange",
        "type": "snippetListing",
        "title": "randomNumberInRange",
        "attributes": {
          "text": "Returns a random number in the specified range.\n\nUse `Math.random()` to generate a random value, map it to the desired range using multiplication.\n\n",
          "tags": [
            "math",
            "utility",
            "random",
            "beginner"
          ]
        },
        "meta": {
          "hash": "c86e3227e32565afb301805798da3a46756e13bff0115b880fcc3175a58d95af"
        }
      },
      {
        "id": "readFileLines",
        "type": "snippetListing",
        "title": "readFileLines",
        "attributes": {
          "text": "Returns an array of lines from the specified file.\n\nUse `readFileSync` function in `fs` node package to create a `Buffer` from a file.\nconvert buffer to string using `toString(encoding)` function.\ncreating an array from contents of file by `split`ing file content line by line (each `\\n`).\n\n",
          "tags": [
            "node",
            "array",
            "string",
            "beginner"
          ]
        },
        "meta": {
          "hash": "d84f789a1b8a11d0fa4daf8e5f015e9839340adfefbc210e2304de8d63649f9e"
        }
      },
      {
        "id": "rearg",
        "type": "snippetListing",
        "title": "rearg",
        "attributes": {
          "text": "Creates a function that invokes the provided function with its arguments arranged according to the specified indexes.\n\nUse `Array.prototype.map()` to reorder arguments based on `indexes` in combination with the spread operator (`...`) to pass the transformed arguments to `fn`.\n\n",
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "cb2326c19a1292426193785d4cf2c47b5e8d83a99edb7f3415f8c4e057f6a70b"
        }
      },
      {
        "id": "recordAnimationFrames",
        "type": "snippetListing",
        "title": "recordAnimationFrames",
        "attributes": {
          "text": "Invokes the provided callback on each animation frame.\n\nUse recursion. \nProvided that `running` is `true`, continue invoking `window.requestAnimationFrame()` which invokes the provided callback. \nReturn an object with two methods `start` and `stop` to allow manual control of the recording. \nOmit the second argument, `autoStart`, to implicitly call `start` when the function is invoked.\n\n",
          "tags": [
            "browser",
            "utility",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "b780a5af9c22faa9601191aff53c24d55f5e88b62ac79fd2e02517f9a724b502"
        }
      },
      {
        "id": "redirect",
        "type": "snippetListing",
        "title": "redirect",
        "attributes": {
          "text": "Redirects to a specified URL.\n\nUse `window.location.href` or `window.location.replace()` to redirect to `url`.\nPass a second argument to simulate a link click (`true` - default) or an HTTP redirect (`false`).\n\n",
          "tags": [
            "browser",
            "url",
            "beginner"
          ]
        },
        "meta": {
          "hash": "b5eb860bad14f54d114103321b8135e474057c63b703dfb06183a97530af402f"
        }
      },
      {
        "id": "reducedFilter",
        "type": "snippetListing",
        "title": "reducedFilter",
        "attributes": {
          "text": "Filter an array of objects based on a condition while also filtering out unspecified keys.\n\nUse `Array.prototype.filter()` to filter the array based on the predicate `fn` so that it returns the objects for which the condition returned a truthy value.\nOn the filtered array, use `Array.prototype.map()` to return the new object using `Array.prototype.reduce()` to filter out the keys which were not supplied as the `keys` argument.\n\n",
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "eb9a81be04298dc36d5b01dbbff22b9aac19d5ef1f1c752ef4c48e6a2cc0ea32"
        }
      },
      {
        "id": "reduceSuccessive",
        "type": "snippetListing",
        "title": "reduceSuccessive",
        "attributes": {
          "text": "Applies a function against an accumulator and each element in the array (from left to right), returning an array of successively reduced values.\n\nUse `Array.prototype.reduce()` to apply the given function to the given array, storing each new result.\n\n",
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "276b7cc7252a0c5202520e4903d8083153240ca6fd035eb709eaf5bf6cc1eccc"
        }
      },
      {
        "id": "reduceWhich",
        "type": "snippetListing",
        "title": "reduceWhich",
        "attributes": {
          "text": "Returns the minimum/maximum value of an array, after applying the provided function to set comparing rule.\n\nUse `Array.prototype.reduce()` in combination with the `comparator` function to get the appropriate element in the array.\nYou can omit the second parameter, `comparator`, to use the default one that returns the minimum element in the array.\n\n",
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "4da6106d2a999166888ef3f2d1cfaa3b32666ef12bbdfddac832cd0b8c7404d4"
        }
      },
      {
        "id": "reject",
        "type": "snippetListing",
        "title": "reject",
        "attributes": {
          "text": "Filters an array's values based on a predicate function, returning only values for which the predicate function returns `true`.\n\nUse `Array.prototype.filter()` in combination with the predicate function, `pred`, to return only the values for which `pred()` returns `true`.\n\n",
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "64c311bfab7115cd3df81172f9ed524a1f71e1d57100f8b003830ca41d9fd77f"
        }
      },
      {
        "id": "remove",
        "type": "snippetListing",
        "title": "remove",
        "attributes": {
          "text": "Mutates an array by removing elements for which the given function returns `false`.\n\nUse `Array.prototype.filter()` to find array elements that return truthy values and `Array.prototype.reduce()` to remove elements using `Array.prototype.splice()`.\nThe `func` is invoked with three arguments (`value, index, array`).\n\n",
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "ffb9c0d1d09aeb989789286efb91cc237b89ce13f44ad9510a014f9ab150df71"
        }
      },
      {
        "id": "removeNonASCII",
        "type": "snippetListing",
        "title": "removeNonASCII",
        "attributes": {
          "text": "Removes non-printable ASCII characters.\n\nUse a regular expression to remove non-printable ASCII characters.\n\n",
          "tags": [
            "string",
            "regexp",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "b557e3d59a04dac19161e9d69b5c347a758ad491c2214d56437d1592614f6944"
        }
      },
      {
        "id": "renameKeys",
        "type": "snippetListing",
        "title": "renameKeys",
        "attributes": {
          "text": "Replaces the names of multiple object keys with the values provided.\n\nUse `Object.keys()` in combination with `Array.prototype.reduce()` and the spread operator (`...`) to get the object's keys and rename them according to `keysMap`.\n\n",
          "tags": [
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "d425dd9806d3ae9b3ac08404c43cf28c48084835ffbce5fbd01f04ee1d7a7e5a"
        }
      },
      {
        "id": "reverseString",
        "type": "snippetListing",
        "title": "reverseString",
        "attributes": {
          "text": "Reverses a string.\n\nUse the spread operator (`...`) and `Array.prototype.reverse()` to reverse the order of the characters in the string.\nCombine characters to get a string using `String.prototype.join('')`.\n\n",
          "tags": [
            "string",
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "f608179567e28f0c7de78fce112c5dda6cf01989f9d8499119c80bdd119b0c8d"
        }
      },
      {
        "id": "RGBToHex",
        "type": "snippetListing",
        "title": "RGBToHex",
        "attributes": {
          "text": "Converts the values of RGB components to a color code.\n\nConvert given RGB parameters to hexadecimal string using bitwise left-shift operator (`<<`) and `toString(16)`, then `String.padStart(6,'0')` to get a 6-digit hexadecimal value.\n\n",
          "tags": [
            "utility",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "592446fabae44d631396de3441738710626c4d274eaabe3dfdb9b822ce3a5179"
        }
      },
      {
        "id": "round",
        "type": "snippetListing",
        "title": "round",
        "attributes": {
          "text": "Rounds a number to a specified amount of digits.\n\nUse `Math.round()` and template literals to round the number to the specified number of digits.\nOmit the second argument, `decimals` to round to an integer.\n\n",
          "tags": [
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "8e1d9b3d05e81deb58e6608a0dbf9a336deb73e17820490defc4e98b1febf8e1"
        }
      },
      {
        "id": "runAsync",
        "type": "snippetListing",
        "title": "runAsync",
        "attributes": {
          "text": "Runs a function in a separate thread by using a [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers), allowing long running functions to not block the UI.\n\nCreate a new `Worker` using a `Blob` object URL, the contents of which should be the stringified version of the supplied function.\nImmediately post the return value of calling the function back.\nReturn a promise, listening for `onmessage` and `onerror` events and resolving the data posted back from the worker, or throwing an error.\n\n",
          "tags": [
            "browser",
            "function",
            "advanced",
            "promise",
            "url"
          ]
        },
        "meta": {
          "hash": "e8e3b0389a64049fccb2dec854868d94ce03c2ff9e9fdcef9b9b5e9477a7602b"
        }
      },
      {
        "id": "runPromisesInSeries",
        "type": "snippetListing",
        "title": "runPromisesInSeries",
        "attributes": {
          "text": "Runs an array of promises in series.\n\nUse `Array.prototype.reduce()` to create a promise chain, where each promise returns the next promise when resolved.\n\n",
          "tags": [
            "function",
            "promise",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "0999832f2ad6dd8f9726494cffed82f85db80121f81b7d7ba43f184911abaf05"
        }
      },
      {
        "id": "sample",
        "type": "snippetListing",
        "title": "sample",
        "attributes": {
          "text": "Returns a random element from an array.\n\nUse `Math.random()` to generate a random number, multiply it by `length` and round it off to the nearest whole number using `Math.floor()`.\nThis method also works with strings.\n\n",
          "tags": [
            "array",
            "random",
            "beginner"
          ]
        },
        "meta": {
          "hash": "c17b6181734f37fd452c486dc37b85500aeffeb6472874cd4ff1b71bd79288b1"
        }
      },
      {
        "id": "sampleSize",
        "type": "snippetListing",
        "title": "sampleSize",
        "attributes": {
          "text": "Gets `n` random elements at unique keys from `array` up to the size of `array`.\n\nShuffle the array using the [Fisher-Yates algorithm](https://github.com/30-seconds/30-seconds-of-code#shuffle).\nUse `Array.prototype.slice()` to get the first `n` elements.\nOmit the second argument, `n` to get only one element at random from the array.\n\n",
          "tags": [
            "array",
            "random",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "dbca8b17910aa993f1a5746193a915a46b0825a8d69210e3d99d9fbcb484b919"
        }
      },
      {
        "id": "scrollToTop",
        "type": "snippetListing",
        "title": "scrollToTop",
        "attributes": {
          "text": "Smooth-scrolls to the top of the page.\n\nGet distance from top using `document.documentElement.scrollTop` or `document.body.scrollTop`.\nScroll by a fraction of the distance from the top. Use `window.requestAnimationFrame()` to animate the scrolling.\n\n",
          "tags": [
            "browser",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "2e8250f339e49af92c10c877ae4dbc9d2889ed14bdab24f96bfda82a095d4989"
        }
      },
      {
        "id": "sdbm",
        "type": "snippetListing",
        "title": "sdbm",
        "attributes": {
          "text": "Hashes the input string into a whole number.\n\nUse `String.prototype.split('')` and `Array.prototype.reduce()` to create a hash of the input string, utilizing bit shifting.\n\n",
          "tags": [
            "math",
            "utility",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "58d91b4760b4af29df95cf1b073166c02660f9af3d46c950fba64b922c999ba1"
        }
      },
      {
        "id": "serializeCookie",
        "type": "snippetListing",
        "title": "serializeCookie",
        "attributes": {
          "text": "Serialize a cookie name-value pair into a Set-Cookie header string.\n\nUse template literals and `encodeURIComponent()` to create the appropriate string.\n\n",
          "tags": [
            "utility",
            "string",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "defdaa306864196a4f561c37c4c7f74ffc159406c4538a0f7e1f3f153840eebe"
        }
      },
      {
        "id": "serializeForm",
        "type": "snippetListing",
        "title": "serializeForm",
        "attributes": {
          "text": "Encode a set of form elements as a query string.\n\nUse the `FormData` constructor to convert the HTML `form` to `FormData`, `Array.from()` to convert to an array, passing a map function as the second argument.\nUse `Array.prototype.map()` and `window.encodeURIComponent()` to encode each field's value.\nUse `Array.prototype.join()` with appropriate argumens to produce an appropriate query string.\n\n",
          "tags": [
            "browser",
            "string",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "8edd4093e584bbfae52b464e55a335c0af33861ee2d580d4ec005b85cd7491ee"
        }
      },
      {
        "id": "setStyle",
        "type": "snippetListing",
        "title": "setStyle",
        "attributes": {
          "text": "Sets the value of a CSS rule for the specified HTML element.\n\nUse `element.style` to set the value of the CSS rule for the specified element to `val`.\n\n",
          "tags": [
            "browser",
            "beginner"
          ]
        },
        "meta": {
          "hash": "3af57aa88e446dcfa4f1a7a8a434b541445e91cb366f0c56184c5e09f7c961cb"
        }
      },
      {
        "id": "shallowClone",
        "type": "snippetListing",
        "title": "shallowClone",
        "attributes": {
          "text": "Creates a shallow clone of an object.\n\nUse `Object.assign()` and an empty object (`{}`) to create a shallow clone of the original.\n\n",
          "tags": [
            "object",
            "beginner"
          ]
        },
        "meta": {
          "hash": "4a19fb8e2ef816c5dfa373d3f0cbcb223c34fe8fe2861f09f139edb18bfb2978"
        }
      },
      {
        "id": "shank",
        "type": "snippetListing",
        "title": "shank",
        "attributes": {
          "text": "Has the same functionality as [`Array.prototype.splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), but returning a new array instead of mutating the original array.\n\nUse `Array.prototype.slice()` and `Array.prototype.concat()` to get a new array with the new contents after removing existing elements and/or adding new elements.\nOmit the second argument, `index`, to start at `0`.\nOmit the third argument, `delCount`, to remove `0` elements.\nOmit the fourth argument, `elements`, in order to not add any new elements.\n\n",
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "65d097127b81a7fd3bfbaf79e804ce09114ef4ad08e27d64fa98891f4d68cb6b"
        }
      },
      {
        "id": "show",
        "type": "snippetListing",
        "title": "show",
        "attributes": {
          "text": "Shows all the elements specified.\n\nUse the spread operator (`...`) and `Array.prototype.forEach()` to clear the `display` property for each element specified.\n\n",
          "tags": [
            "browser",
            "css",
            "beginner"
          ]
        },
        "meta": {
          "hash": "541411afec987a2cf11bfa2d3d6a4f5f3e1b4f3e7363dd57281715bbf433cc40"
        }
      },
      {
        "id": "shuffle",
        "type": "snippetListing",
        "title": "shuffle",
        "attributes": {
          "text": "Randomizes the order of the values of an array, returning a new array.\n\nUse the [Fisher-Yates algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#Fisher_and_Yates'_original_method) to reorder the elements of the array.\n\n",
          "tags": [
            "array",
            "random",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "d01a5226fd9306ed492f80e84b22e6c7cc7950500f9cabbeac699103c83e5643"
        }
      },
      {
        "id": "similarity",
        "type": "snippetListing",
        "title": "similarity",
        "attributes": {
          "text": "Returns an array of elements that appear in both arrays.\n\nUse `Array.prototype.filter()` to remove values that are not part of `values`, determined using `Array.prototype.includes()`.\n\n",
          "tags": [
            "array",
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "9a8cf04ac3d6a593ef6e5169338c96feaec5b19a799256cbc26543f1fac8234a"
        }
      },
      {
        "id": "size",
        "type": "snippetListing",
        "title": "size",
        "attributes": {
          "text": "Gets the size of an array, object or string.\n\nGet type of `val` (`array`, `object` or `string`). \nUse `length` property for arrays.\nUse `length` or `size` value if available or number of keys for objects.\nUse `size` of a [`Blob` object](https://developer.mozilla.org/en-US/docs/Web/API/Blob) created from `val` for strings.\nSplit strings into array of characters with `split('')` and return its length.\n\n",
          "tags": [
            "object",
            "array",
            "string",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "24b93b68a59b49f245590930fed6fb82e286ce09f90e292466cde63c1784c347"
        }
      },
      {
        "id": "sleep",
        "type": "snippetListing",
        "title": "sleep",
        "attributes": {
          "text": "Delays the execution of an asynchronous function.\n\nDelay executing part of an `async` function, by putting it to sleep, returning a `Promise`.\n\n",
          "tags": [
            "function",
            "promise",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "07393d7a0e2d433b57abea9792aef5165990bf0ba81eb4e45a01cabceffdaed6"
        }
      },
      {
        "id": "smoothScroll",
        "type": "snippetListing",
        "title": "smoothScroll",
        "attributes": {
          "text": "Smoothly scrolls the element on which it's called into the visible area of the browser window.\n\nUse `.scrollIntoView` method to scroll the element. \nPass `{ behavior: 'smooth' }` to `.scrollIntoView` so it scrolls smoothly.\n\n",
          "tags": [
            "browser",
            "css",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "e7d3354d7f5e16a3e7f26ebde9fa93a58c806f2eb7767e9f4269136a408dacb3"
        }
      },
      {
        "id": "sortCharactersInString",
        "type": "snippetListing",
        "title": "sortCharactersInString",
        "attributes": {
          "text": "Alphabetically sorts the characters in a string.\n\nUse the spread operator (`...`), `Array.prototype.sort()` and  `String.localeCompare()` to sort the characters in `str`, recombine using `String.prototype.join('')`.\n\n",
          "tags": [
            "string",
            "beginner"
          ]
        },
        "meta": {
          "hash": "5aaca9e4e7703fd856345cd3cd124f7db9d3d9b33fc8971ded6e0692f1a5df79"
        }
      },
      {
        "id": "sortedIndex",
        "type": "snippetListing",
        "title": "sortedIndex",
        "attributes": {
          "text": "Returns the lowest index at which value should be inserted into array in order to maintain its sort order.\n\nCheck if the array is sorted in descending order (loosely).\nUse `Array.prototype.findIndex()` to find the appropriate index where the element should be inserted.\n\n",
          "tags": [
            "array",
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "86849a05d8395934e7f83d52d2c70a9b9d7982db85cfc264ffb4410c03496f79"
        }
      },
      {
        "id": "sortedIndexBy",
        "type": "snippetListing",
        "title": "sortedIndexBy",
        "attributes": {
          "text": "Returns the lowest index at which value should be inserted into array in order to maintain its sort order, based on a provided iterator function.\n\nCheck if the array is sorted in descending order (loosely).\nUse `Array.prototype.findIndex()` to find the appropriate index where the element should be inserted, based on the iterator function `fn`.\n\n",
          "tags": [
            "array",
            "math",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "1b3e4c56abe1a9a8d3fa17798c1efc281f0294be4e2877e8e8c323dfcb4ca591"
        }
      },
      {
        "id": "sortedLastIndex",
        "type": "snippetListing",
        "title": "sortedLastIndex",
        "attributes": {
          "text": "Returns the highest index at which value should be inserted into array in order to maintain its sort order.\n\nCheck if the array is sorted in descending order (loosely).\nUse `Array.prototype.reverse()` and `Array.prototype.findIndex()` to find the appropriate last index where the element should be inserted.\n\n",
          "tags": [
            "array",
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "82ced04bfc70d243245fad7f3ebf9ef5945bd102d74e77102f917687b3e53d22"
        }
      },
      {
        "id": "sortedLastIndexBy",
        "type": "snippetListing",
        "title": "sortedLastIndexBy",
        "attributes": {
          "text": "Returns the highest index at which value should be inserted into array in order to maintain its sort order, based on a provided iterator function.\n\nCheck if the array is sorted in descending order (loosely).\nUse `Array.prototype.map()` to apply the iterator function to all elements of the array.\nUse `Array.prototype.reverse()` and `Array.prototype.findIndex()` to find the appropriate last index where the element should be inserted, based on the provided iterator function.\n\n",
          "tags": [
            "array",
            "math",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "517118a841e0a4f3feb0e73d2d7012fc48c9cb655129002b399a2c5c3fd7a3f6"
        }
      },
      {
        "id": "splitLines",
        "type": "snippetListing",
        "title": "splitLines",
        "attributes": {
          "text": "Splits a multiline string into an array of lines.\n\nUse `String.prototype.split()` and a regular expression to match line breaks and create an array.\n\n",
          "tags": [
            "string",
            "beginner"
          ]
        },
        "meta": {
          "hash": "0c21e5e8c3549051085ada0effdfa8f3e19a266778967ef46697c7b9b78b5227"
        }
      },
      {
        "id": "spreadOver",
        "type": "snippetListing",
        "title": "spreadOver",
        "attributes": {
          "text": "Takes a variadic function and returns a closure that accepts an array of arguments to map to the inputs of the function.\n\nUse closures and the spread operator (`...`) to map the array of arguments to the inputs of the function.\n\n",
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "b94cbdec64a2897b1a193d5fd32eeb59b315ea590d609a50b7fe50012b1d4ce4"
        }
      },
      {
        "id": "stableSort",
        "type": "snippetListing",
        "title": "stableSort",
        "attributes": {
          "text": "Performs stable sorting of an array, preserving the initial indexes of items when their values are the same.\nDoes not mutate the original array, but returns a new array instead.\n\nUse `Array.prototype.map()` to pair each element of the input array with its corresponding index.\nUse `Array.prototype.sort()` and a `compare` function to sort the list, preserving their initial order if the items compared are equal.\nUse `Array.prototype.map()` to convert back to the initial array items.\n\n",
          "tags": [
            "array",
            "sort",
            "advanced",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "4f0ace59a000b0898eab157f0d5232fb8e0a19d854baf8496442a2928c15f87d"
        }
      },
      {
        "id": "standardDeviation",
        "type": "snippetListing",
        "title": "standardDeviation",
        "attributes": {
          "text": "Returns the standard deviation of an array of numbers.\n\nUse `Array.prototype.reduce()` to calculate the mean, variance and the sum of the variance of the values, the variance of the values, then\ndetermine the standard deviation.\nYou can omit the second argument to get the sample standard deviation or set it to `true` to get the population standard deviation.\n\n",
          "tags": [
            "math",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "f0fe3943b1ac2f0935a3a5a3b7004f88f168faebe9bb4088f4dc441a06975cbb"
        }
      },
      {
        "id": "stringPermutations",
        "type": "snippetListing",
        "title": "stringPermutations",
        "attributes": {
          "text": "Generates all permutations of a string (contains duplicates).\n\n⚠️ **WARNING**: This function's execution time increases exponentially with each character. Anything more than 8 to 10 characters will cause your browser to hang as it tries to solve all the different combinations.\n\nUse recursion.\nFor each letter in the given string, create all the partial permutations for the rest of its letters.\nUse `Array.prototype.map()` to combine the letter with each partial permutation, then `Array.prototype.reduce()` to combine all permutations in one array.\nBase cases are for string `length` equal to `2` or `1`.\n\n",
          "tags": [
            "string",
            "recursion",
            "advanced"
          ]
        },
        "meta": {
          "hash": "1a4c3427df70f2633c0d1a2c47b9ef7452664e1b6ea58525ce4067e1ea6a51a8"
        }
      },
      {
        "id": "stripHTMLTags",
        "type": "snippetListing",
        "title": "stripHTMLTags",
        "attributes": {
          "text": "Removes HTML/XML tags from string.\n\nUse a regular expression to remove HTML/XML tags from a string.\n\n",
          "tags": [
            "string",
            "utility",
            "regexp",
            "beginner"
          ]
        },
        "meta": {
          "hash": "a33dbe87821f5017cf4238c69d9effcfe993698f055fec5e915f4fff68c01e34"
        }
      },
      {
        "id": "sum",
        "type": "snippetListing",
        "title": "sum",
        "attributes": {
          "text": "Returns the sum of two or more numbers/arrays.\n\nUse `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`.\n\n",
          "tags": [
            "math",
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "a3ba3ba8f7bb293e1560c3140da2b50ac739ac4e5fb10c857f837b6dc54b029b"
        }
      },
      {
        "id": "sumBy",
        "type": "snippetListing",
        "title": "sumBy",
        "attributes": {
          "text": "Returns the sum of an array, after mapping each element to a value using the provided function.\n\nUse `Array.prototype.map()` to map each element to the value returned by `fn`, `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`.\n\n",
          "tags": [
            "math",
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "3e92614cb14073c51991cb6978e6a7e5871a00f1f24a886046f441fdc4633175"
        }
      },
      {
        "id": "sumPower",
        "type": "snippetListing",
        "title": "sumPower",
        "attributes": {
          "text": "Returns the sum of the powers of all the numbers from `start` to `end` (both inclusive).\n\nUse `Array.prototype.fill()` to create an array of all the numbers in the target range, `Array.prototype.map()` and the exponent operator (`**`) to raise them to `power` and `Array.prototype.reduce()` to add them together.\nOmit the second argument, `power`, to use a default power of `2`.\nOmit the third argument, `start`, to use a default starting value of `1`.\n\n",
          "tags": [
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "5ba3bb9fbfb3e5b61195b6e72e5b8f9f3e86b1a9b478e52f2429c4399718d118"
        }
      },
      {
        "id": "symmetricDifference",
        "type": "snippetListing",
        "title": "symmetricDifference",
        "attributes": {
          "text": "Returns the symmetric difference between two arrays, without filtering out duplicate values.\n\nCreate a `Set` from each array, then use `Array.prototype.filter()` on each of them to only keep values not contained in the other.\n\n",
          "tags": [
            "array",
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "7f920d42aa9408822b33d9790b0664f7f289989a363f21e9a1a87cb88510fb54"
        }
      },
      {
        "id": "symmetricDifferenceBy",
        "type": "snippetListing",
        "title": "symmetricDifferenceBy",
        "attributes": {
          "text": "Returns the symmetric difference between two arrays, after applying the provided function to each array element of both.\n\nCreate a `Set` by applying `fn` to each array's elements, then use `Array.prototype.filter()` on each of them to only keep values not contained in the other.\n\n",
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "f31a5937c12873095d7e167410eab03efdffb4bf6eb0561881a66111ddc750a7"
        }
      },
      {
        "id": "symmetricDifferenceWith",
        "type": "snippetListing",
        "title": "symmetricDifferenceWith",
        "attributes": {
          "text": "Returns the symmetric difference between two arrays, using a provided function as a comparator.\n\nUse `Array.prototype.filter()` and `Array.prototype.findIndex()` to find the appropriate values.\n\n",
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "2d54a197d2cd14bddc7daf88f64413ad8c3b4a42fdee91a0a5cf45d71688d8cf"
        }
      },
      {
        "id": "tail",
        "type": "snippetListing",
        "title": "tail",
        "attributes": {
          "text": "Returns all elements in an array except for the first one.\n\nReturn `Array.prototype.slice(1)` if the array's `length` is more than `1`, otherwise, return the whole array.\n\n",
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "200a7d0c4ccca7ad8f80c9489ed461d46d5ad0ca75184d18c3414437fd99bad2"
        }
      },
      {
        "id": "take",
        "type": "snippetListing",
        "title": "take",
        "attributes": {
          "text": "Returns an array with n elements removed from the beginning.\n\nUse `Array.prototype.slice()` to create a slice of the array with `n` elements taken from the beginning.\n\n",
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "670d66a804a498c3826e65fe1cb8917832f72ff3a41cdee9f3c29f357aadb7fb"
        }
      },
      {
        "id": "takeRight",
        "type": "snippetListing",
        "title": "takeRight",
        "attributes": {
          "text": "Returns an array with n elements removed from the end.\n\nUse `Array.prototype.slice()` to create a slice of the array with `n` elements taken from the end.\n\n",
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "4c83bc03b1146f6a9f49f12855a4118dd32367b6b6d46e64e94959404411e823"
        }
      },
      {
        "id": "takeRightWhile",
        "type": "snippetListing",
        "title": "takeRightWhile",
        "attributes": {
          "text": "Removes elements from the end of an array until the passed function returns `true`. Returns the removed elements.\n\nLoop through the array, using a `Array.prototype.reduceRight()` and accumulating elements while the function returns falsy value.\n\n",
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "ee5e3e006f3b756090a5f3f02cd0d2ea06da048dd0550277c25719b83ceeeaf6"
        }
      },
      {
        "id": "takeWhile",
        "type": "snippetListing",
        "title": "takeWhile",
        "attributes": {
          "text": "Removes elements in an array until the passed function returns `true`. Returns the removed elements.\n\nLoop through the array, using a `for...of` loop over `Array.prototype.entries()` until the returned value from the function is `true`.\nReturn the removed elements, using `Array.prototype.slice()`.\n\n",
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "1131730353754c8cdb3f3c2d81eb750fbfc99020ff7266987253e857b9aee6c5"
        }
      },
      {
        "id": "throttle",
        "type": "snippetListing",
        "title": "throttle",
        "attributes": {
          "text": "Creates a throttled function that only invokes the provided function at most once per every `wait` milliseconds\n\nUse `setTimeout()` and `clearTimeout()` to throttle the given method, `fn`.\nUse `Function.prototype.apply()` to apply the `this` context to the function and provide the necessary `arguments`.\nUse `Date.now()` to keep track of the last time the throttled function was invoked.\nOmit the second argument, `wait`, to set the timeout at a default of 0 ms.\n\n",
          "tags": [
            "function",
            "advanced"
          ]
        },
        "meta": {
          "hash": "0ff3f88fae6144b972137023cf882931df405a09413c1c48bdcb7ed78c1977aa"
        }
      },
      {
        "id": "times",
        "type": "snippetListing",
        "title": "times",
        "attributes": {
          "text": "Iterates over a callback `n` times\n\nUse `Function.call()` to call `fn` `n` times or until it returns `false`.\nOmit the last argument, `context`, to use an `undefined` object (or the global object in non-strict mode).\n\n",
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "f4f19054ff681f91e6d45f0b08ce964192b96eac5a6807df85877457cb4b366c"
        }
      },
      {
        "id": "timeTaken",
        "type": "snippetListing",
        "title": "timeTaken",
        "attributes": {
          "text": "Measures the time taken by a function to execute.\n\nUse `console.time()` and `console.timeEnd()` to measure the difference between the start and end times to determine how long the callback took to execute.\n\n",
          "tags": [
            "utility",
            "beginner"
          ]
        },
        "meta": {
          "hash": "26246364ba1e8e3f52a51c8e1f329af721b05a5d307ed88bf31ccd2620c0deee"
        }
      },
      {
        "id": "toCamelCase",
        "type": "snippetListing",
        "title": "toCamelCase",
        "attributes": {
          "text": "Converts a string to camelcase.\n\nBreak the string into words and combine them capitalizing the first letter of each word, using a regexp.\n\n",
          "tags": [
            "string",
            "regexp",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "5a38a98081a22fe5a56d272038bc1f7dadab097b1cf4c16c34286e9d51c26331"
        }
      },
      {
        "id": "toCurrency",
        "type": "snippetListing",
        "title": "toCurrency",
        "attributes": {
          "text": "Take a number and return specified currency formatting.\n\nUse `Intl.NumberFormat` to enable country / currency sensitive formatting.\n\n",
          "tags": [
            "utility",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "2f817f7dc3ca24a50bfaa1a59dec3ec6d8ee3392ac2d7f3ecae3a93a9c96f09c"
        }
      },
      {
        "id": "toDecimalMark",
        "type": "snippetListing",
        "title": "toDecimalMark",
        "attributes": {
          "text": "Converts a number to a decimal mark formatted string.\n\nUse `Number.prototype.toLocaleString()` to convert the numbre to decimal mark format.\n\n",
          "tags": [
            "utility",
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "22c2a4835f37334d3b5fa5f83bbaaddc642feb71c1868f514928c656e250abe6"
        }
      },
      {
        "id": "toggleClass",
        "type": "snippetListing",
        "title": "toggleClass",
        "attributes": {
          "text": "Toggles a class for an HTML element.\n\nUse `element.classList.toggle()` to toggle the specified class for the element.\n\n",
          "tags": [
            "browser",
            "beginner"
          ]
        },
        "meta": {
          "hash": "34abfb52d68cbd59aa575d0a1620312798264526dfa006f3bf52883e92e41105"
        }
      },
      {
        "id": "toHash",
        "type": "snippetListing",
        "title": "toHash",
        "attributes": {
          "text": "Reduces a given Array-like into a value hash (keyed data store).\n\nGiven an Iterable or Array-like structure, call `Array.prototype.reduce.call()` on the provided object to step over it and return an Object, keyed by the reference value.\n\n",
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "4d9656f6d96e3cdd49ab1df4389315e004c5a134fe22ad1036befb6168ee1e54"
        }
      },
      {
        "id": "toKebabCase",
        "type": "snippetListing",
        "title": "toKebabCase",
        "attributes": {
          "text": "Converts a string to kebab case.\n\nBreak the string into words and combine them adding `-` as a separator, using a regexp.\n\n",
          "tags": [
            "string",
            "regexp",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "0981cb8583c317d56894840bb31fd83e820b56fd7eef18d96db1edcb0a222860"
        }
      },
      {
        "id": "tomorrow",
        "type": "snippetListing",
        "title": "tomorrow",
        "attributes": {
          "text": "Results in a string representation of tomorrow's date.\n\nUse `new Date()` to get the current date, increment by one using `Date.getDate()` and set the value to the result using `Date.setDate()`. \nUse `Date.prototype.toISOString()` to return a string in `yyyy-mm-dd` format.\n\n",
          "tags": [
            "date",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "79e76e143e7f595b4d2c5be657629728cd5fb2cc4248706dedb7e0c8e9512d3c"
        }
      },
      {
        "id": "toOrdinalSuffix",
        "type": "snippetListing",
        "title": "toOrdinalSuffix",
        "attributes": {
          "text": "Adds an ordinal suffix to a number.\n\nUse the modulo operator (`%`) to find values of single and tens digits.\nFind which ordinal pattern digits match.\nIf digit is found in teens pattern, use teens ordinal.\n\n",
          "tags": [
            "utility",
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "0ebd3351685fd96bf678c2baa38fabc9aa18bd6a3fa6674ea0bae9663424ea5f"
        }
      },
      {
        "id": "toPairs",
        "type": "snippetListing",
        "title": "toPairs",
        "attributes": {
          "text": "Creates an array of key-value pair arrays from an object or other iterable (object, array, string, set etc.).\n\nCheck if `Symbol.iterator` is defined and, if so, use `Array.prototype.entries()` to get an iterator for the given iterable, `Array.from()` to convert the result to an array of key-value pair arrays.\nIf `Symbol.iterator` is not defined for `obj`, use `Object.entries()` instead.\n\n",
          "tags": [
            "object",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "3c8cbc59bcf4fb5f5c56d068596a8d059a1a487916beee4accb9a0ab29cd8bcb"
        }
      },
      {
        "id": "toSafeInteger",
        "type": "snippetListing",
        "title": "toSafeInteger",
        "attributes": {
          "text": "Converts a value to a safe integer.\n\nUse `Math.max()` and `Math.min()` to find the closest safe value.\nUse `Math.round()` to convert to an integer.\n\n",
          "tags": [
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "b893c5ab5d118c46dc7b673413adbeddd967093c36225eb31cf446c95de0ff39"
        }
      },
      {
        "id": "toSnakeCase",
        "type": "snippetListing",
        "title": "toSnakeCase",
        "attributes": {
          "text": "Converts a string to snake case.\n\nBreak the string into words and combine them adding `_` as a separator, using a regexp.\n\n",
          "tags": [
            "string",
            "regexp",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "7826ca6c690989e80204f4730b00c6eaedf316f4972a57b6c3f73473d02d0d91"
        }
      },
      {
        "id": "toTitleCase",
        "type": "snippetListing",
        "title": "toTitleCase",
        "attributes": {
          "text": "Converts a string to title case.\n\nBreak the string into words, using a regexp, and combine them capitalizing the first letter of each word and adding a whitespace between them.\n\n",
          "tags": [
            "string",
            "regepx",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "9ec5b60fcad2b633dfdbb342bf3fad8f3b63d2e06da09781c73481283f0cab1b"
        }
      },
      {
        "id": "transform",
        "type": "snippetListing",
        "title": "transform",
        "attributes": {
          "text": "Applies a function against an accumulator and each key in the object (from left to right).\n\nUse `Object.keys(obj)` to iterate over each key in the object, `Array.prototype.reduce()` to call the apply the specified function against the given accumulator.\n\n",
          "tags": [
            "object",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "2186f42e4ed6452b13986c08af41e7e98b6fb6528ca1994e2ee843d0453ef695"
        }
      },
      {
        "id": "triggerEvent",
        "type": "snippetListing",
        "title": "triggerEvent",
        "attributes": {
          "text": "Triggers a specific event on a given element, optionally passing custom data.\n\nUse `new CustomEvent()` to create an event from the specified `eventType` and details.\nUse `el.dispatchEvent()` to trigger the newly created event on the given element.\nOmit the third argument, `detail`, if you do not want to pass custom data to the triggered event.\n\n",
          "tags": [
            "browser",
            "event",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "61673214d218ca447cac81b95b6766264b66fd141462fbd5e3814e4c6cf7ded2"
        }
      },
      {
        "id": "truncateString",
        "type": "snippetListing",
        "title": "truncateString",
        "attributes": {
          "text": "Truncates a string up to a specified length.\n\nDetermine if the string's `length` is greater than `num`.\nReturn the string truncated to the desired length, with `'...'` appended to the end or the original string.\n\n",
          "tags": [
            "string",
            "beginner"
          ]
        },
        "meta": {
          "hash": "6f9ea1ee77d87c9b78e7b069bf27cf8bafd269023f3f7b675a65791446d7d2d3"
        }
      },
      {
        "id": "truthCheckCollection",
        "type": "snippetListing",
        "title": "truthCheckCollection",
        "attributes": {
          "text": "Checks if the predicate (second argument) is truthy on all elements of a collection (first argument).\n\nUse `Array.prototype.every()` to check if each passed object has the specified property and if it returns a truthy value.\n\n",
          "tags": [
            "object",
            "logic",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "7e4b72845da78eb0665de207c9d94c2f728d945be47d6dd13a14b53101e7a6a4"
        }
      },
      {
        "id": "unary",
        "type": "snippetListing",
        "title": "unary",
        "attributes": {
          "text": "Creates a function that accepts up to one argument, ignoring any additional arguments.\n\nCall the provided function, `fn`, with just the first argument given.\n\n",
          "tags": [
            "function",
            "beginner"
          ]
        },
        "meta": {
          "hash": "f0eda594028997293121b8afca105772ce002f9fe0d5642ffd41c3167fd6b4f1"
        }
      },
      {
        "id": "uncurry",
        "type": "snippetListing",
        "title": "uncurry",
        "attributes": {
          "text": "Uncurries a function up to depth `n`.\n\nReturn a variadic function.\nUse `Array.prototype.reduce()` on the provided arguments to call each subsequent curry level of the function.\nIf the `length` of the provided arguments is less than `n` throw an error.\nOtherwise, call `fn` with the proper amount of arguments, using `Array.prototype.slice(0, n)`.\nOmit the second argument, `n`, to uncurry up to depth `1`.\n\n",
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "9947959c989195fe0581aa57ea3456f90d3c0e10a2f6e772f3a891ac81574f34"
        }
      },
      {
        "id": "unescapeHTML",
        "type": "snippetListing",
        "title": "unescapeHTML",
        "attributes": {
          "text": "Unescapes escaped HTML characters.\n\nUse `String.prototype.replace()` with a regex that matches the characters that need to be unescaped, using a callback function to replace each escaped character instance with its associated unescaped character using a dictionary (object).\n\n",
          "tags": [
            "string",
            "browser",
            "beginner"
          ]
        },
        "meta": {
          "hash": "f469a318ae70e50251f0430c34d8fe0f57ca9158c2a8619ba146d2246adee8d5"
        }
      },
      {
        "id": "unflattenObject",
        "type": "snippetListing",
        "title": "unflattenObject",
        "attributes": {
          "text": "Unflatten an object with the paths for keys.\n\nUse `Object.keys(obj)` combined with `Array.prototype.reduce()` to convert flattened path node to a leaf node.\nIf the value of a key contains a dot delimiter (`.`), use `Array.prototype.split('.')`, string transformations and `JSON.parse()` to create an object, then `Object.assign()` to create the leaf node.\nOtherwise, add the appropriate key-value pair to the accumulator object.\n\n",
          "tags": [
            "object",
            "advanced"
          ]
        },
        "meta": {
          "hash": "bc549ec3e2504bca06ef5ce7f1424b3b7dcd8959ebe983eeb576cda7eb5f6017"
        }
      },
      {
        "id": "unfold",
        "type": "snippetListing",
        "title": "unfold",
        "attributes": {
          "text": "Builds an array, using an iterator function and an initial seed value.\n\nUse a `while` loop and `Array.prototype.push()` to call the function repeatedly until it returns `false`.\nThe iterator function accepts one argument (`seed`) and must always return an array with two elements ([`value`, `nextSeed`]) or `false` to terminate.\n\n",
          "tags": [
            "function",
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "c1003c7baca5e5492e603c28aaa822cf24393036d6322fd90591519f9e7c74d9"
        }
      },
      {
        "id": "union",
        "type": "snippetListing",
        "title": "union",
        "attributes": {
          "text": "Returns every element that exists in any of the two arrays once.\n\nCreate a `Set` with all values of `a` and `b` and convert to an array.\n\n",
          "tags": [
            "array",
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "708c0fdf381b5eab2ea2df4de5da8e8171dbe38498c5d46ebab864b6ed1296a9"
        }
      },
      {
        "id": "unionBy",
        "type": "snippetListing",
        "title": "unionBy",
        "attributes": {
          "text": "Returns every element that exists in any of the two arrays once, after applying the provided function to each array element of both.\n\nCreate a `Set` by applying all `fn` to all values of `a`.\nCreate a `Set` from `a` and all elements in `b` whose value, after applying `fn` does not match a value in the previously created set.\nReturn the last set converted to an array.\n\n",
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "db6fe4b924d30c2d844e7c55a1b73250c323ccccaa22ae15d936ce653a5c7a15"
        }
      },
      {
        "id": "unionWith",
        "type": "snippetListing",
        "title": "unionWith",
        "attributes": {
          "text": "Returns every element that exists in any of the two arrays once, using a provided comparator function.\n\nCreate a `Set` with all values of `a` and values in `b` for which the comparator finds no matches in `a`, using `Array.prototype.findIndex()`.\n\n",
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "2784f965f4f4c04998f63b440c6554613bb2042ea1b45a461775c8ffc9e2ec29"
        }
      },
      {
        "id": "uniqueElements",
        "type": "snippetListing",
        "title": "uniqueElements",
        "attributes": {
          "text": "Returns all unique values of an array.\n\nUse ES6 `Set` and the `...rest` operator to discard all duplicated values.\n\n",
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "474b3568e2a842246ff6ab2800aeec3f82353732080bb63911adb142d273e34c"
        }
      },
      {
        "id": "uniqueElementsBy",
        "type": "snippetListing",
        "title": "uniqueElementsBy",
        "attributes": {
          "text": "Returns all unique values of an array, based on a provided comparator function.\n\nUse `Array.prototype.reduce()` and `Array.prototype.some()` for an array containing only the first unique occurrence of each value, based on the comparator function, `fn`.\nThe comparator function takes two arguments: the values of the two elements being compared.\n\n",
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "a506c398c0d84b8c6926b70e62f28ca6180a02d010088c89fc9c8d7e2706e0bc"
        }
      },
      {
        "id": "uniqueElementsByRight",
        "type": "snippetListing",
        "title": "uniqueElementsByRight",
        "attributes": {
          "text": "Returns all unique values of an array, based on a provided comparator function, starting from the right.\n\nUse `Array.prototype.reduceRight()` and `Array.prototype.some()` for an array containing only the last unique occurrence of each value, based on the comparator function, `fn`.\nThe comparator function takes two arguments: the values of the two elements being compared.\n\n",
          "tags": [
            "array",
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "59867a867b440985ad221def644ec15594908db1d2ae413fc8a41f2669e3798a"
        }
      },
      {
        "id": "uniqueSymmetricDifference",
        "type": "snippetListing",
        "title": "uniqueSymmetricDifference",
        "attributes": {
          "text": "Returns the unique symmetric difference between two arrays, not containing duplicate values from either array.\n\nUse `Array.prototype.filter()` and `Array.prototype.includes()` on each array to remove values contained in the other, then create a `Set` from the results, removing duplicate values.\n\n",
          "tags": [
            "array",
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "553400fbd0f95322a82a87440dcaef7c25277740e3116027b5d23731a926cc61"
        }
      },
      {
        "id": "untildify",
        "type": "snippetListing",
        "title": "untildify",
        "attributes": {
          "text": "Converts a tilde path to an absolute path.\n\nUse `String.prototype.replace()` with a regular expression and `OS.homedir()` to replace the `~` in the start of the path with the home directory.\n\n",
          "tags": [
            "node",
            "string",
            "beginner"
          ]
        },
        "meta": {
          "hash": "fc0e9c9b78dfc63137bd1a7bf71d03089d732356803f16af37febce1adefda9a"
        }
      },
      {
        "id": "unzip",
        "type": "snippetListing",
        "title": "unzip",
        "attributes": {
          "text": "Creates an array of arrays, ungrouping the elements in an array produced by [zip](/js/s/zip).\n\nUse `Math.max.apply()` to get the longest subarray in the array, `Array.prototype.map()` to make each element an array.\nUse `Array.prototype.reduce()` and `Array.prototype.forEach()` to map grouped values to individual arrays.\n\n",
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "ae3c80b1e7de7581fbfc0f800190418de4173441876c3907b135bc35adcbf85b"
        }
      },
      {
        "id": "unzipWith",
        "type": "snippetListing",
        "title": "unzipWith",
        "attributes": {
          "text": "Creates an array of elements, ungrouping the elements in an array produced by [zip](#zip) and applying the provided function.\n\nUse `Math.max.apply()` to get the longest subarray in the array, `Array.prototype.map()` to make each element an array.\nUse `Array.prototype.reduce()` and `Array.prototype.forEach()` to map grouped values to individual arrays.\nUse `Array.prototype.map()` and the spread operator (`...`) to apply `fn` to each individual group of elements.\n\n",
          "tags": [
            "array",
            "function",
            "advanced"
          ]
        },
        "meta": {
          "hash": "12bf4549e753e503e1798b21dcebc3bc2026ee3e6f391887d4bb0fa99211e2f6"
        }
      },
      {
        "id": "URLJoin",
        "type": "snippetListing",
        "title": "URLJoin",
        "attributes": {
          "text": "Joins all given URL segments together, then normalizes the resulting URL.\n\nUse `String.prototype.join('/')` to combine URL segments, then a series of `String.prototype.replace()` calls with various regexps to normalize the resulting URL (remove double slashes, add proper slashes for protocol, remove slashes before parameters, combine parameters with `'&'` and normalize first parameter delimiter).\n\n",
          "tags": [
            "string",
            "utility",
            "regexp",
            "advanced"
          ]
        },
        "meta": {
          "hash": "6050cfa3a2a39089151bacfce1f5cedaec12f5da253dbc20a56dfaf50cb8924b"
        }
      },
      {
        "id": "UUIDGeneratorBrowser",
        "type": "snippetListing",
        "title": "UUIDGeneratorBrowser",
        "attributes": {
          "text": "Generates a UUID in a browser.\n\nUse `crypto` API to generate a UUID, compliant with [RFC4122](https://www.ietf.org/rfc/rfc4122.txt) version 4.\n\n",
          "tags": [
            "browser",
            "utility",
            "random",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "9f84a12da85558ebdb189097dbc581b338e07d52eedc5975f1001133b123aad2"
        }
      },
      {
        "id": "UUIDGeneratorNode",
        "type": "snippetListing",
        "title": "UUIDGeneratorNode",
        "attributes": {
          "text": "Generates a UUID in Node.JS.\n\nUse `crypto` API to generate a UUID, compliant with [RFC4122](https://www.ietf.org/rfc/rfc4122.txt) version 4.\n\n",
          "tags": [
            "node",
            "utility",
            "random",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "79604b0f854a91af789fea8416c7099acfb3633259ef387f52a21337d2242478"
        }
      },
      {
        "id": "validateNumber",
        "type": "snippetListing",
        "title": "validateNumber",
        "attributes": {
          "text": "Returns `true` if the given value is a number, `false` otherwise.\n\nUse `!isNaN()` in combination with `parseFloat()` to check if the argument is a number.\nUse `isFinite()` to check if the number is finite.\nUse `Number()` to check if the coercion holds.\n\n",
          "tags": [
            "utility",
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "73fc55564fa0b59a71553aa442bda666cbcddbcd618f9ca53c2b55e42a7c26ca"
        }
      },
      {
        "id": "vectorDistance",
        "type": "snippetListing",
        "title": "vectorDistance",
        "attributes": {
          "text": "Returns the distance between two vectors.\n\nUse `Array.prototype.reduce()`, `Math.pow()` and `Math.sqrt()` to calculate the Euclidean distance between two vectors.\n\n",
          "tags": [
            "math",
            "beginner"
          ]
        },
        "meta": {
          "hash": "a2c8560a2e285ebe11caad3a46c07ee0e41a64bd850b2e5a4f5aebc12da09dcc"
        }
      },
      {
        "id": "weightedSample",
        "type": "snippetListing",
        "title": "weightedSample",
        "attributes": {
          "text": "Returns a random element from an array, using the provided `weights` as the probabilities for each element.\n\nUse `Array.prototype.reduce()` to create an array of partial sums for each value in `weights`.\nUse `Math.random()` to generate a random number and `Array.prototype.findIndex()` to find the correct index based on the array previously produced.\nFinally, return the element of `arr` with the produced index.\n\n\n",
          "tags": [
            "array",
            "random",
            "advanced"
          ]
        },
        "meta": {
          "hash": "94d3b2ea296a94907be873c19381a525eeb96676cd52cb1baf1bd76bc22971a6"
        }
      },
      {
        "id": "when",
        "type": "snippetListing",
        "title": "when",
        "attributes": {
          "text": "Tests a value, `x`, against a predicate function. If `true`, return `fn(x)`. Else, return `x`. \n\nReturn a function expecting a single value, `x`, that returns the appropriate value based on `pred`.\n\n",
          "tags": [
            "function",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "4ec8d33670ad1c716f00c72100c27c43a0031eb8ee411699aa4740df3bfe9659"
        }
      },
      {
        "id": "without",
        "type": "snippetListing",
        "title": "without",
        "attributes": {
          "text": "Filters out the elements of an array, that have one of the specified values.\n\nUse `Array.prototype.filter()` to create an array excluding(using `!Array.includes()`) all given values.\n\n",
          "tags": [
            "array",
            "beginner"
          ]
        },
        "meta": {
          "hash": "54f15178f6196172218aeffd14defe4e9af475ee3e29f0857ada823f618d3c8f"
        }
      },
      {
        "id": "words",
        "type": "snippetListing",
        "title": "words",
        "attributes": {
          "text": "Converts a given string into an array of words.\n\nUse `String.prototype.split()` with a supplied pattern (defaults to non-alpha as a regexp) to convert to an array of strings. Use `Array.prototype.filter()` to remove any empty strings.\nOmit the second argument to use the default regexp.\n\n",
          "tags": [
            "string",
            "regexp",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "b072b9cad23554279e7601cafb20813d6675459293aab607a22c820a2f2a0eb9"
        }
      },
      {
        "id": "xProd",
        "type": "snippetListing",
        "title": "xProd",
        "attributes": {
          "text": "Creates a new array out of the two supplied by creating each possible pair from the arrays.\n\nUse `Array.prototype.reduce()`, `Array.prototype.map()` and `Array.prototype.concat()` to produce every possible pair from the elements of the two arrays and save them in an array.\n\n",
          "tags": [
            "array",
            "math",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "8202d07045f90d897db21799a4daa0de39613c035b4ed1e92ab65c8cd5ce2e15"
        }
      },
      {
        "id": "yesNo",
        "type": "snippetListing",
        "title": "yesNo",
        "attributes": {
          "text": "Returns `true` if the string is `y`/`yes` or `false` if the string is `n`/`no`.\n\nUse `RegExp.test()` to check if the string evaluates to `y/yes` or `n/no`.\nOmit the second argument, `def` to set the default answer as `no`.\n\n",
          "tags": [
            "utility",
            "regexp",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "6365f144def8abb711b890f8689ff8c9f1f1aee092525583fa913057ba623472"
        }
      },
      {
        "id": "yesterday",
        "type": "snippetListing",
        "title": "yesterday",
        "attributes": {
          "text": "Results in a string representation of yesterday's date.\n\nUse `new Date()` to get the current date, decrement by one using `Date.getDate()` and set the value to the result using `Date.setDate()`.\nUse `Date.prototype.toISOString()` to return a string in `yyyy-mm-dd` format.\n\n",
          "tags": [
            "date",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "033e90570af5f5ed3d8c0ea4407d6ccaea760372562c5633a24bf08e1f8782d3"
        }
      },
      {
        "id": "zip",
        "type": "snippetListing",
        "title": "zip",
        "attributes": {
          "text": "Creates an array of elements, grouped based on the position in the original arrays.\n\nUse `Math.max.apply()` to get the longest array in the arguments.\nCreates an array with that length as return value and use `Array.from()` with a map-function to create an array of grouped elements.\nIf lengths of the argument-arrays vary, `undefined` is used where no value could be found.\n\n",
          "tags": [
            "array",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "ec0b5750affd681f1eed8dd7a4711c103675f559da38aab23162d5270567d329"
        }
      },
      {
        "id": "zipObject",
        "type": "snippetListing",
        "title": "zipObject",
        "attributes": {
          "text": "Given an array of valid property identifiers and an array of values, return an object associating the properties to the values.\n\nSince an object can have undefined values but not undefined property pointers, the array of properties is used to decide the structure of the resulting object using `Array.prototype.reduce()`.\n\n",
          "tags": [
            "array",
            "object",
            "intermediate"
          ]
        },
        "meta": {
          "hash": "f2c7e2c6a8e566946e631c92b295c76cc406650347ec0e21318522f26094acd7"
        }
      },
      {
        "id": "zipWith",
        "type": "snippetListing",
        "title": "zipWith",
        "attributes": {
          "text": "Creates an array of elements, grouped based on the position in the original arrays and using function as the last value to specify how grouped values should be combined.\n\nCheck if the last argument provided is a function.\nUse `Math.max()` to get the longest array in the arguments.\nCreates an array with that length as return value and use `Array.from()` with a map-function to create an array of grouped elements.\nIf lengths of the argument-arrays vary, `undefined` is used where no value could be found.\nThe function is invoked with the elements of each group `(...group)`.\n\n",
          "tags": [
            "array",
            "function",
            "advanced"
          ]
        },
        "meta": {
          "hash": "457830ee4df5b57b6605c4133b863cc3f3eebf0031ccd1358fae3c6f5cb3c75e"
        }
      }
    ];

export default data;