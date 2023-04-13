import { ApplicationCommandType, ApplicationCommandOptionType } from "discord.js";

const ResultsTable = {
    1: "No, and...",
    2: "No",
    3: "No, but...",
    4: "Yes, but...",
    5: "Yes",
    6: "Yes, and..."
};

export function run(command) {
    var diceString = command.options.getString("dice");
    var numDice = Math.abs(parseInt(diceString.match(/\d+/)[0]));
    if (isNaN(numDice))
        numDice = 0;
    numDice++;
    
    var takeLowest = diceString.includes("-");

    var rolls = [];
    while (rolls.length < numDice)
        rolls.push(Math.floor(Math.random() * 6 + 1));
    
    rolls.sort((a,b) => a - b);

    var emphasisIndex = !takeLowest - 1; // i hate that i can do this

    if (emphasisIndex < 0) emphasisIndex += rolls.length;
    var result = rolls[emphasisIndex];
    rolls[emphasisIndex] = `**${rolls[emphasisIndex]}**`

    var lines = [
        `Dice rolled: ${rolls.join(", ")}`,
        `Result: ${result} (${ResultsTable[result]})`
    ];

    command.reply(lines.join("\n"));
}

export const details = {
	name: "roll",
	description: "Roll dice.",
	type: ApplicationCommandType.ChatInput,
	options: [{
        name: "dice",
        description: "Additional # dice to roll. Use a negative number to take the lowest.",
        required: false,
        type: ApplicationCommandOptionType.String
    }]
};