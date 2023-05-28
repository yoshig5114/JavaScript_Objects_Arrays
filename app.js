
//Exercise 1 Section
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

let book = {};
book.title = "The Storyteller";
book.pages = 371;
book.readCount = 1;
book.info = function(){
    return `${book.title}, ${book.pages} pages, read ${book.readCount} time(s).`;

}
console.log(book.info());

// exercise 3
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";
let wordArr = [];
let reverseWord = [];
let joinedWord = "";
let splitSentence = sentence.split(" ");
let newSentence = "";
for (let i = 0; i < splitSentence.length; i++){
    wordArr = splitSentence[i].split("");
    reverseWord = wordArr.reverse(); 
    //console.log(reverseWord);
    joinedWord = reverseWord.join("");
    //console.log (joinedWord);
    newSentence = newSentence + joinedWord + " ";
}
console.log(newSentence)

//exercise 4
console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
let arr1 = csvData.split("\n");
let columnHeads =arr1[0].split(",");
let newArr = [];

for(let i = 1; i < arr1.length; i++) {
    let arrObject = {};
    let rowSplit = arr1[i].split(",");
    arrObject[columnHeads[0]] = rowSplit[0];
    arrObject[columnHeads[1]] = rowSplit[1];
    newArr.push(arrObject);
}

console.log(newArr);
