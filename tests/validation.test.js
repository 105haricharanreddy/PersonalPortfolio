// Import testing tools
const { test } = require("node:test");
const assert = require("node:assert");

// Import our email validation function
const { validateEmail } = require("../validation.js");

// Test 1: Valid email
test("Valid email should return true", () => {
    assert.strictEqual(validateEmail("hari@gmail.com"), true);
});

// Test 2: Invalid email without @
test("Email without @ should return false", () => {
    assert.strictEqual(validateEmail("harigmail.com"), false);
});

// Test 3: Invalid email without domain extension
test("Email without extension should return false", () => {
    assert.strictEqual(validateEmail("hari@gmail"), false);
});

// Test 4: Empty email
test("Empty email should return false", () => {
    assert.strictEqual(validateEmail(""), false);
});