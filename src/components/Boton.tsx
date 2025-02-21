import { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
  activo: boolean;
  onClic: () => void;
};

function Boton({ children, activo, onClic }: Props) {
  return (
    <button
      type="button"
      disabled={activo}
      onClick={() => onClic()}
      className={`btn  btn-${activo ? "secondary " : "primary"}`}
    >
      {activo ? "Cargando..." : children}
    </button>
  );
}

export default Boton;
