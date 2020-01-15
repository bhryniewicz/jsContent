// tutaj rozwiązanie

const btn = document.querySelector('button');
const list = document.querySelectorAll('li');

let size = 10;


// btn.addEventListener('click',() => {
    
//     size++;

//     for(let i = 0; i < list.length; i++) {
//         list[i].style.fontSize = `${size}px`;
//         list[i].style.display = "block";
//     }
//     // for each (list in itemList) {
//     //     itemList.style.fontSize = `${size}px`;
//     //     itemList.style.display = "block";

//     // };
    
     
// });

btn.addEventListener('click',() =>{
    
    list.forEach((liItem) => {
        liItem.style.display = "block";
        liItem.style.fontSize = `${size}px`;
    });
    
    size++;
});

