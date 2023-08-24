/* eslint-disable indent */

// 0) Реалізувати функцію isWorkingAgePerson, яка буде перевіряти, чи працездатного людина віку (від 16 до 65). Функція приймає в якості параметра вік людини і повертає значення булевського типу.
// Очікуваний результат:
// isWorkingAgePerson(20);  true
// isWorkingAgePerson(4);  false
// isWorkingAgePerson(88); false
/**
 *
 * @param {number} age the only argument
 * @returns {boolean} depending on sistem permission
 */

function isWorkingAgePerson(age) {
  if (age <= 65 && age >= 16) {
    return true;
  } else {
    return false;
  }
}

console.log(isWorkingAgePerson(20));

// 1) *Реалізувати функцію, яка приймає число і повертає булевське значення, чи воно просте (просте число ділитися без залишку тільки на себе і на одиницю).

function primeNumbers(numberOfFunction) {
  const resultString = numberOfFunction / 2;
  if (Number.isInteger(resultString)) {
    return false;
  } else {
    return true;
  }
}
console.log(primeNumbers(8));

// 2) Реалізувати функцію checkMultiplicity, яка приймає два числа і перевіряє, чи ділиться перше на друге націло (без залишку):
// checkMultiplicity(25, 5)  true
// checkMultiplicity(15, 3)  true
// checkMultiplicity(15, 5)  true
// checkMultiplicity(15, 4)  false

/**
 *
 * @param {number} a first argument
 * @param {number} b second argument
 * @returns {boolean} returning integers
 */

function checkMultiplicity(a, b) {
  let c = a / b;
  if (Number.isInteger(c)) {
    return true;
  } else {
    return false;
  }
}
console.log(checkMultiplicity(15, 5));

// 3) Перевірка можливості існування трикутника. Реалізувати функцію, яка приймає довжини трикутника; функція повертає true, якщо треугольник можливий, і false, якщо ні (див. умови існування трикутника).

function triangle(firstSide, secondSide, thirdSide) {
  if (firstSide + secondSide === thirdSide) {
    return true;
  } else {
    return false;
  }
}

console.log(triangle(3, 2, 6));

// 4) Реалізувати функції розрахунку площі (або поверхні) наступної фігури (тіла): трикутника, прямокутника (або конуса, паралелепіпеда) в залежності від переданих розмірів фігури. Функція повинна повернути обчислене значення. Мінімум для однієї фігури на вибір.

//ДЛЯ ТРИКУТНИКА:

function triangleS(leftSide, rightSide, downSide) {
  let triangleH = (leftSide * rightSide) / downSide;
  let S = (downSide * triangleH) / 2;
  if (
    typeof leftSide == "number" &&
    typeof rightSide == "number" &&
    typeof downSide == "number"
  ) {
    return S;
  } else {
    return undefined;
  }
}

console.log(triangleS(12, 3, 4));

//ДЛЯ ПРЯМОКУТНИКА:

function rectangleS(topAndBottomLineLengh, rightAndLeftLineLength) {
  let S = topAndBottomLineLengh * rightAndLeftLineLength;
  if (
    typeof topAndBottomLineLengh == "number" &&
    typeof rightAndLeftLineLength == "number"
  ) {
    return S;
  } else {
    return undefined;
  }
}
console.log(rectangleS(4, 5));

// 2 функції на вибір реалізувати у форматі функціонального виразу (function expression):

const theAreaOfTheRectangle = function (longRectangleLine, shortRectangleLine) {
  return longRectangleLine * shortRectangleLine;
};
console.log(theAreaOfTheRectangle(7, 3));

const theAreaOfTheTriangle = function (sideLeft, sideRigt, sideDown) {
  return (sideDown * ((sideLeft * sideRigt) / sideDown)) / 2;
};
console.log(theAreaOfTheTriangle(3, 4, 7));
