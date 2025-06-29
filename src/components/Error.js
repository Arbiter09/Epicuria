import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Error!</h1>
      <h2>
        {error.status}: {error.statusText}
      </h2>
    </div>
  );
};
export default Error;
