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

import { config, itemsName } from './config/config.js';
import * as flow from './functions/flow.js';

const productList = [];

/*
    startingDate is date when program logically should start
    finishingDate is date when program logically should stop

    range of random expiring date is startingDate <-> finishingDate

    currentDate is date when you move on into interval week by week

    weeksIndex is number of week program runs
*/

let startingDate = new Date();
startingDate.setDate(startingDate.getDate() + config.dayStartExecutionProg);

let finishingDate = new Date(startingDate);
finishingDate.setDate(finishingDate.getDate() + (config.daysInWeek * config.weekExecutionProg));

let currentDate = new Date(startingDate);

let weeksIndex = 0; 

let intervalID = setInterval(() => {

    /*
        filter products
        forEach executes only if array is not void .length > 1
        increase all product check number
        update all product state
    */

    productList.forEach(product => {            
        product.checked ++;
        product.status = flow.filterProductState(product.checked, product.expiredDate, currentDate, config);
    });

    // add products

    for (let productsIndexArrived = 0; productsIndexArrived < config.productByWeeksArrive; productsIndexArrived++) {                 // arrive products
        
        productList.push(flow.addProduct(startingDate, finishingDate, currentDate, config, itemsName));
        
    }

    let currentDateString = currentDate.toLocaleString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'}).toUpperCase().replaceAll(' ', '-');
    
    if(currentDateString.length < config.maxLengthDate.length)
        currentDateString = '0' + currentDateString;

    console.log("\n\nWeek of", currentDateString);
    console.log("---------------------------------------------------------");
    productList.forEach(product => flow.printingProduct(product, config));

    console.log('\n\nFiltered: ');
    console.log("--------");

    // remove expired or old product

    for(let productIndex = 0; productIndex < productList.length; productIndex ++){

        if(productList[productIndex].status === 'Expired' || productList[productIndex].status === 'Old'){
            productList.splice(productIndex, 1);
            productIndex --;
        }
    }

    productList.forEach(product => flow.printingProduct(product, config));

    weeksIndex ++;

    if(weeksIndex >= config.weekExecutionProg)
    {
        clearInterval(intervalID);
    }

    // Update currentDate to next Week 

    currentDate.setDate(currentDate.getDate() + config.daysInWeek);

}, config.durationPrinting);