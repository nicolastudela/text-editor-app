import React, { useState, useEffect } from "react";
import { css } from "emotion";
import ControlPanel from "./control-panel/ControlPanel";
import Word from "./Word";

const paragraphClass = css({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row"
});

const Editor = ({ initialText }) => {
  const [selectedWord, setSelectedWord] = useState(null);
  const [words, setWords] = useState([]);

  useEffect(() => {
    setWords(
      initialText
        ? initialText.split(" ").reduce(
            (prev, text, idx) => ({
              ...prev,
              ...{
                [idx]: {
                  id: idx,
                  text,
                  bold: false,
                  italic: false,
                  underline: false
                }
              }
            }),
            {}
          )
        : []
    );
  }, [initialText]);
  const onChangeWord = changedWord => {
    setSelectedWord(changedWord);
    setWords({ ...words, ...{ [changedWord.id]: changedWord } });
  };

  const onClose = () => {
    setSelectedWord(null);
  };

  const onWordSelect = id => {
    setSelectedWord(words[id]);
  };

  return (
    <>
      <ControlPanel
        selectedWord={selectedWord}
        onChangeWord={onChangeWord}
        onClose={onClose}
      />
      {!selectedWord && <h2>Click on the word you want to manipulate</h2>}
      <div className={paragraphClass}>
        {[...Object.values(words)].map(word => (
          <Word
            // eslint-disable-next-line react/no-array-index-key
            key={word.id}
            isSelected={selectedWord ? selectedWord.id === word.id : null}
            word={word}
            onWordSelect={onWordSelect}
          />
        ))}
      </div>
    </>
  );
};

export default Editor;
