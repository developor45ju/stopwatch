class Chrono {
    constructor() {
        this.secondDom = document.querySelector('.seconds')
        this.minuteDom = document.querySelector('.minutes')
        this.hourDom = document.querySelector('.hours')
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.intervalId = null;
    }

    main() {
        this.seconds++;
        this.secondDom.textContent = this.seconds < 10 ? `0${this.seconds}` : this.seconds;
        if (this.seconds > 59) {
            this.seconds = 0;
            this.minutes++;
            this.minuteDom.textContent = this.minutes < 10 ? `0${this.minutes}` : this.minutes;
        }
        if (this.minutes > 59) {
            this.minutes = 0;
            this.hours++;
            this.hours.textContent = this.hours < 10 ? `0${this.minutes}` : this.minutes;
        }
        if (this.hours == 24) {
            this.stop();  
        }
    }

    stop() {
        clearInterval(this.intervalId);
    }

    start() {
        this.intervalId = setInterval(this.main.bind(this), 1000);
    }
}

const btnStart = document.querySelector('.btn__start');
const btnStop = document.querySelector('.btn__stop');

const chronoInstance = new Chrono();
btnStart.addEventListener('click', () => chronoInstance.start());
btnStop.addEventListener('click', () => chronoInstance.stop());