function capitalizeWords(str) {
  let result = '';
  let capitalizeNext = true;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (capitalizeNext && char !== ' ') {
      result += char.toUpperCase();
      capitalizeNext = false;
    } else {
      result += char.toLowerCase();
    }

    if (char === ' ') {
      capitalizeNext = true;
    }
  }

  return result;
}

// Пример использования
console.log(capitalizeWords("hello world from javascript")); // "Hello World From Javascript"