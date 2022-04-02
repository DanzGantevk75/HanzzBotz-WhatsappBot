let handler = (m, { text }) => {
let pacar = global.DATABASE.data.users[m.sender].kareshi
let wm = global.wm
let gg = `
Kamu Mau Ngapain ${pacar}?
`.trim()
if (global.DATABASE.data.users[m.sender].cinta < 40) return conn.reply(m.chat, 'Kamu Belom Punya Pacar!', m)
conn.sendButton(m.chat, gg, wm, 'Kencan', '.jljl', m)
}
handler.help = ['tembak']
handler.command = /^actionn$/i

module.exports = handler
