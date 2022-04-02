let fetch = require('node-fetch')
let moment = require('moment-timezone')
let handler = async (m, { conn, text }) => {
  let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
    let ext = `
Halo ${ucapan()} Kak ${tag}, Saya Hanzz Botz Apa Yang Bisa Saya Bantu?
Ketik .help Untuk Melihat Menu
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Halo Kak`)).buffer(), ext.trim(), 'Hanzz Botz By Hanzz-kun', 'Rules', '.rules', 'Menu', '.help',m)
    
}
handler.customPrefix = /^(halo|hai|hello|hi|bot)$/i
handler.command = new RegExp

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat Dinihari🌁"
    if (time >= 4) {
        res = "Selamat Pagi🌄"
    }
    if (time > 10) {
        res = "Selamat Siang☀️"
    }
    if (time >= 15) {
        res = "Selamat Sore🌅"
    }
    if (time >= 18) {
        res = "Selamat Malam🌃"
    }
    return res
}
