let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukkan query!`
  let res = await fetch(global.API('https://hardianto.xyz', '/anime/manga/search', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { title, synopsis, chapters, url, volumes, score, image_url } = json.results[0]
let mangaingfo = `*Title:* ${title}
*Chapters:* ${chapters}
*Volumes:* ${volumes}
*Score:* ${score}
*Synopsis:* ${synopsis}
*Link*: ${url}`
  conn.sendFile(m.chat, image_url, '', mangaingfo, m)
}
handler.help = ['manga <judul>']
handler.tags = ['anime']
handler.command = /^(manga)$/i
module.exports = handler