//functions-regular//

function shopBrands(brands){
    return `shop these ${brands} now`;
}



//function expression//

let highBrands = function shopBrands2(brands){
    return `shop these ${brands} now`;
}

console.log(highBrands(`zeno's`));


let greetUser = function(name){
    return `hi ${name} how are you today?`
     ;
}

console.log(greetUser(`yasmine`));


//arrow functions//

function inchToCM(inches){
    return inches * 2.54;
}

let yourInch =  inchToCM(45);
console.log(yourInch)




function metreToKM(metres){
    return metres * 0.001;
}


console.log(metreToKM(4500))


//function expression//
const metreToKM2 = function (metres){
    return metres * 0.001;
}


console.log(metreToKM2(500))



//arrow functions//

const metreToKM3 = (metres) => metres * 0.001; //implicit return//



console.log(metreToKM3(11520));



// function add(a, b=3){
//     const total = a + b;
//     return total;

// }


// const add = function(a, b=3){
//     const total = a + b;
//     return total;

// }

// const add = function(a, b=3){
//     return a + b;

// }



const add2 = (a,b=3) => a + b;




//immediately invoked function expression//
(function(){
    console.log(`running the anon function`);
    return `you are cool`;

    
})();



function beatYasmine (a,b){
    return a+b;                                                                                                                     
};

const result= beatYasmine(23,77);
console.log(result);



const newFunction = function(stuff){
    return `where da fuck da functionnnnnn ${stuff}`;
};


const nuuFunction = newFunction(`where`);
console.log(nuuFunction);





const newFunction2 = (stuff)=> `where da fuck da functionnnnnn ${stuff}`;



//methods in javascript//


let cat = {
 meow: function(){
    console.log(`meowwww`)
 }
};


cat.meow();





//function expression//


const smokeSome = function(strain){
 return `this is a ${strain} strain`;
};

const newStrain = smokeSome (`sativa`);
console.log(newStrain);



//anon fucntion//

// function(name){
//     return `this is an anonymous function for ${name}`;
// }



const smokeSome2 = (strain) => `this is a ${strain} strain`;



//returning an object//

// function makeBaby(first, last){
//  const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//  }
//  return baby;
// };


// const makeBaby = (first, last) =>{
//     const baby = {
//        name: `${first} ${last}`,
//        age: 0,
//     }
//     return baby;
//    };




// const makeBaby = (first, last) =>{
//     return {
//        name: `${first} ${last}`,
//        age: 0,
//     }
//    };


//const makeBaby = (first, last) => ({name: `${first} ${last}`,age: 0});




//IIFE
(function(){
    console.log(`running the anon function again`);
}) ();





//method


let dog = {
    dogBark: function(){
     console.log(`woof`);
    }
};



dog.dogBark();




// const cat2 ={
//     meow: function(){
//         console.log(`soft meoooowwwww`);
//     }
// }


// cat2.meow();


//short hand method
const cat2 ={
    meow(){
        console.log(`soft meoooowwwww`);
    }
}

cat2.meow();





const cat3 ={
    meow(){
console.log(`this is a cat meowwingggg`);
    }
}

cat3.meow();




const cow ={
    moo(){
        console.log (`big cow moooing innit`);
    }
}


cow.moo();






setTimeout(cow.moo, 2000);


//alternatively

setTimeout(function(){
    console.log(`let's get this schmoneyyyyyy`);
}, 3000)




// //method
// const makeBaby3 = {
//   cry(){
//     console.log(`this baby be cryingggggg`);
//   }
// }


// makeBaby3.cry();






//more callback examples- timeouts

function sayHello(callback){
    console.log(`hello there`)
    callback();
 }

 sayHello(leave); //after executing sayHello, then execute the leave function


setTimeout(sayHello, 1000);


// //click callback

// const button = document.querySelector('.swoosh');

// button.addEventListener('swoosh', sayHello);



function leave(){
    console.log(`please leave immediately`);
}



sum(displayPage, 46, 99900);


function sum(callback, a, b){
    const result= a + b;
    callback(result);
}


function displayResult(result){
    console.log(result);
}


function displayPage(result){
document.getElementById("myH1").textContent = result;
}





sumUp(displayOnPage, 40000)


function sumUp(callback, x, y=2){
    const total = x * y;
    callback(total);

}


function displayOnPage(total){
    document.getElementById("myH2").textContent = total;
}



minus(displayOnPage2, 5500, 23);

function whoIsCalling(callback, j, y){
const minus = j - y;
callback (minus);
}


function displayOnPage2(minus){
    document.getElementById("myH3").textContent = minus;
}




