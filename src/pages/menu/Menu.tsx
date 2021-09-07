import { ChangeEvent, createContext, useState } from "react";
import { useParams } from "react-router";
import ItemGroupList from "../../components/menu/itemGroupList/ItemGroupList";
import NavBar from "../../components/menu/navbar/NavBar";
import { restaurantData } from "../../data/mockData/restaurants";

export const RestaurantContext = createContext("restaurant1");

const Menu = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { restaurant }: { restaurant: string } = useParams();

  const changeSearchQuery = (e: ChangeEvent<HTMLInputElement>): void =>
    setSearchQuery(e.target.value);

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
        }}
      />
      <ItemGroupList {...{ restaurantData, restaurant, searchQuery }} />
    </RestaurantContext.Provider>
  );
};

export default Menu;
