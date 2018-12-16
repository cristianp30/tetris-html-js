const canvas = document.getElementById("tetris");
const context = canvas.getContext("2d");

context.scale(20,20);

context.fillStyle = "#000";
context.fillRect(0, 0, canvas.width, canvas.height);