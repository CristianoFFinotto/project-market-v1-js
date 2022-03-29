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

import { config, itemsName } from '../config/config.js';

let lastID = '0';               // Global ID counter    

/**
 * Function generate unique id based on global id
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
    else{

        lastID = Number(lastID);
        lastID ++;
        lastID = lastID.toString();
        
        return lastID;
        
    }
}


/**
 * Function permit choose random element on array
 * @returns random product name chosen on pool
 */

/*
    math.floor round to greater integer number ex. 1,2,5
    math.random generate random number from 0 (inclusive) <-> 1 (exlusive) ex. 0.76757573      
*/

export const productNameGenerator = () => {

    return itemsName[Math.floor(Math.random()*itemsName.length)];
    
}

/**
 * Function generate randome expiration date from a range
 * @param {object} config - configuration file by manager
 * @returns expiration date generated
 */

 export const productExpiringDateGenerator = (startingDate) => {
    
    let random = Math.floor(Math.random() * (config.daysInWeek * config.weekExecutionProg) + 1);
    let expiringDate = new Date(startingDate);
    expiringDate.setDate(startingDate.getDate() + random);

    return expiringDate.toLocaleString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'}).toUpperCase().replaceAll(' ', '-');
}

// TODO: Specifiche

export const filterProductState = (checked, expiredDate, currentDate) => {

    if(checked === 0)
    {
        if(new Date(expiredDate).setHours(0,0,0,0) >= new Date(currentDate).setHours(0,0,0,0))
            return "New";
        else
            return "Expired";
    }
    else
    {
        if(new Date(expiredDate).setHours(0,0,0,0) < new Date(currentDate).setHours(0,0,0,0))
            return "Expired";
        else if(checked >= config.productOnShelf_MaxWeeks)
            return "Old";
        else
            return "Valid";
    }
    
}