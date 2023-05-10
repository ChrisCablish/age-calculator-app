const dayEntered = document.getElementById('input__day');
const monthEntered = document.getElementById('input__month');
const yearEntered = document.getElementById('input__year');
const birthdayForm = document.getElementById('birthday__form');
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
        return difference = currentDay - dayEntered.value;
    }
    
    const calculateMonths = () => {
         return difference = currentMonth - monthEntered.value;
        }

    const calculateYears = () => {
        return difference = currentYear - yearEntered.value;
        }

    let dayDifference = calculateDays();
    let monthDifference = calculateMonths();
    let yearDifference = calculateYears();

    yearsDisplay.innerText = yearDifference;
    monthsDisplay.innerText = monthDifference;
    daysDisplay.innerText = dayDifference;

      
});




 


