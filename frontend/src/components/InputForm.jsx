import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";
import ResponseDisplay from "./ResponseDisplay";


const API_URL = "http://localhost:5000/bfhl"; // Change to deployed URL if hosted

const InputForm = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);

  const options = [
    { value: "numbers", label: "Numbers" },
    { value: "alphabets", label: "Alphabets" },
    { value: "highest_alphabet", label: "Highest Alphabet" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const parsedInput = JSON.parse(jsonInput);
      if (!Array.isArray(parsedInput.data)) throw new Error("Invalid format");

      const res = await axios.post(API_URL, parsedInput);
      setResponse(res.data);
      setError("");
    } catch (err) {
      setError("Invalid JSON Input");
      setResponse(null);
    }
  };

  return (
    <div className="form-container">
      <textarea
        className="input-box"
        rows="5"
        placeholder='Enter JSON like { "data": ["A", "C", "z"] }'
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
      />
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>

      {error && <p className="error-message">{error}</p>}

      {response && (
        <>
          <Select options={options} isMulti onChange={setSelectedFilters} className="dropdown" />
          <ResponseDisplay response={response} filters={selectedFilters.map(f => f.value)} />
        </>
      )}
    </div>
  );
};

export default InputForm;
