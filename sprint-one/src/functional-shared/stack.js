var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {
    storage: {},
    count: 0
  };

  _.extend(stack,stackMethods);
  return stack;
};

var stackMethods = {
  push: function(value){
    this.storage[this.count] = value;
    this.count++;
  },

  pop: function(){
    this.count && this.count--;
    return this.storage[this.count];
  },

  size: function(){
    return this.count;
  }
};


