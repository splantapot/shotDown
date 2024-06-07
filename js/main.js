const controller = new Controller();
const timer = new Timer();

timer.updateChanges();

requestAnimationFrame(gameRun);
function gameRun() {
    timer.updateChanges();

    if (timer.changes.dif>1000/mainSettings.fps) {
        console.log('Up');
    }
}