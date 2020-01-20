const input = document.querySelector('input');
const passwords = ['jedEN', 'DwA'];
const messages = ['super', 'dziala'];

const LCPassword = passwords.map(password =>
    password.toLowerCase()
);

const showMessage = (e) => {
    const text = e.target.value.toLowerCase();

    for(let i = 0; i < LCPassword.length; i++) {
        if(text === LCPassword[i]) {
            document.querySelector('div').textContent = messages[i];
        }
    }
}

input.addEventListener('input', showMessage)