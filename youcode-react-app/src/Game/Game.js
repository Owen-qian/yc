import React from 'react';
import { useNavigate } from "react-router-dom";

const Game = () => {
  const navigate = useNavigate()

  const goToWelcomePage=()=>{
    navigate("/");
  }
  return (
    <>
      <h1>HIII GAME</h1>
      <button onClick={() => goToWelcomePage()} className="btn">Go to Page</button>
    </>
  );
};
export default Game;