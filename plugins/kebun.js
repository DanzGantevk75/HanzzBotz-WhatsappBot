let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
let jagung = global.DATABASE.data.users[m.sender].jagung
let cabai = global.DATABASE.data.users[m.sender].cabai
let wortel = global.DATABASE.data.users[m.sender].wortel
let tomat = global.DATABASE.data.users[m.sender].tomat
let kentang = global.DATABASE.data.users[m.sender].kentang
let padi = global.DATABASE.data.users[m.sender].padi

let zer =`
*◈ SAWAHKU↵♯❜*

*♯⤷   ️🌽 = [ ${jagung} ] Jagung*
*♯⤷   🌶 = [ ${cabai} ] Cabai*
*♯⤷   🥕 = [ ${wortel} ] Wortel*
*♯⤷   🍅 = [ ${tomat} ] Tomat*
*♯⤷  ️ 🥔 = [ ${kentang} ] Kentang*
*♯⤷   ️🍚 = [ ${padi} ] Padi*
 
©Hanzz Botz
 `.trim()
     conn.reply(m.chat, zer, m)
} 
handler.help = ['sawah']
handler.customPrefix = ['.sawah']
handler.command = new RegExp
handler.register = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)