const { succeed, fail, repair, get } = require("./enhancer.js");
// test away!
describe("Repair item.", () => {
  it("Takes item object and sets durability property to 100.", () => {
    expect(repair({ durability: 50 })).toEqual({ durability: 100 });
  });
});
