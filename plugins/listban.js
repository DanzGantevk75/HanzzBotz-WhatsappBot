let handler = async (m, { conn, args }) => {
  let users = Object.entries(global.DATABASE.data.users).filter(user => user[1].Banneduser).map(([key, value]) => {
    return { ...value, jid: key }
  })
  let sortedP = users.map(toNumber('BannedTime')).sort(sort('BannedTime'))
  let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedP.length)
  let { key } = await m.reply(`┌「 *List Banned* 」
${sortedP.slice(0, len).map(({ jid, name, BannedTime, registered }, i) => `├ ${i + 1}. ( ${conn.msToDate(BannedTime - new Date() * 1)} ) ${registered ? name : conn.getName(jid)}`).join`\n`}
└────`.trim())
  setTimeout(() => {
    if (DATABASE.data.chats[m.chat].deletemedia) conn.deleteMessage(m.chat, key)
  }, DATABASE.data.chats[m.chat].deletemediaTime)
}
handler.help = ['listban [angka]']
handler.tags = ['info']
handler.command = /^(listban|listbanned|banlist|bannedlist)$/i

module.exports = handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
  }
  else return a => a === undefined ? _default : a
}