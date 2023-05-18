//variables
const birthdayForm = document.getElementById('birthday__form');
const dayEntered = document.getElementById('input__day');
const monthEntered = document.getElementById('input__month');
const yearEntered = document.getElementById('input__year');
const submitButton = document.getElementById('submit');
const currentDay = new Date().getDate();
const currentMonth = new Date().getMonth() + 1;
const currentYear = new Date().getFullYear();
const dayErrorMessage = document.getElementById('day__error');
const monthErrorMessage = document.getElementById('month__error');
const yearErrorMessage = document.getElementById('year__error');
const yearsDisplay = document.getElementById('years__number');
const monthsDisplay = document.getElementById('months__number');
const daysDisplay = document.getElementById('days__number');
const dayLabelTop = document.getElementById('label__day');
const monthLabelTop = document.getElementById('label__month');
const yearLabelTop = document.getElementById('label__year');

let dayIsValid;
let monthIsValid;
let yearIsValid;

let dayDifference;
let monthDifference;
let yearDifference;

let daysLabel;

//hide errors
const clearErrors = () => {
  dayErrorMessage.style.display = 'none';
  monthErrorMessage.style.display = 'none'; 
  yearErrorMessage.style.display = 'none';
}

clearErrors();

//blank init values
const clearDisplay = () => {
  yearsDisplay.innerText = '--';
  monthsDisplay.innerText = '--';
  daysDisplay.innerText = '--';
}

clearDisplay();

//click event for submit
birthdayForm.addEventListener('submit', (event) => {
  event.preventDefault();
  clearErrors();
  resetErrorColors();
 
  checkInputs(parseInt(dayEntered.value), parseInt(monthEntered.value), parseInt(yearEntered.value));

  if (!dayIsValid) {
    displayDayError();
    badDay();
  } 
  if (!monthIsValid) {
    displayMonthError()  
    badMonth();
  }

  //calculate and display Birthday

  calculateAge(parseInt(dayEntered.value), parseInt(monthEntered.value), parseInt(yearEntered.value));

  yearsDisplay.innerText = yearDifference;
  monthsDisplay.innerText = monthDifference;
  daysDisplay.innerText = dayDifference; 

  //do not display invalid ages
  if (yearIsValid === false || monthIsValid === false || dayIsValid === false ) {
    clearDisplay();
  }
});

//this function will check validity of d/m inputs 
const checkInputs = (day,month) => { 
  checkDays(day,month);
  checkMonth(month);
}
 
//tell this function which regEx to check input against using month parameter (runs inside checkInputs())

checkDays = (day,month) => {
  const thirtyOnePattern = /^(?:[1-9]|1\d|2[0-9]|3[0-1])$/;
  const thirtyPattern = /^(?:[1-9]|[12]\d|30)$/;
  const twentyeightPattern = /^(?:[1-9]|1\d|2[0-8])$/;
  
  if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    daysLabel = 31
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    daysLabel = 30;
  } else if (month === 2) {
    daysLabel = 28;
  } else { 
    daysLabel = 'none'
  } 

  if (daysLabel === 31 || daysLabel === 'none') {
    dayIsValid = thirtyOnePattern.test(day);
  } else if (daysLabel === 30) {
    dayIsValid = thirtyPattern.test(day);
  } else if (daysLabel === 28) {
    dayIsValid = twentyeightPattern.test(day);
  } else {
    dayIsValid = false;
  }
  return dayIsValid;
};

//check if month is valid (runs inside checkInputs())

const checkMonth = (month) => {
  const monthPattern = /^(?:[1-9]|1[0-2])$/;
  monthIsValid = monthPattern.test(month);
  return monthIsValid;
}

//error display functions

const displayDayError = () => {
  dayErrorMessage.style.display = 'inline';
}

const displayMonthError = () => {
  monthErrorMessage.style.display = 'inline'
}

const displayYearError = () => {
  yearErrorMessage.style.display = 'inline';
}

