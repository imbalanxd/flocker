Flock.prototype = new GameObject();
function Flock(x, y)
{
	gameObjects.push(this);

	flock = new Array();
	var radiusCollection = new RadiusCollection();
	// radiusCollection.addRadius("seperation", 60, seperationForce);

	this.update = function()
	{
		for(var i = 0; i<flock.length; i++)
		{
			flock[i].update();
		}
	}

	this.draw = function()
	{
		for(var i = 0; i<flock.length; i++)
		{
			flock[i].draw();
		}
	}

	this.add = function(count)
	{
		for(var i = 0; i < count; i++)
		{
			f = new Flocker(this, 20*i,100);
			f.setSeperation(30);
			flock.push(f);
		}
	}

	this.get = function(index)
	{
		return flock[index];
	}

	this.size = function()
	{
		return flock.length;
	}

	this.setDebug = function(debug)
	{
		this.debug = debug;
		for(var i = 0; i<flock.length; i++)
		{
			flock[i].setDebug(debug);
		}
	}
};

