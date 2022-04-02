let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
let syappa = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  if (!text) throw `Masukkan query!`
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/character', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { name, alternative_names, url, image_url } = json.results[0]
let charaingfo = `*Name:* ${name}
*Nickname:* ${alternative_names}
*Link*: ${url}`
  conn.sendButtonImg(m.chat, image_url, charaingfo, wm, 'Lamar', `.tembakk ${name}`, m, { contextInfo: { mentionedJid: [syappa] }})
  
}
handler.help = ['character <nama>']
handler.tags = ['anime']
handler.command = /^(chara|character)$/i
//kyaa jangan biarkan wabot-aq terbengkalai sampai nurutomo kembali
module.exports = handler
