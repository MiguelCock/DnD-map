var c = document.getElementById("canva");
var ctx = c.getContext("2d");

var x = 0;
var y = 100;

document.addEventListener("keydown", (event) => {
  if (event.key == "a") {
    x-=50;
  }
  if (event.key == "d") {
    x+=50;
  }
  if (event.key == "s") {
    y+=50;
  }
  if (event.key == "w") {
    y-=50;
  }
});

var mapGeneration = () => {
  ctx.fillStyle='#3377ff';
  for(var i = 0; i < 10; i++) {
    for(var j = 0; j < 10; j++) {
      ctx.fillRect(50*i, 50*j, 50, 50);  
    }
  }
}

window.setInterval(() => { 
  mapGeneration();
  ctx.fillStyle='#ff3399';
  ctx.clearRect(0,0,1080,720);
  ctx.fillRect(x-25, y-25, 50, 50);

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.closePath();
  
  ctx.beginPath();
  ctx.moveTo(1080, 0);
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.closePath();
  
  ctx.beginPath();
  ctx.moveTo(0, 720);
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.closePath();
  
  ctx.beginPath();
  ctx.moveTo(1080, 720);
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.closePath();


  
}, 60);
