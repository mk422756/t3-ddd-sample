import { describe, expect, it } from "vitest";
import Tweet from "./tweet";

describe("Tweet", () => {
  it("成功する", () => {
    const text = "test";
    const tweet = new Tweet(text);

    expect(tweet.text).toBe(text);
  });

  it("141文字以上ならエラー", () => {
    const text = "a".repeat(141);
    expect(() => new Tweet(text)).toThrowError();
  });

  it("0文字ならエラー", () => {
    const text = "";
    expect(() => new Tweet(text)).toThrowError();
  });
});