// find out the age of user
const calculateAge = (day,month,year) => {
  const calculateDays = () => {
    return currentDay - day;
  }

  const calculateMonths = () => {
     return currentMonth - month;
    }

  const calculateYears = () => {
    if (year === undefined || year === NaN || year === ''){
      return 0
    } else {
      return currentYear - year;
    }
    
    }

    

  dayDifference = calculateDays();
  monthDifference = calculateMonths();
  yearDifference = calculateYears();
 
  if (dayDifference < 0) {
    dayDifference = daysLabel + dayDifference;
    //negative days means we "go back" one month
    monthDifference = monthDifference -1;
  }
 
  if (monthDifference < 0) {
    monthDifference = 12 + monthDifference;
    yearDifference = yearDifference -1;
  }

  //if yearDiffernce is less than 0 it means user has input a future time, which is invalid

  if (yearDifference < 0) {
    yearIsValid = false;
    displayYearError(); 
    badYear();
  }

}

//functions for changing input border and label colors
const badDay = () => {
  dayEntered.style.borderColor = "hsl(0, 100%, 67%)";
  dayLabelTop.style.color = "hsl(0, 100%, 67%)";
}

const badMonth = () => {
  monthEntered.style.borderColor = "hsl(0, 100%, 67%)";
  monthLabelTop.style.color = "hsl(0, 100%, 67%)";
}

const badYear = () => {
  yearEntered.style.borderColor = "hsl(0, 100%, 67%)";
  yearLabelTop.style.color = "hsl(0, 100%, 67%)";
}


// reset error colors
const resetErrorColors = () => {
  dayEntered.style.borderColor = "hsl(0, 1%, 44%)";
  monthEntered.style.borderColor = "hsl(0, 1%, 44%)";
  yearEntered.style.borderColor = "hsl(0, 1%, 44%)";
  dayLabelTop.style.color = "hsl(0, 1%, 44%)";
  monthLabelTop.style.color = "hsl(0, 1%, 44%)";
  yearLabelTop.style.color = "hsl(0, 1%, 44%)";
  }































// //variables
// const birthdayForm = document.getElementById('birthday__form');
// const dayEntered = document.getElementById('input__day');
// const monthEntered = document.getElementById('input__month');
// const yearEntered = document.getElementById('input__year');
// const submitButton = document.getElementById('submit');
// const currentDay = new Date().getDate();
// const currentMonth = new Date().getMonth() + 1;
// const currentYear = new Date().getFullYear();
// const dayErrorMessage = document.getElementById('day__error');
// const monthErrorMessage = document.getElementById('month__error');
// const yearErrorMessage = document.getElementById('year__error');
// const yearsDisplay = document.getElementById('years__number');
// const monthsDisplay = document.getElementById('months__number');
// const daysDisplay = document.getElementById('days__number');
// const dayLabelTop = document.getElementById('label__day');
// const monthLabelTop = document.getElementById('label__month');
// const yearLabelTop = document.getElementById('label__year');

// // display "--" at start and if date is invalid;
// const setValuesToNull = () => {
//     yearsDisplay.innerText = '--';
//     monthsDisplay.innerText = '--';
//     daysDisplay.innerText = '--';
// }

// setValuesToNull();

// //click event for submit
// birthdayForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     clearErrors();
//     resetErrorColors();

//     //find difference between current d/m/y and birth d/m/y
//     const calculateDays = () => {
//         return currentDay - parseInt(dayEntered.value);
//     }
    
//     const calculateMonths = () => {
//          return currentMonth - parseInt(monthEntered.value);
//         }

//     const calculateYears = () => {
//         return currentYear - parseInt(yearEntered.value);
//         }

//     //store differences in var
//     let dayDifference = calculateDays();
//     let monthDifference = calculateMonths();
//     let yearDifference = calculateYears();

//     //if the difference in days is less than 0, subtract the absolute value of dayDifference from the total number of days in that month. 
//     if (dayDifference < 0) {
//         dayDifference = numberOfDays + dayDifference;
//         //negative days means we "go back" one month
//         monthDifference = monthDifference -1;
//     }

