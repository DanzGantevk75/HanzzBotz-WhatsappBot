let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/salam.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*Kujawab Salammu Bang*', 'status@broadcast')
}
handler.customPrefix = /Assalamualaikum/i
handler.command = new RegExp

module.exports = handler
