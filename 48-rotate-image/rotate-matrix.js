function createMatrix(n, randomMax) {
	var randomizer = () => 0;
	if (randomMax > 0) 
		randomizer = () => Math.floor(Math.random() * randomMax);

	var matrix = [];

	for(var i = 0; i < n; i++) {
		var row = Array.from({length: n}, randomizer);
		matrix.push(row);
	}

	return matrix;
}

function rotate(matrix) {
	var n = matrix[0].length;
	var matrix90 = createMatrix(n, 0);

	for(var i = 0; i < n; i++)
		for(var j = 0; j < n; j++)
			matrix90[j][n-i-1] = matrix[i][j];

	for (var i = 0; i < n; i++)
		for (var j = 0; j < n; j++)
			matrix[i][j] = matrix90[i][j];
}

function print(matrix, id) {
	var str = "";
	var n = matrix[0].length;
	for(var i = 0; i < n; i++) {
		str += matrix[i].join() + "<br/>";
	}

	var el = document.getElementById(id);
	el.innerHTML = str;
}

function clear(id) {
	var el = document.getElementById(id);
	el.innerHTML = '';
}

var theMatrix;
var theSize;

function generateMatrix() {
	theSize = Number(document.getElementById('size').value);
	theMatrix = createMatrix(theSize, 10);
	print(theMatrix, 'matrix0');
	clear('matrix1');
}

function solveMatrix() {
	rotate(theMatrix);
	print(theMatrix, 'matrix1');
}

