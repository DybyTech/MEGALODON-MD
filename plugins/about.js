const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: "dev",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `
*╭┈───────────────•*
*𝗁𝗂 𝖽𝖾𝖺𝗋 👋 ${pushname}*
*╰┈───────────────•*
*╭┈───────────────•*
*│  ◦* *ᴄʀᴇᴀᴛᴇᴅ ʙʏ: ᴅʏʙʏ ᴛᴇᴄʜ*
*│  ◦* *ʀᴇᴀʟ ɴᴀᴍᴇ➠ ᴅʏʙʏ*
*│  ◦* *ɴɪᴄᴋɴᴀᴍᴇ➠ ᴅʏʙʏ ᴛᴇᴄʜ*
*│  ◦* *ᴀɢᴇ➠ ❌*
*│  ◦* *ᴄɪᴛʏ➠ Lɪʙʀᴇᴠɪʟʟᴇ*
*│  ◦* *ᴀ ᴘᴀꜱꜱɪᴏɴᴀᴛᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ᴅᴇᴠ*
*╰┈───────────────•*

*[ • ᴍᴇɢᴀʟᴏᴅᴏɴ-ᴍᴅ - ᴘʀᴏᴊᴇᴄᴛ • ]*

*╭┈───────────────•*
*│  ◦* *▢➠ᴅʏʙʏ-ᴛᴇᴄʜ x ᴡᴀsɪ_ᴛᴇᴄʜ*
*│  ◦* *▢➠ᴏɴʟʏ 2 ᴅᴇᴠᴇʟᴏᴘᴇʀs*
*╰┈───────────────•*

*•────────────•⟢*
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅʏʙʏ ᴛᴇᴄʜ*
*•────────────•⟢*
`
await conn.sendMessage(from, {
    image: { url: 'https://files.catbox.moe/vmqovi.jpg' },
    caption: about,
    contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363401051937059@newsletter', // ou ton JID actuel
            newsletterName: '𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐌𝐃',
            serverMessageId: 143
        }
    }
}, { quoted: mek })

}catch(e){
console.log(e)
reply(`${e}`)
}
})
