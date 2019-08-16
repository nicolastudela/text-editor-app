import React, { useState } from "react";
import { css } from "emotion";
import SinonymsPicker from "./SynonymsPicker";
import Modal from "../Modal";

const controlPanelStyleClass = css({
  backgroundColor: "#fff",
  height: "25px",
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  paddingTop: "5px"
});

const buttonStyle = {
  width: "200px",
  borderRadius: "4px",
  cursor: "pointer",
  color: "black",
  backgroundColor: "gray"
};

const selectedButtonStyle = {
  backgroundColor: "lightgray"
};

const ControlPanel = ({ selectedWord, onChangeWord }) => {
  const [showModal, setShowModal] = useState(false);
  return !selectedWord ? null : (
    <div id="control-panel">
      <div className={controlPanelStyleClass}>
        <button
          onClick={() =>
            onChangeWord({ ...selectedWord, ...{ bold: !selectedWord.bold } })
          }
          className={css([
            buttonStyle,
            selectedWord.bold && selectedButtonStyle
          ])}
          type="button"
        >
          <b>B</b>
        </button>
        <button
          onClick={() =>
            onChangeWord({
              ...selectedWord,
              ...{ italic: !selectedWord.italic }
            })
          }
          className={css([
            buttonStyle,
            selectedWord.italic && selectedButtonStyle
          ])}
          type="button"
        >
          <i>I</i>
        </button>
        <button
          onClick={() =>
            onChangeWord({
              ...selectedWord,
              ...{ underline: !selectedWord.underline }
            })
          }
          className={css([
            buttonStyle,
            selectedWord.underline && selectedButtonStyle
          ])}
          type="button"
        >
          <u>U</u>
        </button>
        <button
          onClick={() => setShowModal(true)}
          className={css(buttonStyle)}
          type="button"
        >
          <u>Check Synomims</u>
        </button>
        {showModal ? (
          <Modal onClose={() => setShowModal(false)}>
            <SinonymsPicker
              word={selectedWord.text}
              onReplace={newWord => {
                onChangeWord({
                  ...selectedWord,
                  ...{ text: newWord }
                });
                setShowModal(false);
              }}
            />
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export default ControlPanel;
