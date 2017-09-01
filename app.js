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
	notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
	notes.getAll();
} else if (command === 'remove') {
	notes.removeNote(argv.title);
} else if (command === 'read') {
	notes.getNotes(argv.title);
} else {
	console.log('Command not recognized');
}