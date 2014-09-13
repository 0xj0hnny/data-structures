var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){ //time complexity is O(1)
    var newNode = makeNode(value);
    if(list.head === null){
      list.head = newNode;
      list.tail = newNode;
    } else {
      var prevNode = list.tail;
      list.tail = newNode;
      prevNode.next = list.tail;
    }
  };

  list.removeHead = function(){ //time complexity is O(1)
    if(list.head){
      var headNode = list.head;
      list.head = headNode.next;
      return headNode.value;
    }
  };

  list.contains = function(target){ //time complexity is O(n)
    var result = false;
    if(list.head === null){
      return result
    }

    var check = function(node) {
      if(node.value === target){
        result = true
        return result
      }
      else if (node.next === null){
          return result
      }else{
         check(node.next);
      }
    }

    check(list.head);

    return result

  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
