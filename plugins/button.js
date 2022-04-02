let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "HALO KAK👋👋\nSaya Hanzz Botz\n\nBot Yang Dibuat Untuk Membantu Anda Seperti Membuat Sticker Dan Lain-Lain\n\nSilahkan Pilih Menu Di Bawah Yaa\n\nMy Rest Api https://hanzz-web.herokuapp.com/\nJoin Group WhatsApp\nhttps://chat.whatsapp.com/EfcwWF7guA1GopdHRq11YR",
                        "description": "*Note : Sebelum Pakai Bot Ketik .rules Yaa Kak*",
                        "buttonText": "Click Me >_<",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `Downloader Menu`,
                                        "description": "menu untuk mendowload sesuatu dibot",
                                        "rowId": ".downloadmenu"
                                    },{
                                        "title": "Donasi",
                                        "description": "donasi agar bot dapat terus berkembang",
                                        "rowId": ".donasi"
                                    },{
                                        "title": "Owner Bot",
                                        "description": "pemilik bot",
                                        "rowId": ".owner"                                        
                                    },{
                                        "title": "Status Bot",
                                        "description": "",
                                        "rowId": ".mystat"                                        
                                    },{
                                        "title": "Sewa Bot",
                                        "description": "sewabot untuk memasukan bot ke grubmu",
                                        "rowId": ".sewabot"
                                    },{
                                        "title": "Rules",
                                        "description": "baca rules untuk mengetahui peraturan bot",
                                        "rowId": ".rules"  
                                    },{
                                        "title": "Tutorial Rpg",
                                        "description": "tutorial bermain rpg",
                                        "rowId": ".tutorial"                                                       
                                    },{
                                        "title": "Group Bot",
                                        "description": "",
                                        "rowId": ".gchanzz"
                                    },{
                                        "title": "Game Menu",
                                        "description": "menu game untuk bermain game di bot",
                                        "rowId": ".gamemenu"
                                    },{
                                        "title": "Primbon Menu",
                                        "description": "menu primbon untuk meramal di bot",
                                        "rowId": ".primbonmenu"                                        
                                    },{
                                        "title": "Rpg Menu",
                                        "description": "menu rpg untuk bermain rpg dibot",
                                        "rowId": ".rpgmenu"                                           
                                    },{
                                        "title": "Grup Menu",
                                        "description": "menu grub, fitur bot yang dapat digunakan digrub",
                                        "rowId": ".Grupmenu"             
                                    },{
                                        "title": "Sticker Menu",
                                        "description": "menu sticker, untuk membuat sticker di bot",
                                        "rowId": ".stickermenu"
                                    },{
                                        "title": "Islam Menu",
                                        "description": "menu islam, untuk orang beragama islam",
                                        "rowId": ".islammenu"                 
                                    },{
                                    	"title": "All Menu",
                                        "description": "semua fitur bot",
                                        "rowId": ".allmenu"                 
                                    },{
                                        "title": "Jadibot Menu",
                                        "description": "menu jadibot, untuk menjadi bot (premium only)",
                                        "rowId": ".jadibotmenu"                 
                                    },{
                                        "title": "Anime Menu",
                                        "description": "menu anime, untuk wibu ^_^",
                                        "rowId": ".animemenu" 
                                    },{
                                        "title": "Anonymous Chat",
                                        "description": "anonymous chat, untuk chat tanpa mengetahui siapa orang tersebut",
                                        "rowId": ".anonymouschat"                                                                                         
                                    },{
                                        "title": "Info Owner",
                                        "description": "",
                                        "rowId": ".infoowner"                                
                                    },{
                                        "title": "Hentai Menu",
                                        "description": "menu hentai, untuk menampilkan gambar hentai -_-",
                                        "rowId": ".hentaimenu" 
                                    },{
                                        "title": "Creator Menu",
                                        "description": "menu creator, untuk membuat gambar dibot",
                                        "rowId": ".creatormenu"
                                    },{
                                        "title": "Editor Menu",
                                        "description": "menu editor, untuk mengedit foto dibot",
                                        "rowId": ".editormenu" 
                                    },{
                                        "title": "Education Menu",
                                        "description": "menu education, untuk belajar di bot",
                                        "rowId": ".educationmenu"  
                                    },{
                                        "title": "Internet Menu",
                                        "description": "menu internet, untuk mencari gambar di bot",
                                        "rowId": ".imagemenu"
                                    },{
                                        "title": "Pengubah Suara",
                                        "description": "pengubah suara, untuk mengubah suara di bot",
                                        "rowId": ".soundmenu"
                                    },{
                                        "title": "Music Menu",
                                        "description": "menu music, untuk mencari music di bot",
                                        "rowId": ".musicmenu"
                                    },{
                                        "title": "News Menu",
                                        "description": "menu news, untuk membaca berita baru di bot",
                                        "rowId": ".newsmenu"
                                    },{
                                        "title": "Info Menu",
                                        "description": "",
                                        "rowId": ".infomenu"
                                    },{
                                        "title": "Tools Menu",
                                        "description": "menu tools, untuk membuat sesuatu di bot",
                                        "rowId": ".toolsmenu"
                                    },{
                                        "title": "info Bot",
                                        "description": "",
                                        "rowId": ".info"                          
                                    },{
                                        "title": "Premium Menu",
                                        "description": "menu premiun, untuk user premium",
                                        "rowId": ".premiummenu"
                                    },{
                                        "title": "Kerang Menu",
                                        "description": "menu kerang, untuk menanyakan sesuatu di bot",
                                        "rowId": ".kerangmenu"
                                    },{
                                        "title": "Converter Menu",
                                        "description": "menu converter, untuk mengkonversi sesuatu di bot",
                                        "rowId": ".convertermenu"
                                    },{
                                        "title": "Search Menu",
                                        "description": "menu search, untuk mencari sesuatu di bot",
                                        "rowId": ".searchmenu"
                                    },{
                                        "title": "Random Menu",
                                        "description": "menu random, untuk menampilkan menu random",
                                        "rowId": ".randommenu"                  
                                    },{
                                        "title": "Absen Menu",
                                        "description": "",
                                        "rowId": ".absenmenu"                 
                                    }, {
                                        "title": "Group Setting",
                                        "description": "",
                                        "rowId": ".groupset"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['help']
handler.register = true
module.exports = handler