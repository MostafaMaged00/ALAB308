// Fizz Buzz
// .............................................................
// Loop through all numbers from 1 to 100.
// for(let x = 1; x<=100;x++){

//     if (x%3==0 && x%5==0){
//         console.log(`Fizz - Buzz The number ${x} is divisible by 3 & 5 `)
 
//     }   
//     else if(x%3==0){
//         console.log(`Fizz - The number ${x} is divisible by 3`)
//     }
//     else if (x%5==0 ){
//         console.log(`Buzz - The number ${x} is divisible by 5`)
 
//     } 
//     else{
//         console.log(x)
//     }

// }

// .............................................................
// Part 2: Prime Time


// for (let n = 2; n < 30; n++) {


//    if(n%2!=0 && n%3 != 0 && n%5 != 0){
//   console.log(n + ' is prime numer')
  
//    }else{


//    }


//   }


//   ****************************************************************************

const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// // get the rows of the string
// const rows = csv.split("\n");
// //define cellls variable
// let cell0,cell1,cell2,cell3
// //loop through each row
// for (let i = 0; i < 4; i++) {

//    const cols = rows[i].split('\,')
//    cell0 = cols[0]
//    cell1 = cols[1]
//    cell2 = cols[2]
//    cell3 = cols[3]
 
//    console.log(cell0,cell1,cell2,cell3)
//  }
//   ****************************************************************************
// Part 2: Expanding Functionality
//   ****************************************************************************
const csv1 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let tab_arr = csv1.split("\n");
console.log(tab_arr)
let numCols = tab_arr[0].split(',');
console.log(numCols.length);

let arr1 = []

for (let i = 0; i < numCols.length; i++) {

     let arr_row = tab_arr[i].split('\,')

   arr1.push(arr_row);
}
console.log(arr1);

