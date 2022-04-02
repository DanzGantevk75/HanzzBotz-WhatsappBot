let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
	await m.reply(' _*Tutorial Nya Banh...*_ ')
  let ext= `
╭─「 *Tutorial Main Hanzz Botz* 」
│ 
│〘 Tutorial EPIC RPG 〙
│• *.claim*
│   Staterpack yang bisa di klaim 
│   12 jam sekali
│• *.mulung*
│• *.adventure*
│• *.petualang*
│   Untuk mencari resource seperti 
│   Money, Exp,Kayu,String,Diamond,Dan Crate,
│   dibutuhkan minimal 80 nyawa untuk bisa 
│   melakukannya dan, kamu tidak 
│   dapat spam karena ada delay 5 
│   menit
│• *.mining*
│  Untuk Mencari Gold,Iron,Dan String,
│  dibutuhkan pickaxe yang bisa kamu beli di shop
│  Dan Kamu hanya bisa melakukannya 24jam/1kali
│• *.use potion <jumlah>*
│   Untuk memakai potion/untuk 
│   mengisi nyawa/health
│• *.shop buy potion <jumlah>*
│   Untuk membeli potion dan ketik 
│   *.use potion <jumlah>*
│   untuk menggunakan potion
│• *.shop <args>*
│   Untuk membeli atau menjual sesuatu
│• *.shop buy <crate> <jumlah>*
│   Untuk membeli Crate
│• *.profile*
│   untuk mengetahui No whatsapmu, dll
│• *.inv*
│• *.inventory*
│   Untuk mengecek nyawa, money, dll.
│• *.judi <jumlah>*
│   *_Jangan judi, Karena gk bakal_*
│   *_balik modal.BENERAN GK BOHONG_*
│  
│*©Hanzz Botz 2020-2021*
╰─「 *Tutorial Main Hanzz Botz* 」
`.trim()
await conn.sendButtonLoc(m.chat, await (await fetch(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Tutorial Rpg`)).buffer(), ext.trim(), 'HanzzBotz By Hanzz-kun', 'RPG GAME', '.rpgmenu',m)
    

}
handler.help = ['tutorial']
handler.tags = ['tutor']
handler.command = /^tutorial/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler