const options = ['opcja1', 'opcja2'];

const addOption = (e) => {
    e.preventDefault();
    options.push(input.value);
    input.value = '';
}

const deleteOptions = (e) => {
    e.preventDefault();
    options.length = 0;
}

const showAdvice = (e) => {
    e.preventDefault();
    const h1 = document.querySelector('h1');
    const random = Math.floor(Math.random() * options.length)

    h1.textContent = options[random];
}

const showOption = function () {
    alert(options);
}

const reset = document.querySelector('.clean');
const add = document.querySelector('.add');
const show = document.querySelector('.showAdvice');
const input = document.querySelector('input');
const legend = document.querySelector('.showOptions')

add.addEventListener('click', addOption);
reset.addEventListener('click', deleteOptions);
show.addEventListener('click', showAdvice)
legend.addEventListener('click', showOption)