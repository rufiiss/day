const map = (array, callback) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i));
  }
  return result;
};

// Пример использования
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = map(numbers, (element, index) => {
  return element * 2;
});

console.log(doubledNumbers); // Выведет: [2, 4, 6, 8, 10]

// Код для слайдера изображений
document.addEventListener("DOMContentLoaded", () => {
  const WEB_TECH_IMAGES = [
    "https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/32f74d50-68d0-46aa-b035-7b3a5300d2c1_js-magic-logo.jpg",
    // Добавьте другие URL изображений по необходимости
  ];

  let currentIndex = 0;

  const imgElement = document.querySelector("#web-tech-image");
  const prevButton = document.querySelector("#prev-button");
  const nextButton = document.querySelector("#next-button");

  if (imgElement && prevButton && nextButton) {
    function updateImage() {
      imgElement.src = WEB_TECH_IMAGES[currentIndex];
    }

    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % WEB_TECH_IMAGES.length;
      updateImage();
    });

    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + WEB_TECH_IMAGES.length) % WEB_TECH_IMAGES.length;
      updateImage();
    });

    updateImage();
  }
});