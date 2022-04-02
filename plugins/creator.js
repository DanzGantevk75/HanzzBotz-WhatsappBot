let handler = function (m) {
	let caption = `
	Ini Owner Ku Kak (Pemilik Bot)
-Bukan Bot
-Awali Chat Dengan Salam Atau Sapa
-P Tidak Akan Dijawab
-Tidak Menerima Save Contact
`.trim()
  // this.sendContact(m.chat, '6283144570377', 'Raku Gans', m)
  this.sendContact(m.chat, '6281212083267', 'My Owner', m)
  conn.send3Button(m.chat, caption, 'Mau Tanya Apa?', 'Sc', '.sc', 'Sewa Bot', '.sewabot', 'Status Owner', '.infoowner', m)
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
