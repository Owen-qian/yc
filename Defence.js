import {Skill} from './Skill';
// eslint-disable-next-line no-unused-vars
class Defence extends Skill {
    // eslint-disable-next-line no-useless-constructor
    constructor(characterType, amount, multiplier) {
        super(characterType, amount, multiplier);
    }

    setMessages(characterType) {
        if (characterType === this.PLAYER_TYPE) {
            this.messages.push("Explore the outdoors");
            this.messages.push("Take a walk outside");
            this.messages.push("Go for a hike");
            this.messages.push("Do some exercises");
            this.messages.push("Go swimming");
        } else if (characterType === this.MONSTER_TYPE) {
            this.messages.push("You get stuck and the time to accomplish your goals has increased");
            this.messages.push("You're assigned to a new tasks.");
        }
    }
}
export{Defence};