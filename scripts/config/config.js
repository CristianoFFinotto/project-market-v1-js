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
    productOnShelf_MaxWeeks: 5, 
    productByWeeksArrive: 2,
    dayStartExecutionProg: -5,       // plus current day
    weekExecutionProg: 10,
    durationPrinting: 3000,
    daysInWeek: 2,
    idFormat: '00',
    paddingType: '*'
}


/*
    this array contains all products
*/

export const itemsName = [
    'Cheese', 'Banana', 'Green Beans', 'Meat', 'Apple', 'Nutella', 'Rice', 
    'Roast Beef', 'Salad', 'Dried Fruit', 'Pasta'
];
