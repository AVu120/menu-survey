import { useParams } from "react-router";
import { IItemGroup } from "../../types/restaurant";
import ItemGroup from "../../components/menu/itemGroup/ItemGroup";
import { restaurantData } from "../../utils/mockData/restaurants";
import { createContext } from "react";
import NavBar from "../../components/menu/navbar/NavBar";

export const RestaurantContext = createContext("restaurant1");

const Menu = () => {
  const { restaurant }: { restaurant: string } = useParams();

  return (
    <RestaurantContext.Provider
      value={restaurantData[restaurant] ? restaurant : "restaurant1"}
    >
      <NavBar />
      <div>
        {(restaurantData[restaurant] || restaurantData["restaurant1"]).map(
          ({ title, items }: IItemGroup) => (
            <ItemGroup {...{ title, items }} />
          )
        )}
      </div>
    </RestaurantContext.Provider>
  );
};

export default Menu;
