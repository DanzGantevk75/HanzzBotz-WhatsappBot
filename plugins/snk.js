let handler = async m => m.reply(`
「 PERATURAN BOT 」*

1. DILARANG TELFON BOT!!
2. DILARANG SPAM BOT
3. DILARANG BERKATA KASAR
4. DILARANG SPAM VIRTEX
5. DILARANG TELEFON OWNER
6. DILARANG SPAM GROUP
7. DILARANG SPAM ADMIN
8. DILARANG BERKATA KASAR DI GC

⚠️JIKA KALIAN MELANGGAR.. AKAN DI BLOCK + BANNED!!
`.trim()) // Tambah sendiri kalo mau
handler.help = ['snk']
handler.tags = ['info']
handler.command = /^snk/i
handler.rowner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
