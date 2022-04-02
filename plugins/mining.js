
let handler = async (m, { conn }) => {
    let user = global.DATABASE._data.users[m.sender]
    let __timers = (new Date - user.lastmining)
    let _timers = (86400000 - __timers)
    let timers = clockString(_timers) 
    let botol = global.wm
    let minim = `${Math.floor(Math.random() * 100)}`.trim() 
    let minam = `${Math.floor(Math.random() * 274)}`.trim() 
    let minkm = `${Math.floor(Math.random() * 383)}`.trim() 
    let minbm = `${Math.floor(Math.random() * 500)}`.trim() 
    let minom = `${Math.floor(Math.random() * 30)}`.trim() 

   if ( user.pickaxe > 0 ) {
    if (new Date - user.lastmining > 3000000) {

      global.DATABASE._data.users[m.sender].emas += minim * 1
      global.DATABASE._data.users[m.sender].iron += minam * 1
      global.DATABASE._data.users[m.sender].diamond += minom * 1
      global.DATABASE._data.users[m.sender].string += minkm * 1
      global.DATABASE._data.users[m.sender].batu += minbm * 1
      global.DATABASE._data.users[m.sender].lastmining = new Date * 1
            
    m.reply(`Kamu Menambang Di ${pickRandom(['⛰️Lembah', '⛰️Goa mletre', '🏞️Sungai Selandia', '⛰️Goa texas', '...'])}\n*⚒️Hasil Tambang:* 💎Diamond: *${minom}*\n🪙Emas: *${minim}*\n⛓️Besi: *${minam}*\n🕸️String: *${minkm}*\n🪨Batu: *${minbm}*`)
      } else conn.sendButton( m.chat, `Tunggu ${timers} lagi, untuk menambang`, `${botol}`, `Cek inv`, `.inv`, m)
    } else conn.sendButton( m.chat, `Kamu Tidak Mempunyai *⛏️Pickaxe* untuk menambang\nBuat Pickaxe Dengan Menekan Button Dibawah`, `${botol}`, `Craft Pickaxe`, `.craft pickaxe`,m )
  }

handler.help = ['mining']
handler.tags = ['rpg']
handler.command = /^mining/i

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
