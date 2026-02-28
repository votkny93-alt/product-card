const recolorFirstCardButton = document.getElementById('recolor-first-card-button');
const firstProductCard = document.querySelector('.product-card')
const blueHashColor = '#0000ff';

recolorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueHashColor;
})

const productCards = document.querySelectorAll('.product-card');
const recolorAllCardButton = document.getElementById('recolor-all-card-button');
const greenHashColor = '#00ff44'

recolorAllCardButton.addEventListener('click', () => {
  productCards.forEach(
    card => card.style.backgroundColor = greenHashColor
  )
})

const googleOpenButton = document.getElementById('open-google-button');
googleOpenButton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти на сайт Google?')

  if (answer === true) {
    window.open('https://google.com');
  } else {
    console.log('Пользователь отменил переход на Google')
  }
}

const changeTitleColorButton = document.getElementById('change-title-color-button');
const titleColor = document.querySelector('.header');

changeTitleColorButton.addEventListener('click', () => {
  titleColor.classList.toggle('red-text')

})

const title = document.querySelector('.header');

title.addEventListener('mouseover', () => {
  console.log(title.textContent);
});