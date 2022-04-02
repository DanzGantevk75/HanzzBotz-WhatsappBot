let PhoneNumber = require('awesome-phonenumber')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, conn, usedPrefix }) {
  let user = global.DATABASE.data.users[m.sender]
  if (user.joined === true) throw `Anda sudah sudah punya kerajaan`
  if (!Reg.test(text)) throw `Format salah\n*${usedPrefix}makeclan nama kerajaan|nama raja*`
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let [_, nama, splitter, namar] = text.match(Reg)
  if (!nama) throw 'Nama kerajaan tidak boleh kosong '
  if (!namar) throw 'Nama raja tidak boleh kosong '
  let nama = user.nama
  let namar = user.namar
  user.joined = true
  let k = `
  ╭━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙
│ *「 SUKSES MEMBUAT KERAJAAN 」*
╰┬────────────┈ ⳹
┌┤◦➛ *Nama* : ${nama}
││◦➛ *Nomor* : ${who.split`@`[0]}
││◦➛ *Nama Raja* : ${namar} Tahun
││◦➛ *Status :* Kerajaan Kecil
│╰────────────┈ ⳹
│ *Silahkan Ketik .mykingdom untuk mengecek kerajaan*
╰━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙

*「 Hanzz Botz 」*
`.trim())
  conn.sendButtonLoc(m.chat, await (await fetch(`https://telegra.ph/file/662a9ceaccb0430a618d2.jpg`)).buffer(), k.trim(), wm, 'Kerajaanku', '.mykingdom', m)
  }
handler.help = ['makeclan'].map(v => v + ' <nama kerajaan>.<nama raja>')
handler.tags = ['rpg']

handler.command = /^(makeclan)$/i

module.exports = handler