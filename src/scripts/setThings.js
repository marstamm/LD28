var moveable = new Array();
	
function setPosibleBlocks (allowed)
{
	console.log(allowed);
	for (var i=0; i < allowed.length; i++) {
	switch (allowed[i]){		
 					case "0":
						/*moveable[i] = Crafty.e("block")
										.attr({x:(big + 3)*i,y:16});
						//moveable[i].openTop();
						moveable[i].setHitbox();
						moveable[i].setDraggable(true);*/
 					break;
 					
 					case "1":
						moveable[i] = Crafty.e("block")
										.attr({x:(big + 3)*i,y:16});
						moveable[i].openTop();
						moveable[i].foobar = i;
						moveable[i].setHitbox();
						moveable[i].setDraggable(true);
 					break;
 					
 					case "2":
						moveable[i] = Crafty.e("block")
										.attr({x:(big + 3)*i,y:16});
						//moveable[i].openTop();
						moveable[i].openRight();
						//moveable[i].openBot();
						//moveable[i].openLeft();
						moveable[i].foobar = i;
						moveable[i].setHitbox();
						moveable[i].setDraggable(true);
 					break;

 					case "3":
 						moveable[i] = Crafty.e("block")
										.attr({x:(big + 3)*i,y:16});
						moveable[i].openTop();
						moveable[i].openRight();
					//	moveable[i].openBot();
					//	moveable[i].openLeft();
						moveable[i].setHitbox();
						moveable[i].foobar = i;
						moveable[i].setDraggable(true);
 					break;
 						
 					case "4":
 						moveable[i] = Crafty.e("block")
										.attr({x:(big + 3)*i,y:16});
					//	moveable[i].openTop();
					//	moveable[i].openRight();
						moveable[i].openBot();
					//	moveable[i].openLeft();
					moveable[i].foobar = i;
						moveable[i].setHitbox();
						moveable[i].setDraggable(true);
 					break;
 					
 					case "5":
 						moveable[i] = Crafty.e("block")
										.attr({x:(big + 3)*i,y:16});
						moveable[i].openTop();
					//	moveable[i].openRight();
						moveable[i].openBot();
					//	moveable[i].openLeft();
					moveable[i].foobar = i;
						moveable[i].setHitbox();
						moveable[i].setDraggable(true);
 					break;
 					
 					case "6":
 						moveable[i] = Crafty.e("block")
										.attr({x:(big + 3)*i,y:16});
					//	moveable[i].openTop();
						moveable[i].openRight();
						moveable[i].openBot();
					//	moveable[i].openLeft();
						moveable[i].setHitbox();
						moveable[i].foobar = i;
						moveable[i].setDraggable(true);
 					break;
 					
 					case "7":
 						moveable[i] = Crafty.e("block")
										.attr({x:(big + 3)*i,y:16});
						moveable[i].openTop();
						moveable[i].openRight();
						moveable[i].openBot();
					//	moveable[i].openLeft();
						moveable[i].setHitbox();
						moveable[i].foobar = i;
						moveable[i].setDraggable(true);
 					break;
 						
 					case "8":
 						moveable[i] = Crafty.e("block")
										.attr({x:(big + 3)*i,y:16});
					//	moveable[i].openTop();
					//	moveable[i].openRight();
					//	moveable[i].openBot();
						moveable[i].openLeft();
						moveable[i].setHitbox();
						moveable[i].foobar = i;
						moveable[i].setDraggable(true);
 					break;
 						
 					case "9":
 						moveable[i] = Crafty.e("block")
										.attr({x:(big + 3)*i,y:16});
						moveable[i].openTop();
				//		moveable[i].openRight();
				//		moveable[i].openBot();
				moveable[i].foobar = i;
						moveable[i].openLeft();
						moveable[i].setHitbox();
						moveable[i].setDraggable(true);
 					break;
 					
 					case "10":
 						moveable[i] = Crafty.e("block")
										.attr({x:(big + 3)*i,y:16});
				//		moveable[i].openTop();
						moveable[i].openRight();
				//		moveable[i].openBot();
				moveable[i].foobar = i;
						moveable[i].openLeft();
						moveable[i].setHitbox();
						moveable[i].setDraggable(true);
 					break;
 					
 					case "11":
 						moveable[i] = Crafty.e("block")
										.attr({x:(big + 3)*i,y:16});
						moveable[i].openTop();
						moveable[i].openRight();
				//		moveable[i].openBot();
						moveable[i].openLeft();
						moveable[i].setHitbox();
						moveable[i].foobar = i;
						moveable[i].setDraggable(true);
 					break;
 					
 					case "12":
 						moveable[i] = Crafty.e("block")
										.attr({x:(big + 3)*i,y:16});
					//	moveable[i].openTop();
					//	moveable[i].openRight();
						moveable[i].openBot();
						moveable[i].openLeft();
						moveable[i].setHitbox();
						moveable[i].foobar = i;
						moveable[i].setDraggable(true);
 					break;
 					
 					case "13":
 						moveable[i] = Crafty.e("block")
										.attr({x:(big + 3)*i,y:16});
						moveable[i].openTop();
					//	moveable[i].openRight();
						moveable[i].openBot();
						moveable[i].foobar = i;
						moveable[i].openLeft();
						moveable[i].setHitbox();
						moveable[i].setDraggable(true);
 					break;
 					
 					case "14":
 						moveable[i] = Crafty.e("block")
										.attr({x:(big + 3)*i,y:16});
					//	moveable[i].openTop();
						moveable[i].openRight();
						moveable[i].openBot();
						moveable[i].foobar = i;
						moveable[i].openLeft();
						moveable[i].setHitbox();
						moveable[i].setDraggable(true);
 					break;
 					
 					case "15":
 						moveable[i] = Crafty.e("block")
									.attr({x:(big + 3)*i,y:16});
						moveable[i].openTop();
						moveable[i].openRight();
						moveable[i].openBot();
						moveable[i].foobar = i;
						moveable[i].openLeft();
						moveable[i].setHitbox();
						moveable[i].setDraggable(true);
 					break;
 					
 					case "16":
 						moveable[i] = Crafty.e("block")
										.attr({x:(big + 3)*i,y:16});
						moveable[i].openTop();
						moveable[i].openRight();
						moveable[i].openBot();
						moveable[i].foobar = i;
						moveable[i].openLeft();
						moveable[i].setHitbox();
						moveable[i].setDraggable(true);
 					break;

 					}
	moveable[i].color("orange")
		.z = 50;
		
		for (var x=0; x < 3; x++) {
			for(var y=0; y < 3; y++)
			{
				if (moveable[i].collision[x][y] != null)
				{
					moveable[i].collision[x][y].z = 51;
					//console.log("colBlock");
					
				}
			}
		}
	};
	
}
