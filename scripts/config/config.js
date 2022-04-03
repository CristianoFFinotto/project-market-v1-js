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
    productByWeeksArrive: 3,
    dayStartExecutionProg: 0,     
    weekExecutionProg: 5,
    minDurationPrinting: 2000,
    maxDurationPrinting: 5000,
    daysInWeek: 2,
    idFormat: '00',
    paddingFormat: '*'
}


/*
    this array contains all name products
*/

export const itemsName = [
    'Cheese', 'Banana', 'Green Beans', 'Meat', 'Apple', 'Nutella', 'Rice', 
    'Roast Beef', 'Salad', 'Dried Fruit', 'Pasta'
];