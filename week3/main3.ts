const PI = 3.1415926;

class Shape {
    name: string;

    // Constructor 
    constructor(name: string) {
        this.name = name;
    }


    area() {
        var calculatedArea: number = 0;
        console.log(" Shape::area -- " + this.name + " | area = " + calculatedArea);
        return calculatedArea;
    }
}

class Circle extends Shape {
    // Constructor 
    constructor(public name: string, public radius: number) {
        super(name);
    }

    area() : number {
        var calculatedArea: number = PI * (this.radius * this.radius);
        console.log("  Circle::area -- " + this.name + " | area = " + calculatedArea);
        return calculatedArea;
    }

    perimeter() : number {
        var calcPerim: number = 2 * PI * this.radius;
        console.log("  Circle::perimeter -- " + this.name + " | perim. = " + calcPerim);
        return calcPerim;
    }
} 

// TypeScript
interface IShapeBH{  
    base: number;
    height: number;
}

class Rectangle extends Shape implements IShapeBH {
    // Constructor 
    constructor(public name: string, public base: number, public height: number) {
        super(name);
    }

    area() : number {
        var calculatedArea: number = this.base * this.height;
        console.log("  Rectangle::area -- " + this.name + " | area = " + calculatedArea);
        return calculatedArea;
    }

    perimeter() : number {
        var calcPerim: number = 2 * (this.base + this.height);
        console.log("  Rectangle::perimeter -- " + this.name + " | perim. = " + calcPerim);
        return calcPerim;
    }
}

var myShape = new Shape('shape name');
var myCircle = new Circle('my Circle', 3);
var myRectangle = new Rectangle('my Rectangle', 4, 6);


document.write("name: "+myShape.name + " | area: "+myShape.area() );
document.write("<br />");
document.write("name: "+myCircle.name + " | area: "+myCircle.area() + " | perim.: "+myCircle.perimeter() );
document.write("<br />");
document.write("name: "+myRectangle.name + " | area: "+myRectangle.area() + " | perim.: "+myRectangle.perimeter() );
