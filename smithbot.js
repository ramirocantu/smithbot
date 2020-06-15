const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
});

// DO NOT EDIT, logs into discord with Bot Token
client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret