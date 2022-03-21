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

export const idGenerator = (config) => {        // 00 or 000 FORMAT

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