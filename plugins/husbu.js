let fetch = require('node-fetch')
let wm = global.wm
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://hanzz-web.herokuapp.com/api/randomimage/husbu`
  conn.sendButtonImg(m.chat, res, 'Suami kartun', wm, 'Get Again', '.husbu', m, )
}
handler.help = ['husbu'].map(v => v + ' ')
handler.tags = ['anime']

handler.command = /^(husbu)$/i
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

