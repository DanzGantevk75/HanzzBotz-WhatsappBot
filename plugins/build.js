/*
* THX TO
* Allah SWT
* Hanzz
*/
let { MessageType } = require('@adiwajshing/baileys')

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.DATABASE.data.users[m.sender]
  let botol = global.wm

  let caption = `*🔨 Build :*
📦 Rumah Kardus
🏚 Rumah Kayu
🏡 Rumah Semen
🏤 Rumah Mewah
🏰 Istana
`

  try {
    if (/build/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'rumahkardus':
            if(user.kardus < 20) return m.reply(`Barang tidak cukup!\nUntuk membuat Rumah Kardus. Kamu memerlukan : \n50 kardus📦`)
            global.DATABASE.data.users[m.sender].kardus -= 50
            global.DATABASE.data.users[m.sender].rumah += 1
            m.reply("Sukses membuat Rumah Kardus📦")
            break
            case 'rumahkayu':
            if(user.kayu < 50) return m.reply(`Barang tidak cukup!\nUntuk membuat Rumah Kayu. Kamu memerlukan : \n50 kayu🪵`)
            global.DATABASE.data.users[m.sender].kayu -= 50
            global.DATABASE.data.users[m.sender].rumah += 2
            m.reply("Sukses membuat Rumah Kayu🏚")
            break
          case 'rumahsemen':
            if(user.semen < 5 || user.bata < 50) return m.reply(`Barang tidak cukup!\nUntuk membuat Rumah Semen. Kamu memerlukan : \n5 Semen\n50 Bata🧱`)
            global.DATABASE.data.users[m.sender].bata -= 50
            global.DATABASE.data.users[m.sender].semen -= 50
            global.DATABASE.data.users[m.sender].rumah += 3
            m.reply("Sukses membuat Rumah Semen🏠")
            break
          case 'rumahmewah':
            if(user.semen < 20 || user.bata < 100) return m.reply(`Barang tidak cukup!\nUntuk membuat Rumah Mewah. Kamu memerlukan : \n20 Semen\n100 Bata🧱`)
            global.DATABASE.data.users[m.sender].semen-= 20
            global.DATABASE.data.users[m.sender].bata -= 100
            global.DATABASE.data.users[m.sender].rumah += 4
            m.reply("Sukses membuat Rumah Mewah🏤")
            break
          case 'istana':
            if(user.bata < 200 || user.semen < 50) return m.reply(`Barang tidak cukup!\nUntuk membuat Istana. Kamu memerlukan : \n200 Bata🧱\n50 Semen`)
            global.DATABASE.data.users[m.sender].bata-= 200
            global.DATABASE.data.users[m.sender].semen -= 50
            global.DATABASE.data.users[m.sender].rumah += 5
            m.reply("Sukses membuat Istana🏰")
            break

          default:
            return conn.sendButton(m.chat, caption, `${botol}`, `🎒Inventory`, `.inv`, m)
        }
    } else if (/upgrade/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 'sword':
        if(user.anvil < 1|| user.money < 18390) return m.reply(`Barang tidak cukup!\nUntuk membuat sword. Kamu memerlukan : \n18390 Money💰\n Anvil🛠`)
            global.DATABASE.data.users[m.sender].money -= 18390
            global.DATABASE.data.users[m.sender].sworddurability += 200
            global.DATABASE.data.users[m.sender].sword += 1
            m.reply("Sukses mengupgrade 1 Sword🗡️")
          break
        case 'pickaxe':
        if(user.anvil < 1|| user.money < 18250) return m.reply(`Barang tidak cukup!\nUntuk membuat pickaxe. Kamu memerlukan : \n18250 Money💰\n Anvil🛠`)
            global.DATABASE.data.users[m.sender].money -= 18250
            global.DATABASE.data.users[m.sender].pickaxedurability += 200
            global.DATABASE.data.users[m.sender].pickaxe += 1
            m.reply("Sukses mengupgrade 1 Pickaxe⛏️")
          break
         case 'axe':
        if(user.anvil < 1|| user.money < 18230) return m.reply(`Barang tidak cukup!\nUntuk membuat axe. Kamu memerlukan : \n18230 Money💰\n Anvil🛠`)
            global.DATABASE.data.users[m.sender].money -= 18230
            global.DATABASE.data.users[m.sender].axedurability += 200
            global.DATABASE.data.users[m.sender].axe += 1
            m.reply("Sukses mengupgrade 1 Axe🪓")
          break
         case 'armor':
        if(user.anvil < 1|| user.money < 23847) return m.reply(`Barang tidak cukup!\nUntuk membuat armor. Kamu memerlukan : \n23847 Money💰\n Anvil🛠`)
            global.DATABASE.data.users[m.sender].money -= 23847
            global.DATABASE.data.users[m.sender].armordurability += 200
            global.DATABASE.data.users[m.sender].armor += 1
            m.reply("Sukses mengupgrade 1 Armor🥼")
          break
          
        default:
          return conn.sendButton(m.chat, caption, `${botol}`, `🎒Inventory`, `.inv`, m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['build <apa>']
handler.tags = ['rpg']
handler.command = /^(build)/i

module.exports = handler