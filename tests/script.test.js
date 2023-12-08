const { JSDOM } = require("jsdom");

const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
global.document = dom.window.document;

const script = require("../js/script.js");

describe("Hello World Function", () => {
  it("should change the message", () => {
    const message = document.getElementById("message");
    script.changeMessage();
    expect(message.textContent).toBe("Message changé!");
  });
});
