Crafty.scene("win", function() {
		if (lvl < 8)
		{
		
		lvl++;
		console.log("finished");
		//Crafty.audio.play("win");
		/*var bg = Crafty.e("2D, Canvas, Color")
						.color("black")
						.attr({w:gamewidth,h:gamehight,x:Crafty.viewport.x,y:Crafty.viewport.y,z:1000});*/
		//Crafty.background("#444");
	  	var text = Crafty.e("2D, DOM, Text, Keyboard").attr({w: gamewidth, h:20, x:Crafty.viewport.x, y:Crafty.viewport.y + gamehight/2 - 10,z:10001})
    	.css({"text-align": "center"})
    	.textColor("#FFFFFF")
    	.text("Dungeon<br>U "+ (lvl+1))
		.bind('KeyDown', function (key) {
			if (key.key == 32){
					Crafty.scene("start");
				}});
		Crafty.viewport.centerOn(text,10);
		Crafty.audio.play("lvlup");
		//Crafty.background("#444");
		}
 		else
 		{
 			Crafty.scene("game_over");
 		}
 		
 		console.log(text);
 		
 			});

Crafty.scene("game_over", function(){
		/*Crafty.viewport.x = 0;
		Crafty.viewport.y = 0;*/
		var neiled = Crafty.e("2D, DOM, Image").image("src/santa.png")
			.attr({x:-Crafty.viewport.x + gamehight/5 -4, y:-Crafty.viewport.y,z:10001});
		//Crafty.viewport.centerOn(neiled);
		//Crafty.viewport.centerOn(neiled,1);
		
		//Crafty.viewport.x = (-(neiled.x + (neiled.w / 2) - (Crafty.viewport.width / 2) ));
		//Crafty.viewport.y = (-(neiled.y + (neiled.h / 2) - (Crafty.viewport.height / 2) ));
		console.log("nailed");
		console.log(Crafty.viewport);
		/*for(;;)
		{
			console.log(Crafty.viewport);
		}*/
		//lvl++;
		//Crafty.audio.play("win");
		//var bg = Crafty.e("2D, Canvas, Color")
		//				.color("grey")
		//				.attr({w:gamewidth,h:gamehight,x:0,y:0,z:1000});
	  	//ar text = Crafty.e("2D, DOM, Text, Keyboard").attr({w: gamewidth, h:20, x:0, y:gamehight/2 - 10,z:1001})
    	//.css({"text-align": "center"})
    	//.text("You escaped.")
		//.bind('KeyDown', function (key) {
		//	if (key.key == 32){
		//		lvl = 0;
		//		timer = 0;
		//		Crafty.scene("start");
//}});
});