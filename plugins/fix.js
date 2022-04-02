let handler = async (m, { conn, usedPrefix }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (id in conn.siapakahaku) {
    throw false
if (conn.siapakahaku[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.math.jawaban}*`, conn.siapakahaku[id][0])
            delete conn.siapakahaku[id]
            })
        ]
}
handler.command = /^gg$/i

module.exports = handler