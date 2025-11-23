//Simple chatbot
const EventEmitter = require("events");

// Create an event emitter instance
const emitter = new EventEmitter();

// Listen for an event
emitter.on("ev", (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the event
emitter.emit("ev", "hello");
emitter.emit("ev", "World");
