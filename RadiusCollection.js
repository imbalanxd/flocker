function RadiusCollection()
{
	RadiusArray = new Array();

	this.addRadius = function(key, value, func)
	{
		RadiusArray.push(new DetectionRadius(key,value,func));
		sort();
	}

	this.updateRadius = function(key, value, func)
	{
		for(var i = 0; i < RadiusArray.length; i++)
		{
			if(RadiusArray[i].Key == key)
			{
				RadiusArray[i].Value = value;
				RadiusArray[i].Func = func || RadiusArray[i].Func;
				sort(i);
				break;
			}
		}
	}

	function sort(index)
	{
		shiftDown(index);
		shiftUp(index);
	}

	function shiftDown(index)
	{
		if(RadiusArray[index].Value > RadiusArray[Math.max(index-1, 0)].Value)
		{
			var temp = RadiusArray[index];
			RadiusArray[index] = RadiusArray[index-1];
			RadiusArray[index-1] = temp;
			shiftDown(index-1);
		}
	}
	function shiftUp(index)
	{
		if(RadiusArray[index].Value < RadiusArray[Math.min(index+1, RadiusArray.length-1)].Value)
		{
			var temp = RadiusArray[index];
			RadiusArray[index] = RadiusArray[index+1];
			RadiusArray[index+1] = temp;
			shiftDown(index+1);
		}
	}

	function DetectionRadius(key, value, func)
	{
		//Name of this radius
		var Key = key;
		//Size of radius
		var Value = value;
		//Associated detection function
		var Func = func;
	}
};