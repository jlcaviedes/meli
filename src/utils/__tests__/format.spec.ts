import { convertNormalizedText, formatCurrecy } from "../format";
describe("utils format", () => {
  it("should format currency", () => {
    expect(formatCurrecy(5000)).toBe("$5,000");
  });

  it("should convertNormalizedText", () => {
    expect(convertNormalizedText("españa")).toBe("espana");
  });
});
