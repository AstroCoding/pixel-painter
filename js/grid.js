class Grid {
    constructor(colorPickerHeight, pixelSize=settings.pixelSize) {
        this.h = height - colorPickerHeight
        this.self = [];
        for (let i = 0 ; i < width / pixelSize ; i++) {
            this.self[i] = [];
            for (let j = 0 ; j < this.h / pixelSize ; j++) {
                this.self[i].push(new Pixel([i,j]));
            }
        }
    }

    draw() {
        for (let row of this.self) {
            for (let pixel of row) {
                pixel.draw();
            }
        }
    }

    get getPixel() {
        for (let row of this.self) {
            for (let pixel of row) {
                if ((mouseX > pixel.abs.topLeft[0] && mouseX < pixel.abs.bottomRight[0]) && (mouseY > pixel.abs.topLeft[1] && mouseY < pixel.abs.bottomRight[1])) return pixel
            }
        }
        return false;
    }

    findPixel(pos) {
        if (pos[0] == -1 || pos[1] == -1 || pos[0] >= this.self.length || pos[1] >= this.self[0].length) {
            return null;
        }
        return this.self[pos[0]][pos[1]]

    }

    fill(pixel) {
        if (pixel == null) return
        var oldColor = pixel.color;
        pixel.color = colorPicker.color;
        var dir = {
            up: this.findPixel([pixel.pos[0], pixel.pos[1] - 1]),
            left: this.findPixel([pixel.pos[0] - 1, pixel.pos[1]]),
            down: this.findPixel([pixel.pos[0], pixel.pos[1] + 1]),
            right: this.findPixel([pixel.pos[0] + 1, pixel.pos[1]]),
        }
        if (dir.up != null && oldColor == dir.up.color) {
            this.fill(dir.up);
        }
        if (dir.down != null && oldColor == dir.down.color) {
            this.fill(dir.down);
        }
        if (dir.left != null && oldColor == dir.left.color) {
            this.fill(dir.left);
        }
        if (dir.right != null && oldColor == dir.right.color) {
            this.fill(dir.right);
        }

    }
}