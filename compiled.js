"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShapeFactory = (function () {
	function ShapeFactory() {
		_classCallCheck(this, ShapeFactory);
	}

	_createClass(ShapeFactory, [{
		key: "buildShape",
		value: function buildShape(x, y, shapeType) {
			var ret;
			if (shapeType == "circle") {
				ret = new Circle(x, y, 10);
			} else if (shapeType == "triangle") {
				ret = new Triangle(x, y);
			} else if (shapeType == "square") {
				ret = new Square(x, y);
			} else if (shapeType == "pan") {
				ret = new Pan();
			}
			return ret;
		}
	}]);

	return ShapeFactory;
})();

var MyDrawable = (function () {
	function MyDrawable() {
		_classCallCheck(this, MyDrawable);
	}

	_createClass(MyDrawable, [{
		key: "draw",
		value: function draw() {
			this.canvas = document.getElementById('canvas');
			this.ctx = canvas.getContext("2d");
		}
	}]);

	return MyDrawable;
})();

var Shape = (function (_MyDrawable) {
	_inherits(Shape, _MyDrawable);

	function Shape(x, y) {
		_classCallCheck(this, Shape);

		_get(Object.getPrototypeOf(Shape.prototype), "constructor", this).call(this);
		this.x = x;
		this.y = y;
	}

	_createClass(Shape, [{
		key: "draw",
		value: function draw() {
			_get(Object.getPrototypeOf(Shape.prototype), "draw", this).call(this);
		}
	}]);

	return Shape;
})(MyDrawable);

var Triangle = (function (_Shape) {
	_inherits(Triangle, _Shape);

	function Triangle(x, y) {
		_classCallCheck(this, Triangle);

		_get(Object.getPrototypeOf(Triangle.prototype), "constructor", this).call(this, x, y);
	}

	_createClass(Triangle, [{
		key: "draw",
		value: function draw() {
			_get(Object.getPrototypeOf(Triangle.prototype), "draw", this).call(this);

			var path = new Path2D();
			path.moveTo(this.x - 20, this.y + 10);
			path.lineTo(this.x + 20, this.y + 10);
			path.lineTo(this.x, this.y - 10);
			this.ctx.fill(path);
		}
	}]);

	return Triangle;
})(Shape);

var Square = (function (_Shape2) {
	_inherits(Square, _Shape2);

	function Square(x, y, length) {
		_classCallCheck(this, Square);

		_get(Object.getPrototypeOf(Square.prototype), "constructor", this).call(this, x, y);
	}

	_createClass(Square, [{
		key: "draw",
		value: function draw() {
			_get(Object.getPrototypeOf(Square.prototype), "draw", this).call(this);

			var path = new Path2D();
			path.moveTo(this.x - 10, this.y - 10);
			path.lineTo(this.x - 10, this.y + 10);
			path.lineTo(this.x + 10, this.y + 10);
			path.lineTo(this.x + 10, this.y - 10);

			this.ctx.fill(path);
		}
	}]);

	return Square;
})(Shape);

var Circle = (function (_Shape3) {
	_inherits(Circle, _Shape3);

	function Circle(x, y, radius) {
		_classCallCheck(this, Circle);

		_get(Object.getPrototypeOf(Circle.prototype), "constructor", this).call(this, x, y);
		this.radius = radius;
	}

	_createClass(Circle, [{
		key: "draw",
		value: function draw() {
			_get(Object.getPrototypeOf(Circle.prototype), "draw", this).call(this);

			this.ctx.beginPath();
			this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
			this.ctx.closePath();
			this.ctx.fill();
		}
	}]);

	return Circle;
})(Shape);

var Pan = (function (_MyDrawable2) {
	_inherits(Pan, _MyDrawable2);

	function Pan() {
		_classCallCheck(this, Pan);

		_get(Object.getPrototypeOf(Pan.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(Pan, [{
		key: "draw",
		value: function draw() {
			_get(Object.getPrototypeOf(Pan.prototype), "draw", this).call(this);

			this.ctx.transform(1, 0.5, -0.5, 1, 30, 10);
		}
	}]);

	return Pan;
})(MyDrawable);