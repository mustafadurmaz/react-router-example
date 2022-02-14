import React from "react";
import { useHistory, useParams } from "react-router-dom";

const ProductDetails = () => {
  const history = useHistory();
  const param = useParams();
  const handleSave = () => {
    // When saving move the user to the home router `/` and handle the history correctly, so that we can access the browser back button.
    history.push("/");
  };
  return (
    <div>
      <h1>Product Details - {param.id}</h1>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ProductDetails;
