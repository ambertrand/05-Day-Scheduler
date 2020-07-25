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


    let scheduleObj = [];

    function storeLS(scheduleObj) {
        localStorage.setItem("dailySchedule", JSON.stringify(scheduleObj));
    }

    // loads dailyPlan from local storage and displays on screen
    function retrieveLS() {
       let storedPlan = JSON.parse(localStorage.getItem("dailySchedule"));
        if (storedPlan !== null) {
            for (let i = 0; i < 10; i++) {
                $("#textInput" + (i + 9)).text(storedPlan[i]);
            }
        }
    }
    retrieveLS();


    $(".saveBtn").on("click", function () {

        $(".textInput").each(function (currentIndex, currentEl) {

            scheduleObj[currentIndex] = $(currentEl).val().trim();


        })
        storeLS(scheduleObj);

    });

});





// Psuedo code

// When input added to Pull from LS to append to text area



// Requirements

// WHEN I refresh the page
// THEN the saved events persist
