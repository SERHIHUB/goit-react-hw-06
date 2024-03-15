import { useState } from "react";
import css from "./SearchBox.module.css";

function SearchBox({ searchValue, onUpdateSearchFilter }) {
  return (
    <div className={css.searchContainer}>
      <label className={css.label} htmlFor="search">
        Find contacts by name
      </label>
      <input
        className={css.input}
        id="search"
        type="text"
        value={searchValue}
        onChange={(event) => onUpdateSearchFilter(event.target.value)}
      />
    </div>
  );
}

export default SearchBox;
