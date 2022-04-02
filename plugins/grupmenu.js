let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
    let ext = `
┏━━⬣ _*GROUP MENU*_
┃
┃⬡ *.+ <nomor> (Limit)*
┃⬡ *.afk <alasan>*
┃⬡ *.del (Limit)*
┃⬡ *.delete (Limit)*
┃⬡ *.demote @user*
┃⬡ *.member @user*
┃⬡ *.↓ @user*
┃⬡ *.fitnah <teks> @user <teks>*
┃⬡ *.getpp @user*
┃⬡ *.group <open/close>*
┃⬡ *.infogrup*
┃⬡ *.kick @user (Limit)*
┃⬡ *.- @user (Limit)*
┃⬡ *.leave*
┃⬡ *.keluar*
┃⬡ *.linkgroup*
┃⬡ *.listadmin*
┃⬡ *.here*
┃⬡ *.listonline*
┃⬡ *.enable <option>*
┃⬡ *.disable <option>*
┃⬡ *.pengumuman [teks] (Limit)*
┃⬡ *.announce [teks] (Limit)*
┃⬡ *.hidetag [teks] (Limit)*
┃⬡ *.promote @user*
┃⬡ *.admin @user*
┃⬡ *.↑ @user*
┃⬡ *.revoke*
┃⬡ *.resetlink*
┃⬡ *.setdesk <teks>*
┃⬡ *.setname <nama>*
┃⬡ *.setpp*
┃⬡ *.seticon*
┃⬡ *.setpptext*
┃⬡ *.seticontext*
┃⬡ siapa <pertanyaan>?*
┃⬡ siapakah <pertanyaan>?*
┃⬡ *.tagall <pesan>*
┃⬡ *.mentionall <pesan>*
┃⬡ *.tagme*
┃⬡ *.tampar @user (Limit)*
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
    await conn.send2ButtonLoc(m.chat, await (await fetch(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group+Menu`)).buffer(), ext.trim(), 'Hanzz Botz By Hanzz-kun', 'Rules', '.rules', 'Back', '.menu',m)
    
  }
handler.help = ['animemenu']
handler.tags = ['nande']
handler.command = /^grupmenu$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

