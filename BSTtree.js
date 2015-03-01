//creates the node object
function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
}

//creates a function to show the data of a location
function show() {
	return this.data;
}

//creates teh Binary Search Tree object
function BST() {
   this.root = null;
   this.insert = insert;
   this.inOrder = inOrder;
   this.preOrder = preOrder;
   this.postOrder = postOrder;
   this.getmin = getmin;
   this.getmax = getmax;
   this.find = find;
   this.remove = remove;
   this.removeNode = removeNode;
   this.getSmallest = getSmallest;
   this.findMax = findMax;
}

//Inserts a node into the BST
function insert(data) {
      	var n = new Node(data, null, null);
	if (this.root == null) {
		this.root = n;
	}
	else {
		var current = this.root;
		var parent;
		while (true) {
			parent = current;
			if (data < current.data) {
				current = current.left;
				if (current == null) {
					parent.left = n;
					break;
				}
			}
			else {
				current = current.right;
				if (current == null) {
			 		parent.right = n;								 break;									 }
													 }
		 }
	}
}

//Sets teh BST in order
function inOrder(node) {
      	if (!(node == null)) {
		inOrder(node.left);
		putstr(node.show() + " ");
		inOrder(node.right);
	}
}

//Sets the binary search tree to pre-order
function preOrder(node) {
      	if (!(node == null)) {
		putstr(node.show() + " ");
		preOrder(node.left);
		preOrder(node.right);
	}
}

//sets teh binary search tree to post-order
function postOrder(node) {
	if (!(node == null)) {
		postOrder(node.left);
		postOrder(node.right);
		putstr(node.show() + " ");
	}
}


//Gets the smallest value on the left
function getmin() {
	   var current = this.root;
	      print("debug: " + current.data);
	         while (!(current.left == null)) {
			       current = current.left;
			          }
		    return current.data;
}

//Gets the highest value on the right
function getmax() {
	   var current = this.root;
	      while (!(current.right == null)) {
		            current = current.right;
			       }
	         return current.data;
}

//finds the  location of data in the BST
function find(data) {
	var current = this.root;
	//Has to be both current and current.data in case of an empty BST
	while (current && current.data != data) {
		if (data < current.data) {
			current = current.left;
		}
		else {
			current = current.right;
		}
		if (current == null) {
			return null;
		}
	}
	return current;
}

//Finds the smallest node in the BST
function getSmallest(node) {
	if (node.left == null) {
		return node;		   
       	}	
	else {
		return getSmallest(node.left);
	}
}

//removes a node from the data
function remove(data) {
	   root = removeNode(this.root, data);
}


//deals with the reorganization after removing the node
function removeNode(node, data) {
	   if (node == null){
		 return null;
	   }
	   if (data == node.data) {
		//  node has no children
          	 if (node.left == null && node.right == null) {
   		   return null;
	  	 }
          	  // node has no left child
          	 if (node.left == null) {
		   return node.right;
	  	 }
          	 // node has no right child
	  	 if (node.right == null) {
			   return node.left;
	  	 }
          	 // node has two children
         	 var tempNode = getSmallest(node.right);
	  	 node.data = tempNode.data;
	 	 node.right = removeNode(node.right, tempNode.data);
	  	 return node;
	   }
	   else if (data < node.data) {
		   node.left = removeNode(node.left, data);
		   return node;
	   }
	   else {
		   node.right = removeNode(node.right, data);
		   return node;
	   }
}


/////HOMEWORK SECTION FINDING THE MAXIMUM IN A BINARY SEARCH TREE!

function findMax(bst){
	node = bst.root;
	while(node.right != null){
		node = node.right;
	}
	
	print(node.data);
	return node.data;


}






//testing

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

print(nums.findMax(nums));

/*print("Inorder traversal: ");
 * inOrder(nums.root);
 * print("\n");
 * print("Preorder traversal: ");
 * preOrder(nums.root);
 * print("\n");
 * print("Postorder traversal: ");
 * postOrder(nums.root);
 * print("\n");
 * var min = nums.getmin();
 * print("The minimum value of the BST is: " + min);
 * var max = nums.getmax();
 * print("The maximum value of the BST is: " + max);
 * inOrder(nums.root);
 * print("\n");
 * putstr("Enter a value to search for: ");
 * var value = parseInt(readline());
 * var found = nums.find(value);
 * if (found != null) {
 *    print("Found " + value + " in the BST.");
 *    }
 *    else {
 *       print(value + " was not found in the BST.");
 *       }*/

//inOrder(nums.root);
//print("\n");
//var num = parseInt(readline());
//nums.remove(num);
//inOrder(nums.root);


