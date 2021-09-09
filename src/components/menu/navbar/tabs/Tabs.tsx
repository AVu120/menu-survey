import { useState } from "react";
import { animated, SpringValue } from "react-spring";
import Tab from "./tab/Tab";
import memoize from "fast-memoize";
import styles from "./Tabs.module.scss";
import { IItemGroup } from "../../../../types/restaurant";

/**
 * @description Calculate how much to move the tabs to the left for each tab.
 * @param tabWidths tab widths
 */
const getCumulativeTabWidths = memoize((tabWidths) => {
  return tabWidths.map((_: number, i: number): number =>
    tabWidths.reduce(
      (acc: number, curr: number, j: number): number =>
        j < i ? acc + curr : acc,
      0
    )
  );
});

interface ITabsProps {
  activeTabIndex: SpringValue<number>;
  handleTabClick: Function;
  restaurantData: IItemGroup[];
}

const Tabs = ({
  activeTabIndex,
  handleTabClick,
  restaurantData,
}: ITabsProps) => {
  const indexArray = restaurantData.map((_: IItemGroup, i: number) => i);
  const [tabWidths, setTabWidths] = useState(() =>
    restaurantData.map((_: IItemGroup) => 0)
  );

  /* Calculates how much to move all the tabs to the left based on the active
  tab index (which item group title last scrolled out of the view port.) */
  const transformStyle: any = {
    transform: activeTabIndex
      .to({
        range: indexArray,
        output: getCumulativeTabWidths(tabWidths),
      })
      .to((translate: any) => `translateX(${-translate}px)`),
  };

  /**
   * @description Calculate initial tab widths
   * @param index Index of tab
   * @param bounds Dimensions of tab calculated by react-measure
   */
  const calculateTabWidths = (
    index: number,
    bounds: { height: number; width: number }
  ) => {
    setTabWidths((currentTabWidths) =>
      currentTabWidths.map((curr: number, i: number): number =>
        i === index ? bounds.width : curr
      )
    );
  };

  return (
    <animated.div className={styles.Tabs} style={transformStyle}>
      {restaurantData.map(({ title }: { title: string }, i) => (
        <Tab
          key={title}
          index={i}
          onBoundsChange={calculateTabWidths}
          onClick={handleTabClick}
        >
          {title}
        </Tab>
      ))}
    </animated.div>
  );
};

export default Tabs;
