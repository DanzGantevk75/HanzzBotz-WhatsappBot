let handler = async(m, { conn, args, usedPrefix }) => {

    if (args.length == 0) return conn.reply(m.chat, `Harap masukan Kode FreeGiftmu!`, m)
    if (args[0] == '131' || args[0] == 'HanzzGanz') {

    if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 86400000) {
       conn.reply(m.chat, '*SELAMAT!*\n\nKamu telah mendapatkan\n1000 XP & 5 Limit!', m)
    global.DATABASE._data.users[m.sender].exp += 10000
    global.DATABASE._data.users[m.sender].limit += 10
    global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
} else conn.reply(m.chat, 'Kode Gift Gratis hanya dapat digunakan sehari sekali!\n\nKetik !buygift untuk menbeli kodegift premium', m)
   } else {
        conn.reply(m.chat, `*「 KODE FREE TIDAK VALID 」*\n\nSilahkan daftar terlebih dahulu untuk mendapatkan kodegift gratis!\n\nKetik !daftar namamu|umurmu`, m)
    }
}
handler.help = ['vipgift <kode>']
handler.tags = ['hadiah']
handler.command = /^(vipgift)$/i
handler.premium = true 

module.exports = handler
