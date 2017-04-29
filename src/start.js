/*
 * 
 * Game
 * Every 10s some of the Elements disapear, light to darker elements
 * 
 * 
 */
Crafty.scene("load", function(){
	
console.log("loading");
	Crafty.e("2D, DOM, Text").attr({w: gamewidth, h:20, x:0, y:gamehight/2 - 10})
    	.text("Loading")
    	.css({"text-align": "center"});
	
	
	Crafty.audio.add("block", "src/sound/block.wav");
	Crafty.audio.add("lvlup", "src/sound/random.wav");


	Crafty.scene("go");

});

Crafty.scene("start", function(){
	console.log("start");
	Crafty.viewport.x = 0;
	Crafty.viewport.y = 0;
	var restart = Crafty.e("restart");
	var tutorial = Crafty.e("tutorial").tut(lvl);
		
	/*var block = Crafty.e("block")
		.attr({x:16,y:16});
	 block.openTop();
	 block.setHitbox();
	 block.setDraggable(true);
	console.log("ready");*/
	loadmap(lvl);
	/*Crafty.trigger("resetTime");
	if (lvl <= 11)
	{
	Crafty.e("disappearTimer");
	loadmap(lvl);
	}
	else
	{
	Crafty.scene("game_over");
	}*/

});

Crafty.scene("go", function(){
	var text = Crafty.e("2D, DOM, Text, Keyboard").attr({w: gamewidth, h:20, x:Crafty.viewport.x, y:Crafty.viewport.y + gamehight/2 - 10,z:10001})
    	.css({"text-align": "center"})
    	.textColor("#FFFFFF")
    	.text("The Grinch stole all Christmas presents from Santa.<br>Now Santa has to find a way through his dungeon to get the Presents back.<br>Space to start")
		.bind('KeyDown', function (key) {
			if (key.key == 32){
					Crafty.scene("start");
				}});
		Crafty.viewport.centerOn(text,10);
});
