// Require the necessary discord.js classes
const fs = require("node:fs");
const path = require("node:path");
const {
  Client,
  Collection,
  Events,
  GatewayIntentBits,
} = require("discord.js");
const { token } = require("./config.json");

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token);

// Message reply back?
client.on("messageCreate", async (message) => {
  const { author, content } = message;

  const actualMessage = content.trim().toLowerCase();

  if (
    actualMessage === "kirat sir" ||
    actualMessage === "kirat bhaiya"
  ) {
    try {
      const sentMessage = await author.send(
        "Please stop using Sir, or Bhaiya!"
      );
    } catch (e) {
      console.log("Something went wrong", e.message);
    }
  }
});
