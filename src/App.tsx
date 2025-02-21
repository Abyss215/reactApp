import Card from "./components/Card";
import { CardBody } from "./components/Card";
import List from "./components/List";
import Boton from "./components/Boton";
import { useEffect, useState } from "react";
import Button from "./components/Button";

import { user } from "./components/Tipos";
import Tabla from "./components/Tabla";

function App() {
  const [data, setData] = useState<user[]>([]);

  const [carga, setCarga] = useState(false);

  useEffect(() => {
    const newData = [
      {
        id: 1,
        foto: "",
        nombre: "Abi",
        apellidoPaterno: "Rodi",
        apellidoMaterno: "Ven",
        edad: 22,
        correo: "correo@correo.com",
        telefono: 95111152001,
      },
      {
        id: 2,
        foto: "",
        nombre: "Alice",
        apellidoPaterno: "Rojo",
        apellidoMaterno: "C",
        edad: 22,
        correo: "correo@correo.com",
        telefono: 95111152001,
      },
      {
        id: 3,
        foto: "",
        nombre: "Vi",
        apellidoPaterno: "F",
        apellidoMaterno: "C",
        edad: 22,
        correo: "correo@correo.com",
        telefono: 95111152001,
      },
      {
        id: 4,
        foto: "",
        nombre: "luz",
        apellidoPaterno: "Jojo",
        apellidoMaterno: "C",
        edad: 22,
        correo: "correo@correo.com",
        telefono: 95111152001,
      },
    ];
    setData(newData);

    setTimeout(() => {
      setCarga(true);
    }, 4000);
  }, [carga]);

  /*

  const [list, setList] = useState(["pico", "micho", "wili"]);
  const [activo, setActivo] = useState(false);

  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };
  const handleClic = () => {
    setActivo(true);
  };
  const anadir = () => {
    setList([...list, "Minion"]);
  };
  const eliminar = () => {
    setList([...list.slice(0, list.length - 1)]);
  };

  const contenido = list.length ? (
    <List data={list} onSelect={handleSelect} />
  ) : (
    "Sin elementos para mostrar"
  );
*/
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      {carga ? (
        <Tabla list={data} />
      ) : (
        <>
          <div className="spinner-border " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Cargando...</p>
        </>
      )}
    </div>
    /**
     <Card>
      <CardBody title="Titulo" text="Textito" />
      <Button metodo={anadir}>Añadir</Button>
      <Button metodo={eliminar}>Eliminar</Button>
      {contenido}
      <Boton activo={activo} onClic={handleClic}>
        HOla
      </Boton>
    </Card>
     * **/
  );
}

export default App;
