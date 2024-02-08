Flocker.prototype = new PhysicsObject();
function Flocker(flock, x, y)
{
	this.setPosition(x,y);
	this.setSpeed(3);
	var img = new Image();
	img.src =  'flocker.png';
	var parent = flock;
	var ref = this;

	//Attributes Unique to Flockers
	var seperationRadius;
	var collisionRadiusIndex;

	var radiusArray = new Array();

	var collision = false;

	this.update = function()
	{
		this.addAcceleration(this.absolutePosition().findVector(mouse).normalise());
		this.radiusCheck(this.seperationRadius, ref.seperationForce);
		// if(this.radiusCheck(this.seperationRadius, ref.seperationForce).length > 0)
		// 	this.collision = true;
		// else
		// 	this.collision = false;
		this.super("update");
	}

	this.draw = function()
	{
		drawImage(img, this.absolutePosition(), this.direction.findAngle());
		setColor(0,0,0,255);
		drawRect(this.absolutePosition(), 1, 1);
		this.super("draw");
		if(!this.debug)
		{
			if(this.collision)
				setColor(255,0,0,255);
			else
				setColor(0,0,255,255);
			drawEllipse(this.absolutePosition(), this.seperationRadius);
		}
	}

	this.radiusCheck = function(radius, response)
	{
		collisions = new Array();
		for(var i = 0; i < flock.size(); i++)
		{
			neighbour = flock.get(i);

			if(neighbour != this && this.position.distance(neighbour.position) <= radius)
			{
				collisions.push(neighbour);
				response.call(this, neighbour);
			}
		}
		return collisions;
	}

	this.seperationForce = function(neighbour)
	{
		force = this.absolutePosition().findVector(neighbour.position).normalise();
		multiplier = 1.0 + ((this.position.distance(neighbour.position)-5) / (this.seperationRadius - 5));
		multiplier = -2.0 / Math.pow(multiplier, 2);
		this.addAcceleration(force.multiply(multiplier));
	}

	this.absolutePosition = function()
	{
		return this.position.add(parent.position);
	}

	this.setSeperation = function(seperation)
	{
		this.seperationRadius = seperation;
	}
};



