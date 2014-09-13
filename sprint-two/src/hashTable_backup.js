var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){ //time complexity is O(1)
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage[i] === undefined){
    this._storage[i] = {};
  }
  this._storage[i][k] = v;
};

HashTable.prototype.retrieve = function(k){ //time complexity is O(1)
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage[i] === undefined || this._storage[i][k] === undefined){
    return null;
  } else {
    return this._storage[i][k];
  }
};

HashTable.prototype.remove = function(k){ //time complexity is O(1)
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage[i] && this._storage[i][k]){
    delete this._storage[i][k];
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
