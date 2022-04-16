
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
    method: 'post',
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


export const paths = [getPet, postPet]