$(document).ready(function() {

const dateDisplay = $("#currentDay");
const currentDate = moment().format("MMMM DD, YYYY");

dateDisplay.text(currentDate);
});