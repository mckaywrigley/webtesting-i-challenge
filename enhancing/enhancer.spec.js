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

  it("Keeps enhancement the same if it is 20.", () => {
    expect(
      succeed({ name: "Ray Gun", durability: 80, enhancement: 20 })
    ).toEqual({
      name: "Ray Gun",
      durability: 80,
      enhancement: 20
    });
  });
});

describe("Item fail.", () => {
  it("Decreases durablity by 5 if enhancement is below 15.", () => {
    expect(fail({ name: "Ray Gun", durability: 80, enhancement: 14 })).toEqual({
      name: "Ray Gun",
      durability: 75,
      enhancement: 14
    });
  });
  it("Decreases durablity by 10 if enhancement is at or above 15.", () => {
    expect(fail({ name: "Ray Gun", durability: 80, enhancement: 15 })).toEqual({
      name: "Ray Gun",
      durability: 70,
      enhancement: 15
    });
  });
  it("Decreases enhancement by 1 if enhancement is above 16.", () => {
    expect(fail({ name: "Ray Gun", durability: 80, enhancement: 17 })).toEqual({
      name: "Ray Gun",
      durability: 70,
      enhancement: 16
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
