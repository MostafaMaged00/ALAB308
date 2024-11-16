let arr1 = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }
]

// get headers of keys from first line

const headers = Object.keys(arr1[0])
const vals = Object.values(arr1[0])
console.log(headers)
console.log(vals)