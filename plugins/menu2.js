let fetch = require('node-fetch')

let { JSDOM } = require('jsdom')
let fs = require ('fs')
let path = require('path')
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
      'main': 'ππΌππ',
      'stres': 'πππππ ππππ',
      'api': 'πΌππ ππππ',
      'wibu': 'πΌππππ ππππ',
      'game': 'ππΌππ',
      'xp': 'πππ & πππππ',
      'sticker': 'ππππΎπππ',
      'textpro': 'πππππππ',
      'kerang': 'ππππΌππ ππππ',
      'quotes': 'ππππππ',
      'admin': 'πΌπΏπππ',
      'group': 'πππππ',
      'premium': 'πππππππ',
      'sange': 'ππππ',
      'internet': 'ππππππππ',
      'nulis': 'ππΌππππππππ & ππππ',
      'downloader': 'πΏππππππΌπΏππ',
      'tools': 'πππππ',
      'fun': 'πππ',
      'jadibot': 'ππΌπΏππ½ππ',
      'owner': 'πππππ',
      'host': 'ππππ',
      'advanced': 'πΌπΏππΌππΎππΏ',
      'info': 'ππππ',
      '': 'ππ πΎπΌππππππ',
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
ββββ¬£ ππππ
β
ββ¬‘ Mode : ${opts.disable ? 'Self' : 'Public'}
ββ¬‘ Jam : ${require('moment-timezone').tz("Asia/Jakarta").format("HH:mm:ss")}
ββ¬‘ Tanggal : ${require('moment-timezone').tz("Asia/Jakarta").format("DD-MM-YYYY")}
ββ¬‘ Feature : ${totalfeature} *Features*
ββ¬‘ Battery : *${conn.battery ? conn.battery.value : '85'}β*
ββ¬£
`
    let header = conn.menu.header || 'ββββ¬£ %category\nβ'
    let body   = conn.menu.body   || 'ββ¬‘ %cmd%islimit'
    let footer = conn.menu.footer || 'ββ¬£\n'
    let after  = conn.menu.after  || (conn.user.jid == global.conn.user.jid ? '' : `Powered by @${global.conn.user.jid.split`@`[0]}`) + `\n*%npmname@^%version*\n\`\`\`\%npmdesc\`\`\``
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
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, time, totalreg, rtotalreg,
      readmore: readMore
    }
let text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => ''+replace[name])
let ppbot = './src/logo.jpg'
['jpegThumbnail'] = await conn.getProfilePicture(ppbot)
const freply =     {
					"productMessage": {
						"product": {
							"productImage": image,
							"productId": "4361485153945698",
							"title": `Hanzz Botz`,
							"description" : text.trim(),
	"productImageCount": 1,
	"currencyCode": "IDR",
	"url": "https://hanzz-web.herokuapp.com",
	"priceAmount1000": "50000000"
						},
						"businessOwnerJid": "0@s.whatsapp.net"
						}
						}

ceh = await conn.prepareMessageFromContent(m.chat, freply, {quoted: m, sendEphemeral: true})
conn.relayWAMessage(ceh)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.command = /^(menu2)$/i
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