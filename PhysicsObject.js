PhysicsObject.prototype = new GameObject();
function PhysicsObject()
{
	this.direction = new Point(1,0);
	this.speed = 0;
	this.velocity = new Point();
	this.debug = true;
	this.position = new Point();
	this.acceleration = new Point();
};

PhysicsObject.prototype = 
{
	init: function()
	{
	},

	update: function()
	{
		this.applyAcceleration()
		this.velocity = this.direction.multiply(this.speed);
		this.position = this.position.add(this.velocity);
		this.acceleration = new Point();
	},

	draw: function()
	{
		//GameObject.super("draw");
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
		}
		else
		{
			
		}
	},

	setSpeed: function(s)
	{
		this.speed = s;
	},

	setAcceleration: function(a)
	{
		this.acceleration = a;
	},

	addAcceleration: function(a)
	{
		this.acceleration = this.acceleration.add(a);
	},

	applyAcceleration: function()
	{
		
		
		var speedAdjust = this.acceleration.scalarProject(this.direction)*0.1;
		var directionAdjust = this.acceleration.perpindicularProject(this.direction).multiply(0.15);
		//console.log(directionAdjust.magnitude());
		this.direction = this.direction.add(this.acceleration.perpindicularProject(this.direction).multiply(0.15)).normalise();
		this.speed = Math.max(0, Math.min(4.0, this.speed + this.acceleration.scalarProject(this.direction)*0.1));
		
	},

	// applyAcceleration: function(a)
	// {
	// 	this.direction = this.direction.add(a.perpindicularProject(this.direction).multiply(0.15)).normalise();
	// 	this.speed = Math.max(0.0, Math.min(4.0, this.speed + a.scalarProject(this.direction)*0.1));
	// 	this.velocity = this.direction.multiply(this.speed);
	// },

	setDebug: function(debug)
	{
		this.debug = debug;
	},

	super : function(functionName) 
	{
	    PhysicsObject.prototype[functionName].call(this);
	}
};