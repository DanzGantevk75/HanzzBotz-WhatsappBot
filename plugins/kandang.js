let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => { 
  let banteng = global.DATABASE.data.users[m.sender].banteng
  let harimau = global.DATABASE.data.users[m.sender].harimau
 let gajah = global.DATABASE.data.users[m.sender].gajah
let kambing = global.DATABASE.data.users[m.sender].kambing
let panda = global.DATABASE.data.users[m.sender].panda
 let buaya = global.DATABASE.data.users[m.sender].buaya
 let kerbau = global.DATABASE.data.users[m.sender].kerbau
let sapi = global.DATABASE.data.users[m.sender].sapi
 let monyet = global.DATABASE.data.users[m.sender].monyet
 let babihutan = global.DATABASE.data.users[m.sender].babihutan
 let babi = global.DATABASE.data.users[m.sender].babi
 let ayam = global.DATABASE.data.users[m.sender].ayam

let zer = `
*â¤· KANDANG ð¾ âµâ¯â*
    
 *â¯â¤·   ï¸ ð = [ ${banteng} ] Ekor Banteng*
 *â¯â¤·   ï¸ ð = [ ${harimau} ] Ekor Harimau*
 *â¯â¤·   ï¸ ð = [ ${gajah} ] Ekor Gajah*
 *â¯â¤·   ï¸ ð = [ ${kambing} ] Ekor Kambing*
 *â¯â¤·   ï¸ ð¼ = [ ${panda} ] Ekor Panda*
 *â¯â¤·   ï¸ ð = [ ${buaya} ] Ekor Buaya*
 *â¯â¤·   ï¸ ð = [ ${kerbau} ] Ekor Kerbau*
 *â¯â¤·   ï¸ ð® = [ ${sapi} ] Ekor Sapi*
 *â¯â¤·   ï¸ ð = [ ${monyet} ] Ekor Monyet*
 *â¯â¤·   ï¸ ð = [ ${babihutan} ] Ekor Babi Hutan*
 *â¯â¤·   ï¸ ð = [ ${babi} ] Ekor Babi*
 *â¯â¤·   ï¸ ð = [ ${ayam} ] Ekor Ayam*
 
Â©Hanzz Botz
 `.trim()
     conn.reply(m.chat, zer, m)
} 
handler.help = ['kandang']
handler.customPrefix = ['kandang']
handler.command = new RegExp
handler.register = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)