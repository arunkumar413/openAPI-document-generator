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

  function getResponseCodes(pathIndex) {
    let items = API[pathIndex].requestInfo.map(function (item, index) {
      console.log(item.responseCodes);

      return (
        <div key={index.toString()} className="response-codes">
          <div>
            {" "}
            {item.responseCodes.map(function (code, index2) {
              return (
                <div key={index2.toString()} className="response-code">
                  {" "}
                  <p className="code"> {code.code} </p>{" "}
                  <p className="code-description"> {code.description} </p>{" "}
                </div>
              );
            })}{" "}
          </div>
        </div>
      );
    });
    return items;
  }

  const paths = API.map(function (item, index) {
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
            Path:
            {item.path}
          </span>{" "}
        </p>
        <div className="query-params">
          <h4> Query Paramerters </h4>
          {JSON.stringify(item.queryParams)}
        </div>
        <div className="request-body">
          <h4> Request body </h4>
          {getRequestInfo(index)}
        </div>
        <div className="response-info">
          <h4> Response Info </h4>
          {getResponseInfo(index)}
        </div>
        <div className="response-code-container">
          <h4> Response codes </h4>
          <div className="response-code">
            {" "}
            <p className="code"> Code </p>{" "}
            <p className="code-description"> Description </p>{" "}
          </div>
          {getResponseCodes(index)}
        </div>
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
