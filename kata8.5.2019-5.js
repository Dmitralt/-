
/*In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.*/
function alphabetPosition(text) {
  var A = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('');
  var B= text.toUpperCase().split('');
  let Answer=[];
  
  for(let i in B)
  {
    for(let j in A)
    {
      if(A[j]==B[i])
      {
        
        Answer.push(+j+1);
      }
    }
  }
    return Answer.join(" ");
}


console.log(alphabetPosition("abd"));
