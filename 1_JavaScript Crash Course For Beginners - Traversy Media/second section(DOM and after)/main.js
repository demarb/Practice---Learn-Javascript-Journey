console.log(window);

//Working with the dom
//Selectors
    //1.Single element selectors //Will select the first element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1')); 


    //2. Multiple element selectors
const items = document.querySelectorAll('.item');
console.log(items);
console.log(document.getElementsByClassName('item'));


//looping through selectors returned values
items.forEach((item) => console.log(item));


//DOM Manipulation
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerText = "Brad";
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';


const btn = document.querySelector('.btn');
btn.style.background = "red";


//Events
btn.addEventListener('click', (e) => { //other events include mouseover, mouseout
    e.preventDefault();
    console.log(e);
    console.log(e.target);
    console.log(e.target.className);
    console.log('click');


    document.querySelector('#my-form').style.background = 'green';

});
