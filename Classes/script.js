class Reactangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}
	calcArea() {
		return this.height * this.width;
	}
}

const rect = new Reactangle(10, 10);

class ColoredReactangleWithText extends Reactangle {
	constructor(height, width, text) {
		super(height, width);
		this.text = text;

	}
	
}

new Reactangle(10,10);