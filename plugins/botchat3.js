let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./src/ehe.mp3')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', 'Ehe Kepala Bapak Kau', 'status@broadcast')
}
handler.customPrefix = /hehehe/i

module.exports = handler
