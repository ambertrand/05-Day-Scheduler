$(document).ready(function () {

    // Displays current date in    
    const dateDisplay = $("#currentDay");
    const currentDate = moment().format("LLLL");

    dateDisplay.text(currentDate);

    let daySchedule = [{
        time: 9,
        input: ""
    },
    {
        time: 10,
        input: ""
    },
    {
        time: 11,
        input: ""
    },
    {
        time: 12,
        input: ""
    },
    {
        time: 1,
        input: ""
    },
    {
        time: 2,
        input: ""
    },
    {
        time: 3,
        input: ""
    },
    {
        time: 4,
        input: ""
    },
    {
        time: 5,
        input: ""
    },
    ];

    // function localStorageInput() {
    //     if (!localStorage.getItem('daySchedule')) {
    //         localStorage.setItem('daySchedule', JSON.stringify(daySchedule));  
    //         console.log('daySchedule')  
    //     }
    // }




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
            // console.log("clicked");
            localStorageInput();
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