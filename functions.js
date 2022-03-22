/**
 * @file: functions.js
 * @author: Cristiano Francesco Finotto
 *          Federico Luciano Stroppiana
 *          Isolde Brustolon
 *          Joele Melchiorre
 * 
 * Function used by main.js
 *
 * Contains usefull functions for logic of main.js
 */


/*
    check if param is an array
    check if a array is void

*/

let lastID = '0';               // Global ID counter                     

export const addProduct = (products, config) => {

    if(Array().isArray(products) && products.length > 0){

        let lastId = products[products.length - 1].id;  // take last item into list

        let idGen = idGenerator(lastId);
    }    

    else {

        let idGen = idGenerator(config.id);         // use default format from config
    }

}


/**
 * Function generate unique id based on global id
 * @param {object} config - configuration file by manager 
 * @returns increased unique id
 */

export const productIdGenerator = (config) => {        // 00 or 000 FORMAT

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

export const productExpiringDateGenerator = (config) => {

    let date = new Date();
    let startingDate = new Date(date);
    startingDate.setDate(date.getDate() + config.dayStartExecutionProg);
    
    let finishingDate = new Date(startingDate);
    finishingDate.setDate(startingDate.getDate() + (config.daysInWeek * config.weekExecutionProg));
    
    let random = Math.floor(Math.random()*(config.daysInWeek * config.weekExecutionProg));
    let expiringDate = new Date(startingDate);
    expiringDate.setDate(startingDate.getDate() + random);

    return expiringDate.toLocaleString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'}).toUpperCase().replaceAll(' ', '-');
}