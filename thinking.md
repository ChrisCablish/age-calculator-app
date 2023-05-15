isARealDay can return false if either the day OR month is not in the accetpable parameters.

that means i could enter a valid day but an invalid month and isARealDay would still return false. 


this section of code is meant to display an error message under the day input if the day is not valid 

if (isARealDay === false) {
    dayErrorMessage.style.display = 'inline';
}

That isn't right because, as i said before checkDays() will return false if the day is valid but the month isn't.


checkDays is great for checking if a day is valid when a valid month is entered. 



checkDays(12, 24);


isARealDay doesn't check the day, it checks whether it is avalid DATE. DD/MM. Thats the problem. 