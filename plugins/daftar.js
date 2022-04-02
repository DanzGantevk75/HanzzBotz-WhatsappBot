const { createHash } = require('crypto')
let PhoneNumber = require('awesome-phonenumber')
let image = global.image
let wm = global.wm
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let totalreg = Object.keys(global.DATABASE._data.users).length
let handler = async function (m, { text, usedPrefix }) {
  let user = global.DATABASE.data.users[m.sender]
  if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Format salah\n*${usedPrefix}daftar nama|umur*`
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 120) throw 'Umur Terlalu Tua'
  if (age < 5) throw 'Bayi Bisa Ngetik Sesuai Format Bjir ._.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let msg = `
┏━━⬣ *「* 𝙑𝙀𝙍𝙄𝙁𝙔 𝙎𝙐𝙆𝙎𝙀𝙎 *」*
┃
┃⬡ 𝙉𝘼𝙈𝘼 : ${name}
┃⬡ 𝙐𝙈𝙐𝙍 : ${age}
┃⬡ 𝙉𝙊𝙈𝙊𝙍 : ${who.split`@`[0]}
┃⬡ 𝙎𝙀𝙍𝙄𝘼𝙇 𝙉𝙐𝙈𝘽𝙀𝙍 : ${sn}
┃⬡ 𝙏𝙊𝙏𝘼𝙇 𝙋𝙀𝙉𝙂𝙂𝙐𝙉𝘼 : ${totalreg}
┃⬡ 𝙎𝙏𝘼𝙏𝙐𝙎 : ✅Terverifikasi
┃⬡ 𝙉𝙊𝙏𝙀 : Silahkan Patuhi Rulesnya 
┗⬣
「 𝙃𝘼𝙉𝙕𝙕 𝘽𝙊𝙏𝙕  」
`.trim()
conn.send3Button(m.chat, msg, wm, '⋮☰ MENU', '.menu', '📃 RULES', '.rules', '📋 CEKSN', '.ceksn', m)
}
handler.help = ['daftar'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp']

handler.command = /^daftar/i

module.exports = handler
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}