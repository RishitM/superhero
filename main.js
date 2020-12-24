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
window.addEventListener("keydown", mykeydown);
function mykeydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "70")
    {
new_Image("ironman_face.png");
console.log("f");
    }
    if (keyPressed == "66")
    {
new_Image("spiderman_body.png");
console.log("b");
    }
    if (keyPressed == "76")
    {
new_Image("hulk_legs.png");
console.log("l");
    }
    if (keyPressed == "82")
    {
new_Image("thor_right_hand.png");
console.log("r");
    }
    if (keyPressed == "72")
    {
new_Image("captain_america_left_hand.png");
console.log("h");
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