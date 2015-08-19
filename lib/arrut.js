(function() {
  var ArrayUtils = function(arr) {
    if (!(this instanceof ArrayUtils)) {
      return new ArrayUtils(arr);
    }
    this.arr = arr;
  }
  ArrayUtils.fn = ArrayUtils.prototype = {
    isEmpty: function(arr) {
      return arr.length == 0 ? true : false;
    },
    isNodeList: function(arr){
      return  /^\[object (HTMLCollection|NodeList)\]$/.test(Object.prototype.toString.call(arr));
    },
    clone: function(arr) {
      if(this.isNodeList(arr)){
        return [].slice.call(arr);
      }
      return arr.slice();
    },
    getLastItem: function(arr) {
      return arr[arr.length - 1];
    },
    removeFirstItem: function(arr) {
      this.isNodeList(arr) ? [].shift.call(arr) : arr.shift();
      return arr;
    },
    removeLastItem: function(arr) {
      this.isNodeList(arr) ? [].pop.call(arr) : arr.pop();
      return arr;
    },
    findObjectInArray: function(arr, attribute, value){
      var auxArr = this.isNodeList(arr) ? [].slice.call(arr) : arr;
      return auxArr.filter(function(item){
        return item[attribute] == value;
      })
    },
    addAsFirstItem: function(arr, item) {
      arr.unshift(item);
      return arr;
    },
    addAsLastItem: function(arr, item) {
      arr.push(item);
      return arr;
    },
    replaceItem: function(arr, indexOrItem, newItem) {
      if (typeof indexOrItem == "object") return TypeError('The method still does not work with objects');
      var isIndex = Number.isInteger(parseInt(indexOrItem));
      if (isIndex) {
        arr[indexOrItem] = newItem;
      } else {
        arr[arr.indexOf(indexOrItem)] = newItem;
      }
      return arr;
    },
    reverse: function(arr) {
      return arr.reverse();
    },
    sortAlpha: function(arr) {
      var error = -1;
      for (var i in arr) {
        if (typeof arr[i] != "string") {
          error++;
        }
      }
      if (error > -1) return TypeError('There are non-alphanumeric elements');
      return arr.sort();
    },
    sortNumeric: function(arr) {
      var error = -1;
      for (var i in arr) {
        if (typeof arr[i] != "number") {
          error++;
        }
      }
      if (error > -1) return TypeError('There are no numerical elements');
      return arr.sort(function(a, b) {
        return a - b;
      });
    },
    merge: function(arrOne, arrTow) {
      return arrOne.concat(arrTow);
    },
    remove: function(arr, item) {
      return arr.filter(function(i) {
        return i != item;
      });
    },
    getListBy: function(arr, field, op, max) {
      var ope = {
        '+': function(a, b) { return a + b },
        '-': function(a, b) { return a - b },
        '<': function(a, b) { return a < b },
        '>': function(a, b) { return a > b },
        '<=': function(a, b) { return a <= b },
        '>=': function(a, b) { return a >= b }
      };
      return arr
        .filter(function(a) {
          return ope[op](a[field], max);
        })
        .map(function(a) {
          return {
            name: a.name,
            calories: eval(a[field] +' '+op+' '+ max)
          }
        });
    }
  }
  window.ArrayUtils = ArrayUtils.fn, window.arrut = ArrayUtils.fn;
})();
