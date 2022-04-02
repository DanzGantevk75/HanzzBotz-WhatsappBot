let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, usedPrefix, DevMode }) => { 
    try { 
        let __timers = (new Date - global.DATABASE._data.users[m.sender].lastkumpuljamur)
        let _timers = (1000000 - __timers) 
        let timers = clockString(_timers)
        if (global.DATABASE._data.users[m.sender].stamina > 90) {
            if (new Date - global.DATABASE._data.users[m.sender].lastkumpuljamur > 300000) {
            let jamur = `${Math.floor(Math.random() * 69)}`.trim()
            let exp = (Math.floor(Math.random() * 400)`.trim()
            let _stamina = ${pickRandom(['100', '99', '98', '97', '96', '95', '94', '93', '92', '91', '90'])}
            let stamina = (_stamina * 1)
            let str = `
*Stamina mu berkurang - ${stamina} karena Kamu telah berpetualang mencari jamur dan mendapatkan *
*🎆exp:* ${exp} *
*🍄jamur:* ${jamur} *
`.trim()
            conn.reply(m.chat, str, m)
            }
            global.DATABASE._data.users[m.sender].stamina -= stamina * 1
            global.DATABASE._data.users[m.sender].exp += exp * 1
            global.DATABASE._data.users[m.sender].jamur += jamur * 1
            global.DATABASE._data.users[m.sender].lastquest = new Date * 1
            } else conn.reply(m.chat, `Anda sudah berpetualang dan kelelahan, silahkan coba *${timers}* lagi`, m)
        } else conn.sendButton(m.chat, 'Minimal 90 Stamina untuk bisa mencari Jamur, beli Energy Drink dulu dengan ketik *' + usedPrefix + 'shop buy energydrink <jumlah>*\ndan ketik *' + usedPrefix + 'use energydrink <jumlah>*', `Hanzz Botz`, `Drink`, `.use energydrink all`, m)
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
handler.help = ['mencarijamur']
handler.tags = ['rpg']
handler.command = /^(mencarijamur)$/i

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
