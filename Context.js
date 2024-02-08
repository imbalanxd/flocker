var Context;
function setColor(r, g, b, a)
{
	Context.fillStyle = "rgba("+r+", "+g+", "+b+", "+a/255+")";
	Context.strokeStyle = "rgba("+r+", "+g+", "+b+", "+a/255+")";
}

function push()
{
	Context.save();
}
function pop()
{
	Context.restore();
}

//Overloaded drawRect funtion
//Takes top left corner and bottom right corner
//Or takes top left corner and width and height
function drawRect(topLeft, bottomRight, loadParam)
{
	if(loadParam)
		Context.fillRect(topLeft.x, topLeft.y, 
		bottomRight, loadParam);
	else
	Context.fillRect(topLeft.x, topLeft.y, 
		bottomRight.x - topLeft.x, bottomRight.y-topLeft.y);
}

function drawEllipse(center, radius, eccentricity)
{
	Context.beginPath();
	Context.arc(center.x, center.y, radius, 0 , 2 * Math.PI, false);
	Context.stroke();
}

//Overloaded drawImage function

function drawImage(img, centerPoint, rotation)
{
	push();
	Context.translate(centerPoint.x, centerPoint.y);
	if(rotation)
		Context.rotate(Math.PI/180 * rotation);
	//scale(1.0,1.0);
	Context.drawImage(img, - img.width/2.0, - img.height/2.0);
	pop();
}

function drawText(text, position, positiony)
{
	Context.fillStyle = "blue";
  	Context.font = "bold 16px Arial";
	if(positiony)
		Context.fillText(text, position, positiony);
	else
		Context.fillText(text, position.x, position.y);
}

function drawLine(P1, P2)
{
	Context.beginPath();
	Context.moveTo(P1.x, P1.y);
	Context.lineTo(P2.x, P2.y);
	Context.closePath();
    Context.stroke();
}

function scale (x, y)
{
	Context.scale(x,y);
}
