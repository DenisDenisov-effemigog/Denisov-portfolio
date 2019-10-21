import "./styles/main.pcss" 
import "./scripts/skills" 
import "./scripts/reviewsSlaider" 
import "./scripts/parallax" 


if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}




