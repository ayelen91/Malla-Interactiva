function mostrarInfo(curso) {
  const info = document.getElementById("info");
  let contenido = "";

  switch(curso) {
    case "Diseño I":
      contenido = `<h3>Diseño I</h3>
      <p>Introducción al pensamiento proyectual. Se exploran fundamentos del diseño visual.</p>
      <a href="https://example.com/diseno1.pdf" target="_blank">📄 Ver programa</a>`;
      break;

    case "Historia del Arte":
      contenido = `<h3>Historia del Arte</h3>
      <p>Recorrido histórico de los principales movimientos artísticos hasta el siglo XX.</p>
      <a href="https://example.com/historia.pdf" target="_blank">📄 Ver programa</a>`;
      break;

    case "Taller Tipográfico":
      contenido = `<h3>Taller Tipográfico</h3>
      <p>Uso de la tipografía como elemento visual y expresivo.</p>
      <a href="https://example.com/tipografia.pdf" target="_blank">📄 Ver programa</a>`;
      break;

    case "Diseño II":
      contenido = `<h3>Diseño II</h3>
      <p>Profundización en procesos de diseño gráfico aplicado a marcas y productos.</p>`;
      break;

    case "Fotografía Digital":
      contenido = `<h3>Fotografía Digital</h3>
      <p>Técnicas básicas de composición, luz y edición en fotografía.</p>`;
      break;

    default:
      contenido = `<h3>Curso no encontrado</h3>`;
  }

  info.innerHTML = contenido;
  info.style.display = "block";
}
