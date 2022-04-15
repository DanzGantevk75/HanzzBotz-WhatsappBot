let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*BOT Ini Menggunakan SC Dari : https://github.com/Nurutomo/wabot-aq
Lalu Di Recode Oleh
@6288270863279 (Danzz)
@6281212083267 (Hanzz)
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '🔥 *Sc By Danzz* 🔥', 'status@broadcast')
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
 
