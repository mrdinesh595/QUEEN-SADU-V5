cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `*👋 Hello ${pushname}*

*╭─「 ᴄᴏᴍᴍᴀɴᴅ ᴘᴀɴᴇʟ 」*
*│◈ ʀᴜɴᴛɪᴍᴇ :* ${runtime(process.uptime())}
*│◈ ʀᴀᴍ ᴜꜱᴀɢᴇ :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*╰──────────●●►*
*╭────────*
*│
*│ 1   OWNER*
*│ 2   CONVERT*
*│ 3   AI*
*│ 4   SEARCH*
*│ 5   DOWNLOAD*
*│ 6   FUN*
*│ 7   MAIN*
*│ 8   GROUP*
*│ 9   OTHER*
*╰─────────

> *𝐐𝐔𝐄𝐄𝐍 𝐒𝐀𝐃𝐔 𝐌𝐃*`;


        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/mrdinesh595/Mssadu/raw/refs/heads/main/database/menu.mp3' },
            mimetype: 'audio/mp4', // Corrected mime type
            ptt: true
        }, { quoted: mek });

        const vv = await conn.sendMessage(from, { image: { url: "https://i.postimg.cc/xdMvP3XZ/In-Shot-20241222-002123636.jpg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`*◈╾──OWNER MENU──╼◈*

╭────────●●►
│ 🎀 *restart* 
╰──────────────────●●►

> *𝐐𝐔𝐄𝐄𝐍 𝐒𝐀𝐃𝐔 𝐌𝐃*`);
                        break;
                    case '2':               
                        reply(`*◈╾──CONVERT MENU──╼◈*

╭────────●●►
│ 🎀 *convert* 
╰──────────────────●●►

> *𝐐𝐔𝐄𝐄𝐍 𝐒𝐀𝐃𝐔 𝐌𝐃*`);
                        break;
                    case '3':               
                        reply(`*◈╾──AI MENU──╼◈*

╭────────●●►
│ 🎀 *ai* 
╰──────────────────●●►

> *𝐐𝐔𝐄𝐄𝐍 𝐒𝐀𝐃𝐔 𝐌𝐃*`);
                        break;
                    case '4':               
                        reply(`*◈╾──SEARCH MENU──╼◈*

╭────────●●►
│ 🎀 *yts* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *srepo* 
╰──────────────────●●►

> *𝐐𝐔𝐄𝐄𝐍 𝐒𝐀𝐃𝐔 𝐌𝐃*`);
                        break;
                    case '5':               
                        reply(`*◈╾──DOWNLOAD MENU──╼◈*

╭────────●●►
│ 🎀 *apk* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *twitter* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *gdrive* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *mediafire* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *fb* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *ig* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *movie* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *song* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *video* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *play/yt* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *song2* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *video2* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *tiktok* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *img* 
╰──────────────────●●►

> *𝐐𝐔𝐄𝐄𝐍 𝐒𝐀𝐃𝐔 𝐌𝐃*`);
                        break;
                    case '7':               
                        reply(`*◈╾──MAIN MENU──╼◈*

╭────────●●►
│ 🎀 *alive* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *about* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *menu* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *allmenu* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *support* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *system* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *ping* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *runtime* 
╰──────────────────●●►

> *𝐐𝐔𝐄𝐄𝐍 𝐒𝐀𝐃𝐔 𝐌𝐃*`);
                        break;
                    case '8':               
                        reply(`*◈╾──GROUP MENU──╼◈*

╭────────●●►
│ 🎀 *promote* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *demote* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *kick* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *add* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *admins* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *tagall* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *getpic* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *setwelcome* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *setgoodbye* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *admins* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *gname* 
╰──────────────────●●►

> *𝐐𝐔𝐄𝐄𝐍 𝐒𝐀𝐃𝐔 𝐌𝐃*`);
                       break;
                    case '6':               
                        reply(`*◈╾──FUN MENU──╼◈*

╭────────●●►
│ 🎀 *dog* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *fact* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *hack* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *quote* 
╰──────────────────●●►

> *𝐐𝐔𝐄𝐄𝐍 𝐒𝐀𝐃𝐔 𝐌𝐃*`);

                        break;
                    case '9':               
                        reply(`*◈╾──OTHER MENU──╼◈*

╭────────●●►
│ 🎀 *githubstalk* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *trt* 
╰──────────────────●●►
╭────────●●►
│ 🎀 *weather* 
╰──────────────────●●►

> *𝐐𝐔𝐄𝐄𝐍 𝐒𝐀𝐃𝐔 𝐌𝐃*`);


                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
