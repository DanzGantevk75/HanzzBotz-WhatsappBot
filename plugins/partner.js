let handler = function (m) {
  // this.sendContact(m.chat, '6283144570377', 'Raku Gans', m)
  this.sendContact(m.chat, '6281212083267', 'Hanzz-kun', m)
  this.sendContact(m.chat, '6285826114932', 'Hamzz', m)
  this.sendContact(m.chat, '6287834993722', 'Nathan', m)
  this.sendContact(m.chat, '33650783652', 'Caliph', m)
}
handler.help = ['partner']
handler.tags = ['info']

handler.command = /^(partner)$/i

module.exports = handler
