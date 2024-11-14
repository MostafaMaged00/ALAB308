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
const colums = 4
const rows = 4
let cell0,cell1,cell2,cell3

//const rows = csv.split('\n')
//  console.log(rows);


let line =rows[0].split('\,')


for (let i = 0; i < 4; i++) {
  cell0 = (line[i].split('\,'))

}

 console.log(cell0)

// for (let i = 0; i < 4; i++) {
//       let cell = line[i].split('\,')
//       console.log(cell)
//     }
// console.log(rows[1].split('\,'))
// console.log(rows[2].split('\,'))
// console.log(rows[3].split('\,'))
// console.log(rows[4].split('\,'))

// for (let i = 0; i < 4; i++) {
//    console.log(rows[i].split('\,'))
//  }

// for (let i = 0; i < 4; i++) {
//    console.log(csv.split('\n'));
//  }

//   ****************************************************************************
// Part 2: Expanding Functionality
// let col = 4;



// function computeArea (width , height){
//    return "The rectangler area is : "+ width * height + " SQF";

// }

// computeArea(2,4)

// ***************************
// function planetHasWater(planet){

//    let plantlower = planet.toLowerCase();
//    if(plantlower == "earth" || plantlower == "mars"){
//       return true + " !!The planet has water";
//    }
//    else{
//       return false + " :( The planet has water";;
//    }

// }
// const planetHasWater = function(planet){
//    let plantlower = planet.toLowerCase();
//    if(plantlower == "earth" || plantlower == "mars"){
//       return true + " !!The planet has water";
//    }
//    else{
//       return false + " :( The planet has water";;
//    }
// }
// planetHasWater('eArth');
