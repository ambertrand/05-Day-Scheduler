$(document).ready(function () {

    // Displays current date in    
    const dateDisplay = $("#currentDay");
    const currentDate = moment().format("LLLL");

    dateDisplay.text(currentDate);

    // Setting the time array
    let daySchedule = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];



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


    $(".saveBtn").on("click", function () {
        let scheduleObj = {};

        $(".textInput").each(function (currentIndex, currentEl) {
            console.log(currentIndex);
            console.log(currentEl);

            let input = $(currentEl);

            scheduleObj.currentIndex = $(".textInput").val().trim();
            console.log("textInput");
        })

    })



});





// Psuedo code
// When button is clicked input sent to local storage
// When input added to Pull from LS to append to text area
// Delete input removes from LS


// Requirements

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


// function localStorageInput() {
//     input = JSON.parse(localStorage.getItem("textInput"));
//     const text = $(".textInput").val();
//     let scheduleInput = { text };
//     if (!input) {
//         input = [];
//     }
// }

//     input.push(scheduleInput);
//     localStorage.setItem("textInput", JSON.stringify(input));