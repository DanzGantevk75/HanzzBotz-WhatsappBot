let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://hardianto.xyz/api/anime/random?nsfw=randomHentaiGif&apikey=hardianto`
  conn.sendFile(m.chat, res, 'hentai.gif', 'Dosa Tanggung Sendiri', m, false, { mimetype: 'video/gif', thumbnail: Buffer.alloc(0) })
}
handler.help = ['hentaigif'].map(v => v + ' ')
handler.tags = ['dewasa']

handler.command = /^(hentaigif)$/i
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

