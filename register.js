let user = null;

const modal = document.getElementById('registrationModal');
const openBtn = document.getElementById('openModalBtn');
const overlay = document.getElementById('modalOverlay');
const modalContent = document.getElementsByClassName('modal-content');
const closeBtn = document.getElementById('closeModalBtn');
const registerForm = document.getElementById('registerForm');

openBtn.addEventListener('click', () => {
  modal.classList.add('modal-showed')
});

function closeModal() {
  modal.classList.remove('modal-showed');
  registerForm.reset();
}

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

registerForm.addEventListener('submit', function (event) {
  event.preventDefault();

  if (!registerForm.checkValidity()) {
    alert('Заполните все обязательные поля корректно!');
    return;
  }

  const password = document.getElementById('regPassword').value;
  const confirmPassword = document.getElementById('regConfirmPassword').value;
  if (password !== confirmPassword) {
    alert('Пароли не совпадают!');
    return;
  }

  user = {
    name: document.getElementById('regName').value,
    lastName: document.getElementById('regLastName').value,
    birthDate: document.getElementById('regDate').value,
    login: document.getElementById('regLogin').value,
    password: password,
    createdOn: new Date()
  };

  closeModal();
  alert('Регистрация прошла успешно!');
});
























registerForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const password = document.getElementById('regPassword').value;
  const passwordConfirm = document.getElementById('regPasswordConfirm').value;
  if (!registerForm.checkValidity()) {
    alert('Регистрация отклонена! Заполните все обязательные поля корректно.');
    return;
  }

  user = {
    name: document.getElementById('regName').value(),
    lastName: document.getElementById('regLastName').value(),
    birthDate: document.getElementById('regDate').value(),
    login: document.getElementById('regLogin').value(),
    createdOn: new Date()
  }
});

