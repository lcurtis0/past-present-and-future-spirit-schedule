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

    var measureHour = dayjs().format('hh');
    console.log("The current hour is " + measureHour +":00");

    var hour9 = $('#hour-9');
    var hour10 = $('#hour-10');
    var hour11 = $('#hour-11');
    var hour12 = $('#hour-12');
    var hour1 = $('#hour-1');
    var hour2 = $('#hour-2');
    var hour3 = $('#hour-3');
    var hour4 = $('#hour-4');
    var hour5 = $('#hour-5');

    console.log("This is the value at 9 "+ hour9);

    var timeBlock = $('.time-block');

   // const timeArray = [hour9, hour10, hour11, hour12, hour1, hour2, hour3, hour4, hour5];
    const assignHour = '{"hour9":9, "hour10":10, "hour11":11, "hour12":12, "hour1":1, "hour2":2}'
    const objHour = JSON.parse(assignHour);
    console.log(assignHour[5]);
    assignHour.hour.forEach(timeBlock =>{
        if (objHour > currentHour){
            timeBlock.classList.removeClass('.present');
            timeBlock.classList.removeClass('.future');
            timeBlock.classList.addClass('past');
        } else if (objHour === currentHour){
            timeBlock.classList.removeClass('.past');
            timeBlock.classList.removeClass('.future');
            timeBlock.classList.addClass('present');
        } else if (objHour < currentHour ){
            timeBlock.classList.removeClass('.past');
            timeBlock.classList.removeClass('.present');
            timeBlock.classList.addClass('future'); // the future will act as a default after 5PM because everything after is the following day in the future 
        }
    }); // timeCheck is a function that will be played out for each class hour

    /*
          // If blockHour is less than currentHour, remove 'future' and 'present' class, add 'past' class
          If blockHour is less than currentHour then
              Remove classes 'future' and 'present' from block
              Add class 'past' to block
          Else If blockHour is equal to currentHour then
              // If blockHour is the current hour, remove 'future' and 'past' class, add 'present' class
              Remove classes 'future' and 'past' from block
              Add class 'present' to block
          Else
              // If blockHour is greater than currentHour, remove 'present' and 'past' class, add 'future' class
              Remove classes 'present' and 'past' from block
              Add class 'future' to block
          End if

          */


    //   const txt = '{"name":"John", "age":30, "city":"New York"}'
//const obj = JSON.parse(txt);
//console.log(obj[1]);
//obj.name + ", " + obj.age;
/*

    $(document).ready(function(){
        $('.time-block').timepicker({


        });
    });

*/


   
} 
    setInterval (setTime, 15000);

/*
    Algorithm setTime()
  
    Begin
      // Get the current hour using a date library
      Set currentHour to current hour of the day
  
      Display "The current hour is" followed by the value of currentHour
  
      // For each element with class 'time-block'
      For each 'time-block' element as block do
  
          // Get the hour value from the element's ID,
           assuming it's the second part when splitting by '-'

          Set blockHour to the second part of the block's ID after splitting by '-'
  
          // Parse blockHour to an integer
          Convert blockHour to an integer
  
          // Convert blockHour to 24-hour format if it's less than 9
          If blockHour is less than 9 then
              Add 12 to blockHour
          End if
  
          // If blockHour is less than currentHour, remove 'future' and 'present' class, add 'past' class
          If blockHour is less than currentHour then
              Remove classes 'future' and 'present' from block
              Add class 'past' to block
          Else If blockHour is equal to currentHour then
              // If blockHour is the current hour, remove 'future' and 'past' class, add 'present' class
              Remove classes 'future' and 'past' from block
              Add class 'present' to block
          Else
              // If blockHour is greater than currentHour, remove 'present' and 'past' class, add 'future' class
              Remove classes 'present' and 'past' from block
              Add class 'future' to block
          End if
  
      End for
  
    End
    
    // Run setTime every minute
    Repeat setTime every 60 seconds
  
  End Algorithm

  Note that this code assumes that you're using a 24-hour clock, where hours go from 0 (midnight) to 23. This is the default for JavaScript's Date object, as well as for dayjs. It also assumes that your hour blocks start from 9 AM and go to 5 PM, in which case you would need to convert the block hour to a 24-hour format.

     */


    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
 // });