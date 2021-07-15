//Current date displayed at top
var date = moment().format('MMM Do, YYYY');
// Create calendar rows dynamically
//time block rows are color coded for past, present, and future
//Click on the time block to add and event
//Click the save button to save to local storage
//Saved events persist after page reload

var saveButton = $('.saveBtn');