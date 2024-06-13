import { useRouteError } from "react-router-dom";
import { ErrorType } from "helpers/customTypes";

export default function ErrorPage() {
  const error = useRouteError() as ErrorType;
  console.error(error);

  return (
    <div>
      <h1>¡Error!</h1>
      <p>Algo inesperado ha ocurrido</p>
      <p>Intenta navegar al inicio</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}
