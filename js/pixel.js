class Pixel {
    constructor(pos=[0,0]) {
        this.pos = pos;
        this.abs = {
            topLeft: [pos[0] * settings.pixelSize, pos[1] * settings.pixelSize],
            bottomRight: [pos[0] * settings.pixelSize + settings.pixelSize, pos[1] * settings.pixelSize + settings.pixelSize]
        };
        this.color = settings.colors.white;
    }

    draw() {
        push()
        translate(settings.pixelSize * this.pos[0] , settings.pixelSize * this.pos[1]);
        stroke(settings.colors.space);
        strokeWeight(2);
        fill(this.color);
        rect(0,0,settings.pixelSize,settings.pixelSize);
        pop();
    }
}