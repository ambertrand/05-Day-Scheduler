$(document).ready(function () {

    // Displays current date in    
    const dateDisplay = $("#currentDay");
    const timeDisplay = $("#currentTime");
    const currentDate = moment().format("MMMM DD, YYYY");
    const currentTime = moment().format("hh:mm A");

    dateDisplay.text(currentDate);
    timeDisplay.text(currentTime);

    const textInput = document.querySelector(".textInput")
    let input = [];

    function localStorageInput() {
        input = JSON.parse(localStorage.getItem("textInput"));
        const text = $(".textInput").val();
        let scheduleInput = { text };
        if (!input) {
            input = [];
        }
        input.push(scheduleInput);
        localStorage.setItem("textInput", JSON.stringify(input));
    }

    $(".saveBtn").on("click", function () {
        // console.log("clicked");
        localStorageInput();
    })

    

});




// Psuedo code
// When button is clicked input sent to local storage
// When input added to Pull from LS to append to text area
// Delete input removes from LS
// Add time from moment so color code blocks work based on time


// Requirements

// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
