export const renderFieldsByStep = (paso, fields, handleChange, setFields) => {
  switch (paso) {
    case 1:
      return (
        <>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={fields.nombre}
              onChange={handleChange}
              placeholder="Nombre"
            />
          </div>
          <div>
            <label htmlFor="cedula">Cédula:</label>
            <input
              type="number"
              id="cedula"
              name="cedula"
              value={fields.cedula}
              onChange={handleChange}
              placeholder="103245658"
            />
          </div>
        </>
      );

    case 2:
      return (
        <>
          <div>
            <label htmlFor="telefono">Teléfono:</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={fields.telefono}
              onChange={handleChange}
              placeholder="Teléfono"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={fields.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
        </>
      );
    case 3:
      return (
        <>
          <div>
            <label htmlFor="ciudad">Ciudad:</label>
            <input
              type="text"
              id="ciudad"
              name="ciudad"
              value={fields.ciudad}
              onChange={handleChange}
              placeholder="Ciudad"
            />
          </div>
          <div>
            <label htmlFor="Barrio">Barrio:</label>
            <input
              type="text"
              id="barrio"
              name="barrio"
              value={fields.barrio}
              onChange={handleChange}
              placeholder="Barrio"
            />
          </div>
        </>
      );
    case 4:
      return (
        <>
          <div>
            <label htmlFor="local">Tipo de local:</label>
            <span
              onClick={() =>
                setFields((prevFields) => ({
                  ...prevFields,
                  local: "Propio",
                }))
              }
            >
              Propio
            </span>
            <span
              onClick={() =>
                setFields((prevFields) => ({
                  ...prevFields,
                  local: "arrendado",
                }))
              }
            >
              arrendado
            </span>
          </div>
          <div>
            <label htmlFor="tipo_via">Tipo de Vía:</label>
            <select
              id="tipo_via"
              name="tipo_via"
              value={fields.tipo_via}
              onChange={handleChange}
            >
              <option value=""> </option>
              <option value="Avenida">Avenida</option>
              <option value="Avenida Calle">Avenida Calle</option>
              <option value="Avenida Carrera">Avenida Carrera</option>
              <option value="Calle">Calle</option>
              <option value="Carrera">Carrera</option>
              <option value="Diagonal">Diagonal</option>
              <option value="Manzana">Manzana</option>
            </select>
          </div>
          <div>
            <label htmlFor="via">Vía:</label>
            <input
              type="number"
              id="via"
              name="via"
              value={fields.via}
              onChange={handleChange}
              placeholder="Vía"
            />
          </div>
          <div>
            <label htmlFor="numero">Número:</label>
            <input
              type="number"
              id="numero"
              name="numero"
              value={fields.numero}
              onChange={handleChange}
              placeholder="Número"
            />
          </div>
        </>
      );

    case 5:
      return (
        <>
          <div>
            <label htmlFor="tipo_zona">Está en una zona:</label>
            <select
              id="tipo_zona"
              name="tipo_zona"
              value={fields.tipo_zona}
              onChange={handleChange}
            >
              <option value=""> </option>
              <option value="Residencial">Residencial</option>
              <option value="Comercial">Comercial</option>
              <option value="Industrial">Industrial</option>
            </select>
          </div>
          <div>
            <label htmlFor="tipo_local">¿Qué tipo de local es?</label>
            <select
              id="tipo_local"
              name="tipo_local"
              value={fields.tipo_local}
              onChange={handleChange}
            >
              <option value=""> </option>
              <option value="Bodega">Bodega</option>
              <option value="Exclusivo">Exclusivo</option>
              <option value="Compartido">Compartido</option>
              <option value="En centro comercial">En centro comercial</option>
            </select>
          </div>
          <div>
            <input
              type="number"
              name="alto"
              placeholder="Alto"
              value={fields.medidas_del_local.alto}
              onChange={(e) => {
                const { value } = e.target;
                setFields((prevFields) => ({
                  ...prevFields,
                  medidas_del_local: {
                    ...prevFields.medidas_del_local,
                    alto: value,
                  },
                }));
              }}
            />
            <input
              type="number"
              name="ancho"
              placeholder="Ancho"
              value={fields.medidas_del_local.ancho}
              onChange={(e) => {
                const { value } = e.target;
                setFields((prevFields) => ({
                  ...prevFields,
                  medidas_del_local: {
                    ...prevFields.medidas_del_local,
                    ancho: value,
                  },
                }));
              }}
            />
            <input
              type="number"
              name="fondo"
              placeholder="Fondo"
              value={fields.medidas_del_local.fondo}
              onChange={(e) => {
                const { value } = e.target;
                setFields((prevFields) => ({
                  ...prevFields,
                  medidas_del_local: {
                    ...prevFields.medidas_del_local,
                    fondo: value,
                  },
                }));
              }}
            />
          </div>
        </>
      );
    default:
      return null;
  }
};
