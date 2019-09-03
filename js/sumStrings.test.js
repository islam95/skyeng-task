const sumStrings = require("./sumStrings");

describe("Should compute sum of two string numbers", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sumStrings("1", "2")).toBe("3");
  });

  test("adds 999 + 9 to equal 1008", () => {
    expect(sumStrings("999", "9")).toBe("1008");
  });

  test("adds 9 + 999 to equal 1008", () => {
    expect(sumStrings("9", "999")).toBe("1008");
  });

  test("adds 00205 + 04555 to equal 4760", () => {
    expect(sumStrings("00205", "04555")).toBe("4760");
  });

  test("adds a long number", () => {
    const result = sumStrings(
      "1",
      "99999999999999999999999999999999999999999999999999999999999999999999"
    );
    expect(result).toBe(
      "100000000000000000000000000000000000000000000000000000000000000000000"
    );
  });
});
