   //Question 1 
let x = [3,7,34,90,12];
let lastElement = x[x.length-1];
console.log({lastElement});

let arr2= [true, "green", "where",12,56];
let lastElement2 = arr2[arr2.length-1];
console.log({lastElement2});

//Question2
let pets = ["Cow", "Bird", "Snake", "Dog"];
console.log(pets.join())

//Question3
 let  arr3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
 arr3.sort();
 console.log({arr3});

//Question4
 let arr4 =  ["apple", "mango", "apple","orange", "mango", "mango"];
function removeDuplicates(arr4) {
return arr4.filter((item,
index) => arr4.indexOf(item) === index);
}
console.log(removeDuplicates(arr4));

let arr = ["apple", "mango", "apple","orange", "mango", "mango"];
let duplicates = arr.filter((item,index) => arr.indexOf(item) !== index );
console.log({duplicates})
   
//Question5
let arr5 = ["the", "way", "x", 4];
arr5.forEach(str => {
   if(str === 'way'){
       console.log('way')
   }else{
       console.log('search word was not found')
   }
})

// Question6
let word = "sevink"
let sortWord = (string) =>{
return string.split("").sort().join("");
};
console.log(sortWord("sevink"));




