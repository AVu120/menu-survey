import { ReactChild } from "react";
import { withContentRect } from "react-measure";

// Component that is single argument to react-measure HOC.
const MeasuringTab = ({ measureRef, measure, contentRect, ...props }: any) => (
  <div ref={measureRef} {...props} />
);

// MeasurableTab (react-measure) component with onResize attribute which is a
// on-mount handler that produces the on-mount dimensions aka bounds.
const MeasurableTab = withContentRect("bounds")(MeasuringTab);

interface IBounds {
  top: number;
  right: number;
  bottom: number;
  left: number;
  width: number;
  height: number;
}

interface IHandleResizeParams {
  bounds: IBounds;
}

interface ITabProps {
  onBoundsChange: Function;
  index: number;
  onClick: Function;
  children: ReactChild;
}
const Tab = ({ onBoundsChange, index, onClick, ...props }: ITabProps) => {
  /**
   * @description Measures dimensions of component on mount.
   * @param bounds Dimensions of components on mount.
   */
  const handleResize = ({ bounds }: IHandleResizeParams) => {
    if (bounds) {
      onBoundsChange(index, bounds);
    }
  };

  return (
    <MeasurableTab
      onResize={handleResize}
      onClick={() => onClick(index)}
      {...props}
    />
  );
};

export default Tab;
