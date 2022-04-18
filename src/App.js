import "./styles.css";
import openapi from "./openapi";
import { useEffect } from "react";
import { Document } from "./document";
export default function App() {
  useEffect(function () {}, []);

  let paths = Object.keys(openapi.paths);

  const pathElements = paths.map(function (path, index) {
    return (
      <li key={index.toString()} className="sidebarItem">
        {" "}
        {path}{" "}
      </li>
    );
  });

  return (
    <div className="grid">
      <div className="sidebar">
        <ol className="list">{pathElements}</ol>
      </div>
      <div className="main">
        {" "}
        <h1>{openapi.info.title}</h1>
        <p> {openapi.info.description} </p>
        {<Document />}
      </div>
    </div>
  );
}
