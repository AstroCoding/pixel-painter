
var colorPicker, grid = null;

function setup() {
    createCanvas(Math.floor($(document).width() / settings.pixelSize) * settings.pixelSize, Math.floor($(document).height() / settings.pixelSize) * settings.pixelSize);

    colorPicker = new ColorPicker();
    grid = new Grid(colorPicker.height, settings.pixelSize);
}

function draw() {
    colorPicker.draw();
    grid.draw();
}

function mousePressed() {
    if (mouseY > height * 0.92 && mouseY < height * 0.98) {
        let color = colorPicker.getColor;
        if (color == 'COLORPICKER') {
            color = prompt('Please enter your hex color', '#ffc0cb');
        }
        colorPicker.color = color;
    } else if (mouseY < height * 0.92) {
        if(keyIsPressed && key =='f'){
            grid.fill(grid.getPixel);
        } else {
        let clickedPixel = grid.getPixel;
        clickedPixel.color = colorPicker.color;
        }
    }
}

function mouseDragged() {
    if (mouseY < height * 0.92) {
        let clickedPixel = grid.getPixel;
        clickedPixel.color = colorPicker.color;
    }
}

function mouseMoved() {
    if ((mouseY < height * 0.91) || (mouseY > height * 0.925 && mouseY < height * 0.98)) {
        $(canvas).css('cursor', 'pointer');
    } else {
        $(canvas).css('cursor', 'default');
    }
}