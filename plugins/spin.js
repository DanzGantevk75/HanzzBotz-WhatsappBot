/*
* THX TO
* Allah SWT
* Ortu
* RESTU
* RIZXYU
*/
let { MessageType } = require('@adiwajshing/baileys')

/*Count price*/
let coint = 300
let _goldtiket = `${pickRandom(['1', '0', '0', '0', '0', '0', '0'])}`
let goldtiket = (_goldtiket * 1)
let exp = (Math.floor(Math.random() * 400) + (kuda * 70))
let uang = `${Math.floor(Math.random() * 400)}`.trim() 
let _potion = `${Math.floor(Math.random() * 2)}`.trim()
let string = `${Math.floor(Math.random() * 32)}`.trim()
let kayu = `${Math.floor(Math.random() * 69)}`.trim()
let potion = (_potion * 1)
let sampah = `${Math.floor(Math.random() * 300)}`.trim()


let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.DATABASE.data.users[m.sender]
  global.DATABASE.data.users[m.sender].pickaxe = global.DATABASE.data.users[m.sender].pickaxe || 0
  global.DATABASE.data.users[m.sender].pedang = global.DATABASE.data.users[m.sender].pedang || 0
  global.DATABASE.data.users[m.sender].pancing = global.DATABASE.data.users[m.sender].pancing || 0
  let botol = global.wm

  let caption = `*💠 Crafting :*
⛏️pickaxe
🗡️Sword
🎣pancing

*🔮 Enchant*

⛏️  *Pickaxe = ${Epickaxe}*
Ketahanan ++
Nambang ++

*🗡️️Sword = ${Esword}*
Ketahanan +++
kelemahan -
Ketajaman ++
Burning fire +

[❗] Masih Beta
`

  try {
    if (/spin/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'coin':
            if (global.DATABASE.data.users[m.sender].coin >= count * 1) {
            global.DATABASE._data.users[m.sender].coin -= coint  * count       
            global.DATABASE._data.users[m.sender].exp += exp * 1
            global.DATABASE._data.users[m.sender].money += uang * 1
            global.DATABASE._data.users[m.sender].potion += potion * 1
            global.DATABASE._data.users[m.sender].sampah += sampah * 1            
            global.DATABASE._data.users[m.sender].string += string * 1
            global.DATABASE._data.users[m.sender].kayu += kayu * 1
                   global.DATABASE._data.users[m.sender].goldtiket += goldtiket * 1
                   conn.reply(m.chat, '*Selamat anda mendapatkan item Rare yaitu*\n' + goldtiket + 'Gold Tiket', m)
                        conn.reply(m.chat, `*🎆exp:* ${exp} \n*💰uang:* ${uang}\n*🪵Kayu:* ${kayu}\n*🕸️ String:* ${string}\n*🚮sampah:* ${sampah}${potion == 0 ? '' : '\n*💊Potion:* ' + potion + ''}.trim(), m)
                    } else conn.reply(m.chat, `Coin Kamu Tidak Cukup`.trim(), m)
            break

          default:
            return conn.sendButton( m.chat, caption, `${botol}`, `⋮☰ Back`, `.allmenu`, m)
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, `Hanzz Botz`, `Inventory`, `.menu`, m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['craft']
handler.tags = ['rpg']
handler.command = /^(spin)/i

module.exports = handler