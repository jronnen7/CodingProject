

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
		this.ctx.fill();
	}
}

class Pan extends MyDrawable {
	draw () {
		super.draw();
		
		this.ctx.transform(1,0.5,-0.5,1,30,10);
	}
}