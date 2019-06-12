import reducer from "./../reducers";
import * as ActionTypes from "./../actionTypes";

describe("Ajax reducer", () => {
    it("should return default state", () => {
        const newState = reducer(undefined, {});
        expect(newState).toEqual({
            products: [],
            categories: []
        });
    });
    it("should return new state with products", () => {
        const products = [{
            asin: "B0721KZHWT",
            brand: "Plan Smart",
            brand_class: null
        }];
        let newState = reducer(undefined, {type: ActionTypes.GET_PRODUCTS, payload: products});
        expect(newState).toEqual({products: products, categories: []});
    });
    it("should return new state with categories", () => {
        const categories = ["Home & Kitchen", "Sports & Outdoors", "Health & Personal Care", "Baby Products"];
        let newState = reducer(undefined, {type: ActionTypes.GET_CATEGORIES, payload: categories});
        expect(newState).toEqual({products: [], categories});
    });
});
