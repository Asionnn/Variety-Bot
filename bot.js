const Discord = require("discord.js");
const bot = new Discord.Client();
const token = require('./auth.json');
const Nodesu = require('nodesu');
const api = new Nodesu.Client(token.osu_api, {
    parseData: true
});


bot.on('ready', function () {
    bot.user.setUsername("Variety-Bot");
    bot.user.setActivity("Fortnite");
});
var prefix = '!';
bot.on('message', (message) => {
    //checks to see if the first character is the token
    if (message.content.charAt(0) == prefix) {
        //uses the command after the token to switch
        switch (message.content.substring(1)) {
            //links the user's avatar
            case "avatar":
                var embed = new Discord.RichEmbed()
                    .setImage(message.author.avatarURL);
                message.channel.send({ embed });
                break;
            //generates a pokemon fusion using 2 random numbers 1-100
            case "pgen":
                var num1 = Math.floor(Math.random() * 151) + 1;
                var num2 = Math.floor(Math.random() * 151) + 1;
                var embed = new Discord.RichEmbed()
                    .setImage('http://images.alexonsager.net/pokemon/fused/' + num1 + '/' + num1 + '.' + num2 + '.png')
                message.channel.send({ embed });
                break;
            //sends help info 
            case 'help':
                message.author.send({
                    embed: {
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
                            value: "!roll <n> - rolls a number from 1-n\n" + 
                            "!avatar - links your avatar\n" + 
                            "!prefix <character> - changes the prefix to the input!\n" +
                            "!neel - special message for neel\n" + 
                            "!rohan - special message for rohan\n" +
                            "!alex - special message for alex\n" + 
                            "!adam - special message for adam\n",
                        },
                        {
                            name: "Pokemon section",
                            value: "!pgen - generates a random pokemon fusion from the first 151 pokemon\n" +
                            "!pfuse <n> <n> - generates a fusion given 2 numbers from the first 493 pokemon\n",
                        },
                        {
                            name: "osu! section",
                            value: "!osupic - displays a random user uploaded osu! screenshot\n" + 
                            "!osu <user> - displays the stats of the user!\n" +
                            "!osubest <user> - displays the user's top 5 pp scores\n",
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
                if (message.author.username === 'Lugh') {
                    message.author.send("You're trash at osu! xDDDD");
                }
                else {
                    message.channel.send("```This command can only be used by Neel Jain!!!```");
                }
                break;
            case 'rohan':
                if (message.author.username === 'Icy') {
                    message.author.send("You're a fucking bot");
                }
                else {
                    message.channel.send("```This command can only be used by Rohan Reddy!!!```");
                }
                break;
            case 'alex':
                if (message.author.username === 'Silance') {
                    message.author.send("Your shotgun aim is trash");
                }
                else {
                    message.channel.send("```This command can only be used by Alex Rich!!!```");
                }
                break;
            case 'adam':
                if (message.author.username === 'Runevera') {
                    message.author.send("9 MINIES!!!");
                }
                else {
                    message.channel.send("```This command can only be used by Adam Rivera!!!```");
                }
                break;
            case 'osupic':
                var num = Math.floor(Math.random() * 1485614) + 10000000;
                var embed = new Discord.RichEmbed()
                    .setImage("https://osu.ppy.sh/ss/" + num);
                message.channel.send({ embed });
                break;
        }//end switch

        //start switch for commands with spaces
        switch (message.content.substring(1, message.content.indexOf(' '))) {
            //generates a pokemon fusion using user inputs
            case "pfuse":
                var nums = message.content.substring(message.content.indexOf(' ') + 1);
                var num1 = nums.substring(0, nums.indexOf(' '));
                var num2 = nums.substring(nums.indexOf(' ') + 1);
                var s1 = new String(num1);
                var s2 = new String(num2);
                //makes sure user inputs numbers
                if (s1.length != 0 && s2.length != 0 && s1.charAt(0) <= 57 && s2.charAt(0) <= 57) {
                    message.reply('http://pokefusion.japeal.com/' + num1 + '/' + num2 + '/0');
                }
                else {
                    message.channel.send("```Please provide 2 numbers!!!```");
                }
                break;
            case "prefix": //prefix is limited to 1 char for now
                var input = message.content.substring(message.content.indexOf(' ') + 1);
                var s = new String(input);
                if (s.length == 1) {
                    message.channel.send('```prefix changed to \"' + input + '\"```');
                    prefix = input;
                }
                else if (s.length == 0) {
                    message.channel.send("```You can not have an empty prefix!```");
                }
                else {
                    message.channel.send("```Prefixes are limited to one character!\n try again!```");
                }
                break;
            //displays stats for the osu user
            case 'osu':
                var osuUser = message.content.substring(message.content.indexOf(' ') + 1);
                var osuString = new String(osuUser);
                if (osuString.length < 16) {
                    api.user.get(osuUser).then(user => {
                        if (user) {
                            message.channel.send({
                                embed: {
                                    color: 0xff00ff,
                                    author: {
                                        name: user.name + "'s stats [" + user.country + "]",
                                        icon_url: "https://puu.sh/B8elv/a46e26ad29.png"
                                    },
                                    //title: user.name + "'s stats",
                                    url: "https://osu.ppy.sh/users/" + user.name,
                                    //description: "Stats",
                                    fields: [{
                                        name: "Profile",
                                        value: "Rank: #" + user.ppRank.toLocaleString() + "\nPP: " + user.pp.toLocaleString() + "\nAccuracy: " + user.accuracy.toFixed(2) + "%\nPlaycount: " + user.playcount.toLocaleString(),
                                    },
                                    {
                                        name: "Score & Ranks",
                                        value: "Total score: " + user.totalScore.toLocaleString() + "\nRanked score: " + user.rankedScore.toLocaleString() + "\nSS-ranks: " + user.countRankSS.toLocaleString() + "\nS-ranks: " + user.countRankS.toLocaleString() + "\nA-ranks: " + user.countRankA.toLocaleString(),
                                    }
                                    ],

                                }
                            });
                        }
                        else {
                            message.channel.send("```User does not exist!```");
                        }
                    });
                }
                else {
                    message.channel.send("```usernames must be 15 characters or less!```")
                }
                break;
            //displays the top scores of the user
            case 'osubest':
                var osuUser = message.content.substring(message.content.indexOf(' ') + 1);
                var osuString = new String(osuUser);
                var bestScores = [];
                var ppValues = [];
                var diffName = [];

                var beatmapIds = [];
                function getIds() {
                    var ids = [];
                    api.user.getBest(osuUser).then(score => {
                        for (var x = 0; x < 5; x++) {
                            ids.push(score[x].beatmapId);
                            ppValues.push(score[x].pp);         
                        }
                    });
                    return ids;
                }
                function getPPValues() {
                    var pp = [];
                    api.user.getBest(osuUser).then(score => {
                        for (var x = 0; x < 5; x++) {
                            pp.push(score[x].pp);        
                        }
                    });
                    return pp;
                }
                beatmapIds = getIds();
                ppValues = getPPValues();
                var count = 0;
                function getScores() {
                    api.beatmaps.getByBeatmapId(beatmapIds[count]).then(s => {
                        bestScores.push(s[0].title);
                        diffName.push(s[0].version);
                    });
                    count++;
                    if (count == 5) {
                        clearInterval(loop);
                        count = 0;
                    }
                }
                var loop = setInterval(getScores, 400);

                setTimeout(function () {
                    var embed = new Discord.RichEmbed()
                        //.setTitle("This is your title, it can hold 256 characters")
                        .setAuthor(osuUser,"https://puu.sh/B8elv/a46e26ad29.png")
                        .setColor(0xff00ff)
                        .setDescription(bestScores[0] + " [" + diffName[0] + "] - " + ppValues[0] + "pp\n"
                            + bestScores[1] + " [" + diffName[1] + "] - " + ppValues[1] + "pp\n"
                            + bestScores[2] + " [" + diffName[2] + "] - " + ppValues[2] + "pp\n"
                            + bestScores[3] + " [" + diffName[3] + "] - " + ppValues[3] + "pp\n"
                            + bestScores[4] + " [" + diffName[4] + "] - " + ppValues[4] + "pp\n")
                        .setFooter("insert something here")
                        .setTimestamp()
                    message.channel.send(embed);
                }, 2500);

                break;
            case 'osutest':
                
                break;
            //rolls number between 1-inpuy
            case 'roll':
                var string = message.content.substring(message.content.indexOf(' ') + 1);
                var num = parseInt(string);
                if (num) {
                    var int = Math.floor(Math.random() * num) + 1;
                    message.channel.send("```Rolled " + int + "!```");
                }
                else {
                    message.channel.send("```Enter a number!```");
                }
                break;
        } //end switch for switch spaces
    }

});
bot.login(token.bot_token); 
