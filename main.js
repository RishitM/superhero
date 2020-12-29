canvas=new fabric.Canvas("myCanvas");
block_image_heigth=30;
block_image_width=30;
player_object="";
player_x=0 ;
player_y=0;
block_image_object="";
function player_update() {
    fabric.Image.fromURL("player.png",function(img){
        player_object=img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
    });
}
function block_image_update(getImage){
    fabric.Image.fromURL(getImage,function(img){
        block_image_object=img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_heigth);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
        });
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "70")
    {
block_image_update("ironman_face.png");
console.log("f");
    }
    if (keyPressed == "66")
    {
block_image_update("spiderman_body.png");
console.log("b");
    }
    if (keyPressed == "76")
    {
block_image_update("hulk_legs.png");
console.log("l");
    }
    if (keyPressed == "82")
    {
block_image_update("thor_right_hand.png");
console.log("r");
    }
    if (keyPressed == "72")
    {
block_image_update("captain_america_left_hand.png");
console.log("h");
    }
    if (keyPressed == "77"&& e.shiftKey==true) {
        block_image_width-=10 ; block_image_heigth-=10;
        document.getElementById("width").innerHTML= block_image_width;
        document.getElementById("height").innerHTML= block_image_heigth;
   }
   if (keyPressed == "80"&& e.shiftKey==true) {
       block_image_width+=10 ; block_image_heigth+=10;
       document.getElementById("width").innerHTML= block_image_width;
   document.getElementById("height").innerHTML= block_image_heigth;
   }
    if (keyPressed == "38")
    {
up();
console.log("up")
    }
    if (keyPressed == "40")
    {
down();
console.log("down")
    }
    if (keyPressed == "37")
    {
left();
console.log("left")
    }
    if (keyPressed == "39")
    {
right();
console.log("right")
    }

}
function up(){
player_y=player_y-10;
canvas.remove(player_object);
player_update();
}
function down(){
 player_y=player_y+10;
 canvas.remove(player_object);
 player_update();
 
}
function left(){
player_x=player_x-10;
canvas.remove(player_object);
player_update();
}
function right(){
 player_x=player_x+10;
 canvas.remove(player_object);
 player_update();
}