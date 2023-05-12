
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


const setValuesToNull = () => {
    yearsDisplay.innerText = '--';
    monthsDisplay.innerText = '--';
    daysDisplay.innerText = '--';
}

setValuesToNull();



birthdayForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const calculateDays = () => {
        return currentDay - parseInt(dayEntered.value);
    }
    
    const calculateMonths = () => {
         return currentMonth - parseInt(monthEntered.value);
        }

    const calculateYears = () => {
        return currentYear - parseInt(yearEntered.value);
        }

    let dayDifference = calculateDays();
    let monthDifference = calculateMonths();
    let yearDifference = calculateYears();

    if (dayDifference < 0) {
        dayDifference = numberOfDays + dayDifference;
        monthDifference = monthDifference -1;
    }

    if (monthDifference < 0) {
        monthDifference = 12 + monthDifference;
        yearDifference = yearDifference -1;
    }

    if (yearDifference < 0) {
        yearErrorMessage.style.display = 'inline';
        setValuesToNull();
    }

    yearsDisplay.innerText = yearDifference;
    monthsDisplay.innerText = monthDifference;
    daysDisplay.innerText = dayDifference; 


    const isARealDay = checkDays(parseInt(dayEntered.value), parseInt(monthEntered.value));   

    if (parseInt(monthEntered.value) > 12 || parseInt(monthEntered.value) < 1) {
        monthErrorMessage.style.display = 'inline';
        setValuesToNull();
        if (parseInt(dayEntered.value) > 31 || parseInt(dayEntered.value) < 1) {
            dayErrorMessage.style.display = 'inline';
        }
        return;
    }

    if (isARealDay === false) {
        dayErrorMessage.style.display = 'inline';
        setValuesToNull();
    }

});


const checkDays = (day, month) => {
    if (
      (month === 1 ||
        month === 3 ||
        month === 5 ||
        month === 7 ||
        month === 8 ||
        month === 10 ||
        month === 12) &&
      day <= 31
    ) {
      return true;
    } else if (
      (month === 4 || month === 6 || month === 9 || month === 11) &&
      day <= 30
    ) {
      return true;
    } else if (month === 2 && day <= 28) {
      return true;
    } else { 
      return false;
    }  
  };
  

const findNumberOfDays = (month) => {
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        return 31;
    } else if ( month === 4 || month === 6 || month === 9 || month === 11) {
        return 30;
    } else {
        return 28;
    }
}

const numberOfDays = findNumberOfDays(currentMonth)




