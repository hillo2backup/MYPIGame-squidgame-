AFRAME.registerComponent("glass-game", {

init: function () {

const glasses = document.querySelectorAll(".glass");

glasses.forEach(glass => {

const safe = Math.random() < 0.5;

glass.setAttribute("data-safe", safe);

});

}

});


AFRAME.registerComponent("player-move", {

init: function () {

const player = this.el;

document.addEventListener("keydown", function(e){

const pos = player.object3D.position;

if(e.key === "a") pos.x -= 8;
if(e.key === "d") pos.x += 8;
if(e.key === "w") pos.z -= 8;

});

}

});


AFRAME.registerComponent("check-glass", {

tick: function () {

const player = document.querySelector("#player");
const glasses = document.querySelectorAll(".glass");

const playerPos = player.object3D.position;

glasses.forEach(glass => {

const glassPos = glass.object3D.position;

const distance = playerPos.distanceTo(glassPos);

if(distance < 3){

const safe = glass.getAttribute("data-safe");

if(safe === false || safe === "false"){

glass.setAttribute("color","red");
glass.object3D.position.y -= 0.2;

}

}

});

}

});