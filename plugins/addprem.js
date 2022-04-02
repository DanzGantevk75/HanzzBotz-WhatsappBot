let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = DATABASE.data.users[who]
    if (!who) throw `tag or mention someone!`
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw `masukan angka untuk berapa hari`
    if (isNaN(txt)) return m.reply(`masukan angka\n\ncontoh:\n${usedPrefix + command} @${m.sender.split`@`[0]} 7`)
    var jumlahHari = 86400000 * txt
    var now = new Date() * 1
    if (now < user.premiumTime) user.premiumTime += jumlahHari
    else user.premiumTime = now + jumlahHari
    user.premium = true
    m.reply(`Berhasil Menambahkan Premium *${user.name}* Untuk ${txt} Hari.\n\ncountdown: ${conn.msToDate(user.premiumTime - now)}`)
}
handler.help = ['addprem [@user] <amount of days>']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)p(rem)?$/i

handler.rowner = true

module.exports = handler