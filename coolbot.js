const {Client, Attachment} = require('discord.js');
const bot = new Client();

const token = 'Njc5NDk0NjkwODMxMjA0MzYx.Xkyasg.MV93Kms54XADjGvkQ_rOhZLw3l0';

const PREFIX = '!';

var version = '1.0.1';

bot.on('ready', () =>{
    console.log('Bot is Online!');
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'shoreline':
            const attachment = new Attachment('https://i.redd.it/qlwzubo6y0c21.jpg')
            message.channel.send(message.author, attachment);
        break;
    }

})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'reserve':
            const attachment = new Attachment('https://i.redd.it/q53j90d37cx31.jpg')
            message.channel.send(message.author, attachment);
        break;
    }

})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'customs':
            const attachment = new Attachment('https://forum.escapefromtarkov.com/uploads/monthly_2018_01/customs_marvelin.jpg.03dae6c58d71868b1f44f43a10d9d65b.jpg')
            message.channel.send(message.author, attachment);
        break;
    }

})

bot.login(token);