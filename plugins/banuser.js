let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = DATABASE.data.users[who]
    if (!who) throw `Siapa Yang Mau Dibanned?`
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw `masukan angka untuk berapa hari`
    if (isNaN(txt)) return m.reply(`Masukan angka\n\ncontoh:\n${usedPrefix + command} @${m.sender.split`@`[0]} 7`)
    var jumlahHari = 86400000 * txt
    var now = new Date() * 1
    if (now < user.BannedTime) user.BannedTime += jumlahHari
    else user.BannedTime = now + jumlahHari
    user.Banneduser = true
    user.haa = 20
    m.reply(`Berhasil Menambahkan Ke List Banned *${user.name}* Selama ${txt} Hari.\n\ncountdown: ${conn.msToDate(user.BannedTime - now)}`)
}
handler.help = ['banuser [@user] <amount of days>']
handler.tags = ['owner']
handler.command = /^(ban|banuser)$/i

handler.rowner = true

module.exports = handler