let { MessageType } = require('@adiwajshing/baileys')
const Bpotion = 500
const Spotion = 150 
const Bdiamond = 1500
const Sdiamond = 1000
const Bcommon = 200
const Scommon = 20
const Suncommon = 100
const Buncommon = 600
const Bmythic = 2000 
const Smythic = 500
const Blegendary = 7500 
const Slegendary = 3000
const Bsampah = 30
const Ssampah = 10
const Bkayu = 300
const Skayu = 100
const Biron = 500
const Siron = 300
const Bgold = 900
const Sgold = 500
const Bapel = 50
const Bjeruk = 50
const Banggur = 50
const Bpisang = 50
const Bmangga = 50
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchat = `
${usedPrefix}shop <Buy|sell> <item> <jumlah>\n
Contoh penggunaan: *${usedPrefix}shop buy potion 1*\n\n
Halo User, Selamat Datang Di Toko Kami,\n Kamu Dapat Membeli Item Berikut:\n
╭─「 Item 」
│ - Potion : ${Bpotion}
│ - Diamond : ${Bdiamond}
│ - Gold : ${Bgold}
│ - Kayu :  ${Bkayu}
│ - Iron : ${Biron}
╰────
╭─「 Crate 」
│ - Common : ${Bcommon}
│ - Uncommon : ${Buncommon}
╰────

╭─「 Bibit 」
│ - Apel : ${Bapel}
│ - Anggur : ${Banggur}
│ - Jeruk : ${Bjeruk}
│ - Mangga : ${Bmangga}
│ - Pisang : ${Bpisang}
╰────
Kamu Juga Dapat Menjual Item Berikut:\n
╭─「 Item 」
│ - Diamond : ${Sdiamond}
│ - Gold : ${Sgold}
│ - Kayu :  ${Skayu}
│ - Iron : ${Siron}
│ - Sampah : ${Ssampah}
╰────
`.trim()
    try {
        if (/shop|toko/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = global.DATABASE.data.users[m.sender].sampah
            switch (jualbeli) {
            case 'buy':
                switch (_type) {
                     case 'potion':
                            if (global.DATABASE.data.users[m.sender].money >= Bpotion * count) {
                                global.DATABASE.data.users[m.sender].potion += count * 1
                                global.DATABASE.data.users[m.sender].money -= Bpotion * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Potion Dengan Harga ${Bpotion * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        
                        break
                    case 'diamond':
                            if (global.DATABASE.data.users[m.sender].money >= Bdiamond * count) {
                                global.DATABASE.data.users[m.sender].diamond += count * 1
                                global.DATABASE.data.users[m.sender].money -= Bdiamond * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Diamond Dengan Harga ${Bdiamond * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        
                        break
                    case 'common':
                            if (global.DATABASE.data.users[m.sender].money >= Bcommon * count) {
                                global.DATABASE.data.users[m.sender].common += count * 1
                                global.DATABASE.data.users[m.sender].money -= Bcommon * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Common Crate Dengan Harga ${Bcommon * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Common Crate Dengan Harga ${Bcommon * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open common*`, m)
                        
                        break
                    case 'uncommon':
                            if (global.DATABASE.data.users[m.sender].money >= Buncommon * count) {
                                global.DATABASE.data.users[m.sender].uncommon += count * 1
                                global.DATABASE.data.users[m.sender].money -= Buncommon * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open uncommon*`, m)
                        
                        break
                    case 'mythic':
                            if (global.DATABASE.data.users[m.sender].money >= Bmythic * count) {
                                    global.DATABASE.data.users[m.sender].mythic += count * 1
                                global.DATABASE.data.users[m.sender].money -= Bmythic * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Mythic Crate Dengan Harga ${Bmythic * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Mythic Crate Dengan Harga ${Bmythic* count} Money\n\nBuka Crate Dengan Ketik:*${usedPrefix}open mythic*`, m)
                        
                        break
                    case 'sampah':
                            if (global.DATABASE.data.users[m.sender].money >= Bsampah * count) {
                                global.DATABASE.data.users[m.sender].sampah += count * 1
                                global.DATABASE.data.users[m.sender].money -= Bsampah * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Sampah Dengan Harga ${Bsampah * count} Money `, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Sampah Dengan Harga ${Bsampah * count} Money`.trim(), m)
                        
                        break
                    case 'kayu':
                            if (global.DATABASE.data.users[m.sender].money >= Bkayu * count) {
                                global.DATABASE.data.users[m.sender].kayu += count * 1
                                global.DATABASE.data.users[m.sender].money -= Bkayu * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Kayu Dengan Harga ${Bkayu * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                         break
                    case 'gold':
                            if (global.DATABASE.data.users[m.sender].money >= Bgold * count) {
                                global.DATABASE.data.users[m.sender].emas += count * 1
                                global.DATABASE.data.users[m.sender].money -= Bgold * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Gold Dengan Harga ${Bgold * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                         break
                    case 'apel':
                            if (global.DATABASE.data.users[m.sender].money >= Bapel * count) {
                                global.DATABASE.data.users[m.sender].bibitapel += count * 1
                                global.DATABASE.data.users[m.sender].money -= Bapel * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Bibit Apel Dengan Harga ${Bapel * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Bibit Apel Dengan Harga ${Bapel * count} Money*`, m)
                        
                        break
                    case 'anggur':
                            if (global.DATABASE.data.users[m.sender].money >= Bapel * count) {
                                global.DATABASE.data.users[m.sender].bibitanggur += count * 1
                                global.DATABASE.data.users[m.sender].money -= Bapel * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Bibit Anggur Dengan Harga ${Bapel * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Bibit Anggur Dengan Harga ${Bapel * count} Money*`, m)
                        
                        break       
                     case 'jeruk':
                            if (global.DATABASE.data.users[m.sender].money >= Bapel * count) {
                                global.DATABASE.data.users[m.sender].bibitjeruk += count * 1
                                global.DATABASE.data.users[m.sender].money -= Bapel * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Bibit Jeruk Dengan Harga ${Bapel * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Bibit Jeruk Dengan Harga ${Bapel * count} Money*`, m)
                        
                        break      
                    case 'mangga':
                            if (global.DATABASE.data.users[m.sender].money >= Bapel * count) {
                                global.DATABASE.data.users[m.sender].bibitmangga += count * 1
                                global.DATABASE.data.users[m.sender].money -= Bapel * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Bibit Mangga Dengan Harga ${Bapel * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Bibit Mangga Dengan Harga ${Bapel * count} Money*`, m)
                        
                        break           
                    case 'pisang':
                            if (global.DATABASE.data.users[m.sender].money >= Bapel * count) {
                                global.DATABASE.data.users[m.sender].bibitpisang += count * 1
                                global.DATABASE.data.users[m.sender].money -= Bapel * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Bibit Pisang Dengan Harga ${Bapel * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Bibit Pisang Dengan Harga ${Bapel * count} Money*`, m)
                        
                        break                     
                    case 'iron':
                            if (global.DATABASE.data.users[m.sender].money >= Biron * count) {
                                global.DATABASE.data.users[m.sender].iron += count * 1
                                global.DATABASE.data.users[m.sender].money -= Biron * count
                                conn.reply(m.chat, `Sukses Membeli ${count} Iron Dengan Harga ${Biron * count} Money`, m)
                            } else conn.reply(m.chat, `Uang Anda Tidak Cukup`, m)
                        
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            case 'sell': 
                switch (_type) {
                    case 'potion':
                        if (global.DATABASE.data.users[m.sender].potion >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Spotion * count
                            global.DATABASE.data.users[m.sender].potion -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Potion Dengan Harga ${Spotion * count} Money `.trim(), m)
                        } else conn.reply(m.chat, `Potion Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'common':
                        if (global.DATABASE.data.users[m.sender].common >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Scommon * count
                            global.DATABASE.data.users[m.sender].common -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Common Crate Dengan Harga ${Scommon * count} Money`.trim(), m)
                        } else conn.reply(m.chat, `Common Crate Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'uncommon':
                        if (global.DATABASE.data.users[m.sender].uncommon >= count * 1) {
                            global.DATABASE.data.users[m.sender].money += Suncommon * count
                            global.DATABASE.data.users[m.sender].uncommon -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Uncommon Crate Dengan Harga ${Suncommon * count} Money`.trim(), m)
                        } else conn.reply(m.chat, `Uncommon Crate Kamu Tidak Cukup`.trim(), m)
                        break
                    case 'sampah':
                        if (global.DATABASE.data.users[m.sender].sampah >= count * 1) {
                            global.DATABASE.data.users[m.sender].sampah -= count * 1
                            global.DATABASE.data.users[m.sender].money += Ssampah * count
                            conn.reply(m.chat, `Sukses Menjual ${count} Sampah , Dan Anda Mendapatkan ${Ssampah * count} Money `, m)
                        } else conn.reply(m.chat, `Sampah Anda Tidak Cukup `, m)
                        break
                    case 'diamond':
                        if (global.DATABASE.data.users[m.sender].diamond >= count * 1) {
                            global.DATABASE.data.users[m.sender].diamond -= count * 1
                            global.DATABASE.data.users[m.sender].money += Sdiamond * count
                            conn.reply(m.chat, `Sukses Menjual ${count} Diamond, Dan Anda Mendapatkan ${Sdiamond * count} Money `, m)
                        } else conn.reply(m.chat, `Diamond Anda Tidak Cukup `, m)
                        break
                   case 'kayu':
                        if (global.DATABASE.data.users[m.sender].kayu >= count * 1) {
                            global.DATABASE.data.users[m.sender].kayu -= count * 1
                            global.DATABASE.data.users[m.sender].money += Skayu * count
                            conn.reply(m.chat, `Sukses Menjual ${count} Kayu, Dan Anda Mendapatkan ${Skayu * count} Money `, m)
                        } else conn.reply(m.chat, `Kayu Anda Tidak Cukup `, m)
                        break
                    case 'gold':
                        if (global.DATABASE.data.users[m.sender].emas >= count * 1) {
                            global.DATABASE.data.users[m.sender].emas -= count * 1
                            global.DATABASE.data.users[m.sender].money += Sgold * count
                            conn.reply(m.chat, `Sukses Menjual ${count} Gold, Dan Anda Mendapatkan ${Sgold * count} Money `, m)
                        } else conn.reply(m.chat, `Gold Anda Tidak Cukup `, m)
                        break
                    case 'iron':
                        if (global.DATABASE.data.users[m.sender].iron >= count * 1) {
                            global.DATABASE.data.users[m.sender].iron -= count * 1
                            global.DATABASE.data.users[m.sender].money += Siron * count
                            conn.reply(m.chat, `Sukses Menjual ${count} Iron, Dan Anda Mendapatkan ${Siron * count} Money `, m)
                        } else conn.reply(m.chat, `Iron Anda Tidak Cukup `, m)
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            default:
                return conn.reply(m.chat, Kchat, m)
            }
        } else if (/beli|buy/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                        if (global.DATABASE.data.users[m.sender].money >= potion * count) {
                            global.DATABASE.data.users[m.sender].money -= potion * count
                            global.DATABASE.data.users[m.sender].potion += count * 1
                            conn.reply(m.chat, `Sukses membeli ${count} Potion Dengan Harga ${potion * count} Money \n\nGunakan Potion Dengan Ketik: *${usedPrefix}use potion <jumlah>*`, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Potion Dengan Harga ${potion * count} Money`,m)
                    
                    break
                case 'diamond':
                        if (global.DATABASE.data.users[m.sender].money >= Bdiamond * count) {
                            global.DATABASE.data.users[m.sender].diamond += count * 1
                            global.DATABASE.data.users[m.sender].money -= Bdiamond * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Diamond Dengan Harga ${Bdiamond * count} Money `, m)
                        } else conn.reply(m.chat, `Money Anda Tidak Cukup `, m)
                    
                    break
                case 'common':
                        if (global.DATABASE.data.users[m.sender].money >= Bcommon * count) {
                            global.DATABASE.data.users[m.sender].common += count * 1
                            global.DATABASE.data.users[m.sender].money -= Bcommon * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Common Crate Dengan Harga ${Bcommon * count} Money `, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Common Crate Dengan Harga ${Bcommon * count} Money \n\nBuka Crate Dengan Ketik : *${usedPrefix}open common*`, m)
                    
                    break
                case 'uncommon':
                        if (global.DATABASE.data.users[m.sender].money >= Buncommon * count) {
                            global.DATABASE.data.users[m.sender].uncommon += count * 1
                            global.DATABASE.data.users[m.sender].money -= Buncommon * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} Money `, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Uncommon Crate Dengan Harga ${Buncommon * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open uncommon*`, m)
                   
                    break
                case 'mythic':
                        if (global.DATABASE.data.users[m.sender].money >= Bmythic * count) {
                            global.DATABASE.data.users[m.sender].mythic += count * 1
                            global.DATABASE.data.users[m.sender].money -= Bmythic * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Mythic Crate Dengan Harga ${Bmythic * count} Money `, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Mythic Crate Dengan Harga ${Bmythic* count} money\n\nBuka Crate Dengan Ketik: *${usedPrefix}open mythic*`, m)
                    
                    break
                case 'legendary':
                        if (global.DATABASE.data.users[m.sender].money >= Blegendary * count) {
                            global.DATABASE.data.users[m.sender].legendary += count * 1
                            global.DATABASE.data.users[m.sender].money -= Blegendary * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Legendary Crate Dengan Harga ${Blegendary * count} Money`, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Legendary Crate Dengan Harga ${Blegendary * count} Money \n\nBuka Crate Dengan Ketik: *${usedPrefix}open legendary*`, m)
                    
                    break
                case 'sampah':
                        if (global.DATABASE.data.users[m.sender].money >= Bsampah * count) {
                            global.DATABASE.data.users[m.sender].sampah += count * 1
                            global.DATABASE.data.users[m.sender].money -= Bsampah * count
                            conn.reply(m.chat, `Sukses Membeli ${count} Sampah Dengan Harga ${Bsampah * count} money`, m)
                        } else conn.reply(m.chat, `Uang Anda Tidak Cukup Untuk Membeli ${count} Sampah Dengan Harga ${Bsampah * count} Money `.trim(), m)
                    
                    break
                case 'armor':
                        if (global.DATABASE.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu Telah *Level Max*', m)
                        if (global.DATABASE.data.users[m.sender].money > armor * 1) {
                            global.DATABASE.data.users[m.sender].armor += 1
                            global.DATABASE.data.users[m.sender].money -= armor * 1
                            conn.reply(m.chat, `Sukses Membeli Armor Seharga ${armor} Money` ,m)
                          
                        } else conn.reply(m.chat, `Uang Mu Tidak Cukup Untuk Membeli Armor Seharga ${armor} Money`, m)
                        break
                   case 'kayu':
                            if (global.DATABASE.data.users[m.sender].money > kayu) {
                                global.DATABASE.data.users[m.sender].kayu += count * 1
                                global.DATABASE.data.users[m.sender].money -= Bkayu * 1
                                conn.reply(m.chat, `Sukses Membeli Kayu Seharga ${Bkayu} Money` ,m)
                            } else conn.reply(m.chat, `Uang Mu Tidak Cukup Untuk Membeli Kayu Seharga ${BKayu} Money`, m)
                         break
                    case 'gold':
                            if (global.DATABASE.data.users[m.sender].money > gold) {
                                global.DATABASE.data.users[m.sender].gold += count * 1
                                global.DATABASE.data.users[m.sender].money -= Bgold * 1
                                conn.reply(m.chat, `Sukses Membeli Gold Seharga ${Bgold} Money` ,m)
                            } else conn.reply(m.chat, `Uang Mu Tidak Cukup Untuk Membeli Gold Seharga ${Bgold} Money`, m)
                         break
                    case 'iron':
                            if (global.DATABASE.data.users[m.sender].money > iron) {
                                global.DATABASE.data.users[m.sender].iron += count * 1
                                global.DATABASE.data.users[m.sender].money -= Biron * 1
                                conn.reply(m.chat, `Sukses Membeli Iron Seharga ${Biron} Money` ,m)
                            } else conn.reply(m.chat, `Uang Mu Tidak Cukup Untuk Membeli Iron Seharga ${Biron} Money`, m)                        
                    
                    break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        } else if (/sell|jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                    if (global.DATABASE.data.users[m.sender].potion >= count * 1) {
                        global.DATABASE.data.users[m.sender].money += Spotion * count
                        global.DATABASE.data.users[m.sender].potion -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Potion Dengan Harga ${Spotion * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Potion Kamu Tidak Cukup `.trim(), m)
                    break
                case 'common':
                    if (global.DATABASE.data.users[m.sender].common >= count * 1) {
                        global.DATABASE.data.users[m.sender].money += Scommon * count
                        global.DATABASE.data.users[m.sender].common -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Common Crate Dengan Harga ${Scommon * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Common Crate Kamu Tidak Cukup `.trim(), m)
                    break
                case 'uncommon':
                    if (global.DATABASE.data.users[m.sender].uncommon >= count * 1) {
                        global.DATABASE.data.users[m.sender].money += Suncommon * count
                        global.DATABASE.data.users[m.sender].uncommon -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Uncommon Crate Dengan Harga ${Suncommon * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Uncommon Crate Kamu Tidak Cukup`.trim(), m)
                    break
                case 'mythic':
                    if (global.DATABASE.data.users[m.sender].mythic >= count * 1) {
                        global.DATABASE.data.users[m.sender].money += Smythic * count
                        global.DATABASE.data.users[m.sender].mythic -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Mythic Crate Dengan Harga ${Smythic * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Mythic Crate Kamu Tidak Cukup `.trim(), m)
                    break
                case 'legendary':
                    if (global.DATABASE.data.users[m.sender].legendary >= count * 1) {
                        global.DATABASE.data.users[m.sender].money += Slegendary * count
                        global.DATABASE.data.users[m.sender].legendary -= count * 1
                        conn.reply(m.chat, `Sukses Menjual ${count} Legendary Crate Dengan Harga ${Slegendary * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Legendary Crate Kamu Tidak Cukup`.trim(), m)
                    break
                case 'sampah':
                    if (global.DATABASE.data.users[m.sender].sampah >= count * 1) {
                        global.DATABASE.data.users[m.sender].sampah -= count * 1
                        global.DATABASE.data.users[m.sender].money += Ssampah * count
                        conn.reply(m.chat, `Sukses Menjual ${count} Sampah, Dan Anda Mendapatkan ${Ssampah * count} Money`.trim(), m)
                    } else conn.reply(m.chat, `Sampah Anda Tidak Cukup`.trim(), m)
                    break
                case 'diamond':
                    if (global.DATABASE.data.users[m.sender].diamond >= count * 1) {
                        global.DATABASE.data.users[m.sender].diamond -= count * 1
                        global.DATABASE.data.users[m.sender].money += Sdiamond * count
                        conn.reply(m.chat, `Sukses Menjual ${count} Diamond, Dan Anda Mendapatkan ${Sdiamond * count} Money`, m)
                    } else conn.reply(m.chat, `Diamond Anda Tidak Cukup `, m)
                    case 'kayu':
                        if (global.DATABASE.data.users[m.sender].kayu >= count * 1) {
                            global.DATABASE.data.users[m.sender].kayu -= count * 1
                            global.DATABASE.data.users[m.sender].money += Skayu* count
                            conn.reply(m.chat, `Sukses Menjual ${count} Kayu, Dan Anda Mendapatkan ${Skayu * count} Money `, m)
                        } else conn.reply(m.chat, `Kayu Anda Tidak Cukup `, m)
                        
                        break
                    case 'gold':
                        if (global.DATABASE.data.users[m.sender].gold >= count * 1) {
                            global.DATABASE.data.users[m.sender].gold -= count * 1
                            global.DATABASE.data.users[m.sender].money += Sgold * count
                            conn.reply(m.chat, `Sukses Menjual ${count} Gold, Dan Anda Mendapatkan ${SGold * count} Money `, m)
                        } else conn.reply(m.chat, `Gold Anda Tidak Cukup `, m)
                        
                        break
                    case 'iron':
                        if (global.DATABASE.data.users[m.sender].iron >= count * 1) {
                            global.DATABASE.data.users[m.sender].iron -= count * 1
                            global.DATABASE.data.users[m.sender].money += Siron * count
                            conn.reply(m.chat, `Sukses Menjual ${count} Iron, Dan Anda Mendapatkan ${Siron * count} Money `, m)
                        } else conn.reply(m.chat, `Iron Anda Tidak Cukup `, m)     
               
                    break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, Kchat, m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['shop <sell|buy> <args>', 'toko <sell|buy> <args>']
handler.tags = ['rpg']
    
handler.command = /^(shop|toko|buy|beli|sell|jual)$/i
module.exports = handler