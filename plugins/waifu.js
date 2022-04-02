let fetch = require('node-fetch')
let fs = require('fs')
let wm = global.wm
let handler = async(m, { conn }) => {
	let wait = fs.readFileSync('./sticker/wait.webp')
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.fakeReply(m.chat, wait, '0@s.whatsapp.net', '```Sedang Diproses......```', 'status@broadcast')
await conn.sendButtonImg(m.chat, json.url, 'Istri kartun', wm, 'Get Again', '.waifu', m)
}
handler.help = ['waifu']
handler.tags = ['internet']
handler.command = /^(waifu)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler
