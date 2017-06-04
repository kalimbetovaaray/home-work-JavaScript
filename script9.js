var a = prompt("Введите число больше нули");
if(a<=0){
 		while(a<=0){
			alert("Введите число больше нули");
 			a = prompt("Введите число больше нули");
 		}
 	}
 var i = 1;
 summa = 0;
 while(i<=a){
 	summa += i;
 	i++;
 }
 alert("Сумма чисел от 1 до " + a + " = " + summa);