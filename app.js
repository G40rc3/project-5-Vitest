// Your provided file
export const userIDs = [
  {
    userID: 1,
    userName: "Frankie",
  },
  {
    userID: 2,
    userName: "Bertie",
  },
  {
    userID: 3,
    userName: "Tim",
  },
  {
    userID: 4,
    userName: "Jez",
  },
  {
    userID: 5,
    userName: "Sam",
  },
  {
    userID: 6,
    userName: "Angelica",
  },
  {
    userID: 7,
    userName: "Manny",
  },
  {
    userID: 8,
    userName: "Joe",
  },
  {
    userID: 9,
    userName: "Akshat",
  },
  {
    userID: 10,
    userName: "Embo",
  },
];

// Get a users name by their ID from an array
export function getUserNameByID(userID) {
  let match = userIDs.find((user) => user.userID === userID);

  if (match) {
    return match.userName;
  } else {
    return "not a real person, maybe you have imaginary friends";
  }
}
// 1. Find the maximum value in an array
export function findMaxValue(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  return Math.max(...arr);
}

// 2. Calculate the factorial of a number
export function factorial(n) {
  if (typeof n !== "number" || n < 0) return null;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// 3. Check if two arrays are equal
export function areArraysEqual(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
  if (arr1.length !== arr2.length) return false;
  return arr1.every((val, index) => val === arr2[index]);
}

// 4. Convert a string to title case
export function toTitleCase(str) {
  if (typeof str !== "string") return "";
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function add(a, b) {
  return a + b;
}

export function isPalindrome(string) {
  string = string.split(" ").join("").toLowerCase();
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return string === reversed;
}

import { mockPosts } from "./mockData";
export function countPostsByUser(userId) {
  return mockPosts.filter((post) => post.userId === userId).length;
}
