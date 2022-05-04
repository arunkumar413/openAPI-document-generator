let getPet = {
  path: "/pet",
  method: "get",
  summary:'',
  tags: ["Get pet info"],
  queryParams: { id: 33434, name: "Tommy" },
  requestInfo: [
    {
      requestType: "application/json",
      requestSchema: { name: "Tommy", id: 34343 },
      responseType: "application/json",
      responseSchema: { name: "Tommy", id: 34343 },
      responseCodes: [
        { code: 200, description: "OK" },
        { code: 404, description: "Not found" },
      ],
    },
    {
      requestType: "application/xml",
      requestSchema: { name: "username", id: 34343 },
      responseType: "application/xml",
      responseSchema: { name: "username", id: 34343 },
      responseCodes: [
        { code: 200, description: "OK" },
        { code: 404, description: "Not found" },
      ],
    },
  ],
};

let postPet = {
  path: "/pet",
  method: "post",
  tags: ["Post pet info"],

  queryParams: { id: 33434, name: "Tommy" },
  requestInfo: [
    {
      requestType: "application/json",
      requestSchema: { name: "username", id: 34343 },
      responseType: "application/json",
      responseSchema: { name: "username", id: 34343 },
      responseCodes: [
        { code: 200, description: "OK" },
        { code: 404, description: "Not found" },
      ],
    },
    {
      requestType: "application/xml",
      requestSchema: { name: "username", id: 34343 },
      responseType: "application/xml",
      responseSchema: { name: "username", id: 34343 },
      responseCodes: [
        { code: 200, description: "OK" },
        { code: 404, description: "Not found" },
      ],
    },
  ],
};

let putPet = {
  path: "/pet",
  method: "put",
  tags: ["Put pet info"],

  queryParams: { id: 33434, name: "Tommy" },
  requestInfo: [
    {
      requestType: "application/json",
      requestSchema: { name: "username", id: 34343 },
      responseType: "application/json",
      responseSchema: { name: "username", id: 34343 },
      responseCodes: [
        { code: 200, description: "OK" },
        { code: 404, description: "Not found" },
      ],
    },
    {
      requestType: "application/xml",
      requestSchema: { name: "username", id: 34343 },
      responseType: "application/xml",
      responseSchema: { name: "username", id: 34343 },
      responseCodes: [
        { code: 200, description: "OK" },
        { code: 404, description: "Not found" },
      ],
    },
  ],
};



let deletePet = {
  path: "/pet",
  method: "delete",
  tags: ["Delete pet info"],

  queryParams: { id: 33434, name: "Tommy" },
  requestInfo: [
    {
      requestType: "application/json",
      requestSchema: { name: "username", id: 34343 },
      responseType: "application/json",
      responseSchema: { name: "username", id: 34343 },
      responseCodes: [
        { code: 200, description: "OK" },
        { code: 404, description: "Not found" },
      ],
    },
    {
      requestType: "application/xml",
      requestSchema: { name: "username", id: 34343 },
      responseType: "application/xml",
      responseSchema: { name: "username", id: 34343 },
      responseCodes: [
        { code: 200, description: "OK" },
        { code: 404, description: "Not found" },
      ],
    },
  ],
};



const API = [getPet, postPet,putPet, deletePet];

export { API };
