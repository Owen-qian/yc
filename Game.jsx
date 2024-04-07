import React, { useState } from 'react';
import { Player, Monster } from './Person'; // 替换为你的类文件路径

const Game = () => {
    const [player, setPlayer] = useState(new Player(100, 20, 10, 1.5, "Player"));
    const [monsters] = useState([
        new Monster(80, 15, 5, 1.2, "Homework"),
        new Monster(100, 20, 8, 1.3, "The final exam"),
        new Monster(120, 25, 10, 1.4, "The life")
    ]);
    const [currentMonsterIndex, setCurrentMonsterIndex] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [message, setMessage] = useState('');

    const handlePlayerAction = (action) => {
        if (!gameOver) {
            switch (action) {
                case 'attack':
                    setMessage(player.useAttack(monsters[currentMonsterIndex]));
                    break;
                case 'defence':
                    setMessage(player.useDefence());
                    break;
                case 'boost':
                    setMessage(player.useBooster());
                    break;
                case 'heal':
                    setMessage(player.useHealing());
                    break;
                default:
                    setMessage('Invalid action. Please choose again.');
            }
        }
    };

    const handleMonsterAction = () => {
        if (!gameOver) {
            const monster = monsters[currentMonsterIndex];
            const playerAction = Math.floor(Math.random() * 3) + 1; // Random player action (1: Attack, 2: Defence, 3: Boost)
            switch (playerAction) {
                case 1:
                    setMessage(`${monster.getName()} : ${monster.useAttack(player)}`);
                    break;
                case 2:
                    setMessage(`${monster.getName()} : ${monster.useDefence()}`);
                    break;
                case 3:
                    setMessage(`${monster.getName()} : ${monster.useBooster()}`);
                    break;
            }
        }
    };

    const handleNextMonster = () => {
        if (currentMonsterIndex + 1 < monsters.length) {
            setCurrentMonsterIndex(currentMonsterIndex + 1);
            setPlayer(new Player(100, 20, 10, 1.5, "Player")); // Reset player's HP
            setMessage(`Get ready for ${monsters[currentMonsterIndex + 1].getName()}`);
        } else {
            setGameOver(true);
            setMessage('Congratulations! You have defeated all monsters.');
        }
    };

    const handleCheckGameOver = () => {
        if (player.check()) {
            setGameOver(true);
            setMessage('Game over! You were defeated by the monster.');
        }
    };

    return (
        <div>
            {!gameOver && (
                <div>
                    <p>Current HP: {player.getHP()}</p>
                    <p>Monster HP: {monsters[currentMonsterIndex].getHP()}</p>
                    <p>{message}</p>
                    <button onClick={() => handlePlayerAction('attack')}>Attack</button>
                    <button onClick={() => handlePlayerAction('defence')}>Defence</button>
                    <button onClick={() => handlePlayerAction('boost')}>Boost</button>
                    <button onClick={() => handlePlayerAction('heal')}>Heal</button>
                </div>
            )}
            {gameOver && <p>{message}</p>}
            {gameOver && <button onClick={handleNextMonster}>Start Next Round</button>}
        </div>
    );
};

export default Game;
