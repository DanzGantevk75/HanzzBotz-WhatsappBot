let handler = m => m

handler.before = async function (m) {
    let user = DATABASE.data.users[m.sender]
    if (m.chat.endsWith('broadcast')) return
    if (user.has != 20 && user.Banneduser) {
        if (new Date() * 1 >= user.haa) {
            await m.reply(`Kamu Telah Terbanned!`)
        }
    }
}

module.exports = handler