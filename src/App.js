import "./styles.css";
import openapi from "./openapi";
import { useEffect } from "react";
import { Document } from "./document";
import { API } from "./API";
export default function App() {
  useEffect(function () { }, []);

  let paths = Object.keys(openapi.paths);

  const pathElements = API.map(function (item, index) {
    return (
      <a href="" key={index.toString()} className="sidebarItem">
        {" "}
        {item.tags[0]}
        <sup className={item.method +"-method-sup"}> {item.method} </sup>
      </a>
    );
  });

  return (
    <div className="grid">
      <div className="sidebar">
        {pathElements}
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
