// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando con una flor amarilla", time: 17 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 24 },
  { text: "Y el amarillo del Sol iluminaba la esquina", time: 33 },
  { text: "Lo sentía tan cercano, lo sentía desde niña", time: 40 },
  { text: "Ella sabía que él sabía", time: 44 },
  { text: "Que algún día pasaría", time: 47 },
  { text: "Que vendría a buscarla con sus flores amarillas", time: 51 },
  { text: "No te apures, no detengas el instante del encuentro", time: 60 },
  { text: "Está dicho que es un hecho, no la pierdas, no hay derecho", time: 63 },
  { text: "No te olvides que la vida casi nunca está dormida", time: 70 },
  { text: "En ese bar tan desierto nos esperaba el encuentro", time: 94 },
  { text: "Ella llegó en limusina amarilla por supuesto", time: 101 },
  { text: "Él se acercó de repente y la miró tan de frente", time: 108 },
  { text: "Toda una vida soñada y no pudo decir nada", time: 116 },
  { text: "Ella sabía que él sabía", time: 124 },
  { text: "Que algún día pasaría", time: 129 },
  { text: "Que vendría a buscarla con sus flores amarillas", time: 133 },
  { text: "No te apures, no detengas el instante del encuentro", time: 140 },
  { text: "Está dicho que es un hecho, no la pierdas, no hay derecho", time: 146 },
  { text: "No te olvides que la vida casi nunca está dormida", time: 152 },
  { text: "Flores amarillas", time: 168 },
  { text: "Ella sabía que él sabía", time: 175 },
  { text: "Que algún día pasaría", time: 180 },
  { text: "Que vendría a buscarla con sus flores amarillas", time: 185 },
  { text: "No te apures, no detengas el instante del encuentro", time: 191 },
  { text: "Está dicho que es un hecho, no la pierdas, no hay derecho", time: 196 },
  { text: "No te olvides que la vida casi nunca está dormida", time: 202 },
  { text: "Él sabía, ella sabía", time: 218 },
  { text: "Él sabía, ella sabía", time: 224 },
  { text: "Y se olvidaron de sus flores amarillas", time: 230 },
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);