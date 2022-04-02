let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./src/masalah.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', 'Nyari Masalah Kau Banh', 'status@broadcast')
}
handler.customPrefix = /.lb 1/i

module.exports = handler
