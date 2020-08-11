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

    let scheduleArray = ["", "", "", "", "", "", "", "", ""];

    // Puts the schedule array in local storage
    localStorage.setItem("dailySchedule", JSON.stringify(scheduleArray));


    // Loads daily schedule from local storage and displays on screen when refreshed
    function loadCalendar() {
        $("#textInput9").val(localStorage.getItem("9"))
        $("#textInput10").val(localStorage.getItem("10"))
        $("#textInput11").val(localStorage.getItem("11"))
        $("#textInput12").val(localStorage.getItem("12"))
        $("#textInput1").val(localStorage.getItem("1"))
        $("#textInput2").val(localStorage.getItem("2"))
        $("#textInput3").val(localStorage.getItem("3"))
        $("#textInput4").val(localStorage.getItem("4"))
        $("#textInput5").val(localStorage.getItem("5"))
    }
    loadCalendar();

    // When save button clicked adds each text input into current value to equivalent index
    $(".saveBtn").on("click", function () {
    event.preventDefault();
    let hourSaved = parseInt($(this).attr("name"));
    let textSaved = $(this).siblings(".textInput").val();

    localStorage.setItem(hourSaved, textSaved);

    });

});