const generateBtn = document.getElementById("generateBtn");
const palette = document.getElementById("palette");
const sizeSelect = document.getElementById("size");
const formatSelect = document.getElementById("format");
const globalTooltip = document.getElementById("globalTooltip");

function generateRandomHEX() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateRandomHSL() {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 100);
  const l = Math.floor(Math.random() * 100);
  return `hsl(${h}, ${s}%, ${l}%)`;
}

function getContrastColor(hslString) {
  const match = hslString.match(/hsl\(\d+,\s*\d+%,\s*(\d+)%\)/);
  if (!match) return "white";
  const lightness = parseInt(match[1]);
  return lightness > 60 ? "black" : "white";
}

function showGlobalTooltip(message) {
  globalTooltip.textContent = message;
  globalTooltip.classList.add("show");
  setTimeout(() => {
    globalTooltip.classList.remove("show");
  }, 1500);
}

generateBtn.addEventListener("click", () => {
  showGlobalTooltip("Paleta generada correctamente");

  const size = parseInt(sizeSelect.value);
  const selectedFormat = formatSelect.value;

  palette.innerHTML = "";

  for (let i = 0; i < size; i++) {
    const hslColor = generateRandomHSL();
    const hexColor = generateRandomHEX();

    const colorBox = document.createElement("div");
    colorBox.classList.add("color-box");

    colorBox.style.backgroundColor = hslColor;
    colorBox.style.color = getContrastColor(hslColor);

    colorBox.innerHTML = `
      <span class="tooltip">Haz clic para copiar</span>
      <p class="${selectedFormat === "hsl" ? "highlight" : ""}">
        ${hslColor}
      </p>
      <p class="${selectedFormat === "hex" ? "highlight" : ""}">
        ${hexColor}
      </p>
    `;

    colorBox.addEventListener("click", () => {
      const currentFormat = formatSelect.value;
      const colorToCopy = currentFormat === "hsl" ? hslColor : hexColor;

      navigator.clipboard.writeText(colorToCopy);

      const tooltip = colorBox.querySelector(".tooltip");
      tooltip.textContent = "¡Copiado!";

      setTimeout(() => {
        tooltip.textContent = "Haz clic para copiar";
      }, 1500);
    });

    palette.appendChild(colorBox);
  }
});

sizeSelect.addEventListener("change", () => {
  sizeSelect.classList.add("active");
  showGlobalTooltip("Tamaño seleccionado correctamente");
});

formatSelect.addEventListener("change", () => {
  formatSelect.classList.add("active");
  showGlobalTooltip("Formato seleccionado correctamente");
});