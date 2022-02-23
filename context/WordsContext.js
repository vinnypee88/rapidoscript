import { createContext, useState } from "react";

export const WordsContext = createContext();

const WordsContextProvider = (props) => {
  const text =
    "const import export console.log let function class return if else props child length map filter true false null constructor this pop require push";
  // const otherText =
  //   "array children parent round ceiling floor setTimeout prototype string int var float object new slice splice push shift substring replace toUpperCase toLowerCase trim indexOf lastIndexOf includes require json Date";
  const charArray = text.split("");
  let charsObjectsArray = charArray.map((letter) => {
    return { letter: letter, color: "bg-none" };
    2;
  });
  const [charsColor, setCharsColor] = useState(charsObjectsArray);

  const updateColor = (color, indexMain) => {
    setCharsColor(
      charsColor.filter((letter, index) => {
        if (indexMain === index) {
          letter.color = color;
        }
        return letter;
      })
    );
  };

  return (
    <WordsContext.Provider
      value={{ charsColor, updateColor, setCharsColor, charsObjectsArray }}
    >
      {props.children}
    </WordsContext.Provider>
  );
};

export default WordsContextProvider;
