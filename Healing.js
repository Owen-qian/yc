import {Skill} from './Skill';
// eslint-disable-next-line no-undef, no-unused-vars
class Healing extends Skill {
    constructor(multiplier) {
        const BASE_HEALING = 20;
        super(0, BASE_HEALING, multiplier);
        this.setMessages();
    }

    setMessages() {
        this.messages.push("You rested well!");
        this.messages.push("Great relaxation session!");
        this.messages.push("Self-care is important!");
    }
}
export { Healing };
