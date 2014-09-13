var makeBinarySearchTree = function(value){
  var binarySearchTree = {};

  binarySearchTree.left = undefined;
  binarySearchTree.right = undefined;
  binarySearchTree.value = value;

  binarySearchTree.insert = function(num){
    //make a new tree
    //check if num is > current.value
      //check current.right exist
      //call inst on current right
    //if num is < current.value
      //check current.left exist
      //call inst on current left
    //call inst with this
    var newTree = makeBinarySearchTree(num);
    var curTree = this;
    var inst = function(tree){
      if(tree.value > num){
        if(tree.left){
          inst(tree.left);
        } else {
          tree.left = newTree;
        }
      } else {
        if(tree.right){
          inst(tree.right);
        } else {
          tree.right = newTree;
        }
      }

    }

    inst(curTree);

  };

  binarySearchTree.contains = function(num){
    //declare result with false
    //make a recursion funciton check
      //check current tree value equals to the num
      //if yes, change result to true and return
      //check if current tree value greater than num
        //if so check left exist
        //call check with left tree
      //check the right
        //if right exist
        //call check with right tree
    //call check function with this
    //return result

    var result = false;
    var check = function(tree){
      if(tree.value === num){
        result = true;
        return result;
      } else {
        if(tree.value > num){
          if(tree.left){
            check(tree.left);
          }
        } else {
          if(tree.right){
            check(tree.right);
          }
        }
      }
    };
    check(this);
    return result;

  };

  binarySearchTree.depthFirstLog = function(callback){
    //call callback on the current tree.value
    //check this tree has left
    //if so callback on the left
    // check this tree has right
    //if so callback on the right
    // debugger;
    callback(this.value);
    if(this.left){
      this.left.depthFirstLog(callback);
    }
    if(this.right){
      this.right.depthFirstLog(callback);
    }
  };

  return binarySearchTree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

