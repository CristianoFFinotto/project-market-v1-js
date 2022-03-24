/**
 * @file: config.js
 * @author: Cristiano Francesco Finotto
 *          Federico Luciano Stroppiana
 *          Isolde Brustolon
 *          Joele Melchiorre
 * 
 * Configuration app file
 *
 * This file contain a object that permit to set your app
 */


/*
    this object can be modified by market manager
*/

export const config = {
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


export const itemsName = [
    'Cheese', 'Banana', 'Green Beans', 'Meat', 'Apple', 'Nutella', 'Rice', 
    'Roast Beef', 'Salad', 'Dried Fruit', 'Pasta'
];