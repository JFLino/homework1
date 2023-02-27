export function add(a, b){
    let result = '';
    let carry = 0;
    let aIndex = a.length - 1;
    let bIndex = b.length - 1;

    while (aIndex >= 0 || bIndex >= 0 || carry > 0) {
      let aDigit = aIndex >= 0 ? parseInt(a[aIndex]) : 0;
      let bDigit = bIndex >= 0 ? parseInt(b[bIndex]) : 0;
      let sum = aDigit + bDigit + carry;

      result = (sum % 10) + result;
      carry = Math.floor(sum / 10);

      aIndex--;
      bIndex--;
    }

    return result;
}

  // Функция умножения
export function multiply(a, b){
    let result = '0';

    for (let i = b.length - 1; i >= 0; i--) {
      let carry = 0;
      let partialResult = '';

      for (let j = a.length - 1; j >= 0; j--) {
        let aDigit = parseInt(a[j]);
        let bDigit = parseInt(b[i]);
        let product = aDigit * bDigit + carry;

        partialResult = (product % 10) + partialResult;
        carry = Math.floor(product / 10);
      }

      if (carry > 0) {
        partialResult = carry + partialResult;
      }

      for (let k = 0; k < b.length - 1 - i; k++) {
        partialResult += '0';
      }

      result = add(result, partialResult);
    }

    return result;
}

  // Функция вычитания
export function subtract(a, b){
    let result = '';
    let borrow = 0;
    let aIndex = a.length - 1;
    let bIndex = b.length - 1;

    while (aIndex >= 0 || bIndex >= 0 || borrow > 0) {
      let aDigit = aIndex >= 0 ? parseInt(a[aIndex]) : 0;
      let bDigit = bIndex >= 0 ? parseInt(b[bIndex]) : 0;
      let diff = aDigit - bDigit - borrow;

      if (diff < 0) {
        diff += 10;
        borrow = 1;
      } else {
        borrow = 0;
      }

      result = diff + result;

      aIndex--;
      bIndex--;
    }

    return result.replace(/^0+/, ''); // Удаляет начальные нули.
}

  // Функция деления
export function divide(a, b){
    let result = '0';

    while (compare(a, b) >= 0) { // Пока делимое больше или равно делителю...
      result = add(result, '1'); // Увеличиваем результат на 1.
      a = subtract(a, b); // Вычитаем из делимого делитель.
    }

    return result;
}

export function compare(a, b){
    if (a.length > b.length) return 1; // Если A больше B, возвращаем 1.
    if (a.length < b.length) return -1; // Если A меньше B, возвращаем -1.

    for (let i = 0; i < a.length; i++) { // Сравниваем цифры посимвольно.
      if (parseInt(a[i]) > parseInt(b[i])) return 1; // Если A больше B, возвращаем 1.
      if (parseInt(a[i]) < parseInt(b[i])) return -1; // Если A меньше B, возвращаем -1.
    }

    return 0; // Если A равно B, возвращаем 0.
}