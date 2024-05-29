const personOne = {
    'Name': 'Thomas Mukararia',
    'age': '46',
    'dob': '1-2-1990',
    'course': ['Devops' , 'miniapps dev' , 'cybersecurity'],
    'school': 'Moringa'
};

//methods
const Name = personOne.Name;
console.log('the name is', Name);

const age = personOne.age;
console.log('his age is ', age);

personOne['placeofbirth'] = 'Maua';
console.log(personOne);