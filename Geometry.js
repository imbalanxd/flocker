Point = function(X, Y)
{
	this.x = X || 0;
	this.y = Y || 0;

	this.add = function(i, j)
	{
		if(j)
			return new Point(this.x + i, this.y + j);
		else
			return new Point(this.x + i.x, this.y + i.y);
	}

	this.multiply = function(c)
	{
		return new Point(this.x * c, this.y * c);
	}

	this.normalise = function()
	{
		var magnitude = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
		return new Point(this.x/magnitude, this.y/magnitude);
	}

	this.magnitude = function()
	{
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
	}

	this.findAngle = function(dest)
	{
		if(!dest)
		{
			return Math.atan2(this.y,this.x)/Math.PI * 180 + 90;
		}
		var angle = Math.atan2(dest.y - this.y,dest.x - this.x)/Math.PI * 180;
		return angle+90;
	}

	this.findVector = function(dest)
	{
		var vector = new Point(dest.x - this.x, dest.y - this.y);
		return vector;
	}

	this.distance = function(point)
	{
		return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2));
	}

	this.dot = function(point)
	{
		return (this.x*point.x + this.y*point.y);
	}

	this.project = function(point)
	{
		var val = this.dot(point) / Math.pow(point.magnitude(),2);
		return new Point(val*point.x, val*point.y);
	}

	this.scalarProject = function(point)
	{
		return (this.dot(point) / point.magnitude());
	}

	this.perpindicularProject = function(point)
	{
		return this.project(point.cross());
	}

	this.cross = function()
	{
		return new Point(-this.y, this.x);
	}
}