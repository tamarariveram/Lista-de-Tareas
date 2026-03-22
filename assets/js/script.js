const tareas = [
  { id: 1, descripcion: "Hacer mercado", completado: false },
  { id: 2, descripcion: "Lavar la ropa", completado: false },
  { id: 3, descripcion: "Pagar las cuentas", completado: false },
  { id: 4, descripcion: "Limpiar la casa", completado: false },
  { id: 5, descripcion: "Hacer ejercicio", completado: false },
];

const listaTareas = document.getElementById("lista-tareas");
const inputTarea = document.getElementById("nueva-tarea");
const botonAgregar = document.getElementById("agregar-tarea");

const renderTareas = () => {
  const spanTareas = document.getElementById("cantidad-tareas");
  spanTareas.innerHTML = tareas.length;

  const spanTareasCompletadas = document.getElementById("cantidad-completadas");
  const tareasCompletadas = tareas.filter((tarea) => tarea.completado);
  spanTareasCompletadas.innerHTML = tareasCompletadas.length;

  let template = "";
  for (let tarea of tareas) {
    template += `
        <li style="text-decoration: ${tarea.completado ? "line-through" : "none"};">
            ${tarea.descripcion}
            <button onclick="completarTarea(${tarea.id})" >${tarea.completado ? "↩️ Deshacer" : "✅ Completar"}</button>
            <button onclick="borrarTarea(${tarea.id})">❌ Borrar</button>
        </li>`;
  }

  listaTareas.innerHTML = template;
};
renderTareas();

botonAgregar.addEventListener("click", () => {
  let nuevaTarea = {
    id: tareas.length + 1,
    descripcion: inputTarea.value,
    completado: false,
  };
  tareas.push(nuevaTarea);
  renderTareas();
  inputTarea.value = "";
});

const borrarTarea = (id) => {
  const indiceTareaEliminar = tareas.findIndex((tarea) => tarea.id === id);
  tareas.splice(indiceTareaEliminar, 1);
  renderTareas();
};

const completarTarea = (id) => {
  const tarea = tareas.find((tarea) => tarea.id === id);
  tarea.completado = !tarea.completado;
  renderTareas();
};
