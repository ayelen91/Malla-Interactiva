const cursos = {
  "Semestre 1": [
    { nombre: "Taller de Representación", tipo: "diseño" },
    { nombre: "Técnicas de Maquetación", tipo: "tecnica" },
    { nombre: "Cultura del Diseño", tipo: "teoria" },
    { nombre: "Dibujo Técnico de Productos", tipo: "tecnica" },
    { nombre: "Habilidades Numéricas", tipo: "teoria" },
    { nombre: "Habilidades Básicas de la Comunicación", tipo: "teoria" }
  ],
  "Semestre 2": [
    { nombre: "Taller de Diseño para la Manufactura", tipo: "diseño" },
    { nombre: "Materiales y Procesos para la Manufactura", tipo: "tecnica" },
    { nombre: "Modelado de Productos 3D", tipo: "tecnica" },
    { nombre: "Habilidades del Lenguaje Matemático", tipo: "teoria" },
    { nombre: "Habilidades de Comunicación Efectiva", tipo: "teoria" },
    { nombre: "Inglés Básico I", tipo: "idioma" },
    { nombre: "Proceso de Portafolio 2", tipo: "portafolio" }
  ],
  "Semestre 3": [
    { nombre: "Taller de Producto Centrado en el Usuario", tipo: "diseño" },
    { nombre: "Prototipado Rápido y Series Cortas", tipo: "tecnica" },
    { nombre: "Representación de Productos", tipo: "tecnica" },
    { nombre: "Inglés Básico II", tipo: "idioma" },
    { nombre: "Proceso de Portafolio 3", tipo: "portafolio" }
  ],
  "Semestre 4": [
    { nombre: "Taller de Producto Centrado en el Entorno", tipo: "diseño" },
    { nombre: "Diseño y Sustentabilidad", tipo: "tecnica" },
    { nombre: "Presentación de Proyecto", tipo: "tecnica" },
    { nombre: "Mentalidad Emprendedora", tipo: "teoria" },
    { nombre: "Inglés Elemental I", tipo: "idioma" },
    { nombre: "Ética para el Trabajo", tipo: "teoria" },
    { nombre: "Optativo de Formación Cristiana", tipo: "teoria" },
    { nombre: "Proceso de Portafolio 4", tipo: "portafolio" }
  ],
  "Semestre 5": [
    { nombre: "Diseño de Servicio", tipo: "diseño" },
    { nombre: "Narrativa de Proyectos", tipo: "teoria" },
    { nombre: "Práctica Laboral", tipo: "portafolio" },
    { nombre: "Inglés Elemental II", tipo: "idioma" },
    { nombre: "Formación Complementaria", tipo: "teoria" },
    { nombre: "Proceso Portafolio 5", tipo: "portafolio" }
  ],
  "Semestre 6": [
    { nombre: "Diseño de Experiencias", tipo: "diseño" },
    { nombre: "Estrategias de Comercialización", tipo: "tecnica" },
    { nombre: "Inglés Intermedio I", tipo: "idioma" },
    { nombre: "Formación Complementaria", tipo: "teoria" },
    { nombre: "Proceso de Portafolio 6", tipo: "portafolio" }
  ],
  "Semestre 7": [
    { nombre: "Proyecto Profesional", tipo: "diseño" },
    { nombre: "Empresa y Diseño", tipo: "tecnica" },
    { nombre: "Communication Skills", tipo: "idioma" },
    { nombre: "Inglés Intermedio II", tipo: "idioma" },
    { nombre: "Ética Profesional", tipo: "teoria" },
    { nombre: "Formación Complementaria", tipo: "teoria" },
    { nombre: "Proceso de Portafolio 7", tipo: "portafolio" }
  ],
  "Semestre 8": [
    { nombre: "Práctica Profesional", tipo: "portafolio" },
    { nombre: "Portafolio de Título", tipo: "portafolio" }
  ]
};

const malla = document.querySelector(".malla");

Object.entries(cursos).forEach(([semestre, materias]) => {
  const columna = document.createElement("div");
  columna.className = "semestre";
  columna.innerHTML = `<h2>${semestre}</h2>`;

  materias.forEach(curso => {
    const div = document.createElement("div");
    div.className = `curso ${curso.tipo}`;
    div.innerText = curso.nombre;
    div.onclick = () => mostrarInfo(curso.nombre, curso.tipo);
    columna.appendChild(div);
  });

  malla.appendChild(columna);
});

function mostrarInfo(nombre, tipo) {
  const info = document.getElementById("info");
  info.innerHTML = `<h3>${nombre}</h3><p>Tipo de curso: ${tipo.toUpperCase()}</p>`;
  info.style.display = "block";
}

