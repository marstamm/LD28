var gamehight = 576;
var gamewidth = 800;
var timer = 0;
var lvl = 0;
var big = 24;
var tmps = null;
//IMPORTANT: using 18x18 fields
window.onload = function()
{		
	Crafty.init(gamewidth,gamehight);
	Crafty.canvas.init(60);
	Crafty.background("#444");
    Crafty.scene("load");
    
};