//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//Find the sum of all the multiples of 3 or 5 below 1000.
var ARR=[];
var maxi=1000;
for (i=1;i<maxi;i++)
{
    if(i%3==0|i%5==0)

    {
        ARR.push(i);
    }
}
function showsum(ARR)
{
    var sum=0;
    for(var key in ARR)
    {
        sum= sum+ARR[key];
    }
    return sum;
}
console.log(ARR);

console.log(showsum(ARR));