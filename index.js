const Discord = require ('discord.js');

const client = new Discord.Client();

const prefix = '!'

const fs = require('fs');

client.commands = new Discord.Collection();

client.once('ready', () => {
    console.log('Mr.Francis is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'plsboobs'){
        const newLocal = 'Where is your integrity?';
        message.channel.send(newLocal);
    
    }
     if (command === 'hisir'){
            message.reply('Hello');
    
     }

});




client.login('ODU0MzU4NjkyMjMzMDg0OTM4.YMixiQ.VimHb25V1t5fA4LEkopqS0wMZZI');