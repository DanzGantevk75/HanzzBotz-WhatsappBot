let limit = 50
const { servers, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, args, isPrems, isOwner }) => {
let fs = require('fs')
let wait = fs.readFileSync('./sticker/wait.webp')
conn.fakeReply(m.chat, wait, '0@s.whatsapp.net', '```Sedang Diproses......```', 'status@broadcast')
  if (!args || !args[0]) throw 'Uhm... urlnya mana?'
  let server = (args[1] || 'id4').toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF } = await ytv(args[0], servers.includes(server) ? server : 'id4')
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
╭─「 YTMP4 」
│ *Data Berhasil Didapatkan!*
│\`\`\`▢ Title : ${title}\`\`\`
│\`\`\`▢ Ext : MP4\`\`\`
│\`\`\`▢ Filesize : ${filesizeF}\`\`\`
│\`\`\`▢ Link : ${dl_link}\`\`\`
│ _Untuk durasi lebih dari batas disajikan dalam bentuk link_ 
╰────

`.trim(), m)
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp4', `
╭─「 YTMP4 」
│ *Data Berhasil Didapatkan!*
│\`\`\`▢ Title : ${title}\`\`\`
│\`\`\`▢ Ext : MP4\`\`\`
│\`\`\`▢ Filesize : ${filesizeF}\`\`\`
│ _Terima Kasih Telah Menunggu_
╰────
`.trim(), m)
}
handler.help = ['mp4','v',''].map(v => 'yt' + v + ' <url>')
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler

