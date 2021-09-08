import SearchIcon from "mdi-react/MagnifyIcon";
import styles from "./SearchBar.module.scss";
import { ChangeEventHandler } from "react";
import Tabs from "../tabs/Tabs";
import { SpringValue } from "react-spring";
import { IItemGroup } from "../../../../types/restaurant";
interface ISearchBarProps {
  isSearching: boolean;
  setIsSearching: Function;
  changeSearchQuery: ChangeEventHandler<HTMLInputElement>;
  searchQuery: string;
  activeTabIndex: SpringValue<number>;
  restaurantData: IItemGroup[];
  handleTabClick: Function;
}
const SearchBar = ({
  isSearching,
  setIsSearching,
  changeSearchQuery,
  searchQuery,
  activeTabIndex,
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
        <Tabs {...{ activeTabIndex, handleTabClick, restaurantData }} />
      )}
    </div>
  );
};

export default SearchBar;
