var saveButton = $('.saveBtn');
var hourEl = $('.hour');


//Detects when the page is ready for the javascript
$(document).ready(function() {
    //Current date displayed at top
    var currentDate = moment().format('dddd MMM Do, YYYY');
    $('#currentDay').text(currentDate);

    // Apply current time to rows
    var currentTime = moment().format('h a');
        $('.hour').text(currentTime);

    function hourTracker(){
        
        

    }

    //Click the save button to save to local storage
    $('#hour1 textarea').val(localStorage.getItem('hour1'));
    $('#hour2 textarea').val(localStorage.getItem('hour2'));
    $('#hour3 textarea').val(localStorage.getItem('hour3'));
    $('#hour4 textarea').val(localStorage.getItem('hour4'));
    $('#hour5 textarea').val(localStorage.getItem('hour5'));
    $('#hour6 textarea').val(localStorage.getItem('hour6'));
    $('#hour7 textarea').val(localStorage.getItem('hour7'));
    $('#hour8 textarea').val(localStorage.getItem('hour8'));
    $('#hour9 textarea').val(localStorage.getItem('hour9'));

})


//time block rows are color coded for past, present, and future
//Click on the time block to add and event

//Saved events persist after page reload

