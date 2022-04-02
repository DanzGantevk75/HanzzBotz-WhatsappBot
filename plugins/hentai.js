let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://hardianto.xyz/api/anime/random?nsfw=hentai&apikey=hardianto`
  conn.sendFile(m.chat, res, 'hentai.jpg', `Dosa Tanggung Sendiri`, m, false)
}
handler.help = ['hentai'].map(v => v + ' ')
handler.tags = ['dewasa']

handler.command = /^(hentai)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

