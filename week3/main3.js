var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PI = 3.1415926;
var Shape = (function () {
    // Constructor 
    function Shape(name) {
        this.name = name;
    }
    Shape.prototype.area = function () {
        var calculatedArea = 0;
        console.log(" Shape::area -- " + this.name + " | area = " + calculatedArea);
        return calculatedArea;
    };
    return Shape;
}());
var Circle = (function (_super) {
    __extends(Circle, _super);
    // Constructor 
    function Circle(name, radius) {
        _super.call(this, name);
        this.name = name;
        this.radius = radius;
    }
    Circle.prototype.area = function () {
        var calculatedArea = PI * (this.radius * this.radius);
        console.log("  Circle::area -- " + this.name + " | area = " + calculatedArea);
        return calculatedArea;
    };
    Circle.prototype.perimeter = function () {
        var calcPerim = 2 * PI * this.radius;
        console.log("  Circle::perimeter -- " + this.name + " | perim. = " + calcPerim);
        return calcPerim;
    };
    return Circle;
}(Shape));
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    // Constructor 
    function Rectangle(name, base, height) {
        _super.call(this, name);
        this.name = name;
        this.base = base;
        this.height = height;
    }
    Rectangle.prototype.area = function () {
        var calculatedArea = this.base * this.height;
        console.log("  Rectangle::area -- " + this.name + " | area = " + calculatedArea);
        return calculatedArea;
    };
    Rectangle.prototype.perimeter = function () {
        var calcPerim = 2 * (this.base + this.height);
        console.log("  Rectangle::perimeter -- " + this.name + " | perim. = " + calcPerim);
        return calcPerim;
    };
    return Rectangle;
}(Shape));
var myShape = new Shape('shape name');
var myCircle = new Circle('my Circle', 3);
var myRectangle = new Rectangle('my Rectangle', 4, 6);
document.write("name: " + myShape.name + " | area: " + myShape.area());
document.write("<br />");
document.write("name: " + myCircle.name + " | area: " + myCircle.area() + " | perim.: " + myCircle.perimeter());
document.write("<br />");
document.write("name: " + myRectangle.name + " | area: " + myRectangle.area() + " | perim.: " + myRectangle.perimeter());
