let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`*_Menurut Ramalan..._* “${pickRandom(global.cita2)}”`, m)
}
handler.help = ['citacita']
handler.tags = ['primbon']
handler.command = /^(citacita)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.cita2 = [
" Kamu Akan Menjadi Seseorang Menjadi Guru Terbaik Disekolah",
" Kamu Akan Menjadi Seseorang Maling Lalu Ditangkap Warga",
" Kamu Akan Menjadi Seseorang Yang Bertemu Rasurullah Di Surga, Amin",
" Kamu Akan Menjadi Seseorang Lonte Lalu Kamu Kaya Tetapi Kamu Menderita",
" Kamu Akan Menjadi Seseorang Pemabuk Dan Penjudi Lalu Kamu Jatuh Miskin Dan Ditangkap Polisi",
" Kamu Akan Menjadi Seseorang Pengusa Sukses Yang Sangat Kaya Raya",
" Kamu Akan Menjadi Seseorang Yang Mempunyai Istri Banyak Dan Hidup Damai",
" Kamu Akan Menjadi Seseorang Gelandangan Yang Mempunyai Banyak Hutang",
" Kamu Akan Menjadi Seseorang Army BTS Yang Stress",
" Kamu Akan Menjadi Seseorang Wibu Yang Stress",
" Kamu Akan Menjadi Seseorang Kuproy Dengan Gaji Tinggi",
" Kamu Akan Menjadi Seseorang Pemulung Yang Tidak Mempunyai Rumah",
" Kamu Akan Menjadi Seseorang Pemain Esport Namun Anda Kalah Dalan Pertandingan Dan Dihujat Oleh Pendukungmu",
]
