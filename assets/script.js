// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

    // TODO: Add a listener for click events on the save button. 
    //This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. 


           // Add a click event listener to the save button
           $('.saveBtn').on('click', function() {
            // Getting the ID of the parent time-block
            var hourID = $(this).parent('.time-block').attr('id');
            // Getting the user input from the textarea
            var textarea = $(this).siblings('textarea').val();
            // Save the user input in local storage using the hourID as the key
            localStorage.setItem(hourID, textarea);
            console.log(hourID);
            console.log(textarea);
        
            });
        
          // Retrieve the saved user inputs from local storage and set the values of the corresponding textarea elements
  
          
       $('.time-block').each(function() {
            var hourID = $(this).attr('id');
            var textarea = localStorage.getItem(hourID);

            var meridiem = dayjs().format('A');
            $('#meridiem').text(meridiem);

            var Hour = dayjs().format('HH');



           //console.log(hourID);
  
           
            if (textarea) {
             $(this).find('textarea').val(textarea);
            
            $("#lastReminder").click(function(){ 
                if (hourID >= 12){
                    var newHour = hourID - 12;
                    var ampm = "PM";
                } else if(hourID < 12){
                    ampm = "AM";
                }
              $("#reminderText").append("<p> This is the latest reminders made : " + textarea + ". made at " + newHour /*hourID.replace("hour-",'') */+ ":00" + ampm + "</p>" );
                })
              }; 
            });




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
    //console.log("The current hour is " + measureHour +":00");

    var timeBlock = $('.time-block');


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
 } else if (intTimeHour <= measureHour){
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
setTime();
setInterval (setTime, 10 * 60 * 1000);

 /*
https://blog.logrocket.com/localstorage-javascript-complete-guide/
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




    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
 // });


 $('clearBtn').click (function() {
    
    localStorage.clear();
    });

});