let fs = require('fs')
let handler = m => m
let wm = global.wm
let logo = global.logo

handler.all = async function (m, { isBlocked }) {

    if (isBlocked) return
    if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return
    let setting = DATABASE.data.settings
    let { isBanned } = DATABASE.data.chats[m.chat]
    let { banned } = DATABASE.data.users[m.sender]

    // ketika kena tag
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
        await conn.send3Button(m.chat, `Halo Kak Hanzz Botz Sedang Online, Apa Yang Bisa Saya Bantu?`.trim(), wm, '⋮☰ Menu', '.menu', '📃 Rules', '.rules', '👤 Pemilik Bot', '.owner', m)
        }
    } catch (e) {
        return
    }

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        await conn.sendButton(m.chat, `〔 Undang Bot Masuk Grup 〕
Sewa Untuk Memasukan Bot Ke Group
╭─「  Payment 」
│ ▸ Gopay: 088270863279
│ ▸ Pulsa: 088270863279
│ ▸ Dana: 088270863279
╰┬───「  List Harga Sewa 」
    │➛ *1 Bulan* :      *Rp 5000*
    │➛ *2 bulan* :      *Rp 10000*
    │➛ *8 Bulan* :      *Rp 25000*
    │➛ *VIP*        :      *Rp 50000*
    ╰────────────
`.trim(), wm, 'CHAT OWNER TO BUY', '.owner', m, )
    }

    // salam
    let reg = /(terima kasih|makasih|makasi|thanks|makaci)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`Sama-Sama (^_^)`)
    }
    // update status
    if (new Date() * 1 - setting.status > 1000) {
    const chats = conn.chats.all()
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        let totalreg = Object.keys(global.DATABASE._data.users).length
        await this.setStatus(`Im DanzBot || Aktif Selama : ${uptime} || Total User : ${totalreg} || Mode : ${global.opts['self'] ? 'Private' : setting.groupOnly ? 'Hanya Grup' : 'Publik'} || Total Chat : ${chats.length} || Created By Danzz`).catch(_ => _)
        setting.status = new Date() * 1
    }
    
}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
