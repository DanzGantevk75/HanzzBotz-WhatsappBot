let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
Pesanan Sedang Diproses, Silahkan Kirim SS Bukti Transfer Ke Nomer wa.me/6281212083267 Dan Tuliskan Kategori Pembelian
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥HANZZ SHOP TERPERCAYA🔥*', 'status@broadcast')
}
handler.customPrefix = /^(UP)$/i
handler.command = new RegExp

module.exports = handler
 