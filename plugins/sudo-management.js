const fs = require("fs");
const path = require("path");
const { cmd } = require("../command");

const OWNER_PATH = path.join(__dirname, "../lib/sudo.json");

const ensureOwnerFile = () => {
  if (!fs.existsSync(OWNER_PATH)) {
    fs.writeFileSync(OWNER_PATH, JSON.stringify([]));
  }
};
ensureOwnerFile();

const getOwners = () => JSON.parse(fs.readFileSync(OWNER_PATH, "utf-8"));
const saveOwners = (owners) => fs.writeFileSync(OWNER_PATH, JSON.stringify([...new Set(owners)], null, 2));

const getTargetUser = (m, args) => {
  const raw =
    m.mentionedJid?.[0] ||
    m.quoted?.sender ||
    (args[0]?.replace(/[^0-9]/g, "") || null);

  if (!raw) return null;
  return raw.endsWith("@s.whatsapp.net") ? raw : raw + "@s.whatsapp.net";
};

// 📌 setsudo: Ajouter un owner temporaire
cmd({
  pattern: "setsudo",
  alias: ["addsudo", "addowner"],
  desc: "Add a temporary owner",
  category: "owner",
  react: "😇",
  filename: __filename
}, async (conn, mek, m, { from, args, isCreator, reply }) => {
  if (!isCreator) return reply("_❗ ᴏɴʟʏ ᴛʜᴇ ʙᴏᴛ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ._");

  const target = getTargetUser(m, args);
  if (!target) return reply("❌ ᴘʟᴇᴀsᴇ ᴛᴀɢ, ʀᴇᴘʟʏ ᴏʀ ᴇɴᴛᴇʀ ᴀ ᴠᴀʟɪᴅ ɴᴜᴍʙᴇʀ.");

  const owners = getOwners();
  if (owners.includes(target)) {
    return reply("⚠️ ᴛʜɪs ᴜsᴇʀ ɪs ᴀʟʀᴇᴀᴅʏ ᴀ sᴜᴅᴏ ᴏᴡɴᴇʀ.");
  }

  saveOwners([...owners, target]);

  await reply(`✅ ᴀᴅᴅᴇᴅ @${target.replace(/@s\.whatsapp\.net$/, "")} ᴀs sᴜᴅᴏ ᴏᴡɴᴇʀ.`);
});

// 📌 delsudo: Supprimer un owner temporaire
cmd({
  pattern: "delsudo",
  alias: ["delowner", "deletesudo"],
  desc: "Remove a temporary owner",
  category: "owner",
  react: "🫩",
  filename: __filename
}, async (conn, mek, m, { from, args, isCreator, reply }) => {
  if (!isCreator) return reply("_❗ ᴏɴʟʏ ᴛʜᴇ ʙᴏᴛ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ._");

  const target = getTargetUser(m, args);
  if (!target) return reply("❌ ᴘʟᴇᴀsᴇ ᴛᴀɢ, ʀᴇᴘʟʏ ᴏʀ ᴇɴᴛᴇʀ ᴀ ᴠᴀʟɪᴅ ɴᴜᴍʙᴇʀ.");

  const owners = getOwners();
  if (!owners.includes(target)) {
    return reply("⚠️ ᴛʜɪs ᴜsᴇʀ ɪs ɴᴏᴛ ᴀ sᴜᴅᴏ ᴏᴡɴᴇʀ.");
  }

  saveOwners(owners.filter(x => x !== target));

  await reply(`✅ ʀᴇᴍᴏᴠᴇᴅ @${target.replace(/@s\.whatsapp\.net$/, "")} ғʀᴏᴍ sᴜᴅᴏ ᴏᴡɴᴇʀs.`);
});

// 📌 listsudo: Liste des owners temporaires
cmd({
  pattern: "getsudo",
  alias: ["listowner"],
  desc: "List all temporary owners",
  category: "owner",
  react: "📋",
  filename: __filename
}, async (conn, mek, m, { from, isCreator, reply }) => {
  if (!isCreator) return reply("_❗ ᴏɴʟʏ ᴛʜᴇ ʙᴏᴛ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ._");

  const owners = getOwners();

  if (owners.length === 0) {
    return reply("📭 No sudo owners found.");
  }

  const list = owners.map((id, i) => `${i + 1}. @${id.replace(/@s\.whatsapp\.net$/, "")}`).join("\n");

  await conn.sendMessage(from, {
    image: { url: "https://files.catbox.moe/ot6rrc.jpg" },
    caption: `🤴 *ʟɪsᴛ ᴏғ sᴜᴅᴏ ᴏᴡɴᴇʀs:*\n\n${list}`,
    mentions: owners
  }, { quoted: mek });
});
