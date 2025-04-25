//regular function//


// function doctorize(firstname){
// return `hello Dr ${firstname}`;
// }



function iMissHer(prick){
    return`yeah but get back to work you ${prick}`;
}


//anonymous function//

// function(lockIn){
//     return`${lockIn} and show her you changed and are a better person`;
// }


// function(firstName){
//     return`hello Dr ${firstName}`;
// }



//function expression//

// const doctorize= function(firstName){
// return`hello Dr ${firstName}`;
// };


// const summarizeThis= function(getSummary){
//  return`here is your ${getSummary}`;
// };



//arrow functions//

// const thisFunction =(clearBit) => {
//     console.log(`this is a ${clearBit}`);
// };


const thisFunction =(clearBit) => (`this is a ${clearBit}`);

// const inchToCM =(inches)=>{
//     return inches * 2.54;
// }

const inchToCM =(inches)=> inches * 2.54;



const addNumbers=(a, b=3) => a + b;


//returning object// //objects aee a collection of related properties and/or methods
// function makeBaby(first, last){
//  let baby ={
//     name: `${first} ${last}`,
//     age: 0
//  }
//  return baby;
// };

// const newBaby = (first, last) => {
//     let baby ={
//        name: `${first} ${last}`,
//        age: 2
//     }
//     return baby;
//    };


   const newBaby = (first, last) => ({ name: `${first} ${last}`, age: 2});


   //IIFE//

   (function(){
    console.log(`you are cool`);
   })();


   (function(age){
    console.log(`you are still cool at ${age}`);
   })(55);



   //methods// a function that lives inside an object

   const wes = {
    name:`wes bos`,
    sayHi: function(){
        return`hey wes`;
    }
   }

   const jiggy ={
    height: 32,
    age: 27,
    youAre: function(){
        return`you are so tall`;
    }
   }


   //shorthand method
const dev = {

    name: `micky`,
    age: 32,
    nationality: `china`,
    yellHi(){
        console.log(`hey wessssss`);
       }  
}


const person ={
    firstName: `spongebob`,
    lastname: `squarepants`,
    age: 30,
    sayHello: function(){
        return `hellooooooo spongy`
    }
};


const person1 ={
    firstName: `patrick`,
    lastname: `mcguire`,
    age: 10,
    sayHello: () =>  `hellooooooo mcguire`,
    
};



const person3 ={
    name: `mark`,
    age: 23,
    isEmployed: false,
    yellYo (){
        console.log(`yooooooo mark`);
    }
}

//callback functions//


const button = document.querySelector(`.clickMe`);


button.addEventListener(`click`, person3.yellYo);
   


setTimeout(person3.yellYo, 1000);




//variable scope//


//LOCAL SCOPE//

function2();

function function1(){
    let x = 1;
    console.log(x);
}


function function2(){
    let x = 2;
    console.log(x);
}




//GLOBAL SCOPE//


let a=75; //variable declared outside of function makes it a global scope//

unction2();

function unction(){
   console.log(a);
}


function unction2(){
    console.log(a);
 }