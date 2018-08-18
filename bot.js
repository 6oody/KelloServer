const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`.Booّdy`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
client.on("message", message => {
    if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
        if(!message.guild.members.get(client.user.id).hasPermission('MANAGE_MESSAGES')) return message.channel.send('**I need Permission \`MANAGE_MESSAGE\`To delete Tokens**')
        message.delete();
        message.reply(`you sent your token! Do not worry you've deleted it`);
        return;
    }
                              if(message.channel.type === "dm"){
    if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
        message.delete();
        message.reply(`you sent your token! Do not worry you've deleted it`);
        return;
    }
}
});
client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = "K";
  let messageArray = message.content.split (" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);




  if(cmd === `${prefix}report`){



  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("لم اجد العضو");
  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Reports")
  .setColor("#15f153")
  .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
  .addField("Reported by", `${message.author} with ID: ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", reason);

 let reportschannel = message.guild.channels.find("name", "reports");
 if(!reportschannel) return message.channel.send("لم اجد روم الريبورتات");


 message.delete().catch(O_o=> {});
 reportschannel.send(reportEmbed);
}
  });
client.on("message", async message => {
  if(message.author.client) return;
  if(message.channel.type === "dm") return;

  var prefix = "K";
  let messageArray = message.content.split (" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);



    if(cmd === `${prefix}kick`){



      let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!kUser) return message.channel.send("Can't find the user!");
      let kReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("No you don't have permission to use the command");
      if(kUser.hasPermission("MANAGE_CHANNELS")) return message.channel.send("That person can't be kicked because he is in the mods")

      let kickEmbed = new Discord.RichEmbed()
      .setDescription("~Kick~")
      .setColor("#e56b00")
      .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
      .addField("Kicked By", `<@${message.author.id}> with the id ${message.author.id}`)
      .addField("Kicked In", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", kReason);

      let kickChannel = message.guild.channels.find('name', 'kick-ban');
      if(!kickChannel) return message.channel.send("Cannot find kick-ban channel.");

      message.guild.member(kUser).kick(kReason)
      kickChannel.send(kickEmbed);
    }
    });
client.on("message", async message => {
      if(message.author.client) return;
      if(message.channel.type === "dm") return;

      var prefix = "K";
      let messageArray = message.content.split (" ");
      let cmd = messageArray[0];
      let args = messageArray.slice(1);



        if(cmd === `${prefix}ban`){



          let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
          if(!bUser) return message.channel.send("Can't find the user!");
          let bReason = args.join(" ").slice(22);
          if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("No you don't have permission to use the command");
          if(bUser.hasPermission("MANAGE_CHANNELS")) return message.channel.send("That person can't be banned because he is in the mods")

          let banEmbed = new Discord.RichEmbed()
          .setDescription("~Ban~")
          .setColor("#e56b00")
          .addField("Banned user", `${bUser} with ID ${bUser.id}`)
          .addField("Banned by", `<@${message.author.id}> with the id ${message.author.id}`)
          .addField("Banned In", message.channel)
          .addField("Time", message.createdAt)
          .addField("Reason", bReason);

          let kickChannel = message.guild.channels.find('name', 'kick-ban');
          if(!kickChannel) return message.channel.send("Cannot find kick-ban channel.");

          message.guild.member(bUser).ban(bReason)
          kickChannel.send(banEmbed);
        }
        });
 hero.on('message',async message => {
  function timeCon(time) {
  let days = Math.floor(time % 31536000 / 86400);
  let hours = Math.floor(time % 31536000 % 86400 / 3600);
  let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60);
  let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60);
  days = days > 9 ? days : '0' + days;
  hours = hours > 9 ? hours : '0' + hours;
  minutes = minutes > 9 ? minutes : '0' + minutes;
  seconds = seconds > 9 ? seconds : '0' + seconds;
  return `${days > 0 ? `${days} Days ` : ''}${(hours || days) > 0 ? `${hours} Hours ` : ''}${minutes} Mins ${seconds} Secs`;
  }
  
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  if(message.content.startsWith(K + "bot")) {
    let ramUsage = (process.memoryUsage().rss / 1048576).toFixed();
    let upTime = timeCon(process.uptime());
    let createdAt = moment(hero.user.createdAt).fromNow();

let m = await message.channel.send(`\`\`\`asciidoc\n= Normal Information =
Creator :: ${hero.users.get("323885452207587329").username} - ${createdAt}
Ping :: ${hero.pings[0]} ms
UpTime :: ${upTime}

= Servers Information =
Servers :: ${hero.guilds.size}
Users :: ${hero.users.size}
Channels :: ${hero.channels.size}

= Developer Information =
NodeJS :: ${process.version}
DiscordJS :: ${Discord.version}
Arch :: ${process.arch}
Platform :: ${process.platform}

= Host Information =
UsedHeap :: ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100} MB
Heap :: ${Math.round(process.memoryUsage().heapTotal / 1024 / 1024 * 100) / 100} MB
Ram :: ${ramUsage} MB
Rss :: ${Math.round(process.memoryUsage().rss / 1024 / 1024 * 100) / 100} MB
\`\`\``);
  }
});
client.login(process.env.BOT_TOKEN);
