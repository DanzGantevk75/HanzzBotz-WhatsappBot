
let handler = async (m, { conn }) => {
    let user = global.DATABASE._data.users[m.sender]
    let __timers = (new Date - user.lastmining)
    let _timers = (1000000 - __timers)
    let timers = clockString(_timers) 
    let botol = global.wm
    let minom = `${Math.floor(Math.random() * 150)}`.trim()     
    let minim = `${Math.floor(Math.random() * 100)}`.trim() 
    let minam = `${Math.floor(Math.random() * 274)}`.trim() 

   if ( user.axe > 0 ) {
    if (new Date - user.lastnebang > 1000000) {

      global.DATABASE._data.users[m.sender].kayu += minom * 1
      global.DATABASE._data.users[m.sender].exp += minim * 1
      global.DATABASE._data.users[m.sender].money += minam * 1
      global.DATABASE._data.users[m.sender].lastnebang = new Date * 1
            
    m.reply(`Kamu Menebang ${pickRandom(['1','2','3','4','5','6','7','8','9','10'])} Batang Pohon\n*Hasil Nebang:\n* 🪵Kayu: *${minam}*\n🌟Exp: *${minim}*\n💰Money: *${minom}*`)
      } else conn.sendButton( m.chat, `Tunggu ${timers} lagi, untuk menebang`, `${botol}`, `Cek inv`, `.inv`, m)
    } else conn.sendButton( m.chat, `Kamu Tidak Mempunyai *🪓Axe* untuk menambang\nBuat Axe Dengan Menekan Button Dibawah`, `${botol}`, `Craft Axe`, `.craft axe`,m )
  }

handler.help = ['nebang']
handler.tags = ['rpg']
handler.command = /^(nebang)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
