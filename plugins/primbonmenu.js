let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
    let ext = `
┏━━⬣ _*PRIMBON MENU*_
┃
┃⬡ *.artimimpi <mimpi> (Limit)*
┃⬡ *.artinama <nama> (Limit)*
┃⬡ *.cantikcek <nama>*
┃⬡ *.cekjodoh <pasangan> (Limit)*
┃⬡ *.ceksifat <nama>*
┃⬡ *.cekjodoh <nama>*
┃⬡ *.gantengcek*
┃⬡ *.iqtest*
┃⬡ *.jadian*
┃⬡ *.masadepan*
┃⬡ *.nomorhoki <no hp> (Limit)*
┃⬡ *.how <query>  <nama>(Limit)*
┃⬡ *.zodiak <tahun-bulan-tanggal>*
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
    await conn.send2ButtonLoc(m.chat, await (await fetch(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Primbon+Menu`)).buffer(), ext.trim(), 'Hanzz Botz By Hanzz-kun', 'Rules', '.rules', 'Back', '.menu',m)
    
  }
handler.help = ['animemenu']
handler.tags = ['nande']
handler.command = /^primbonmenu$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

