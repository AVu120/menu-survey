import SearchIcon from "mdi-react/MagnifyIcon";
import styles from "./SearchBar.module.scss";
import { ChangeEventHandler } from "react";

interface ISearchBarProps {
  isSearching: boolean;
  setIsSearching: Function;
  changeSearchQuery: ChangeEventHandler<HTMLInputElement>;
  searchQuery: string;
}
const SearchBar = ({
  isSearching,
  setIsSearching,
  changeSearchQuery,
  searchQuery,
}: ISearchBarProps) => {
  return (
    <div className={styles.searchContainer}>
      <SearchIcon
        className={styles.searchIcon}
        onClick={() => !isSearching && setIsSearching(true)}
      />
      {isSearching && (
        <input
          placeholder="Search menu"
          onChange={changeSearchQuery}
          value={searchQuery}
          className={styles.searchInput}
        />
      )}
    </div>
  );
};

export default SearchBar;
