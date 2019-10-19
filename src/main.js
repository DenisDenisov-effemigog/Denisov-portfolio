import "./styles/main.pcss" 
import "./scripts/skills" 
import "./scripts/reviewsSlaider" 


if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}




