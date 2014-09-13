var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  _.extend(newTree, treeMethods);
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  if(this.children === undefined){
    this.children = [];
  }
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  var output = false;
  // var treeThis = this;

  var check = function(tree){
    if(tree.value === target){
      output = true;
      return output;
    }
    if(tree.children === undefined){
      return output;
    } else {
      for(var i =0; i < tree.children.length; i++){
        check(tree.children[i]);
      }
    }
  }

  check(this);
  return output;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

