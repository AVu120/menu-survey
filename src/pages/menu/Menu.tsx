import { ChangeEvent, createContext, useState, useRef } from "react";
import { useScroll } from "react-use-gesture";
import { useSpring } from "react-spring";
import { useParams } from "react-router";
import ItemGroupList from "../../components/menu/itemGroupList/ItemGroupList";
import NavBar from "../../components/menu/navbar/NavBar";
import { restaurantData } from "../../data/mockData/restaurants";
import { IItemGroup } from "../../types/restaurant";

export const RestaurantContext = createContext("restaurant1");

const Menu = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { restaurant }: { restaurant: string } = useParams();
  const menu = restaurantData[restaurant] || restaurantData["restaurant1"];
  const tabScrollAnchors = useRef(menu.map((_: IItemGroup) => 0));

  const [{ activeTabIndex }, setActiveTabIndex] = useSpring(() => ({
    activeTabIndex: 0,
  }));

  const bind = useScroll(({ xy }) => {
    setActiveTabIndex({
      activeTabIndex: tabScrollAnchors.current.reduce(
        (acc: number, curr: number, i: number): number =>
          xy[1] + 50 >= curr ? i : acc,
        0
      ),
    });
  });

  const contentContainer = useRef<any>(null);
  const handleTabClick = (i: number): void => {
    if (contentContainer.current) {
      contentContainer.current.scrollTo({
        top: tabScrollAnchors.current[i] - 40,
      });
    }
  };

  const changeSearchQuery = (e: ChangeEvent<HTMLInputElement>): void =>
    setSearchQuery(e.target.value);

  const handleSectionLayout = (index: number, offset: any): any => {
    tabScrollAnchors.current[index] = offset.top;
  };

  return (
    <RestaurantContext.Provider
      value={restaurantData[restaurant] ? restaurant : "restaurant1"}
    >
      <NavBar
        {...{
          isSearching,
          setIsSearching,
          searchQuery,
          changeSearchQuery,
          setSearchQuery,
          activeTabIndex,
          handleTabClick,
        }}
        restaurantData={menu}
      />
      <div
        {...bind()}
        ref={contentContainer}
        style={{ height: "100%", overflowY: "auto" }}
      >
        <ItemGroupList
          {...{ restaurant, searchQuery, handleSectionLayout }}
          restaurantData={menu}
        />
      </div>
    </RestaurantContext.Provider>
  );
};

export default Menu;
