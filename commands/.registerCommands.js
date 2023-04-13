import * as Discord from "discord.js";
import * as Commands from "./.commands.js";
import {Bot} from "../../auth/freeform-dicebot.js";

var cmds = Object.entries(Commands).flatMap(a => Object.entries(a[1]).map(b => b[1].details));

console.log(cmds);

var client = new Discord.Client({intents: []});

client.on("ready", async () => {
	await client.application.commands.set(cmds).then(() => console.log("Rolling 1d6 (5)"));
	process.exit(0);
});

client.login(Bot.token);
