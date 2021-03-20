const config = require('./cfg/config');

const Q = require('q');

/*******************************************
** DISCORD setup
*******************************************/

const discord = require("discord.js");
const client = new discord.Client();
const token = config.discord.token;

// Set the prefix
const prefix = ".";

/*******************************************
** FUNCTIONS
*******************************************/



/*******************************************
** DISCORD
*******************************************/

client.on("ready", () => {
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    client.user.setPresence({ game: { name: 'mortar incoming', type: 0 } });
});

client.on("message", (message) => {
	if(message.author.bot) return;
	if(message.content.indexOf(prefix) !== 0) return;

	const args = message.content.slice(prefix.length).trim().toLowerCase().split(/ +/g);
	const command = args.shift().toLowerCase();

	if (command  === 'help') {
		message.channel.send('\n**Available commands**```.server start [type]  (1)\n        stop\n        restart\n        status <details>\n\n(1) available types: liberation\n\n\n.whitelist [list] <whitelist>\n           [add] [@user]\n           [remove] [@user]\n\n.hc [start] [number]\n    [stop] [number]\n    [restart] [number]\n    [status]\n\nAvailable headless clients: 1,2,3```');
	}

});

client.login(token);
