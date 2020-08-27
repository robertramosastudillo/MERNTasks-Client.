import React from "react";
import Proyectos from "./Proyectos";
import Proyecto from "./Proyecto";

const ListadoProyectos = () => {
  const proyectos = [
    { nombre: "Tienda Virtual" },
    { nombre: "Intranet" },
    { nombre: "Diseño de Sitio web" },
  ];

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;
