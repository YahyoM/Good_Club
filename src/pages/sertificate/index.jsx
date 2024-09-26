import React, { useContext } from "react";
import { GlobalContext } from "../../context";

const Sertificate = () => {
  const { user } = useContext(GlobalContext);

  return (
    <div>
      <h1>Sertificate</h1>
    </div>
  );
};

export default Sertificate;
