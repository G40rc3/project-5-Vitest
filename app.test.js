import { assert, describe, expect, test } from "vitest";
import { mockPosts } from "./mockData";
import {
  getUserNameByID,
  userIDs,
  findMaxValue,
  factorial,
  areArraysEqual,
  toTitleCase,
  isPalindrome,
  add,
  countPostsByUser,
} from "./app.js";

describe("maxestvalue", function () {
  test("maxValue", function () {
    const result = findMaxValue([3, 7, 2, 8, 5]);
    expect(result).toBe(8);
  });
});

describe("factorial", function () {
  test("factorial", function () {
    const result = factorial(5);
    expect(result).toBe(120);
  });
});

describe("areArraysEqual", function () {
  test("areArraysEqual", function () {
    const result = areArraysEqual([1, 2, 3], [1, 2, 3]);
    expect(result).toBe(true);
  });
});

describe("toTitleCase", function () {
  test("blaBlaBlaGoesBla", function () {
    const result = toTitleCase("hello world");
    expect(result).toBe("Hello World");
  });
});

describe("isPalindrome", function () {
  test("Yup, that is definitelly a palindrome", function () {
    const result = isPalindrome("A man a plan a canal Panama");
    expect(result).toBe(true);
  });

  test("Nope, not a palindrome", function () {
    const result = isPalindrome("hello");
    expect(result).toBe(false);
  });
});

describe("add", function () {
  test("adding two numbers", function () {
    const result = add(2, 3);
    assert.equal(result, 5);
  });

  test("adding negative numbers", function () {
    const result = add(-2, -3);
    assert.equal(result, -5);
  });

  test("0 plus 0 is 0", function () {
    const result = add(0, 0);
    assert.equal(result, 0);
  });
});

describe("getUserNameByID", function () {
  test("Checks to see if userID matches the name", function () {
    const result = getUserNameByID(1);
    expect(result).toBe("Frankie");
  });

  test("error if the user id doesn t exist", function () {
    const result = getUserNameByID(999);
    expect(result).toBe("not a real person, maybe you have imaginary friends");
  });
});

describe("userIDs", function () {
  test("check if user id exists in the array", function () {
    const result = userIDs.find((user) => user.userID === 2);
    assert.equal(result.userName, "Bertie");
  });
});

describe("mockPosts", () => {
  test("check if post with specific userId and id exists", () => {
    const post = mockPosts.find((p) => p.userId === 1 && p.id === 1);

    expect(post).toBeDefined();

    expect(post).toHaveProperty("userId");
    expect(post).toHaveProperty("id");
    expect(post).toHaveProperty("title");
    expect(post).toHaveProperty("body");

    expect(post.title).toBe("BLOIT!");
    expect(post.body).toBe("BLAARGH!!!");
  });
});

describe("countPostsByUser", function () {
  test(" number of posts for userId 1", function () {
    const result = countPostsByUser(1);
    expect(result).toBe(11);
  });

  test(" number of posts for userId 2", function () {
    const result = countPostsByUser(2);
    expect(result).toBe(11);
  });
});
describe("countPostsByUser", function () {
  for (let userId = 3; userId <= 10; userId++) {
    test(`posts for userId ${userId}`, function () {
      const result = countPostsByUser(userId);
      expect(result).toBe(10);
    });
  }

  test(" 0 if userId does not exist", function () {
    const result = countPostsByUser(999);
    expect(result).toBe(0);
  });
});
