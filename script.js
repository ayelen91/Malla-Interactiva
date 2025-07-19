function mostrarInfo(curso) {
  const info = document.getElementById("info");
  let descripcion = "";
  switch(curso) {
    case "Diseño I":
      descripcion = "Introducción al pensamiento proyectual.";
      break;
    case "Historia del Arte":
      descripcion = "Estudio de movimientos artísticos.";
      break;
    case "Taller Tipográfico":
      descripcion = "Exploración del diseño con tipografías.";
      break;
    default:
      descripcion = "Curso no encontrado.";
  }
  info.innerHTML = `<h3>${curso}</h3><p>${descripcion}</p>`;
  info.style.display = "block";
}
