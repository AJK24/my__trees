function inOrder(node) {
 if (node !== null) {
   inOrder(node.left);
   write(node.show() + " ");
   inOrder(node.right);
   }
}

function preOrder(node) {
 if (node !== null) {
   write(node.show() + " ");
   preOrder(node.left);
   preOrder(node.right);
 }
}

function postOrder(node) {
 if (node !== null) {
   postOrder(node.left);
   postOrder(node.right);
   write(node.show() + " ");
 }
}


function getMin() {
	var current = this.root;
	while (current.left !== null) {
		current = current.left;
	}
	return current.data;
}


function getMax() {
	var current = this.root;
	while (current.right !== null) {
		current = current.right;
	}
	return current.data;
}

