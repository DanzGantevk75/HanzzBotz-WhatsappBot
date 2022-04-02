let handler = async(m, { conn, text }) => {
if (global.DATABASE.data.users[m.sender].cinta > 49) return conn.reply(m.chat, 'Kamu Sudah Punya Pacar!', m)
if(global.DATABASE.data.users[m.sender].rumah < 2) return conn.sendButton(m.chat, 'Kalau Mau Nembak Harus Punya Rumah Dulu!', wm, 'Build', '.build rumahkayu', m)
global.DATABASE.data.users[m.sender].istri = + new Date
global.DATABASE.data.users[m.sender].kareshi = text
global.DATABASE.data.users[m.sender].cinta+=50
 conn.sendButton(m.chat, `Anda Berpacaran Dengan ${text ? '' + text : ''} Dan Anda Mendapatkan 50 Poin Cinta`, wm, 'Action', '.actionn') 
}
handler.help = ['tembak']
handler.command = /^tembakk$/i

module.exports = handler
