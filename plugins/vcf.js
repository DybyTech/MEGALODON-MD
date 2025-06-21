const { cmd } = require("../command");

cmd({
  pattern: "vcf",
  alias: ["contacts", "groupvcf"],
  desc: "Generate a VCF file with all group members (Owner only).",
  category: "tools",
  react: "📇",
  filename: __filename
}, async (conn, m, store, { from, isGroup, reply, isOwner }) => {
  try {
    if (!isGroup) return reply("❌ This command can only be used in groups.");
    if (!isOwner) return reply("❌ This command is restricted to the bot owner.");

    await conn.sendMessage(from, { react: { text: "⏳", key: m.key } });

    const metadata = await conn.groupMetadata(from);
    const participants = metadata.participants || [];

    if (participants.length === 0) return reply("❌ No participants found.");

    let vcfContent = "";

    // Limite de sécurité pour éviter les fichiers trop lourds (256 contacts max)
    const maxContacts = 256;
    const slicedParticipants = participants.slice(0, maxContacts);

    for (let i = 0; i < slicedParticipants.length; i++) {
      const p = slicedParticipants[i];
      const number = p.id.split("@")[0];
      const nameFromStore = store.contacts?.[p.id]?.name;
      const notifyName = p?.notify;
      const safeName = (nameFromStore || notifyName || `Contact ${i + 1}`).replace(/[^\w\s\-]/g, "");

      vcfContent += `BEGIN:VCARD
VERSION:3.0
FN:${safeName}
N:${safeName};;;;
TEL;type=CELL;waid=${number}:+${number}
END:VCARD
`;
    }

    // Envoi du fichier VCF
    await conn.sendMessage(from, {
      document: Buffer.from(vcfContent, "utf-8"),
      mimetype: "text/x-vcard",
      fileName: "MEGALODON_MD.vcf"
    });

    await conn.sendMessage(from, { react: { text: "✅", key: m.key } });
    await reply(`✅ VCF file generated with ${slicedParticipants.length} contacts.`);

  } catch (err) {
    console.error("❌ VCF Error:", err);
    await reply("❌ An error occurred while generating the VCF file.");
    await conn.sendMessage(from, { react: { text: "❌", key: m.key } });
  }
});
