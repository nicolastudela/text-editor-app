import React, { useEffect, useState } from "react";
import { css } from "emotion";
import { fetchSuggestions } from "../../api";

const synonymsLinkClass = css({
  background: "none",
  color: "blue",
  border: "none",
  cursor: "pointer",
  textDecoration: "underline",
  display: "block"
});

const sinonymsBoxClass = css({
  overflow: "scroll",
  height: "400px"
});

const SinonymsPicker = ({ word, onReplace }) => {
  const [sinonyms, setSinonyms] = useState([]);

  useEffect(() => {
    async function getSynonyms() {
      const fetchedSinonyms = await fetchSuggestions(word);
      setSinonyms(fetchedSinonyms);
    }
    getSynonyms();
  }, [word]);

  return (
    <>
      <h2>Pick sinonyms for {`${word}`}</h2>
      <div className={sinonymsBoxClass}>
        {sinonyms.map(({ word: replacement }) => (
          <button
            className={synonymsLinkClass}
            type="button"
            onClick={() => onReplace(replacement)}
          >
            {replacement}
          </button>
        ))}
      </div>
    </>
  );
};

export default SinonymsPicker;
