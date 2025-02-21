import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  metodo: () => void;
};

function Button({ children, metodo }: Props) {
  return (
    <button
      type="button"
      onClick={() => metodo()}
      className={`btn  btn-primary`}
    >
      {children}
    </button>
  );
}

export default Button;
