document.addEventListener("DOMContentLoaded", () => {
  const WEB_TECH_IMAGES = [
    'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/32f74d50-68d0-46aa-b035-7b3a5300d2c1_js-magic-logo.jpg',
    'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/c8a1f4a6-1337-4899-bdfd-a8c9c7bb806a_css-magic-logo.jpg',
    'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/784380b9-6937-42a6-bdfe-869835820234_html-magic-logo.jpg',
  ];

  // Получаем элементы DOM
  const imgElement = document.getElementById('web-tech-image');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');

  let currentIndex = 0;

  // Функция для обновления изображения
  function updateImage() {
    imgElement.src = WEB_TECH_IMAGES[currentIndex];
    imgElement.alt = `Изображение ${currentIndex + 1} из ${WEB_TECH_IMAGES.length}`;
  }

  // Обработчик для кнопки "next"
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % WEB_TECH_IMAGES.length;
    updateImage();
  });

  // Обработчик для кнопки "prev"
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + WEB_TECH_IMAGES.length) % WEB_TECH_IMAGES.length;
    updateImage();
  });

  // Инициализация слайдера
  updateImage();
});