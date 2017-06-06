
function array(arr){
	 document.write("<table border ='1' width = '100%'>");
	 document.write("<tr> <td>" + arr[0][0] + "</td> <td>" + arr[0][1] + "</td> <td>" + arr[0][2] + "</td> </tr>");
	 document.write("<tr> <td>" + arr[1][0] + "</td> <td>" + arr[1][1] + "</td> <td>" + arr[1][2] + "</td> </tr>");
	 document.write("<tr> <td>" + arr[2][0] + "</td> <td>" + arr[2][1] + "</td> <td>" + arr[2][2] + "</td> </tr>");
	 document.write("</table>");
}
	 var arr_1 = new Array(11, 21, 31);
	 var arr_2 = new Array(41, 51, 61);
	 var arr_3 = new Array(71, 81, 91);
	 var arr = new Array(arr_1, arr_2, arr_3);
	array(arr) ;
	document.write("<br />");
	function sum(array){
		var summa = 0;
		for (var i = 0; i < array.length; i++){
			summa += array[i];
		}
			return summa;
	}
	var arr4 = new Array(31,21,51,61);
	var result = sum(arr4);
	alert(result);
	