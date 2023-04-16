const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
    config: {
        name: "invite",
        aliases: [],
        kategori: "diger",
        description: "Botun Davet Linki .",
    },
    run: async (client, message, args) => {
        const embed = new EmbedBuilder()
        .setColor("#000001")
        .setAuthor({ name: "Davet!"})
        .setDescription("```Beni Sunucuna Ekle!```")
        .setTimestamp()
        .setFooter({ text: `${message.author.tag} Tarafından Kullanıldı.`, iconURL: message.author.displayAvatarURL()});

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel("Davet Linkim")
                    .setURL(`https://discord.com/api/oauth2/authorize?client_id=1094229099792310364&permissions=8&scope=bot`)
                    .setEmoji("🔗")
                    .setStyle(ButtonStyle.Link)
            )
        
        message.channel.send({ embeds: [embed], components: [row] });
    }
}

