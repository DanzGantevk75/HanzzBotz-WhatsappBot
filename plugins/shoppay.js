let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*METODE PEMBAYARAN*

*DANA*
081387127465
Hanzz

*PULSA* 
081387127465
Hanzz

*SHOPEEPAY* 
081387127465
Hanzz



NOTE : PEMBAYARAN TERKENA PAJAK 1RB
`.trim()

conn.fakeReply(m.chat, shoppay, '0@s.whatsapp.net', '*Hanzz Shop*', 'status@broadcast')
}
handler.help = ['shoppay']
handler.tags = ['info']
handler.command = /^(shoppay)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
