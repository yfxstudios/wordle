import Head from "next/head";
import { Roboto_Slab } from "next/font/google";
import Keyboard from "@/components/Keyboard";
import { useEffect, useState, useRef } from "react";

const RobotoSlab = Roboto_Slab({ subsets: ["latin"] });

export default function Home() {
  const [key, setKey] = useState<string | null>(null);

  // useRef for pointerLocation
  const pointerLocation = useRef(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKey(e.key);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [key]);

  useEffect(() => {
    const letter = document.getElementsByClassName("letter");
    if (key) {
      if (letter[pointerLocation.current] && key.length === 1) {
        letter[pointerLocation.current].textContent = key;
        pointerLocation.current++;
      }
    }

    if (key === "Backspace") {
      if (letter[pointerLocation.current - 1]) {
        letter[pointerLocation.current - 1].textContent = "";
        pointerLocation.current--;
      }
    }
  }, [key, pointerLocation]);

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
