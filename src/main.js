import "./styles/main.pcss" 
import "./scripts/skills" 
import "./scripts/reviewsSlaider" 
import "./scripts/parallax" 
import "./scripts/slider" 



if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}




