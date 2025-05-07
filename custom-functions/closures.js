// function greetUser(name){
//     function makeGreet(){
//         return `hello` + name;
//     }

//     return makeGreet();
// }

// const greetUser1 = greetUser(`Alice`);
// const greetUser2 = greetUser(`Bob`);
// console.log(greetUser1);
// console.log(greetUser2);



// function outer(){
//     const outerVar = `hey i am the outerVar`;
   

//     function inner(){
//         return outerVar + `okay`;
//     }


//     return inner;
// }



// const innerFunc = outer();
// console.log(innerFunc());




// function easy(){
//     const tooEasy= `this shit too easy`;



//     function damnRight(){
//         return tooEasy;
//     }

//     return damnRight;
// }


// const isItEasy = easy();
// console.log(isItEasy());


// function closure(){
//     const bigClosure = `this is a closure`



//     function smallClosure(){
//         return bigClosure;
//     }


//     return smallClosure;
// }

// const nuClosure= closure();
// console.log(nuClosure());


// function outer(){
//     const outerVar = `i am the outer`;

//     function inner(){
//         const innerVar= `i am the inner`;

//         console.log(outerVar);
//         console.log(innerVar);
//     }

//     return inner;
// }

// const nuClosre= outer();
// nuClosre();




// function outer(){
//     const outerVar = `i am the outer`;

//     function inner(){
//         const innerVar= `i am the inner`;

//         return{
//             outer: outerVar,
//             inner: innerVar
//         };
//     }

//     return inner;
// }

// const nuClosre= outer();
// console.log (nuClosre());




// function createGreeting(greeting = ''){
//  const myGreet = greeting.toUpperCase();

//  return function (name){
//     return `${myGreet} ${name}` ;
//  }
// }


// const sayHello = createGreeting(`hello`);
// const sayHi = createGreeting(`hi`);

// console.log(sayHello(`wes`));

// console.log(sayHi(`wes`));



// function createSmile(smile = ''){
//  const newSmile = smile.toLocaleUpperCase();


//  return function (name){
//   return`${newSmile} ${name}`
//  }
// }

// const smile1= createSmile('smile');
// console.log (smile1(`katie`));





// function makeSoup (soup = ''){
//  const newSoup = soup.toLowerCase();


//  return function (name){
//    return `${newSoup} ${name}` ;
//  }
// }


// const typeOfSoup= makeSoup(`lightsoup`);
// const typeOfSoup1= makeSoup(`groundnutsoup`);

// console.log(typeOfSoup(`available`));
// console.log(typeOfSoup1(` not available`));



// function whereDaFuckDaFunction( isIt=''){
//  const nuFunction = isIt.toUpperCase();

//  return function(name){
//   return `${nuFunction} ${name}`;
//  }
// }

// const askUser = whereDaFuckDaFunction(`is it`);
// const askUser2 = whereDaFuckDaFunction(`is it`);
// const askUser3 = whereDaFuckDaFunction(`is it`);

// console.log(askUser(`Stacy`));
// console.log(askUser(`Becky`));
// console.log(askUser(`keisha`));



// function gameScore (gameName){
//     let score = 0;

//     return function win(){
//         score++;
//         return `your name ${gameName} score is ${score}`;
//     }
// }

// const hockeyGame = gameScore(`basketball`);
 




/**basic examples of closures */


function x (){
    const a =10;
    const b = 45;


    return function (){
        return a + b;
    }
}

const result = x()();
console.log(`your answer is ${result}`);


function sum (){
    const x = 55;
    const y = 55;




    return function (){
        return x + y;
    }
}

const result1 = sum()();
console.log (result1);




// function outer(){
//    const message = `hello`;


//    function inner(){
//     console.log(message);
//    }

//    inner();
// }

// outer();





function outer(){
    const message = `hello`;
 
 
    function inner(){
     console.log(message);
    }
 
    return {inner};
 }
 
 outer();



 



