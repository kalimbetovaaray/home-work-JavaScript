
document.write("<table border='1px'>");

for(var i = 1; i <= 10; i++) {
	document.write("<tr style='height:30px;'>");
	for(var j = 1; j <= 10; j++) {
		document.write("<td style='width:30px;'>" + i*j + "</td>");
	}
	document.write("</tr>");
}
document.write("</table>");