const { getConfig } = require("./lib/configdb");
const fs = require('fs');
const path = require('path');

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ===== BOT CORE SETTINGS =====
    CHATBOT: getConfig("CHATBOT") || "on",
    //chatbot on/off
  
    SESSION_ID: process.env.SESSION_ID || "MEGALODON~MD~EA5VjTgT#vll5mbZXasFLNhec788V4Tgh2_5wG7m6Cdn-u8MZzt4",  // Your bot's session ID (keep it secure)
    
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
    
     ANTILINK: process.env.ANTILINK || "false",
    
    ANTI_VV: process.env.ANTI_VV || "false",  
    // Block view-once messages?
    DELETE_LINKS: process.env.DELETE_LINKS || "false",  
    // Auto-delete links?
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
    // Log deleted messages (or 'same' to resend)

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
