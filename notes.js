console.log('starting notes.js');

// module.exports.addNote = () => {
//     console.log('add Note');
//     return 'New note';
// }

var addNote = (title, body) => {
	console.log('Adding Note ', title, body);
};
var getAll = () => {
	console.log('Getting All Notes ');
};
var getNotes = (title) => {
	console.log('Getting Note ', title);
};
var removeNote = (title) => {
	console.log('Removing Note ', title);
};

module.exports = {
	addNote,
	getAll,
	getNotes,
	removeNote
};