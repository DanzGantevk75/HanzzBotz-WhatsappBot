let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `🔰 -----[ 「 *Iklan Hanzz Botz* 」 ]----- 🔰

──────────────

*JASA SHARE HANZZ BOTZ :*

○ *Share 1× 50 Grub = 1K
○ *Share 2× 50 Grub = 1,5K
○ *Share 3× 50 Grub = 2K
○ *Share 4× 50 Grub = 2,5K
○ *Share 5× 50 Grub = 3K

◯ *PEMBAYARAN BISA MELALUI :*

◯ *DANA*

◯ *PULSA*

○ *GOPAY*

🗣 : Amanah Gak Bang?
👤 : Amanah Kok 100%
─────────────────
◯ *JIKA MINAT IKLAN DIATAS*

◯ *HARAP HUBUNGI NOMOR DIBAWAH :*

◯ *wa.me/6281212083267*
Atau Ketik PEMBAYARAN

──────────────────────────────

🔰 -----[「 *Powered By Hanzz-kun* 」]----- 🔰` 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
}
handler.help = ['iklan2'] 
handler.tags = ['info'] 
handler.command = /^(iklan2)$/i

module.exports = handler