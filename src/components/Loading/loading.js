import React, { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Container from '../Container/Container';
import "../Loading/loading.css";

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
        {
          loading ?
            <ClimbingBoxLoader
            color={"#fa7b00"}
            loading={loading}
            size={30}
            // aria-label="Loading Spinner"
            // data-testid="loader"
          />

            :
          <div className="container">
          <Container /> 
          </div>
        }
    </div>
  )
};

export default Loading;