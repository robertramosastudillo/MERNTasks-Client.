import React from "react";

const FormTarea = () => {
  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            name="nombre"
            className="input-text"
            placeholder="Nombre Tarea"
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            value="Agregar Tarea"
            className="btn btn-block btn-submit btn-primario"
          />
        </div>
      </form>
    </div>
  );
};

export default FormTarea;
