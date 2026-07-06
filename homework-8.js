const userProfile = {
  firstName: "Mavlid",
  lastName: "Ilyasov",
  email: "mavlid.ilyasov@example.com",
  company: "Samolet Group",
  position: "Lead Product Manager",
  age: 32,
  country: "Russia",
  city: "Moscow",
};

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2024,
  color: "black",
  transmission: "automatic"
};

car.ownerName = userProfile.firstName;

// console.log(car);


function checkAddMaxSpeed(vehicleObject) {
  if ('maxSpeed' in vehicleObject) {
    return;
  }
  vehicleObject.maxSpeed = 220;
}
checkAddMaxSpeed(car);

// console.log(car); 


function greet(userProfile) {
  // console.log(`Привет, ${userProfile.firstName}, ${userProfile.lastName}`)
}

greet(userProfile)

const products = ["Молоко", "Хлеб", "Яблоки", "Сыр", "Куриное филе"];

// console.log(products);

const library = [
  {
    title: "Властелин колец",
    author: "Дж. Р. Р. Толкин",
    year: 1954,
    coverColor: "Зеленый",
    genre: "Фэнтези"
  },
  {
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    coverColor: "Черный",
    genre: "Антиутопия"
  },
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    coverColor: "Темно-синий",
    genre: "Роман"
  },
  {
    title: "Дюна",
    author: "Фрэнк Герберт",
    year: 1965,
    coverColor: "Песочный",
    genre: "Научная фантастика"
  }
];

library.push({
  title: "Гарри Поттер и философский камень",
  author: "Дж. К. Роулинг",
  year: 1997,
  coverColor: "Красный",
  genre: "Фэнтези"
});

// console.log(library);

const harryPotterUniverse = [
  {
    title: "Гарри Поттер и Тайная комната",
    author: "Дж. К. Роулинг",
    year: 1998,
    coverColor: "Зеленый",
    genre: "Фэнтези"
  },
  {
    title: "Гарри Поттер и узник Азкабана",
    author: "Дж. К. Роулинг",
    year: 1999,
    coverColor: "Фиолетовый",
    genre: "Фэнтези"
  },
  {
    title: "Гарри Поттер и Кубок огня",
    author: "Дж. К. Роулинг",
    year: 2000,
    coverColor: "Кубковый",
    genre: "Фэнтези"
  }
];

const allBooks = [...library, ...harryPotterUniverse];
// console.log(allBooks);

function checkRetroBooks(arrayOfBooks) {
  return arrayOfBooks.map(allBooks  => {
    return {
      ...allBooks,
      isRare: allBooks.year < 2000
    };
  });
}

const updatedBooks = checkRetroBooks(allBooks);
// console.log(updatedBooks);