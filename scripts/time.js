function getTime() {
    var time = new Date();
    var now = "";
    if (time.getHours() < 10)
        now = "0";
    now += time.getHours() + ":";
    if (time.getMinutes() < 10)
        now += "0";
    now += time.getMinutes() + ":";
    if (time.getSeconds() < 10)
        now += "0";
    now += time.getSeconds();
    document.getElementById("time").innerHTML = now;
}
setInterval(getTime, 1000);

var canvas = document.getElementById("clock");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000);

function drawClock() {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.strokeStyle = '#E8E8E8';
    ctx.lineWidth = radius * 0.05;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.5, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.strokeStyle = '#C92C22';
    ctx.lineWidth = radius * 0.02;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = '#494949';
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = '#E8E8E8';
    for (var i = 0; i < 60; i++) {
        ctx.moveTo(Math.sin(i / 60 * 2 * Math.PI) * radius * 0.96, Math.cos(i / 60 * 2 * Math.PI) * radius * 0.96);
        if (i % 5 == 0) {
            ctx.lineWidth = radius * 0.05;
            ctx.lineTo(Math.sin(i / 60 * 2 * Math.PI) * radius * 0.9, Math.cos(i / 60 * 2 * Math.PI) * radius * 0.9);
        } else {
            ctx.lineWidth = radius * 0.02;
            ctx.lineTo(Math.sin(i / 60 * 2 * Math.PI) * radius * 0.92, Math.cos(i / 60 * 2 * Math.PI) * radius * 0.92);
        }
    }

    ctx.stroke();
}

function drawNumbers(ctx, radius) {
    var ang;
    var num;
    ctx.font = radius * 0.25 + "px Racing Sans One";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillStyle = '#E8E8E8';
    for (num = 1; num < 13; num++) {
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.75);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.75);
        ctx.rotate(-ang);
    }
}

function drawTime(ctx, radius) {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour = hour % 12;
    hour = (hour * Math.PI / 6) +
        (minute * Math.PI / (6 * 60)) +
        (second * Math.PI / (360 * 60));
    drawHand(ctx, hour, radius * 0.5, radius * 0.06);
    //minute
    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    drawHand(ctx, minute, radius * 0.8, radius * 0.06);
    // second
    second = (second * Math.PI / 30);
    drawHand(ctx, second, radius * 0.9, radius * 0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = '#E8E8E8';
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}