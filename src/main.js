import "./styles/main.pcss";
import "./scripts/skills";
import "./scripts/slider"
import "./scripts/parallax";
import "./scripts/reviewsSlider"


if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}




