let handler  = async (m, { conn }) => {
let wm = global.wm
  conn.sendButton(m.chat,`“${pickRandom(global.quotesanim)}”`, wm, 'Get Again', '.quotesanim', m)
}
handler.help = ['quotesanim']
handler.tags = ['quotes']
handler.command = /^(quotesanim)$/i
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

// https://jalantikus.com/tips/kata-kata-bucin/
global.quotesanim = [
    "Jangan hanya mengatakannya saja, tapi buktikanlah dengan tindakanmu!(Uzumaki Boruto, Boruto)", 
    "Yang namanya manusia itu punya semangat hidup, kau tidak bisa mengukur seseorang sukses dalam sekejap, selama manusia melakukan apa yang bisa ia lakukan dia punya hak untuk merasa bangga. (Tom, One Piece)", 
    "Manusia itu sama dengan pedang. Kalau tak diasah maka dia akan tumpul. (Orochimaru, Naruto)",
    "Hidup ini seperti pensil yang lama lama akan habis, tetapi akan meninggalkan tulisan yang indah dalam kehidupan. (Nami, One Piece)",
    "Kata-kata yang telah keluar dari mulutmu takkan bisa kau tarik kembali. jadi, kau harus melakukan tindakan untuk mewujudkan kata-kata yang telah kau ucapkan. (Dyne Woodwonder, Overlord)",
    "Kau tidak dapat mencapai apapun jika kau tidak membuat perubahan. (Tachibana, Nisekoi)",
    "Manusia adalah makhluk yang perkasa, karena kita memiliki kemampuan untuk merubah diri kita sendiri. (Saitama, One Punch Man)",
    "Mempelajari masa lalu untuk memperkirakan masa depan. Itulah arti penting mengetahui sejarah. (Pain Akatsuki, Naruto)",
    "Mula-mula, kau harus merubah dirimu sendiri, atau tidak akan ada yang berubah untukmu. (Sakata Gintoki, Gintama)",
    "Mungkin hanya akan ada warna hitam yang memenuhi jalan, tapi kau harus percaya dan terus melangkah. Percaya bahwa bintang akan menyinari langkahmu walau temaram. (Kaori Miyazono, Shigatsu Wa Kimi No Uso)",
    "Pepatah mengatakan, seseorang yang selalu menang belum tentu jadi pemenang. (Kuno, Ranma 1/2)",
    "Saat kau mendaki, pasti kau bertujuan untuk sampai di puncak. Tapi, jangan pernah lewatkan pemandangan indah di perjalanan. (Kiyoshi Teppei, Kuroko No Basket)",
    "Sejujurnya, hanya ada sedikit arti di balik nama yang orang tuamu berikan. Apa yang lebih berarti adalah, yang orang tuamu lakukan di balik nama itu selama kehidupannya. (Korosensei, Assassination Classroom)",
    "Jangan pernah meremehkan diri sendiri, karena diri sendiri ada kelebihan tersendiri. (Portgas D Ace, One Piece)",
    "Jangan hanya mengatakannya saja, tapi buktikanlah dengan tindakanmu. (Uzumaki Boruto, Boruto)",
    "Jangan hanya menghitung apa yang telah hilang, tetapi pikirkan apa yang masih kita miliki. (Jinbei, One Piece)",
    "Perkembangan dapat terjadi ketika seseorang melampaui batas kemampuannya. (Uchiha Itachi, Naruto)",
    "Kalau kau terus berpikir dan tak melakukan apa-apa, kau akan tertinggal jauh. (Killua, Hunter X Hunter)"]