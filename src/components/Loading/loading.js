import React, { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Container from "../Container/Container";
import "../Loading/Loading.css";

export const Loading = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <ClimbingBoxLoader color={"#fa7b00"} loading={loading} size={30} />
      ) : (
        <div className="container">
          <Container />
        </div>
      )}
    </div>
  );
};

export default Loading;
