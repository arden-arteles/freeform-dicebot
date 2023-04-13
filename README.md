# Welcome
This is a self-hostable bot that handles dice rolling in the Freeform Universal Roleplay System.

# Installation
1.  Clone this github repository.
2.  In the directory, run the command: `npm install`
    
    This is necessary to get the individual packages needed. It will automatically download them from NPM.
3.  Create a Discord application from [https://discord.com/developers/applications].
4.  Under "OAuth 2" in "URL Generator", create an invite link.
You'll want to have the "bot" and "application.commands" scopes.
    No permissions are required -- the "bot" scope is simply to keep track of whether it is online or offline.
5.  Go up one directory level, create a directory called "auth".
6.  In there, create a npm package. Add the `type: module` key-value pair to package.json.
7.  Under the Discord Application webpage, under the "Bot" section, click "Reset Token", and copy the token.
8.  Create a file under the auth package, `freeform-universal.js`. In it, have the following code:
    ```js
    export const Bot = {
        token: "YOUR TOKEN HERE"
    };
    ```
9.  Return to the bot's directory. Run the command: `npm run register_commands`
    This will register the commands with discord, globally. It may take some time to update.

To start the bot, in the bot's directory, run the command: `npm start`