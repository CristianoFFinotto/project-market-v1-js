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
import * as tools from './functions/tools.js';


let productList = [];


/*
    current date (in real life)
    move forward logically into timeline to program start
    copy of starting date --> currentDate for range
    set current date (program life) each week changes 
*/
             
let startingDate = new Date(); 
startingDate.setDate(startingDate.getDate() + config.dayStartExecutionProg);
let currentDate = new Date(startingDate);

let weeksIndex = 0; 

let intervalID = setInterval(() => {

    productList.forEach(element => {            // filter products
        element.checked++;
        element.status = tools.filterProductState(element.checked, element.expiredDate, currentDate);
    })
    
    for (let productsIndexArrived = 0; productsIndexArrived < config.productByWeeksArrive; productsIndexArrived++) {                 // arrive products
        
        productList.push(flow.addProduct(startingDate, currentDate));
        
    }

    console.log("Week of", currentDate.toLocaleString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'}).toUpperCase().replaceAll(' ', '-'));
    console.log("---------------------------------------------------------");
    productList.forEach(element => console.log(element));
    
    // TODO: Stampa prodotti
    
    for (let productIndex = 0; productIndex < productList.length; productIndex++) {                 // remove expired and old products
        
        if(productList[productIndex].status === "Expired" || productList[productIndex].status === "Old")
        {
            productList.splice(productIndex, 1);
            productIndex--;
        }
        
    }
    
    console.log("\n\nFiltered\n--------");
    productList.forEach(element => console.log(element));
    console.log("\n\n");
    
    weeksIndex++;           // updating week counter
    
    if(weeksIndex >= config.weekExecutionProg)          // stopping setInterval
    {
        clearInterval(intervalID);
    }

    currentDate.setDate(currentDate.getDate() + config.daysInWeek);             // current date updated
    
}, config.durationPrinting);