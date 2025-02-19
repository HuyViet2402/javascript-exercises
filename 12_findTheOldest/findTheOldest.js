const findTheOldest = function(arrPeople, oldesAge = 0, oldestName = '') {
    if (arrPeople.length == 0) { 
        console.log(oldestName);
        return oldestName; 
    }
    let currentTimeOrDeath = (arrPeople[0].yearOfDeath == undefined)? 2025 : arrPeople[0].yearOfDeath;
    let currentAge = currentTimeOrDeath - arrPeople[0].yearOfBirth;
    if(oldesAge < currentAge) {
        oldesAge =  currentAge;
        oldestName = arrPeople[0].name;
    }
    return findTheOldest(arrPeople.slice(1), oldesAge, oldestName);
};

// Do not edit below this line
module.exports = findTheOldest;
