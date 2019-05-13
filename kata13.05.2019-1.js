/**Common denominators

You will have a list of rationals in the form

 { {numer_1, denom_1} , ... {numer_n, denom_n} } 
or

 [ [numer_1, denom_1] , ... [numer_n, denom_n] ] 
or

 [ (numer_1, denom_1) , ... (numer_n, denom_n) ] 
where all numbers are positive ints.

You have to produce a result in the form

 (N_1, D) ... (N_n, D) 
or

 [ [N_1, D] ... [N_n, D] ] 
or

 [ (N_1', D) , ... (N_n, D) ] 
or

{{N_1, D} ... {N_n, D}} 
depending on the language (See Example tests)

in which D is as small as possible and

 N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
Example:

convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]*/


function NOK(A)
{   
    var  n = A.length, a = Math.abs(A[0]);
    for (var i = 1; i < n; i++)
     { var b = Math.abs(A[ i ]), c = a;
       while (a && b){ a > b ? a %= b : b %= a; } 
       a = Math.abs(c*A[ i ])/(a+b);
     }
    return a;
}


function convertFrac(lst){
let D=1;
let ARR=[];
for(let i =0;i<lst.length;i++ )
{
    ARR.push(lst[i][1]);
}
D=NOK(ARR)
for(let i in lst )
{
    lst[i][0]=(D/lst[i][1])*lst[i][0];
    lst[i][1]=D;
    lst[i]=lst[i].join(",");
}

    if(lst.join(")(")=="")
    {
        return "";
    }
    return "("+lst.join(")(")+")";
  }



  console.log(convertFrac([ [1, 2], [1, 3], [1, 4] ]));
 
