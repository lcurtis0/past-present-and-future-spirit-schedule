// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {

    // TODO: Add a listener for click events on the save button. 
    //This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. 

    $('saveBtn').on("click", function(){

    $(function() {
        // Add a click event listener to the save button
        $('.saveBtn').on('click', function() {
          // Get the ID of the parent time-block
          var hourID = $(this).closest('.time-block').attr('id'); // the closest method 
          // Get the user input from the textarea
          var textarea = $(this).siblings('textarea').val();
          // Save the user input in local storage using the hourID as the key
          localStorage.setItem(hourID, textarea);
        });
      
        // Retrieve the saved user inputs from local storage and set the values of the corresponding textarea elements

        $('').on("click", function(){

        $('.time-block').each(function() {
          var hourID = $(this).attr('id');
          var textarea = localStorage.getItem(hourID);
          if (textarea) {
            $(this).find('textarea').val(textarea);
            var showReminder = ("<p>");
            showReminder.append('reminderText').text("" + textarea);
            showReminder.text("" + textarea);
          }
        });
      
        // Rest of your code...
      });

    })


//});
   //May consider clearing local storage using localtorage.clear

    //HINT: What does `this` reference in the click listener
    // function? -D

    // How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked?  -D
    
    //How might the id be
    // useful when saving the description in local storage?

//});

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

var meridiem = dayjs().format('A');
$('#meridiem').text(meridiem);

}
 setInterval (displayClock, 1000);

 // Huge credit to Coders Media and The Trendliners for calling functions every second
 // Coders media : https://www.youtube.com/watch?v=_CdXRD4eo6k&ab_channel=CodersMedia
 // The Trendliners : https://www.youtube.com/watch?v=xZkG8BediLw&ab_channel=TheTrendliners


function setTime(){

    var measureHour = dayjs().format('HH');
    console.log("The current hour is " + measureHour +":00");

    var timeBlock = $('.time-block');

console.log(timeBlock);
timeBlock.each(function() { //each is jqueury method used to loop through all DOM elements
//console.log($(this));
 var blockHour = $(this).attr("id").split("-")// attribute can grab id or class and the split creates an array with two indexs
 var arrayTime = blockHour[1]; //grabs the first index of the array
// console.log(arrayTime, blockHour);
var intTimeHour = parseInt(arrayTime);// Converts String to Int from index
//console.log(intTimeHour, measureHour);

if (intTimeHour < measureHour){ // intTimerHour represntes the index of each number in the id and compares it. Since were using the the 24 hour clock it roates through out the day
    $(this).removeClass('present');// "this" grabs the whole div not just the class and asigns whatever methods given
    $(this).removeClass('future');
    $(this).addClass('past');
 } else if (intTimeHour === measureHour){
    $(this).removeClass('past');
    $(this).removeClass('future');
    $(this).addClass('present');
 } else if (intTimeHour > measureHour ){
    $(this).removeClass('past');
    $(this).removeClass('present');
    $(this).addClass('future'); // the future will act as a default after 5PM because everything after is the following day in the future 
 }
});

}
setInterval (setTime, 150000);

 /*
https://blog.logrocket.com/localstorage-javascript-complete-guide/
https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem
https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
https://www.youtube.com/@WebDevSimplified

});
    for (i=9; i <= 17; i++){
        console.log(i, timeBlock);
        if (i > measureHour){
           timeBlock.removeClass('present');
            timeBlock.removeClass('future');
            timeBlock.addClass('past');
        } else if (i === measureHour){
            timeBlock.removeClass('past');
            timeBlock.removeClass('future');
            timeBlock.addClass('present');
        } else if (i < measureHour ){
            timeBlock.removeClass('past');
            timeBlock.removeClass('present');
            timeBlock.addClass('future'); // the future will act as a default after 5PM because everything after is the following day in the future 
        }
        */
    



 // timeCheck is a function that will be played out for each class hour


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

 var timeBlock = $('.time-block');

 timeBlock.each(function() { //each is jqueury method used to loop through all DOM elements
   //console.log($(this));
    var blockHour = $(this).attr("id").split("-")// attribute can grab id or class and the split creates an array with two indexs
    var arrayTime = blockHour[1]; //grabs the first index of the array
   // console.log(arrayTime, blockHour);
   var intTimeHour = parseInt(arrayTime);// Converts String to Int from index
   //console.log(intTimeHour, measureHour);
   console.log(intTimeHour);

  localStorage.setItem('userInput', JSON.stringify({

    

  })
  );

})
