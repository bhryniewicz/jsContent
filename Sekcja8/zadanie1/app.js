const btn = document.querySelector('button');
const div = document.querySelector('div');

const imiona = ['bartek', 'natalia', 'mateusz', 'duda', 'gfewgfwe', 'index'];

const nameGenerator = () => {
    let random = Math.floor(Math.random() * imiona.length)
    div.textContent = imiona[random];
}

btn.addEventListener('click', nameGenerator);