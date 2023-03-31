// import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGeneros } from "../../Store/slices/generos/thunk";
import { setNewVideogame } from "../../Store/slices/videogames/thunk";
import "./Form.module.css";

function Forms() {
  const { generos = [] } = useSelector((state) => state.generosReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGeneros());
  }, [dispatch]);

  const [formFields, setFormFields] = useState({
    name: "",
    nameError: false,
    imagen: "",
    descripcion: "",
    descripcionError: false,
    plataformas: "",
    plataformasError: false,
    fechaDeLanzamiento: "",
    fechaDeLanzamientoError: false,
    rating: "",
    ratingError: false,
    generos: [],
  });

  function handleChange(evt) {
    const { target } = evt;
    const { name, value } = target;

    const newValues = {
      ...formFields,
      [name]: value,
    };
    switch (name) {
      case "rating":
        if (!isNaN(value)) {
          // Sincroniza el estado de nuevo
          setFormFields(newValues);
        }
        break;
      case "generos":
        if (formFields.generos.includes(value)) {
          const index = formFields.generos.indexOf(value);
          if (index > -1) {
            // only splice array when item is found
            formFields.generos.splice(index, 1); // 2nd parameter means remove one item only
          }
        } else {
          formFields.generos.push(value);
        }

        setFormFields({
          ...formFields,
          [name]: [...formFields.generos],
        });
        break;

      default:
        // Sincroniza el estado de nuevo
        setFormFields(newValues);
        break;
    }
  }

  function handleBlur(evt) {
    const { target } = evt;
    const { name, value } = target;

    if (value.trim().length === 0) {
      setFormFields({
        ...formFields,
        [`${name}Error`]: true,
      });
    } else {
      setFormFields({
        ...formFields,
        [`${name}Error`]: false,
      });
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      formFields.descripcionError ||
      formFields.nameError ||
      formFields.fechaDeLanzamientoError ||
      formFields.ratingError ||
      formFields.plataformasError ||
      formFields.generos.length === 0
    ) {
      alert("che completa todo");
    } else {
      // console.log(formFields);
      dispatch(
        setNewVideogame({
          name: formFields.name,
          descripcion: formFields.descripcion,
          plataformas: [formFields.plataformas],
          imagen: formFields.imagen,
          fechaDeLanzamiento: formFields.fechaDeLanzamiento,
          rating: formFields.rating,
          generosId: formFields.generos,
        })
      );
      //  axios.post('http://localhost:3001/videogames', values)
      //                   .then(res => alert(res))
      //                   .catch(err => alert(err))
    }
    // axios.post("Mandamos el url post que está en postam")
    // .then(res => alert(res))
    // .catch(err => alert(err))
  };
  return (
    <form onSubmit={submitHandler}>
      <h1>Formulario para crear un videojuego</h1>
      <div className="input-item">
        <div className="label-input-item">
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={formFields.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {formFields.nameError ? (
            <span style={{ color: "red" }}>Hubo un error</span>
          ) : (
            ""
          )}
        </div>
        <br></br>
        <div>
          <label>Descripcion:</label>
          <input
            type="text"
            name="descripcion"
            value={formFields.descripcion}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {formFields.descripcionError ? (
            <span style={{ color: "red" }}> Hubo otro error</span>
          ) : (
            ""
          )}
        </div>
        <br />
        <div>
          <img src={formFields.imagen} alt={formFields.imagen} />
          <label>Imagen:</label>
          <input
            type="file"
            name="imagen"
            accept="image/*"
            value={formFields.imagen}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label>Plataformas:</label>
          <input
            type="text"
            name="plataformas"
            value={formFields.plataformas}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {formFields.plataformasError ? (
            <span style={{ color: "red" }}> Hubo otro error</span>
          ) : (
            ""
          )}
        </div>
        <br />
        <div>
          <label>Fecha de Lanzamiento:</label>
          <input
            type="date"
            name="fechaDeLanzamiento"
            value={formFields.fechaDeLanzamiento}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {formFields.fechaDeLanzamientoError ? (
            <span style={{ color: "red" }}> Hubo un error</span>
          ) : (
            ""
          )}
        </div>

        <div>
          <label>Rating:</label>
          <input
            type="text"
            pattern="[0-9]*"
            name="rating"
            value={formFields.rating}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {formFields.ratingError && (
            <span style={{ color: "red" }}>Hubo un error</span>
          )}
        </div>

        <div>
          <p id="id_work_days">
            {" "}
            Agregar varios generos en simultaneo:
            <br />
            {generos.map((genero, idx) => {
              return (
                <label key={idx}>
                  <input
                    type="checkbox"
                    name="generos"
                    value={genero.id}
                    // value={formFields.generoField}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span>{genero.name}</span>
                </label>
              );
            })}
          </p>
        </div>
      </div>
      <button type="submit" disabled={!formFields.name}>
        Crear Videogame
      </button>
    </form>
  );
}

export default Forms;
