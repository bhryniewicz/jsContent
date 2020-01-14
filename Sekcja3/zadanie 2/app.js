const btn = document.querySelector('button');

let number = 1;

btn.addEventListener('click', () => {

    const li = document.createElement('li');

    li.textContent = number;

    const list = document.querySelector('ul');

    if(number % 3 == 0) {

        li.classList.add('big')
    }

    list.appendChild(li);

    number += 2;
});