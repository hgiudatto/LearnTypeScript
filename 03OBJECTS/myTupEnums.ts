let tUser: [string, number, boolean];

// the order of array really matters in the case of tuples
tUser = ["hg", 155, true]; // Fine

/**
 * Wrong
 *
 * tUser = [155, true, "hg"];
 */

// Typical
let rgb: [number, number, number] = [255, 123, 122];

type User = [number, string];

const newUser: User = [122, "example@google.com"];

export {};
