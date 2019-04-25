//имееться массив чисел (ввод с клавиатуры) и количество подмасивов.   Разбить так, чтоб сума подмасивов была как можно более одинаковая

//var str1 = "1 3 5 7 2 4 6 8";
var readline = require('readline-sync');
var str1 = readline.question("What is you ARR?");
var AraysNumber = Number(readline.question("how much Arrays?"));
//var AraysNumber = 4;
var ARR = str1.split(" ");
var NewARR = [];

function sum(Array)
 {
    var sum = 0;
    for (var key in Array)
    {
        sum = sum + Array[key];
    }
    return sum;
}
for (var key in ARR) 
{
    ARR[key] = Number(ARR[key]);
}
ARR.sort();
ARR.reverse();
console.log(ARR);
var medianIndex;



for (var i = 0; i < AraysNumber; i++) 
{
    NewARR.push([]);
    NewARR[i].push(ARR[i]);

}
var less = 0;
for (var i = AraysNumber; i < ARR.length; i++) 
{
    less = 0;
    for (var j = 0; j < NewARR.length; j++) 
    {
        if ((sum(NewARR[j]) + ARR[i]) < (sum(NewARR[less]) + ARR[i])) 
        {
            less = j;
        }

    }


    NewARR[less].push(ARR[i]);

}
console.log(NewARR);
for (var j = 0; j < NewARR.length; j++) 
{
    console.log(j + "NewARR sum =" + sum(NewARR[j]));

}

