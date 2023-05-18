## Age Calculator  

### Features:  
- user enters birthday into input fields  
- age is calculated in year/month/day specificity   
- displays correct error messages for invalid fields
- calculator is sensitive to number of days in each month (ex. Jan 31st is a valid date, Feb 31st is NOT a valid date)  

### Project Created Using:  
- HTML  
- CSS  
- Vanilla Javascript

### Resources used:  
- MDN documentation  
- Chat GPT4
- stack overflow


The javascript portion of this application took me a long time to build. I am particularly proud of this function: 


checkDays = (day,month) => {  
```
  const thirtyOnePattern = /^(?:[1-9]|1\d|2[0-9]|3[0-1])$/;  
  const thirtyPattern = /^(?:[1-9]|[12]\d|30)$/;  
  const twentyeightPattern = /^(?:[1-9]|1\d|2[0-8])$/;  
  
  if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
  ```
    daysLabel = 31  
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {  
    daysLabel = 30;  
  } else if (month === 2) {  
    daysLabel = 28;  
  } else {   
    daysLabel = 'none'  
    ```
  }   
  
  if (daysLabel === 31 || daysLabel === 'none') {  
  ```
    dayIsValid = thirtyOnePattern.test(day);  
  } else if (daysLabel === 30) {  
    dayIsValid = thirtyPattern.test(day);  
  } else if (daysLabel === 28) {  
    dayIsValid = twentyeightPattern.test(day);  
  } else {  
    dayIsValid = false;  
  }  
  return dayIsValid;  
  ```
};    

In this function I use a combination of Regular Expressions and conditional statements to determine whether or not a pair of numeric values representing a day and a month are valid or not. (example - Jan 31st is a valid date, Feb 31st is NOT a valid date, feb only has 28 days)  
  
This calculator does not take leap years into account.   
  
Live Site URL: https://chriscablish.github.io/age-calculator-app/  
Repository URL:  https://github.com/ChrisCablish/age-calculator-app  
