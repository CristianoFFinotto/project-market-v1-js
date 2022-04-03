# Project description

A JS project, that allows you to managed a list of products into a supermarket. This project allows you to control the expiry dates and the checks carried out. These will be divided according to the week of arrival. In addition, depending on the expiration date and shelf life, they will be categorized as "new", "old" or "expired", with different colors.

# Usage

To set the initial application parameters (maximum storage period of the products, number of products arriving weekly, after how many days the program must begin, number of weeks for which the program must operate, how long to print the outputs, how many days there are in a week, ID format, type of padding), you must go to the JS file named config.js and set the above parameters. 
To run the program, you must open the index file on a browser and then press F12 to open the browser console to see the program results.

# File and project structure

Into the folder containings the files there is a sub-folder called "scripts" with: 
  - config file, where you can set the parameters of the application, 
  - the different functions, divided into
    - "tools", where there are the functions which allows you to use specific tools
    - "flow", where there are the main function that are then called in the main 
  - the mains that contains the logic of the whole project
There is also the index file where you can log 
The project has been structured in this way so as to work on codes not too long and also for a practical convenience in working on well separated functions according to their role. 
To recall the functions we used import/export system so that you can access it from any file, creating a homogeneity in the construction of the program.  

# Features delivered

Feature 1: The program gets the current date from the browser and configures a start date to start operation after a configurable period of time. A counter sets the number of weeks after which the program will stop running.

Feature 2: The program calls the functions to generate the elements that will be inserted in the lines that will be printed.

Feature 3: The program generates a unique ID for each type of product marketed.

Feature 4: The program generates the name of a product that is marketed, choosing from a preset and configurable list.

Feature 5: The program generates a random expiration date, which will be used to determine the status.

Feature 6: The program determines the status of the product according to the date of arrival and the date of expiration, dividing all products into "new", "valid", "old" and "expired".

Feature 7: The program periodically checks all the products on the shelf and reports the number.

Feature 8: The program enters a padding in the product name and state.

Feature 9: The program, during the period of operation, prints in the console all the elements it has previously calculated, always using the same format.

# Bonuses deliveres

Bonus 1:
Missing

Bonus 2:
The program, after showing the expiry date of a product, by printing its ID, colors the line of the food according to the status that characterizes it: a product in green indicates that it is new, blue that it is valid, yellow that it is old (it has not expired but is on the shelf after several checks), while red indicates that the product has expired at the time of the check, so it will be removed.

Bonus 3:
All dates are printed in day-month-year format (XX-XXX-XXXX) and months are capitalized and abbreviated.
The program does not use moment.js

# Browser compatibility 

 - Chrome version 99.0.4844.84: tested and fully compatible 
 - Edge version 99.0.1150.55:
 - Opera 

# External resources

---

# License and contact information

All rights reserved to the authors and the ITS-ICT Institute of Piedmont.
The program can be viewed and modified only with the unanimous permission of the developers.
To contact the developers use the email addresses belowin the "Authors" section.

# Authors

 - Cristiano Francesco Finotto - cristiano.finotto@edu.itspiemonte.it 
 - Federico Luciano Stroppiana - federico.stroppiana@edu.itspiemonte.it
 - Isolde Brustolon - isolde.brustolon@edu.itspiemonte.it
 - Joele Melchiorre - joele.melchiorre@edu.itspiemonte.it

# Changelog and version history 

# Other information that you think is important

---

# Approach to solution 
Use an HTML boilerplate.
Use module to import lot of tools functions: validateSum, validateEven, validateLength, validateLetter, validatePattern.
Execute all validation functions on code credit card and append eventually errors, display result of validation. 

### I.C.T. I.T.S. Web Developer