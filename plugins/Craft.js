/*
* THX TO
* Allah SWT
* Ortu
* RESTU
* RIZXYU
*/
let { MessageType } = require('@adiwajshing/baileys')

/*Count price*/
let sword = 9800
let pickaxe = 8927
let armor = 17290
let pancing = 9278

let Esword = 18390
let Epickaxe = 18250
let Earmor = 23847
let Eaxe = 18230

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.DATABASE.data.users[m.sender]
  global.DATABASE.data.users[m.sender].pickaxe = global.DATABASE.data.users[m.sender].pickaxe || 0
  global.DATABASE.data.users[m.sender].sword = global.DATABASE.data.users[m.sender].sword || 0
  global.DATABASE.data.users[m.sender].axe = global.DATABASE.data.users[m.sender].axe || 0
  let botol = global.wm

  let caption = `*💠 Crafting :*
⚒️ Crafting Table
🛠Anvil
⛏️Pickaxe
🗡️Sword
🪓Axe
🥼Armor

*🔹️Upgrade*
⛏️Pickaxe: ${Epickaxe}
++Durability
🗡️Sword: ${Esword}
++Durability
🪓Axe: ${Eaxe}
++Durability
🥼Armor: ${Earmor}
++Durability

[❗] Kamu Harus Membuat Crafting Table Sebelum Membuat Tools
[❗] Kamu Harus Membuat Anvil Sebelum Mengupgrade Tools
`

  try {
    if (/craft|Crafting/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'craftingtable':
            if(user.kayu < 20) return m.reply(`Barang tidak cukup!\nUntuk membuat Crafting Table. Kamu memerlukan : \n20 kayu🪵`)
            global.DATABASE.data.users[m.sender].kayu -= 20
            global.DATABASE.data.users[m.sender].crafting += 1
            m.reply("Sukses membuat 1 Crafting Table⚒️")
            break
            case 'anvil':
            if(user.iron < 20) return m.reply(`Barang tidak cukup!\nUntuk membuat Anvil. Kamu memerlukan : \n20 iron⛓️`)
            global.DATABASE.data.users[m.sender].iron -= 20
            global.DATABASE.data.users[m.sender].anvil += 1
            m.reply("Sukses membuat 1 Anvil🛠")
            break
          case 'pickaxe':
            if(user.kayu < 20 || user.string < 20 || user.crafting < 1) return m.reply(`Barang tidak cukup!\nUntuk membuat pickaxe. Kamu memerlukan : \n20 kayu🪵\n20 String🕸️\n Crafting Table⚒️`)
            global.DATABASE.data.users[m.sender].kayu -= 20
            global.DATABASE.data.users[m.sender].pickaxedurability += 100
            global.DATABASE.data.users[m.sender].string -= 20
            global.DATABASE.data.users[m.sender].pickaxe += 1
            m.reply("Sukses membuat 1 Pickaxe ⛏️")
            break
          case 'armor':
            if(user.string < 20 || user.crafting < 1|| user.iron < 30) return m.reply(`Barang tidak cukup!\nUntuk membuat pickaxe. Kamu memerlukan : \n20 String🕸️\n30 Iron⛓️\n Crafting Table⚒️`)
            global.DATABASE.data.users[m.sender].iron -= 30
            global.DATABASE.data.users[m.sender].string -= 20
            global.DATABASE.data.users[m.sender].armor += 1
            global.DATABASE.data.users[m.sender].armordurability += 100
            m.reply("Sukses membuat 1 Armor🥼")
            break
          case 'sword':
            if(user.kayu < 20 || user.string < 20 || user.crafting < 1) return m.reply(`Barang tidak cukup!\nUntuk membuat sword. Kamu memerlukan : \n20 kayu🪵\n20 String🕸️\nCrafting Table⚒️`)
            global.DATABASE.data.users[m.sender].kayu -= 20
            global.DATABASE.data.users[m.sender].string -= 20
            global.DATABASE.data.users[m.sender].sword += 1
            m.reply("Sukses membuat 1 Sword 🗡️")
            break
          case 'axe':
            if(user.kayu < 20 || user.string < 20 || user.crafting < 1) return m.reply(`Barang tidak cukup!\nUntuk membuat axe. Kamu memerlukan :\n20 kayu🪵\n20 String🕸️\nCrafting Table⚒️`)
            global.DATABASE.data.users[m.sender].kayu -= 20
            global.DATABASE.data.users[m.sender].string -= 20
            global.DATABASE.data.users[m.sender].axe += 1
            global.DATABASE.data.users[m.sender].axedurability += 100
            m.reply("Sukses membuat 1 Axe🪓 ")
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

handler.help = ['craft','upgrade']
handler.tags = ['rpg']
handler.command = /^(craft|crafting|upgrade)/i

module.exports = handler