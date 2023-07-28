import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState([]);

  function getNotice() {
    axios
      .get("/api/login/")
      .then((response) => {
        setText([...response.data]);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getNotice();
  }, []);

  return <div className="App">{text}</div>;
}

export default App;
