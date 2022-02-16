import { createContext, useState } from "react";

export const WordsContext = createContext();

const WordsContextProvider = (props) => {
  const text =
    "const import export let function class return if else props child length map filter true false null constructor this pop require";
  const otherText =
    "array children parent round ceiling floor setTimeout prototype string int var float object new slice splice push shift substring replace toUpperCase toLowerCase trim indexOf lastIndexOf includes require json Date";
  const textArray = text.split("");
  let textObjectsArray = textArray.map((letter) => {
    return { letter: letter, color: "text-secondary" };
  });
  const [wordsColor, setWordsColor] = useState(textObjectsArray);

  const updateColor = (color, indexMain) => {
    setWordsColor(
      wordsColor.filter((word, index) => {
        if (indexMain === index) {
          word.color = color;
        }
        return word;
      })
    );
  };

  return (
    <WordsContext.Provider
      value={{ wordsColor, updateColor, setWordsColor, textObjectsArray }}
    >
      {props.children}
    </WordsContext.Provider>
  );
};

export default WordsContextProvider;
