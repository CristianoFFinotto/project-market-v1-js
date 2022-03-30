/**
 * @file: functions.js
 * @author: Cristiano Francesco Finotto
 *          Federico Luciano Stroppiana
 *          Isolde Brustolon
 *          Joele Melchiorre
 * 
 * Funtion tools file
 *
 * Used by functions file to execute some specific tools
 */

import { config } from '../config/config.js';

/*
    Global ID counter 
*/

let lastID = '0';                  

/**
 * Function generate unique id based on global id with specific format
 * @param {object} config - configuration file by manager 
 * @returns increased unique id
 */

 export const productIdGenerator = () => {        

    if(Number(lastID) < 99){    

        let formatLength = config.idFormat.length;

        switch (formatLength){

            case 2:{
                    lastID = Number(lastID);    // string to number
                    lastID ++;
                    lastID = lastID.toString(); // number to string

                    if(lastID.length === 2)
                        return lastID;
                    else
                        return '0' + lastID;
            }

            case 3:{

                    lastID = Number(lastID);
                    lastID ++;
                    lastID = lastID.toString();

                    if(lastID.length === 1)
                        return '0' + '0' + lastID;
                    else if(lastID.length === 2)
                        return '0' + lastID;
                    else
                        return lastID;
                }
            }
        }

        else {

            lastID = Number(lastID);
            lastID ++;
            lastID = lastID.toString();
            
            return lastID;
        }
}


/**
 * Function permit choose random element on given array
 * @param {object} poolNames - array of product name 
 * @returns random product name chosen on pool
 */

/*
  math.floor round to lower integer number EX. 5.9888888 -> 5
  math.random generate random number from 0 (inclusive) <-> 1 (exlusive) ex. 0.76757573      
*/

export const productNameGenerator = (poolNames) => {

    return poolNames[Math.floor(Math.random() * poolNames.length)];
}

/**
 * Function generate random expiration date from a range startingDate <-> finishingDate
 * @param {object} config - configuration file by manager
 * @returns expiration date generated
*/

 export const productExpiringDateGenerator = (startingDate, finishingDate, config) => {

/*
    .random return random number from 0 inclusive to 1 exlusive ex. 0.3464365
    .floor return less number of that param ex. 5.99999 -> 5
    1 day in milliseconds = 1000 milliseconds * 60 seconds * 60 minutes * 24 hours
    + 1 because random multiply result from random range 0 to n - 1 EX. 0.64534534 * random number 0 <-> n -1
    expiringDate set from start program forward plus random days
*/

    let random = Math.floor((Math.random() * (new Date(finishingDate) - new Date(startingDate)) / (1000*60*60*24)) + 1);

    let expiringDate = new Date(startingDate);
    expiringDate.setDate(expiringDate.getDate() + random);

    let expiredDateString = expiringDate.toLocaleString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'}).toUpperCase().replaceAll(' ', '-');

    if(expiredDateString.length < config.maxLengthDate.length)
        return '0' + expiredDateString;
    else
        return expiredDateString;
}