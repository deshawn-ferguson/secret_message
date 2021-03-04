const form = document.querySelector('form');
const input = document.querySelector('#msg-input');
const renderInput = document.querySelector('#link-input');
const { hash } = window.location;

const msg = atob(hash.replace('#', ''));

if (msg) {
    document.querySelector('#form-div').classList.add('hide');
    document.querySelector('#render-div').classList.remove('hide');
    document.querySelector('.render-h1').innerHTML = `${msg}`
}


form.addEventListener('submit', (e) => {
    if (input.value === '') {
        alert('Please Enter Your Message')
    } else {
    e.preventDefault();
        const encodedText = btoa(input.value)
        document.querySelector('#form-div').classList.add('hide');
        document.querySelector('#link-div').classList.remove('hide');
        renderInput.value = `${window.location}#${encodedText}`;
        renderInput.select();
    }
})
