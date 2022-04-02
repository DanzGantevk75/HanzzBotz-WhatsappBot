let { WAMessageProto } = require('@adiwajshing/baileys')

let handler = async (m, { conn, command, usedPrefix, text }) => {
    let M = WAMessageProto.WebMessageInfo
    let which = command.replace(/(\+|add)/i, '')
    if (!m.quoted) throw `balas pesan dengan perintah ${usedPrefix + command}`
    if (!text) throw `uhm.. teksnya mana?\n\ncontoh:\n${usedPrefix + command} test`
    let msgs = global.DATABASE.data.msgs
    if (text in msgs) throw `'${text}' telah terdaftar, gunakan nama lain!`
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
    if (DATABASE.data.chats[m.chat].getmsg) return await m.reply(`
berhasil menambahkan pesan dalam daftar pesan sebagai '${text}'

akses langsung dengan mengetik nama
`.trim())
    m.reply(`berhasil menambahkan pesan dalam daftar pesan sebagai '${text}'`)
}
handler.help = ['msg'].map(v => 'add' + v + ' <teks>')
handler.tags = ['database']
handler.command = /^(\+|add)(all|vn|msg|video|audio|img|stic?ker|gif)$/

module.exports = handler
