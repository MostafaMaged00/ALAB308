//Part 4: Sorting and Manipulating Data
let arr1 = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }
]

//remove the last element of arr1
arr1.pop();
// console.log(arr1)

//add a new object to index 1
let newObj = { id: "48", name: "Barry", occupation: "Runner", age: "25" }
arr1.splice(1,0,newObj)
// console.log(arr1)


//add an object to the end of arry
let lastObj = { id: "7", name: "Bilbo", occupation: "None", age: "111" }
arr1.push(lastObj)
console.log(arr1)

let avg = 0;
for (let i=0;i<arr1.length;i++)
{
     avg += (parseInt(arr1[i].age))
   
}
console.log(`The average age is : ${avg/arr1.length} years`)



console.log(`**********************************************`)
let x = 0;
arr1.forEach((n)=>{
 
x+=parseInt(n.age)
})
console.log(`The average age is : ${x/arr1.length} years`)
