// Powered by BILLY TECH

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || "MEGALODON~MD~IUxUHQJK#u16XwnXneD1P0sh5W4JBJnb6Tnq68J3_M1NWVhQflv8",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STICKER: process.env.AUTO_STICKER || "true",
 //make true if you want auto sticker   
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY PAPI-BROWN 🤍*",
// set the auto reply massage on status reply  
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/nzc6xk.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || "!",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "PAPI-BROWN ",
// add bot name here for menu
STICKER_NAME: process.env.STICKER_NAME || "Papi Brown",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custom emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// choose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links without removing member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "50932920314",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Billy tech*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ king papi-brown*",
// bot description    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/nzc6xk.jpg",
// image for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> *KING PAPI-BROWN*⚡",
// alive msg content
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// anti bad words  
MODE: process.env.MODE || "public",
// public/private/inbox/group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// kick user if share link 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// auto voice messages
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// auto stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// false if want private mode
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// show typing status   
READ_CMD: process.env.READ_CMD || "false",
// mark commands as read 
DEV: process.env.DEV || "50932920314",
// your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true", 
// anti view once 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// auto recording status 
};
