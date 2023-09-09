// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  //displays current date
  let now = dayjs();
  let currentDate = $('#currentDay');
  currentDate.text('Current Date: ' + now.format('MM/DD/YYYY'));


  //variables to call each hour by ID
  let hourNine = $('#hour-9')
  let timeNine = dayjs().hour(9);

  let hourTen = $('#hour-10')
  let timeTen = dayjs().hour(10);

  let hourEleven = $('#hour-11')
  let timeEleven = dayjs().hour(11);

  let hourTwelve = $('#hour-12')
  let timeTwelve = dayjs().hour(12);

  let hourThirteen = $('#hour-13')
  let timeThirteen = dayjs().hour(13);

  let hourFourteen = $('#hour-14')
  let timeFourteen = dayjs().hour(14);

  let hourFifteen = $('#hour-15')
  let timeFifteen = dayjs().hour(15);

  let hourSixteen = $('#hour-16')
  let timeSixteen = dayjs().hour(16);

  let hourSeventeen = $('#hour-17')
  let timeSeventeen = dayjs().hour(17);


  //if/elseif/else statements for each hour to set color
//9am  
  if (timeNine.hour() > now.hour()) {
    hourNine.addClass('future')
  } else if (timeNine.hour() == now.hour()) {
    hourNine.addClass('present')
  } else {
    hourNine.addClass('past')
  };
//10am
  if (timeTen.hour() > now.hour()) {
    hourTen.addClass('future')
  } else if (timeTen.hour() == now.hour()) {
    hourTen.addClass('present')
  } else {
    hourTen.addClass('past')
  };
//11am
  if (timeEleven.hour() > now.hour()) {
    hourEleven.addClass('future')
  } else if (timeEleven.hour() == now.hour()) {
    hourEleven.addClass('present')
  } else {
    hourEleven.addClass('past')
  };
//12pm
  if (timeTwelve.hour() > now.hour()) {
    hourTwelve.addClass('future')
  } else if (timeTwelve.hour() == now.hour()) {
    hourTwelve.addClass('present')
  } else {
    hourTwelve.addClass('past')
  };
//1pm
  if (timeThirteen.hour() > now.hour()) {
    hourThirteen.addClass('future')
  } else if (timeThirteen.hour() == now.hour()) {
    hourThirteen.addClass('present')
  } else {
    hourThirteen.addClass('past')
  };
//2pm
  if (timeFourteen.hour() > now.hour()) {
    hourFourteen.addClass('future')
  } else if (timeFourteen.hour() === now.hour()) {
    hourFourteen.addClass('present')
  } else {
    hourFourteen.addClass('past')
  };
//3pm
  if (timeFifteen.hour() > now.hour()) {
    hourFifteen.addClass('future')
  } else if (timeFifteen.hour() == now.hour()) {
    hourFifteen.addClass('present')
  } else {
    hourFifteen.addClass('past')
  };
//4pm
  if (timeSixteen.hour() > now.hour()) {
    hourSixteen.addClass('future')
  } else if (timeSixteen.hour() == now.hour()) {
    hourSixteen.addClass('present')
  } else {
    hourSixteen.addClass('past')
  };
//5pm
  if (timeSeventeen.hour() > now.hour()) {
    hourSeventeen.addClass('future')
  } else if (timeSeventeen.hour() == now.hour()) {
    hourSeventeen.addClass('present')
  } else {
    hourSeventeen.addClass('past')
  };



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
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
/*
Add a if/then for time to remove time class and add applicable class comparing current time to schedule using 
IDs (hour-9, hour-10, etc...)
Add event listener to button that stores info in local storage and set to textarea html element

*/
});

