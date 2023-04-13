import Head from "next/head";
import { Roboto_Slab } from "next/font/google";
import Keyboard from "@/components/Keyboard";
import { useEffect, useRef } from "react";

const RobotoSlab = Roboto_Slab({ subsets: ["latin"] });

export default function Home() {
  // useRef for pointerLocation
  const pointerLocation = useRef(0);
  const pointerRow = useRef(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const letter = document.getElementsByClassName("letter");

      // only allow user to type letters in the 5 letter row until enter is pressed and pointerRow is incremented
      if (pointerRow.current < 6) {
        if (e.key === "Backspace") {
          // if backspace is pressed, move pointerLocation back one and remove the letter
          if (pointerLocation.current > 0) {
            pointerLocation.current--;
            letter[pointerLocation.current].textContent = "";
          }
        } else if (e.key === "Enter") {
          // if enter is pressed, move pointerRow down one and reset pointerLocation
          if (pointerRow.current < 6) {
            pointerRow.current++;
            pointerLocation.current = 0;
          }
        } else {
          // if any other key is pressed, add the letter to the current pointerLocation
          if (pointerLocation.current < 5 && e.key.length === 1) {
            letter[pointerLocation.current].textContent = e.key;
            pointerLocation.current++;
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
        <h1 className="text-4xl text-center font-bold text-gray-800 m-4">
          Wordle
        </h1>
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
