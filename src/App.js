import "./styles.css";
import openapi from "./openapi";
import { useEffect } from "react";
export default function App() {
  useEffect(function () {
    // console.log(openapi.paths);
  }, []);

  let paths = Object.keys(openapi.paths);

  const pathElements = paths.map(function (path, index) {
    return (
      <li key={index.toString()} className="sidebarItem">
        {" "}
        {path}{" "}
      </li>
    );
  });

  // console.log(openapi.paths["/pet"].put.summary);

  const pathMethodElements = paths.map(function (path, index) {
    if (openapi.paths[path].put != null) {
      console.log(openapi.paths[path]);
      return (
        <div className="pathMethod" key={index.toString()}>
          <h5> {openapi.paths[path].put.summary} </h5>
        </div>
      );
    } else if (openapi.paths[path].get != null) {
      return (
        <div className="pathMethod" key={index.toString()}>
          <h5> {openapi.paths[path].get.summary} </h5>
        </div>
      );
    } else if (openapi.paths[path].post != null) {
      return (
        <div className="pathMethod" key={index.toString()}>
          <h5> {openapi.paths[path].post.summary} </h5>
        </div>
      );
    } else if (openapi.paths[path].delete != null) {
      return (
        <div className="pathMethod" key={index.toString()}>
          <h5> {openapi.paths[path].delete.summary} </h5>
        </div>
      );
    } else {
      return null;
    }
  });

  return (
    <div className="grid">
      <div className="sidebar">
        <h5> Paths </h5>
        <ol className="list">{pathElements}</ol>
      </div>
      <div className="main">
        {" "}
        <h1>{openapi.info.title}</h1>
        <p> {openapi.info.description} </p>
        {pathMethodElements}
      </div>
    </div>
  );
}
