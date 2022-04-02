let fetch = require('node-fetch')
let fs = require('fs')
let wm = global.wm
let wait = fs.readFileSync('./sticker/wait.webp')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  let res = `https://hardianto.xyz/api/darkmeme?apikey=hardianto`
  conn.fakeReply(m.chat, wait, '0@s.whatsapp.net', '```Sedang Diproses......```', 'status@broadcast')
await conn.sendButtonImg(m.chat, res, `Senter Mana Senter`, wm, 'Get Again', '.darkjokes', m)
}
handler.help = ['darkjokes'].map(v => v + ' ')
handler.tags = ['internet']

handler.command = /^(darkjokes)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

