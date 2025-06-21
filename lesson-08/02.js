function isNumeric(str) {
  if (typeof str !== 'string' || str.trim() === '') {
    return false;
  }

  // Проверяем все возможные числовые форматы с помощью регулярного выражения
  return /^[-+]?(\d+\.?\d*|\.\d+)([eE][-+]?\d+)?$/.test(str.trim());
}

// Тестовые случаи
console.log(isNumeric("123"));      // true
console.log(isNumeric("12.3"));     // true
console.log(isNumeric("-12.3"));    // true
console.log(isNumeric("+12.3"));    // true
console.log(isNumeric("1.23e4"));   // true
console.log(isNumeric("1.23E4"));   // true
console.log(isNumeric("1.23e-4"));  // true
console.log(isNumeric("123abc"));   // false
console.log(isNumeric("abc"));      // false
console.log(isNumeric(" "));        // false
console.log(isNumeric("12.3.4"));   // false
console.log(isNumeric(""));         // false
console.log(isNumeric("Infinity")); // false