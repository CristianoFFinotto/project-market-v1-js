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

/**
 * Function add new product into market
 * @param {object} startingDate 
 * @param {object} finishingDate 
 * @param {object} currentDate 
 * @param {object} config 
 * @param {object} itemsName 
 * @returns new product structure
 */

export const addProduct = (startingDate, finishingDate, currentDate, config, itemsName) => {

    let idProduct = tools.productIdGenerator(config);
    let nameProduct = tools.productNameGenerator(itemsName);
    let expiredDateProduct = tools.productExpiringDateGenerator(startingDate, finishingDate);
    let checkedProduct = 0;
    let stateProduct = filterProductState(checkedProduct, expiredDateProduct, currentDate, config);

    return {
        id: idProduct,
        name: nameProduct,
        expiredDate: expiredDateProduct,
        status: stateProduct,
        checked: checkedProduct
    }
}

/**
 * Function filter product state
 * @param {number} checked - number of check product
 * @param {object} expiredDate - date of expiring product
 * @param {object} currentDate - actual date
 * @param {object} config - configuration file by manager
 * @returns state of product
 */

export const filterProductState = (checked, expiredDate, currentDate, config) => {

    // new product

    if(checked === 0)
    {
        if(new Date(expiredDate).setHours(0,0,0,0) >=  new Date(currentDate).setHours(0,0,0,0))
            return 'New';
        else
            return 'Expired';
    }

    // product already into market

    else
    {
        if((new Date(expiredDate).setHours(0,0,0,0) >=  new Date(currentDate).setHours(0,0,0,0)) && checked <= config.productOnShelf_MaxWeeks)
            return 'Valid';
        
        else if(checked > config.productOnShelf_MaxWeeks)
            return 'Old';

        else
            return 'Expired';
    }
    
}