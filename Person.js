import {Attack} from './Attack';
import {Defence} from './Defence';
import {Booster} from './Booster';
// eslint-disable-next-line no-unused-vars
    class Person {
        constructor(type, HP, damage, defence, multiplier, name) {
            this.type = type;
            this.HP = HP;
            this.max_HP = HP;
            this.name = name;
            this.defence = new Defence(type, defence, multiplier);
            this.attack = new Attack(type, damage, multiplier);
            this.booster = new Booster(type);
        }
    
        getShield() {
            return this.shield;
        }
    
        getMax_HP() {
            return this.max_HP;
        }
    
        getName() {
            return this.name;
        }
    
        getAttack() {
            return this.attack;
        }
    
        getBooster() {
            return this.booster;
        }
    
        getDefence() {
            return this.defence;
        }
    
        useAttack(p) {
            const amount = this.attack.getAmount(this.booster.isStatus());
            p.beAttacked(amount);
            return this.attack.getRandomMessage();
        }
    
        useDefence() {
            this.shield = this.defence.getAmount(this.booster.isStatus());
            return this.defence.getRandomMessage();
        }
    
        useBooster() {
            return this.booster.print();
        }
    
        beAttacked(amount) {
            if (this.shield > 0) {
                if (this.shield >= amount) {
                    this.shield -= amount;
                } else {
                    this.HP += this.shield - amount;
                    this.shield = 0;
                }
            } else {
                this.HP -= amount;
            }
        }
    
        check() {
            return this.HP <= 0;
        }
    
        getHP() {
            return this.HP;
        }
    }
    
// eslint-disable-next-line import/first
import {Healing} from './Healing';
// eslint-disable-next-line no-undef, no-unused-vars
class Player extends Person {
    constructor(HP, damage, defence, multiplier, name) {
        super(0, HP, damage, defence, multiplier, name);
        // eslint-disable-next-line no-undef
        this.healing = new Healing(multiplier);
    }

    getHealing() {
        return this.healing;
    }

    useHealing() {
        let median = this.HP;
        median += this.healing.getAmount(super.booster.isStatus());
        if (median > 100) {
            median = 100;
        }
        this.HP = median;
        return this.healing.getRandomMessage();
    }

    setHP(HP) {
        this.HP = HP;
    }
}

// eslint-disable-next-line no-undef, no-unused-vars
class Monster extends Person {
    constructor(HP, damage, defence, multiplier, name) {
        super(1, HP, damage, defence, multiplier, name);
        this.max_HP = HP;
    }

    getMaxHP() {
        return this.max_HP;
    }

    randomAction(p) {
        const random = Math.random();
        const hpPercentage = this.HP / this.max_HP;

        // Monster always boosts itself in the first round
        if (this.count === 0) {
            this.count++;
            return this.useBooster();
        }

        // If HP is higher than 50%
        if (hpPercentage > 0.5) {
            if (random < 0.7) {
                // 70% possibility to attack
                return this.useAttack(p); // Assuming the monster always attacks the opponent
            } else {
                // 30% possibility to boost
                return this.useBooster();
            }
        } else { // If HP is lower than or equal to 50%
            if (this.defenceCount > 0) {
                if (random < 0.33) {
                    // 33% possibility to attack
                    return this.useAttack(p); // Assuming the monster always attacks the opponent
                } else if (random < 0.67) {
                    // 33% possibility to boost
                    return this.useBooster();
                } else {
                    // 33% possibility to defend
                    this.defenceCount--;
                    return this.useDefence();
                }
            } else {
                // If no defence actions left, possibilities become same as HP > 50%
                if (random < 0.7) {
                    // 70% possibility to attack
                    return this.useAttack(p); // Assuming the monster always attacks the opponent
                } else {
                    // 30% possibility to boost
                    return this.useBooster();
                }
            }
        }
    }
}
export { Person, Player, Monster };



