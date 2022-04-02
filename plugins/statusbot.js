let handler = async (m, { conn, usedPrefix, command, text, args, isROwner, isAdmin }) => {
  switch (args[0].toLowerCase()) {

    case 'off':
      opts.disable = true
      m.reply('```BOT OFFLINE NOW```')
      break
    case 'on':
      opts.disable = false
      m.reply('```BOT ONLINE NOW```')
      break
  }
      
}
handler.command = /^to$/i
handler.rowner = true
module.exports = handler

//Thanks To IlhamGans