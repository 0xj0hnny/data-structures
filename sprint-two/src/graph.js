var Graph = function(){
  this.storage = {};
  this.count = 0;
};

Graph.prototype.addNode = function(newNode, toNode){

  for(var i = 0; i < arguments.length; i++){
    if(!this.storage[arguments[i]]){
     this.storage[arguments[i]] = { value:arguments[i], edge:[]};
    }
  }

  var arr = [];
  for(var key in this.storage){
    arr.push(key);
  }
  if(arr.length === 2){
    this.addEdge(arr[0], arr[1]);

  }

  if(arguments[1]){
    this.addEdge(newNode, toNode);
  }

  //if argument is 1,
  //than create a newnode
  //if argument is 2,
  //call add edge

};

Graph.prototype.contains = function(node){
  //check the storage for the value node
  return this.storage[node] ? true : false;
};

Graph.prototype.removeNode = function(node){
  if(this.storage[node]){
    for(var i = 0; i < this.storage[node].edge.length; i++){
      var edgeTo = this.storage[node].edge[i];
      var edgeNode = this.storage[edgeTo];
      edgeNode.edge.splice(degeNode.edge.indexOf(node),1);
    }
    delete this.storage[node];
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){

  return this.storage[fromNode].edge.indexOf(toNode) !== -1 ? true : false;

};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode].edge.push(toNode);
  this.storage[toNode].edge.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var edgeTo = this.storage[fromNode].edge;
  edgeTo.splice(edgeTo.indexOf(toNode),1);
  var edgeFrom = this.storage[toNode].edge;
  edgeFrom.splice(edgeFrom.indexOf(fromNode),1);

  if(this.storage[fromNode].edge.length === 0){
    delete this.storage[fromNode];
  }
  if(this.storage[toNode].edge.length === 0){
    delete this.storage[toNode];
  }
  console.log(this.storage);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
