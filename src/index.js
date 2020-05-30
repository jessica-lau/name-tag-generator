import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag.js";
import "./styles.css";

var App = () => (
    <div className="App">
        <h1>Name Tag Generator</h1>
        <NameTag name="Jessica" />
        <NameTag name="YB" />
        <NameTag name="Oakley" />
        <br/>
        <NameTag name="Cooper" />
        <NameTag name="Gisella" />
    </div>
);

var rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
