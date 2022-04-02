let handler = m => m.reply('وَعَلَيْكُمُ السَّلاَمُ')

handler.customPrefix = /assalamualaikum|Assalamualaikum/i
handler.command = new RegExp

module.exports = handler