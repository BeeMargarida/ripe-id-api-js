const assert = require("assert");
const ripe = require("../..");

describe("API", function() {
    describe("#constructor()", function() {
        it("should be able to contruct a new ripe instance", () => {
            const api = new ripe.API();
            assert.notStrictEqual(api, null);
        });
    });
});
