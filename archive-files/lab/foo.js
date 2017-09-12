// var bar = {
//     name: 'David'
// };

// var stringObj = JSON.stringify(bar);

// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "David", "age": 33}';

// var person = JSON.parse(personString); // converts back to an object

// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
	title: 'Some title',
	body: 'Some body'
};

// convert JSON to string
var originalNoteString = JSON.stringify(originalNote);

// write strings from JSON to notes.json
fs.writeFileSync('notes.json', originalNoteString);

// Save Read out contents
var noteString = fs.readFileSync('notes.json');

// Save JSON object to note
var note = JSON.parse(noteString);

// print out note 
console.log(typeof note);
console.log(note.title);