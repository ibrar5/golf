var canvas = new fabric.canvas("myCanvas");
// Create canvas variable

ball_x = 20;
ball_y = 20;
hole_x = 700;
hole_y = 500;
//Set initial positions for ball and hole images.


block_image_width = 5;
block_image_height = 5;

ball_object = '';
hole_object = '';

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
        hole_object = Img; hole_object.scaleToWidth(10); 
        hole_object.scaleToHeight(10);
        hole_object.set({ top:hole_y, left:hole_x });
	canvas.add(hole_object);
});
	
	// write code to Upload golf image on the canvas
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img) {
        ball_object = Img; ball_object.scaleToWidth(7); 
        ball_object.scaleToHeight(7);
        ball_object.set({ top:ball_y, left:ball_x });
	});
	// write code to Upload ball image on canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	
		if(ball_y >= 0){
			ball_y = ball_y - block_image_height;
			canvas.remove(ball_object);
			load_img();
		}
	}
	function down(){
		if(ball_y <= 590){
			ball_y = ball_y + block_image_height;
			canvas.remove(ball_object);
			load_img();
		}
	}
	function left(){
		if(ball_x >= 0){
			ball_x = ball_x - block_image_width;
			canvas.remove(ball_object);
			load_img();
		}
	}
	function right(){
		if(ball_x <= 790){
			ball_x = ball_x + block_image_width;
			canvas.remove(ball_object);
			load_img();
		}
	}
	
if((ball_x == hole_x)&&(hole_y == ball_y)){
	canvas.remove(ball_object);

	document.getElementById("hd3").innerHTML = "You Have Hit the Goal!!!";
	document.getElementById("myCanvas").style.borderColor = "red";
}