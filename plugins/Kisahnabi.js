let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Nama Nabi nya', m)

	axios.get(`https://hardianto.xyz/api/muslim/kisahnabi?nabi=${response}&apikey=hardianto`)
	 	let hasil = `${res.data.result.kisah}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['kisah|kisah nabi|nabi'].map(v => v + ' <nama nabi>')
handler.tags = ['islam']
handler.command = /^(kisah|kisah nabi|nabi)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
