
let getPet = {
    path: '/pet',
    method: 'get',
    queryParams: [{ id: 33434, name: 'Tommy' }],
    requestInfo: [

        {
            contentType: 'application/json', schema: { name: 'username', id: 34343 },
            responseType: 'application/json', schema: { name: 'username', id: 34343 },
            responseCodes: [{ code: 200, description: "OK" }, { code: 404, description: 'Not found' }]
        },
        {
            contentType: 'application/xml', schema: { name: 'username', id: 34343 },
            responseType: 'application/xml', schema: { name: 'username', id: 34343 },
            responseCodes: [{ code: 200, description: "OK" }, { code: 404, description: 'Not found' }]



        }

    ]
}


let postPet = {
    path: '/pet',
    method: 'POST',
    queryParams: [{}],
    requestBody: [

        {
            contentType: 'application/json', schema: { name: 'Tommy', id: 34343 }
        },
        {
            contentType: 'application/xml', schema: { name: 'username', id: 34343 }

        }

    ]
}


export const paths = [getPet, postPet]