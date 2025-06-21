function isNumeric(str) {
  // Проверяем, что строка не пустая и не состоит из пробелов
  if (typeof str !== 'string' || str.trim() === '') {
    return false;
  }

  // Пробуем преобразовать строку в число
  const num = parseFloat(str);

  // Проверяем:
  // 1. Что преобразование не дало NaN
  // 2. Что преобразованное число в строке равно исходной строке (без учета пробелов)
  // 3. Что это конечное число (не Infinity)
  return !isNaN(num) &&
         num.toString() === str.trim() &&
         isFinite(num);
}

// Тестовые случаи
console.log(isNumeric("123"));      // true
console.log(isNumeric("12.3"));     // true
console.log(isNumeric("-12.3"));    // true
console.log(isNumeric("+12.3"));    // true
console.log(isNumeric("123abc"));   // false
console.log(isNumeric("abc"));      // false
console.log(isNumeric(" "));        // false
console.log(isNumeric("12.3.4"));   // false
console.log(isNumeric(""));         // false
console.log(isNumeric("Infinity")); // false