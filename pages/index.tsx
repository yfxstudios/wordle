import Head from 'next/head'

import { Roboto_Slab} from "next/font/google";

const RobotoSlab = Roboto_Slab({ subsets: ['latin'] })



export default function Home() {
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
                <div className="rowItem"></div>
                <div className="rowItem"></div>
                <div className="rowItem"></div>
                <div className="rowItem"></div>
                <div className="rowItem"></div>
              </div>
          <div className="gameRow" id="2">
                <div className="rowItem"></div>
                <div className="rowItem"></div>
                <div className="rowItem"></div>
                <div className="rowItem"></div>
                <div className="rowItem"></div>
              </div>
          <div className="gameRow" id="3">
                <div className="rowItem"></div>
                <div className="rowItem"></div>
                <div className="rowItem"></div>
                <div className="rowItem"></div>
                <div className="rowItem"></div>
              </div>
          <div className="gameRow" id="4">
                <div className="rowItem"></div>
                <div className="rowItem"></div>
                <div className="rowItem"></div>
                <div className="rowItem"></div>
                <div className="rowItem"></div>
              </div>
          <div className="gameRow" id="5">
                <div className="rowItem"></div>
                <div className="rowItem"></div>
                <div className="rowItem"></div>
                <div className="rowItem"></div>
                <div className="rowItem"></div>
              </div>
          <div className="gameRow" id="6">
                <div className="rowItem"></div>
                <div className="rowItem"></div>
                <div className="rowItem"></div>
                <div className="rowItem"></div>
                <div className="rowItem"></div>
              </div>
        </div>
      </div>
    </div>
   </>
  )
}
