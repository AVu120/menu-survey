import { useState, useEffect, useContext } from "react";
import { IItemGroup } from "../../../../types/restaurant";
import { IComponentMeasurements } from "../../../../types/common";
import Tab from "./tab/Tab";
import styles from "./Tabs.module.scss";
import { MenuContext } from "../../../../pages/menu/Menu";
interface ITabsProps {
  handleTabClick: (index: number) => void;
  restaurantData: IItemGroup[];
}

const Tabs = ({ handleTabClick, restaurantData }: ITabsProps) => {
  const { setTotalTabsWidth, totalTabsWidth, screenWidth } =
    useContext(MenuContext);
  const [tabWidths, setTabWidths] = useState(() =>
    restaurantData.map((_: IItemGroup) => 0)
  );

  /**
   * @description Calculation initial tab widths on mount.
   * @param index
   * @param offset
   */
  const calculateTabWidths = (
    index: number,
    offset: IComponentMeasurements
  ) => {
    setTabWidths((currentTabWidths: number[]): number[] =>
      currentTabWidths.map((curr: number, i: number): number =>
        i === index ? offset.width : curr
      )
    );
  };

  useEffect(() => {
    setTotalTabsWidth(
      tabWidths.reduce((acc: number, curr: number): number => acc + curr, 0)
    );
    // eslint-disable-next-line
  }, [tabWidths]);

  return (
    <div
      className={
        totalTabsWidth > screenWidth
          ? styles.TabsWithScrollbar
          : styles.TabsWithoutScrollbar
      }
    >
      {restaurantData.map(({ title }: { title: string }, i: number) => (
        <Tab
          key={title}
          onClick={handleTabClick}
          index={i}
          handleLayout={calculateTabWidths}
          isShowingScrollbar={totalTabsWidth > screenWidth}
        >
          {title}
        </Tab>
      ))}
    </div>
  );
};

export default Tabs;
