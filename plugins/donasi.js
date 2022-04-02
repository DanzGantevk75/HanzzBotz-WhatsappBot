let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
*DONASI*

*TSEL* : 081387127465
*GOPAY* : 081387127465
*DANA* : 081387127465
*SAWERIA* : saweria.co/HanzzBotz

`.trim()
await conn.sendButtonLoc(m.chat, await (await fetch(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Donasi`)).buffer(), ext.trim(), 'HanzzBotz By Hanzz-kun', '🙋‍♂️ NOMER OWNER', '.owner',m)
    

}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^donasi/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler