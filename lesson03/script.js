"use strict";
let lang = 'ru';

// Часть 1. Написать условия при котором в зависимости от значения lang 
// будут выводится дни недели на русском или английском языке 

// Часть 1. a) через if, 
// создаем массив для дней недели
let weekDaysLang = [];

// в зависимости от языка в массиве будут дни с переводом на этот же язык
if(lang === 'ru') {
	weekDaysLang = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
}
if (lang === 'en') {
	weekDaysLang = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
}
alert(weekDaysLang);

// Часть 1. б)  Решение через switch-case:
switch(lang) {
	case 'ru':
		weekDaysLang = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
		break;
	case 'en':
		weekDaysLang = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
		break;
}
alert(weekDaysLang);

// Часть 1. Решение через многомерный массив:

weekDaysLang = {
	'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
	'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
alert(weekDaysLang[lang]);

// Часть 2. Решить задачу с помощью нескольких тернарных операторов
// без использования if или switch
let namePerson = 'Максим';
let nameCheck = (namePerson === 'Артем') ? console.log('Директор') : 
(namePerson === 'Максим') ? console.log('Преподаватель') : console.log('Студент');
