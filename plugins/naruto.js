let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*[❗] Wait,Tunggu Bentar Kak Sedang Dalam Proses...*')
  let res = `https://api.zeks.me/api/naruto?apikey=7vQI9VTpgWYYV6q1L9KV427v6ry&text=${response}`
  conn.sendFile(m.chat, res, 'nama.jpg', `Nih Mhank`, m, false)
}
handler.help = ['naruto'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(naruto)$/i
handler.limit = true
handler.register = true

module.exports = handler

//31caf10e4a64e86c1a92bcba
