let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/Sesat.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*Huu*', 'status@broadcast')
}
handler.customPrefix = /^(Karena Direm)$/i
handler.command = new RegExp

module.exports = handler
