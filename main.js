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
    dayExecutionProg: 30,       // plus current day + 1
    weekExecutionProg: 4,
    durationPrinting: 3000,
    daysInWeek: 7,
    idFormat: '00'
}



/*
    this array contains all products
*/

const items = [
    {
        name: 'carote',
        expirationDate: 2022-10-12
    }
];

console.log(product.idGenerator(config));
