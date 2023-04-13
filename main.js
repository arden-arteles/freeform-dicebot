import * as Discord from "discord.js";
import {Bot} from "../auth/freeform-dicebot.js";

import * as Commands from "./commands/.commands.js";
// import * as Buttons from "./buttons/.buttons.js";

const client = new Discord.Client({intents: [
	Discord.IntentsBitField.Flags.Guilds,
	Discord.IntentsBitField.Flags.GuildMessages,
	Discord.IntentsBitField.Flags.DirectMessages,
	Discord.IntentsBitField.Flags.GuildWebhooks
]});

client.on("interactionCreate", (interaction) => {
	if (interaction.isChatInputCommand()) { // is chat input command
		return handleChatInputCommand(interaction);
	}
	if (interaction.isButton()) {
		return handleButtonInteraction(interaction);
	}
});
async function handleChatInputCommand(command) {
	return Commands.ChatInput[command.commandName].run(command);
}
async function handleButtonInteraction(button) {
	return Buttons[button.customId].run(button);
}

client.on("ready", () => {
	console.log("Yeehaw");
});
client.login(Bot.token);