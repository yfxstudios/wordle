import Head from "next/head";
import { Roboto_Slab } from "next/font/google";
import Keyboard from "@/components/Keyboard";
import { useEffect, useState, useContext } from "react";
import AppContext from "@/components/AppContext";

const RobotoSlab = Roboto_Slab({ subsets: ["latin"] });

export default function Home() {
  const context = useContext(AppContext);
  const words = context.wordsArray;

  const [key, setKey] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setKey(event.key);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [key]);

  // for each item in the words array, set spans with id of letter
  // and set the innerHTML of the span to the letter
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      const letter = document.getElementById(`letter${i}${j}`);
      if (letter) {
        letter.innerHTML = words[i][j];
      }
    }
  }

  return (
    <>
      <Head>
        <title>Wordle</title>
        <meta name="description" content="A fun word-guessing game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        // use Roboto
        className={RobotoSlab.className}
      >
        <h1>Wordle</h1>
        <div className="gameContainer">
          <div className="game">
            <div className="gameRow" id="1">
              <div className="rowItem">
                <span className="letter"></span>
              </div>
              <div className="rowItem">
                <span className="letter"></span>
              </div>

              <div className="rowItem">
                <span className="letter"></span>
              </div>
              <div className="rowItem">
                <span className="letter"></span>
              </div>
              <div className="rowItem">
                <span className="letter"></span>
              </div>
            </div>
            <div className="gameRow" id="2">
              <div className="rowItem">
                <span className="letter"></span>
              </div>
              <div className="rowItem">
                <span className="letter"></span>
              </div>

              <div className="rowItem">
                <span className="letter"></span>
              </div>
              <div className="rowItem">
                <span className="letter"></span>
              </div>
              <div className="rowItem">
                <span className="letter"></span>
              </div>
            </div>
            <div className="gameRow" id="3">
              <div className="rowItem">
                <span className="letter"></span>
              </div>
              <div className="rowItem">
                <span className="letter"></span>
              </div>

              <div className="rowItem">
                <span className="letter"></span>
              </div>
              <div className="rowItem">
                <span className="letter"></span>
              </div>
              <div className="rowItem">
                <span className="letter"></span>
              </div>
            </div>
            <div className="gameRow" id="4">
              <div className="rowItem">
                <span className="letter"></span>
              </div>
              <div className="rowItem">
                <span className="letter"></span>
              </div>

              <div className="rowItem">
                <span className="letter"></span>
              </div>
              <div className="rowItem">
                <span className="letter"></span>
              </div>
              <div className="rowItem">
                <span className="letter"></span>
              </div>
            </div>
            <div className="gameRow" id="5">
              <div className="rowItem">
                <span className="letter"></span>
              </div>
              <div className="rowItem">
                <span className="letter"></span>
              </div>

              <div className="rowItem">
                <span className="letter"></span>
              </div>
              <div className="rowItem">
                <span className="letter"></span>
              </div>
              <div className="rowItem">
                <span className="letter"></span>
              </div>
            </div>
            <div className="gameRow" id="6">
              <div className="rowItem">
                <span className="letter"></span>
              </div>
              <div className="rowItem">
                <span className="letter"></span>
              </div>

              <div className="rowItem">
                <span className="letter"></span>
              </div>
              <div className="rowItem">
                <span className="letter"></span>
              </div>
              <div className="rowItem">
                <span className="letter"></span>
              </div>
            </div>
          </div>
        </div>
        <Keyboard />
      </div>
    </>
  );
}
