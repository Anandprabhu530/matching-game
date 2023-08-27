/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Random from "./utilities/Random";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const [cards, setcards] = useState(Random);
  const [pickone, setpickone] = useState(null);
  const [picktwo, setpicktwo] = useState(null);
  const [disabled, setdisabled] = useState(false);
  const [wins, setwins] = useState(0);

  const handleClick = (card) => {
    if (!disabled) {
      pickone ? setpicktwo(card) : setpickone(card);
    }
  };

  const handlewrong = () => {
    setpickone(null);
    setpicktwo(null);
    setdisabled(false);
  };

  const handlenewGame = () => {
    setwins(0);
    handlewrong();
    setcards(Random);
  };

  useEffect(() => {
    let time;
    if (pickone && picktwo) {
      if (pickone.image === picktwo.image) {
        setcards((old_cards) => {
          return old_cards.map((old_card) => {
            if (old_card.image === picktwo.image) {
              return { ...old_card, matched: true };
            } else {
              return { ...old_card };
            }
          });
        });
        handlewrong();
      } else {
        setdisabled(true);
        time = setTimeout(() => {
          handlewrong();
        }, 1000);
      }
    }
    return () => {
      clearTimeout(time);
    };
  }, [cards, pickone, picktwo]);

  useEffect(() => {
    const temp = cards.filter((card) => !card.matched);
    if (cards.length && temp.length < 1) {
      console.log("You won");
      setwins(wins + 1);
      handlewrong();
      setcards(Random);
    }
  }, [cards, wins]);
  return (
    <>
      <Header handlenewGame={handlenewGame} wins={wins} />
      <div className="grid">
        {cards.map((card) => {
          const { image, id, matched } = card;
          return (
            <Card
              key={id}
              image={image}
              selected={card === pickone || card === picktwo || matched}
              onClick={() => handleClick(card)}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
