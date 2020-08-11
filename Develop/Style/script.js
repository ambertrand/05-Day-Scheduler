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

    // Loads daily schedule from local storage and displays on screen when refreshed
    function loadCalendar() {
        for (let i = 9; i < 18; i++) {
            $("#textInput" + i).val(localStorage.getItem(i)
        )}
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