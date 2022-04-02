let fetch = require('node-fetch')
let wm = global.wm
let fs = require('fs')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://hanzz-web.herokuapp.com/api/randomimage/milf`
  conn.sendButtonImg(m.chat, res,`Nih Kak`, wm, 'Get Again', '.milf', m, false)
}
handler.help = ['milf'].map(v => v + ' ')
handler.tags = ['anime']

handler.command = /^(milf)$/i
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

