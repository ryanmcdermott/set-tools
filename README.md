# set-tools


## What is it?
`set-tools` is a prototype extension module for beefing up JavaScript's `Set` type to include all of your favorite set operations, including `difference`, `union`, `intersection`, `issubset`, `issuperset`, and `toArray`.


## What else?
This module is a bit naughty. Normally you are not supposed to extend global JavaScript prototypes. **This is because it affects any and all other modules you have loaded.**  Having said that, these operations are useful and will hopefully be introduced one day as native methods on `Set`. Assuming no other module is requiring `Set` to have different implementations of these methods or for some reason requiring them *not* to be there, then this module won't harm anything.

## Installation
`npm install set-tools --save`


## Usage
```js
require('set-tools'); // requiring it supercharges Set prototype automatically.

var s, cmp, results;

/**
 * intersection
 */
s = new Set([1, 3, 5, 7, 9]);
cmp = new Set([2, 3, 8, 9]);
results = s.intersection(cmp); // Set {3, 9}




/**
 * union
 */
s = new Set([1, 3, 5, 7, 9]);
cmp = new Set([2, 3, 8, 9]);
results = s.union(cmp); // Set {2, 3, 8, 9, 1, 5, 7}




/**
 * difference
 */
s = new Set([1, 3, 5, 7, 9]);
cmp = new Set([2, 3, 8, 9]);
results = s.difference(cmp); // Set {1, 5, 7}




/**
 * issubset
 */
s = new Set([1, 3, 5, 7, 9]);
cmp = new Set([3, 5]);
results = s.issuperset(cmp); // true

s = new Set([1, 3, 5, 7, 9]);
cmp = new Set([3, 8]);
results = s.issuperset(cmp); // false




/**
 * issuperset
 */
s = new Set([11, 15, 18, 20]);
cmp = new Set([11, 15, 18, 20, 25, 89, 100]);
results = s.issubset(cmp); // true

s = new Set([11, 15, 18, 57, 62]);
cmp = new Set([11, 15, 18, 20, 25, 89, 100]);
results = s.issubset(cmp); // false
```


## Contributing
Pull requests are much appreciated and accepted.


## License
Released under the [MIT License](http://www.opensource.org/licenses/MIT)
