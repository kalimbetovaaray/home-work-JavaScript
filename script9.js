var x = Number(prompt("Введите целое число больше 0."));  
   do {
    alert("Вы ввели неверное число."); 
    var x = Number(prompt("Введите целое число больше 0."));
   } while (x <= 0);   
  
   var summa = (x*(x+1))/2;
   document.write(summa);  