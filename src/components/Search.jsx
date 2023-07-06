import React from "react";

const Search = ({ onUrlChane, url }) => {
  return (
    <>
      <input
        type="text"
        className="wide-input"
        name=""
        id=""
        placeholder="Place your links here"
        value={url}
        onChange={onUrlChane}
      />
    </>
  );
};

export default Search;
