const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

function Car(){
    ctx.beginPath();
    ctx.rectx(280,345,40,5);
    ctx.fillStyle="red";
    ctx.fill();
    
    ctx.beginPath();
    ctx.rectx(265,315,70,18);
    ctx.fillStyle="black";
    ctx.fill();
    
    ctx.beginPath();
    ctx.rectx(265,270,70,18);
    ctx.fillStyle="black";
    ctx.fill();
    
    ctx.beginPath();
    ctx.rectx(280,250,10,5);
    ctx.fillStyle="yellow";
    ctx.fill();
    
    ctx.beginPath();
    ctx.rectx(310,250,10,5);
    ctx.fillStyle="yellow";
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(275,255);
    ctx.lineTo(325,255);
    ctx.quadraticCurveTo(325, 255, 328, 260);
    ctx.lineTo(328,340);
    ctx.quadraticCurveTo(328, 340,325, 345);
    ctx.lineTo(275,345);
    ctx.quadraticCurveTo(272, 340,272, 335);
    ctx.lineTo(272,260);
    ctx.quadraticCurveTo(272,260,275, 255);
    ctx.closePath();
    ctx.fillStyle="blue";
    ctx.fill();
    ctx.strokeStyle="red";
    ctx.stroke();
    }

    function rectxcar(){
    ctx.beginPath();
    ctx.moveTo(275,255);
    ctx.lineTo(325,255);
    ctx.quadraticCurveTo(325, 255, 328, 260);
    ctx.lineTo(328,340);
    ctx.quadraticCurveTo(328, 340,325, 345);
    ctx.lineTo(275,345);
    ctx.quadraticCurveTo(272, 340,272, 335);
    ctx.lineTo(272,260);
    ctx.quadraticCurveTo(272,260,275, 255);
    ctx.closePath();
    ctx.fillStyle="black";
    ctx.fill();
    ctx.strokeStyle="black";
    ctx.stroke();
    ctx.fill();
    }
    function tlinecar(){
    ctx.beginPath();
    ctx.moveTo(288,265);
    ctx.lineTo(313,265);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(288,269);
    ctx.lineTo(313,269);
    ctx.stroke();
    ctx.moveTo(288,273);
    ctx.lineTo(313,273);
    ctx.stroke();
    }
    
    function tcar(){
    ctx.setTransform(1,0,0,1,0,0);
    ctx.translate(102,140);
    ctx.scale(0.66,0.56);
    rectxcar();
    }

    function imgcar(){
    car();
    tlinecar();
    tcar();
    bcar();
    }