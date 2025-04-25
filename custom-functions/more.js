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


//returning object//
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

