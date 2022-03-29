/**
 * @file: functions.js
 * @author: Cristiano Francesco Finotto
 *          Federico Luciano Stroppiana
 *          Isolde Brustolon
 *          Joele Melchiorre
 * 
 * Function with main function used by main
 *
 * Contains usefull functions for flow logic of main
 */


import * as tools from './tools.js';

/*
    check if param is an array
    check if a array is void

*/

// TODO: Specifiche

export const addProduct = (startingDate, currentDate) => {

    let idProduct = tools.productIdGenerator();
    let nameProduct = tools.productNameGenerator();
    let expiredDateProduct = tools.productExpiringDateGenerator(startingDate);
    let checkedProduct = 0;
    let stateProduct = tools.filterProductState(checkedProduct, expiredDateProduct, currentDate);

    return {
        id: idProduct,
        name: nameProduct,
        expiredDate: expiredDateProduct,
        status: stateProduct,
        checked: checkedProduct
    }
}