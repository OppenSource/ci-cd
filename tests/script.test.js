// script.test.js
const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

// Load the HTML file using JSDOM
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf-8");
const { window } = new JSDOM(html);
global.document = window.document;

// Load the script file
const script = require("../js/script.js");

describe("changeMessage function", () => {
  it("should change the content of the message element", () => {
    // Create an element with the ID 'message'
    const messageElement = document.createElement("div");
    messageElement.id = "message";
    document.body.appendChild(messageElement);

    // Call the changeMessage function
    script.changeMessage();

    // Check if the content has been changed
    expect(messageElement.innerHTML).toBe("Download CV now!");
  });

});
