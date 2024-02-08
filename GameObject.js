function GameObject()
{
	this.direction = new Point(1,0);
	this.speed = 0;
	this.velocity = new Point();
	this.debug = true;
	this.position = new Point();
	this.acceleration = new Point();
};

GameObject.prototype = 
{
	init: function()
	{
	},

	update: function()
	{
	},

	draw: function()
	{
		if(this.debug)
		{
			setColor(255,0,0,255);
			drawLine(this.position, this.position.add(this.velocity.multiply(10)));
			setColor(0,0,255,255);
			drawLine(this.position, this.position.add(this.acceleration.multiply(10)));
		}
	},

	setPosition: function(x, y)
	{
		this.position = new Point(x || 0, y || 0);
	},

	getPosition: function()
	{
		return this.position;
	},

	setDirection: function(direction, loadParam)
	{
		if(!loadParam)
		{
			this.direction = direction;
			this.velocity = this.direction.multiply(this.speed);
		}
		else
		{
			
		}
	},

	setDebug: function(debug)
	{
		this.debug = debug;
	},

	super : function(functionName) 
	{
	    GameObject.prototype[functionName].call(this);
	}
};