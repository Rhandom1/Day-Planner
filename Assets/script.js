var saveButton = $('.saveBtn');
var hourEl = $('.hour');


//Detects when the page is ready for the javascript
$(document).ready(function() {
    //Current date displayed at top
    var currentDate = moment().format('MMM Do, YYYY');
    $('#currentDay').text(currentDate);

    // Apply current time to rows
    var currentTime = moment().format('h a');
    $('.hour').text(currentTime);

    //Click the save button to save to local storage
    

})


//time block rows are color coded for past, present, and future
//Click on the time block to add and event

//Saved events persist after page reload

