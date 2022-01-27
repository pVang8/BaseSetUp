
let input = document.querySelector('#input');
let input2 = document.querySelector('#input2');
let text = document.getElementById('text');
let text2 = document.getElementById('text2');
let text3 = document.getElementById('text3');
let btn = document.getElementById('btn');

//need this to keep value on the page
text.textContent = localStorage.getItem('notes');
text2.textContent = localStorage.getItem('num2');
text3.textContent = localStorage.getItem('total');
console.log(text.textContent);

    

btn.addEventListener('click', function(e){
    input2.value = ' ';
})


let cancel
input.addEventListener('keyup', event =>{
    text.textContent = input.value;
    if (cancel) {
        clearTimeout(cancel);
        
        
        
    }
    cancel =setTimeout(()=> {
        console.log(event.target.value);
        
    }, 1000)
    // text.textContent = input.value;
    localStorage.setItem('notes', event.target.value);
   
})
input2.addEventListener('keyup', event =>{
    if (cancel) {
        clearTimeout(cancel);
        
        
        
    }
    cancel =setTimeout(()=> {
        console.log(event.target.value);
        
    }, 1000)
    localStorage.setItem('num2', event.target.value);
    text2.textContent = input2.value;
    text3.textContent = localStorage.getItem('notes') - localStorage.getItem('num2');

    let total = [];
total.push(text3.textContent);
localStorage.setItem('total', JSON.parse(total));
    

    
})

console.log(input.value);
console.log(input2.value);

let total = [];
total.push(text3.textContent);
localStorage.setItem('total', JSON.stringify(total));


