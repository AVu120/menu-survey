import SearchIcon from "mdi-react/MagnifyIcon";
import { ChangeEventHandler } from "react";
import { IItemGroup } from "../../../../types/restaurant";
import Tabs from "../tabs/Tabs";
import styles from "./SearchBar.module.scss";
interface ISearchBarProps {
  isSearching: boolean;
  setIsSearching: Function;
  changeSearchQuery: ChangeEventHandler<HTMLInputElement>;
  searchQuery: string;
  restaurantData: IItemGroup[];
  handleTabClick: (index: number) => void;
}
const SearchBar = ({
  isSearching,
  setIsSearching,
  changeSearchQuery,
  searchQuery,
  handleTabClick,
  restaurantData,
}: ISearchBarProps) => {
  return (
    <div className={styles.searchContainer}>
      <SearchIcon
        className={styles.searchIcon}
        onClick={() => !isSearching && setIsSearching(true)}
      />
      {isSearching ? (
        <input
          placeholder="Search menu"
          onChange={changeSearchQuery}
          value={searchQuery}
          className={styles.searchInput}
        />
      ) : (
        <Tabs {...{ handleTabClick, restaurantData }} />
      )}
    </div>
  );
};

export default SearchBar;
