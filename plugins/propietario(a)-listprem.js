import fs from 'fs'
let handler = async (m, { conn }) => {
let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)

await conn.reply(m.chat, `*β­β[ ππ¨πͺππ§ππ€π¨  π₯π§ππ’ππͺπ’  ]ββ¬£*\n*β*\n` + prem.map(v => '*β* β₯ π @' + v.replace(/@.+/, ' π')).join`\n`, m, { contextInfo: { mentionedJid: prem } }) 
   
  let text = `πΈππ πππ!! π `.trim()   
await conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'β£βββββ BoTβ£',
body: 'πΊππππ π©ππ πΎπππππ¨ππ',         
previewType: 1, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `${yt}`}}})

/*
await conn.sendHydrated(m.chat, null, wm, null, ig, 'ππ£π¨π©πππ§ππ’', null, null, [
['ππ€π₯ ππ¨πͺππ§ππ€π¨ π', '.top'],
['πΎπͺππ£π©ππ¨ πππππππ‘ππ¨ β', '/cuentasgb'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', '/menu']
], m,)
 */
 
}
handler.help = ['premlist']
handler.tags = ['owner']
handler.command = /^(listprem|premlist)$/i

export default handler
