// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for a palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for a non‑palindrome", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  // Edge case: mixed uppercase/lowercase
  it("is case‑insensitive (e.g. 'RaceCar')", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  // Edge case: empty string
  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  // Bonus: non‑alphabetic characters should throw
  it("throws an error for strings with non‑alphabetic chars", () => {
    expect(() => isPalindrome("race-car")).toThrow();
  });

  // Bonus: non‑string input should throw
  it("throws an error if input is not a string", () => {
    expect(() => isPalindrome(12321)).toThrow();
  });
});
