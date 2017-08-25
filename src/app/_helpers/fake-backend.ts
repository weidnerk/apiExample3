import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { IProduct }                from './../product';

export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {
    // use fake backend in place of Http service for backend-less development


        // configure fake backend
        backend.connections.subscribe((connection: MockConnection) => {

            //wrap in timeout to simulate server api call
            setTimeout(() => {
                let db: IProduct[] = [
                        { "productId" : 1, "productName": "grape", "productCode": "100", "releaseDate": "1/1/2016", "price": 1.20, "description": "some description", "starRating": 3, "imageUrl": "https://openclipart.org/image/300px/svg_to_png/8531/Gerald-G-Simple-Fruit-FF-Menu.png",
                            "factories": [
                                { "id": 10, "factoryName": "parts made here"}
                                    ] },
                        { "productId" : 2, "productName": "cherry", "productCode": "200", "releaseDate": "1/1/2016", "price": 2.50, "description": "some description", "starRating": 3, "imageUrl": "https://openclipart.org/image/300px/svg_to_png/235714/cherry.png",
                            "factories": [
                                { "id": 11, "factoryName": "go find parts"}
                                    ] },
                        { "productId" : 3, "productName": "watermelon", "productCode": "300", "releaseDate": "1/1/2016", "price": 2.50, "description": "some description", "starRating": 3, "imageUrl": "https://openclipart.org/image/300px/svg_to_png/131845/watermelon.png",
                            "factories": [
                                { "id": 12, "factoryName": "no parts here"}
                                    ] }                    ];
                // return all tickets
                // GET: /ticket
                if (connection.request.url.endsWith("/api/Flex/Products") && connection.request.method === 0) {
                    let res = new Response(
                    new ResponseOptions({ status: 200, body: JSON.stringify(db) } )
                    )
                    connection.mockRespond(res);
                }

            }, 500);

        });

        return new Http(backend, options);


};

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions, XHRBackend]
};
