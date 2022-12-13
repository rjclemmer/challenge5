// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// var reload = setInterval(schedule(), 10000);






 

 //


  //HINTS: How can the id attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes?
  
  //How can Day.js be used to get the current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 
  
  //HINT: How can the id attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  
  
  // var currentHour = dayjs().format("HH");
 





$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  /*var hourList = $('.time-block');
  for (let h = 0; h < hourList.length; h++) {
    let textHours = hourList[h].innerText;
    console.log(textHours);
    let numHours = parseInt(textHours);
    console.log(numHours);

    for ( let n = 0; n < numHours.length; n++) {
      if (modCurrentHour > numHours[n]) {
        hourList.addClass('past');
        hourList.removeClass('future');
        hourList.removeClass('present');
      } else if (modCurrentHour = numHours[n]) {
        hourList.addClass('present');
        }
      }
  }
  console.log(hourList);*/
/*
  $('.time-block').each( function (){
    var timeBlock = parseInt($(this).attr('id'));
    console.log(timeBlock);
    console.log($(this));
    var timeDiv = $(this).parent();
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
  });*/

  function changeClass() {

  }

  if (currentHour < 9) {
    $("#09").addClass("future");
    $("#09").removeClass("past");
    $("#09").removeClass("present");
  } else if (currentHour > 9) {
    $("#09").addClass("past");
    $("#09").removeClass("future");
    $("#09").removeClass("present");
  } else if (currentHour === 9) {
    $("#09").addClass("present");
    $("#09").removeClass("past");
    $("#09").removeClass("future");
  };

  if (currentHour < 10) {
    $("#10").addClass("future");
    $("10").removeClass("past");
    $("#10").removeClass("present");
  } else if (currentHour > 10) {
    $("#10").addClass("past");
    $("#10").removeClass("future");
    $("#10").removeClass("present");
  } else if (currentHour === 10) {
    $("#10").addClass("present");
    $("#10").removeClass("past");
    $("#10").removeClass("future");
  };

  if (currentHour < 11) {
    $("#11").addClass("future");
    $("#11").removeClass("past");
    $("#11").removeClass("present");
  } else if (currentHour > 11) {
    $("#11").addClass("past");
    $("#11").removeClass("future");
    $("#11").removeClass("present");
  } else if (currentHour === 11) {
    $("#11").addClass("present");
    $("#11").removeClass("past");
    $("#11").removeClass("future");
  };



  //for (let h = 0; h<)
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  var currentTime = dayjs().format("dddd, MMMM D, YYYY h:mm A")
  $('#currentDay').text(currentTime);
  var currentHour = 11
 // parseInt(dayjs().hour());
  /*
  if (currentHour > 12) {
    var modCurrentHour = (parseInt(currentHour) - 12);
  } else {
    modCurrentHour = (parseInt(currentHour));
  }
  */
 
  console.log(currentHour);
 // console.log(modCurrentHour);
  console.log(currentTime);

  //save button stores what was typed to a corresponding time
$('.saveBtn').on("click", function () {
  var userInput = $(this).siblings('.description').val();
  var inputTime = $(this).parent().attr("id");
  localStorage.setItem(inputTime, userInput);
});


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
