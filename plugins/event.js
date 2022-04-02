let handler  = async (m, { conn, usedPrefix: _p }) => {
let event = `
┏━°❀❬ *EVENT BULANAN * ❭❀°━┓
┃
┃>Tidak Ada Event Saat Ini
┃ 
┃
┃
┃
┗━━━━━━━━━━━━━━━━
`.trim()

  conn.fakeReply(m.chat, event, '6281212083267@s.whatsapp.net', '*Gak ada event*')
}
handler.help = ['event']
handler.tags = ['hadiah']
handler.command = /^(event)$/i

handler.fail = null 

module.exports = handler
