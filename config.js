// Powered by Sohail

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || "put your session id here",
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "true",
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY MEGALODON-MD 🤍*",
WELCOME: process.env.WELCOME || "true",
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_DELETE: process.env.ANTI_DELETE || "true",
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
MENTION_REPLY: process.env.MENTION_REPLY || "false",
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/frns4k.jpg",
PREFIX: process.env.PREFIX || ".",
BOT_NAME: process.env.BOT_NAME || "𝐌𝐄𝐆𝐀𝐋𝐎𝐃𝐎𝐍-𝐌𝐃",
STICKER_NAME: process.env.STICKER_NAME || "put your name",
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
DELETE_LINKS: process.env.DELETE_LINKS || "false",
OWNER_NUMBER: process.env.OWNER_NUMBER || "50948702213",
OWNER_NAME: process.env.OWNER_NAME || "ᴅʏʙʏ ᴛᴇᴄʜ",
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴇɢᴀʟᴏᴅᴏɴ ᴍᴅ*",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/rful77.jpg",
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *MEGALODON-MD*⚡",
READ_MESSAGE: process.env.READ_MESSAGE || "false",
AUTO_REACT: process.env.AUTO_REACT || "false",
ANTI_BAD: process.env.ANTI_BAD || "false",
MODE: process.env.MODE || "public",
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
READ_CMD: process.env.READ_CMD || "false",
DEV: process.env.DEV || "50934960331",
ANTI_VV: process.env.ANTI_VV || "true",
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log",
AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
ANTI_STICKER: process.env.ANTI_STICKER || "false",
ANTI_STICKER_ACTION: process.env.ANTI_STICKER_ACTION || "warn",
ANTI_STICKER_MSG: process.env.ANTI_STICKER_MSG || "⚠️ Stickers are not allowed here!",
ANTI_STICKER_GROUPS_ONLY: process.env.ANTI_STICKER_GROUPS_ONLY || "true"
};
