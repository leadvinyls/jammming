import styles from "./SearchBar.module.css";
import MagnifyingGlass from "../assets/icons/Icons";

function SearchBar() {
    return (
        <div className={styles.SearchBar}>
            <form>
                <label htmlFor="song">
                    <MagnifyingGlass />
                    <input
                        type="text"
                        id="song"
                        name="song"
                        placeholder="Search a song"
                        autoComplete="off"
                    />
                </label>
                <input type="submit" hidden />
            </form>
        </div>
    );
}

export default SearchBar;
