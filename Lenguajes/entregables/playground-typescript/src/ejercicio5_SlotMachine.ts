class SlothMachine {

    public coins: number;
    public bool1: boolean;
    public bool2: boolean;
    public bool3: boolean;

    constructor() {
        this.coins = 0;
        this.bool1 = false;
        this.bool2 = false;
        this.bool3 = false;
    }

    play() {
        this.coins++;
        this.generateBooleans();
        this.checkResult();
    }

    generateBooleans() {
        this.bool1 = this.getRandomBoolean();
        this.bool2 = this.getRandomBoolean();
        this.bool3 = this.getRandomBoolean();
    }

    getRandomBoolean() {
        return !!Math.floor(Math.random() * 2); //0, 1
    }

    checkResult() {
        if (this.bool1 && this.bool2 && this.bool3) {
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
            this.coins = 0;
        } else {
            console.log(`Good luck next time!!`);
        }
    }
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();