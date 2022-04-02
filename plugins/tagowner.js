let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
    let ext = `
Halo Kak ${tag}, Ada Perlu Apa Tag Owner Ku?,
Mau Tanya Soal Apa?
`.trim()
    await conn.send2Button(m.chat, ext.trim(), 'Hanzz Botz By Hanzz-kun', 'Sewa Bot?', '.sewabot', 'Bug?', '.bug Ada Sesuatu bug Yang dilaporkan',m)
    
}
handler.customPrefix = /@6281212083267/i
handler.command = new RegExp

handler.fail = null

module.exports = handler
