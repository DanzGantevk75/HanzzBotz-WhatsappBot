let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Teksnya', m)

    await m.reply('Searching...')
	axios.get(`https://kuhong-api.herokuapp.com/api/tebakumur?nama=${text}&apikey=DdZM5rnLDjuUg89-8QJ`).then ((res) => {
	 	let hasil = `Namamu : ${text}\nUmurmu : ${res.data.result.umur}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['tebakumur'].map(v => v + ' <nama>')
handler.tags = ['internet']
handler.command = /^(tebakumur)$/i
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