//     //if the difference in months is less than 0, subtract the absolute value of monthDifference from 12 and subtract 1 from the year. 
//     if (monthDifference < 0) {
//         monthDifference = 12 + monthDifference;
//         yearDifference = yearDifference -1;
//     }

    
//     //update diplays to show elapsed time between current date and birthdate (aka users age)
//     yearsDisplay.innerText = yearDifference;
//     monthsDisplay.innerText = monthDifference;
//     daysDisplay.innerText = dayDifference; 

//     //store return value of checkDays()
//     const isARealDay = checkDays(parseInt(dayEntered.value), parseInt(monthEntered.value));   

//     //check if the month entered by user is outside range of 1-12
//     if (parseInt(monthEntered.value) > 12 || parseInt(monthEntered.value) < 1) {
//         //if it is out of range, display error and do not display age
//         monthErrorMessage.style.display = 'inline';
//         badMonth();
//         setValuesToNull();
//         //also if month is out of range, check if day value is within accapetable day value parameters (number between 1 and 31)
//         if (parseInt(dayEntered.value) > 31 || parseInt(dayEntered.value) < 1) {
//             //if day is out of range, display day error message
//             dayErrorMessage.style.display = 'inline';
//             badDay();
//         }

//         //if yearDiffernce is less than 0 it means user has input a future year, which is invalid
//         if (yearDifference < 0) {
//           yearErrorMessage.style.display = 'inline';
//           badYear();
//           setValuesToNull();
//       }

//         return;
//     }
//     //check if day is valid. 
//     if (isARealDay === false) {
//         dayErrorMessage.style.display = 'inline';
//         badDay();
//         setValuesToNull();
//     }

//   //if yearDiffernce is less than 0 it means user has input a future year, which is invalid
//   if (yearDifference < 0) {
//     yearErrorMessage.style.display = 'inline';
//     badYear();
//     setValuesToNull();
// }

// });

// //a function to check whether D/M combo is valid
// const checkDays = (day, month) => {
//     if (
//       (month === 1 ||
//         month === 3 ||
//         month === 5 ||
//         month === 7 ||
//         month === 8 ||
//         month === 10 ||
//         month === 12) &&
//       day <= 31
//     ) {
//       return true;
//     } else if (
//       (month === 4 || month === 6 || month === 9 || month === 11) &&
//       day <= 30
//     ) {
//       return true;
//     } else if (month === 2 && day <= 28) {
//       return true;
//     } else { 
//       return false;
//     }  
//   };
  
// //a function to determine the number of days in each month
// const findNumberOfDays = (month) => {
//     if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//         return 31;
//     } else if ( month === 4 || month === 6 || month === 9 || month === 11) {
//         return 30;
//     } else {
//         return 28;
//     }
// }



// const numberOfDays = findNumberOfDays(currentMonth)

// //function to clear previous error message when submit is clicked
// const clearErrors = () => {
//   dayErrorMessage.style.display = 'none';
//   monthErrorMessage.style.display = 'none'; 
//   yearErrorMessage.style.display = 'none';
// }

// //functins for changing input border and label colors

// const badDay = () => {
//   dayEntered.style.borderColor = "hsl(0, 100%, 67%)";
//   dayLabelTop.style.color = "hsl(0, 100%, 67%)";
// }

// const badMonth = () => {
//   monthEntered.style.borderColor = "hsl(0, 100%, 67%)";
//   monthLabelTop.style.color = "hsl(0, 100%, 67%)";
// }

// const badYear = () => {
//   yearEntered.style.borderColor = "hsl(0, 100%, 67%)";
//   yearLabelTop.style.color = "hsl(0, 100%, 67%)";
// }

// const resetErrorColors = () => {
//   dayEntered.style.borderColor = "hsl(0, 1%, 44%)";
//   monthEntered.style.borderColor = "hsl(0, 1%, 44%)";
//   yearEntered.style.borderColor = "hsl(0, 1%, 44%)";
//   dayLabelTop.style.color = "hsl(0, 1%, 44%)";
//   monthLabelTop.style.color = "hsl(0, 1%, 44%)";
//   yearLabelTop.style.color = "hsl(0, 1%, 44%)";
//   }

