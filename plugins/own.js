let handler = async function (m, { conn }) {
  let list = []
  for (let i of creator.map(v => v + '@s.whatsapp.net')) {
    let name = DATABASE.data.users[i] ? DATABASE.data.users[i].name : conn.getName(i)
    list.push({
      "displayName": name,
      "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;${name};;;\nFN:${name}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Hanzz-kun\Web;Web:hanzz-web.herokuapp.com\nREGION; REGION : ðŸ‡®ðŸ‡© INDONESIA\nEND:VCARD`
    })
  }
  await conn.sendMessage(m.chat, {
    "displayName": `${list.length} Contact`,
    "contacts": list
  }, 'contactsArrayMessage', { quoted: m })
}
handler.help = ['owner', 'creator', 'own']
handler.tags = ['info']
handler.command = /^(own)$/i

module.exports = handler