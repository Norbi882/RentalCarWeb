//Formularz
var today = new Date();
var tommorow = new Date();
tommorow.setDate(today.getDate() + 1);

function dayFormat(day) {
    var dayFormat = day.getFullYear() + "-";
    if (day.getMonth() + 1 < 10)
        dayFormat += "0";
    dayFormat += (day.getMonth() + 1) + "-";
    if (day.getDate() < 10)
        dayFormat += "0";
    dayFormat += day.getDate();
    return dayFormat;
}

function timeFormat(time) {
    var timeFormat = "";
    if (time.getHours() < 10)
        timeFormat = "0";
    timeFormat += time.getHours() + ":";
    if (time.getMinutes() < 10)
        timeFormat += "0";
    timeFormat += time.getMinutes();
    return timeFormat;
}
document.getElementById("receive_data").value = dayFormat(today);
document.getElementById("receive_time").value = timeFormat(today);
document.getElementById("return_data").value = dayFormat(tommorow);
document.getElementById("return_time").value = timeFormat(tommorow);