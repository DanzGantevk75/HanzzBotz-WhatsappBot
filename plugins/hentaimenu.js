let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "Nsfw Menu\nPastikan Anda Berumur 18+",
                        "description": "©Nsfw",
                        "buttonText": "Menu disini",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                        "title": `Random NsfwNeko`,
                                        "rowId": ".nsfwneko"
                                    }, {
                                       "title": `Random Hentai Gif`,
                                       "rowId": ".hentaigif"
                                    }, {
                                       "title": `Random Hentai`,
                                       "rowId": ".hentai"
                                    }, {
                                       "title": `Random Pussy`,
                                        "rowId": ".pussy"
                                    }, {
                                        "title": `Random Ass`,
                                        "rowId": ".ass"                               
                                    }, { 
                                        "title": `Random Blowjob`,
                                        "rowId": ".blowjob"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.command = ['hentaimenu']
module.exports = handler
handler.tags = ['jdhsnaj'] 
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = true

handler.fail = null
handler.exp = 20

module.exports = handler