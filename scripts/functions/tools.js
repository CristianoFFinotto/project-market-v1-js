/**
 * @file: functions.js
 * @author: Cristiano Francesco Finotto
 *          Federico Luciano Stroppiana
 *          Isolde Brustolon
 *          Joele Melchiorre
 * 
 * Funtion tools file
 *
 * Used by flow file to execute some specific tools
 */
 

 import { config, itemsName } from '../config/config.js';

/*
    Global ID counter 
*/

let lastID = '0';                  

/**
 * Function generate unique id based on global id with specific format
 * @returns {string} increased unique id
 */

 export function productIdGenerator() {     
  
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
 * @returns {string} random product name chosen on pool
 */

export function productNameGenerator(){

    /*
        math.floor round to lower integer number EX. 5.9888888 -> 5
        math.random generate random number from 0 (inclusive) <-> 1 (exlusive) ex. 0.76757573      
    */

    return itemsName[Math.floor(Math.random() * itemsName.length)];
}

/**
 * Function generate random expiration date from a range startingDate <-> finishingDate
 * @param {object} startingDate - starting date of the program
 * @param {object} finishingDate - finishig date of the program (startingDate + (number of weeks * number of days per week))
 * @returns {string} expiration date generated
 */

 export function productExpiringDateGenerator(startingDate, finishingDate) {

     /*
        .random return random number from 0 inclusive to 1 exlusive ex. 0.3464365
        .floor return less number of that param ex. 5.99999 -> 5
        1 day in milliseconds = 1000 milliseconds * 60 seconds * 60 minutes * 24 hours
        + 1 because random multiply result from random range 0 to n - 1 EX. 0.64534534 * random number 0 <-> n -1
        expiringDate set from start program forward plus random days
     */

    const dayInMilliseconds = 1000 * 60 * 60 * 24;

    let random = Math.floor((Math.random() * (new Date(finishingDate) - new Date(startingDate)) / dayInMilliseconds) + 1);

    let expiringDate = new Date(startingDate);
    expiringDate.setDate(expiringDate.getDate() + random);

    return expiringDate;
}



    



