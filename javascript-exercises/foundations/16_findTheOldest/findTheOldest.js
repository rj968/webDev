const findTheOldest = function(people) {
    return people.reduce((oldest,current) => {

        if(getAge(oldest) > getAge(current))
            return oldest;
        else 
            return current;
    })
};

const getAge = function(person)
{
    let age;

    if(!person.yearOfDeath)
        age = new Date().getFullYear() - person.yearOfBirth;
    else 
        age = person.yearOfDeath - person.yearOfBirth
    return age;    
}

// Do not edit below this line
module.exports = findTheOldest;
