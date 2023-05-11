const birthdayForm = document.getElementById('birthday__form');
const dayEntered = document.getElementById('input__day');
const monthEntered = document.getElementById('input__month');
const yearEntered = document.getElementById('input__year');
const submitButton = document.getElementById('submit');
const currentDay = new Date().getDate();
const currentMonth = new Date().getMonth() + 1;
const currentYear = new Date().getFullYear();

const yearsDisplay = document.getElementById('years__number');
const monthsDisplay = document.getElementById('months__number');
const daysDisplay = document.getElementById('days__number');

yearsDisplay.innerText = '--';
monthsDisplay.innerText = '--';
daysDisplay.innerText = '--';

birthdayForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const calculateDays = () => {
        return currentDay - dayEntered.value;
    }
    
    const calculateMonths = () => {
         return currentMonth - monthEntered.value;
        }

    const calculateYears = () => {
        return currentYear - yearEntered.value;
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
        console.log('pick a valid year');
    }

    yearsDisplay.innerText = yearDifference;
    monthsDisplay.innerText = monthDifference;
    daysDisplay.innerText = dayDifference; 
});

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
