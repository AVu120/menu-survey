import { useState, useEffect } from "react";
import { IItemGroup } from "../../../../types/restaurant";
import { IComponentMeasurements } from "../../../../types/common";
import Tab from "./tab/Tab";
import styles from "./Tabs.module.scss";

interface ITabsProps {
  handleTabClick: (index: number) => void;
  restaurantData: IItemGroup[];
}

const Tabs = ({ handleTabClick, restaurantData }: ITabsProps) => {
  const [tabWidths, setTabWidths] = useState(() =>
    restaurantData.map((_: IItemGroup) => 0)
  );
  const [totalTabsWidth, setTotalTabsWidth] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

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
  }, [tabWidths]);

  // Display scrollbar only when total tabs width > screen width.
  useEffect(() => {
    const onResize = () => setScreenWidth(window.innerWidth);

    if (totalTabsWidth) {
      setScreenWidth(window.innerWidth);
      window.addEventListener("resize", onResize);
    }

    return () => window.removeEventListener("resize", onResize);
  }, [totalTabsWidth]);

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
