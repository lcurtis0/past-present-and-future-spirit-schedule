// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//$(function () {

    // TODO: Add a listener for click events on the save button. 
    //This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. 
    
    //HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

    /*

    var saveBtn = $('.saveBtn');

    saveBtn.addEventListener("click", )

    function keyInput () 
var textInput = $('.content');

*/

/*
var formEl = $('#pizza-form');
var firstNameEl = $('input[name="first-name"]');
var lastNameEl = $('input[name="last-name"]');
var emailEl = $('input[name="email"]');
var githubEl = $('input[name="github"]');

function handleFormSubmit(event) {
  // Prevent the default behavior
  event.preventDefault();

  console.log('First Name:', firstNameEl.val());
  console.log('Last Name:', lastNameEl.val());
  console.log('Email:', emailEl.val());
  console.log('GitHub:', githubEl.val());

  // Select all checked options
  var checkedEl = $('input:checked');
  var selected = [];

  // Loop through checked options to store in array
  $.each(checkedEl, function () {
    selected.push($(this).val());
  });
  console.log('Toppings: ', selected.join(', '));

  // Clear input fields
  $('input[type="text"]').val('');
  $('input[type="email"]').val('');
  $('input[type="checkbox"]').prop('checked', false);
}

// Submit event on the form
formEl.on('submit', handleFormSubmit);
*/

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. 
    
    //HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    

function displayClock(){

var todaysDate = dayjs().format('MMM D, YYYY');
$('#todaysDate').text(todaysDate);

var weekDay = dayjs().format('dddd');
$('#currentDay').text(weekDay);

var time = dayjs().format('hh:mm:ss');
$('#currentTime').text(time);

}
 setInterval (displayClock, 1000);

 // Huge credit to Coders Media and The Trendliners for calling functions every second
 // Coders media : https://www.youtube.com/watch?v=_CdXRD4eo6k&ab_channel=CodersMedia
 // The Trendliners : https://www.youtube.com/watch?v=xZkG8BediLw&ab_channel=TheTrendliners


function setTime(){

    var measureHour = dayjs().get('hour');
    console.log("The current hour is" + measureHour);
/*
    var hour9 = $('#hour-9');
    var hour10 = $('#hour-10');
    var hour11 = $('#hour-11');
    var hour12 = $('#hour-12');
    var hour1 = $('#hour-1');
    var hour2 = $('#hour-2');
    var hour3 = $('#hour-3');
    var hour4 = $('#hour-4');
    var hour5 = $('#hour-5');
*/

    var timeblock = $('.time-block');

    $(document).ready(function(){
        $('.time-block').timepicker({


        });
    });

    for (i =0; i < 12; i++){

    if (measureHour === i){
        timeblock.removeClass(".past");
        timeblock.addClass(".present");
    } else if (measureHour > i){
        timeblock.removeClass(".past");
        timeblock.addClass(".future");
    } else {
        timeblock.addClass(".past");
    }

    }


/*
    function changeBlue(event) {
        // event.stopPropagation();
        event.currentTarget.setAttribute(
          "style",
          "background-color: blue"
        );
      }
*/


    //Perhaps to add an array would be one plan of attack

   
} 
    setInterval (setTime, 120000);




     


    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
 // });