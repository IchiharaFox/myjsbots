//const utils = require("./utils.js")
//const db = require("quick.db");
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
 
client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  let statuses = [
    { name: `fb.gg/eddxvr`, type: 3 },
];
setInterval(function() {
  let status = statuses[Math.floor(Math.random() * statuses.length)];
  client.user.setPresence({ game: status });
}, 7 * 1000);
});
 
client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});
 
client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});
 
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === '🌵benvinds');
  if (!channel) return;
  member.addRole('648733485485260801')
  const exampleEmbed = new Discord.RichEmbed()
    .setColor('#EB6EE4')
    .setTitle(`${member.user.username} chegou!`)
    .setAuthor(`${member.user.tag}`, `${member.user.avatarURL}`)
    .setDescription(`<:p1:611475697940299806>`)
    .setThumbnail(`${member.user.avatarURL}`)
    .setImage('https://i.redd.it/3lm70vc26kkx.gif')
    .setFooter(`Você foi a ${client.guilds.get("611407141076598785").memberCount}° pessoa a chegar na festa do pijama! :p1:`)
  channel.send({ embed: exampleEmbed });
});
 
client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find(ch => ch.name === '🌵benvinds');
  if (!channel) return;
  const exampleEmbed = new Discord.RichEmbed()
    .setColor('#D44965')
    .setTitle(`${member.user.username} se foi!`)
    .setAuthor(`${member.user.tag}`, `${member.user.avatarURL}`)
    .setDescription('<:p2:611475692877774858>')
    .setThumbnail(`${member.user.avatarURL}`)
    .setImage('https://data.whicdn.com/images/143324336/original.gif')
    .setFooter(`Que pena, uma pessoa foi embora da nossa festa :p2:`)
  channel.send({ embed: exampleEmbed });
});
 
client.on("message", async message => {
    if(message.author.bot) return;
   
 
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
    //let user = message.author;
 
    /*let xp = await db.fetch(`xp_${user.id}`);
    if (xp === null) xp = 0;
    let level = await db.fetch(`level_${user.id}`);
    if (level === null) level = 0;
 
    if(!cooldown.is(user.id)){
        cooldown.add(user.id);
        var add = Math.floor(Math.random() * 15) +10;
        db.add(`xp_${user.id}`, add);
        setTimeout(() => {
            cooldown.remove(user.id);
        }, 1000 *60);
    }
 
    while (xp >= utils.need(level+1)) {
        if (xp >= utils.need(level+1)) {
            db.subtract(`xp_${user.id}`, utils.need(level+1));
            db.add(`level_${user.id}`, 1);
            xp = await db.fetch(`xp_${user.id}`);
            level = await db.fetch(`level${user.id}`);
            let embed = new Discord.RichEmbed()
                .setAuthor("LEVEL UP!")
                .setDescription("Você subiu para o **nível "+ level + "**!")
                .setColor([35, 39, 42]);
            message.channel.send(embed);
        }
    }*/
    if(comando === "say") {
        if(message.member.roles.some(r => ["幸せになる", "BUGABOO"].includes(r.name)) ){
            const sayMessage = args.join(" ");
            message.delete().catch(O_o=>{});
            message.channel.send(sayMessage);
        } else {
            return message.reply("Estou dormindo! (⌒_⌒;");
        }
    }
 
    if(comando === "clear") {
        if(message.member.roles.some(r => ["幸せになる", "BUGABOO"].includes(r.name)) ){
            const deleteCount = parseInt(args[0], 10)
            if(!deleteCount || deleteCount < 2 || deleteCount > 100)
            return message.reply("Por favor digite um número entre 2 e 100 para mensagens que você deseja apagar!")
            const fetched = await message.channel.fetchMessages({limit: deleteCount})
            message.channel.bulkDelete(fetched)
            .catch(error => message.reply(`${error}`))
        } else {
            return message.reply("Estou dormindo! (⌒_⌒;");
        }
      }
 
    if(comando === "convite"){
        await message.author.send(`Prontinho, agora você já pode chamar todo mundo! 💌  \n https://discord.gg/GjaHTf2`);
    }
 
    if(comando === "ping"){
        const m = await message.channel.send("Ping?")
        m.edit(`:milky_way: Ping: ${m.createdTimestamp - message.createdTimestamp}ms`)        
    }    
    if(comando === "mit") {
        await message.author.send(`The MIT License \n \n Copyright © 2019 Helena Corleone \n \n Permissão é concedida, gratuitamente, a qualquer pessoa que obtenha uma cópia deste software e arquivos de documentação \n associados ao "Aquele Bot lá, sabe?", para lidar no Software sem restrições, incluindo, sem limitação, os direitos de \n usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e/ou vender cópias do software e para permitir que pessoas a quem o software esteja \n fornecido para tal, sujeito às seguintes condições: \n \n O aviso de copyright acima e este aviso de permissão devem ser incluídos em todas as cópias ou partes substanciais do software. \n \n **O software é fornecido "COMO ESTÁ", sem garantia de qualquer tipo, expressa ou implícita, incluindo, mas não se limitando às garantias de comercialização, \n adequação a um determinado fim e não violação. Em nenhuma circunstância autores ou detentores dos direitos autorais serão \n responsabilizados por quaisquer reivindicações, danos ou outras responsabilidade, seja uma ação de contrato, delito ou outro, decorrente de, \n fora ou relacionada com o software ou o uso ou outras concessões no software.**`);
    }
   
    if(comando === "avatar") {
        let embed = new Discord.RichEmbed().setImage(message.member.user.avatarURL).setColor('#EB6EE4')
        message.reply(embed)
 
    }
   
    if(comando === "help") {
        message.author.send(`**MEUS COMANDOS**\n\n**!convite** - Receba um convite para o servidor. \n\n**!rank** - Acompanhe o seu rank e nível no servidor. \n\n**!levels** - Veja os 5 usuários mais ativos do servidor. \n\n**!avatar** - Nos mostre o seu avatar ou o avatar de outro usuário que você marcar. \n\n**!ping** - Verifique sua latência com relação ao servidor onde o bot está hospedado.`)
    }
   
});
 
client.login(config.token);
