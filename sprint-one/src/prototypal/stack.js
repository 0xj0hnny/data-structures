var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.storage = {};
  stack.count = 0;
  return stack;
};

var stackMethods = {
  push:function(value){
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function(){
    this.count && this.count--;
    var temp = this.storage[this.count];
    var out = temp;
    delete temp;
    return out;
  },
  size:function(){
    return this.count;
  }
};


