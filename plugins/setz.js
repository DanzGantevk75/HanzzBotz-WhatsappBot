let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
let ext = `*「 SET MODE 」*
◉ Mode : ${global.opts['self'] ? 'Self' : 'Publik'}
`.trim()
  await conn.send2ButtonLoc(m.chat, await (await fetch(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Hanzz Botz Mode`)).buffer(), ext.trim(), 'Hanzz Botz By Hanzz-kun', 'PUBLIC', '.on public', 'SELF', '.off public',m)
}
let wait = global.wait
handler.help = ['set', 'mode']
handler.tags = ['owner']

handler.command = /^(set|mode)$/i
handler.owner = true

module.exports = handler