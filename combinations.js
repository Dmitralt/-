//есть строка (вводиться с клавиатуры) вида АВАСАВ . вывести все уникальные перестановки этих букв.
var readline = require('readline-sync');
var str1 = readline.question("What is str?");
//var res = str1.split("");
function unique(arr) {
    var result = [];
  
    nextInput:
      for (var i = 0; i < arr.length; i++) {
        var str = arr[i]; // для каждого элемента
        for (var j = 0; j < result.length; j++) { // ищем, был ли он уже?
          if (result[j] == str) continue nextInput; // если да, то следующий
        }
        result.push(str);
      }
  
    return result;
}
function combinations(str) {
    var fn = function(active, rest, a) {
        if (!active && !rest)
            return;
        if (!rest) {
            a.push(active);
        } else {
            fn(active + rest[0], rest.slice(1), a);
            fn(active, rest.slice(1), a);
        }
        return a;
    }
    return fn("", str, []);
}
console.log(unique(combinations(str1)));

