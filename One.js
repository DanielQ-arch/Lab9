let characters = ['Harry', 'Hermione', 'Ron', 'Draco', 'Luna'];

for (let i = 0; i < characters.length; i++);
    console.log(characters[i]);


var firstName = 'Harry';

var house = 'Gryffindor';

console.log("Welcome, ${firstName} of ${Gryffindor}");


var characterName = 'Hermione';

console.log(characterName.toLowerCase());
console.log(characterName.toUpperCase());

var spell = 'Expelliarmus';

console.log(spell.trim());


var quote = 'I solemnly swear that I am up to no good';

console.log(quote.slice());


var firstName = 'Ron';
var lastName = 'Weasley';

console.log(firstName.concat('',lastName));

var sentence = 'Draco is a good wizard';

var newsentence = sentence.replace('good','bad');

console.log(newsentence);

let houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw'];

houses.push('Slytherin');

houses.pop();

console.log(houses);

let spells = ['Alohomora', 'Lumos', 'Nox'];

spells.unshift(Accio);

spells.shift();

console.log(spells);

let professors = ['Dumbledore', 'McGonagall', 'Snape', 'Hagrid'];

selectedprofessors = professors.slice(1,3);

console.log(selectedprofessors);

let students = ['Neville', 'Seamus', 'Dean', 'Parvati'];

students.splice(1,2);

console.log(students);

var phrase = 'Mischief Managed';

var trimmedphrase = phrase.trim();

var lowercasephrase = trimmedphrase.toLowerCase();

var finalphrase = lowercasephrase.concat('- Harry');

console.log(finalphrase);

let wizards = ['Harry', 'Hermione', 'Ron'];

wizards.push('Luna','Draco');

console.log(wizards);

var message = 'Welcome to Hogwarts School of Witchcraft and Wizardry';

var modifiedmessage = message.slice('Hogwarts');

var finalmessage = modifiedmessage.concat('Castle');

console.log(finalmessage);


