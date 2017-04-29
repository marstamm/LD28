var tiles = new Array();

function loadmap (lev){
/**/

	var req = new XMLHttpRequest();
 	req.open("GET", 'src/map/' + lvl + '.tmx', true);
 	var that = this;
 	req.onreadystatechange = function() {
 	 if (req.readyState === 4) {
 	 	var parser = new DOMParser();
 		var doc = parser.parseFromString(req.responseText, "application/xml");
		console.log(start);
		//var asfd = start.childNodes[0];
		//console.log(start);
		//console.log("b:" + start.getAttribute("value"));
    	var map = doc.getElementsByTagName('data')[0];
    	foo = map.firstChild.data.split("\n");
 		//Crafty.e("tutorial").tut(lev);
 		for (var w = 1; w < foo.length; w++){
 			bar = foo[w].split(",");
 			var something = new Array();
 			for (var q = 0; q <= bar.length; q++){
 				
 				if(bar[q] != 0 && bar[q] != undefined)
 				{
 				Crafty.e("2D,Canvas,Color")
 					.color("#444")
 					.attr({y:big*w,x:big*q,h:big,w:1,z:500000});
 				Crafty.e("2D,Canvas,Color")
 					.color("#44")
 					.attr({y:big*w,x:big*(q+1),h:big,w:1,z:500000});
 				Crafty.e("2D,Canvas,Color")
 					.color("#444")
 					.attr({y:big*w,x:big*q,h:1,w:big,z:500000});
 				Crafty.e("2D,Canvas,Color")
 					.color("#444")
 					.attr({y:big*(w+1),x:big*(q+1),h:1,w:big,z:500000});
 				console.log(bar[q]);
 				}
 				
 				switch (bar[q]){
 					case "0":
 						something[q] = Crafty.e("2D");

 					break;
 					
 					case "1":
						something[q] = Crafty.e("block")
										.attr({y:big*w,x:big*q});
						//something[q].openTop();
						something[q].setHitbox();
						something[q].setDraggable(false);
 					break;
 					
 					case "2":
						something[q] = Crafty.e("block")
										.attr({y:big*w,x:big*q});
						something[q].openTop();
						something[q].setHitbox();
						something[q].setDraggable(false);
 					break;
 					
 					case "3":
						something[q] = Crafty.e("block")
										.attr({y:big*w,x:big*q});
						//something[q].openTop();
						something[q].openRight();
						//something[q].openBot();
						//something[q].openLeft();
						something[q].setHitbox();
						something[q].setDraggable(false);
 					break;

 					case "4":
 						something[q] = Crafty.e("block")
										.attr({y:big*w,x:big*q});
						something[q].openTop();
						something[q].openRight();
					//	something[q].openBot();
					//	something[q].openLeft();
						something[q].setHitbox();
						something[q].setDraggable(false);
 					break;
 						
 					case "5":
 						something[q] = Crafty.e("block")
										.attr({y:big*w,x:big*q});
					//	something[q].openTop();
					//	something[q].openRight();
						something[q].openBot();
					//	something[q].openLeft();
						something[q].setHitbox();
						something[q].setDraggable(false);
 					break;
 					
 					case "6":
 						something[q] = Crafty.e("block")
										.attr({y:big*w,x:big*q});
						something[q].openTop();
					//	something[q].openRight();
						something[q].openBot();
					//	something[q].openLeft();
						something[q].setHitbox();
						something[q].setDraggable(false);
 					break;
 					
 					case "7":
 						something[q] = Crafty.e("block")
										.attr({y:big*w,x:big*q});
					//	something[q].openTop();
						something[q].openRight();
						something[q].openBot();
					//	something[q].openLeft();
						something[q].setHitbox();
						something[q].setDraggable(false);
 					break;
 					
 					case "8":
 						something[q] = Crafty.e("block")
										.attr({y:big*w,x:big*q});
						something[q].openTop();
						something[q].openRight();
						something[q].openBot();
					//	something[q].openLeft();
						something[q].setHitbox();
						something[q].setDraggable(false);
 					break;
 						
 					case "9":
 						something[q] = Crafty.e("block")
										.attr({y:big*w,x:big*q});
					//	something[q].openTop();
					//	something[q].openRight();
					//	something[q].openBot();
						something[q].openLeft();
						something[q].setHitbox();
						something[q].setDraggable(false);
 					break;
 						
 					case "10":
 						something[q] = Crafty.e("block")
										.attr({y:big*w,x:big*q});
						something[q].openTop();
				//		something[q].openRight();
				//		something[q].openBot();
						something[q].openLeft();
						something[q].setHitbox();
						something[q].setDraggable(false);
 					break;
 					
 					case "11":
 						something[q] = Crafty.e("block")
										.attr({y:big*w,x:big*q});
				//		something[q].openTop();
						something[q].openRight();
				//		something[q].openBot();
						something[q].openLeft();
						something[q].setHitbox();
						something[q].setDraggable(false);
 					break;
 					
 					case "12":
 						something[q] = Crafty.e("block")
										.attr({y:big*w,x:big*q});
						something[q].openTop();
						something[q].openRight();
				//		something[q].openBot();
						something[q].openLeft();
						something[q].setHitbox();
						something[q].setDraggable(false);
 					break;
 					
 					case "13":
 						something[q] = Crafty.e("block")
										.attr({y:big*w,x:big*q});
					//	something[q].openTop();
					//	something[q].openRight();
						something[q].openBot();
						something[q].openLeft();
						something[q].setHitbox();
						something[q].setDraggable(false);
 					break;
 					
 					case "14":
 						something[q] = Crafty.e("block")
										.attr({y:big*w,x:big*q});
						something[q].openTop();
					//	something[q].openRight();
						something[q].openBot();
						something[q].openLeft();
						something[q].setHitbox();
						something[q].setDraggable(false);
 					break;
 					
 					case "15":
 						something[q] = Crafty.e("block")
										.attr({y:big*w,x:big*q});
					//	something[q].openTop();
						something[q].openRight();
						something[q].openBot();
						something[q].openLeft();
						something[q].setHitbox();
						something[q].setDraggable(false);
 					break;
 					
 					case "16":
 						something[q] = Crafty.e("block")
									.attr({y:big*w,x:big*q});
						something[q].openTop();
						something[q].openRight();
						something[q].openBot();
						something[q].openLeft();
						something[q].setHitbox();
						something[q].setDraggable(false);
 					break;
 					
 					case "16":
 						something[q] = Crafty.e("block")
										.attr({y:big*w,x:big*q});
						something[q].openTop();
						something[q].openRight();
						something[q].openBot();
						something[q].openLeft();
						something[q].setHitbox();
						something[q].setDraggable(false);
 					break;

 					}
 					
 			}
 			console.log("something: " + something);
 			tiles[w] = something;
 		}
 		
 		
 	 	var dummy = Crafty.e("2D, Canvas, Color").color("white").attr({x:-5000,y:5000,z:-200,w:1,h:1});
 	 	var dummy2 = Crafty.e("2D, Canvas, Color").color("white").attr({x:5000,y:-5000,z:-200,w:1,h:1});
 	 	
 	 	var values = doc.getElementsByTagName("property");
		//var startvalue = doc.getElementsByTagName("property")[1];
		//var start = startvalue.getAttribute("value").split(",");
		//var end = endvalue.getAttribute("value").split(",");
		Crafty.viewport.mouselook(true);
 	 	for(var baz = 0; baz < values.length; baz++)
 	 	{
 	 		console.log(values[baz]);
 	 		switch (values[baz].getAttribute("name"))
 	 		{
 	 			case "allowed":
 	 				var allowed = values[baz].getAttribute("value").split(",");
 	 			break;
 	 			
 	 			case "finish":
 	 				var finish = values[baz].getAttribute("value").split(",");
 	 			break;
 	 			
 	 			case "start":
 	 				var start = values[baz].getAttribute("value").split(",");
 	 			break;
 	 			
 	 		}
 	 	}
 	 	
 	 	setPosibleBlocks(allowed);
 	 	var player = Crafty.e("player").attr({x:(start[0])*big + big/3,y:(start[1])*big + big/3*4});
 	 	console.log(tiles);
 	 	//Crafty.viewport.x = player.x;
 	 	//Crafty.viewport.y = player.y;
 	 	//console.log(tiles[parseInt(finish[1])][parseInt(finish[0])]);
 	 	//tiles[parseInt(finish[1])][parseInt(finish[0])].color("green");
 	 	tiles[parseInt(finish[0]) + 1][finish[1]].color("green").addComponent("finish");
 	 	console.log(player);
		//Crafty.viewport.zoom(-2,gamewidth,gamehight,120);
		//Crafty.viewport.x = player.x;
		//Crafty.viewport.y = player.y;
		Crafty.viewport.x = -player.x + Crafty.viewport.width / 2;
      	Crafty.viewport.y = -player.y + Crafty.viewport.height / 2;
 	 	 }
  };
 req.send(null);
}
