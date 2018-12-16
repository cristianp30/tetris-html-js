let lastTime = 0;


const canvas = document.getElementById("tetris");
const context = canvas.getContext("2d");

context.scale(20,20);

funtion draw(){
    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function update (time = 0){
    const deltaTime = time - lastTime;
    lastTime = time;
    
    requestAnimationFrame(update);
}
    update();