Crafty.scene("lose", function(){
		Crafty.viewport.x = 0;
		Crafty.viewport.y = 0;
		Crafty.audio.play("lose",1);
		
		var bg = Crafty.e("2D, Canvas, Color")
						.color("#FFF")
						.attr({w:gamewidth,h:gamehight,x:0,y:0,z:1000});
	  	var text = Crafty.e("2D, DOM, Text, Keyboard").attr({w: gamewidth, h:20, x:0, y:gamehight/2 - 10,z:1001})
    	.css({"text-align": "center"})
    	.text("Oh nose, lil' Harry died.<br>Rescue him by pressing Space.")
		.bind('KeyDown', function (key) {
			if (key.key == 32){
					Crafty.scene("start");
				}});
});
