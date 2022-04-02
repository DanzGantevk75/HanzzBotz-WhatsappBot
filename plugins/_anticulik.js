let handler = async (m, { conn, text }) => {
let wm = global.wm
let chat = `〔 Undang Bot Masuk Grup 〕
15K Untuk Memasukan Bot Ke Group
╭─「 Donasi • Pulsa 」
│ > Gopay: 081387127465
│ > Tsel: 081387127465
│ > Dana: 081387127465
╰────

untuk info harga ketik .sewabot
untuk chat dengan owner ketik .owner
`.trim()
await conn.sendButton(m.chat, chat, wm, 'Nomer Owner', '.owner', m)

}
handler.help = ['.']
handler.tags = ['']
handler.customPrefix = ['https://chat']
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
