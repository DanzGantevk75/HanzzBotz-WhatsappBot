let { JSDOM } = require('jsdom')
let fs = require ('fs')
const { createHash } = require('crypto') 
let util = require('util')
let path = require('path')
let fetch = require('node-fetch')
}
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE.data.users).length
    let rtotalreg = 0
    try {
    
    rtotalreg = Object.values(global.DATABASE.data.users).filter(user => user.registered == true).length
    } catch {
  
    }
  
        let tags = {
      'main': '𝙈𝘼𝙄𝙉',
      'stres': '𝙎𝙏𝙍𝙀𝙎 𝙈𝙀𝙉𝙐',
      'api': '𝘼𝙋𝙄 𝙈𝙀𝙉𝙐',
      'wibu': '𝘼𝙉𝙄𝙈𝙀 𝙈𝙀𝙉𝙐',
      'game': '𝙂𝘼𝙈𝙀',
      'xp': '𝙀𝙓𝙋 & 𝙇𝙄𝙈𝙄𝙏',
      'sticker': '𝙎𝙏𝙄𝘾𝙆𝙀𝙍',
      'textpro': '𝙏𝙀𝙓𝙏𝙋𝙍𝙊',
      'kerang': '𝙆𝙀𝙍𝘼𝙉𝙂 𝙈𝙀𝙉𝙐',
      'quotes': '𝙌𝙐𝙊𝙏𝙀𝙎',
      'admin': '𝘼𝘿𝙈𝙄𝙉',
      'group': '𝙂𝙍𝙊𝙐𝙋',
      'premium': '𝙋𝙍𝙀𝙈𝙄𝙐𝙈',
      'sange': '𝙉𝙎𝙁𝙒',
      'internet': '𝙄𝙉𝙏𝙀𝙍𝙉𝙀𝙏',
      'nulis': '𝙈𝘼𝙂𝙀𝙍𝙉𝙐𝙇𝙄𝙎 & 𝙇𝙊𝙂𝙊',
      'downloader': '𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍',
      'tools': '𝙏𝙊𝙊𝙇𝙎',
      'fun': '𝙁𝙐𝙉',
      'jadibot': '𝙅𝘼𝘿𝙄𝘽𝙊𝙏',
      'owner': '𝙊𝙒𝙉𝙀𝙍',
      'host': '𝙃𝙊𝙎𝙏',
      'advanced': '𝘼𝘿𝙑𝘼𝙉𝘾𝙀𝘿',
      'info': '𝙄𝙉𝙁𝙊',
      '': '𝙉𝙊 𝘾𝘼𝙏𝙀𝙂𝙊𝙍𝙔',
    }
    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in  tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let menu of help)
        if (menu.tags && menu.tags.includes(tag))
          if (menu.help) groups[tag].push(menu)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || `
┏━━⬣ 𝙄𝙉𝙁𝙊
┃
┃⬡ Mode : ${opts.disable ? 'Self' : 'Public'}
┃⬡ Jam : ${require('moment-timezone').tz("Asia/Jakarta").format("HH:mm:ss")}
┃⬡ Tanggal : ${require('moment-timezone').tz("Asia/Jakarta").format("DD-MM-YYYY")}
┃⬡ Feature : ${totalfeature} *Features*
┃⬡ Battery : *${conn.battery ? conn.battery.value : '85'}℅*
┗⬣
`
    let header = conn.menu.header || '┏━━⬣ %category\n┃'
    let body   = conn.menu.body   || '┃⬡ %cmd%islimit'
    let footer = conn.menu.footer || '┗⬣\n'
    let after  = conn.menu.after  || (conn.user.jid == global.conn.user.jid ? '' : `Powered By @${global.conn.user.jid.split`@`[0]}`) + `\n*%npmname@^%version*\n\`\`\`\%npmdesc\`\`\``
    let _text  = before + '\n'
    for (let tag in groups) {
      _text += header.replace(/%category/g, tags[tag]) + '\n'
      for (let menu of groups[tag]) {
        for (let help of menu.help)
          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '')  + '\n'
      }
      _text += footer + '\n'
    }
    _text += after
    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => ''+replace[name])
   ppbotnya = await conn.getProfilePicture(conn.user.jid)
imagi = await conn.toMSG({ url: ppbotnya }, 'imageMessage')
imagi['jpegThumbnail'] = await getBuffer(ppbotnya);
imagi.fileLength = 99999999999999999;
const freply =     {
					"productMessage": {
						"product": {
							"productImage": imagi,
							"productId": "4361485153945698",
							"title": `Hanzz Botz Next Project`,
							"description" : text.trim(),
	"productImageCount": 1,
	"currencyCode": "IDR",
	"url": "https://hanzz-web.herokuapp.com" ,
	"priceAmount1000": "50000000"
						},
						"businessOwnerJid": "0@s.whatsapp.net"
						}
						}

emsce = await conn.prepareMessageFromContent(m.chat, freply, {quoted: m, sendEphemeral: true})
conn.relayWAMessage(emsce)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, Menu Kami Sedang Error, Silahkan Coba Lagi Nanti', m)
    throw e
  }
}
handler.help = ['menu3']
handler.command = /^(menu3)$/i
handler.tags = ['main'] 
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}