let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, usedPrefix, DevMode }) => { 
    try { 
        let __timers = (new Date - global.DATABASE._data.users[m.sender].lastlatihan)
        let _timers = (86400000 - __timers)
        let timers = clockString(_timers)
        if (global.DATABASE._data.users[m.sender].healt > 79) {
            if (new Date - global.DATABASE._data.users[m.sender].lastlatihan > 3000000) {
            let __health = (___health > 60 ? ___health - kucingnya - armornya : ___health)
            let healt = (kucing == 0 && armor == 0 ? pickRandom(['100', '99', '98', '97', '96', '95', '94', '93', '92', '91', '90']) : kucing > 0 && armor > 0 ? __health : ___health)
            let _potion = `${Math.floor(Math.random() * 2)}`.trim()
            let potion = (_potion * 1)
            let _ilmu = `${pickRandom(['1', '0', '0', '0'])}`
            let sampah = `${Math.floor(Math.random() * 300)}`.trim()
            let ilmu = (_ilmu * 1)
            let str = `
♥️Nyawa mu berkurang -${healt * 1} karena Kamu telah Berlatih Dari Pagi Hingga Malam
`.trim()
            conn.reply(m.chat, str, m)
            if (mythic > 0) {
                   global.DATABASE._data.users[m.sender].ilmu += ilmu * 1
                   conn.reply(m.chat, '*Selamat anda mendapatkan*\n' + ilmu + ' Ilmu Pedang', m)
            }
            global.DATABASE._data.users[m.sender].healt -= healt * 1
            global.DATABASE._data.users[m.sender].exp += exp * 1
            global.DATABASE._data.users[m.sender].potion += potion * 1
            global.DATABASE._data.users[m.sender].lastlatihan = new Date * 1
            } else conn.reply(m.chat, `Anda sudah latihan dan kelelahan, silahkan coba *${timers}* lagi`, m)
        } else conn.sendButton(m.chat, 'Minimal 80 health♥️ untuk bisa latihan, beli nyawa dulu dengan ketik *' + usedPrefix + 'shop buy potion <jumlah>*\ndan ketik *' + usedPrefix + 'use potion <jumlah>*', `Hanzz Botz`, `Heal`, `.heal`, m)
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Error', m)
        if (DevMode) {
            let file = require.resolve(__filename)
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}
handler.help = ['latihan']
handler.tags = ['rpg']
handler.command = /latihan/i

handler.fail = null

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
