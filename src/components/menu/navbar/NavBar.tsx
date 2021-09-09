import { ChangeEventHandler } from "react";
import { IItemGroup } from "../../../types/restaurant";
import styles from "./NavBar.module.scss";
import NavBarButtons from "./navBarButtons/NavBarButtons";
import SearchBar from "./searchBar/SearchBar";
interface INavBarProps {
  isSearching: boolean;
  setIsSearching: Function;
  searchQuery: string;
  changeSearchQuery: ChangeEventHandler<HTMLInputElement>;
  setSearchQuery: Function;
  handleTabClick: (index: number) => void;
  restaurantData: IItemGroup[];
}
const NavBar = ({
  isSearching,
  setIsSearching,
  searchQuery,
  changeSearchQuery,
  setSearchQuery,
  restaurantData,
  handleTabClick,
}: INavBarProps) => {
  return (
    <div className={isSearching ? styles.NavBar_when_searching : styles.NavBar}>
      <SearchBar
        {...{
          changeSearchQuery,
          isSearching,
          setIsSearching,
          searchQuery,
          restaurantData,
          handleTabClick,
        }}
      />
      {isSearching && (
        <NavBarButtons {...{ searchQuery, setSearchQuery, setIsSearching }} />
      )}
    </div>
  );
};

export default NavBar;
