//Пользователь вводит координаты робота вначале и куда робот может попасть. из позиции (Х,У) робот может перейти либо в (Х+У,У) либо в (Х,У+Х).   Ороеделить попадет ли робот в конечную точку
var readline = require('readline-sync');
/*var X1 = readline.question("What is X1?");
var Y1 = readline.question("What is Y1?");
var X2 = readline.question("What is X2?");
var Y2 = readline.question("What is Y2?");*/
var X1 = 3;
var Y1 = 2;
var X2 = 111;
var Y2 = 157;
console.log("X1=" + X1 + "\nY1=" + Y1 + "\nX2=" + X2 + "\nY2=" + Y2);
var b = true;
while (X2 > X1 || Y2 > Y1) { if (X2 > Y2) {
            X2 = X2 - Y2;
        }
        else {
            Y2 = Y2 - X2;
        }
        console.log(X2 + "|" + Y2 + "|" );
}
