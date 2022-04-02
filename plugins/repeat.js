let handler = async (m, { conn, text }) => {
	
    if (!text) return conn.reply(m.chat, 'Harap Masukan Teks yang akan direpeat!', m)
     if (!text2) return conn.reply(m.chat, 'Harap Masukan jumlah yang akan direpeat!', m)
    
	axios.get(`https://hanzz-web.herokuapp.com/api/repeat?text=${text}&jumlah=${text2}&apikey=HanzzGanz`).then ((res) => {
    let hasil = `${res.data.result}`

    conn.reply(m.chat, hasil, m)
}
handler.help = ['repeat <teks>']
handler.tags = ['tools']
handler.command = /^(repeat)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
