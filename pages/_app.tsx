import { useState, createContext } from "react";
import AppContext from "@/components/AppContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const [wordsArray, setWordsArray] = useState<string[]>([
    "broom",
    "irate",
    "sleet",
    "bound",
    "screw",
    "wreck",
  ]);
  const [currentWord, setCurrentWord] = useState<number>(0);

  return (
    <AppContext.Provider
      value={{ wordsArray, setWordsArray, currentWord, setCurrentWord }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
