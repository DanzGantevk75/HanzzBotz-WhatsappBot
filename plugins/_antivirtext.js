let handler = m => m

handler.before = function (m, { user, text }) {

  if (m.isBaileys && m.fromMe) return
  let chat = global.DATABASE.data.chats[m.chat]
  let name = this.getName(m.sender)

  if (chat.antivirtex && text > 2500) {
    this.reply(m.chat `
ANAK NGENTOD!!!
`.trim(), m)

    conn.blockUser(m.sender, "add")
  } else return false
}
handler.private = true

module.exports = handler
