// Please write a component that has a button in it (with text Add) and number 0 next to it. When you click on a button, it adds 1 to the number. 
// So after first click, number changes from 0 to 1. On next click, from 1 to 2 and so on. 

// select button and add event listener
const addBtn = document.querySelector('button');
const showNum = document.querySelector('h1')
console.log(showNum)

let num = 0;
addBtn.addEventListener('click', () => {
  const numIncrement = () => {
    num++;
    console.log(num);
    showNum.innerHTML = `${num}`;
  }
  numIncrement();
});