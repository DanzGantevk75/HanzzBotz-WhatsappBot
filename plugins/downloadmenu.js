let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
    let ext = `
┏━━⬣ _*DOWNLOADER MENU*_
┃
┃⬡ *.fb <url>*
┃⬡ *.ig <url> (Limit)*
┃⬡ *.ighighlight <username> (Limit)*
┃⬡ *.igstalk <username> (Limit)*
┃⬡ *.igstory <username> (Limit)*
┃⬡ *.mediafire <link> (Limit)*
┃⬡ *.tiktok <url> (Limit)*
┃⬡ *.twitter <link> (Limit)*
┃⬡ *.twt <link> (Limit)*
┃⬡ *.twitstalk <@user> (Limit)*
┃⬡ *.stalktwit <@user> (Limit)*
┃⬡ *.ytmp3 <url> (Limit)*
┃⬡ *.yta <url> (Limit)*
┃⬡ *.ytmp4 <url> (Limit)*
┃⬡ *.ytv <url> (Limit)*
┃⬡ *.yt <url> (Limit)*
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
    await conn.send2ButtonLoc(m.chat, await (await fetch(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Downloader+Menu`)).buffer(), ext.trim(), 'Hanzz Botz By Hanzz-kun', 'Rules', '.rules', 'Back', '.menu',m)
    
  }
handler.help = ['animemenu']
handler.tags = ['nande']
handler.command = /^downloadmenu$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

