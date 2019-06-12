import axios from "axios";

import {call} from "redux-saga/effects";
import {getData} from "./../sagaGetData";

let MockAdapter = require("axios-mock-adapter");
const assert = require("assert");


let mock = new MockAdapter(axios);



describe("getData()", () => {
    const generator = getData();
    it("should make axios call", () => {
        mock.onGet("https://demo8421975.mockable.io/products").reply(200, {
            products: [{name: "milk", bsr_category: "food"}, {name: "pc", bsr_category: "technology"}]
        });
        assert.deepEqual(
            generator.next().value, call(axios.get, "https://demo8421975.mockable.io/products")
        );
    });
});

