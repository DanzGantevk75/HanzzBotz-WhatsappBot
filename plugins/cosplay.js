let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn, args }) => {
	let wait = fs.readFileSync('./sticker/wait.webp')
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  let res = `https://hanzz-web.herokuapp.com/api/randomimage/cosplay`
  conn.fakeReply(m.chat, wait, '0@s.whatsapp.net', '```Sedang Diproses......```', 'status@broadcast')
  conn.sendButtonImg(m.chat, res, 'Hu Suka Sama Cosplayer', wm, 'Get Again', '.cosplay', m, )
}
handler.help = ['cosplay'].map(v => v + ' ')
handler.tags = ['anime']

handler.command = /^(cosplay)$/i
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

