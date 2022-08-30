
var MyHashSet = function () {
  this.map = {}
};

/** 
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.add = function (key) {
  this.map[val] = 1;
};

/** 
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.remove = function (key) {
  let contains = this.contains(key)
  contains ? delete this.map[key] : ''
};

/** 
* @param {number} key
* @return {boolean}
*/
MyHashSet.prototype.contains = function (key) {
  let val = Object.keys(this.map).find((el) => {
    return el == key
  })
  return typeof val !== 'undefined' ? true : false
};


// * Your MyHashSet object will be instantiated and called as such:
var obj = new MyHashSet()
obj.add(key)
obj.remove(key)
var param_3 = obj.contains(key)
