# arrut
ArrayUtils

## Array is empty
```javascript
var array = ["a", "b", "c"];
var empty = arrut.isEmpty(array);
// false
```

## Array clone
```javascript
var array = ["a", "b", "c"];
var clone = arrut.clone(array);
// ["a", "b", "c"]
```

## Array getLastItem
```javascript
var array = ["a", "b", "c"];
var array = arrut.getLastItem(array);
// c
```

## Array removeFirstItem
```javascript
var array = ["a", "b", "c"];
var array = arrut.removeFirstItem(array);
// [ "b", "c" ]
```

## Array addAsFirstItem
```javascript
var array = ["b", "c"];
var array = arrut..addAsFirstItem(array,"a");
// [ "a", "b", "c" ]
```

## Array addAsLastItem
```javascript
var array = ["a", "b"];
var array = arrut..addAsLastItem(array,"c");
// [ "a", "b", "c" ]
```
