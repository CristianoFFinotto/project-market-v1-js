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

let productList = [];

/*
    current date (in real life)
    copy of current date --> startingDate
    move forward logically into timeline to program start
    copy of starting date --> currentDate for range
    set current date (program life) each week changes 
*/

let startingDate = new Date();
startingDate.setDate(startingDate.getDate() + config.dayStartExecutionProg);

let finishingDate = new Date(startingDate);
finishingDate.setDate(finishingDate.getDate() + (config.daysInWeek * config.weekExecutionProg));

let currentDate = new Date(startingDate);

let weeksIndex = 0; 

let intervalID = setInterval(() => {

    productList.forEach(element => {            
        element.checked ++;
        element.status = flow.filterProductState(element.checked, element.expiredDate, currentDate, config);
    });

    // add products

    for (let productsIndexArrived = 0; productsIndexArrived < config.productByWeeksArrive; productsIndexArrived++) {                 // arrive products
        
        productList.push(flow.addProduct(startingDate, finishingDate, currentDate, config, itemsName));
        
    }

    console.log("Week of", currentDate.toLocaleString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'}).toUpperCase().replaceAll(' ', '-'));
    console.log("---------------------------------------------------------")
    productList.forEach(element => console.log(element));

    // filter state

    console.log('Filtered: ');

    // remove expired product

    for(let productIndex = 0; productIndex < productList.length; productIndex ++){

        if(productList[productIndex].status === 'Expired' || productList[productIndex].status === 'Old'){
            productList.splice(productIndex, 1);
            productIndex --;
        }
    }

    productList.forEach(element => console.log(element));

    weeksIndex ++;

    if(weeksIndex >= config.weekExecutionProg)
    {
        clearInterval(intervalID);
    }

    currentDate.setDate(currentDate.getDate() + config.daysInWeek);

}, config.durationPrinting);