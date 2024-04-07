// eslint-disable-next-line no-unused-vars
class Booster {
    constructor(type) {
        this.status = false;
        this.rounds = 0;
        this.type = type;
        this.actions = [
            "engage in meditation",
            "sleep earlier",
            "read a book",
            "seek help from a psychiatrist",
            "eat some healthy food"
        ];
    }

    getRounds() {
        return this.rounds;
    }

    isStatus() {
        return this.status;
    }

    print() {
        if (this.type === 1) {
            return "You found out that work is harder than you thought :(";
        }

        const randomIndex = Math.floor(Math.random() * this.actions.length);
        const action = `You choose to ${this.actions[randomIndex]}. You will work better! :)`;
        this.status = true;
        this.rounds = 3;
        return action;
    }

    check() {
        if (this.rounds > 0) {
            const message = `The motivation will keep for ${this.rounds} days, keep going!`;
            this.rounds--;
            return message;
        } else {
            this.status = false;
            return "Oh no! You feel a little tired. Take it easy!";
        }
    }
}
export{Booster};