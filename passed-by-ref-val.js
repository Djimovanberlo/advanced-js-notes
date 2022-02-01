// Primitive types are PASS BY VALUE
// Objects (so arrays and functions as well) are PASS BY REFERENCE

let a = 5
let b = a // this creates a NEW variable that hold the same value as a
b++

// console.log(b) // expected outcome: 6

// ----------

let obj1 = {
  name: 'Djimo',
  title: 'Lord of Belgium',
}

let obj2 = obj1 // this creates a REFERENCE to obj1, no values are copied

obj2.title = 'Lord of Utrecht'

// console.log('1: ', obj1, '2: ', obj2) // expected outcome: 2x { name: 'Djimo', title: 'Lord of Utrecht' }

// This way, you're not claiming much memory when using objects and arrays. Isn't that nice!

// ----------

// This is also why we use spread operators to copy the vallues of objects and arrays.
const firstArray = [1, 2, 3]
const secondArray = [...firstArray]
secondArray.push(4)

// console.log('1: ', firstArray, '2: ', secondArray) // expected outcome: [1, 2, 3], [1, 2, 3, 4]

// This does the same thing as a spread operator
const firstObj = { greeting: 'Hi' }
const secondObj = Object.assign({}, firstObj)
secondObj.greeting = 'Hello'

// console.log('1: ', firstObj, '2: ', secondObj)

// -----------

// COPYING OBJECTS
// You have to spread nested objects in order to force passing by value of those nested objects
const nestedObj = {
  name: 'Djimo',
  titles: {
    first: 'Lord of Belgium',
    second: 'Lord of Utrecht',
  },
}

const spreadNestedObj = { ...nestedObj }

spreadNestedObj.titles.first = 'Lord of LLN'

// console.log('1: ', nestedObj, '2: ', spreadNestedObj) // expected outcome: both objects contain Lord of LLN

// So the nested object is still passed by reference! Oh no

const anotherSpread = { ...nestedObj, titles: { ...nestedObj.titles } }
anotherSpread.titles.first = 'Lord of nothing and no one at all'

// console.log('1: ', nestedObj, '2: ', anotherSpread) // expected result: two objects with different values

// ----------

// If you want to copy a large object, this line can save some time:
const veryCloned = JSON.parse(JSON.stringify(nestedObj))
veryCloned.titles.first = 'Lord of the univerise, I guess...'

// console.log('1: ', nestedObj, '2: ', veryCloned) // expected result: two objects with different values

// This makes a stringified JSON out of the object, and then parses the JSON to create a new object
// If it were to be a huuuge object, this will result in performance issues
