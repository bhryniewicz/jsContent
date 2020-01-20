const input = document.getElementById('pass');

const passwords = ['user', 'wiosna', 'ania'];
const messages = ['wyjechałem essa', 'piękna pora roku', 'fajny styl masz'];
const div = document.querySelector('.message')

input.addEventListener('input', (e) => {
    div.textContent = '';
    // console.log(e.target.value);
    // console.log(this.value);
    const text = e.target.value;
    // console.log(text);

    passwords.forEach( (password, index) => {
        if(password === text) {
            // console.log(password, index)
            div.textContent = messages[index];
            e.target.value = '';
        }
    });
});

input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
});

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
});

   // if( password === e.target.value ) {
    //     div.textContent = message;
    //     e.target.value = '';
    // }
    // else {
    //     div.textContent = '';
    // }