import { useRouteError } from "react-router-dom";
import "./StylesErrorPage.css"; // Importando o arquivo CSS para estilização


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-container">
      <div className="error-content">
        <h1>Oops!</h1>
        <p>Something went wrong...</p>
        <p className="error-message">
          {error.statusText || error.message || "Unknown error"}
        </p>
      </div>
    </div>
  );
}