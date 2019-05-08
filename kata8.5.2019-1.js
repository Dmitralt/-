
/*You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this" */

function likes(names) {
    let answer;
    if((typeof(names[3])!='undefined'))
        {
            let length=names.length-2;
            answer=`${names[0]}, ${names[1]} and ${length} others like this`;
        }
        if((typeof(names[3])=='undefined')&(typeof(names[2])!='undefined'))
        {
            answer=`${names[0]}, ${names[1]} and ${names[2]} like this`;
        }
        else  if((typeof(names[2])=='undefined')&(typeof(names[1])!='undefined'))
        {
            answer=`${names[0]} and ${names[1]} like this`;
        }
        else  if((typeof(names[1])=='undefined')&(typeof(names[0])!='undefined'))
        {
            answer=`${names[0]} likes this`;
        }
        else if(typeof(names[0])=='undefined')
        {
            answer="no one likes this";
        }
return  answer;

  }

 console.log( likes([1,2,3,4,5,6,7]));