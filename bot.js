const Discord = require("discord.js");
const bot = new Discord.Client();
bot.login("NDY1OTUxMjc3NDg2OTY0NzU3.DiqoSg.7JqNcRu7kQixsEWAe896X34_mSE");

bot.on('message', (message) => {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!` 
    switch(message.content){
	case "!roll":
		var num = Math.floor(Math.random() * 100)+1;
		message.channel.send('rolled ' + num);
    break;
    case "!neel":
        message.channel.send('your dad');
    break;
    case "!thinking":
        message.react('🤔');
    break;
    case "!avatar":
       message.channel.send('hey');
    break;
  
  
    }//end switch

  
}); 
