//есть строка (вводиться с клавиатуры) вида АВАСАВ . вывести все уникальные перестановки этих букв.
var readline = require('readline-sync');
var str1 = readline.question("What is str?");

function unique(arr) 
{
    var result = [];
  
    nextInput:
      for (var i = 0; i < arr.length; i++) {
        var str = arr[i]; // для каждого элемента
        for (var j = 0; j < result.length; j++) { // ищем, был ли он уже?
          if (result[j] == str){ continue nextInput; }// если да, то следующий
        }
        result.push(str);
      }
  
    return result;
}
function combinations(str) 
{
    var fn = function(active, rest, a) 
    {
        if (!active && !rest)
           {return;}
        if (!rest) 
        {
            a.push(active);
        } 
        else 
        {
            fn(active + rest[0], rest.slice(1), a);
            fn(active, rest.slice(1), a);
        }
        return a;
    }
    return fn("", str, []);
}
function perm(arr) {
  if (arr.length > 1) {
      var beg = arr[0];
      var arr1 = perm(arr.slice(1));
      var arr2 = [];
      var l =  arr1[0].length;
      for(var i=0; i < arr1.length; i++) 
          for(var j=0; j <= l; j++) 
              arr2.push(arr1[i].slice(0, j).concat(beg, arr1[i].slice(j)));
      return arr2;
  } else return [arr];
}
function Printarray(ARR)
{
  for(var i in ARR)
  {
    ARR[i]=unique(perm(ARR[i]));
  }
  console.log(ARR);
}


Printarray(unique(combinations(str1)));

