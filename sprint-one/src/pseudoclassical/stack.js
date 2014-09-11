var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value){
  this.storage[this.count] = value;
  this.count++;
};
Stack.prototype.pop = function(){
  this.count && this.count--;
  var temp = this.storage[this.count];
  var out = temp;
  delete temp;
  return out;
};
Stack.prototype.size = function(){
  return this.count;
};

var newStack = new Stack();

