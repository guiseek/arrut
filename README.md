# arrut.js
ArrayUtils

## arrut.isEmpty
```javascript
var array = ["a", "b", "c"];
var empty = arrut.isEmpty(array);
// false
```

## arrut.clone
```javascript
var array = ["a", "b", "c"];
var clone = arrut.clone(array);
// ["a", "b", "c"]
```

## arrut.getLastItem
```javascript
var array = ["a", "b", "c"];
array = arrut.getLastItem(array);
// c
```

## arrut.removeFirstItem
```javascript
var array = ["a", "b", "c"];
array = arrut.removeFirstItem(array);
// [ "b", "c" ]
```

## arrut.addAsFirstItem
```javascript
var array = ["b", "c"];
array = arrut.addAsFirstItem(array,"a");
// [ "a", "b", "c" ]
```

## arrut.addAsLastItem
```javascript
var array = ["a", "b"];
array = arrut.addAsLastItem(array,"c");
// [ "a", "b", "c" ]
```

## arrut.replaceItem
```javascript
var array = ["a", "b", "d"];
array = arrut.replaceItem(array,"d","c");
// [ "a", "b", "c" ]
```
or
```javascript
var array = ["a", "b", "d"];
array = arrut.replaceItem(array,2,"c");
// [ "a", "b", "c" ]
```

## arrut.reverse
```javascript
var array = ["a", "b", "c"];
array = arrut.reverse(array);
// [ "c", "b", "a" ]
```

## arrut.sortAlpha
```javascript
var array = ["c", "b", "a"];
array = arrut.sortAlpha(array);
// [ "a", "b", "c" ]
```

## arrut.sortNumeric
```javascript
var array = [3, 2, 1];
array = arrut.sortNumeric(array);
// [1, 2, 3]
```

## arrut.merge
```javascript
var array;
var arrayOne = ['a','b','c'];
var arrayTwo = [3,2,1];
array = arrut.merge(arrayOne, arrayTwo);
// ['a','b','c', 1, 2, 3]
```

## arrut.merge
```javascript
var array = ['a','b','c'];
array = arrut.remove(array, 'a');
// [b','c']
```
