//regular function


function doctorize(firstName){
return `this is the new guy Dr ${firstName}`;
}


const newDoctor= doctorize(`Danny`);
console.log(newDoctor);



//anonymous function: function without a name

// function(newGuy){
//     return `hello ${newGuy}`;
// }



//function expression: the function is stored as a value in a variable

const bullsEye = function(nigga){
    return `this is a function expression ${nigga}`;
}

const hitTarget = bullsEye(`frosty`);
console.log(hitTarget);



// arrow functions : always stick arrow functions in a variable

const bullsEye2 = (nigga) => {
    return `this is a function expression ${nigga}`;
}


const bullsEye3 = (nigga) => `this is an arrow function ${nigga}`;

const inchesToCM = (inches) => inches * 2.54;



const getSum = (a, b=3) => a + b;


//returning an object

// function makeBaby(first, last){
//     const baby = {
//         name: `${first}, ${last}`,
//         age: 0
//     }

//     return baby;
// }


const makeBaby = (first, last) => ({ name: `${first}, ${last}`, age: 0 });





// function makeCoffee(beans, milk, sugar){
//     const coffee = {
//         ingredient1: `${beans}`,
//         ingredient2: `${milk}`,
//         ingredient3: `${sugar}`
//     }


//     return coffee;
// }



function makeCoffee(beans, milk, sugar){
   return {
        ingredient1: `${beans}`,
        ingredient2: `${milk}`,
        ingredient3: `${sugar}`
    }
}



//IIFE

(function(){
    console.log(`you are so cool`);
    return `you are so cool`;
})();



(function(){
    console.log(`pick up the phone`);
})();



//Methods are functions that live inside an object

const jerady = {
    name: `jerady mensah`,
    sayHi: function(){
        console.log(`hi`);
    }    
}


const girls = {
    sexuality: `gay`,
    youAre: function(){
        console.log(`you are gay`);
    }
}


// const bag = {
//     areYouBroke: function(){
//         return `yes you are broke`;
//     },
//     lastForever: function(){
//         return `no it won't last forever. you will be rich next year actually`;
//     }
// }


//shorthand method = get rid of the keyword function and colon


const bag = {
    areYouBroke(){
        return `yes you are broke`;
    },
    lastForever(){
        return `yes it won't last forever. you will be rich next year actually`;
    }
}


//arrow function that doesn't take arguments in a method * rarely use this 

 whisperHi: () => {
        console.log (`hiiiii im a mouse`);
    }


//callback functions 

//click callback * remember to console.log either inside the function or in a wrapper function

// const button = document.querySelector('.swoosh');

// button.addEventListener('click', function(){
//     console.log(girls.youAre());
// });


//another way of calling back. just create the function directly and pass it into the envent listener
function niceJob(){
    console.log(`good job jjjjj`)
}



const button = document.querySelector(`.swoosh`);

button.addEventListener(`click`, girls.youAre);


const button2 = document.querySelector(`.clickMe`);

button2.addEventListener(`click`, jerady.sayHi);


//Timer callback
setTimeout(girls.youAre, 2000);

//you can also pass the timer callback an anon function

setTimeout( function(){
    console.log(`you suck ballsssssss`);
} ,2000);














