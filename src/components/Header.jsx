/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from "react";

const Header = ({ handlenewGame, wins }) => {
  useEffect(() => {
    document.title = `${wins} wins`;
  }, []);
  return (
    <header className="Header">
      <h4>{wins} - wins</h4>
      <h3>CARD MATCHER</h3>
      <button onClick={handlenewGame}>New Game</button>
    </header>
  );
};

export default Header;
