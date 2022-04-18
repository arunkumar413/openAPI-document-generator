import react, { useState, useEffect } from "react";
import { API } from "./API";

export function Document() {
  const [state, setState] = useState("");

  function getRequestInfo(pathIndex) {
    let items = API[pathIndex].requestInfo.map(function (item, index) {
      return (
        <div key={index.toString()} className="requestInfo">
          contenty type : {item.requestType}
          <pre>
            <code> {JSON.stringify(item.requestSchema)} </code>
          </pre>
        </div>
      );
    });
    return items;
  }

  function getResponseInfo(pathIndex) {
    let items = API[pathIndex].requestInfo.map(function (item, index) {
      debugger;
      console.log(item);
      return (
        <div key={index.toString()} className="response-body">
          contenty type :{item.responseType}
          <pre>
            <code> {JSON.stringify(item.responseSchema)} </code>
          </pre>
        </div>
      );
    });
    return items;
  }

  const paths = API.map(function (item, index) {
    console.log(item);

    return (
      <div key={index.toString()} className="resource">
        <h3 clas="tag"> {item.tags[0]} </h3>
        <p>
          Method:{" "}
          <span className={item.method + "-method"}>
            
            {" "}
            {item.method.toUpperCase()}{" "}
          </span>{" "}
          <span className="path">
            
            {" "}
            {item.path}
          </span>{" "}
        </p>
        <div className="query-params">
          <p> Query Paramerters </p>
          {JSON.stringify(item.queryParams)}
        </div>
        <h4> Request body </h4>
        {getRequestInfo(index)}
        <h4> Response Info </h4>
        {getResponseInfo(index)}
      </div>
    );
  });

  return (
    <div>
      <h3>Document</h3>
      {paths}
    </div>
  );
}
