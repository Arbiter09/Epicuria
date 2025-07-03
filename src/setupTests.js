// src/setupTests.js
// Polyfill TextEncoder/TextDecoder for Jest environment
if (typeof global.TextEncoder === "undefined") {
  global.TextEncoder = class {
    encode(str) {
      return new Uint8Array(Buffer.from(str, "utf8"));
    }
  };
}

if (typeof global.TextDecoder === "undefined") {
  global.TextDecoder = class {
    decode(bytes) {
      return Buffer.from(bytes).toString("utf8");
    }
  };
}

// Mock URL methods
global.URL.createObjectURL = jest.fn(() => "mocked-url");
global.URL.revokeObjectURL = jest.fn();
