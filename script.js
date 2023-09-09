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


  //Store info in local storage and save on refresh
//9am
  $("#saveNine").click(function(){
    const nineAppt = $('#textNine').val();
    localStorage.setItem('nine', nineAppt);   
  })
   const setNine = $("#textNine");
  const getNine = localStorage.getItem('nine');
  setNine.text(getNine);

//10am
  $("#saveTen").click(function(){
    const tenAppt = $('#textTen').val();
    localStorage.setItem('ten', tenAppt);   
  })
   const setTen = $("#textTen");
  const getTen = localStorage.getItem('ten');
  setTen.text(getTen);

//11am
  $("#saveEleven").click(function(){
    const elevenAppt = $('#textEleven').val();
    localStorage.setItem('eleven', elevenAppt);   
  })
   const setEleven = $("#textEleven");
  const getEleven = localStorage.getItem('eleven');
  setEleven.text(getEleven);

//12pm
  $("#saveTwelve").click(function(){
    const twelveAppt = $('#textTwelve').val();
    localStorage.setItem('twelve', twelveAppt);  
  })
   const setTwelve = $("#textTwelve");
  const getTwelve = localStorage.getItem('twelve');
  setTwelve.text(getTwelve);

//1pm
  $("#saveThirteen").click(function(){
    const thirteenAppt = $('#textThirteen').val();
    localStorage.setItem('thirteen', thirteenAppt);    
  })
   const setThirteen = $("#textThirteen");
  const getThirteen = localStorage.getItem('thirteen');
  setThirteen.text(getThirteen);

//2pm
  $("#saveFourteen").click(function(){
    const fourteenAppt = $('#textFourteen').val();
    localStorage.setItem('fourteen', fourteenAppt);   
  })
   const setFourteen = $("#textFourteen");
  const getFourteen = localStorage.getItem('fourteen');
  setFourteen.text(getFourteen);

//3pm
  $("#saveFifteen").click(function(){
    const fifteenAppt = $('#textFifteen').val();
    localStorage.setItem('fifteen', fifteenAppt);   
  })
   const setFifteen = $("#textFifteen");
  const getFifteen = localStorage.getItem('fifteen');
  setFifteen.text(getFifteen);

//4pm
  $("#saveSixteen").click(function(){
    const sixteenAppt = $('#textSixteen').val();
    localStorage.setItem('sixteen', sixteenAppt);   
  })
   const setSixteen = $("#textSixteen");
  const getSixteen = localStorage.getItem('sixteen');
  setSixteen.text(getSixteen);

//5pm
  $("#saveSeventeen").click(function(){
    const seventeenAppt = $('#textSeventeen').val();
    localStorage.setItem('seventeen', seventeenAppt);   
  })
   const setSeventeen = $("#textSeventeen");
  const getSeventeen = localStorage.getItem('seventeen');
  setSeventeen.text(getSeventeen);

});

