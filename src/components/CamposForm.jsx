import React, { useState } from "react";
import { Form } from "react-router-dom";
import { renderFieldsByStep } from "./Campos";

export const CamposForm = () => {
  const [fields, setFields] = useState({
    nombre: "",
    cedula: "",
    telefono: "",
    email: "",
    ciudad: "",
    barrio: "",
    local: "",
    tipo_via: "",
    via: "",
    numero: "",
    tipo_zona: "",
    tipo_local: "",
    medidas_del_local: {
      alto: "",
      ancho: "",
      fondo: "",
    },
  });

  const [paso, setPaso] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setPaso((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setPaso((prevStep) => prevStep - 1);
  };

  // Función para enviar datos por API o webhook
  const enviarDatos = () => {
    // Aquí debes implementar la lógica para enviar los datos
    console.log("Enviando datos:", fields);
    // Puedes utilizar fetch u otras librerías para realizar la petición
  };

  return (
    <div className="flex-center gradeTwo w-full h-full">
      <Form method="post">
        {renderFieldsByStep(paso, fields, handleChange, setFields)}

        {/* Botones de navegación */}
        {paso > 1 && (
          <button type="button" onClick={handlePrev}>
            Atrás
          </button>
        )}

        {paso < 5 && (
          <button type="button" onClick={handleNext}>
            Siguiente
          </button>
        )}

        {paso === 5 && (
          <button type="button" onClick={enviarDatos}>
            Enviar
          </button>
        )}
      </Form>
    </div>
  );
};
