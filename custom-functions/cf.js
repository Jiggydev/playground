function calculateBill() {
    const price = 100 * 2.4;
    return price;
}

const myPrice = calculateBill();
console.log(`Your total is $${calculateBill()}`);




function billToPay(mealAmount, taxRate) {
    const totalBill = mealAmount * (1 + taxRate);
    return totalBill;
}


const myTotal = billToPay(1000, 0.5);
const myTotal2 = billToPay(568, 0.5);

console.log(myTotal, myTotal2);


function sayHiTo(firstName) {
 return `hello ${firstName}`;
}

const greeting = sayHiTo(`AJ`);
console.log (greeting);


function subtract(x, y){
    return x-y;
}

const answer = subtract(5,25);
console.log(answer);


function add(a, b){
    return a + b;
}

const answer2= add(500, 189);
console.log(answer2)






function singHappyBirthday(userName, age){
    console.log (`happy birthday to you ${userName}`);
    console.log (`you are ${age}years old!`);
 }
 
 
 
 const happyBirthday = singHappyBirthday('yasmine', 27);
 console.log(happyBirthday);



 function playHappyBirthday(userName, age){
    return (`happy birthday to you ${userName} you are ${age}`);
    
 }
 
 
 
 const litBirthday = playHappyBirthday('jerady', 28);
 console.log(litBirthday);



 function divide(w,y,f){
    return w * (y-f);
 }

let result = divide(500000, 1000, 3);
console.log(result);



function gasMeUp(firstName){
    return (`yo fam you are mad leng innit. nah ${firstName} deep it you are actually too leng`)
}

let sayIt = gasMeUp('jiggy');
console.log(sayIt);


function whereDaFuckDaFunction(place){
    return `da function is in ${place} tonight!!!!`;
}

const functionPlease = whereDaFuckDaFunction('phuket')
console.log(functionPlease);



function isEven(number){
    if(number % 2===0){
        return true;
    }

    else{
        return false;}
    
}


console.log(isEven(200));
console.log(isEven(250));
console.log(isEven(251));


function isOdd(number){
    if (number % 1 === 1){
        return true;
    }

    else{
        return false;
    }
}


console.log(isOdd(3));


function isEmailValid(email){
  if(email.includes('@')){
return true;
  }

else{
    return false;
}
}


console.log(isEmailValid('jeradybrew18@gmail.com'));
console.log(isEmailValid('jeradybrew18gmail.com'));


function isEmailValidd(email2){
 if(email2.includes('@')){
    return true;
}
  
 else{
    return false;
 }
}

console.log(isEmailValidd('haweezy@gmail.com'));
console.log(isEmailValidd('haweezygmail.com'));



function addNumber(x2,y2){
    return `your total is ${x2+y2}`;
}

const yourNumber=(addNumber(55, 76));
console.log(yourNumber);



function doctorize(name = 'silly goose'){
    return `Dr ${name}`;
}

function yell(name){
    return `HEY ${name}`;
}

console.log(doctorize);

console.log(yell('jerady'));

console.log(yell(doctorize('jerady')));



function jiggy(name){
 return `meet ${name}`;
}


function greeting2(name){
    return `hey everyone, ${name}`;
   }


console.log(greeting2(jiggy('jerady')));





function sayHello(name='silly goose'){
 return `hello ${name.toUpperCase()}`;
}

console.log(sayHello);



function checkEmail(email3){
 if(email3.includes('@')){
    return true;
 }

 else{
    return false;
 }
   
}


console.log(checkEmail('hawa@gmail.com'))
console.log(checkEmail('hawagmail.com'))




function shoutHappyBirthday(name){
    return `happy birthday ${name}!!! you are old today!`;
}


const itsYourBirthday= shoutHappyBirthday('yasmine');
console.log(itsYourBirthday);



function addTwoNumbers(x, y){
    return x + y;
}

const newTotal= addTwoNumbers(34, 6);
console.log(newTotal)




function addTwoNumbers1(x, y){
    const total = x+y;
    return total;
}

const newTotal1= addTwoNumbers1(34, 6);
console.log(newTotal1)


function isEvenNumber2(number){
    if(number % 2===0){
        return true;
    }
    else{
        return false;
    }
}


console.log(isEvenNumber2(22));




//callback functions 



// //click callback
//  const button = document.querySelector(`.click`); //dom selector

//  button.addEventListener(`click`, cow.moo);



// const button = document.querySelector('.click');

// function clackClickitty(){
//     console.log(`clickityclack`);
// }

// button.addEventListener('click', clackClickitty);


//time out function



const button = document.querySelector('.baby');

button.addEventListener('baby', function(){
    console.log(`this infant can cryyyyy`);
}

);