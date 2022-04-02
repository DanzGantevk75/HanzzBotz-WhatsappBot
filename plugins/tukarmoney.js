const exp = 1
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^tukarmoney/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.DATABASE.data.users[m.sender].money / exp) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.DATABASE.data.users[m.sender].money >= exp * count) {
    global.DATABASE.data.users[m.sender].money -= exp * count
    global.DATABASE.data.users[m.sender].exp += count
    conn.reply(m.chat, `-Rp.${exp * count}\n+ ${count} Xp`, m)
  } else conn.reply(m.chat, `Uang tidak mencukupi untuk menukar ${count} Coin`, m)
}
handler.help = ['tukarmoney <Jumlah>', 'tukarmoney <jumlah>', 'tukarall']
handler.tags = ['rpg']
handler.command = /^tukarmoney([0-9]+)|tukarmoney|tukarall$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

