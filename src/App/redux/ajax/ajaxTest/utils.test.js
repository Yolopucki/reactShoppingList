import {updatedObject} from "./../utils";

describe("ajax utils", () => {
    it("should update state", () => {
        let newState = updatedObject({name: "vitya"}, {surname: "Orlyk"});
        expect(newState).toEqual({name: "vitya", surname: "Orlyk"});
    });
});
