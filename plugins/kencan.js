let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
   conn.kencan = conn.kencan ? conn.kencan : {}
    if (m.chat in conn.kencan) return m.reply ('Masih Ada Yang Kencan Disini, Tunggu Sampai Selesai!!')
    else conn.kencan[m.chat] = true
    try {
let pacar = global.DATABASE.data.users[m.sender].kareshi
let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
let randomkamu = `${Math.floor(Math.random() * 51)}`.trim() // Biar Susah Menang :v
let Aku = (randomaku * 1)
let Kamu = (randomkamu * 1)
        if (global.DATABASE._data.users[m.sender].money >= 30) {
            global.DATABASE._data.users[m.sender].cinta -= 30
m.reply(`Kamu Mengajak ${pacar} Berkencan`) //Kwkwwkkwlwlw
if (Aku > Kamu) {
     global.DATABASE._data.users[m.sender].cinta-=30
     m.reply(`${pacar} Tidak Mau Karena Dia Sedang Sibuk\n- 30 Poin Cinta`)
} else if (Aku < Kamu) {
     global.DATABASE._data.users[m.sender].cinta+=30
     m.reply(`Kamu Berhasil Berkencan Dengan ${pacar}\n+ 30 Poin Cinta`)
} else {
     global.DATABASE._data.users[m.sender].cinta+=15
     m.reply(`Kamu Berkencan Dengan ${pacar} Namun Dia Tidak Suka Ditempat Ini\n+15 Poin Cinta`)
            }
        } else conn.sendButton(m.chat, `Uang Kamu Tidak Cukup Untuk Melakukan Judi Sebesar Money`.trim(), 'Silahkan Claim Untuk Mendapatkan Beberapa Money', 'Claim', '.claim', m)
    } catch (e) {
        console.log(e)
        m.reply('Error!!')
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'Judi.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    } finally {
        delete conn.kencan[m.chat]
    }
}
      
handler.help = ['jljl']
handler.command = /^(jljl)$/i

handler.fail = null

module.exports = handler
