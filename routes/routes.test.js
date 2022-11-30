process.env.NODE_ENV = "test";
const request = require("supertest");

const app = require("../app");

// let ITEMS = require("../fakeDb");
ITEMS = [];

// ####################

let test_item = {name: "test_item_one", price: 1000};

beforeEach(async () => {
    ITEMS.push(test_item);
});

afterEach(async () => {
    console.log('checkpoint1 - ', ITEMS)
    ITEMS.length = 0;
    console.log('checkpoint2 - ', ITEMS)

});

// ####################


describe('return "/" ', () => {
    test('returns home', async () => {

        const resp = await request(app).get('/');
        const body = resp.body;

        expect(resp.statusCode).toBe(200);
        expect(body).toMatch('test - home')
    });
});


// describe('get items" ', () => {
//     test('gets items', async () => {

//         const resp = await request(app).get('/items');
//         const body = resp.body;
//         console.log('checkpoint3 - ', ITEMS)

//         expect(resp.statusCode).toBe(200);
//         expect(body).toBe([{ name: 'test_item_one', price: 1000 }])
//     });
// });

// describe('get items', () => {
//     test('gets items', async () => {

//         const resp = await request(app).get('/items');
//         const body = resp.body;

//         expect(resp.statusCode).toBe(200);
//         expect(body.length()).toHaveLength(1)
//     });
// });

describe("get items by name", () => {
    test("retreive an item", async function () {
        const response = await request(app).get(`/items/${item.name}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.item).toEqual(item);
    });
});