var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
 	
	var userCoins = new Map();
	    
       // args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
	    break;
	    case 'food':
		bot.sendMessage({
		    to: channelID,
		    message: 'https://imgur.com/gallery/fQ1GA2U'
	        });
	    break;
	    case 'roll':
		var num = Math.floor(Math.random() * 100) + 1;
		bot.sendMessage({
		    to: channelID,
		    message: 'rolled ' + num
		});
	    break;
	    case 'name':
		bot.sendMessage({
		    to: channelID,
		    message: user
		});
	    break;
	    case 'daequan':
		bot.sendMessage({
		    to:channelID,
		    message:'https://puu.sh/AUlqP/eefdda53f7.jpg'
		});
	    break;
	    case 'coin-toss':
		var num = Math.floor(Math.random() * 2);
		if(num == 0){
		   bot.sendMessage({
		       to: channelID,
		       message: 'heads!'
		   });
		}
		else{
		   bot.sendMessage({
		       to: channelID,
		       message: 'tails!'
	           });
		}
	    break;
	    case 'get-coins':
		userCoins.set(user, 10);
		bot.sendMessage({
		    to: channelID,
		    message: 'you got ' + userCoins.get(user) + ' coins'
		});
	    break;
	    case 'my-coins':
		bot.sendMessage({
		    to: channelID,
		    message: 'you have ' + userCoins.get(user) + ' coins'
		});
	     break;
	     case 'add-coins':
		userCoins.set(user,userCoins.get(user) + 15);
		bot.sendMessage({
		    to: channelID,
		    message: 'you now have ' + userCoins.get(user) + ' coins'
		});

		

	
            break;
	
            // Just add any case commands if you want to.
        }
     }
});
