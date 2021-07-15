var saveButton = $('.saveBtn');

//Detects when the page is ready for the javascript
$(document).ready(function() {
    //Current date displayed at top
    var currentDate = moment().format('MMM Do, YYYY');
    $('#currentDay').text(currentDate);
})
// Create calendar rows dynamically
//time block rows are color coded for past, present, and future
//Click on the time block to add and event
//Click the save button to save to local storage
//Saved events persist after page reload

var saveButton = $('.saveBtn');