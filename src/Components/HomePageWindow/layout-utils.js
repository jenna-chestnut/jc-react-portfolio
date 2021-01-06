export const CIRCLE_RADIUS = 40;
export const svgCanvas = {
  width: window.innerWidth * 0.8,
  height: 200,
  margin: CIRCLE_RADIUS
};
export const left = {
  cx: svgCanvas.margin,
  cy: svgCanvas.height / 2
};
export const right = {
  cx: svgCanvas.width - svgCanvas.margin,
  cy: svgCanvas.height / 2
};