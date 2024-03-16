import { useSelector, useDispatch } from "react-redux";
import { changeFilter, getValueFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

function SearchBox() {
  const dispatch = useDispatch();

  const selectNameFilter = useSelector(getValueFilter);

  return (
    <div className={css.searchContainer}>
      <label className={css.label} htmlFor="search">
        Find contacts by name
      </label>
      <input
        className={css.input}
        id="search"
        type="text"
        value={selectNameFilter}
        onChange={(event) => dispatch(changeFilter(event.target.value))}
      />
    </div>
  );
}

export default SearchBox;
