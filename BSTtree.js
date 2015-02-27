function Node(data, left, right) {
 this.data = data;
 this.left = left;
 this.right = right;
 this.show = show;
}
function show() {
 return this.data;
}

function BST() {
 this.root = null;
 this.insert = insert;
 this.inOrder = inOrder;
 this.preOrder = preOrder;
 this.postOrder = postOrder;
 }

function insert(data) {
 var n = new Node(data, null, null);
 	//If there isnt already a root node then it sets this to root.
 if (this.root === null) {
   this.root = n;
   }
 else {
   var current = this.root;
   var parent;
   while (true) {
     parent = current;
     if (data < current.data) {
       current = current.left;
       if (current === null) {
         parent.left = n;
         break;
         }
     }
   else {
     current = current.right;
     if (current === null) {
       parent.right = n;
       break;
       }
     }
   }
 }
}


function remove(data) {
	root = removeNode(this.root, data);
}
function removeNode(node, data) {
	if (node === null) {
		return null;
	}
	if (data == node.data) {
		if (node.left === null && node.right === null) {
			return null;
		}
	if (node.left === null) {
		return node.right;
	}
	if (node.right === null) {
		return node.left;
	}
	var tempNode = getSmallest(node.right);
	node.data = tempNode.data;
	node.right = this.removeNode(node.right, tempNode.data);
	return node;
	}
	else if (data < node.data) {
		node.left = this.removeNode(node.left, data);
		return node;
	}
	else {
		node.right = this.removeNode(node.right, data);
		return node;
	}
}
















