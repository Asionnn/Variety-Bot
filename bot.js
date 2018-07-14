const Discord = require("discord.js");
const bot = new Discord.Client();
bot.login("NDY1OTUxMjc3NDg2OTY0NzU3.DiqoSg.7JqNcRu7kQixsEWAe896X34_mSE");

bot.on('message', (message) => {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!` 
    switch(message.content){
	case "!ping":
        message.reply('pong');
	break;
	case "!roll":
		var num = Math.floor(Math.random() * 100)+1;
		message.reply('rolled ' + num);
    break;
    case "!neel":
        message.reply('your dad');
    }
    break;
}); 
