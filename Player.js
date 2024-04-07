// import Person from './Person'; // 导入Person类
// // eslint-disable-next-line no-undef, no-unused-vars
// class Player extends Person {
//     constructor(HP, damage, defence, multiplier, name) {
//         super(0, HP, damage, defence, multiplier, name);
//         // eslint-disable-next-line no-undef
//         this.healing = new Healing(multiplier);
//     }

//     getHealing() {
//         return this.healing;
//     }

//     useHealing() {
//         let median = this.HP;
//         median += this.healing.getAmount(super.booster.isStatus());
//         if (median > 100) {
//             median = 100;
//         }
//         this.HP = median;
//         return this.healing.getRandomMessage();
//     }

//     setHP(HP) {
//         this.HP = HP;
//     }
// }
// export { Player};
