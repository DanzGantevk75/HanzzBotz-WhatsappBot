let fetch = require("node-fetch")
let wm = global.wm
let handler = async (m, { conn }) => {
  let res = await fetch(global.API('https://some-random-api.ml', '/meme'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.image) throw 'Err!'
  conn.sendButtonImg(m.chat, json.image, json.caption, wm, 'Get Again', '.meme', m)
}

handler.help = ['meme']
handler.tags = ['internet']

handler.command = /^(meme)$/i

handler.group = false

module.exports = handler
