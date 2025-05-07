// sayHi();

// function sayHi(){
//     console.log(`hey!`);
// }



// function a (){
//     var b = 10;
//  c();
// function c(){  
// }
// }

// a();

// console.log(b);




/**can run function from outside the scope */

// function sayHello (){
//     let name = `Alice`;

//     console.log(`hello` + name);
// }


// sayHello();


/**can't call use the variable from outside the scope */
// function greet (){
//     let name = `ken`;
    
// }

// console.log(`hello` + name);

// greet();


/**you can access the variable outside of the scope as long as you return it */
// function outer(){
//     let name = `Ama`;
//     return name;
// }


// const newName = outer();
// console.log(newName);




//**can run nested functions as long as variable is being accessed inside scope */
// function outside(){
//     let name = `James`

//     function inside(){
//         console.log(`hello` + name);
//     }
//     inside();
// }

// outside();



//**can't run nested functions if variable is being accessed outside  scope unless it's returned */


// function outside(){
//     let name = `James`


//     function inside(){
//       console.log (`hiii` + name)
//     }


// inside();
//    return name
// }


// const newName = outside();
// console.log(`hiiiiiiiiiiiii` + newName);





function outside(){
    let name = `James`


    function inside(){
      return name;
    }


 return inside();
  
}


const newName = outside();
console.log(`hiiiiiiiiiiiii` + newName);



//**exercises */

// function greetUser() {
//     let name = "kweku";
  
//     function makeGreeting() {
//       return "Welcome back, " + name;
//     }
  
//     return makeGreeting();
//   }
  
//   const message = greetUser();
//   console.log(message);




//   function askName(){
//     let name = `Doofus`;

//     function yourName (){
//         return `your name is` + name;
//     }

//     return yourName();
//   }
  
//   const newMessage = askName();
//   console.log(newMessage);




// function checkName(){
//     let name = `your name is correct`


//     function isNameCorrect(){
//         return `yes correct` + name;
//     }

//     return isNameCorrect();
// }

// const correctName= checkName();
// console.log(correctName);



function checkName(){
    let name = `doofus`
    return `your name is ${name}`
}

const nuName= checkName();
console.log(nuName);


