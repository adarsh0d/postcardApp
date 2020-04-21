const data = [
  {
    "name": "accessibility-aria.md",
    "question": "What is ARIA and when should you use it?",
    "answer": "ARIA stands for \"Accessible Rich Internet Applications\", and is a technical specification created by the World Wide Web Consortium (W3C). Better known as WAI-ARIA, it provides additional HTML attributes in the development of web applications to offer people who use assistive technologies (AT) a more robust and interoperable experience with dynamic components. By providing the component's role, name, and state, AT users can better understand how to interact with the component. WAI-ARIA should only be used when an HTML element equivalent is not available or lacks full browser or AT support. WAI-ARIA's semantic markup coupled with JavaScript works to provide an understandable and interactive experience for people who use AT.\n\nAn example using ARIA:\n\n```\n<div \n  role=\"combobox\"\n  aria-expanded=\"false\"\n  aria-owns=\"ex1-grid\"\n  aria-haspopup=\"grid\"\n  id=\"ex1-combobox\">\n  ...\n</div>\n```\nCredit: W3C's [ARIA 1.1 Combobox with Grid Popup Example](https://w3c.github.io/aria-practices/examples/combobox/aria1.1pattern/grid-combo.html)",
    "goodToHear": [
      "Accessible Rich Internet Applications",
      "Benefits people who use assistive technologies (AT)",
      "Provides role, name, and state",
      "Semantic HTML coupled with JavaScript"
    ],
    "links": [
      "[WAI-ARIA Overview](https://www.w3.org/WAI/standards-guidelines/aria/)",
      "[WAI-ARIA Spec](https://www.w3.org/TR/wai-aria/)",
      "[ARIA Serious? Eric Eggert presentation](https://youtu.be/4bH57rWPnYo)"
    ],
    "tags": [
      "accessibility"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```\n<div \n  role=\"combobox\"\n  aria-expanded=\"false\"\n  aria-owns=\"ex1-grid\"\n  aria-haspopup=\"grid\"\n  id=\"ex1-combobox\">\n  ...\n</div>\n```"
    ]
  },
  {
    "name": "accessibility-tree.md",
    "question": "What is the Accessibility Tree?",
    "answer": "The Accessibility Tree is a structure produced by the browser's Accessibility APIs which provides accessibility information to assistive technologies such as screen readers. \nIt runs parallel to the DOM and is similar to the DOM API, but with much fewer nodes, because a lot of that information is only useful for visual presentation. \nBy writing semantic HTML we can take advantage of this process in creating an accessible experience for our users.",
    "goodToHear": [
      "Tree structure exposing information to assistive technologies",
      "Runs parallel to the DOM",
      "Semantic HTML is essential in creating accessible experiences"
    ],
    "links": [
      "[Accessibility APIs](https://www.smashingmagazine.com/2015/03/web-accessibility-with-accessibility-api/)"
    ],
    "tags": [
      "accessibility"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "alt-attribute.md",
    "question": "What is the purpose of the `alt` attribute on images?",
    "answer": "The `alt` attribute provides alternative information for an image if a user cannot view it. The `alt` attribute should be used to describe any images except those which only serve a decorative purpose, in which case it should be left empty.",
    "goodToHear": [
      "Decorative images should have an empty `alt` attribute.",
      "Web crawlers use `alt` tags to understand image content, so they are considered important for Search Engine Optimization (SEO).",
      "Put the `.` at the end of `alt` tag to improve accessibility."
    ],
    "links": [
      "[A good basis for accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)"
    ],
    "tags": [
      "html"
    ],
    "expertise": 0,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "async-defer-attributes.md",
    "question": "What are `defer` and `async` attributes on a `<script>` tag?",
    "answer": "If neither attribute is present, the script is downloaded and executed synchronously, and will halt parsing of the document until it has finished executing (default behavior). Scripts are downloaded and executed in the order\nthey are encountered.\n\nThe `defer` attribute downloads the script while the document is still parsing but waits until the document has finished parsing before executing it, equivalent to executing inside a `DOMContentLoaded` event listener. `defer` scripts will execute in order.\n\nThe `async` attribute downloads the script during parsing the document but will pause the parser to execute the script before it has fully finished parsing. `async` scripts will not necessarily execute in order.\n\nNote: both attributes must only be used if the script has a `src` attribute (i.e. not an inline script).\n\n```html\n<script src=\"myscript.js\"></script>\n<script src=\"myscript.js\" defer></script>\n<script src=\"myscript.js\" async></script>\n```",
    "goodToHear": [
      "Placing a `defer` script in the `<head>` allows the browser to download the script while the page is still parsing, and is therefore a better option than placing the script before the end of the body.",
      "If the scripts rely on each other, use `defer`.",
      "If the script is independent, use `async`.",
      "Use `defer` if the DOM must be ready and the contents are not placed within a `DOMContentLoaded` listener."
    ],
    "links": [
      "[async vs defer attributes](http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)"
    ],
    "tags": [
      "html"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```html\n<script src=\"myscript.js\"></script>\n<script src=\"myscript.js\" defer></script>\n<script src=\"myscript.js\" async></script>\n```"
    ]
  },
  {
    "name": "batches.md",
    "question": "Create a function `batches` that returns the maximum number of whole batches that can be cooked from a recipe.\n\n```js\n/**\nIt accepts two objects as arguments: the first object is the recipe\nfor the food, while the second object is the available ingredients.\nEach ingredient's value is a number representing how many units there are.\n\n`batches(recipe, available)`\n*/\n\n// 0 batches can be made\nbatches(\n  { milk: 100, butter: 50, flour: 5 },\n  { milk: 132, butter: 48, flour: 51 }\n)\nbatches(\n  { milk: 100, flour: 4, sugar: 10, butter: 5 },\n  { milk: 1288, flour: 9, sugar: 95 }\n)\n\n// 1 batch can be made\nbatches(\n  { milk: 100, butter: 50, cheese: 10 },\n  { milk: 198, butter: 52, cheese: 10 }\n)\n\n// 2 batches can be made\nbatches(\n  { milk: 2, sugar: 40, butter: 20 },\n  { milk: 5, sugar: 120, butter: 500 }\n)\n```",
    "answer": "We must have all ingredients of the recipe available, and in quantities that are more than or equal to the number of units required. If just one of the ingredients is not available or lower than needed, we cannot make a single batch.\n\nUse `Object.keys()` to return the ingredients of the recipe as an array, then use `Array.prototype.map()` to map each ingredient to the ratio of available units to the amount required by the recipe. If one of the ingredients required by the recipe is not available at all, the ratio will evaluate to `NaN`, so the logical OR operator can be used to fallback to `0` in this case.\n\nUse the spread `...` operator to feed the array of all the ingredient ratios into `Math.min()` to determine the lowest ratio. Passing this entire result into `Math.floor()` rounds down to return the maximum number of whole batches.\n\n```js\nconst batches = (recipe, available) =>\n  Math.floor(\n    Math.min(...Object.keys(recipe).map(k => available[k] / recipe[k] || 0))\n  )\n```",
    "goodToHear": [],
    "links": [],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [
      "```js\n/**\nIt accepts two objects as arguments: the first object is the recipe\nfor the food, while the second object is the available ingredients.\nEach ingredient's value is a number representing how many units there are.\n\n`batches(recipe, available)`\n*/\n\n// 0 batches can be made\nbatches(\n  { milk: 100, butter: 50, flour: 5 },\n  { milk: 132, butter: 48, flour: 51 }\n)\nbatches(\n  { milk: 100, flour: 4, sugar: 10, butter: 5 },\n  { milk: 1288, flour: 9, sugar: 95 }\n)\n\n// 1 batch can be made\nbatches(\n  { milk: 100, butter: 50, cheese: 10 },\n  { milk: 198, butter: 52, cheese: 10 }\n)\n\n// 2 batches can be made\nbatches(\n  { milk: 2, sugar: 40, butter: 20 },\n  { milk: 5, sugar: 120, butter: 500 }\n)\n```"
    ],
    "answerCodeBlocks": [
      "```js\nconst batches = (recipe, available) =>\n  Math.floor(\n    Math.min(...Object.keys(recipe).map(k => available[k] / recipe[k] || 0))\n  )\n```"
    ]
  },
  {
    "name": "bem.md",
    "question": "What is CSS BEM?",
    "answer": "The BEM methodology is a naming convention for CSS classes in order to keep CSS more maintainable by defining namespaces to solve scoping issues. BEM stands for Block Element Modifier which is an explanation for its structure. A Block is a standalone component that is reusable across projects and acts as a \"namespace\" for sub components (Elements). Modifiers are used as flags when a Block or Element is in a certain state or is different in structure or style.\n\n```css\n/* block component */\n.block {\n}\n\n/* element */\n.block__element {\n}\n\n/* modifier */\n.block__element--modifier {\n}\n```\n\nHere is an example with the class names on markup:\n\n```html\n<nav class=\"navbar\">\n  <a href=\"/\" class=\"navbar__link navbar__link--active\"></a>\n  <a href=\"/\" class=\"navbar__link\"></a>\n  <a href=\"/\" class=\"navbar__link\"></a>\n</nav>\n```\n\nIn this case, `navbar` is the Block, `navbar__link` is an Element that makes no sense outside of the `navbar` component, and `navbar__link--active` is a Modifier that indicates a different state for the `navbar__link` Element.\n\nSince Modifiers are verbose, many opt to use `is-*` flags instead as modifiers.\n\n```html\n<a href=\"/\" class=\"navbar__link is-active\"></a>\n```\n\nThese must be chained to the Element and never alone however, or there will be scope issues.\n\n```css\n.navbar__link.is-active {\n}\n```",
    "goodToHear": [
      "Alternative solutions to scope issues like CSS-in-JS"
    ],
    "links": [
      "[Writing clean and maintainable CSS](https://hackernoon.com/writing-clean-and-maintainable-css-using-bem-methodology-1dcbf810a664)"
    ],
    "tags": [
      "css"
    ],
    "expertise": 0,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```css\n/* block component */\n.block {\n}\n\n/* element */\n.block__element {\n}\n\n/* modifier */\n.block__element--modifier {\n}\n```",
      "```html\n<nav class=\"navbar\">\n  <a href=\"/\" class=\"navbar__link navbar__link--active\"></a>\n  <a href=\"/\" class=\"navbar__link\"></a>\n  <a href=\"/\" class=\"navbar__link\"></a>\n</nav>\n```",
      "```html\n<a href=\"/\" class=\"navbar__link is-active\"></a>\n```",
      "```css\n.navbar__link.is-active {\n}\n```"
    ]
  },
  {
    "name": "big-o-notation.md",
    "question": "What is Big O Notation?",
    "answer": "Big O notation is used in Computer Science to describe the time complexity of an algorithm. The best algorithms will execute the fastest and have the simplest complexity.\n\nAlgorithms don't always perform the same and may vary based on the data they are supplied. While in some cases they will execute quickly, in other cases they will execute slowly, even with the same number of elements to deal with.\n\nIn these examples, the base time is 1 element = `1ms`.\n\n##### O(1)\n\n```js\narr[arr.length - 1]\n```\n\n* 1000 elements = `1ms`\n\nConstant time complexity. No matter how many elements the array has, it will theoretically take (excluding real-world variation) the same amount of time to execute.\n\n##### O(N)\n\n```js\narr.filter(fn)\n```\n\n* 1000 elements = `1000ms`\n\nLinear time complexity. The execution time will increase linearly with the number of elements the array has. If the array has 1000 elements and the function takes 1ms to execute, 7000 elements will take 7ms to execute. This is because the function must iterate through all elements of the array before returning a result.\n\n##### O([1, N])\n\n```js\narr.some(fn)\n```\n\n* 1000 elements = `1ms <= x <= 1000ms`\n\nThe execution time varies depending on the data supplied to the function, it may return very early or very late. The best case here is O(1) and the worst case is O(N).\n\n##### O(NlogN)\n\n```js\narr.sort(fn)\n```\n\n* 1000 elements ~= `10000ms`\n\nBrowsers usually implement the quicksort algorithm for the `sort()` method and the average time complexity of quicksort is O(NlgN). This is very efficient for large collections.\n\n##### O(N^2)\n\n```js\nfor (let i = 0; i < arr.length; i++) {\n  for (let j = 0; j < arr.length; j++) {\n    // ...\n  }\n}\n```\n\n* 1000 elements = `1000000ms`\n\nThe execution time rises quadratically with the number of elements. Usually the result of nesting loops.\n\n##### O(N!)\n\n```js\nconst permutations = arr => {\n  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr\n  return arr.reduce(\n    (acc, item, i) =>\n      acc.concat(\n        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [\n          item,\n          ...val\n        ])\n      ),\n    []\n  )\n}\n```\n\n* 1000 elements = `Infinity` (practically) ms\n\nThe execution time rises extremely fast with even just 1 addition to the array.",
    "goodToHear": [
      "Be wary of nesting loops as execution time increases exponentially."
    ],
    "links": [
      "[Big O Notation in JavaScript](https://medium.com/cesars-tech-insights/big-o-notation-javascript-25c79f50b19b)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\narr[arr.length - 1]\n```",
      "```js\narr.filter(fn)\n```",
      "```js\narr.some(fn)\n```",
      "```js\narr.sort(fn)\n```",
      "```js\nfor (let i = 0; i < arr.length; i++) {\n  for (let j = 0; j < arr.length; j++) {\n    // ...\n  }\n}\n```",
      "```js\nconst permutations = arr => {\n  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr\n  return arr.reduce(\n    (acc, item, i) =>\n      acc.concat(\n        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [\n          item,\n          ...val\n        ])\n      ),\n    []\n  )\n}\n```"
    ]
  },
  {
    "name": "bind-function.md",
    "question": "Create a standalone function `bind` that is functionally equivalent to the method `Function.prototype.bind`.\n\n```js\nfunction example() {\n  console.log(this)\n}\nconst boundExample = bind(example, { a: true })\nboundExample.call({ b: true }) // logs { a: true }\n```",
    "answer": "Return a function that accepts an arbitrary number of arguments by gathering them with the rest `...` operator. From that function, return the result of calling the `fn` with `Function.prototype.apply` to apply the context and the array of arguments to the function.\n\n```js\nconst bind = (fn, context) => (...args) => fn.apply(context, args)\n```",
    "goodToHear": [],
    "links": [],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [
      "```js\nfunction example() {\n  console.log(this)\n}\nconst boundExample = bind(example, { a: true })\nboundExample.call({ b: true }) // logs { a: true }\n```"
    ],
    "answerCodeBlocks": [
      "```js\nconst bind = (fn, context) => (...args) => fn.apply(context, args)\n```"
    ]
  },
  {
    "name": "cache-busting.md",
    "question": "What is the purpose of cache busting and how can you achieve it?",
    "answer": "Browsers have a cache to temporarily store files on websites so they don't need to be re-downloaded again when switching between pages or reloading the same page. The server is set up to send headers that tell the browser to store the file for a given amount of time. This greatly increases website speed and preserves bandwidth.\n\nHowever, it can cause problems when the website has been changed by developers because the user's cache still references old files. This can either leave them with old functionality or break a website if the cached CSS and JavaScript files are referencing elements that no longer exist, have moved or have been renamed.\n\nCache busting is the process of forcing the browser to download the new files. This is done by naming the file something different to the old file.\n\nA common technique to force the browser to re-download the file is to append a query string to the end of the file.\n\n* `src=\"js/script.js\"` => `src=\"js/script.js?v=2\"`\n\nThe browser considers it a different file but prevents the need to change the file name.",
    "goodToHear": [],
    "links": [
      "[Strategies for cache-busting CSS](https://css-tricks.com/strategies-for-cache-busting-css/)"
    ],
    "tags": [
      "html"
    ],
    "expertise": 0,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "callback-hell.md",
    "question": "How can you avoid callback hells?\n\n```js\ngetData(function(a) {\n  getMoreData(a, function(b) {\n    getMoreData(b, function(c) {\n      getMoreData(c, function(d) {\n        getMoreData(d, function(e) {\n          // ...\n        })\n      })\n    })\n  })\n})\n```",
    "answer": "Refactoring the functions to return promises and using `async/await` is usually the best option. Instead of supplying the functions with callbacks that cause deep nesting, they return a promise that can be `await`ed and will be resolved once the data has arrived, allowing the next line of code to be evaluated in a sync-like fashion.\n\nThe above code can be restructured like so:\n\n```js\nasync function asyncAwaitVersion() {\n  const a = await getData()\n  const b = await getMoreData(a)\n  const c = await getMoreData(b)\n  const d = await getMoreData(c)\n  const e = await getMoreData(d)\n  // ...\n}\n```\n\nThere are lots of ways to solve the issue of callback hells:\n\n* Modularization: break callbacks into independent functions\n* Use a control flow library, like async\n* Use generators with Promises\n* Use async/await (from v7 on)",
    "goodToHear": [
      "As an efficient JavaScript developer, you have to avoid the constantly growing indentation level, produce clean and readable code and be able to handle complex flows."
    ],
    "links": [
      "[Avoiding Callback Hell in Node.js](http://stackabuse.com/avoiding-callback-hell-in-node-js/)",
      "[Asynchronous JavaScript: From Callback Hell to Async and Await](https://blog.hellojs.org/asynchronous-javascript-from-callback-hell-to-async-and-await-9b9ceb63c8e8)"
    ],
    "tags": [
      "node",
      "javascript"
    ],
    "expertise": 2,
    "questionCodeBlocks": [
      "```js\ngetData(function(a) {\n  getMoreData(a, function(b) {\n    getMoreData(b, function(c) {\n      getMoreData(c, function(d) {\n        getMoreData(d, function(e) {\n          // ...\n        })\n      })\n    })\n  })\n})\n```"
    ],
    "answerCodeBlocks": [
      "```js\nasync function asyncAwaitVersion() {\n  const a = await getData()\n  const b = await getMoreData(a)\n  const c = await getMoreData(b)\n  const d = await getMoreData(c)\n  const e = await getMoreData(d)\n  // ...\n}\n```"
    ]
  },
  {
    "name": "callback-in-setState.md",
    "question": "What is the purpose of callback function as an argument of `setState`?",
    "answer": "The callback function is invoked when `setState` has finished and the component gets rendered. Since `setState` is asynchronous, the callback function is used for any post action.\n\n```js\nsetState({ name: \"sudheer\" }, () => {\n  console.log(\"The name has updated and component re-rendered\")\n})\n```",
    "goodToHear": [
      "The callback function is invoked after `setState` finishes and is used for any post action.",
      "It is recommended to use lifecycle method rather this callback function."
    ],
    "links": [
      "[React docs on `setState`](https://reactjs.org/docs/react-component.html#setstate)"
    ],
    "tags": [
      "react",
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nsetState({ name: \"sudheer\" }, () => {\n  console.log(\"The name has updated and component re-rendered\")\n})\n```"
    ]
  },
  {
    "name": "callback-refs-vs-finddomnode.md",
    "question": "Which is the preferred option between callback refs and findDOMNode()?",
    "answer": "Callback refs are preferred over the `findDOMNode()` API, due to the fact that `findDOMNode()` prevents certain improvements in React in the future.\n\n```js\n// Legacy approach using findDOMNode()\nclass MyComponent extends Component {\n  componentDidMount() {\n    findDOMNode(this).scrollIntoView()\n  }\n\n  render() {\n    return <div />\n  }\n}\n\n// Recommended approach using callback refs\nclass MyComponent extends Component {\n  componentDidMount() {\n    this.node.scrollIntoView()\n  }\n\n  render() {\n    return <div ref={node => (this.node = node)} />\n  }\n}\n```",
    "goodToHear": [
      "Callback refs are preferred over `findDOMNode()`."
    ],
    "links": [
      "[React docs on Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html#exposing-dom-refs-to-parent-components)"
    ],
    "tags": [
      "react",
      "javascript"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\n// Legacy approach using findDOMNode()\nclass MyComponent extends Component {\n  componentDidMount() {\n    findDOMNode(this).scrollIntoView()\n  }\n\n  render() {\n    return <div />\n  }\n}\n\n// Recommended approach using callback refs\nclass MyComponent extends Component {\n  componentDidMount() {\n    this.node.scrollIntoView()\n  }\n\n  render() {\n    return <div ref={node => (this.node = node)} />\n  }\n}\n```"
    ]
  },
  {
    "name": "callbacks.md",
    "question": "What is a callback? Can you show an example using one?",
    "answer": "Callbacks are functions passed as an argument to another function to be executed once an event has occurred or a certain task is complete, often used in asynchronous code. Callback functions are invoked later by a piece of code but can be declared on initialization without being invoked.\n\nAs an example, event listeners are asynchronous callbacks that are only executed when a specific event occurs.\n\n```js\nfunction onClick() {\n  console.log(\"The user clicked on the page.\")\n}\ndocument.addEventListener(\"click\", onClick)\n```\n\nHowever, callbacks can also be synchronous. The following `map` function takes a callback function that is invoked synchronously for each iteration of the loop (array element).\n\n```js\nconst map = (arr, callback) => {\n  const result = []\n  for (let i = 0; i < arr.length; i++) {\n    result.push(callback(arr[i], i))\n  }\n  return result\n}\nmap([1, 2, 3, 4, 5], n => n * 2) // [2, 4, 6, 8, 10]\n```",
    "goodToHear": [
      "Functions are first-class objects in JavaScript",
      "Callbacks vs Promises"
    ],
    "links": [
      "[MDN docs for callbacks](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nfunction onClick() {\n  console.log(\"The user clicked on the page.\")\n}\ndocument.addEventListener(\"click\", onClick)\n```",
      "```js\nconst map = (arr, callback) => {\n  const result = []\n  for (let i = 0; i < arr.length; i++) {\n    result.push(callback(arr[i], i))\n  }\n  return result\n}\nmap([1, 2, 3, 4, 5], n => n * 2) // [2, 4, 6, 8, 10]\n```"
    ]
  },
  {
    "name": "children-prop.md",
    "question": "What is the `children` prop?",
    "answer": "`children` is part of the props object passed to components that allows components to be passed as data to other components, providing the ability to compose components cleanly. There are a number of methods available in the React API to work with this prop, such as `React.Children.map`, `React.Children.forEach`, `React.Children.count`, `React.Children.only` and `React.Children.toArray`. A simple usage example of the children prop is as follows:\n\n```js\nfunction GenericBox({ children }) {\n  return <div className=\"container\">{children}</div>\n}\n\nfunction App() {\n  return (\n    <GenericBox>\n      <span>Hello</span> <span>World</span>\n    </GenericBox>\n  )\n}\n```",
    "goodToHear": [
      "Children is a prop that allows components to be passed as data to other components.",
      "The React API provides methods to work with this prop."
    ],
    "links": [
      "[React docs on Children](https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx)"
    ],
    "tags": [
      "react",
      "javascript"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nfunction GenericBox({ children }) {\n  return <div className=\"container\">{children}</div>\n}\n\nfunction App() {\n  return (\n    <GenericBox>\n      <span>Hello</span> <span>World</span>\n    </GenericBox>\n  )\n}\n```"
    ]
  },
  {
    "name": "class-name.md",
    "question": "Why does React use `className` instead of `class` like in HTML?",
    "answer": "React's philosophy in the beginning was to align with the browser DOM API rather than HTML, since that more closely represents how elements are created. Setting a `class` on an element meant using the `className` API:\n\n```js\nconst element = document.createElement(\"div\")\nelement.className = \"hello\"\n```\n\nAdditionally, before ES5, reserved words could not be used in objects:\n\n```js\nconst element = {\n  attributes: {\n    class: \"hello\"\n  }\n}\n```\n\nIn IE8, this will throw an error.\n\nIn modern environments, destructuring will throw an error if trying to assign to a variable:\n\n```js\nconst { class } = this.props // Error\nconst { className } = this.props // All good\nconst { class: className } = this.props // All good, but cumbersome!\n```\n\nHowever, `class` _can_ be used as a prop without problems, as seen in other libraries like Preact. React currently allows you to use `class`, but will throw a warning and convert it to `className` under the hood. There is currently an open thread (as of January 2019) discussing changing `className` to `class` to reduce confusion.",
    "goodToHear": [],
    "links": [],
    "tags": [
      "react"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nconst element = document.createElement(\"div\")\nelement.className = \"hello\"\n```",
      "```js\nconst element = {\n  attributes: {\n    class: \"hello\"\n  }\n}\n```",
      "```js\nconst { class } = this.props // Error\nconst { className } = this.props // All good\nconst { class: className } = this.props // All good, but cumbersome!\n```"
    ]
  },
  {
    "name": "clone-object.md",
    "question": "How do you clone an object in JavaScript?",
    "answer": "Using the object spread operator `...`, the object's own enumerable properties can be copied\ninto the new object. This creates a shallow clone of the object.\n\n```js\nconst obj = { a: 1, b: 2 }\nconst shallowClone = { ...obj }\n```\n\nWith this technique, prototypes are ignored. In addition, nested objects are not cloned, but rather their references get copied, so nested objects still refer to the same objects as the original. Deep-cloning is much more complex in order to effectively clone any type of object (Date, RegExp, Function, Set, etc) that may be nested within the object.\n\nOther alternatives include:\n\n* `JSON.parse(JSON.stringify(obj))` can be used to deep-clone a simple object, but it is CPU-intensive and only accepts valid JSON (therefore it strips functions and does not allow circular references).\n* `Object.assign({}, obj)` is another alternative.\n* `Object.keys(obj).reduce((acc, key) => (acc[key] = obj[key], acc), {})` is another more verbose alternative that shows the concept in greater depth.",
    "goodToHear": [
      "JavaScript passes objects by reference, meaning that nested objects get their references copied, instead of their values.",
      "The same method can be used to merge two objects."
    ],
    "links": [
      "[MDN docs for Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)",
      "[Clone an object in vanilla JS](http://voidcanvas.com/clone-an-object-in-vanilla-js-in-depth/)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nconst obj = { a: 1, b: 2 }\nconst shallowClone = { ...obj }\n```"
    ]
  },
  {
    "name": "closures.md",
    "question": "What is a closure? Can you give a useful example of one?",
    "answer": "A closure is a function defined inside another function and has access to its lexical scope even when it is executing outside its lexical scope. The closure has access to variables in three scopes:\n\n* Variables declared in its own scope\n* Variables declared in the scope of the parent function\n* Variables declared in the global scope\n\nIn JavaScript, all functions are closures because they have access to the outer scope, but most functions don't utilise the usefulness of closures: the persistence of state. Closures are also sometimes called stateful functions because of this.\n\nIn addition, closures are the only way to store private data that can't be accessed from the outside in JavaScript. They are the key to the UMD (Universal Module Definition) pattern, which is frequently used in libraries that only expose a public API but keep the implementation details private, preventing name collisions with other libraries or the user's own code.",
    "goodToHear": [
      "Closures are useful because they let you associate data with a function that operates on that data.",
      "A closure can substitute an object with only a single method.",
      "Closures can be used to emulate private properties and methods."
    ],
    "links": [
      "[MDN docs for closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)",
      "[What is a closure](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36)",
      "[I never understood JavaScript closures](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "comparing-objects.md",
    "question": "How do you compare two objects in JavaScript?",
    "answer": "Even though two different objects can have the same properties with equal values, they are not considered equal when compared using `==` or `===`. This is because they are being compared by their reference (location in memory), unlike primitive values which are compared by value.\n\nIn order to test if two objects are equal in structure, a helper function is required. It will\niterate through the own properties of each object to test if they have the same values, including nested objects.\nOptionally, the prototypes of the objects may also be tested for equivalence by passing `true` as the 3rd argument.\n\nNote: this technique does not attempt to test equivalence of data structures other than\nplain objects, arrays, functions, dates and primitive values.\n\n```js\nfunction isDeepEqual(obj1, obj2, testPrototypes = false) {\n  if (obj1 === obj2) {\n    return true\n  }\n\n  if (typeof obj1 === \"function\" && typeof obj2 === \"function\") {\n    return obj1.toString() === obj2.toString()\n  }\n\n  if (obj1 instanceof Date && obj2 instanceof Date) {\n    return obj1.getTime() === obj2.getTime()\n  }\n\n  if (\n    Object.prototype.toString.call(obj1) !==\n      Object.prototype.toString.call(obj2) ||\n    typeof obj1 !== \"object\"\n  ) {\n    return false\n  }\n\n  const prototypesAreEqual = testPrototypes\n    ? isDeepEqual(\n        Object.getPrototypeOf(obj1),\n        Object.getPrototypeOf(obj2),\n        true\n      )\n    : true\n\n  const obj1Props = Object.getOwnPropertyNames(obj1)\n  const obj2Props = Object.getOwnPropertyNames(obj2)\n\n  return (\n    obj1Props.length === obj2Props.length &&\n    prototypesAreEqual &&\n    obj1Props.every(prop => isDeepEqual(obj1[prop], obj2[prop]))\n  )\n}\n```",
    "goodToHear": [
      "Primitives like strings and numbers are compared by their value",
      "Objects on the other hand are compared by their reference (location in memory)"
    ],
    "links": [
      "[Object Equality in JavaScript](http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html)",
      "[Deep comparison between two values](https://30secondsofcode.org/object#equals)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nfunction isDeepEqual(obj1, obj2, testPrototypes = false) {\n  if (obj1 === obj2) {\n    return true\n  }\n\n  if (typeof obj1 === \"function\" && typeof obj2 === \"function\") {\n    return obj1.toString() === obj2.toString()\n  }\n\n  if (obj1 instanceof Date && obj2 instanceof Date) {\n    return obj1.getTime() === obj2.getTime()\n  }\n\n  if (\n    Object.prototype.toString.call(obj1) !==\n      Object.prototype.toString.call(obj2) ||\n    typeof obj1 !== \"object\"\n  ) {\n    return false\n  }\n\n  const prototypesAreEqual = testPrototypes\n    ? isDeepEqual(\n        Object.getPrototypeOf(obj1),\n        Object.getPrototypeOf(obj2),\n        true\n      )\n    : true\n\n  const obj1Props = Object.getOwnPropertyNames(obj1)\n  const obj2Props = Object.getOwnPropertyNames(obj2)\n\n  return (\n    obj1Props.length === obj2Props.length &&\n    prototypesAreEqual &&\n    obj1Props.every(prop => isDeepEqual(obj1[prop], obj2[prop]))\n  )\n}\n```"
    ]
  },
  {
    "name": "context.md",
    "question": "What is context?",
    "answer": "Context provides a way to pass data through the component tree without having to pass props down manually at every level. For example, authenticated user, locale preference, UI theme need to be accessed in the application by many components.\n\n```js\nconst { Provider, Consumer } = React.createContext(defaultValue)\n```",
    "goodToHear": [
      "Context provides a way to pass data through a tree of React components, without having to manually pass props.",
      "Context is designed to share data that is considered _global_ for a tree of React components."
    ],
    "links": [
      "[React docs on Context](https://reactjs.org/docs/context.html)"
    ],
    "tags": [
      "react",
      "javascript"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nconst { Provider, Consumer } = React.createContext(defaultValue)\n```"
    ]
  },
  {
    "name": "cors.md",
    "question": "What is CORS?",
    "answer": "Cross-Origin Resource Sharing or CORS is a mechanism that uses additional HTTP headers to grant a browser permission to access resources from a server at an origin different from the website origin.\n\nAn example of a cross-origin request is a web application served from `http://mydomain.com` that uses AJAX to make a request for `http://yourdomain.com`.\n\nFor security reasons, browsers restrict cross-origin HTTP requests initiated by JavaScript. `XMLHttpRequest` and `fetch` follow the same-origin policy, meaning a web application using those APIs can only request HTTP resources from the same origin the application was accessed, unless the response from the other origin includes the correct CORS headers.",
    "goodToHear": [
      "CORS behavior is not an error,  it’s a security mechanism to protect users.",
      "CORS is designed to prevent a malicious website that a user may unintentionally visit from making a request to a legitimate website to read their personal data or perform actions against their will."
    ],
    "links": [
      "[MDN docs for CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "css-box-model.md",
    "question": "Describe the layout of the CSS Box Model and briefly describe each component.",
    "answer": "<!-- Your answer goes here. -->\n\n`Content`: The inner-most part of the box filled with content, such as text, an image, or video player. It has the dimensions `content-box width` and `content-box height`.\n\n`Padding`: The transparent area surrounding the content. It has dimensions `padding-box width` and `padding-box height`.\n\n`Border`: The area surrounding the padding (if any) and content. It has dimensions `border-box width` and `border-box height`.\n\n_Margin_: The transparent outer-most layer that surrounds the border. It separates the element from other elements in the DOM. It has dimensions `margin-box width` and `margin-box height`.\n\n![alt text](https://www.washington.edu/accesscomputing/webd2/student/unit3/images/boxmodel.gif)",
    "goodToHear": [
      "This is a very common question asked during front-end interviews and while it may seem easy, it is critical you know it well!",
      "Shows a solid understanding of spacing and the DOM"
    ],
    "links": [
      "[W3School's CSS Box Model Page](https://www.w3schools.com/Css/css_boxmodel.asp)",
      "[Mozilla's Intro to the CSS Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)"
    ],
    "tags": [
      "css"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "css-preprocessors.md",
    "question": "What are the advantages of using CSS preprocessors?",
    "answer": "CSS preprocessors add useful functionality that native CSS does not have, and generally make CSS neater and more maintainable by enabling DRY (Don't Repeat Yourself) principles. Their terse syntax for nested selectors cuts down on repeated code. They provide variables for consistent theming (however, CSS variables have largely replaced this functionality) and additional tools like color functions (`lighten`, `darken`, `transparentize`, etc), mixins, and loops that make CSS more like a real programming language and gives the developer more power to generate complex CSS.",
    "goodToHear": [
      "They allow us to write more maintainable and scalable CSS",
      "Some disadvantages of using CSS preprocessors (setup, re-compilation time can be slow etc.)"
    ],
    "links": [
      "[CSS Preprocessors](https://medium.com/@garyfagan/css-preprocessors-6f226fa16f27)"
    ],
    "tags": [
      "css"
    ],
    "expertise": 0,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "css-sibling-selectors.md",
    "question": "What is the difference between '+' and '~' sibling selectors?.",
    "answer": "The General Sibling Selector `~` selects all elements that are siblings of a specified element.\n\nThe following example selects all `<p>` elements that are siblings of `<div>` elements:\n\n```css\ndiv ~ p {\n  background-color: blue;\n}\n```\n\nThe Adjacent Sibling Selector `+` selects all elements that are the adjacent siblings of a specified element.\n\nThe following example will select all `<p>` elements that are placed immediately after `<div>` elements:\n\n```css\ndiv + p {\n  background-color: red;\n}\n```",
    "goodToHear": [],
    "links": [
      "[W3School's CSS Combinators Page](https://www.w3schools.com/css/css_combinators.asp)",
      "[Mozilla's Combinators and groups of selectors page](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Combinators_and_multiple_selectors)"
    ],
    "tags": [
      "css"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```css\ndiv ~ p {\n  background-color: blue;\n}\n```",
      "```css\ndiv + p {\n  background-color: red;\n}\n```"
    ]
  },
  {
    "name": "css-specificity.md",
    "question": "Can you describe how CSS specificity works?",
    "answer": "Assuming the browser has already determined the set of rules for an element, each rule is assigned a matrix of values, which correspond to the following from highest to lowest specificity:\n\n* Inline rules (binary - 1 or 0)\n* Number of id selectors\n* Number of class, pseudo-class and attribute selectors\n* Number of tags and pseudo-element selectors\n\nWhen two selectors are compared, the comparison is made on a per-column basis (e.g. an id selector will always be higher than any amount of class selectors, as ids have higher specificity than classes). In cases of equal specificity between multiple rules, the rules that comes last in the page's style sheet is deemed more specific and therefore applied to the element.",
    "goodToHear": [
      "Specificity matrix: [inline, id, class/pseudo-class/attribute, tag/pseudo-element]",
      "In cases of equal specificity, last rule is applied"
    ],
    "links": [
      "[CSS Specificity](https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/)"
    ],
    "tags": [
      "css"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "dom.md",
    "question": "What is the DOM?",
    "answer": "The DOM (Document Object Model) is a cross-platform API that treats HTML and XML documents as a tree structure consisting of nodes. These nodes (such as elements and text nodes) are objects that can be programmatically manipulated and any visible changes made to them are reflected live in the document. In a browser, this API is available to JavaScript where DOM nodes can be manipulated to change their styles, contents, placement in the document, or interacted with through event listeners.",
    "goodToHear": [
      "The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API.",
      "The DOM is constructed progressively in the browser as a page loads, which is why scripts are often placed at the bottom of a page, in the `<head>` with a `defer` attribute, or inside a `DOMContentLoaded` event listener. Scripts that manipulate DOM nodes should be run after the DOM has been constructed to avoid errors.",
      "`document.getElementById()` and `document.querySelector()` are common functions for selecting DOM nodes.",
      "Setting the `innerHTML` property to a new value runs the string through the HTML parser, offering an easy way to append dynamic HTML content to a node."
    ],
    "links": [
      "[MDN docs for DOM](https://developer.mozilla.org/en-US/docs/DOM)"
    ],
    "tags": [
      "html",
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "double-vs-triple-equals.md",
    "question": "What is the difference between the equality operators `==` and `===`?",
    "answer": "Triple equals (`===`) checks for strict equality, which means both the type and value must be the same. Double equals (`==`) on the other hand first performs type coercion so that both operands are of the same type and then applies strict comparison.",
    "goodToHear": [
      "Whenever possible, use triple equals to test equality because loose equality `==` can have unintuitive results.",
      "Type coercion means the values are converted into the same type.",
      "Mention of falsy values and their comparison."
    ],
    "links": [
      "[MDN docs for comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 0,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "element-vs-component.md",
    "question": "What is the difference between an element and a component in React?",
    "answer": "An element is a plain JavaScript object that represents a DOM node or component. Elements are pure and never mutated, and are cheap to create.\n\nA component is a function or class. Components can have state and take props as input and return an element tree as output (although they can represent generic containers or wrappers and don't necessarily have to emit DOM). Components can initiate side effects in lifecycle methods (e.g. AJAX requests, DOM mutations, interfacing with 3rd party libraries) and may be expensive to create.\n\n```js\nconst Component = () => \"Hello\"\nconst componentElement = <Component />\nconst domNodeElement = <div />\n```",
    "goodToHear": [
      "Elements are immutable, plain objects that describe the DOM nodes or components you want to render.",
      "Components can be either classes or functions, that take props as an input and return an element tree as the output."
    ],
    "links": [
      "[React docs on Rendering Elements](https://reactjs.org/docs/rendering-elements.html)",
      "[React docs on Components and Props](https://reactjs.org/docs/components-and-props.html)"
    ],
    "tags": [
      "react",
      "javascript"
    ],
    "expertise": 0,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nconst Component = () => \"Hello\"\nconst componentElement = <Component />\nconst domNodeElement = <div />\n```"
    ]
  },
  {
    "name": "em-rem-difference.md",
    "question": "What is the difference between `em` and `rem` units?",
    "answer": "Both `em` and `rem` units are based on the `font-size` CSS property. The only difference is where they inherit their values from.\n\n* `em` units inherit their value from the `font-size` of the parent element\n* `rem` units inherit their value from the `font-size` of the root element (`html`)\n\nIn most browsers, the `font-size` of the root element is set to `16px` by default.",
    "goodToHear": [
      "Benefits of using `em` and `rem` units"
    ],
    "links": [
      "[CSS units for font-size: px | em | rem](https://medium.com/code-better/css-units-for-font-size-px-em-rem-79f7e592bb97)"
    ],
    "tags": [
      "css"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "error-boundaries.md",
    "question": "What are error boundaries in React?",
    "answer": "Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.\n\nClass components become error boundaries if they define either (or both) of the lifecycle methods `static getDerivedStateFromError()` or `componentDidCatch().`\n\n```js\nclass ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = { hasError: false }\n  }\n\n  // Use componentDidCatch to log the error\n  componentDidCatch(error, info) {\n    // You can also log the error to an error reporting service\n    logErrorToMyService(error, info)\n  }\n  \n  // use getDerivedStateFromError to update state\n  static getDerivedStateFromError(error) {\n    // Display fallback UI\n     return { hasError: true };\n  }\n\n\n  render() {\n    if (this.state.hasError) {\n      // You can render any custom fallback UI\n      return <h1>Something went wrong.</h1>\n    }\n    return this.props.children\n  }\n}\n```",
    "goodToHear": [
      "Error boundaries only catch errors in the components below them in the tree. An error boundary can’t catch an error within itself."
    ],
    "links": [
      "https://reactjs.org/docs/error-boundaries.html"
    ],
    "tags": [
      "react"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nclass ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = { hasError: false }\n  }\n\n  // Use componentDidCatch to log the error\n  componentDidCatch(error, info) {\n    // You can also log the error to an error reporting service\n    logErrorToMyService(error, info)\n  }\n  \n  // use getDerivedStateFromError to update state\n  static getDerivedStateFromError(error) {\n    // Display fallback UI\n     return { hasError: true };\n  }\n\n\n  render() {\n    if (this.state.hasError) {\n      // You can render any custom fallback UI\n      return <h1>Something went wrong.</h1>\n    }\n    return this.props.children\n  }\n}\n```"
    ]
  },
  {
    "name": "event-delegation.md",
    "question": "What is event delegation and why is it useful? Can you show an example of how to use it?",
    "answer": "Event delegation is a technique of delegating events to a single common ancestor. Due to event bubbling, events \"bubble\" up the DOM tree by executing any handlers progressively on each ancestor element up to the root that may be listening to it.\n\nDOM events provide useful information about the element that initiated the event via `Event.target`. This allows the parent element to handle behavior as though the target element was listening to the event, rather than all children of the parent or the parent itself.\n\nThis provides two main benefits:\n\n* It increases performance and reduces memory consumption by only needing to register a single event listener to handle potentially thousands of elements.\n* If elements are dynamically added to the parent, there is no need to register new event listeners for them.\n\nInstead of:\n\n```js\ndocument.querySelectorAll(\"button\").forEach(button => {\n  button.addEventListener(\"click\", handleButtonClick)\n})\n```\n\nEvent delegation involves using a condition to ensure the child target matches our desired element:\n\n```js\ndocument.addEventListener(\"click\", e => {\n  if (e.target.closest(\"button\")) {\n    handleButtonClick()\n  }\n})\n```",
    "goodToHear": [
      "The difference between event bubbling and capturing"
    ],
    "links": [
      "[Event Delegation](https://davidwalsh.name/event-delegate)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\ndocument.querySelectorAll(\"button\").forEach(button => {\n  button.addEventListener(\"click\", handleButtonClick)\n})\n```",
      "```js\ndocument.addEventListener(\"click\", e => {\n  if (e.target.closest(\"button\")) {\n    handleButtonClick()\n  }\n})\n```"
    ]
  },
  {
    "name": "event-driven-programming.md",
    "question": "What is event-driven programming?",
    "answer": "Event-driven programming is a paradigm that involves building applications that send and receive events. When the program emits events, the program responds by running any callback functions that are registered to that event and context, passing in associated data to the function. With this pattern, events can be emitted into the wild without throwing errors even if no functions are subscribed to it.\n\nA common example of this is the pattern of elements listening to DOM events such as `click` and `mouseenter`, where a callback function is run when the event occurs.\n\n```js\ndocument.addEventListener(\"click\", function(event) {\n  // This callback function is run when the user\n  // clicks on the document.\n})\n```\n\nWithout the context of the DOM, the pattern may look like this:\n\n```js\nconst hub = createEventHub()\nhub.on(\"message\", function(data) {\n  console.log(`${data.username} said ${data.text}`)\n})\nhub.emit(\"message\", {\n  username: \"John\",\n  text: \"Hello?\"\n})\n```\n\nWith this implementation, `on` is the way to _subscribe_ to an event, while `emit` is the way to _publish_ the event.",
    "goodToHear": [
      "Follows a publish-subscribe pattern.",
      "Responds to events that occur by running any callback functions subscribed to the event.",
      "Show how to create a simple pub-sub implementation with JavaScript."
    ],
    "links": [
      "[MDN docs on Events and Handlers](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Overview_of_Events_and_Handlers)",
      "[Understanding Node.js event-driven architecture](https://medium.freecodecamp.org/understanding-node-js-event-driven-architecture-223292fcbc2d)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\ndocument.addEventListener(\"click\", function(event) {\n  // This callback function is run when the user\n  // clicks on the document.\n})\n```",
      "```js\nconst hub = createEventHub()\nhub.on(\"message\", function(data) {\n  console.log(`${data.username} said ${data.text}`)\n})\nhub.emit(\"message\", {\n  username: \"John\",\n  text: \"Hello?\"\n})\n```"
    ]
  },
  {
    "name": "expression-vs-statement.md",
    "question": "What is the difference between an expression and a statement in JavaScript?",
    "answer": "There are two main syntactic categories in JavaScript: expressions and statements. A third one is both together, referred to as an expression statement. They are roughly summarized as:\n\n* **Expression**: produces a value\n* **Statement**: performs an action\n* **Expression statement**: produces a value and performs an action\n\nA general rule of thumb:\n\n> If you can print it or assign it to a variable, it’s an expression. If you can’t, it’s a statement.\n\n##### Statements\n\n```js\nlet x = 0\n\nfunction declaration() {}\n\nif (true) {\n}\n```\n\nStatements appear as instructions that do something but don't produce values.\n\n```js\n// Assign `x` to the absolute value of `y`.\nvar x\nif (y >= 0) {\n  x = y\n} else {\n  x = -y\n}\n```\n\nThe only expression in the above code is `y >= 0` which produces a value, either `true` or `false`. A value is not produced by other parts of the code.\n\n##### Expressions\n\nExpressions produce a value. They can be passed around to functions because the interpreter replaces them with the value they resolve to.\n\n```js\n5 + 5 // => 10\n\nlastCharacter(\"input\") // => \"t\"\n\ntrue === true // => true\n```\n\n##### Expression statements\n\nThere is an equivalent version of the set of statements used before as an expression using the conditional operator:\n\n```js\n// Assign `x` as the absolute value of `y`.\nvar x = y >= 0 ? y : -y\n```\n\nThis is both an expression and a statement, because we are declaring a variable `x` (statement) as an evaluation (expression).",
    "goodToHear": [
      "Function declarations vs function expressions"
    ],
    "links": [
      "[What is the difference between a statement and an expression?](https://stackoverflow.com/questions/12703214/javascript-difference-between-a-statement-and-an-expression)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nlet x = 0\n\nfunction declaration() {}\n\nif (true) {\n}\n```",
      "```js\n// Assign `x` to the absolute value of `y`.\nvar x\nif (y >= 0) {\n  x = y\n} else {\n  x = -y\n}\n```",
      "```js\n5 + 5 // => 10\n\nlastCharacter(\"input\") // => \"t\"\n\ntrue === true // => true\n```",
      "```js\n// Assign `x` as the absolute value of `y`.\nvar x = y >= 0 ? y : -y\n```"
    ]
  },
  {
    "name": "falsy-truthy.md",
    "question": "What are truthy and falsy values in JavaScript?",
    "answer": "A value is either truthy or falsy depending on how it is evaluated in a Boolean context. Falsy means false-like and truthy means true-like. Essentially, they are values that are coerced to `true` or `false` when performing certain operations.\n\nThere are 6 falsy values in JavaScript. They are:\n\n* `false`\n* `undefined`\n* `null`\n* `\"\"` (empty string)\n* `NaN`\n* `0` (both `+0` and `-0`)\n\nEvery other value is considered truthy.\n\nA value's truthiness can be examined by passing it into the `Boolean` function.\n\n```js\nBoolean(\"\") // false\nBoolean([]) // true\n```\n\nThere is a shortcut for this using the logical NOT `!` operator. Using `!` once will convert a value to its inverse boolean equivalent (i.e. not false is true), and `!` once more will convert back, thus effectively converting the value to a boolean.\n\n```js\n!!\"\" // false\n!![] // true\n```",
    "goodToHear": [],
    "links": [
      "[Truthy on MDN](https://developer.mozilla.org/en/docs/Glossary/Truthy)",
      "[Falsy on MDN](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nBoolean(\"\") // false\nBoolean([]) // true\n```",
      "```js\n!!\"\" // false\n!![] // true\n```"
    ]
  },
  {
    "name": "fibonacci.md",
    "question": "Generate an array, containing the Fibonacci sequence, up until the nth term.",
    "answer": "Initialize an empty array of length `n`. Use `Array.prototype.reduce()` to add values into the array, using the sum of the last two values, except for the first two.\n\n```js\nconst fibonacci = n =>\n  [...Array(n)].reduce(\n    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),\n    []\n  )\n```",
    "goodToHear": [],
    "links": [
      "[Similar problem](https://github.com/Chalarangelo/30-seconds-of-code/blob/master/snippets_archive/fibonacciUntilNum.md)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nconst fibonacci = n =>\n  [...Array(n)].reduce(\n    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),\n    []\n  )\n```"
    ]
  },
  {
    "name": "flex-layout.md",
    "question": "Using flexbox, create a 3-column layout where each column takes up a `col-{n} / 12` ratio of the container.\n\n```html\n<div class=\"row\">\n  <div class=\"col-2\"></div>\n  <div class=\"col-7\"></div>\n  <div class=\"col-3\"></div>\n</div>\n```",
    "answer": "Set the `.row` parent to `display: flex;` and use the `flex` shorthand property to give the column classes a `flex-grow` value that corresponds to its ratio value.\n\n```css\n.row {\n  display: flex;\n}\n\n.col-2 {\n  flex: 2;\n}\n\n.col-7 {\n  flex: 7;\n}\n\n.col-3 {\n  flex: 3;\n}\n```",
    "goodToHear": [],
    "links": [
      "[MDN docs for basic concepts of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)",
      "[A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)"
    ],
    "tags": [
      "css"
    ],
    "expertise": 0,
    "questionCodeBlocks": [
      "```html\n<div class=\"row\">\n  <div class=\"col-2\"></div>\n  <div class=\"col-7\"></div>\n  <div class=\"col-3\"></div>\n</div>\n```"
    ],
    "answerCodeBlocks": [
      "```css\n.row {\n  display: flex;\n}\n\n.col-2 {\n  flex: 2;\n}\n\n.col-7 {\n  flex: 7;\n}\n\n.col-3 {\n  flex: 3;\n}\n```"
    ]
  },
  {
    "name": "floating-point.md",
    "question": "What does `0.1 + 0.2 === 0.3` evaluate to?",
    "answer": "It evaluates to `false` because JavaScript uses the IEEE 754 standard for Math and it makes use of 64-bit floating numbers. This causes precision errors when doing decimal calculations, in short, due to computers working in Base 2 while decimal is Base 10.\n\n```js\n0.1 + 0.2 // 0.30000000000000004\n```\n\nA solution to this problem would be to use a function that determines if two numbers are approximately equal by defining an error margin (epsilon) value that the difference between two values should be less than.\n\n```js\nconst approxEqual = (n1, n2, epsilon = 0.0001) => Math.abs(n1 - n2) < epsilon\napproxEqual(0.1 + 0.2, 0.3) // true\n```",
    "goodToHear": [
      "A simple solution to this problem"
    ],
    "links": [
      "[A simple helper function to check equality](https://github.com/Chalarangelo/30-seconds-of-code#approximatelyequal)",
      "[Fix \"0.1 + 0.2 = 0.300000004\" in JavaScript](http://blog.blakesimpson.co.uk/read/61-fix-0-1-0-2-0-300000004-in-javascript)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\n0.1 + 0.2 // 0.30000000000000004\n```",
      "```js\nconst approxEqual = (n1, n2, epsilon = 0.0001) => Math.abs(n1 - n2) < epsilon\napproxEqual(0.1 + 0.2, 0.3) // true\n```"
    ]
  },
  {
    "name": "focus-ring.md",
    "question": "What is a focus ring? What is the correct solution to handle them?",
    "answer": "A focus ring is a visible outline given to focusable elements such as buttons and anchor tags. It varies depending on the vendor, but generally it appears as a blue outline around the element to indicate it is currently focused.\n\nIn the past, many people specified `outline: 0;` on the element to remove the focus ring. However, this causes accessibility issues for keyboard users because the focus state may not be clear. When not specified though, it causes an unappealing blue ring to appear around an element.\n\nIn recent times, frameworks like Bootstrap have opted to use a more appealing `box-shadow` outline to replace the default focus ring. However, this is still not ideal for mouse users.\n\nThe best solution is an upcoming pseudo-selector `:focus-visible` which can be polyfilled today with JavaScript. It will only show a focus ring if the user is using a keyboard and leave it hidden for mouse users. This keeps both aesthetics for mouse use and accessibility for keyboard use.",
    "goodToHear": [],
    "links": [
      "[:focus-visible](https://css-tricks.com/focus-visible-and-backwards-compatibility/)"
    ],
    "tags": [
      "css"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "for-each-map.md",
    "question": "What is the difference between the array methods `map()` and `forEach()`?",
    "answer": "Both methods iterate through the elements of an array. `map()` maps each element to a new element by invoking the callback function on each element and returning a new array. On the other hand, `forEach()` invokes the callback function for each element but does not return a new array. `forEach()` is generally used when causing a side effect on each iteration, whereas `map()` is a common functional programming technique.",
    "goodToHear": [
      "Use `forEach()` if you need to iterate over an array and cause mutations to the elements without needing to return values to generate a new array.",
      "`map()` is the right choice to keep data immutable where each value of the original array is mapped to a new array."
    ],
    "links": [
      "[MDN docs for forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)",
      "[MDN docs for map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)",
      "[JavaScript — Map vs. ForEach](https://codeburst.io/javascript-map-vs-foreach-f38111822c0f)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "fragments.md",
    "question": "What are fragments?",
    "answer": "Fragments allow a React component to return multiple elements without a wrapper, by grouping the children without adding extra elements to the DOM. Fragments offer better performance, lower memory usage, a cleaner DOM and can help in dealing with certain CSS mechanisms (e.g. tables, Flexbox and Grid).\n\n```js\nrender() {\n  return (\n    <React.Fragment>\n      <ChildA />\n      <ChildB />\n      <ChildC />\n    </React.Fragment>\n  );\n}\n\n// Short syntax supported by Babel 7\nrender() {\n  return (\n    <>\n      <ChildA />\n      <ChildB />\n      <ChildC />\n    </>\n  );\n}\n```",
    "goodToHear": [
      "Fragments group multiple elements returned from a component, without adding a DOM element around them."
    ],
    "links": [
      "[React docs on Fragments](https://reactjs.org/docs/fragments.html)"
    ],
    "tags": [
      "react",
      "javascript"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nrender() {\n  return (\n    <React.Fragment>\n      <ChildA />\n      <ChildB />\n      <ChildC />\n    </React.Fragment>\n  );\n}\n\n// Short syntax supported by Babel 7\nrender() {\n  return (\n    <>\n      <ChildA />\n      <ChildB />\n      <ChildC />\n    </>\n  );\n}\n```"
    ]
  },
  {
    "name": "functional-programming.md",
    "question": "What is functional programming?",
    "answer": "Functional programming is a paradigm in which programs are built in a declarative manner using pure functions that avoid shared state and mutable data. Functions that always return the same value for the same input and don't produce side effects are the pillar of functional programming. Many programmers consider this to be the best approach to software development as it reduces bugs and cognitive load.",
    "goodToHear": [
      "Cleaner, more concise development experience",
      "Simple function composition",
      "Features of JavaScript that enable functional programming (`.map`, `.reduce` etc.)",
      "JavaScript is multi-paradigm programming language (Object-Oriented Programming and Functional Programming live in harmony)"
    ],
    "links": [
      "[Javascript and Functional Programming: An Introduction](https://hackernoon.com/javascript-and-functional-programming-an-introduction-286aa625e26d)",
      "[Master the JavaScript Interview: What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "hoc-component.md",
    "question": "What are higher-order components?",
    "answer": "A higher-order component (HOC) is a function that takes a component as an argument and returns a new component. It is a pattern that is derived from React’s compositional nature. Higher-order components are like **pure components** because they accept any dynamically provided child component, but they won’t modify or copy any behavior from their input components.\n\n```js\nconst EnhancedComponent = higherOrderComponent(WrappedComponent)\n```",
    "goodToHear": [
      "They can be used for state abstraction and manipulation, props manipulation, render high jacking, etc."
    ],
    "links": [],
    "tags": [
      "react"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nconst EnhancedComponent = higherOrderComponent(WrappedComponent)\n```"
    ]
  },
  {
    "name": "hoisting-example.md",
    "question": "What will the console log in this example?\n\n```js\nvar foo = 1\nvar foobar = function() {\n  console.log(foo)\n  var foo = 2\n}\nfoobar()\n```",
    "answer": "Due to hoisting, the local variable `foo` is declared before the `console.log` method is called. This means the local variable `foo` is passed as an argument to `console.log()` instead of the global one declared outside of the function. However, since the value is not hoisted with the variable declaration, the output will be `undefined`, not `2`.",
    "goodToHear": [
      "Hoisting is JavaScript’s default behavior of moving declarations to the top",
      "Mention of `strict` mode"
    ],
    "links": [
      "[MDN docs for hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [
      "```js\nvar foo = 1\nvar foobar = function() {\n  console.log(foo)\n  var foo = 2\n}\nfoobar()\n```"
    ],
    "answerCodeBlocks": []
  },
  {
    "name": "hoisting.md",
    "question": "How does hoisting work in JavaScript?",
    "answer": "Hoisting is a JavaScript mechanism where variable and function declarations are put into memory during the compile phase. This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.\n\nHowever, the value is not hoisted with the declaration.\n\nThe following snippet:\n\n```js\nconsole.log(hoist)\nvar hoist = \"value\"\n```\n\nis equivalent to:\n\n```js\nvar hoist\nconsole.log(hoist)\nhoist = \"value\"\n```\n\nTherefore logging `hoist` outputs `undefined` to the console, not `\"value\"`.\n\nHoisting also allows you to invoke a function declaration before it appears to be declared in a program.\n\n```js\nmyFunction() // No error; logs \"hello\"\nfunction myFunction() {\n  console.log(\"hello\")\n}\n```\n\nBut be wary of function expressions that are assigned to a variable:\n\n```js\nmyFunction() // Error: `myFunction` is not a function\nvar myFunction = function() {\n  console.log(\"hello\")\n}\n```",
    "goodToHear": [
      "Hoisting is JavaScript’s default behavior of moving declarations to the top",
      "Functions declarations are hoisted before variable declarations"
    ],
    "links": [
      "[MDN docs for hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)",
      "[Understanding Hoisting in JavaScript](https://scotch.io/tutorials/understanding-hoisting-in-javascript)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nconsole.log(hoist)\nvar hoist = \"value\"\n```",
      "```js\nvar hoist\nconsole.log(hoist)\nhoist = \"value\"\n```",
      "```js\nmyFunction() // No error; logs \"hello\"\nfunction myFunction() {\n  console.log(\"hello\")\n}\n```",
      "```js\nmyFunction() // Error: `myFunction` is not a function\nvar myFunction = function() {\n  console.log(\"hello\")\n}\n```"
    ]
  },
  {
    "name": "html-multiple-header-footers.md",
    "question": "Can a web page contain multiple `<header>` elements? What about `<footer>` elements?",
    "answer": "Yes to both. The W3 documents state that the tags represent the header(`<header>`) and footer(`<footer>`) areas of their nearest ancestor \"section\". So not only can the page `<body>` contain a header and a footer, but so can every `<article>` and `<section>` element.",
    "goodToHear": [
      "W3 recommends having as many as you want, but only 1 of each for each \"section\" of your page, i.e. body, section etc."
    ],
    "links": [
      "[StackOverflow Using header or footer tag twice](https://stackoverflow.com/questions/4837269/html5-using-header-or-footer-tag-twice?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)"
    ],
    "tags": [
      "html"
    ],
    "expertise": 0,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "html-specification-implementation.md",
    "question": "Discuss the differences between an HTML specification and a browser’s implementation thereof.",
    "answer": "HTML specifications such as `HTML5` define a set of rules that a document must adhere to in order to be “valid” according to that specification. In addition, a specification provides instructions on how a browser must interpret and render such a document.\n\nA browser is said to “support” a specification if it handles valid documents according to the rules of the specification. As of yet, no browser supports all aspects of the `HTML5` specification (although all of the major browser support most of it), and as a result, it is necessary for the developer to confirm whether the aspect they are making use of will be supported by all of the browsers on which they hope to display their content. This is why cross-browser support continues to be a headache for developers, despite the improved specificiations.",
    "goodToHear": [
      "`HTML5` defines some rules to follow for an invalid `HTML5` document (i.e., one that contains syntactical errors)",
      "However, invalid documents may contain anything, so it's impossible for the specification to handle all possibilities comprehensively.",
      "Thus, many decisions about how to handle malformed documents are left up to the browser."
    ],
    "links": [
      "[HTML 5.2 WWW Specifications](https://www.w3.org/TR/html52/)"
    ],
    "tags": [
      "html"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "html-vs-react-event-handling.md",
    "question": "What is the difference between HTML and React event handling?",
    "answer": "In HTML, the attribute name is in all lowercase and is given a string invoking a function defined somewhere:\n\n```html\n<button onclick=\"handleClick()\"></button>\n```\n\nIn React, the attribute name is camelCase and are passed the function reference inside curly braces:\n\n```js\n<button onClick={handleClick} />\n```\n\nIn HTML, `false` can be returned to prevent default behavior, whereas in React `preventDefault` has to be called explicitly.\n\n```html\n<a href=\"#\" onclick=\"console.log('The link was clicked.'); return false\" />\n```\n\n```js\nfunction handleClick(e) {\n  e.preventDefault()\n  console.log(\"The link was clicked.\")\n}\n```",
    "goodToHear": [
      "HTML uses lowercase, React uses camelCase."
    ],
    "links": [
      "[React docs on Handling Events](https://reactjs.org/docs/handling-events.html)"
    ],
    "tags": [
      "react",
      "javascript",
      "html"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```html\n<button onclick=\"handleClick()\"></button>\n```",
      "```js\n<button onClick={handleClick} />\n```",
      "```html\n<a href=\"#\" onclick=\"console.log('The link was clicked.'); return false\" />\n```",
      "```js\nfunction handleClick(e) {\n  e.preventDefault()\n  console.log(\"The link was clicked.\")\n}\n```"
    ]
  },
  {
    "name": "html-vs-xhtml.md",
    "question": "What are some differences that XHTML has compared to HTML?",
    "answer": "Some of the key differences are:\n\n* An XHTML element must have an XHTML `<DOCTYPE>`\n* Attributes values must be enclosed in quotes\n* Attribute minimization is forbidden (e.g. one has to use `checked=\"checked\"` instead of `checked`)\n* Elements must always be properly nested\n* Elements must always be closed\n* Special characters must be escaped",
    "goodToHear": [
      "Any element can be self-closed",
      "Tags ands attributes are case-sensitive, usually lowercase"
    ],
    "links": [
      "[W3Schools docs for HTML and XHTML](https://www.w3schools.com/html/html_xhtml.asp)"
    ],
    "tags": [
      "html"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "html5-semantic-elements-usage.md",
    "question": "Briefly describe the correct usage of the following HTML5 semantic elements: `<header>`, `<article>`,`<section>`, `<footer>`",
    "answer": "* `<header>` is used to contain introductory and navigational information about a section of the page. This can include the section heading, the author’s name, time and date of publication, table of contents, or other navigational information.\n\n* `<article>` is meant to house a self-contained composition that can logically be independently recreated outside of the page without losing its meaning. Individual blog posts or news stories are good examples.\n\n* `<section>` is a flexible container for holding content that shares a common informational theme or purpose.\n\n* `<footer>` is used to hold information that should appear at the end of a section of content and contain additional information about the section. Author’s name, copyright information, and related links are typical examples of such content.",
    "goodToHear": [
      "Other semantic elements are `<form>` and `<table>`"
    ],
    "links": [
      "[HTML 5 Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)"
    ],
    "tags": [
      "html"
    ],
    "expertise": 0,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "html5-web-storage.md",
    "question": "What is HTML5 Web Storage? Explain `localStorage` and `sessionStorage`.",
    "answer": "With HTML5, web pages can store data locally within the user’s browser.\nThe data is stored in name/value pairs, and a web page can only access data stored by itself.\n\n**Differences between `localStorage` and `sessionStorage` regarding lifetime:**\n\n* Data stored through `localStorage` is permanent: it does not expire and remains stored on the user’s computer until a web app deletes it or the user asks the browser to delete it.\n* `sessionStorage` has the same lifetime as the top-level window or browser tab in which the data got stored. When the tab is permanently closed, any data stored through `sessionStorage` is deleted.\n\n**Differences between `localStorage` and `sessionStorage` regarding storage scope:**\nBoth forms of storage are scoped to the document origin so that documents with different origins will never share the stored objects.\n\n* `sessionStorage` is also scoped on a per-window basis. Two browser tabs with documents from the same origin have separate `sessionStorage` data.\n* Unlike in `localStorage`, the same scripts from the same origin can't access each other's `sessionStorage` when opened in different tabs.",
    "goodToHear": [
      "Earlier, this was done with cookies.",
      "The storage limit is far larger (at least 5MB) than with cookies and its faster.",
      "The data is never transferred to the server and can only be used if the client specifically asks for it."
    ],
    "links": [
      "[W3Schools HTML5 Webstorage](https://www.w3schools.com/html/html5_webstorage.asp)"
    ],
    "tags": [
      "html"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "iife.md",
    "question": "What is the reason for wrapping the entire contents of a JavaScript source file in a function that is immediately invoked?",
    "answer": "This technique is very common in JavaScript libraries. It creates a closure around the entire contents of the file which creates a private namespace and thereby helps avoid potential name clashes between different JavaScript modules and libraries. The function is immediately invoked so that the namespace (library name) is assigned the return value of the function.\n\n```js\nconst myLibrary = (function() {\n  var privateVariable = 2\n  return {\n    publicMethod: () => privateVariable\n  }\n})()\nprivateVariable // ReferenceError\nmyLibrary.publicMethod() // 2\n```",
    "goodToHear": [
      "Used among many popular JavaScript libraries",
      "Creates a private namespace"
    ],
    "links": [
      "[MDN docs for closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nconst myLibrary = (function() {\n  var privateVariable = 2\n  return {\n    publicMethod: () => privateVariable\n  }\n})()\nprivateVariable // ReferenceError\nmyLibrary.publicMethod() // 2\n```"
    ]
  },
  {
    "name": "imperative-vs-declarative.md",
    "question": "Explain the differences between imperative and declarative programming.",
    "answer": "These two types of programming can roughly be summarized as:\n\n* Imperative: **how** to achieve something\n* Declarative: **what** should be achieved\n\nA common example of declarative programming is CSS. The developer specifies CSS properties that describe what something should look like rather than how to achieve it. The \"how\" is abstracted away by the browser.\n\nOn the other hand, imperative programming involves the steps required to achieve something. In JavaScript, the differences can be contrasted like so:\n\n##### Imperative\n\n```js\nconst numbers = [1, 2, 3, 4, 5]\nconst numbersDoubled = []\nfor (let i = 0; i < numbers.length; i++) {\n  numbersDoubled[i] = numbers[i] * 2\n}\n```\n\nWe manually loop over the numbers of the array and assign the new index as the number doubled.\n\n##### Declarative\n\n```js\nconst numbers = [1, 2, 3, 4, 5]\nconst numbersDoubled = numbers.map(n => n * 2)\n```\n\nWe declare that the new array is mapped to a new one where each value is doubled.",
    "goodToHear": [
      "Declarative programming often works with functions and expressions. Imperative programming frequently uses statements and relies on low-level features that cause mutations, while declarative programming has a strong focus on abstraction and purity.",
      "Declarative programming is more terse and easier to process at a glance."
    ],
    "links": [
      "[Declarative vs Imperative Programming](https://codeburst.io/declarative-vs-imperative-programming-a8a7c93d9ad2)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nconst numbers = [1, 2, 3, 4, 5]\nconst numbersDoubled = []\nfor (let i = 0; i < numbers.length; i++) {\n  numbersDoubled[i] = numbers[i] * 2\n}\n```",
      "```js\nconst numbers = [1, 2, 3, 4, 5]\nconst numbersDoubled = numbers.map(n => n * 2)\n```"
    ]
  },
  {
    "name": "inline-conditional-expressions.md",
    "question": "What are inline conditional expressions?",
    "answer": "Since a JSX element tree is one large expression, you cannot embed statements inside. Conditional expressions act as a replacement for statements to use inside the tree.\n\nFor example, this won't work:\n\n<!-- prettier-ignore -->\n```js\nfunction App({ messages, isVisible }) {\n  return (\n    <div>\n      if (messages.length > 0) {\n        <h2>You have {messages.length} unread messages.</h2>\n      } else {\n        <h2>You have no unread messages.</h2>\n      }\n      if (isVisible) {\n        <p>I am visible.</p>\n      }\n    </div>\n  )\n}\n```\n\nLogical AND `&&` and the ternary `? :` operator replace the `if`/`else` statements.\n\n```js\nfunction App({ messages, isVisible }) {\n  return (\n    <div>\n      {messages.length > 0 ? (\n        <h2>You have {messages.length} unread messages.</h2>\n      ) : (\n        <h2>You have no unread messages.</h2>\n      )}\n      {isVisible && <p>I am visible.</p>}\n    </div>\n  )\n}\n```",
    "goodToHear": [],
    "links": [
      "[React docs on Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)"
    ],
    "tags": [
      "react",
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nfunction App({ messages, isVisible }) {\n  return (\n    <div>\n      if (messages.length > 0) {\n        <h2>You have {messages.length} unread messages.</h2>\n      } else {\n        <h2>You have no unread messages.</h2>\n      }\n      if (isVisible) {\n        <p>I am visible.</p>\n      }\n    </div>\n  )\n}\n```",
      "```js\nfunction App({ messages, isVisible }) {\n  return (\n    <div>\n      {messages.length > 0 ? (\n        <h2>You have {messages.length} unread messages.</h2>\n      ) : (\n        <h2>You have no unread messages.</h2>\n      )}\n      {isVisible && <p>I am visible.</p>}\n    </div>\n  )\n}\n```"
    ]
  },
  {
    "name": "keys.md",
    "question": "What is a key? What are the benefits of using it in lists?",
    "answer": "Keys are a special string attribute that helps React identify which items have been changed, added or removed. They are used when rendering array elements to give them a stable identity. Each element's key must be unique (e.g. IDs from the data or indexes as a last resort).\n\n```js\nconst todoItems = todos.map(todo => <li key={todo.id}>{todo.text}</li>)\n```\n\n* Using indexes as keys is not recommended if the order of items may change, as it might negatively impact performance and may cause issues with component state.\n* If you extract list items as a separate component then apply keys on the list component instead of the `<li>` tag.",
    "goodToHear": [
      "Keys give elements in a collection a stable identity and help React identify changes.",
      "You should avoid using indexes as keys if the order of items may change.",
      "You should lift the key up to the component, instead of the `<li>` element, if you extract list items as components."
    ],
    "links": [
      "[React docs on Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)"
    ],
    "tags": [
      "react",
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nconst todoItems = todos.map(todo => <li key={todo.id}>{todo.text}</li>)\n```"
    ]
  },
  {
    "name": "landmark-roles.md",
    "question": "What are landmark roles and how can they be useful?",
    "answer": "Landmark roles is a way to identify different sections of a page like the main content or a navigation region. The Landmarks helps assistive technology users to navigate a page, allowing them skip over areas of it.\n\nFor example,\n```html\n<div id=\"header\" role=\"banner\">Header of the Page</div>\n<div id=\"content\" role=\"main\">Main Content Goes Here</div>\n```",
    "goodToHear": [
      "Identify sections of a page",
      "Assist users in navigating a page"
    ],
    "links": [
      "[ARIA Landmark Roles](https://www.washington.edu/accessibility/web/landmarks/)",
      "[Using ARIA landmarks to identify regions of a page](https://www.w3.org/WAI/GL/wiki/Using_ARIA_landmarks_to_identify_regions_of_a_page)"
    ],
    "tags": [
      "accessibility"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```html\n<div id=\"header\" role=\"banner\">Header of the Page</div>\n<div id=\"content\" role=\"main\">Main Content Goes Here</div>\n```"
    ]
  },
  {
    "name": "lexical-vs-dynamic-scoping.md",
    "question": "What is the difference between lexical scoping and dynamic scoping?",
    "answer": "Lexical scoping refers to when the location of a function's definition determines which variables you have access to. On the other hand, dynamic scoping uses the location of the function's invocation to determine which variables are available.",
    "goodToHear": [
      "Lexical scoping is also known as static scoping.",
      "Lexical scoping in JavaScript allows for the concept of closures.",
      "Most languages use lexical scoping because it tends to promote source code that is more easily understood."
    ],
    "links": [
      "[Mozilla Docs Closures & Lexical Scoping](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "lifecycle-methods.md",
    "question": "What are the lifecycle methods in React?",
    "answer": "`getDerivedStateFromProps`: Executed before rendering on the initial mount and all component updates. Used to update the state based on changes in props over time. Has rare use cases, like tracking component animations during the lifecycle. There are only few cases where this makes sense to use over other lifecycle methods. It expects to return an object that will be the the new state, or null to update nothing. This method does not have access to the component instance either.\n\n`componentDidMount`: Executed after first rendering and here all AJAX requests, DOM or state updates, and set up eventListeners should occur.\n\n`shouldComponentUpdate`: Determines if the component will be updated or not. By default, it returns true. If you are sure that the component doesn't need to render after state or props are updated, you can return a false value. It is a great place to improve performance as it allows you to prevent a rerender if component receives new prop.\n\n`getSnapshotBeforeUpdate`: Invoked right after a component render happens because of an update, before `componentDidUpdate`. Any value returned from this method will be passed to `componentDidUpdate`.\n\n`componentDidUpdate`: Mostly it is used to update the DOM in response to prop or state changes.\n\n`componentWillUnmount`: It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.\n\n`componentDidCatch`: Used in error boundaries, which are components that implement this method. It allows the component to catch JavaScript errors anywhere in the _child_ component tree (below this component), log errors, and display a UI with error information.",
    "goodToHear": [],
    "links": [],
    "tags": [
      "react"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "lifecycle.md",
    "question": "What are the different phases of the component lifecycle in React?",
    "answer": "There are four different phases of component’s lifecycle:\n\n**Initialization**: In this phase, the component prepares setting up the initial state and default props.\n\n**Mounting**: The react component is ready to mount to the DOM. This phase covers the `getDerivedStateFromProps` and `componentDidMount` lifecycle methods.\n\n**Updating**: In this phase, the component gets updated in two ways, sending the new props and updating the state. This phase covers the `getDerivedStateFromProps`, `shouldComponentUpdate`, `getSnapshotBeforeUpdate` and `componentDidUpdate` lifecycle methods.\n\n**Unmounting**: In this last phase, the component is not needed and gets unmounted from the browser DOM. This phase includes the `componentWillUnmount` lifecycle method.\n\n**Error Handling**: In this phase, the component is called whenever there's an error during rendering, in a lifecycle method, or in the constructor for any child component. This phase includes the `componentDidCatch` lifecycle method.\n\n<img alt=\"lifecycle phases\" src=\"https://pbs.twimg.com/media/DZ-97vzW4AAbcZj.jpg:large\" style=\"width: 100%\"/>",
    "goodToHear": [],
    "links": [],
    "tags": [
      "react"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "lift-state.md",
    "question": "What does lifting state up in React mean?",
    "answer": "When several components need to share the same data, then it is recommended to lift the shared state up to their closest common ancestor. For example, if two child components share the same data, it is recommended to move the shared state to parent instead of maintaining the local state in both child components.",
    "goodToHear": [],
    "links": [],
    "tags": [
      "react"
    ],
    "expertise": 0,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "mask.md",
    "question": "Create a function that masks a string of characters with `#` except for the last four (4) characters.\n\n```js\nmask(\"123456789\") // \"#####6789\"\n```",
    "answer": "> There are many ways to solve this problem, this is just one one of them.\n\nUsing `String.prototype.slice()` we can grab the last 4 characters of the string by passing `-4` as an argument. Then, using `String.prototype.padStart()`, we can pad the string to the original length with the repeated mask character.\n\n```js\nconst mask = (str, maskChar = \"#\") =>\n  str.slice(-4).padStart(str.length, maskChar)\n```",
    "goodToHear": [
      "Short, one-line functional solutions to problems should be preferred provided they are efficient"
    ],
    "links": [],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [
      "```js\nmask(\"123456789\") // \"#####6789\"\n```"
    ],
    "answerCodeBlocks": [
      "```js\nconst mask = (str, maskChar = \"#\") =>\n  str.slice(-4).padStart(str.length, maskChar)\n```"
    ]
  },
  {
    "name": "media-properties.md",
    "question": "Can you name the four types of `@media` properties?",
    "answer": "* `all`, which applies to all media type devices\n* `print`, which only applies to printers\n* `screen`, which only applies to screens (desktops, tablets, mobile etc.)\n* `speech`, which only applies to screenreaders",
    "goodToHear": [],
    "links": [
      "[MDN docs for `@media` rule](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)",
      "[MDN docs for using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)"
    ],
    "tags": [
      "css"
    ],
    "expertise": 0,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "memoize.md",
    "question": "What is memoization?",
    "answer": "Memoization is the process of caching the output of function calls so that subsequent calls are faster. Calling the function again with the same input will return the cached output without needing to do the calculation again.\n\nA basic implementation in JavaScript looks like this:\n\n```js\nconst memoize = fn => {\n  const cache = new Map()\n  return value => {\n    const cachedResult = cache.get(value)\n    if (cachedResult !== undefined) return cachedResult\n    const result = fn(value)\n    cache.set(value, result)\n    return result\n  }\n}\n```",
    "goodToHear": [
      "The above technique returns a unary function even if the function can take multiple arguments.",
      "The first function call will be slower than usual because of the overhead created by checking if a cached result exists and setting a result before returning the value.",
      "Memoization increases performance on subsequent function calls but still needs to do work on the first call."
    ],
    "links": [
      "[Implementing memoization in JavaScript](https://www.sitepoint.com/implementing-memoization-in-javascript/)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nconst memoize = fn => {\n  const cache = new Map()\n  return value => {\n    const cachedResult = cache.get(value)\n    if (cachedResult !== undefined) return cachedResult\n    const result = fn(value)\n    cache.set(value, result)\n    return result\n  }\n}\n```"
    ]
  },
  {
    "name": "methods-context-react-classes.md",
    "question": "How do you ensure methods have the correct `this` context in React component classes?",
    "answer": "In JavaScript classes, the methods are not bound by default. This means that their `this` context can be changed (in the case of an event handler, to the element that is listening to the event) and will not refer to the component instance. To solve this, `Function.prototype.bind()` can be used to enforce the `this` context as the component instance.\n\n```js\nconstructor(props) {\n  super(props);\n  this.handleClick = this.handleClick.bind(this);\n}\n\nhandleClick() {\n  // Perform some logic\n}\n```\n\n* The `bind` approach can be verbose and requires defining a `constructor`, so the new public class fields syntax is generally preferred:\n\n```js\nhandleClick = () => {\n  console.log('this is:', this);\n}\n\nrender() {\n  return (\n    <button onClick={this.handleClick}>\n      Click me\n    </button>\n  );\n}\n```\n\n* You can also use an inline arrow function, because lexical `this` (referring to the component instance) is preserved:\n\n```js\n<button onClick={e => this.handleClick(e)}>Click me</button>\n```\n\nNote that extra re-rendering can occur using this technique because a new function reference is created on render, which gets passed down to child components and breaks `shouldComponentUpdate` / `PureComponent` shallow equality checks to prevent unnecessary re-renders. In cases where performance is important, it is preferred to go with `bind` in the constructor, or the public class fields syntax approach, because the function reference remains constant.",
    "goodToHear": [
      "You can either bind methods to the component instance context in the constructor, use public class fields syntax, or use inline arrow functions."
    ],
    "links": [
      "[React docs on Handling Events](https://reactjs.org/docs/handling-events.html)",
      "[React docs on Passing Functions to Components](https://reactjs.org/docs/faq-functions.html#how-do-i-bind-a-function-to-a-component-instance)"
    ],
    "tags": [
      "react",
      "javascript"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nconstructor(props) {\n  super(props);\n  this.handleClick = this.handleClick.bind(this);\n}\n\nhandleClick() {\n  // Perform some logic\n}\n```",
      "```js\nhandleClick = () => {\n  console.log('this is:', this);\n}\n\nrender() {\n  return (\n    <button onClick={this.handleClick}>\n      Click me\n    </button>\n  );\n}\n```",
      "```js\n<button onClick={e => this.handleClick(e)}>Click me</button>\n```"
    ]
  },
  {
    "name": "mime.md",
    "question": "What is a MIME type and what is it used for?",
    "answer": "`MIME` is an acronym for `Multi-purpose Internet Mail Extensions`. It is used as a standard way of classifying file types over the Internet.",
    "goodToHear": [
      "A `MIME type` actually has two parts: a type and a subtype that are separated by a slash (/). For example, the `MIME type` for Microsoft Word files is `application/msword` (i.e., type is application and the subtype is msword)."
    ],
    "links": [
      "[MIME Type MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "mutable-vs-immutable.md",
    "question": "Contrast mutable and immutable values, and mutating vs non-mutating methods.",
    "answer": "The two terms can be contrasted as:\n\n* Mutable: subject to change\n* Immutable: cannot change\n\nIn JavaScript, objects are mutable while primitive values are immutable. This means operations performed on objects can change the original reference in some way, while operations performed on a primitive value cannot change the original value.\n\nAll `String.prototype` methods do not have an effect on the original string and return a new string. On the other hand, while some methods of `Array.prototype` do not mutate the original array reference and produce a fresh array, some cause mutations.\n\n```js\nconst myString = \"hello!\"\nmyString.replace(\"!\", \"\") // returns a new string, cannot mutate the original value\n\nconst originalArray = [1, 2, 3]\noriginalArray.push(4) // mutates originalArray, now [1, 2, 3, 4]\noriginalArray.concat(4) // returns a new array, does not mutate the original\n```",
    "goodToHear": [
      "List of mutating and non-mutating array methods"
    ],
    "links": [
      "[Mutating vs non-mutating array methods](https://lorenstewart.me/2017/01/22/javascript-array-methods-mutating-vs-non-mutating/)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nconst myString = \"hello!\"\nmyString.replace(\"!\", \"\") // returns a new string, cannot mutate the original value\n\nconst originalArray = [1, 2, 3]\noriginalArray.push(4) // mutates originalArray, now [1, 2, 3, 4]\noriginalArray.concat(4) // returns a new array, does not mutate the original\n```"
    ]
  },
  {
    "name": "nan.md",
    "question": "What is the only value not equal to itself in JavaScript?",
    "answer": "`NaN` (Not-a-Number) is the only value not equal to itself when comparing with any of the comparison operators. `NaN` is often the result of meaningless math computations, so two `NaN` values make no sense to be considered equal.",
    "goodToHear": [
      "The difference between `isNaN()` and `Number.isNaN()`",
      "`const isNaN = x => x !== x`"
    ],
    "links": [
      "[MDN docs for `NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "node-error-first-callback.md",
    "question": "NodeJS often uses a callback pattern where if an error is encountered during execution, this error is passed as the first argument to the callback. What are the advantages of this pattern?\n\n```js\nfs.readFile(filePath, function(err, data) {\n  if (err) {\n    // handle the error, the return is important here\n    // so execution stops here\n    return console.log(err)\n  }\n  // use the data object\n  console.log(data)\n})\n```",
    "answer": "Advantages include:\n\n* Not needing to process data if there is no need to even reference it\n* Having a consistent API leads to more adoption\n* Ability to easily adapt a callback pattern that will lead to more maintainable code\n\nAs you can see from below example, the callback is called with null as its first argument if there is no error. However, if there is an error, you create an Error object, which then becomes the callback's only parameter. The callback function allows a user to easily know whether or not an error occurred.\n\nThis practice is also called the _Node.js error convention_, and this kind of callback implementations are called _error-first callbacks_.\n\n```js\nvar isTrue = function(value, callback) {\n  if (value === true) {\n    callback(null, \"Value was true.\")\n  } else {\n    callback(new Error(\"Value is not true!\"))\n  }\n}\n\nvar callback = function(error, retval) {\n  if (error) {\n    console.log(error)\n    return\n  }\n  console.log(retval)\n}\n\nisTrue(false, callback)\nisTrue(true, callback)\n\n/*\n  { stack: [Getter/Setter],\n    arguments: undefined,\n    type: undefined,\n    message: 'Value is not true!' }\n  Value was true.\n*/\n```",
    "goodToHear": [
      "This is just a convention. However, you should stick to it."
    ],
    "links": [
      "[The Node.js Way Understanding Error-First Callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)",
      "[What are the error conventions?](https://docs.nodejitsu.com/articles/errors/what-are-the-error-conventions)"
    ],
    "tags": [
      "node",
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [
      "```js\nfs.readFile(filePath, function(err, data) {\n  if (err) {\n    // handle the error, the return is important here\n    // so execution stops here\n    return console.log(err)\n  }\n  // use the data object\n  console.log(data)\n})\n```"
    ],
    "answerCodeBlocks": [
      "```js\nvar isTrue = function(value, callback) {\n  if (value === true) {\n    callback(null, \"Value was true.\")\n  } else {\n    callback(new Error(\"Value is not true!\"))\n  }\n}\n\nvar callback = function(error, retval) {\n  if (error) {\n    console.log(error)\n    return\n  }\n  console.log(retval)\n}\n\nisTrue(false, callback)\nisTrue(true, callback)\n\n/*\n  { stack: [Getter/Setter],\n    arguments: undefined,\n    type: undefined,\n    message: 'Value is not true!' }\n  Value was true.\n*/\n```"
    ]
  },
  {
    "name": "node-event-loop.md",
    "question": "What is the event loop in Node.js?",
    "answer": "The event loop handles all async callbacks. Callbacks are queued in a loop, while other code runs, and will run one by one when the response for each one has been received.",
    "goodToHear": [
      "The event loop allows Node.js to perform non-blocking I/O operations, despite the fact that JavaScript is single-threaded"
    ],
    "links": [
      "[Node.js docs on event loop, timers and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)"
    ],
    "tags": [
      "node",
      "javascript"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "null-vs-undefined.md",
    "question": "What is the difference between `null` and `undefined`?",
    "answer": "In JavaScript, two values discretely represent nothing - `undefined` and `null`. The concrete difference between them is that `null` is explicit, while `undefined` is implicit. When a property does not exist or a variable has not been given a value, the value is `undefined`. `null` is set as the value to explicitly indicate “no value”. In essence, `undefined` is used when the nothing is not known, and `null` is used when the nothing is known.",
    "goodToHear": [
      "`typeof undefined` evaluates to `\"undefined\"`.",
      "`typeof null` evaluates `\"object\"`. However, it is still a primitive value and this is considered an implementation bug in JavaScript.",
      "`undefined == null` evaluates to `true`."
    ],
    "links": [
      "[MDN docs for null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)",
      "[MDN docs for undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "object-creation.md",
    "question": "Describe the different ways to create an object. When should certain ways be preferred over others?",
    "answer": "##### Object literal\n\nOften used to store one occurrence of data.\n\n```js\nconst person = {\n  name: \"John\",\n  age: 50,\n  birthday() {\n    this.age++\n  }\n}\nperson.birthday() // person.age === 51\n```\n\n##### Constructor\n\nOften used when you need to create multiple instances of an object, each with their own data that other instances of the class cannot affect. The `new` operator must be used before invoking the constructor or the global object will be mutated.\n\n```js\nfunction Person(name, age) {\n  this.name = name\n  this.age = age\n}\nPerson.prototype.birthday = function() {\n  this.age++\n}\nconst person1 = new Person(\"John\", 50)\nconst person2 = new Person(\"Sally\", 20)\nperson1.birthday() // person1.age === 51\nperson2.birthday() // person2.age === 21\n```\n\n##### Factory function\n\nCreates a new object similar to a constructor, but can store private data using a closure. There is also no need to use `new` before invoking the function or the `this` keyword. Factory functions usually discard the idea of prototypes and keep all properties and methods as own properties of the object.\n\n```js\nconst createPerson = (name, age) => {\n  const birthday = () => person.age++\n  const person = { name, age, birthday }\n  return person\n}\nconst person = createPerson(\"John\", 50)\nperson.birthday() // person.age === 51\n```\n\n##### `Object.create()`\n\nSets the prototype of the newly created object.\n\n```js\nconst personProto = {\n  birthday() {\n    this.age++\n  }\n}\nconst person = Object.create(personProto)\nperson.age = 50\nperson.birthday() // person.age === 51\n```\n\nA second argument can also be supplied to `Object.create()` which acts as a descriptor for the new properties to be defined.\n\n```js\nObject.create(personProto, {\n  age: {\n    value: 50,\n    writable: true,\n    enumerable: true\n  }\n})\n```",
    "goodToHear": [
      "Prototypes are objects that other objects inherit properties and methods from.",
      "Factory functions offer private properties and methods through a closure but increase memory usage as a tradeoff, while classes do not have private properties or methods but reduce memory impact by reusing a single prototype object."
    ],
    "links": [],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nconst person = {\n  name: \"John\",\n  age: 50,\n  birthday() {\n    this.age++\n  }\n}\nperson.birthday() // person.age === 51\n```",
      "```js\nfunction Person(name, age) {\n  this.name = name\n  this.age = age\n}\nPerson.prototype.birthday = function() {\n  this.age++\n}\nconst person1 = new Person(\"John\", 50)\nconst person2 = new Person(\"Sally\", 20)\nperson1.birthday() // person1.age === 51\nperson2.birthday() // person2.age === 21\n```",
      "```js\nconst createPerson = (name, age) => {\n  const birthday = () => person.age++\n  const person = { name, age, birthday }\n  return person\n}\nconst person = createPerson(\"John\", 50)\nperson.birthday() // person.age === 51\n```",
      "```js\nconst personProto = {\n  birthday() {\n    this.age++\n  }\n}\nconst person = Object.create(personProto)\nperson.age = 50\nperson.birthday() // person.age === 51\n```",
      "```js\nObject.create(personProto, {\n  age: {\n    value: 50,\n    writable: true,\n    enumerable: true\n  }\n})\n```"
    ]
  },
  {
    "name": "parameter-vs-argument.md",
    "question": "What is the difference between a parameter and an argument?",
    "answer": "Parameters are the variable names of the function definition, while arguments are the values given to a function when it is invoked.\n\n```js\nfunction myFunction(parameter1, parameter2) {\n  console.log(arguments[0]) // \"argument1\"\n}\nmyFunction(\"argument1\", \"argument2\")\n```",
    "goodToHear": [
      "`arguments` is an array-like object containing information about the arguments supplied to an invoked function.",
      "`myFunction.length` describes the arity of a function (how many parameters it has, regardless of how many arguments it is supplied)."
    ],
    "links": [],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nfunction myFunction(parameter1, parameter2) {\n  console.log(arguments[0]) // \"argument1\"\n}\nmyFunction(\"argument1\", \"argument2\")\n```"
    ]
  },
  {
    "name": "pass-by-value-reference.md",
    "question": "Does JavaScript pass by value or by reference?",
    "answer": "JavaScript always passes by value. However, with objects, the value is a reference to the object.",
    "goodToHear": [
      "Difference between pass-by-value and pass-by-reference"
    ],
    "links": [
      "[JavaScript Value vs Reference](https://medium.com/dailyjs/back-to-roots-javascript-value-vs-reference-8fb69d587a18)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "passing-arguments-to-event-handlers.md",
    "question": "How do you pass an argument to an event handler or callback?",
    "answer": "You can use an arrow function to wrap around an event handler and pass arguments, which is equivalent to calling `bind`:\n\n```js\n<button onClick={() => this.handleClick(id)} />\n<button onClick={this.handleClick.bind(this, id)} />\n```",
    "goodToHear": [],
    "links": [
      "[React docs on Handling Events](https://reactjs.org/docs/handling-events.html)"
    ],
    "tags": [
      "react",
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\n<button onClick={() => this.handleClick(id)} />\n<button onClick={this.handleClick.bind(this, id)} />\n```"
    ]
  },
  {
    "name": "pipe.md",
    "question": "Create a function `pipe` that performs left-to-right function composition by returning a function that accepts one argument.\n\n```js\nconst square = v => v * v\nconst double = v => v * 2\nconst addOne = v => v + 1\nconst res = pipe(square, double, addOne)\nres(3) // 19; addOne(double(square(3)))\n```",
    "answer": "Gather all supplied arguments using the rest operator `...` and return a unary function that uses `Array.prototype.reduce()` to run the value through the series of functions before returning the final value.\n\n```js\nconst pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x)\n```",
    "goodToHear": [
      "Function composition is the process of combining two or more functions to produce a new function."
    ],
    "links": [
      "[What is function composition?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-function-composition-20dfb109a1a0)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 2,
    "questionCodeBlocks": [
      "```js\nconst square = v => v * v\nconst double = v => v * 2\nconst addOne = v => v + 1\nconst res = pipe(square, double, addOne)\nres(3) // 19; addOne(double(square(3)))\n```"
    ],
    "answerCodeBlocks": [
      "```js\nconst pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x)\n```"
    ]
  },
  {
    "name": "portals.md",
    "question": "What are portals in React?",
    "answer": "Portal are the recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.\n\n```js\nReactDOM.createPortal(child, container)\n```\n\nThe first argument (`child`) is any renderable React child, such as an element, string, or fragment. The second argument (`container`) is a DOM element.",
    "goodToHear": [],
    "links": [
      "[React docs on Portals](https://reactjs.org/docs/portals.html)"
    ],
    "tags": [
      "react",
      "javascript"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nReactDOM.createPortal(child, container)\n```"
    ]
  },
  {
    "name": "postfix-vs-prefix-increment.md",
    "question": "What is the difference between the postfix `i++` and prefix `++i` increment operators?",
    "answer": "Both increment the variable value by 1. The difference is what they evaluate to.\n\nThe postfix increment operator evaluates to the value _before_ it was incremented.\n\n```js\nlet i = 0\ni++ // 0\n// i === 1\n```\n\nThe prefix increment operator evaluates to the value _after_ it was incremented.\n\n```js\nlet i = 0\n++i // 1\n// i === 1\n```",
    "goodToHear": [],
    "links": [],
    "tags": [
      "javascript"
    ],
    "expertise": 0,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nlet i = 0\ni++ // 0\n// i === 1\n```",
      "```js\nlet i = 0\n++i // 1\n// i === 1\n```"
    ]
  },
  {
    "name": "promise-states.md",
    "question": "In which states can a Promise be?",
    "answer": "A `Promise` is in one of these states:\n\n* pending: initial state, neither fulfilled nor rejected.\n* fulfilled: meaning that the operation completed successfully.\n* rejected: meaning that the operation failed.\n\nA pending promise can either be fulfilled with a value, or rejected with a reason (error).\nWhen either of these options happens, the associated handlers queued up by a promise's then method are called.",
    "goodToHear": [],
    "links": [
      "[Official Web Docs Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 0,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "promises.md",
    "question": "What are Promises?",
    "answer": "The `Promise` object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.\nAn example can be the following snippet, which after 100ms prints out the result string to the standard output. Also, note the catch, which can be used for error handling. `Promise`s are chainable.\n\n```js\nnew Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve(\"result\")\n  }, 100)\n})\n  .then(console.log)\n  .catch(console.error)\n```",
    "goodToHear": [
      "Take a look into the other questions regarding `Promise`s!"
    ],
    "links": [
      "[Master the JavaScript Interview: What is a Promise?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e772618)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nnew Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve(\"result\")\n  }, 100)\n})\n  .then(console.log)\n  .catch(console.error)\n```"
    ]
  },
  {
    "name": "prop-validation.md",
    "question": "How to apply prop validation in React?",
    "answer": "When the application is running in development mode, React will automatically check for all props that we set on components to make sure they are the correct data type. For incorrect data types, it will generate warning messages in the console for development mode. They are stripped in production mode due to their performance impact. Required props are defined with `isRequired`.\n\nFor example, we define `propTypes` for component as below:\n\n```js\nimport PropTypes from \"prop-types\"\n\nclass User extends React.Component {\n  static propTypes = {\n    name: PropTypes.string.isRequired,\n    age: PropTypes.number.isRequired\n  }\n\n  render() {\n    return (\n      <h1>Welcome, {this.props.name}</h1>\n      <h2>Age, {this.props.age}\n    )\n  }\n}\n```",
    "goodToHear": [
      "We can define custom `propTypes`",
      "Using `propTypes` is not mandatory. However, it is a good practice and can reduce bugs."
    ],
    "links": [],
    "tags": [
      "react"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nimport PropTypes from \"prop-types\"\n\nclass User extends React.Component {\n  static propTypes = {\n    name: PropTypes.string.isRequired,\n    age: PropTypes.number.isRequired\n  }\n\n  render() {\n    return (\n      <h1>Welcome, {this.props.name}</h1>\n      <h2>Age, {this.props.age}\n    )\n  }\n}\n```"
    ]
  },
  {
    "name": "prototypal-inheritance.md",
    "question": "How does prototypal inheritance differ from classical inheritance?",
    "answer": "In the classical inheritance paradigm, object instances inherit their properties and functions from a class, which acts as a blueprint for the object. Object instances are typically created using a constructor and the `new` keyword.\n\nIn the prototypal inheritance paradigm, object instances inherit directly from other objects and are typically created using factory functions or `Object.create()`.",
    "goodToHear": [],
    "links": [
      "[MDN docs for inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "pure-functions.md",
    "question": "What is a pure function?",
    "answer": "A pure function is a function that satisfies these two conditions:\n\n* Given the same input, the function returns the same output.\n* The function doesn't cause side effects outside of the function's scope (i.e. mutate data outside the function or data supplied to the function).\n\nPure functions can mutate local data within the function as long as it satisfies the two conditions above.\n\n##### Pure\n\n```js\nconst a = (x, y) => x + y\nconst b = (arr, value) => arr.concat(value)\nconst c = arr => [...arr].sort((a, b) => a - b)\n```\n\n##### Impure\n\n```js\nconst a = (x, y) => x + y + Math.random()\nconst b = (arr, value) => (arr.push(value), arr)\nconst c = arr => arr.sort((a, b) => a - b)\n```",
    "goodToHear": [
      "Pure functions are easier to reason about due to their reliability.",
      "All functions should be pure unless explicitly causing a side effect (i.e. `setInnerHTML`).",
      "If a function does not return a value, it is an indication that it is causing side effects."
    ],
    "links": [
      "[Pure functions in JavaScript](http://www.nicoespeon.com/en/2015/01/pure-functions-javascript/)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nconst a = (x, y) => x + y\nconst b = (arr, value) => arr.concat(value)\nconst c = arr => [...arr].sort((a, b) => a - b)\n```",
      "```js\nconst a = (x, y) => x + y + Math.random()\nconst b = (arr, value) => (arr.push(value), arr)\nconst c = arr => arr.sort((a, b) => a - b)\n```"
    ]
  },
  {
    "name": "react-comments.md",
    "question": "How do you write comments inside a JSX tree in React?",
    "answer": "Comments must be wrapped inside curly braces `{}` and use the `/* */` syntax.\n\n```jsx\nconst tree = (\n  <div>\n    {/* Comment */}\n    <p>Text</p>\n  </div>\n)\n```\n\n<!-- tags: (react) -->\n\n<!-- expertise: (0) -->",
    "goodToHear": [],
    "links": [],
    "tags": [
      "react"
    ],
    "expertise": 0,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```jsx\nconst tree = (\n  <div>\n    {/* Comment */}\n    <p>Text</p>\n  </div>\n)\n```"
    ]
  },
  {
    "name": "recursion.md",
    "question": "What is recursion and when is it useful?",
    "answer": "Recursion is the repeated application of a process. In JavaScript, recursion involves functions that call themselves repeatedly until they reach a base condition. The base condition breaks out of the recursion loop because otherwise the function would call itself indefinitely. Recursion is very useful when working with data structures that contain nesting where the number of levels deep is unknown.\n\nFor example, you may have a thread of comments returned from a database that exist in a flat array but need to be nested for display in the UI. Each comment is either a top-level comment (no parent) or is a reply to a parent comment. Comments can be a reply of a reply of a reply... we have no knowledge beforehand the number of levels deep a comment may be. This is where recursion can help.\n\n```js\nconst nest = (items, id = null, link = \"parent_id\") =>\n  items\n    .filter(item => item[link] === id)\n    .map(item => ({ ...item, children: nest(items, item.id) }))\n\nconst comments = [\n  { id: 1, parent_id: null, text: \"First reply to post.\" },\n  { id: 2, parent_id: 1, text: \"First reply to comment #1.\" },\n  { id: 3, parent_id: 1, text: \"Second reply to comment #1.\" },\n  { id: 4, parent_id: 3, text: \"First reply to comment #3.\" },\n  { id: 5, parent_id: 4, text: \"First reply to comment #4.\" },\n  { id: 6, parent_id: null, text: \"Second reply to post.\" }\n]\n\nnest(comments)\n/*\n[\n  { id: 1, parent_id: null, text: \"First reply to post.\", children: [...] },\n  { id: 6, parent_id: null, text: \"Second reply to post.\", children: [] }\n]\n*/\n```\n\nIn the above example, the base condition is met if `filter()` returns an empty array. The chained `map()` won't invoke the callback function which contains the recursive call, thereby breaking the loop.",
    "goodToHear": [
      "Recursion is useful when working with data structures containing an unknown number of nested structures.",
      "Recursion must have a base condition to be met that breaks out of the loop or it will call itself indefinitely."
    ],
    "links": [
      "[In plain English, what is recursion?](https://softwareengineering.stackexchange.com/questions/25052/in-plain-english-what-is-recursion)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nconst nest = (items, id = null, link = \"parent_id\") =>\n  items\n    .filter(item => item[link] === id)\n    .map(item => ({ ...item, children: nest(items, item.id) }))\n\nconst comments = [\n  { id: 1, parent_id: null, text: \"First reply to post.\" },\n  { id: 2, parent_id: 1, text: \"First reply to comment #1.\" },\n  { id: 3, parent_id: 1, text: \"Second reply to comment #1.\" },\n  { id: 4, parent_id: 3, text: \"First reply to comment #3.\" },\n  { id: 5, parent_id: 4, text: \"First reply to comment #4.\" },\n  { id: 6, parent_id: null, text: \"Second reply to post.\" }\n]\n\nnest(comments)\n/*\n[\n  { id: 1, parent_id: null, text: \"First reply to post.\", children: [...] },\n  { id: 6, parent_id: null, text: \"Second reply to post.\", children: [] }\n]\n*/\n```"
    ]
  },
  {
    "name": "reference-example.md",
    "question": "What is the output of the following code?\n\n```js\nconst a = [1, 2, 3]\nconst b = [1, 2, 3]\nconst c = \"1,2,3\"\n\nconsole.log(a == c)\nconsole.log(a == b)\n```",
    "answer": "The first `console.log` outputs `true` because JavaScript's compiler performs type conversion and therefore it compares to strings by their value. On the other hand, the second `console.log` outputs `false` because Arrays are Objects and Objects are compared by reference.",
    "goodToHear": [
      "JavaScript performs automatic type conversion",
      "Objects are compared by reference",
      "Primitives are compared by value"
    ],
    "links": [
      "[JavaScript Value vs Reference](https://medium.com/dailyjs/back-to-roots-javascript-value-vs-reference-8fb69d587a18)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [
      "```js\nconst a = [1, 2, 3]\nconst b = [1, 2, 3]\nconst c = \"1,2,3\"\n\nconsole.log(a == c)\nconsole.log(a == b)\n```"
    ],
    "answerCodeBlocks": []
  },
  {
    "name": "refs.md",
    "question": "What are refs in React? When should they be used?",
    "answer": "Refs provide a way to access DOM nodes or React elements created in the render method. Refs should be used sparringly, but there are some good use cases for refs, such as:\n\n* Managing focus, text selection, or media playback.\n* Triggering imperative animations.\n* Integrating with third-party DOM libraries.\n\nRefs are created using `React.createRef()` method and attached to React elements via the `ref` attribute. In order to use refs throughout the component, assign the `ref` to the instance property within the constructor:\n\n```js\nclass MyComponent extends React.Component {\n  constructor(props) {\n    super(props)\n    this.myRef = React.createRef()\n  }\n\n  render() {\n    return <div ref={this.myRef} />\n  }\n}\n```\n\nRefs can also be used in functional components with the help of closures.",
    "goodToHear": [
      "Refs are used to return a reference to an element.",
      "Refs shouldn't be overused.",
      "You can create a ref using `React.createRef()` and attach to elements via the `ref` attribute."
    ],
    "links": [
      "[React docs on Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)"
    ],
    "tags": [
      "react",
      "javascript"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nclass MyComponent extends React.Component {\n  constructor(props) {\n    super(props)\n    this.myRef = React.createRef()\n  }\n\n  render() {\n    return <div ref={this.myRef} />\n  }\n}\n```"
    ]
  },
  {
    "name": "rel-noopener.md",
    "question": "Where and why is the `rel=\"noopener\"` attribute used?",
    "answer": "The `rel=\"noopener\"` is an attribute used in `<a>` elements (hyperlinks). It prevents pages from having a `window.opener` property, which would otherwise point to the page from where the link was opened and would allow the page opened from the hyperlink to manipulate the page where the hyperlink is.",
    "goodToHear": [
      "`rel=\"noopener\"` is applied to hyperlinks.",
      "`rel=\"noopener\"` prevents opened links from manipulating the source page."
    ],
    "links": [
      "[Open external anchors using rel=\"noopener\"](https://developers.google.com/web/tools/lighthouse/audits/noopener)",
      "[About rel=\"noopener\"](https://mathiasbynens.github.io/rel-noopener/)"
    ],
    "tags": [
      "html"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "rest.md",
    "question": "What is REST?",
    "answer": "REST (REpresentational State Transfer) is a software design pattern for network architecture. A RESTful web application exposes data in the form of information about its resources.\n\nGenerally, this concept is used in web applications to manage state. With most applications, there is a common theme of reading, creating, updating, and destroying data. Data is modularized into separate tables like `posts`, `users`, `comments`, and a RESTful API exposes access to this data with:\n\n* An identifier for the resource. This is known as the endpoint or URL for the resource.\n* The operation the server should perform on that resource in the form of an HTTP method or verb. The common HTTP methods are GET, POST, PUT, and DELETE.\n\nHere is an example of the URL and HTTP method with a `posts` resource:\n\n* Reading: `/posts/` => GET\n* Creating: `/posts/new` => POST\n* Updating: `/posts/:id` => PUT\n* Destroying: `/posts/:id` => DELETE",
    "goodToHear": [
      "Alternatives to this pattern like GraphQL"
    ],
    "links": [
      "  ](https://medium.com/extend/what-is-rest-a-simple-explanation-for-beginners-part-1-introduction-b4a072f8740f)"
    ],
    "tags": [
      "node"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "return-semicolon.md",
    "question": "What does the following function return?\n\n```js\nfunction greet() {\n  return\n  {\n    message: \"hello\"\n  }\n}\n```",
    "answer": "Because of JavaScript's automatic semicolon insertion (ASI), the compiler places a semicolon after `return` keyword and therefore it returns `undefined` without an error being thrown.",
    "goodToHear": [
      "Automatic semicolon placement can lead to time-consuming bugs"
    ],
    "links": [
      "[Automatic semicolon insertion in JavaScript](http://2ality.com/2011/05/semicolon-insertion.html)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [
      "```js\nfunction greet() {\n  return\n  {\n    message: \"hello\"\n  }\n}\n```"
    ],
    "answerCodeBlocks": []
  },
  {
    "name": "semicolons.md",
    "question": "Are semicolons required in JavaScript?",
    "answer": "Sometimes. Due to JavaScript's automatic semicolon insertion, the interpreter places semicolons after most statements. This means semicolons can be omitted in most cases.\n\nHowever, there are some cases where they are required. They are not required at the beginning of a block, but are if they follow a line and:\n\n1.  The line starts with `[`\n\n```js\nconst previousLine = 3\n;[1, 2, previousLine].map(n => n * 2)\n```\n\n2.  The line starts with `(`\n\n```js\nconst previousLine = 3\n;(function() {\n  // ...\n})()\n```\n\nIn the above cases, the interpreter does not insert a semicolon after `3`, and therefore it will see the `3` as attempting object property access or being invoked as a function, which will throw errors.",
    "goodToHear": [
      "Semicolons are usually optional in JavaScript but have edge cases where they are required.",
      "If you don't use semicolons, tools like Prettier will insert semicolons for you in the places where they are required on save in a text editor to prevent errors."
    ],
    "links": [],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nconst previousLine = 3\n;[1, 2, previousLine].map(n => n * 2)\n```",
      "```js\nconst previousLine = 3\n;(function() {\n  // ...\n})()\n```"
    ]
  },
  {
    "name": "short-circuit-evaluation.md",
    "question": "What is short-circuit evaluation in JavaScript?",
    "answer": "Short-circuit evaluation involves logical operations evaluating from left-to-right and stopping early.\n\n```js\ntrue || false\n```\n\nIn the above sample using logical OR, JavaScript won't look at the second operand `false`, because the expression evaluates to `true` regardless. This is known as short-circuit evaluation.\n\nThis also works for logical AND.\n\n```js\nfalse && true\n```\n\nThis means you can have an expression that throws an error if evaluated, and it won't cause issues.\n\n```js\ntrue || nonexistentFunction()\nfalse && nonexistentFunction()\n```\n\nThis remains true for multiple operations because of left-to-right evaluation.\n\n```js\ntrue || nonexistentFunction() || window.nothing.wouldThrowError\ntrue || window.nothing.wouldThrowError\ntrue\n```\n\nA common use case for this behavior is setting default values. If the first operand is falsy the second operand will be evaluated.\n\n```js\nconst options = {}\nconst setting = options.setting || \"default\"\nsetting // \"default\"\n```\n\nAnother common use case is only evaluating an expression if the first operand is truthy.\n\n```js\n// Instead of:\naddEventListener(\"click\", e => {\n  if (e.target.closest(\"button\")) {\n    handleButtonClick(e)\n  }\n})\n\n// You can take advantage of short-circuit evaluation:\naddEventListener(\n  \"click\",\n  e => e.target.closest(\"button\") && handleButtonClick(e)\n)\n```\n\nIn the above case, if `e.target` is not or does not contain an element matching the `\"button\"` selector, the function will not be called. This is because the first operand will be falsy, causing the second operand to not be evaluated.",
    "goodToHear": [
      "Logical operations do not produce a boolean unless the operand(s) evaluate to a boolean."
    ],
    "links": [
      "[JavaScript: What is short-circuit evaluation?](https://codeburst.io/javascript-what-is-short-circuit-evaluation-ff22b2f5608c)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\ntrue || false\n```",
      "```js\nfalse && true\n```",
      "```js\ntrue || nonexistentFunction()\nfalse && nonexistentFunction()\n```",
      "```js\ntrue || nonexistentFunction() || window.nothing.wouldThrowError\ntrue || window.nothing.wouldThrowError\ntrue\n```",
      "```js\nconst options = {}\nconst setting = options.setting || \"default\"\nsetting // \"default\"\n```",
      "```js\n// Instead of:\naddEventListener(\"click\", e => {\n  if (e.target.closest(\"button\")) {\n    handleButtonClick(e)\n  }\n})\n\n// You can take advantage of short-circuit evaluation:\naddEventListener(\n  \"click\",\n  e => e.target.closest(\"button\") && handleButtonClick(e)\n)\n```"
    ]
  },
  {
    "name": "sprites.md",
    "question": "What are the advantages of using CSS sprites and how are they utilized?",
    "answer": "CSS sprites combine multiple images into one image, limiting the number of HTTP requests a browser has to make, thus improving load times. Even under the new HTTP/2 protocol, this remains true.\n\nUnder HTTP/1.1, at most one request is allowed per TCP connection. With HTTP/1.1, modern browsers open multiple parallel connections (between 2 to 8) but it is limited. With HTTP/2, all requests between the browser and the server are multiplexed on a single TCP connection. This means the cost of opening and closing multiple connections is mitigated, resulting in a better usage of the TCP connection and limits the impact of latency between the client and server. It could then become possible to load tens of images in parallel on the same TCP connection.\n\nHowever, according to [benchmark results](https://blog.octo.com/en/http2-arrives-but-sprite-sets-aint-no-dead/), although HTTP/2 offers 50% improvement over HTTP/1.1, in most cases the sprite set is still faster to load than individual images.\n\nTo utilize a spritesheet in CSS, one would use certain properties, such as `background-image`, `background-position` and `background-size` to ultimately alter the `background` of an element.",
    "goodToHear": [
      "`background-image`, `background-position` and `background-size` can be used to utilize a spritesheet."
    ],
    "links": [
      "[CSS Sprites explained by CSS Tricks](https://css-tricks.com/css-sprites/)"
    ],
    "tags": [
      "css"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "stateful-components.md",
    "question": "What is a stateful component in React?",
    "answer": "A stateful component is a component whose behavior depends on its state. This means that two separate instances of the component if given the same props will not necessarily render the same output, unlike pure function components.\n\n```js\n// Stateful class component\nclass App extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { count: 0 }\n  }\n  render() {\n    // ...\n  }\n}\n\n// Stateful function component\nfunction App() {\n  const [count, setCount] = useState(0)\n  return // ...\n}\n```",
    "goodToHear": [
      "Stateful components have internal state that they depend on.",
      "Stateful components are class components or function components that use stateful Hooks.",
      "Stateful components have their state initialized in the constructor or with `useState()`."
    ],
    "links": [
      "[React docs on State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)"
    ],
    "tags": [
      "react",
      "javascript"
    ],
    "expertise": 0,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\n// Stateful class component\nclass App extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { count: 0 }\n  }\n  render() {\n    // ...\n  }\n}\n\n// Stateful function component\nfunction App() {\n  const [count, setCount] = useState(0)\n  return // ...\n}\n```"
    ]
  },
  {
    "name": "stateless-components.md",
    "question": "What is a stateless component?",
    "answer": "A stateless component is a component whose behavior does not depend on its state. Stateless components can be either functional or class components. Stateless functional components are easier to maintain and test since they are guaranteed to produce the same output given the same props. Stateless functional components should be preferred when lifecycle hooks don't need to be used.",
    "goodToHear": [
      "Stateless components are independent of their state.",
      "Stateless components can be either class or functional components.",
      "Stateless functional components avoid the `this` keyword altogether."
    ],
    "links": [
      "[React docs on State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)"
    ],
    "tags": [
      "react",
      "javascript"
    ],
    "expertise": 0,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "static-vs-instance-method.md",
    "question": "Explain the difference between a static method and an instance method.",
    "answer": "Static methods belong to a class and don't act on instances, while instance methods belong to the class prototype which is inherited by all instances of the class and acts on them.\n\n```js\nArray.isArray // static method of Array\nArray.prototype.push // instance method of Array\n```\n\nIn this case, the `Array.isArray` method does not make sense as an instance method of arrays because we already know the value is an array when working with it.\n\nInstance methods could technically work as static methods, but provide terser syntax:\n\n```js\nconst arr = [1, 2, 3]\narr.push(4)\nArray.push(arr, 4)\n```",
    "goodToHear": [
      "How to create static and instance methods with ES2015 class syntax"
    ],
    "links": [
      "[Classes on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nArray.isArray // static method of Array\nArray.prototype.push // instance method of Array\n```",
      "```js\nconst arr = [1, 2, 3]\narr.push(4)\nArray.push(arr, 4)\n```"
    ]
  },
  {
    "name": "sync-vs-async.md",
    "question": "What is the difference between synchronous and asynchronous code in JavaScript?",
    "answer": "Synchronous means each operation must wait for the previous one to complete.\n\nAsynchronous means an operation can occur while another operation is still being processed.\n\nIn JavaScript, all code is synchronous due to the single-threaded nature of it. However, asynchronous operations not part of the program (such as `XMLHttpRequest` or `setTimeout`) are processed outside of the main thread because they are controlled by native code (browser APIs), but callbacks part of the program will still be executed synchronously.",
    "goodToHear": [
      "JavaScript has a concurrency model based on an \"event loop\".",
      "Functions like `alert` block the main thread so that no user input is registered until the user closes it."
    ],
    "links": [],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "this.md",
    "question": "What is the `this` keyword and how does it work?",
    "answer": "The `this` keyword is an object that represents the context of an executing function. Regular functions can have their `this` value changed with the methods `call()`, `apply()` and `bind()`. Arrow functions implicitly bind `this` so that it refers to the context of its lexical environment, regardless of whether or not its context is set explicitly with `call()`.\n\nHere are some common examples of how `this` works:\n\n##### Object literals\n\n`this` refers to the object itself inside regular functions if the object precedes the invocation of the function.\n\nProperties set as `this` do not refer to the object.\n\n```js\nvar myObject = {\n  property: this,\n  regularFunction: function() {\n    return this\n  },\n  arrowFunction: () => {\n    return this\n  },\n  iife: (function() {\n    return this\n  })()\n}\nmyObject.regularFunction() // myObject\nmyObject[\"regularFunction\"]() // my Object\n\nmyObject.property // NOT myObject; lexical `this`\nmyObject.arrowFunction() // NOT myObject; lexical `this`\nmyObject.iife // NOT myObject; lexical `this`\nconst regularFunction = myObject.regularFunction\nregularFunction() // NOT myObject; lexical `this`\n```\n\n##### Event listeners\n\n`this` refers to the element listening to the event.\n\n```js\ndocument.body.addEventListener(\"click\", function() {\n  console.log(this) // document.body\n})\n```\n\n##### Constructors\n\n`this` refers to the newly created object.\n\n```js\nclass Example {\n  constructor() {\n    console.log(this) // myExample\n  }\n}\nconst myExample = new Example()\n```\n\n##### Manual\n\nWith `call()` and `apply()`, `this` refers to the object passed as the first argument.\n\n```js\nvar myFunction = function() {\n  return this\n}\nmyFunction.call({ customThis: true }) // { customThis: true }\n```\n\n##### Unwanted `this`\n\nBecause `this` can change depending on the scope, it can have unexpected values when using regular functions.\n\n```js\nvar obj = {\n  arr: [1, 2, 3],\n  doubleArr() {\n    return this.arr.map(function(value) {\n      // this is now this.arr\n      return this.double(value)\n    })\n  },\n  double() {\n    return value * 2\n  }\n}\nobj.doubleArr() // Uncaught TypeError: this.double is not a function\n```",
    "goodToHear": [
      "In non-strict mode, global `this` is the global object (`window` in browsers), while in strict mode global `this` is `undefined`.",
      "`Function.prototype.call` and `Function.prototype.apply` set the `this` context of an executing function as the first argument, with `call` accepting a variadic number of arguments thereafter, and `apply` accepting an array as the second argument which are fed to the function in a variadic manner.",
      "`Function.prototype.bind` returns a new function that enforces the `this` context as the first argument which cannot be changed by other functions.",
      "If a function requires its `this` context to be changed based on how it is called, you must use the `function` keyword. Use arrow functions when you want `this` to be the surrounding (lexical) context."
    ],
    "links": [
      "[`this` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nvar myObject = {\n  property: this,\n  regularFunction: function() {\n    return this\n  },\n  arrowFunction: () => {\n    return this\n  },\n  iife: (function() {\n    return this\n  })()\n}\nmyObject.regularFunction() // myObject\nmyObject[\"regularFunction\"]() // my Object\n\nmyObject.property // NOT myObject; lexical `this`\nmyObject.arrowFunction() // NOT myObject; lexical `this`\nmyObject.iife // NOT myObject; lexical `this`\nconst regularFunction = myObject.regularFunction\nregularFunction() // NOT myObject; lexical `this`\n```",
      "```js\ndocument.body.addEventListener(\"click\", function() {\n  console.log(this) // document.body\n})\n```",
      "```js\nclass Example {\n  constructor() {\n    console.log(this) // myExample\n  }\n}\nconst myExample = new Example()\n```",
      "```js\nvar myFunction = function() {\n  return this\n}\nmyFunction.call({ customThis: true }) // { customThis: true }\n```",
      "```js\nvar obj = {\n  arr: [1, 2, 3],\n  doubleArr() {\n    return this.arr.map(function(value) {\n      // this is now this.arr\n      return this.double(value)\n    })\n  },\n  double() {\n    return value * 2\n  }\n}\nobj.doubleArr() // Uncaught TypeError: this.double is not a function\n```"
    ]
  },
  {
    "name": "typeof-typeof.md",
    "question": "What does the following code evaluate to?\n\n```js\ntypeof typeof 0\n```",
    "answer": "It evaluates to `\"string\"`.\n\n`typeof 0` evaluates to the string `\"number\"` and therefore `typeof \"number\"` evaluates to `\"string\"`.",
    "goodToHear": [],
    "links": [
      "[MDN docs for typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [
      "```js\ntypeof typeof 0\n```"
    ],
    "answerCodeBlocks": []
  },
  {
    "name": "types.md",
    "question": "What are JavaScript data types?",
    "answer": "The latest ECMAScript standard defines seven data types, six of them being primitive: `Boolean`, `Null`, `Undefined`, `Number`, `String`, `Symbol` and one non-primitive data type: `Object`.",
    "goodToHear": [
      "Mention of newly added `Symbol` data type",
      "`Array`, `Date` and `function` are all of type `object`",
      "Functions in JavaScript are objects with the capability of being callable"
    ],
    "links": [
      "[MDN docs for data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)",
      "[Understanding Data Types in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-data-types-in-javascript)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "ui-library-framework-purpose.md",
    "question": "What is the purpose of JavaScript UI libraries/frameworks like React, Vue, Angular, Hyperapp, etc?",
    "answer": "The main purpose is to avoid manipulating the DOM directly and keep the state of an application\nin sync with the UI easily. Additionally, they provide the ability to create components that can be reused when they have similar functionality with minor differences, avoiding duplication which would require multiple changes whenever the structure of a component which is reused in multiple places needs to be updated.\n\nWhen working with DOM manipulation libraries like jQuery, the data of an application is generally kept in the DOM itself, often as class names or `data` attributes. Manipulating the DOM to update the UI involves many extra steps and can introduce subtle bugs over time. Keeping the state separate and letting a framework handle the UI updates when the state changes reduces cognitive load. Saying you want the UI to look a certain way when the state is a certain value is the declarative way of creating an application, instead of the imperative way of manually updating the UI to reflect the new state.",
    "goodToHear": [
      "The virtual DOM is a representation of the real DOM tree in the form of plain objects, which allows a library to write code as if the entire document is thrown away and rebuilt on each change, while the real DOM only updates what needs to be changed. Comparing the new virtual DOM against the previous one leads to high efficiency as changing real DOM nodes is costly compared to recalculating the virtual DOM.",
      "JSX is an extension to JavaScript that provides XML-like syntax to create virtual DOM objects which is transformed to function calls by a transpiler. It simplifies control flow (if statements/ternary expressions) compared to tagged template literals."
    ],
    "links": [
      "[Virtual DOM in Hyperapp](https://github.com/hyperapp/hyperapp#view)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "use-strict.md",
    "question": "What does `'use strict'` do and what are some of the key benefits to using it?",
    "answer": "Including `'use strict'` at the beginning of your JavaScript source file enables strict mode, which enforces more strict parsing and error handling of JavaScript code. It is considered a good practice and offers a lot of benefits, such as:\n\n* Easier debugging due to eliminating silent errors.\n* Disallows variable redefinition.\n* Prevents accidental global variables.\n* Oftentimes provides increased performance over identical code that is not running in strict mode.\n* Simplifies `eval()` and `arguments`.\n* Helps make JavaScript more secure.",
    "goodToHear": [
      "Eliminates `this` coercion, throwing an error when `this` references a value of `null` or `undefined`.",
      "Throws an error on invalid usage of `delete`.",
      "Prohibits some syntax likely to be defined in future versions of ECMAScript"
    ],
    "links": [
      "[MDN docs for strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "var-let-const.md",
    "question": "What are the differences between `var`, `let`, `const` and no keyword statements?",
    "answer": "##### No keyword\n\nWhen no keyword exists before a variable assignment, it is either assigning a global variable if one does not exist, or reassigns an already declared variable. In non-strict mode, if the variable has not yet been declared, it will assign the variable as a property of the global object (`window` in browsers). In strict mode, it will throw an error to prevent unwanted global variables from being created.\n\n##### var\n\n`var` was the default statement to declare a variable until ES2015. It creates a function-scoped variable that can be reassigned and redeclared. However, due to its lack of block scoping, it can cause issues if the variable is being reused in a loop that contains an asynchronous callback because the variable will continue to exist outside of the block scope.\n\nBelow, by the time the the `setTimeout` callback executes, the loop has already finished and the `i` variable is `10`, so all ten callbacks reference the same variable available in the function scope.\n\n```js\nfor (var i = 0; i < 10; i++) {\n  setTimeout(() => {\n    // logs `10` ten times\n    console.log(i)\n  })\n}\n\n/* Solutions with `var` */\nfor (var i = 0; i < 10; i++) {\n  // Passed as an argument will use the value as-is in\n  // that point in time\n  setTimeout(console.log, 0, i)\n}\n\nfor (var i = 0; i < 10; i++) {\n  // Create a new function scope that will use the value\n  // as-is in that point in time\n  ;(i => {\n    setTimeout(() => {\n      console.log(i)\n    })\n  })(i)\n}\n```\n\n##### let\n\n`let` was introduced in ES2015 and is the new preferred way to declare variables that will be reassigned later. Trying to redeclare a variable again will throw an error. It is block-scoped so that using it in a loop will keep it scoped to the iteration.\n\n```js\nfor (let i = 0; i < 10; i++) {\n  setTimeout(() => {\n    // logs 0, 1, 2, 3, ...\n    console.log(i)\n  })\n}\n```\n\n##### const\n\n`const` was introduced in ES2015 and is the new preferred default way to declare all variables if they won't be reassigned later, even for objects that will be mutated (as long as the reference to the object does not change). It is block-scoped and cannot be reassigned.\n\n```js\nconst myObject = {}\nmyObject.prop = \"hello!\" // No error\nmyObject = \"hello\" // Error\n```",
    "goodToHear": [
      "All declarations are hoisted to the top of their scope.",
      "However, with `let` and `const` there is a concept called the temporal dead zone (TDZ). While the declarations are still hoisted, there is a period between entering scope and being declared where they cannot be accessed.",
      "Show a common issue with using `var` and how `let` can solve it, as well as a solution that keeps `var`.",
      "`var` should be avoided whenever possible and prefer `const` as the default declaration statement for all variables unless they will be reassigned later, then use `let` if so."
    ],
    "links": [
      "[`let` vs `const`](https://wesbos.com/let-vs-const/)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```js\nfor (var i = 0; i < 10; i++) {\n  setTimeout(() => {\n    // logs `10` ten times\n    console.log(i)\n  })\n}\n\n/* Solutions with `var` */\nfor (var i = 0; i < 10; i++) {\n  // Passed as an argument will use the value as-is in\n  // that point in time\n  setTimeout(console.log, 0, i)\n}\n\nfor (var i = 0; i < 10; i++) {\n  // Create a new function scope that will use the value\n  // as-is in that point in time\n  ;(i => {\n    setTimeout(() => {\n      console.log(i)\n    })\n  })(i)\n}\n```",
      "```js\nfor (let i = 0; i < 10; i++) {\n  setTimeout(() => {\n    // logs 0, 1, 2, 3, ...\n    console.log(i)\n  })\n}\n```",
      "```js\nconst myObject = {}\nmyObject.prop = \"hello!\" // No error\nmyObject = \"hello\" // Error\n```"
    ]
  },
  {
    "name": "virtual-dom.md",
    "question": "What is a virtual DOM and why is it used in libraries/frameworks?",
    "answer": "The virtual DOM (VDOM) is a representation of the real DOM in the form of plain JavaScript objects. These objects have properties to describe the real DOM nodes they represent: the node name, its attributes, and child nodes.\n\n```html\n<div class=\"counter\">\n  <h1>0</h1>\n  <button>-</button>\n  <button>+</button>\n</div>\n```\n\nThe above markup's virtual DOM representation might look like this:\n\n```js\n{\n  nodeName: \"div\",\n  attributes: { class: \"counter\" },\n  children: [\n    {\n      nodeName: \"h1\",\n      attributes: {},\n      children: [0]\n    },\n    {\n      nodeName: \"button\",\n      attributes: {},\n      children: [\"-\"]\n    },\n    {\n      nodeName: \"button\",\n      attributes: {},\n      children: [\"+\"]\n    }\n  ]\n}\n```\n\nThe library/framework uses the virtual DOM as a means to improve performance. When the state of an application changes, the real DOM needs to be updated to reflect it. However, changing real DOM nodes is costly compared to recalculating the virtual DOM. The previous virtual DOM can be compared to the new virtual DOM very quickly in comparison.\n\nOnce the changes between the old VDOM and new VDOM have been calculated by the diffing engine of the framework, the real DOM can be patched efficiently in the least time possible to match the new state of the application.",
    "goodToHear": [
      "Why accessing the DOM can be so costly."
    ],
    "links": [
      "[The difference between Virtual DOM and DOM](http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/)"
    ],
    "tags": [
      "javascript"
    ],
    "expertise": 2,
    "questionCodeBlocks": [],
    "answerCodeBlocks": [
      "```html\n<div class=\"counter\">\n  <h1>0</h1>\n  <button>-</button>\n  <button>+</button>\n</div>\n```",
      "```js\n{\n  nodeName: \"div\",\n  attributes: { class: \"counter\" },\n  children: [\n    {\n      nodeName: \"h1\",\n      attributes: {},\n      children: [0]\n    },\n    {\n      nodeName: \"button\",\n      attributes: {},\n      children: [\"-\"]\n    },\n    {\n      nodeName: \"button\",\n      attributes: {},\n      children: [\"+\"]\n    }\n  ]\n}\n```"
    ]
  },
  {
    "name": "wcag.md",
    "question": "What is WCAG? What are the differences between A, AA, and AAA compliance?",
    "answer": "WCAG stands for \"Web Content Accessibility Guidelines\". It is a standard describing how to make web content more accessible to people with disabilities\nThey have 12-13 guidelines and for each one, there are testable success criteria, which are at three levels: A, AA, and AAA. The higher the level, the higher the impact on the design of the web content. The higher the level, the web content is essentially more accessible by more users.\nDepending on where you live/work, there may be regulations requiring websites to meet certain levels of compliance. For instance, in Ontario, Canada, beginning January 1, 2021 all public websites and web content posted after January 1, 2012 must meet AA compliance.",
    "goodToHear": [
      "A guideline for making web content more accessible",
      "3 different levels (A, AA, and AAA) of compliance for each guideline",
      "Governments are starting to require web content to meet a certain level of compliance by law"
    ],
    "links": [
      "[Web Content Accessibility Guidelines (WCAG) Overview](https://www.w3.org/WAI/standards-guidelines/wcag/)",
      "[How to Meet WCAG](https://www.w3.org/WAI/WCAG21/quickref/)"
    ],
    "tags": [
      "accessibility"
    ],
    "expertise": 0,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  },
  {
    "name": "xss.md",
    "question": "What is a cross-site scripting attack (XSS) and how do you prevent it?",
    "answer": "XSS refers to client-side code injection where the attacker injects malicious scripts into a legitimate website or web application. This is often achieved when the application does not validate user input and freely injects dynamic HTML content.\n\nFor example, a comment system will be at risk if it does not validate or escape user input. If the comment contains unescaped HTML, the comment can inject a `<script>` tag into the website that other users will execute against their knowledge.\n\n* The malicious script has access to cookies which are often used to store session tokens. If an attacker can obtain a user’s session cookie, they can impersonate the user.\n* The script can arbitrarily manipulate the DOM of the page the script is executing in, allowing the attacker to insert pieces of content that appear to be a real part of the website.\n* The script can use AJAX to send HTTP requests with arbitrary content to arbitrary destinations.",
    "goodToHear": [
      "On the client, using `textContent` instead of `innerHTML` prevents the browser from running the string through the HTML parser which would execute scripts in it.",
      "On the server, escaping HTML tags will prevent the browser from parsing the user input as actual HTML and therefore won't execute the script."
    ],
    "links": [
      "[Cross-Site Scripting Attack (XSS)](https://www.acunetix.com/websitesecurity/cross-site-scripting/)"
    ],
    "tags": [
      "security",
      "javascript"
    ],
    "expertise": 1,
    "questionCodeBlocks": [],
    "answerCodeBlocks": []
  }
];
export default data;