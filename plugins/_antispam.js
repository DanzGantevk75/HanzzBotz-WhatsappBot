let fs = require('fs')
let delay = require('delay')
let handler = async (m, { conn, text }) => {

    conn.spam = conn.spam ? conn.spam : {}
 if (conn.spam[m.chat]) throw '*Jangan Spam, Coldown 5 detik!!!!*'
 conn.spam[m.chat] = true 
 setTimeout(() => { 
   delete conn.spam[m.chat]
  }, 5 * 1000)
    }

module.exports = handler
