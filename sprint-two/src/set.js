var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){ //time complexity is O(1)
  if(this._storage === undefined){
    this._storage = {};
  }
  this._storage[item] = item;
};

setPrototype.contains = function(item){ //time complexity is O(1)
  return this._storage[item] === undefined ? false: true;
};

setPrototype.remove = function(item){ //time complexity is O(1)
  //check if set contains item
  //if yes, remove it
  if(this._storage[item]){
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
