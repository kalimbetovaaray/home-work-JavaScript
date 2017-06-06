 //¡≈« ÷» À¿
 var arr_1 = new Array(11, 21, 31);
 var arr_2 = new Array(41, 51, 61);
 var arr_3 = new Array(71, 81, 91);
 var arr = new Array(arr_1, arr_2, arr_3);
 document.write("<table border ='1' width = '100%'>");
 document.write("<tr> <td>" + arr[0][0] + "</td> <td>" + arr[0][1] + "</td> <td>" + arr[0][2] + "</td> </tr>");
 document.write("<tr> <td>" + arr[1][0] + "</td> <td>" + arr[1][1] + "</td> <td>" + arr[1][2] + "</td> </tr>");
 document.write("<tr> <td>" + arr[2][0] + "</td> <td>" + arr[2][1] + "</td> <td>" + arr[2][2] + "</td> </tr>");
 document.write("</table>");
 document.write("<br/>");
 //— ÷» ÀŒ…
 document.write("<table border = '1px' width = '100%'>");
for(i = 0; i < arr.length; i++){
	document.write("<tr style='height:30px;'>");
	for(j = 0; j < arr[i].length; j++){
		document.write("<td style='width:30px;'>");
			document.write(arr[i][j]);
		document.write("</td>")
	}
	document.write("</tr>")
}
document.write("</table>");