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

export const addProduct = (currentDate, config, itemsName) => {

    let idProduct = tools.productIdGenerator(config);
    let nameProduct = tools.productNameGenerator(itemsName);
    let expiredDateProduct = tools.productExpiringDateGenerator(config);
    let stateProduct = tools.newProductState(expiredDateProduct, currentDate);
    let checkedProduct = 0;

    return {
        id: idProduct,
        name: nameProduct,
        expiredDate: expiredDateProduct,
        status: stateProduct,
        checked: checkedProduct
    }
}













