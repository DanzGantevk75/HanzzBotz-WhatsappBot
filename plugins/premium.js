let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    pepe = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Premium'
    baper = await fetch(pepe).then(a => a.buffer())
    let listMessage = {
        "title": "〔 Premium Hanzz Botz 〕",
        "description": `
╭─「 BUY PREMIUM 」
│ 
│ ➛ Keuntungan :
│▸ Limit Tidak Terbatas!
│▸ Fitur Premium Dapat Digunakan!
│▸ Dapat Menambahkan Bot Ke Grup!
│
│➛ Bonus :
│▸ Diberi Bonus 50000Xp Tiap Hari
│
│╭─「  Payment 」
││ ▸ Gopay: 081387127465
││ ▸ Tsel: 081387127465
││ ▸ Dana: 081387127465
│╰┬───「 Harga Premium 」
│    │➛ 10K / Bulan (1 Bulan)
│    │➛ 20K / Tahun (2 Bulan)
│    │➛ 50K / VIP (Jadi Owner)
│    ╰────────────
│╰➛tertarik? hubungi:
│╰➛@6281212083267 (Hanzz)
╰────────────
`.trim(),
        "listType": "PRODUCT_LIST",
        "productListInfo": {
            "productSections": [
                {
                    "title": "Klik untuk melihat harga",
                    "products": [
                        {
                            "productId": "4696956640315324"
                        }
                    ]
                }
            ],
            "headerImage": {
                "productId": "4696956640315324",
                "jpegThumbnail": baper
            },
            "businessOwnerJid": "6281212083267@s.whatsapp.net"
        },
        "footerText": "wa.me/6281212083267"
    }
    conn.sendMessage(m.chat, listMessage, 'listMessage', { quoted: m, contextInfo: { mentionedJid: conn.parseMention(listMessage.description) } })
}
handler.help = ['sewabot']
handler.tags = ['main']
handler.command = /^(premium)$/i

module.exports = handler