const { igdl } = require('../lib/scrape')

let handler = async (m, { conn, args, usedPrefix, command }) => {
let fs = require('fs')
let wait = fs.readFileSync('./sticker/wait.webp')

  if (!args[0]) throw `uhm.. url nya mana?\n\ncontoh:\n${usedPrefix + command} https://www.instagram.com/p/CQU21b0JKwq/`
  if (!args[0].match(/https:\/\/www.instagram.com\/(p|reel|tv)/gi)) throw `url salah, perintah ini untuk mengunduh post/reel/tv`
conn.fakeReply(m.chat, wait, '0@s.whatsapp.net', '```PLEASE WAIT......```', 'status@broadcast')
  igdl(args[0]).then(async res => {
    let igdl = JSON.stringify(res)
    let json = JSON.parse(igdl)
    //await m.reply(global.wait)
    for (let { downloadUrl, type } of json) {
await conn.sendFile(m.chat, downloadUrl, 'ig' + (type == 'image' ? '.jpg' : '.mp4'), 'Halo Kak Nih Dah Jadi, Terima Kasih Telah Menunggu', m, true, { contextInfo: { forwardingScore: 999, isForwarded: true }})

    }
  })

}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ig|instagram)$/i

handler.limit = true

module.exports = handler