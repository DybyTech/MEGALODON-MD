const { getConfig } = require("./lib/configdb");
const fs = require('fs');
const path = require('path');

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || "MEGALODON~MD~dMIzUCjT#8_SPsMDU_J9NT2YebDFuFjSDzIyDT7BAV5Jf0LYynUE",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*sᴛᴀᴛᴜs sᴜᴄᴄᴇssғᴜʟʟʏ ᴠɪᴇᴡᴇᴅ ʙʏ ᴍᴇɢᴀʟᴏᴅᴏɴ-ᴍᴅ*",
// set the auto reply massage on status reply  
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/2ozipw.jpg" ,
// add custom menu and mention reply image url
PREFIX: getConfig("PREFIX") || ".", 
// add your prifix for bot   
OWNER_NAME: getConfig("OWNER_NAME") || "ᴅʏʙʏ ᴛᴇᴄʜ",
// add bot owner name
CHATBOT: getConfig("CHATBOT") || "on", 
//chatbot on/off
BOT_NAME: process.env.BOT_NAME || "MEGALODON-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "MEGALODON-MD",
    
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "50948336180",
// add your bot owner number
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words 
ANTI_BOT: process.env.ANTI_BOT || "true",
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
    // ===== BOT CORE SETTINGS =====
    CHATBOT: getConfig("CHATBOT") || "on",
    //chatbot on/off
  
    SESSION_ID: process.env.SESSION_ID || "MEGALODON-MD~",  // Your bot's session ID (keep it secure)
    
    PREFIX: getConfig("PREFIX") || ".",  // Command prefix (e.g., "., / ! * - +")
    
    BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "MEGALODON-MD",  // Bot's display name
    
    MODE: process.env.MODE || "public",        // Bot mode: public/private/group/inbox

    // ===== OWNER & DEVELOPER SETTINGS =====
    OWNER_NUMBER: process.env.OWNER_NUMBER || "50948336180",  // Owner's WhatsApp number
    
    OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "ADD YOUR NAME",           // Owner's name
    
    DEV: process.env.DEV || "50948336180",                     // Developer's contact number
    
    // ===== AUTO-RESPONSE SETTINGS =====
    
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",// Reply to status updates?
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*MEGALODON BOT VIEWED YOUR STATUS 🤖*",  // Status reply message
    READ_MESSAGE: process.env.READ_MESSAGE || "false",          // Mark messages as read automatically?

    // ===== REACTION & STICKER SETTINGS =====
    AUTO_REACT: process.env.AUTO_REACT || "false",              // Auto-react to messages?
    
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",          // Use custom emoji reactions?
    
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",  // Custom reaction emojis
    
    STICKER_NAME: process.env.STICKER_NAME || "MEGALODON-MD",     // Sticker pack name
   
    
    // ===== MEDIA & AUTOMATION =====
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",      // Auto-record voice notes?
    AUTO_TYPING: process.env.AUTO_TYPING || "false",            // Show typing indicator?
    MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/roubzi.jpg",  // Bot's "alive" image

    // ===== SECURITY & ANTI-FEATURES =====
    ANTI_BOT: process.env.ANTI_BOT || "true",
    //antibot true or false
    ANTI_DELETE: process.env.ANTI_DELETE || "true",
    ANTI_CALL: process.env.ANTI_CALL || "true",
    ANTI_BAD: process.env.ANTI_BAD || "false",                  // Block bad words?
    ANTI_LINK_KICK: process.env.ANTILINK_KICK || "false",
// make anti link true,false for groups 
ANTIVIEW_ONCE: process.env.ANTIVIEW_ONCE || "false",
ANTILINK_WARN: process.env.ANTILINK_WARN || "false",
ANTILINK_KICK: process.env.ANTILINK_KICK || "false",
ANTILINK: process.env.ANTILINK || "false",
    ANTIVIEW_ONCE: process.env.ANTIVIEW_ONCE || "false",
    
   ANTILINK_WARN: process.env.ANTILINK_WARN || "false",
    
     ANTILINK: process.env.ANTILINK || "false",
    
    ANTI_VV: process.env.ANTI_VV || "false",  
    // Block view-once messages?
    DELETE_LINKS: process.env.DELETE_LINKS || "false",  
    // Auto-delete links?
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
    // Log deleted messages (or 'same' to resend)

ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "50948336180",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'inbox' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
    // ===== BOT BEHAVIOR & APPEARANCE =====
   
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",     
    // Allow public commands?
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
    // Show bot as always online?
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
    // React to status updates?
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
    // VIEW to status updates?
    AUTO_BIO: process.env.AUTO_BIO || "false",
    
    WELCOME: process.env.WELCOME || "false",
    
    AMDIN_EVENTS: process.env.ADMIN_EVENTS || "true",
};
