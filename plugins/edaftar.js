const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Silahkan masukkan namamu', m)
    if (text > 300) return conn.reply(m.chat, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', m)
    var nomor = m.sender
    const teks1 = `*[DAFTAR EVENT]*\nNomor : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nNama Peserta : ${text}`
    conn.sendMessage('6281212083267@s.whatsapp.net', teks1, MessageType.text)
    conn.reply(m.chat, '✔️Kamu Telah Terdaftar Di Event\nMohon Untuk Menunggu Owner Memasukannya Ke List', m)
}
handler.help = ['edaftar <nama>']
handler.tags = ['info']
handler.command = /^edaftar/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
