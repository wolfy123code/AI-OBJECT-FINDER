var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");


	function new_image()
{
	fabric.Image.fromURL("BirthdayImage", function(Img1)
{
  block_img_object=Img1;
  block_img_object.scaleToHeight(700);
  block_img_object.scaleToWidth(510);
  block_img_object.set({
  top:0,
  left:0});
 canvas.add(block_img_object);
 })
	
}

function playSound(){
    x.playSound();
	
}
