import React, { useEffect } from "react";
import InputForm from "./components/InputForm";


const App = () => {
  useEffect(() => {
    document.title = "XYZ123"; // Roll number as title
  }, []);

  return (
    <div className="container">
      <h1 className="title">Bajaj Finserv Health Challenge</h1>
      <InputForm />
    </div>
  );
};

export default App;
