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
    message.delete(1000);
    break;
    case "!thinking":
        message.react('🤔');
    break;
    case "!avatar":
       message.channel.send(message.author.avatarURL);
    break;
    case "!embed":
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: message.author.username,
          icon_url: message.author.avatarURL
        },
        title: "Asion's Variety Bot",
        url: "https://github.com/Asionnn/my-Discord-bot",
        description: "I like eating dog.",
        fields: [{
            name: "Creators",
            value: "Neel - most of the work\n Collin - sat around"
          },
          {
            name: "Rohan",
            value: "sucks pp"
          },
          {
            name: "osu!",
            value: "kill me"
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: message.author.avatarURL,
          text: "© Colon"
        }
      }
    });
    break;
    case "!pokefusionrand":
    var num1 = Math.floor(Math.random() * 151)+1;
    var num2 = Math.floor(Math.random() * 151)+1;
    const embed = new Discord.RichEmbed()
        .setImage('http://images.alexonsager.net/pokemon/fused/' + num1 + '/' + num1 + '.' + num2 + '.png')
        message.channel.send({embed});
    break;
    case '!help':
        message.reply('Command List: \n!ping: replies with pong \n!roll: rolls a number between 1 and 100 \n!pokefusionrand: creates a random Pokemon Fusion');
    break;
    case "!pin":
        message.pin();
    break;
    }//end switch

    //start switch for pokemon section
    switch(message.content.substring(0,message.content.indexOf(' '))){
        case "!pokefusion":
            var nums = message.content.substring(message.content.indexOf(' ') + 1);
            var num1 = nums.substring(0, nums.indexOf(' '));
            var num2 = nums.substring(nums.indexOf(' ') + 1);
            message.reply('http://pokefusion.japeal.com/' + num1 + '/' + num2 + '/0');
        break;
    } //end switch for pokemon section

  
}); 
