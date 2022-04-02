let handler = m => m
handler.before = async function (m) {

    if (m.isGroup && DATABASE.data.chats[m.chat].expired != 0) {
        if (new Date() * 1 >= DATABASE.data.chats[m.chat].expired) {
            this.reply(m.chat, `waktunya Hanzz Botz untuk meninggalkan grup, Selamat Tinggal👋👋`, null).then(() => {
                this.sendContact(m.chat, '6281212083267', 'My Owner', m).then(() => {
                    this.groupLeave(m.chat).then(() => {
                        DATABASE.data.chats[m.chat].expired = 0
                    })
                })
            })
        }
    }
}

module.exports = handler