import React from "react";
import { css } from "emotion";

const Word = ({ word, isSelected, onWordSelect }) => {
  const styles = [
    {
      margin: "2px"
    },
    word.bold && {
      fontWeight: "bold"
    },
    word.italic && {
      fontStyle: "italic"
    },
    word.underline && {
      textDecoration: "underline"
    },
    isSelected && {
      backgroundColor: "lightgray"
    }
  ];

  return (
    <span
      role="button"
      tabIndex={0}
      onMouseUp={() => onWordSelect(word.id)}
      className={css(styles)}
    >
      {word.text}
    </span>
  );
};

export default Word;
