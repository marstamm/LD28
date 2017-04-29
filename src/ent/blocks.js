Crafty.c("block",{
	
	init: function()
	{
		this.fields = [[0,0,0],[0,1,0],[0,0,0]];
		this.addComponent("2D, Canvas, Color, Mouse, Draggable")
			.color("blue")
			.attr({w:big,h:big})
			.disableDrag();
		console.log(this);
		
		this.bind("Click", function(e)
		{
			console.log(this);
		});
		//up and down left+right are allwas set	
	},
	
	//when initialising, set stuff up, add the hit markers and insert a pic.
	openTop: function()
	{
		this.fields[0][1] = 1;
	},
	
	openBot: function()
	{
		this.fields[2][1] = 4;
	},
	
	openLeft: function()
	{
		this.fields[1][0] = 8;
	},
	
	openRight: function()
	{
		this.fields[1][2] = 2;
	},
	
	setHitbox: function()
	{
		this.collision = this.fields;
		//console.log(this.fields);
		for (var i=0; i < 3; i++) {
			for(var y=0; y < 3; y++)
			{
				if (this.fields[i][y] == 0)
				{
					this.collision[i][y] = Crafty.e("colBlock")
										.attr({x:this.x + y*big/3,y:this.y + i*big/3});
					//console.log("colBlock");
					
				}
				else
				{
					this.collision[i][y] = null;
				}
			};
		};
	},
	
	destroyall: function()
	{
		for (var i=0; i < 3; i++) {
			for(var y=0; y < 3; y++)
			{
				if (this.fields[i][y] == 0)
				{
					this.collision[i][y].destroy();
					//console.log("colBlock");
					
				}
				else
				{
					this.collision[i][y] = null;
				}
			};
		}
		this.destroy();
	},
	
	setDraggable: function(foo)
	{
	if(foo)
	{
	this.bind("Dragging", function(from) {
			//console.log(this.collision);
				for (var i=0; i < 3; i++) {
					for(var y=0; y < 3; y++)
					{
						if (this.collision[i][y] != null)
						{
							this.collision[i][y].attr({x:this.x + y*big/3,y:this.y + i*big/3});
							//console.log("colBlock");
							
						}
					};
				};	
			});	
		this.bind("MouseUp", function(e){
			console.log(e);
			Crafty.audio.play("block");
			var tx = parseInt(e.realX/big);
			var ty = parseInt(e.realY/big);
			console.log(ty + ";" + e.y + ";" + this.y);
			this.x = tx * big;
			this.y = ty * big;
			for (var i=0; i < 3; i++) {
					for(var y=0; y < 3; y++)
					{
						if (this.collision[i][y] != null)
						{
							this.collision[i][y].attr({x:this.x + y*big/3,y:this.y + i*big/3});
							//console.log("colBlock");
							
						}
					};
				};	
			
			console.log(tiles);
			if(tiles[ty] != undefined && tiles[ty][tx] != undefined)
			{			
			var that = tiles[ty][tx];
			if(that.collision != undefined)
			for (var i=0; i < 3; i++) {
					for(var y=0; y < 3; y++)
					{
						if (that.collision[i][y] != null)
						{
							that.collision[i][y].destroy();
							//console.log("colBlock");
							
						}
					};
			that.destroy();
				};
			}
			
			console.log(this.y);
		});
		
		this.bind("MouseDown",function(e)
		{
			for(var i=0,j = moveable.length; i<j; i++){
			if(i!= this.foobar)
	 			destroyStuff(moveable[i]);
		};
		
		this.enableDrag();
		this.startDrag();
				//if(tiles[~~(this.y/big)]!= undefined && tiles[~~(this.x/big)] != undefined)
		//{
		
			that = tiles[~~(this.y/big)][~~(this.x/big)];	
				/*if(that != undefined && that.collision != undefined)
				for (var i=0; i < 3; i++) {
						for(var y=0; y < 3; y++)
						{
							if (that.collision[i][y] != null)
							{
								that.collision[i][y].destroy();
								//console.log("colBlock");
								
							}
						};
				that.destroy();
					};*/
			
			tiles[~~this.y/big][~~this.x/big] = Crafty.e("block")
										.attr({y:this.y,x:this.x})
										.color("black");
						//something[q].openTop();
						tiles[this.y/big][this.x/big].setHitbox();
						tiles[this.y/big][this.x/big].setDraggable(false);
						//}
		});
	}
	else
	{
		this.disableDrag();
	}

	
	}

	
});

Crafty.c("colBlock",{
	init: function ()
	{
		this.addComponent("2D, Canvas, Color, Collision");
		this.attr({h:big/3,w:big/3,z:2});
		this.color("black");
		
	}
});


function destroyStuff(that)
{
	if(that != undefined && that.collision != undefined)
			for (var i=0; i < 3; i++) {
					for(var y=0; y < 3; y++)
					{
						if (that.collision[i][y] != null)
						{
							that.collision[i][y].destroy();
							//console.log("colBlock");
							
						}
					};
			that.destroy();
				};
}
/*
Crafty.c("corners",{
	init: function()
	{
		this.addComponent("2D, Canvas, Mouse, Draggable")
			.attr({w:18,h:18});
	}
});
*/