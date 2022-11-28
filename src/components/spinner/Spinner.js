import React from "react";
import loadingBar from "../../assets/Misterious mist.gif";

function Spinner() {
  return (
    <>
      <div>
        <img src={loadingBar} className="d-block m-auto" />
      </div>
    </>
  );
}

export default Spinner;
