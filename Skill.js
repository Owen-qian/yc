// eslint-disable-next-line no-unused-vars
class Skill {
    constructor(characterType, amount, multiplier) {
        this.PLAYER_TYPE = 0;
        this.MONSTER_TYPE = 1;
        this.amount = amount;
        this.multiplier = multiplier;
        this.messages = [];
        this.setMessages(characterType);
    }

    setMessages(characterType) {
        // Implement setMessages method based on characterType
    }

    getAmount(buffed) {
        if (buffed) {
            return Math.floor(this.amount * this.multiplier);
        }
        return this.amount;
    }

    getRandomMessage() {
        const randomIndex = Math.floor(Math.random() * this.messages.length);
        return this.messages[randomIndex];
    }
}
export {Skill};