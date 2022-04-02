let { MessageType } = require('@adiwajshing/baileys')

const timeout = 1800000

                                     let handler = async (m, { conn, usedPrefix, text }) => {
	                                 let apelu = global.DATABASE.data.users[m.sender].bibitapel
                                     let angguru = global.DATABASE.data.users[m.sender].bibitanggur
                                     let manggau = global.DATABASE.data.users[m.sender].bibitmangga
                                     let pisangu = global.DATABASE.data.users[m.sender].bibitpisang
                                     let jeruku = global.DATABASE.data.users[m.sender].bibitjeruk 
	                                 let time = global.DATABASE.data.users[m.sender].lastberkebun + 1800000
                                     if (apelu == 0 || angguru == 0 || manggau == 0 || pisangu == 0 || jeruku == 0) return m.reply(`*Pastikan kamu memiliki semua bibit*\n*Seperti Bibit Apel, Bibit Mangga, Bibit Jeruk, Bibit Pisang, Bibit Anggur*\n\nKetik :\n${usedPrefix}shop buy bibitmangga 50\n\n*List*\nbibitmangga\nbibitanggur\nbibitpisang\nbibitjeruk\nbibitapel`)
                                     if (new Date - global.DATABASE.data.users[m.sender].lastberkebun< 1800000) throw `Anda sudah menanam\nMohon tunggu hasil panenmu\nTunggu selama ${msToTime(time - new Date())} lagi`
                                     if (global.DATABASE.data.users[m.sender].bibitmangga > 49) {
                                 	if (global.DATABASE.data.users[m.sender].bibitapel > 49) {
                                 	if (global.DATABASE.data.users[m.sender].bibitpisang > 49) {
                                 	if (global.DATABASE.data.users[m.sender].bibitjeruk > 49) {
                                 	if (global.DATABASE.data.users[m.sender].bibitanggur > 49) {
                                     let pisangpoin = `${Math.floor(Math.random() * 50)}`.trim()
                                     let anggurpoin = `${Math.floor(Math.random() * 50)}`.trim()
                                     let manggapoin = `${Math.floor(Math.random() * 50)}`.trim()
                                     let jerukpoin = `${Math.floor(Math.random() * 50)}`.trim()
                                     let apelpoin = `${Math.floor(Math.random() * 50)}`.trim()
                                     global.DATABASE.data.users[m.sender].pisang += pisangpoin * 1
                                     global.DATABASE.data.users[m.sender].anggur += anggurpoin * 1
                                     global.DATABASE.data.users[m.sender].mangga += manggapoin * 1
                                     global.DATABASE.data.users[m.sender].jeruk += jerukpoin * 1
                                     global.DATABASE.data.users[m.sender].apel += apelpoin * 1
                                     global.DATABASE.data.users[m.sender].tiketcoin += 1
                                     global.DATABASE.data.users[m.sender].bibitpisang -= 50
                                     global.DATABASE.data.users[m.sender].bibitanggur -= 50
                                     global.DATABASE.data.users[m.sender].bibitmangga -= 50
                                     global.DATABASE.data.users[m.sender].bibitjeruk -= 50
                                     global.DATABASE.data.users[m.sender].bibitapel -= 50
                                     global.DATABASE.data.users[m.sender].lastberkebun = new Date * 1
                                     m.reply(`Selamat kamu mendapatkan : \n+${pisangpoin} Pisang\n+${manggapoin} Mangga\n+${anggurpoin} Anggur\n+${jerukpoin} Jeruk\n+${apelpoin} Apel`)
                                     setTimeout(() => {
					                      conn.reply(m.chat, `Waktunya berkebun lagi kak!`, m)
					                  }, timeout)
                                  } else m.reply(`Pastikan bibit anggur kamu *50* untuk bisa berkebun`)
                              } else m.reply(`Pastikan bibit jeruk kamu *50* untuk bisa berkebun`)
                          } else m.reply(`Pastikan bibit pisang kamu *50* untuk bisa berkebun`)
                      } else m.reply(`Pastikan bibit apel kamu *50* untuk bisa berkebun`)
                  } else m.reply(`Pastikan bibit mangga kamu *50* untuk bisa berkebun`)
              }
handler.help = ['berkebun']
handler.tags = ['rpg']
handler.command = /^(berkebun)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false
handler.exp = 0
handler.money = 0

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}