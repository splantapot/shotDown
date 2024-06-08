const mainSettings = {
    fps: 60,
    widthTiles: 60,
    heightTiles: 60,
    sizeTiles: 50,
    canvasbox: document.getElementById('canvasbox'),
    canvas: document.getElementById('canvas'),
    ctx: document.getElementById('canvas').getContext('2d'),
};
mainSettings.canvas.width = mainSettings.canvasbox.clientWidth;
mainSettings.canvas.height = mainSettings.canvasbox.clientHeight;