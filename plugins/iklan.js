let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    pepe = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Sewa Bot'
    baper = await fetch(pepe).then(a => a.buffer())
    let listMessage = {
        "title": "〔 Undang Bot Masuk Grup 〕",
        "description": `
*Hanzz Botz*
        
╭─「  Payment 」
│ ▸ Gopay: 081387127465
│ ▸ Tsel: 081387127465
│ ▸ Dana: 081387127465
╰┬───「  List Harga Sewa 」
    │➛ *1 Bulan* :      *Rp 5000*
    │➛ *2 bulan* :      *Rp 10000*
    │➛ *8 Bulan* :      *Rp 25000*
    │➛ *VIP*        :      *Rp 50000*
    ╰────────────

tertarik? hubungi:
@6281212083267 (Hanzz)
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
handler.command = /^sewa(bot|iklan)$/i

module.exports = handler