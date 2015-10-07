

class ShapeFactory {
	buildShape(x, y, shapeType) {
		var ret;
		if(shapeType ==  "circle") {
			ret = new Circle(x,y,10);
		}
		else if(shapeType == "triangle") {
			ret = new Triangle(x,y);
		}
		else if(shapeType == "square") {
			ret = new Square(x,y);
		}
		else if(shapeType == "pan") {
			ret = new Pan();
		}
		return ret;
	}
}

class MyDrawable {
	draw() {
		this.canvas = document.getElementById('canvas');
		this.ctx = canvas.getContext("2d");
	}
}

class Shape extends MyDrawable {
	constructor(x,y) {
		super();
		this.x = x;
		this.y = y;
	}
	draw() {
		super.draw();
	}
}

class Triangle extends Shape{
	constructor(x,y) {
		super(x,y);
	}
	draw (){
		super.draw();
		
		var path = new Path2D();
		path.moveTo(this.x-20, this.y+10);
		path.lineTo(this.x+20, this.y+10);
		path.lineTo(this.x, this.y-10);
		this.ctx.fillStyle="#FF0000";
		this.ctx.fill(path);
	}
}

class Square extends Shape{
	constructor(x,y, length) {
		super(x,y);
	}
	draw (){
		super.draw();
		
		var path = new Path2D();
		path.moveTo(this.x-10, this.y-10);
		path.lineTo(this.x-10, this.y+10);
		path.lineTo(this.x+10, this.y+10);
		path.lineTo(this.x+10, this.y-10);
		this.ctx.fillStyle="#0000FF";
		this.ctx.fill(path);
	}
}

class Circle extends Shape {
	constructor(x,y, radius) {
		super(x,y);
		this.radius = radius;
	}
	draw (){
		super.draw();

		this.ctx.beginPath();
		this.ctx.arc(this.x,this.y,this.radius,0, 2*Math.PI);
		this.ctx.closePath();
		this.ctx.fillStyle="#00FF00";
		this.ctx.fill();
	}
}

var panDir = -1;
class Pan extends MyDrawable {
	constructor(panDirection) {
		super();
	}
	draw () {
		super.draw();
		
		const panDistance = 400;
		this.canvas.style.transform = "translate(0px,"+ panDistance * panDir +"px)"; (panDir == -1) ? panDir = 0: panDir =-1;
	}
}