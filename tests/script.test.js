const { JSDOM } = require("jsdom");
const script = require("../js/script.js");

const dom = new JSDOM(
  `<!DOCTYPE html><html><body><p id="message">Bonjour le monde!</p></body></html>`
);
global.document = dom.window.document;

describe("Hello World Function", () => {
  it("should change the message", () => {
    const message = document.getElementById("message");
    script.changeMessage();
    expect(message.textContent).toBe("Message changé!");
  });
});
