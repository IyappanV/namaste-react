import { sum } from "../sum";


test("Sum function should be calculate the sum of two numbers", () => {
    const result = sum(8, 2);

    // Assertion
    expect(result).toBe(10);
});