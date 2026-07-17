import { productCards } from './data.js';

const productDescriptionsMap = productCards.reduce((accumulator, product) => {
  return [
    ...accumulator,
    { [product.name]: product.description }
  ];
}, []);

// ищем классы 
const productCardTemplate = document.getElementById('product-card-template');
const productList = document.querySelector('.product-list');

// функция (Сколько карточек показать)
function showCards() {
  while (true) {
    const input = prompt('Сколько карточек показать? От 1 до 5');
    const count = parseInt(input, 10);
    if (!isNaN(count) && count >= 1 && count <= 5) {
      return count;
    }
    alert("Ошибка! Пожалуйста, введите корректное число от 1 до 5.");
  }
}
// функция (РЕНДЕР)
function renderProducts(count, arrayCards) {
  if (!productCardTemplate || !productList) return;

  productList.innerHTML = '';

  arrayCards.forEach((product, index) => {
    if (index < count) {
      // Создание клона 
      const productClone = productCardTemplate.content.cloneNode(true);
      // Карточки для наполнения HTML
      productClone.querySelector('.product-name').textContent = product.name;
      productClone.querySelector('.product-purpose').textContent = product.purpose;
      productClone.querySelector('.product-description').textContent = product.description;

      const ingredientsString = productClone.querySelector('.product-ingredients');
      if (ingredientsString);
      
      // состав li
      const compoundList = productClone.querySelector('.product-card__compound');
      {
        compoundList.innerHTML = '';
        const fragment = document.createDocumentFragment();

        product.ingredients.forEach(ingredient => {
          const li = document.createElement('li');
          li.className = 'product-card__compound-item';
          li.textContent = ingredient;
          fragment.appendChild(li);
        });
        compoundList.appendChild(fragment);
        compoundList.prepend('Состав: ');
      }
      //  картинка
      const imgElement = productClone.querySelector('.product-photo');
      {
        imgElement.src = `img/${product.image}.jpg`;
        imgElement.alt = product.name;
      }
      // цена
      const priceTextElement = productClone.querySelector('.product-card__price-text');
      if (priceTextElement) {
        priceTextElement.textContent = 'Цена';
      }
      const priceElement = productClone.querySelector('.product-card__price-item');
      if (priceElement) {
        priceElement.textContent = product.price ? `${product.price.toLocaleString()} ₽` : '—';
      }
      //  поставить карточку в html
      productList.appendChild(productClone);
    }
  });
}
//  функция опроса
const chosenCount = showCards();
renderProducts(chosenCount, productCards);


