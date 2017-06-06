var arr = new Array(5,7,6,8,9,12,13,19,23,28);
for (var i = 0; i < arr.length; i++ )
	document.write(arr[i] + " ");
	document.write("<br/>");
	arr.reverse();
	for (var i = 0; i < arr.length; i++ )
	document.write(arr[i] + " ");