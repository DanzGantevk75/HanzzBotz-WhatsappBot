const sewabot = () => { 
	return `
*OPEN JASA SEWA BOT*

Sewa Seminggu : 5k
Sewa Sebulan : 10k
Jadi Owner Seminggu : 25k

*Payment :*
_Pulsa,Dana Dan Gopay_

Minat?PC
Wa.me/6288270863279
`
}
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^(sewa)$/i

module.exports = handler
