//fizz buzz

//,multipli de 3 fizz

// multipli de 5 buzz

// multipli de 3 y 5 fizzbuzz


for(let i = 0; i <=100; i++){
    if(i % 5 === 0 && i % 3 === 0 ){
        console.log(`${i} fizzbuzz`)
    }else if(i % 3 === 0 ){
        console.log(`${i} fizz`)
    }else if(i % 5 === 0){
        console.log(`${i} buzz`)
    }
}