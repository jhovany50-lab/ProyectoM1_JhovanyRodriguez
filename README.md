## Generador de Paletas de Colores

Aplicación web interactiva que permite generar paletas de colores dinámicas utilizando el modelo HSL y mostrando el formato seleccionado (HSL o HEX).

Incluye microfeedback visual mediante tooltip dinámico y efecto de sombra activa en la selección de formato para mejorar la experiencia del usuario.



## Demo en línea

🔗 https://jhovany50-lab.github.io/ProyectoM1_JhovanyRodriguez/



## Instrucciones de uso de la APP

Abrir la aplicación en el navegador.

Seleccionar el tamaño de la paleta (6, 8 o 9 colores).

Elegir el formato de visualización (HSL o HEX).

Hacer clic en el botón “Generar Paleta”.

Para copiar un color, hacer clic sobre la tarjeta deseada.

El tooltip mostrará el mensaje “¡Copiado!” como confirmación visual.



## Decisiones técnicas (Manual Técnico)

1️⃣ Modelo de color base

Se utilizó el modelo HSL como base para la generación de colores debido a:

Mayor control sobre el tono (Hue).

Manipulación directa de luminosidad.

Facilidad para generar variaciones armónicas.

Mejor integración con sistemas dinámicos de diseño.


2️⃣ Selección de formato (HSL / HEX)

Aunque el color se genera en HSL, el usuario puede visualizarlo también en formato HEX.

Para mejorar la experiencia de usuario:

Se implementó una sombra activa (box-shadow) al seleccionar el formato.

Esto permite identificar visualmente la opción elegida.

No se utilizan librerías externas para esta funcionalidad.


3️⃣ Manipulación del DOM

Se utilizaron métodos nativos de JavaScript:

document.createElement()

classList.add()

appendChild()

addEventListener()

Esto permite mantener el proyecto en JavaScript Vanilla, sin dependencias externas.


4️⃣ Limpieza dinámica del contenedor

Antes de generar una nueva paleta se ejecuta:

palette.innerHTML = "";

Esto evita acumulación de nodos en el DOM y mejora el rendimiento.


5️⃣ Diseño Responsive

Se utilizó CSS Grid con:

grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));

Esto permite que la aplicación se adapte automáticamente a distintos tamaños de pantalla sin usar media queries.


6️⃣ Microfeedback UX

El mensaje dinámico “¡Copiado!” se implementó mediante un tooltip interno en cada tarjeta.

Además, la selección del formato incluye un efecto visual de sombra para reforzar la interacción del usuario.



## Pasos para descargar y ejecutar la aplicación en local

1️⃣ Clonar el repositorio
git clone https://github.com/jhovany50-lab/ProyectoM1_JhovanyRodriguez.git

2️⃣ Acceder a la carpeta del proyecto
cd ProyectoM1_JhovanyRodriguez

3️⃣ Ejecutar la aplicación

Abrir el archivo index.html en cualquier navegador moderno.

No requiere instalación de dependencias adicionales.



## Pasos para desplegar la aplicación

Opción: GitHub Pages

Subir el proyecto a un repositorio en GitHub.

Ir a Settings del repositorio.

Seleccionar la sección Pages.

En "Source", elegir la rama main.

Guardar los cambios.

GitHub generará automáticamente una URL pública.

El despliegue no requiere configuración adicional ya que es un proyecto estático.



## Tecnologías utilizadas

HTML5 (estructura semántica)

CSS3 (Flexbox, Grid, box-shadow)

JavaScript Vanilla (DOM y eventos)

Git

GitHub

GitHub Pages



## Autor

Jhovany Rodríguez de la Rosa
Proyecto Integrador M1 – Desarrollo Web - Paleta de Colores