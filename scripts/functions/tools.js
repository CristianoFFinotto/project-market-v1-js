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

let lastID = '0';               // Global ID counter    

/**
 * Function generate unique id based on global id
 * @param {object} config - configuration file by manager 
 * @returns increased unique id
 */

 export const productIdGenerator = () => {        // 00 or 000 FORMAT

    if(Number(lastID) < 99){                    
        let formatLength = config.idFormat.length;

        switch (formatLength){

            case 2:{
            
                    lastID = Number(lastID);
                    lastID ++;
                    lastID = lastID.toString();

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
 * Function permit choose random element on array
 * @param {object} poolNames - array of name 
 * @returns random product name chosen on pool
 */

/*
    math.floor round to greater integer number ex. 1,2,5
    math.random generate random number from 0 (inclusive) <-> 1 (exlusive) ex. 0.76757573      
*/

export const productNameGenerator = (poolNames) => {

    return poolNames[Math.floor(Math.random()*poolNames.length)];
    
}

/**
 * Function generate randome expiration date from a range
 * @param {object} config - configuration file by manager
 * @returns expiration date generated
 */

 export const productExpiringDateGenerator = (startingDate, finishingDate) => {

    let random = Math.floor((Math.random()*(new Date(finishingDate) - new Date(startingDate))/(1000*60*60*24)) + 1);

    let expiringDate = new Date(startingDate);
    expiringDate.setDate(expiringDate.getDate() + random);

    return expiringDate.toLocaleString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'}).toUpperCase().replaceAll(' ', '-');
}



