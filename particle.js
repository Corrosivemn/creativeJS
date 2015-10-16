var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var blobArray = [];
var g = 9.81;

var blob = {
        x:500,
		y:250,
		xSpeed:random(-50,50)/10,
		ySpeed:random(-50,50)/10,
		size:30,
		sizeIncrease:1.01,
        colour:'black'
    };

blobArray.push(blob);
text = document.getElementById("t1");
setInterval(frame,30);
		
function frame(){
	//alert("Test");
	var blob = {
        x:500,
		y:250,
		xSpeed:random(-50,50)/10,
		ySpeed:random(-50,50)/10,
		size:30,
		sizeIncrease:1.01,
        colour:'cyan'
    };
			
	blobArray.push(blob);
			
	ctx.clearRect(0,0,1000,500);

	for(var i = 0; i <= blobArray.length; i++){
        rect = blobArray[i]
				
		ctx.fillStyle = 'cyan';
		ctx.fillRect(rect.x,rect.y,rect.size,rect.size);
				
		//check to see if touching floor
		if(rect.y >=500){rect.ySpeed = 0 - rect.ySpeed;}
		if(rect.x <= 0){rect.xSpeed-= 2 * rect.xSpeed;}
		if(rect.x >= 1000){rect.xSpeed-= 2 * rect.xSpeed;}
		rect.ySpeed += g/100;
		rect.x += rect.xSpeed;
		rect.y += rect.ySpeed;
        rect.size /= rect.sizeIncrease;
	}

}
	
function random(min,max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
}