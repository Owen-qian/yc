import {Skill} from './Skill';
// eslint-disable-next-line no-unused-vars
class Attack extends Skill {
    // eslint-disable-next-line no-useless-constructor
    constructor(characterType, attackDamage, multiplier) {
        super(characterType, attackDamage, multiplier);
    }

    setMessages(characterType) {
        if (characterType === this.PLAYER_TYPE) {
            this.messages.push("You studied hard");
            this.messages.push("You made progress");
            this.messages.push("Keep up the good work");
        } else if (characterType === this.MONSTER_TYPE) {
            this.messages.push("Massive work makes you stressful");
            this.messages.push("You were a victim of procrastination");
            this.messages.push("You were distracted from your work. Things become worse.");
        }
    }
}
export{Attack};