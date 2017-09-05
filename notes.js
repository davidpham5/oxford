console.log('starting notes.js');

// module.exports.addNote = () => {
//     console.log('add Note');
//     return 'New note';
// }
const fs = require('fs');

var fetchNotes = () => {
	// if the file does not exist, try catch
	try {
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch (error) {
		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title,
		body
	};
	// shorthand arrow function
	// this is the same as (note) => { return note.title === title; }
	var duplcateNotes = notes.filter((note) => note.title === title);
	
	if (duplcateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	}
};

var getAll = () => {
	console.log('getting notes');
	
};
var getNotes = (title) => {
	var notes = fetchNotes();
	var noteFiltered = notes.filter((note) => {
		return note.title === title;
	});

	return noteFiltered[0];
};
var removeNote = (title) => {
	// fetch the note
	var notes = fetchNotes();
	// filter out the notes, remove the one the title of the arg
	var anyDuplicates = notes.filter((note) => note.title !== title);
	// save notes array
	saveNotes(anyDuplicates);

	return notes.length !== anyDuplicates.length;
};

var logNote = (note) => {
	console.log('----');
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
}
module.exports = {
	addNote,
	getAll,
	getNotes,
	removeNote,
	logNote
};