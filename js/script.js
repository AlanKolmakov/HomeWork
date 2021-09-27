'use strict';

//! Задача 1.

// функцию, которая принимает на вход в виде массива кошелек с деньгами и название валюты и возвращает сумму денег указанной валюты.
// параметры функции:
// массив, содержащий купюры разных валют с различными номиналами
// наименование валюты:
//const money1 = ['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',];
//getTotalAmount(money1, 'usd') // 16
//const money2 = ['eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',];
//getTotalAmount(money2, 'eur') // 135
//const money3 = ['eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200',];
//getTotalAmount(money3, 'rub') // 270

const getTotalAmount = (money, currency) => {
	let sum = 0;

	for (const i of money) {
		const value = i.split(" ");
		if (value[0] === currency) {
			sum += +value[1];
		}
	}
	console.log(sum + ' ' + currency);
	return sum;
};

const money1 = ['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',];
getTotalAmount(money1, "usd"); // 16

const money2 = ['eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',];
getTotalAmount(money2, "eur"); // 135

const money3 = ['eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200',];
getTotalAmount(money3, "rub"); // 270
