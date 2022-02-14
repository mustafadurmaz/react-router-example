import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 5000);
  }, []);
  return (
    <div>
      <h1>404</h1>
    </div>
  );
};

export default NotFound;
