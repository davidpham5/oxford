const fs = require('fs');
const _ = require('lodash'); // a set of handy utilities 
const yargs = require('yargs');
const notes = require('./notes.js'); // relative path to notes.js. module.export is saved to notes constant
const titleOptions = {
	describe: 'title of note',
	demand: true,// same as require, as in require the title of a note
	alias: 't'
}
const bodyOptions = {
	describe: 'body of the note',
	demand: true,
	alias: 'b'
}
const argv = yargs
	.command('add', 'Add note by typing in the title as --title="your title" and body --body="something of a body"',{
		title: titleOptions,
		body: bodyOptions
	})
	.command('list', 'List all notes')
	.command('read', 'Read a note', {
		title: titleOptions
	})
	.command('remove', 'remove note', {
		title: titleOptions
	})
	.help()
	.argv;
var command = argv._[0];

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log('Note created!');
		notes.logNote(note);
	} else {
		console.log('Note title already exists!')
	}
} else if (command === 'list') {
	var allNotes = notes.getAll();
	console.log(`Printing all notes: ${allNotes.length} notes`);
	allNotes.forEach((note) => notes.logNote(note));
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