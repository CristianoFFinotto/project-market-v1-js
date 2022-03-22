/**
 * @file: main.js
 * @author: Cristiano Francesco Finotto
 *          Federico Luciano Stroppiana
 *          Isolde Brustolon
 *          Joele Melchiorre
 * 
 * Main part of Project
 *
 * Contains logic of all project
 */

import * as product from './functions.js';

/*
    this object can be modified by market manager
*/

const config = {
    productOnShelf_MaxWeeks: 2, 
    productByWeeksArrive: 5,
    dayStartExecutionProg: 0,       // plus current day
    weekExecutionProg: 2,
    durationPrinting: 3000,
    daysInWeek: 7,
    idFormat: '00'
}

/*
    this array contains all products
*/

const itemsName = [
    'Cheese', 'Banana', 'Green Beans', 'Meat', 'Apple', 'Nutella', 'Rice', 
    'Roast Beef', 'Salad', 'Dried Fruit', 'Pasta'
];


const products = [
    {
        id: product.productIdGenerator(config),
        name: product.productNameGenerator(itemsName),
        expiredDate: product.productExpiringDateGenerator(config),
        status: undefined,
        checked: 0
    }
]


let date = new Date();
let startingDate = new Date(date);
startingDate.setDate(date.getDate() + config.dayStartExecutionProg);
let currentDate = new Date(startingDate);

currentDate.setDate(startingDate.getDate() + (config.daysInWeek * 1));
product.productState(products[0],startingDate,startingDate,config);