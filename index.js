// Fizz Buzz
// .............................................................
// Loop through all numbers from 1 to 100.
for(let x = 1; x<=100;x++){

    if (x%3==0 && x%5==0){
        console.log(`Fizz - Bizz The number ${x} is divisible by 3 & 5 `)
 
    }   
    else if(x%3==0){
        console.log(`Fizz - The number ${x} is divisible by 3`)
    }
    else if (x%5==0 ){
        console.log(`Bizz - The number ${x} is divisible by 5`)
 
    } 
    else{
        console.log(x)
    }

}

// .............................................................