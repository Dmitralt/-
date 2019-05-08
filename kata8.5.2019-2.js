
/**Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

 */

function findOdd(A) {
    let WorkArray = [];
    let Answer="";
    
    for (let i in A)
     {
        let Inarray = false;
        if(typeof(WorkArray[0])!='undefined')
        {
            for (let j in WorkArray)
            {
                if(WorkArray[j][0]==A[i])
                {
                   
                    Inarray=true;
                    WorkArray[j][1]=WorkArray[j][1]+1;
                }
            }
        }

        
        if(Inarray==false)
        {
        let element = [];
        element[0] = A[i];
        element[1] = 1;
        WorkArray.push(element);
        }

    }
    if(typeof(WorkArray[0])!='undefined')
        {
            for (let j in WorkArray)
            {
                if(WorkArray[j][1]%2==1)
                {
                    Answer=WorkArray[j][0];
                }
            }
    }
    return Answer;
}


console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2,5]));