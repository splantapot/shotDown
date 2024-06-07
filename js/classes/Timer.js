class Timer {
    constructor() {
        this.timer = 0;
        this.changes = {
            start: new Date().getTime(),
            now: 0,
            dif: 0
        }
    }

    resetTimer() {
        this.timer = new Date().getTime();
    }

    getTimer() {
        return new Date().getTime() - this.timer;
    }

    updateChanges() {
        this.changes.now = new Date().getTime();
        this.changes.dif = this.changes.start - this.changes.now;
        this.changes.start = this.changes.now;
    }
}