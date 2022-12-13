

$(function () {
  // currentHour is compared to timeBlock
  // the declared var currentHour needs to be declared
  // before being used everywhere else in the code.
  var currentHour = parseInt(dayjs().hour());
  

  $('.time-block').each( function (){
    var timeBlock = parseInt($(this).attr('id'));
    console.log(timeBlock);
    console.log($(this));
    var timeDiv = $(this);
    if (timeBlock < currentHour) {
      timeDiv.addClass('past');
      timeDiv.removeClass('present');
      timeDiv.removeClass('future');
    } else if (timeBlock === currentHour) {
      timeDiv.addClass('present');
      timeDiv.removeClass('past');
      timeDiv.removeClass('future');
    } else if (timeBlock > currentHour){
      timeDiv.addClass('future');
      timeDiv.removeClass('present');
      timeDiv.removeClass('past');
    } else {
      return
    }
  });

// displays current time
  var currentTime = dayjs().format("dddd, MMMM D, YYYY h:mm A")
  $('#currentDay').text(currentTime);
  

 //save button stores what was typed to a corresponding time
$('.saveBtn').on("click", function () {
  var userInput = $(this).siblings('.description').val();
  var inputTime = $(this).parent().attr("id");
  localStorage.setItem(inputTime, userInput);
});

// code to pull values from local storage
$('#09 .description').val(localStorage.getItem("09"));
$('#10 .description').val(localStorage.getItem("10"));
$('#11 .description').val(localStorage.getItem("11"));
$('#12 .description').val(localStorage.getItem("12"));
$('#13 .description').val(localStorage.getItem("13"));
$('#14 .description').val(localStorage.getItem("14"));
$('#15 .description').val(localStorage.getItem("15"));
$('#16 .description').val(localStorage.getItem("16"));
$('#17 .description').val(localStorage.getItem("17"));

}
 

);
