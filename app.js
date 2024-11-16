const csv3 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
//convert a string to array of strings
let arr1 = csv3.split("\n");

// print the heading of the tabel the first index of array
console.log(arr1)

//get first line
let firstLine = arr1[0]
let heading =firstLine.split("\,")
console.log( heading[0])






