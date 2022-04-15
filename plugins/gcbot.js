let handler = async m => m.reply(`
*⚠GRUP BOT⚠*
Selain ini fake!!!
https://chat.whatsapp.com/EmCBNEjwdOcHzRlGCXKoxK
`.trim()) // Tambah sendiri kalo mau
handler.help = ['gchanzz']
handler.tags = ['info']
handler.command = /^gchanzz$/i
handler.private = true

module.exports = handler
