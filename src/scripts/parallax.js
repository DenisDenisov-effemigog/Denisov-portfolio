const parallax = document.querySelector(".parallax");
const layers = parallax.children;
const layersToExclude = [0, 4, 6]; // чувак на горе, самые нижние облака
function moveLayersDependsOnScroll(wScroll) {
 Array.from(layers).forEach((layer, layerIndex) => {
   const strafe = wScroll / (-layerIndex * 40) + '%';
console.log(layerIndex)
   
   if (layersToExclude.includes(layerIndex) === false) {
     layer.style.transform = translateY(strafe);
   }

   
 });


}

const windowWidth = document.body.clientWidth;
if (windowWidth > 768) {
 window.addEventListener("scroll", e => {
   const wScroll = window.pageYOffset;
   moveLayersDependsOnScroll(wScroll);
 });
}