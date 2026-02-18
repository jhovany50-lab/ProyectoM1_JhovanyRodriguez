const generateBtn = document.getElementById("generateBtn");
const palette = document.getElementById("palette");
const sizeSelect = document.getElementById("size");
const formatSelect = document.getElementById("format");

// ==========================
// GENERAR HEX
// ==========================
function generateRandomHEX() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

// ==========================
// GENERAR HSL
// ==========================
function generateRandomHSL() {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 100);
  const l = Math.floor(Math.random() * 100);

  return `hsl(${h}, ${s}%, ${l}%)`;
}

// ==========================
// GENERAR RGBA
// ==========================
function generateRandomRGBA() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = Math.random().toFixed(2);

  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

// ==========================
// EVENTO PRINCIPAL
// ==========================
generateBtn.addEventListener("click", () => {

  const size = parseInt(sizeSelect.value);
  const selectedFormat = formatSelect.value;

  palette.innerHTML = "";

  for (let i = 0; i < size; i++) {

    const hslColor = generateRandomHSL();
    let finalColor;

    if (selectedFormat === "hex") {
      finalColor = generateRandomHEX();
    } else {
      finalColor = generateRandomRGBA();
    }

    const colorBox = document.createElement("div");
    colorBox.classList.add("color-box");

    colorBox.style.backgroundColor = hslColor;

    colorBox.innerHTML = `
      <span class="tooltip">Haz clic para copiar</span>
      <p>${hslColor}</p>
      <p>${finalColor}</p>
    `;

    // ==========================
    // TOOLTIP DINÁMICO
    // ==========================
    colorBox.addEventListener("click", () => {

      const tooltip = colorBox.querySelector(".tooltip");

      try {
        navigator.clipboard.writeText(finalColor);
      } catch {
        const tempInput = document.createElement("textarea");
        tempInput.value = finalColor;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
      }

      tooltip.textContent = "¡Copiado!";

      setTimeout(() => {
        tooltip.textContent = "Haz clic para copiar";
      }, 1500);

    });

    palette.appendChild(colorBox);
  }

});