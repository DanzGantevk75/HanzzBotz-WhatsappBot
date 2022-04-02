let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
let apel = global.DATABASE.data.users[m.sender].apel
let jeruk = global.DATABASE.data.users[m.sender].jeruk
let mangga = global.DATABASE.data.users[m.sender].mangga
let anggur = global.DATABASE.data.users[m.sender].anggur
let pisang = global.DATABASE.data.users[m.sender].pisang

let zer =`
*◈ KEBUNKU↵♯❜*

*♯⤷   ️🍎 = [ ${apel} ] Apel*
*♯⤷   🍊 = [ ${jeruk} ] Jeruk*
*♯⤷   🍐 = [ ${mangga} ] Mangga*
*♯⤷  ️ 🍇 = [ ${anggur} ] Anggur*
*♯⤷   ️🍌 = [ ${pisang} ] Pisang*
 
©Hanzz Botz
 `.trim()
     conn.reply(m.chat, zer, m)
} 
handler.help = ['kebun']
handler.customPrefix = ['.kebun']
handler.command = new RegExp
handler.register = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)