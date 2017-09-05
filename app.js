console.log('Starting app.');

const fs = require('fs');
const _ = require('lodash'); // a set of handy utilities 
const yargs = require('yargs');
const notes = require('./notes.js'); // relative path to notes.js. module.export is saved to notes constant

const argv = yargs.argv;
var command = argv._[0];

console.log('command: ', command);

console.log('Yargs: ', argv);

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log('Note created!');
		notes.logNote(note);
	} else {
		console.log('Note title already exists!')
	}
} else if (command === 'list') {
	notes.getAll();
} else if (command === 'remove') {
	var noteRemove = notes.removeNote(argv.title);
	var message = noteRemove ? 'Note was removed' : 'Note not found';
	console.log(message);
} else if (command === 'read') {
	var note = notes.getNotes(argv.title);
	if (note) {
		console.log('Reading Note: ');
		notes.logNote(note);
	} else {
		console.log('Note does not exists!')
	}
} else {
	console.log('Command not recognized');
}