var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var blobArray = [];
var g = 9.81;

setInterval(frame,30);
		
function frame(){
	//alert("Test");
	var blob = {
        x:random(0,1000),
		y:0,
		xSpeed:0,
		ySpeed:random(-50,50)/10,
		size:10,
		sizeIncrease:1.001,
        colour:getRandomColor()
    };
			
	blobArray.push(blob);
			
	ctx.clearRect(0,0,1000,500);

	for(var i = 0; i <= blobArray.length; i++){
        blob = blobArray[i]
				
		ctx.fillStyle = blob.colour;
		ctx.fillRect(blob.x,blob.y,blob.size,blob.size);
				
		//check to see if touching floor
		if(blob.y >=500){blob.ySpeed = 0 - blob.ySpeed/1.1;}
        
		if(blob.x <= 0){blob.xSpeed = -blob.xSpeed;}
        
		if(blob.x >= 1000){blob.xSpeed = -blob.xSpeed;}
        
		blob.ySpeed += g/100;
		blob.x += blob.xSpeed;
		blob.y += blob.ySpeed;
        blob.size /= blob.sizeIncrease;
	}

}
	
function random(min,max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}