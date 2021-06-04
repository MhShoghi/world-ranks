import SearchRounded from "@material-ui/icons/SearchRounded";
import styles from "./SearchInput.module.css";

function SearchInput({ onChange, ...rest }) {
  return (
    <div className={styles.wrapper}>
      <SearchRounded />
      <input
        {...rest}
        type="text"
        className={styles.input}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchInput;
