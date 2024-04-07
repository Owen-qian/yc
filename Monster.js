// import Person from './Person'; // 导入Person类
// // eslint-disable-next-line no-undef, no-unused-vars
// class Monster extends Person {
//     constructor(HP, damage, defence, multiplier, name) {
//         super(1, HP, damage, defence, multiplier, name);
//         this.max_HP = HP;
//         this.defenceCount = 3;
//         this.count = 0;
//     }

//     getMaxHP() {
//         return this.max_HP;
//     }

//     randomAction(p) {
//         const random = Math.random();
//         const hpPercentage = this.HP / this.max_HP;

//         // Monster always boosts itself in the first round
//         if (this.count === 0) {
//             this.count++;
//             return this.useBooster();
//         }

//         // If HP is higher than 50%
//         if (hpPercentage > 0.5) {
//             if (random < 0.7) {
//                 // 70% possibility to attack
//                 return this.useAttack(p); // Assuming the monster always attacks the opponent
//             } else {
//                 // 30% possibility to boost
//                 return this.useBooster();
//             }
//         } else { // If HP is lower than or equal to 50%
//             if (this.defenceCount > 0) {
//                 if (random < 0.33) {
//                     // 33% possibility to attack
//                     return this.useAttack(p); // Assuming the monster always attacks the opponent
//                 } else if (random < 0.67) {
//                     // 33% possibility to boost
//                     return this.useBooster();
//                 } else {
//                     // 33% possibility to defend
//                     this.defenceCount--;
//                     return this.useDefence();
//                 }
//             } else {
//                 // If no defence actions left, possibilities become same as HP > 50%
//                 if (random < 0.7) {
//                     // 70% possibility to attack
//                     return this.useAttack(p); // Assuming the monster always attacks the opponent
//                 } else {
//                     // 30% possibility to boost
//                     return this.useBooster();
//                 }
//             }
//         }
//     }
// }
// export { Monster};