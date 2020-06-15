const Discord = require('discord.js');
const client = new Discord.Client();
const https = require('https');

// DO NOT EDIT, logs into discord with Bot Token
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if(message.content.substring(0, 1) == '-') {
        var args = message.content.substring(1).split(' ');
        var cmd = args[0];
        switch (cmd) {
            case 'help':
                message.reply('Type -start to start the server');
                break;
            case 'start':
                message.reply(startServer());
                break;
        }
    }
});

function startServer () {
    https.get(process.env.APIurl)
    return 'Server is starting.';
}