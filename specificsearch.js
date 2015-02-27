
function find(data) {
	var current = this.root;
	while (current && current.data != data) {
		if (data < current.data) {
			current = current.left;
		}
		else {
			current = current.right;
		}
	}
	return current;
}
