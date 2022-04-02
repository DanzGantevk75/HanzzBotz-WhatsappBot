let handler = async (m, { conn, args, usedPrefix ,command }) => {
	 if (args.length == 0) throw `\nContoh : \n\n*${usedPrefix}${command} HanzzBotz*\n`
	   let response = args.join(" ")
   await conn.sendMessage(m.chat, `https://kuhong-api.herokuapp.com/api/intromaker?text=${response}&apikey=DdZM5rnLDjuUg89-8QJ`, 'INTRO MAKER ( BETA )', 'intromaker.mp4', m)
      }
handler.help = ['intromaker']
handler.tags = ['videomaker']
handler.command = /^(intromaker)/i
module.exports = handler