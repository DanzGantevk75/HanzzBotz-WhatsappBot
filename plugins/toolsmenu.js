let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
    let ext = `
┏━━⬣ _*TOOLS MENU*_
┃
┃⬡ *.alay <teks>*
┃⬡ *.barcode <teks>*
┃⬡ *.base64 <teks>*
┃⬡ *.binary <teks>*
┃⬡ *.calc <angka> (Limit)
┃⬡ *.kalk <angka> (Limit)*
┃⬡ *.calculator <angka> (Limit)*
┃⬡ *.kalkulator <angka> (Limit)*
┃⬡ *.caricowok*
┃⬡ *.caristicker <query> (Limit)*
┃⬡ *.create <nama|nomor> (Limit)*
┃⬡ *.cuaca <daerah> (Limit)*
┃⬡ *.fetch <url>*
┃⬡ *.get <url>*
┃⬡ *.url2img <url>*
┃⬡ *.ffstalk <id ff>*
┃⬡ *.film <query> (Limit)*
┃⬡ *.nonton <query> (Limit)*
┃⬡ *.font <text> (Limit)*
┃⬡ *.styletext <text> (Limit)*
┃⬡ *.getsticker*
┃⬡ *.getstiker*
┃⬡ *.hackweb <judul|desk|wm|url>*
┃⬡ *.hash <teks>*
┃⬡ *.halah <teks>*
┃⬡ *.hilih <teks>*
┃⬡ *.huluh <teks>*
┃⬡ *.heleh <teks>*
┃⬡ *.holoh <teks>*
┃⬡ *.huruf <teks>*
┃⬡ *.imagetobase64 (caption|reply) (Limit)*
┃⬡ *.img2url (Limit)*
┃⬡ *.ip <alamat ip>*
┃⬡ *.ipcheck <alamat ip>*
┃⬡ *.ipcek <alamat ip>*
┃⬡ *.jadwaltv <channel>*
┃⬡ *.kbbi <query> (Limit)*
┃⬡ *.peta <wilayah> (Limit)*
┃⬡ *.lokasi <wilayah> (Limit)*
┃⬡ *.maps <wilayah> (Limit)*
┃⬡ *.mlstalk <id ml>*
┃⬡ *.modapk*
┃⬡ *.nickff*
┃⬡ *.ninja <nama>*
┃⬡ *.nonton <film> (Limit)*
┃⬡ *.nsfwcek (reply/caption) (Limit)*
┃⬡ *.ocr (Limit)*
┃⬡ *.pastebin <teks> (Limit)*
┃⬡ *.profile*
┃⬡ *.purba <teks>*
┃⬡ *.readmore <teks>|<teks>*
┃⬡ *.spoiler <teks>|<teks>*
┃⬡ *.readqr (Limit)*
┃⬡ *.repeat <teks> (Limit)*
┃⬡ *.repeat2 <teks> (Limit)*
┃⬡ *.reverse <teks>*
┃⬡ *.save <nama>*
┃⬡ *.say <teks>*
┃⬡ *.sholat <daerah>*
┃⬡ *.sid <link> (Limit)*
┃⬡ *.short <link> (Limit)*
┃⬡ *.ss <url>*
┃⬡ *.ssf <url>*
┃⬡ *.ssweb <url>*
┃⬡ *.surah <no surat>*
┃⬡ *.teruskan <teks>*
┃⬡ *.tinyurl <link> (Limit)*
┃⬡ *.short2 <link> (Limit)*
┃⬡ *.upload (caption|reply) (Limit)*
┃⬡ *.virvid*
┃⬡ *.waktu <daerah>*
┃⬡ *.wiki <query> (Limit)*
┃ 
┣━━°❀❬ *TQTO* ❭❀°━━┓
┃ 
┃⬡ *Nurotomo (author)*
┃⬡ *Ibnu NR (pengembang)*
┃⬡ *RC047 (pengembang)*
┃⬡ *Caliph (pengembang)*
┃⬡ *Raku Gans (pengembang)*
┃⬡ *Hanzz-kun (pengembang)*
┃⬡ *All Mastah*
┗⬣
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Tools+Menu`)).buffer(), ext.trim(), 'Hanzz Botz By Hanzz-kun', 'Rules', '.rules', 'Back', '.menu',m)
    
  }
handler.help = ['animemenu']
handler.tags = ['nande']
handler.command = /^toolsmenu$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

