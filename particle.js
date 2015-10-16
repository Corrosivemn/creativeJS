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
        blob = blobArray[i]
				
		ctx.fillStyle = blob.colour;
		ctx.fillRect(blob.x,blob.y,blob.size,blob.size);
				
		//check to see if touching floor
		if(blob.y >=500){blob.ySpeed = 0 - blob.ySpeed/1.1;}
        
		if(blob.x <= 0){blob.xSpeed-= 2 * blob.xSpeed;}
        
		if(blob.x >= 1000){blob.xSpeed-= 2 * blob.xSpeed;}
        
		blob.ySpeed += g/100;
		blob.x += blob.xSpeed;
		blob.y += blob.ySpeed;
        blob.size /= blob.sizeIncrease;
	}

}
	
function random(min,max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
}