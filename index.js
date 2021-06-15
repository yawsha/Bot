const Discord = require ('discord.js');
const config = require('./config.json');
const fs = require('fs');

const client = new Discord.Client();

const prefix = '!'


client.commands = new Discord.Collection();

client.once('ready', () => {
    console.log('Mr.Francis is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'plsboobs'){
        message.channel.send('Where is your integrity?');
    }
    if (command === 'hisir'){
        message.reply('Hello');
    }

});




client.login(config.token);