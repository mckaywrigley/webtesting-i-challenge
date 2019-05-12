const { succeed, fail, repair, get } = require("./enhancer.js");
// test away!

describe("Item success.", () => {
  it("Increases enhancement by 1 if less than 20.", () => {
    expect(
      succeed({ name: "Ray Gun", durability: 80, enhancement: 15 })
    ).toEqual({
      name: "Ray Gun",
      durability: 80,
      enhancement: 16
    });
  });

  it("Increases enhancement by 1 if less than 20.", () => {
    expect(
      succeed({ name: "Ray Gun", durability: 80, enhancement: 20 })
    ).toEqual({
      name: "Ray Gun",
      durability: 80,
      enhancement: 20
    });
  });
});

describe("Repair item.", () => {
  it("Takes item object and sets durability property to 100.", () => {
    expect(
      repair({ name: "Ray Gun", durability: 80, enhancement: 15 })
    ).toEqual({
      name: "Ray Gun",
      durability: 100,
      enhancement: 15
    });
  });
});
