import { Modal } from './Modal.js';
import { Form } from './form.js'

let user = null;

const modal = document.getElementById('registrationModal');
const openBtn = document.getElementById('openModalBtn');
const overlay = document.getElementById('modalOverlay');
const modalContent = document.getElementsByClassName('modal-content');
const closeBtn = document.getElementById('closeModalBtn');
const registerForm = document.getElementById('registerForm');

const regModal = new Modal('registrationModal');
const myForm = new Form('registerForm');

openBtn.addEventListener('click', () => {
  regModal.open();
});

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();

    if (myForm.isValid) {
    const data = myForm.getValues;
    console.log(data);

    myForm.reset()

  regModal.close();
  alert('Регистрация прошла успешно!');
    } else {
    alert('Пожалуйста, заполните все обязательные поля корректно!');
    }
});





