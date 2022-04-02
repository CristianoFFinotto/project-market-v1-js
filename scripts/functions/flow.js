/**
 * @file: functions.js
 * @author: Cristiano Francesco Finotto
 *          Federico Luciano Stroppiana
 *          Isolde Brustolon
 *          Joele Melchiorre
 * 
 * Function with main function used by main
 *
 * Contains usefull functions to flow logic of main 
 * main hot point in project are add products, filter products, print products
 */

import * as tools from './tools.js';

export const maxLengthDate = 'XX-XXX-XXXX';

/**
 * Function generate product structure and inizialised it with
 * @param {object} startingDate - actual day + start days by manager
 * @param {object} finishingDate - startingDate + finish days by manager
 * @param {object} currentDate - actual date into time line startingDate <-> finishingDate
 * @param {object} config - configuration file by manager
 * @returns {object} new product structure with values
 */

 export const addProduct = (startingDate, finishingDate, currentDate, config) => {

    /*
        new product as default has check 0
    */
    
    let idProduct = tools.productIdGenerator();
    let nameProduct = tools.productNameGenerator();
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
 * @param {number} checked - number of time check product
 * @param {object} expiredDate - date of expiring product
 * @param {object} currentDate - actual date into time line startingDate <-> finishingDate
 * @param {object} config - configuration file by manager
 * @returns {string} state of product
 */

export function filterProductState(checked, expiredDate, currentDate, config) {

    /*
        new product
        setHours set hoursValue, minutesValue, secondsValue, msValue
        use setHours to manage case of expiredDate === currentDate NOT considered expired
    */
    
    if(checked === 0)
    {
        if(new Date(expiredDate).setHours(0,0,0,0) >=  new Date(currentDate).setHours(0,0,0,0))
            return 'New';
        else
            return 'Expired';
    }

    /*
        product already into market
        setHours set hoursValue, minutesValue, secondsValue, msValue
        use setHours to manage case of expiredDate === currentDate NOT considered expired
    */

    else
    {
        if(new Date(expiredDate).setHours(0,0,0,0) <  new Date(currentDate).setHours(0,0,0,0))
            return 'Expired';
        else if(checked > config.productOnShelf_MaxWeeks)
            return 'Old';
        else
            return 'Valid';
    }
}

/**
 * Function print product with specific format
 * @param {object} product - product into market
 * @param {object} config - configuration file by manager
 */

export function printingProduct(product, config) {

    // fill whitespace inside name product

    let filteredProduct = product.name.replace(' ', config.paddingFormat);

    let checkFormat;

    /* 
        find number of padding to add both part (start - end)
        in some cases /2 force equal padding (start - end) EX. length = 5 --> padding = 2 --> missed 1 padding
    */

    const productLengthAdd = (config.maxLengthName - product.name.length)/2;
    const statusLengthAdd = (config.maxLengthState - product.status.length)/2;
    
    let paddedProduct = filteredProduct.padStart(filteredProduct.length + productLengthAdd, config.paddingFormat);
    paddedProduct = paddedProduct.padEnd(paddedProduct.length + productLengthAdd, config.paddingFormat);
    
    let paddedStatus = product.status.padStart(product.status.length + statusLengthAdd, config.paddingFormat);
    paddedStatus = paddedStatus.padEnd(paddedStatus.length + statusLengthAdd, config.paddingFormat);

    // fix padding length problem

    if(paddedProduct.length < config.maxLengthName)
        paddedProduct = config.paddingFormat + paddedProduct;

    if (product.checked === 1)
        checkFormat = 'check ';
    
    else
        checkFormat = 'checks';

    /*
        managed print style based on product state
    */

    let expiringDateString = product.expiredDate.toLocaleString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'}).toUpperCase().replaceAll(' ', '-');

    if(expiringDateString.length < maxLengthDate.length)
        expiringDateString = '0' + expiringDateString;

    switch(product.status){

        case 'New': {
            console.log ('%c' + product.id + ": " + paddedProduct + " " + expiringDateString + " " + paddedStatus + " [" + product.checked + " " + checkFormat + "]", 'background: rgb(153,255,153)');
            break;
        }

        case 'Valid': {
            console.log ('%c' + product.id + ": " + paddedProduct + " " + expiringDateString + " " + paddedStatus + " [" + product.checked + " " + checkFormat + "]", 'background: rgb(153,204,255)');
            break;
        }

        case 'Old': {
            console.log ('%c' + product.id + ": " + paddedProduct + " " + expiringDateString + " " + paddedStatus + " [" + product.checked + " " + checkFormat + "]", 'background: rgb(255,255,153)');
            break;
        }

        case 'Expired': {
            console.log ('%c' + product.id + ": " + paddedProduct + " " + expiringDateString + " " + paddedStatus + " [" + product.checked + " " + checkFormat + "]", 'background: rgb(255,150,150)');
            break;
        }

        default: {
            break;
        }
    }
}