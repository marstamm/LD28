/*
 * LEVEL
 */
Crafty.c("tutorial",{
	init: function(){
		this.addComponent("2D,DOM,Text")
		  .textColor('#FFFFFF');
		this.css({"text-align": "center"});
 
	},
	
	tut: function(lvl){
		console.log(lvl);
		switch (lvl)
		{
			case 0:
				this.text("Take one.<br>Press r to start over")
					.attr({x:240,y:220,w:230,h:80});
				
			break;
			
			/*case 4:
				this.text("Not everything disappears at the same time.")
					.attr({x:130,y:50,w:300,h:80});
			break;*/
			
			case 1:
			console.log(lvl);
				Crafty.e("2D,DOM,Text").textColor('#FFFFFF')
								.css({"text-align": "center"})
								.attr({x:150,y:380,w:230,h:80})
								.text("Use your Mouse to look araound.");
								
				this.text("Try to move your own tile more then once!")
					.attr({x:800,y:200,w:300,h:80});
			break;
			
			/*case 2:
				this.text("Don't get to close to the spikes.")
					.attr({x:250,y:250,w:300,h:80});
			break;
			
			case 3:
				this.text("Faster than everyone else? Press &quot;c&quot; to skip some time.")
					.attr({x:300,y:350,w:300,h:80});
			break;*/
			
			default:
				this.text("");
			break;
		}
	}
});
