
function Node(data, left, right) {
	this.data = data;
	this.count = 1;
	this.left = left;
	this.right = right;
	this.show = show;
}

function update(data) {
	var grade = this.find(data);
	grade.count++;
	return grade;
}

function prArray(arr) {
	putstr(arr[0].toString() + ' ');
	for (var i = 1; i < arr.length; ++i) {
		putstr(arr[i].toString() + ' ');
		if (i % 10 === 0) {
			putstr("\n");
		}
	}
}

function genArray(length) {
	var arr = [];
	for (var i = 0; i < length; ++i) {
		arr[i] = Math.floor(Math.random() * 101);
	}
	return arr;
}
