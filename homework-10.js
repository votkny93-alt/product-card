
const productCard = [
  { 
    name: "Увлажняющий мусс", 
    purpose: "для нормальной кожи", 
    description: "Глубоко увлажняют кожу лица, оставляя её мягкой и гладкой.", 
    image: "img/mousse.jpg", 
    ingredients: [ "активные натуральные комплексы", "витамины С, А, РР, В И Е", "солнцезащитные компоненты" ], 
    price: 2750 
  },
  { 
    name: "Увлажняющая маска", 
    purpose: "для нормальной кожи", 
    description: "Способствует удерживанию влаги в верхних слоях кожи.", 
    image: "img/mask.jpg", 
    ingredients: [ "воски", "минералы", "масла" ], 
    price: 3500 
  },
  { 
    name: "Гель для умывания", 
    purpose: "для нормальной кожи", 
    description: "Интенсивно очищает, не повреждает защитный барьер кожи.", 
    image: "img/gel.jpg", 
    ingredients: [ "минералы", "витамины С, А, РР, В И Е", "солнцезащитные компоненты" ], 
    price: 1650 
  },
  { 
    name: "Подарочный набор №1", 
    purpose: "для нормальной кожи", 
    description: "Набор, состоящий из увлажняющего крема и маски.", 
    image: "img/gift-set1.jpg", 
    ingredients: [ "воски", "минералы", "масла" ], 
    price: 4750 
  },
  { 
    name: "Подарочный набор №5", 
    purpose: "для нормальной кожи", 
    description: "Весь набор средств Invisible symphony, крем, маска, мусс и гель для умывания.", 
    image: "img/gift-set2.jpg", 
    ingredients: [ "воски", "минералы", "масла" ], 
    price: 7520 
  }
];
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
      if (ingredientsString) { 
        ingredientsString.textContent = product.ingredients.join(', '); 
      } 
      // состав li
      const compoundList = productClone.querySelector('.product-card__compound'); 
      if (compoundList && Array.isArray(product.ingredients)) { 
        compoundList.innerHTML = ''; 
        const fragment = document.createDocumentFragment(); 
        
        product.ingredients.forEach(ingredient => { 
          const li = document.createElement('li'); 
          li.className = 'product-card__compound-item'; 
          li.textContent = ingredient; 
          fragment.appendChild(li); 
        });  
        compoundList.appendChild(fragment); 
      } 
            //  картинка
      const imgElement = productClone.querySelector('.product-photo'); 
      if (imgElement) { 
        imgElement.src = product.image; 
        imgElement.alt = product.name; 
      } 
            // цена
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
renderProducts(chosenCount, productCard); 

const productDescriptionsMap = productCard.reduce((accumulator, product) => { 
  accumulator[product.name] = product.description; 
  return accumulator; 
}, {});


