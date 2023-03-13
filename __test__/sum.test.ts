import { sum } from "@/../testExample/sum";

describe("sum function", () => {
  it("should add two numbers together", () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
