Crafty.c("player",{
	init: function()
	{
		this.addComponent("2D, Canvas, Color, Collision, Fourway");
		this.color("red")
			.fourway(4);
		this.attr({h:big/3.5,w:big/3.5,z:100});
		this.bind("KeyDown", function(e)
		{
			if(e.key == 82)
			{
				Crafty.scene("start");
				console.log("restart");
			}
		});

		this.bind("Moved",function(from){
			if(this.hit("colBlock"))
			{
				this.attr({x:from.x,y:from.y});
			}
			if(this.hit("finish"))
			{
				Crafty.scene("win");
				this.destroy();
				//console.log("win");
			}
			//Crafty.viewport.follow(this,25,50);
			Crafty.viewport.x = (-(this.x + (this.w / 2) - (Crafty.viewport.width / 2) ));
			Crafty.viewport.y = (-(this.y + (this.h / 2) - (Crafty.viewport.height / 2) ));
			
		});
	}
});

Crafty.c("restart",{
	init: function()
	{
		this.addComponent("2D,Canvas,Color,Mouse")
			.color("#666")
			.attr({h:20,w:50});
		this.foo = Crafty.e("2D,DOM,Text").textColor('#FFFFFF')
								.css({"text-align": "center"})
								.attr({x:this.x,y:this.y,w:50,h:80})
								.css({"cursor": "pointer"})
								.text("restart");
		this.bind("EnterFrame",function(e)
		{
			//console.log(Crafty.viewport.x);
			this.x = -Crafty.viewport.x + Crafty.viewport.width - this.w;
			this.y = -Crafty.viewport.y + Crafty.viewport.height - this.h;
			this.foo.x = -Crafty.viewport.x + Crafty.viewport.width - this.w;
			this.foo.y = -Crafty.viewport.y + Crafty.viewport.height - this.h;
		});
		
		this.bind("MouseDown",function(e)
		{
			Crafty.scene("start");
		});
	}
});
