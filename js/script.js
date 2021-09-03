"use strict";//Строгий режим

//!Задача 1. Выведите нечетные числа от 1 до 100.
let num = 0;
while (num < 100) {
	num++;
	if (num % 2) console.log(num);
};

//!Задача 2. Даны 3 числа. С помощью if/else найдите наибольшее число и наименьшее число.
//Объявляем переменные
let num1,
	num2,
	num3,
	min,
	max;

//Просим пользователя ввести 3 числа
num1 = prompt("Введите первое число:", "");
num2 = prompt("Введите второе число:", "");
num3 = prompt("Введите третье число:", "");
//Преобразуем строки в цисла
num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);
//Проверяем на пустую строку
if (num1 == "") {
	alert("Вы не ввели первое число!!!")
}
else if (num2 == "") {
	alert("Вы не ввели второе число!!!")
}
else if (num3 == "") {
	alert("Вы не ввели третье число!!!")
}
else if (num1 <= num2 && num1 <= num3) {
	min = num1;
}
else if (num2 <= num1 && num2 <= num3) {
	min = num2;
}
else {
	min = num3;
};
if (num1 == "") {
	alert("Вы не ввели первое число!!!")
}
else if (num2 == "") {
	alert("Вы не ввели второе число!!!")
}
else if (num3 == "") {
	alert("Вы не ввели третье число!!!")
}
else if (num1 >= num2 && num1 >= num3) {
	max = num1;
}
else if (num2 >= num1 && num2 >= num3) {
	max = num2;
}
else {
	max = num3;
};
console.log('Наименьшее число = ' + min);
console.log('Наибольшее число = ' + max);
console.log(num1, num2, num3);


//!Задача 4. Реализуйте функцию, которая переворачивает строку. 
let userText = prompt("Введите любой текст:", "");

const reverse = (str) => {
	let i = str.length - 1;
	let result = '';

	while (i >= 0) {
		result = result + str[i];
		i = i - 1;
	}
	return result;
};
console.log(reverse(userText));