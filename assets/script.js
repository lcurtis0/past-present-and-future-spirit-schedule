


$(function () { //Large function wrap

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

           //console.log(hourID);
  
           
            if (textarea) {
             $(this).find('textarea').val(textarea);
            
            $("#lastReminder").click(function(){ 
                console.log("New latest reminder made");
               // $("#reminderText").empty();
                var newHour;
                var ampm;
                hourRepl = hourID.replace("hour-",'');
                hourPrint = parseInt(hourRepl);
                if (hourPrint >= 12){
                    newHour = hourPrint - 12;
                    console.log("this is newHour" + hourPrint);
                    ampm = "PM";
                    console.log("this is ampm");
                } else if(hourPrint < 12){
                    newHour = hourID;
                    ampm = "AM";
                }
                console.log(newHour, ampm, textarea, hourID);
              $("#reminderText").append("<p> This reminder is to : " + textarea + ". To be done at " + newHour  + ":00" + ampm + "</p>" );
                })
              }; 
            });



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

 

// https://blog.logrocket.com/localstorage-javascript-complete-guide/

 $('#clearBtn').click(function() {
    
    localStorage.clear();
    location.reload();
    });

});