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

for (let index = 0; index < config.weekExecutionProg; index++) {

    currentDate.setDate(startingDate.getDate() + (config.daysInWeek * index));

    for (let index = 0; index < config.productByWeeksArrive; index++) {

        console.log(flow.addProduct(currentDate, config, itemsName));
    
    }

}


