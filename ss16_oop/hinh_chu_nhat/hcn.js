class Box {
    constructor(height, breadth) {
        this.height = height;
        this.breadth = breadth;
    }

    getHeight() {
        return this.height;
    }

    getBreadth() {
        return this.breadth;
    }

    setHeight(height) {
        this.height = height;
    }

    setBreadth(breadth) {
        this.breadth = breadth;
    }

    getArea() {
        return this.height * this.breadth;
    }

    getPerimeter() {
        return 2 * (this.height + this.breadth);
    }

    render() {
        let canvas = document.createElement("canvas");
        canvas.width = this.breadth;
        canvas.height = this.height;

        let context = canvas.getContext("2d");
        context.fillRect(0, 0, this.breadth, this.height);

        return canvas;
    }
}

let myBox = new Box(500, 600);
document.body.appendChild(myBox.render());