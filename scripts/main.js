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
    copy of current date --> startingDate
    move forward logically into timeline to program start
    copy of starting date --> currentDate for range
    set current date (program life) each week changes 
*/

let date = new Date();             
let startingDate = new Date(date); 
startingDate.setDate(date.getDate() + config.dayStartExecutionProg);
let currentDate = new Date(startingDate);

for (let weeksIndex = 0; weeksIndex < config.weekExecutionProg; weeksIndex++) {

    currentDate.setDate(startingDate.getDate() + (config.daysInWeek * weeksIndex));

    console.log("Current Date -->"+currentDate,"\n");
    for (let productsIndexArrived = 0; productsIndexArrived < config.productByWeeksArrive; productsIndexArrived++) {                 // arrive products
        
        productList.push(flow.addProduct(currentDate, config, itemsName));
        
    }
    
    console.log("---- Arrivo Prodotti ----");
    for (const value of productList) {
        console.log(value);
    }
    
    // TODO: Stampa prodotti
    
    for (let productIndex = 0; productIndex < productList.length; productIndex++) {                 // arrive products
        
        productList[productIndex].status = tools.filterProductState(productList[productIndex].checked, productList[productIndex].expiredDate, currentDate);;
        productList[productIndex].checked = weeksIndex;

        if(productList[productIndex].status === "Expired")
        {
            productList.splice(productIndex, 1);
            productIndex--;
        }
        
    }
    
    console.log("---- Prodotti Filtrati ----");
    for (const value of productList) {
        console.log(value);
    }
    
}


