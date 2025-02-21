import Button from "./Button";
import { user } from "./Tipos";

type Props = {
  list: user[];
};

function Tabla({ list }: Props) {
  const info = (user: user) => {
    console.log(
      `Editando a el usuario ${user.id}, con el nombre ${
        user.nombre + " " + user.apellidoPaterno + " " + user.apellidoMaterno
      }`
    );
  };

  const contenido = () => {
    return list.length ? (
      list.map((el) => (
        <tr key={el.id}>
          {Object.entries(el).map(([key, val]) => (
            <td key={el.id + key}>{val}</td>
          ))}
          <td>
            <Button metodo={() => info(el)}>Info</Button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <th scope="col" key={"sin valores"}>
          Sin Elementos Para Mostrar
        </th>
      </tr>
    );
  };

  return (
    <table className="table">
      <thead className="table-light">
        <tr>
          {list.length !== 0 ? (
            Object.keys(list[0]).map((el) => (
              <th scope="col" key={el}>
                {el}
              </th>
            ))
          ) : (
            <th scope="col"></th>
          )}
        </tr>
      </thead>
      <tbody className="table-group-divider">{contenido()}</tbody>
    </table>
  );
}

export default Tabla;
