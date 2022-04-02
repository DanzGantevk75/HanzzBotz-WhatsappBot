let handler = async m => m.reply(`
┌──┃❒ *Info Developer*
│
│◦➛ *Nama:* Hanzz(Raihan)
│◦➛ *Umur :* Private
│◦➛ *Kelas :* Private
│◦➛ *Askot :* Private
│◦➛ *Nomer:* wa.me/6281212083267
│◦➛ *Github:* blom ada jir
│◦➛ *Youtube:* Hanzz K
│◦➛ *YTlink : https://bit.ly/3bGFJuG
│◦➛ *Instagram:* @hanzz.jn13
│◦➛ *Donasi :* Ketik .donasi
│◦➛ *Grup :* https://bit.ly/3o06HTG
┕ *{Hanzz Botz}*

┌──┃❒ *Helper*
│◦➛ *sewabot :* .sewabot
│◦➛ *lapor bug :* .bugreport
│◦➛ *req fitur :* .request
┕━━━━━━━━━━━━━━━⳹•••
`.trim()) // Tambah sendiri kalo mau
handler.help = ['infoowner']
handler.tags = ['info']
handler.command = /^infoowner/i
handler.rowner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
