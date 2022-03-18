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

export const addProduct = (products) => {

    if(Array.isArray(products)){
        if(products.length > 0){       
            products.forEach(item => {
                Object.keys(item).forEach(key => {
                    console.log(item[key]);
                })
            });
        }
    }
}