const Discord = require("discord.js");
const bot = new Discord.Client();
bot.login("NDY1OTUxMjc3NDg2OTY0NzU3.DiqoSg.7JqNcRu7kQixsEWAe896X34_mSE");
bot.on('ready', function() {
    bot.user.setUsername("Variety-Bot");
    bot.user.setActivity("Fortnite");
});
var prefix = '!';
bot.on('message', (message) => {
    //checks to see if the first character is the token
    if(message.content.charAt(0) == prefix)
    {
        //uses the command after the token to switch
        switch(message.content.substring(1)){
            //rolls a number 1-100
            case "roll":
                var num = Math.floor(Math.random() * 100)+1;
                message.channel.send('rolled ' + num);  
            break;
            //links the user's avatar
            case "avatar":
                var embed = new Discord.RichEmbed()
                .setImage(message.author.avatarURL);
                message.channel.send({embed});
            break;
            case "embed":
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
                        name: "Contributors",
                        value: "Collin Li \nNeel Jain"
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
            //generates a pokemon fusion using 2 random numbers 1-100
            case "pgen":
                var num1 = Math.floor(Math.random() * 151)+1;
                var num2 = Math.floor(Math.random() * 151)+1;
                var embed = new Discord.RichEmbed()
                .setImage('http://images.alexonsager.net/pokemon/fused/' + num1 + '/' + num1 + '.' + num2 + '.png')
                message.channel.send({embed});
            break;
            //sends help info 
            case 'help':
            message.author.send({embed: {
                color: 3447003,
                author: {
                name: message.author.username,
                icon_url: message.author.avatarURL
                },
                title: "Asion's Variety Bot",
                url: "https://github.com/Asionnn/my-Discord-bot",
                description: "List of commands",
                fields: [{
                   name: "General",
                   value:"!roll - rolls a number from 1-100\n!avatar - links your avatar\n!token <symbol> - changes the token to the given symbol\n!neel - special message for neel\n!rohan - special message for rohan\n!alex - special message for alex\n!adam - special message for adam\n",
                },
                {
                    name: "Pokemon section",
                    value: "!pokegen - generates a random pokemon fusion from the first 151 pokemon\n!pfuse <number> <number> - generates a fusion given 2 numbers from the first 493 pokemon",
                },
                {
                    name: "osu! section",
                    value: "!osupic - displays a random user uploaded osu! screenshot\n",
                }
                ],
                timestamp: new Date(),
                footer: {
                icon_url: message.author.avatarURL,
                text: "© Colon"
                }
            }
            }); 
            message.delete(100);
            break;
            case 'neel':
                if(message.author.username === 'Lugh'){
                    message.author.send("You're trash at osu! xDDDD");
                }
                else{
                    message.channel.send("This command can only be used by Neel Jain!!!");
                }
            break;
            case 'rohan':
                if(message.author.username === 'Icy'){
                    message.author.send("You're a fucking bot");
                }
                else{
                    message.channel.send("This command can only be used by Rohan Reddy!!!");
                }
            break;
            case 'alex':
                if(message.author.username === 'Silance'){
                    message.author.send("Your shotgun aim is trash");
                }
                else{
                    message.channel.send("This command can only be used by Alex Rich!!!");
                }
            break;
	        case 'adam':
		        if(message.author.username === 'Runevera'){
		             message.author.send("9 MINIES!!!");
		        }
		        else{
		             message.channel.send("This command can only be used by Adam Rivera!!!");
                }  
            break;
            case 'osupic':
                var num = Math.floor(Math.random() * 1485614)+10000000; 
                var embed = new Discord.RichEmbed()
                .setImage("https://osu.ppy.sh/ss/" + num);
                message.channel.send({embed});
    }//end switch

    //start switch for commands with spaces
    switch(message.content.substring(1,message.content.indexOf(' '))){
        //generates a pokemon fusion using user inputs
        case "pfuse":
            var nums = message.content.substring(message.content.indexOf(' ') + 1);
            var num1 = nums.substring(0, nums.indexOf(' '));
            var num2 = nums.substring(nums.indexOf(' ') + 1);
            var s1 = new String(num1);
            var s2 = new String(num2);
            //makes sure user inputs numbers
            if(s1.length != 0 && s2.length != 0 && s1.charAt(0) <= 57 && s2.charAt(0) <= 57){
                message.reply('http://pokefusion.japeal.com/' + num1 + '/' + num2 + '/0');
            }
            else{
                message.channel.send("Please provide 2 numbers!!!");
            }
        break;
        case "prefix": //prefix is limited to 1 char for now
            var input = message.content.substring(message.content.indexOf(' ') + 1);
            var s = new String(input);
            if(s.length == 1){
                message.channel.send('prefix changed to \"' + input + '\"');
                prefix = input;
            }
            else if(s.length == 0){
                message.channel.send("You can not have an empty prefix!");
            }
            else{
                message.channel.send("Prefixes are limited to one character!\n try again!");
            }
        break;
    } //end switch for switch spaces
    }
  
}); 
