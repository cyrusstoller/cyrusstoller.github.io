function generateArt() {
  const blockSize = 100;
  const xBlocks = 24;
  const yBlocks = 15;
  const strokeWidth = 5;

  let res = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1"
    viewbox="0 0 ${xBlocks * blockSize} ${yBlocks * blockSize}">`;

  function addNoise(radius) {
    const rand = Math.floor(Math.random() * Math.floor(2 * radius));
    return rand - Math.floor(radius); 
  }

  function randomFillColor() {
    // 16777215 is equivalent to #FFFFFF 
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  function createCircle(cx, cy, radius, fill){
    const args = `cx="${cx}" cy="${cy}" r="${radius}" fill="${fill}"`;
    const stroke = `stroke="white" stroke-width="${strokeWidth}"`;
    return `<circle ${args} ${stroke} fill-opacity="1" />`;
  }

  for (let i = 0; i < xBlocks; i++) {
    for (let j = 0; j < yBlocks; j++) {
      const radius = blockSize / 2;
      const cx = (i * blockSize) + radius + addNoise(radius / 2);
      const cy = (j * blockSize) + radius + addNoise(radius / 2);
      const fill = randomFillColor();
      res += createCircle(cx, cy, radius, fill);
    }
  }

  res += "</svg>";

  return res;
}

document.addEventListener("DOMContentLoaded", function(event) {
  const el = document.getElementById('generative_art');
  el.innerHTML = generateArt();
});
