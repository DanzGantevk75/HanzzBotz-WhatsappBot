let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  const lbars = global.DATABASE.data.users[m.sender].level
  var zerobars = '[▒▒▒▒▒▒▒▒▒]'

         if (lbars >= '0' && lbars <= '5') {
                zerobars = '[▒▒▒▒▒▒▒▒▒▒]'
         } else if (lbars >= '5' && lbars <= '10') {
				zerobars = '[█▒▒▒▒▒▒▒▒▒]'
		 } else if (lbars >= '10' && lbars <= '20') {
				zerobars = '[██▒▒▒▒▒▒▒▒]'
		} else if (lbars >= '20' && lbars <= '30') {
				zerobars = '[███▒▒▒▒▒▒▒]'
		} else if (lbars >= '30' && lbars <= '40') {
				zerobars = '[████▒▒▒▒▒▒]'
		} else if (lbars >= '40' && lbars <= '50') {
				zerobars = '[█████▒▒▒▒▒]'
		} else if (lbars >= '50' && lbars <= '60') {
				zerobars = '[██████▒▒▒▒]' 
		} else if (lbars >= '60' && lbars <= '70') {
				zerobars = '[███████▒▒▒]'
		} else if (lbars >= '70' && lbars <= '80') {
				zerobars = '[████████▒▒]'
		} else if (lbars >= '80' && lbars <= '90') {
				zerobars = '[█████████▒]'
		} else if (lbars >= '90' && lbars <= '100') {
				zerobars = '[██████████]'
		} else { 
				zerobars = '[██████████]'
		} 
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, regTime, age, money, healt, role } = global.DATABASE.data.users[m.sender]
    let username = conn.getName(who)
    let str = `
 *DOMPET* 
    
*Username:* ${username}
*Money:* Rp.${money}
*Xp:* ${exp}
*Limit:* ${limit}
*Health:* ${healt}
*Role:* ${role}
*Level:* ${zerobars}
`.trim()
    let mentionedJid = [who]
    m.reply(str)
  }
}
handler.help = ['dompet']
handler.tags = ['xp']
handler.command = /^dompet|bank$/i
module.exports = handler