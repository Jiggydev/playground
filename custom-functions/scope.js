//local scope. same variable names are okay as long as they are in different scopes//
function person(){
    let x = 1;
    console.log(x);
}


function person2(){
    let x = 2;
    console.log(x);
}

person2();




//global scopes are variables declared outside of the function//


function Bird(){
    console.log(`bird`);
}




function Bird2(){
    console.log(`bird`);
}


Bird2();


//functio scope//

function fool(){
    if(true){
        var heroOne = `iron man`;
        const heroTwo= `superman`;
    }
}


console.log(`heroTwo`);

fool();


//block scope//

if(true){
    var a = 10;
    console.log(a);
}


if(true) console.log(`hi dcn;oicnipd'c`);



//block scooped//
// {
//     var a = 10;
//     const b = 20;
//     let c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }


// console.log(a);
// console.log(b);


const b = 200; //hoisted and shadows b inside the scope

{
    var a = 10;
    const b = 20;
    let c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}



console.log(b);




var n = 10

function sumUp(num){
return  num * num;
}


var newSum = sumUp(n);
console.log(newSum);
