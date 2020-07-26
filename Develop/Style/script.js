$(document).ready(function () {

    // Displays current date in    
    const dateDisplay = $("#currentDay");
    const currentDate = moment().format("LLLL");

    dateDisplay.text(currentDate);

    // Color coded text area
    $("textarea").each(function () {
        const textAreaHour = parseInt($(this).attr("value"));
        const timeBlock = parseInt(moment().format("H"));
        if (timeBlock > textAreaHour) {
            $(this).addClass("past");
        } else if (timeBlock === textAreaHour) {
            $(this).addClass("present");
        } else if (timeBlock < textAreaHour) {
            $(this).addClass("future");
        }
    });


    let scheduleArray = [];

    // Puts the schedule array in local storage
    function storeLS(scheduleArray) {
        localStorage.setItem("dailySchedule", JSON.stringify(scheduleArray));
    }

    // Loads daily schedule from local storage and displays on screen when refreshed
    function retrieveLS() {
       let storedPlan = JSON.parse(localStorage.getItem("dailySchedule"));
        if (storedPlan !== null) {
            for (let i = 0; i < 10; i++) {
                $("#textInput" + (i + 9)).text(storedPlan[i]);
            }
        }
    }
    retrieveLS();

    // When save button clicked adds each text input into current value to equivalent index
    $(".saveBtn").on("click", function () {
        event.preventDefault();
        $(".textInput").each(function (currentIndex, currentEl) {
            scheduleArray[currentIndex] = $(currentEl).val().trim();
        })
        storeLS(scheduleArray);

    });

});