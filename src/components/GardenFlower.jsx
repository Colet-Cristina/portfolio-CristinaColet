/* --- GARDEN-FLOWER --- */
/* Diseño inspirado en el Lotus Flower SVG de CodePen Matt Farmer
 * Enlace original: https://codepen.io/mrfarmer777/pen/RaEeBb
 * Adaptado para React y animaciones dinámicas.
 */

function GardenFlower({ isCenter }) {
  return (
    <div className={`flower-container ${isCenter ? "is-active" : ""}`}>
      <span className="flower-stem"></span>
      <span className="flower-leaf leaf-left"></span>
      <span className="flower-leaf leaf-right"></span>

      {/* Anatomía del Loto (SVG para precisión geométrica) */}
      <svg className="lotus-flower" viewBox="0 0 400 230">
        <defs>
          <radialGradient
            r="0.5"
            cy="0.5"
            cx="0.5"
            spreadMethod="pad"
            id="svg_9"
          ></radialGradient>
        </defs>
        <g>
          {/* Pétalos: Organizados por capas para permitir animaciones escalonadas
           * Pétalo central */}
          <path
            id="center"
            className="petal-center"
            d="m200.2,20.5c-6.6,-0.7-36.3,39.5-36,78.2c0.3,38.7 26.3,76.7 38,76.7c11.6,0 30.3,-31.6 31,-74.3c0.6,-42.7-26.3,-79.8-33,-80.6z"
          />
          {/* Capas laterales (Izquierda/Derecha) */}
          <path
            id="l1"
            className="petal-l"
            d="m143.5,26c-6.5,1.6-17.4,51.6-1.3,89.3c16.1,37.6 55.8,65.3 66.6,61.1c10.8,-4.2 15.1,-41.7-1.7,-83.6c-16.8,-41.8-57.1,-68.4-63.6,-66.7z"
          />

          <path
            id="r1"
            className="petal-r"
            d="m258.4,26.2c-5.8,-3.1-49.8,24.9-65.4,62.1c-15.5,37.1-7,82.6 3.8,86.7c10.8,4.1 41,-19.5 59.1,-60.1c18.1,-40.6 8.3,-85.7 2.4,-88.8z"
          />
          <path
            id="l2"
            className="petal-l"
            d="m96.2,52.3c-5.3,4 3.9,56.3 33.5,86.5c29.6,30.2 77.2,42 85.6,33.9c8.3,-8.1-2.2,-45.9-34.1,-80c-31.9,-34-79.6,-44.5-85,-40.5z"
          />
          <path
            id="r2"
            className="petal-r"
            d="m303.6,51.7c-4.1,-5.2-56.1,5.8-85.3,36.5c-29.1,30.7-39.3,78.6-30.9,86.7c8.3,8.1 45.8,-3.8 78.7,-36.9c32.9,-33.1 41.7,-81.1 37.5,-86.3z"
          />
          <path
            id="l3"
            className="petal-l"
            d="m58.8,99.1c-3.5,5.7 24.7,50.7 63.5,67.7c38.8,16.9 87.3,10 92,-0.5c4.7,-10.6-19.2,-41.7-61.6,-61.3c-42.3,-19.6-90.5,-11.4-94,-5.7z"
          />

          <path
            id="r3"
            className="petal-r"
            d="m336.2,98.7c-1.9,-6.4-54.2,-15.6-92.8,1.9c-38.5,17.5-65.9,58.1-61.1,68.8c4.7,10.6 43.9,13.6 86.8,-4.7c42.9,-18.3 69,-59.5 67.1,-66z"
          />
        </g>
      </svg>
    </div>
  );
}

export default GardenFlower;
