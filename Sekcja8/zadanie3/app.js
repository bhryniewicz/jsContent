const btn = document.querySelector('button');
const div = document.querySelector('div');

const imiona = [];

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const input = document.querySelector('input');
    const name = input.value;
    if (input.value.length) {

        for (imie of imiona) {
            if (imie === name) {
                return
            }
        }
        imiona.push(name);
        div.textContent += `${name}, `;
        input.value = '';
    }
})