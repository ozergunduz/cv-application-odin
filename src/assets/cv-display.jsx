import LayoutClassic from "./tools/layout-versions/layoutClassic";
import LayoutLeftOriented from "./tools/layout-versions/layoutLeftOriented";
import LayoutClassicWithPhoto from "./tools/layout-versions/layoutClassicWithPhoto";
import LayoutLeftOrientedWithPhoto from "./tools/layout-versions/layoutLeftOrientedWithPhoto";

export default function CvDisplay(props) {
  const layoutName = props.layouts.layoutName;

  let SelectedLayout = LayoutClassic;

  if (layoutName === "leftOriented") {
    SelectedLayout = LayoutLeftOriented;
  }

  if (layoutName === "classicWithPhoto") {
    SelectedLayout = LayoutClassicWithPhoto;
  }

  if (layoutName === "leftOrientedWithPhoto") {
    SelectedLayout = LayoutLeftOrientedWithPhoto;
  }

  return (
    <div className="cv-display">
      
      <SelectedLayout {...props} />
    </div>
  );
}