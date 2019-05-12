const { succeed, fail, repair, get } = require("./enhancer.js");
// test away!
const item = { name: "Ray Gun", durability: 80, enhancement: 50 };

describe("Repair item.", () => {
  it("Takes item object and sets durability property to 100.", () => {
    expect(repair(item)).toEqual({
      name: "Ray Gun",
      durability: 100,
      enhancement: 50
    });
  });
});
