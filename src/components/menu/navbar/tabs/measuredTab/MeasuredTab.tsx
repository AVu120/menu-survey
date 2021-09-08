import { ReactChild } from "react";
import { withContentRect } from "react-measure";

const MeasuringTab = ({ measureRef, measure, contentRect, ...props }: any) => (
  <div ref={measureRef} {...props} />
);
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

interface IMeasuredTabProps {
  onBoundsChange: Function;
  index: number;
  onClick: Function;
  children: ReactChild;
}
const MeasuredTab = ({
  onBoundsChange,
  index,
  onClick,
  ...props
}: IMeasuredTabProps) => {
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

export default MeasuredTab;
