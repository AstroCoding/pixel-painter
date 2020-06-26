class ColorPicker {
    constructor() {
        this.height = (height * 0.1)
        this.squareSize = width / (Object.keys(settings.colors).length);
        this.color = settings.colors[Object.keys(settings.colors)[0]]
    }

    draw() {
        stroke(settings.colors.white);
        for (let i = 0; i < Object.keys(settings.colors).length; i++) {
            push()
            fill(settings.colors[Object.keys(settings.colors)[i]]);
            if (i == Object.keys(settings.colors).length - 1) {
                fill('PINK');
            }
            translate(this.squareSize * i, height-this.height);
            rect(0, 0 + 20, this.squareSize, this.squareSize);
            pop()
        }
    }

    get getColor() {
        return settings.colors[Object.keys(settings.colors)[Math.floor(mouseX / colorPicker.squareSize)]];
    }
}