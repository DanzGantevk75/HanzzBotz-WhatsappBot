let fetch = require('node-fetch')
let fs = require('fs')
let wait = fs.readFileSync('./sticker/wait.webp')
let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/Xmell91/loli/master/loli.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
conn.fakeReply(m.chat, wait, '0@s.whatsapp.net', '```PLEASE WAIT......```', 'status@broadcast')
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Anda Lolicon', 'Hanzz', 'Get Again', '/loli', m)
}
handler.command = /^(loli)$/i
handler.tags = ['anime']
handler.help = ['loli']
module.exports = handler
