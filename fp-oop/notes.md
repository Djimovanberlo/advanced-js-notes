### OOP and FP are 'only' paradigms:

- Their primary goal is to help you organize code, make it reusable and maintainable
- OOP gained popularity in the '70s with languages like Java and C++ (which is C with Classes)
- FP started gaining popularity from the '90s.

- OOP combines the data and functionality (methods) into an class/object
- FP seperates the data and functionality

### Prototypal inheritance

- JavaScript is built on prototypal inheritance
- In practice, this means that objects, arrays and functions inherit certain properties from a prototype.
- If you create a new array, it will inherit methods like .map(), .filter() et cetera from a prototype array. This prototype array itself has inherited properties from the base prototype object.
- This base object has certain properties, like the constructor by which new objects are created.
- The same goes for functions. After all functions and arrays are just objects that look a bit different.
- A JavaScript class is actually not a real class, although it looks like one. Instead, it inherits its properties.
