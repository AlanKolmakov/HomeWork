'use strict';
//! Задача 1
//Реализуйте и экспортируйте по умолчанию функцию, которая делает заглавной первую букву каждого слова в предложении.


//const toUpperFirstStr = (str) => {
//   let result = '';
//   for (let i = 0; i < str.length; i += 1) {
//      if (str[i] !== ' ' && (str[i - 1] === ' ' || i === 0)) {
//         result += str[i].toUpperCase();
//		} else {
//			result += str[i];
//		}
//	}
//	return result;
//};
//console.log(toUpperFirstStr('hello world'));


//! Задача 2.
//Реализуйте функцию, которая переворачивает цифры в переданном числе и возвращает новое число.


//const reverseInt = (num) => {
//	let result = '';
//	let initStr = num.toString();
//	if (num >= 0) {
//		for (let i = 0; i < initStr.length; i++) {
//			result = `${initStr[i]}${result}`;
//		}
//		return Number(result);
//	} else if (num < 0) {
//		for (let i = 1; i < initStr.length; i++) {
//			result = `${initStr[i]}${result}`;
//		}
//		return Number(result) * -1;
//	} else return(num);
//};

//console.log(reverseInt(-254));

//! Задача 3.
//Реализуйте и экспортируйте по умолчанию функцию, которая определяет, является ли переданное число натуральной степенью тройки.Например, число 27 — это третья степень: 3 ^ 3, а 81 — это четвёртая: 3 ^ 4.


//const isPowerOfThree = (num) => {
//	let count = 0;
//	while (num%3 === 0) {
//		num /= 3;
//		count++;
//	};
//	if (num === 1) {
//		console.log(true,3,'^', count);
//		return true;
//	}  else {
//		console.log(false);
//		return false;
//	}
//};

//isPowerOfThree(1);
//isPowerOfThree(2);
//isPowerOfThree(9);
//isPowerOfThree(254);
//isPowerOfThree(19683);
