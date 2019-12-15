var wakeUpTime = 7;
var noon = 12;
var lunchTime = 12;
var napTime = lunchTime + 2;
var partyTime;
var evening = 18;

//Getting it to Show the current time on the page

var showCurrenTime = () => {
    //Display the string webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minuts = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
    console.log(`${hours}:${minuts}:${seconds}`)

    //Set hours
    if (hours >= noon) {
        meridian = "PM"
    }

    if (hours > noon) {
        hours = hours - 12;
    }

    //Set minuts
    if (minuts < 10) {
        minuts = "0" + minuts;
    }

    //Set seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    //Put together the string that display the time
    var clockTime = `${hours}:${minuts}:${seconds} ${meridian}!`;

    clock.innerText = clockTime

};

//Getting the clock to increment on its own and change out messages and pictures
var updateClock = () => {
    var time = new Date().getHours();
    var message;
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

    var timeEventJs = document.getElementById('timeEvent');
    var lolcatCatImagesJs = document.getElementById('lolcatImage');

    if (time == partyTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
        messageText = "Let's party!";
    } else if (time == wakeUpTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
        messageText = "Wake up!";
    } else if (time == lunchTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        messageText = "Let's have some lunch!";
    } else if (time == napTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        messageText = "Sleep tight!";
    } else if (time < noon) {
        image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
        messageText = "Good morning!";
    } else if (time >= evening) {
        image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
        messageText = "Good evening!";
    } else {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
        messageText = "Good afternoon!";
    }

    console.log(messageText);
    timeEventJs.innerText = messageText;
    lolcatCatImagesJs.scr = image;

    showCurrenTime();

};
updateClock();

//Getting the clock to increment once a second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

//Getting the Party time button to work 
var partyButton = document.getElementById('partyTimeButton');

var partyEvent = () => {
    if (partyTime < 0) {
        partyTime = new Date().getHours();
        partyButton.innerText = 'Party Over';
        partyButton.style.backgroundColor = "#0A8DAB";
    } else {
        partyTime = -1;
        partyButton.innerText = 'Party Time';
        partyButton.style.backgroundColor = "#222";

    }
};

partyButton.addEventListener('click', partyEvent);
partyEvent();



//Activates Wake-Up selector
var wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');

var wakeUpEvent = () => wakeUpTime = wakeUpTimeSelector.value;

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);


//Actives Lunch Selector
var lunchTimeSelector = document.getElementById('lunchTimeSelector');

var lunchEvent = () => lunchTime = lunchTimeSelector.value;

lunchTimeSelector.addEventListener('change', lunchEvent);


//Actives Nap-time selector
var napTimeSelector = document.getElementById('napTimeSelector');

var napEvent = () => napTime = napTimeSelector.value;
napTimeSelector.addEventListener('change', napEvent);