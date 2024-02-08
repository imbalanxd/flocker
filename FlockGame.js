var gameObjects = new Array();
var mouse = new Point(0, 0);
var timeElapsed = 0;


var PI_CONV = 0.05817764173314431923078969228295;
var MAX_FPS = 60;

function FlockGame(container, width, height)
{
	var gameCanvas = document.createElement('canvas');
	container.appendChild(gameCanvas);
	Context = gameCanvas.getContext("2d");

	gameCanvas.id = "gameCanvas";
	gameCanvas.width = width || 1200;
	gameCanvas.height = height || 700;
	gameCanvas.addEventListener('mousemove', getMouse, false);
	document.addEventListener('keydown', keyboard, false);
	clearColor = "rgba(230, 230, 230, 1.0)";

	

	var flock = new Flock();
	flock.setPosition(0,0);
	flock.add(50);

	var frames = new Array();
	var frameCount = 0;
	var frameTime = new Date().getTime();

	var gameLoop = function()
	{
		var start = new Date().getTime()
		frameTime = (start - frameTime);
		timeElapsed = frameTime/1000;
		frames[frameCount] = frameTime;
		frameCount = (frameCount+1)%20
		frameTime = start;
		scale(1.0,1.0);
		clearCanvas();
		displayFrameRate();

		updateAndDraw();

		var processTime = (new Date().getTime() - start);
  		gLoop = setTimeout(gameLoop, Math.max(0, (1000 / MAX_FPS) - processTime));  
	}

	var updateAndDraw = function()
	{
		for(var i=0; i<gameObjects.length; i++)
		{
			gameObjects[i].update();
			gameObjects[i].draw();
		}
	}
	
	var clearCanvas = function(x, y, width, height)
	{
		Context.fillStyle = clearColor;
		Context.fillRect(x || 0, y || 0, width || gameCanvas.width, height || gameCanvas.height);
	}

	function displayFrameRate()
	{
		var frameRateAvg = 0;
		for(var o=0;o<20;o++)
		{
			frameRateAvg+=frames[o];
		}
		drawText("FPS: "+ Math.round(1000/(frameRateAvg/20)), 100,100);
	}

	function getMouse(e) 
	{
		mouse.x = e.offsetX;
		mouse.y = e.offsetY;
	}

	function keyboard(e)
	{
		if(e.keyCode == 'D'.charCodeAt(0))
			toggleDebug();
	}

	var toggleDebug = function()
	{
		for(var k = 0; k<gameObjects.length; k++)
		{
			gameObjects[k].setDebug(!gameObjects[k].debug);
		}
	}
	gameLoop();
};

