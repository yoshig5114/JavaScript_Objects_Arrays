
// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
var sum = 0;
const numbers = [2, 22, 12, 17, 18, 39, 129];
function arraySum(arr){
    
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
arraySum(numbers);
console.log(sum);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let Book = {};
Book.title = "The Storyteller";
Book.pages = 371;
Book.readCount = 1;
Book.info = function(){
    return `${Book.title}, ${Book.pages} pages, read ${Book.readCount} time(s).`;

}
console.log(Book.info());

// exercise 3
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";
let reverseWord = [];
let splitSentence = sentence.split(" ");
for (let i = 0; i < splitSentence.length(); i++){
    reverseWord = splitSentence[i].reverse(); 
}



