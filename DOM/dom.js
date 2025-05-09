// const p = document.querySelector('p');
// console.log(p);


// const changeButton = document.querySelector('.buttons');

// changeButton.textContent = `javascript is so cool`;

// document.title = "my website";

// console.log(document);






// const subDiv = document.querySelectorAll (`.items`);

// subDiv.textContent = "well would you look at that";


// const checkings = document.querySelectorAll(`.stuff`);


// checkings.forEach(checking =>{
// checking.style.backgroundColor = "yellow";
// });




// // function gasMe (){
// //     let score = 0;



// //     function increaseScore(points) {
// //       score += points;
// //       console.log(points);
// //     }



// //     function decreaseScore(points) {
// //         score -= points;
// //         console.log(points);
// //       }



// //       function scoreIs (){
// //         return score;
// //       }

      

// //       return {increaseScore, decreaseScore, scoreIs};
// // }


// // const gameScore = gasMe();

// // gameScore.increaseScore (100);
// // gameScore.increaseScore (400);
// // gameScore.increaseScore (900);
// // gameScore.decreaseScore (900);


// // console.log(`your final score is ${gameScore.scoreIs()}`);



// const sweetFruits = document.querySelectorAll(`.fruits`);


// sweetFruits.forEach(sweetFruit =>{
//     sweetFruit.style.background= "green";
// });



// console.log(sweetFruits);



// const pizzaList = document.querySelector(`.pizza`);

// console.log(pizzaList);


// pizzaList.insertAdjacentText(`afterbegin`, '🍕');




//**classlist-add method */


const newButton = document.getElementById(`myButton`);

newButton.classList.add(`enabled`);


const button = document.getElementById(`yourButton`);

button.classList.add(`enabled`);

//**classlist-remove method */
button.classList.remove(`enabled`);


// button.addEventListener('mouseover', event =>{
// event.target.classList.add(`hover`);
// });

// button.addEventListener('mouseout', event =>{
//     event.target.classList.remove(`hover`);
//     });


//**alternatively use the toggle method on the classlist property */

button.addEventListener('mouseover', event =>{
    event.target.classList.toggle(`hover`);
    });

    button.addEventListener('mouseout', event =>{
        event.target.classList.toggle(`hover`);
        });



        //**classlist-replace method */