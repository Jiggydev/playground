

// const fruits = document.getElementById (`fruits`);

// const firstKids = fruits.firstElementChild;
// firstKids.style.backgroundColor = "yellow";



const allUl = document.querySelectorAll(`ul`);

allUl.forEach(list =>{
    const lastChild = list.lastElementChild;
    lastChild.style.backgroundColor = "yellow";
})


console.log(allUl);