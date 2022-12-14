import fs from 'fs'
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `${mg}ð°ðððððð ðð ðððððð ððÌðððð ðð ððððððððð.`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
${eg}
â ð  *${gt} ${vs}*
ââââââââââââââââââ
â ð« ðµððððð
â ${filename}
ââââââââââââââââââ
â ðª ð·ððð
â ${filesizeH}
ââââââââââââââââââ
â ð ð»ððð
â ${ext}`.trim()
conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'â£âââââ BoTâ£',
body: 'ðºðððð ððð ð¾ððððð¨ðð',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://github.com/elrebelde21/The-LoliBot-MD`}}})
  
let info = `ð´ðððð ð 150 ð´ð® ðð ððððððð ððð ðð ðð ðððððÌ`.trim()  
await conn.sendHydrated(m.chat, info, wm, null, ig, '', null, null, [
['ððð£ðª ð¿ðð¨ððð§ððð¨ ð', '#descargasmenu'],
['ððð£ðª ð¾ð¤ð¢ð¥ð¡ðð©ð¤ â¨', '.allmenu'],
['ðð¤ð¡ð«ðð§ ðð¡ ððð£ðªÌ âï¸', '/menu']
], m,)  
/* let vn = './media/descarga.mp3'
*/  
conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch (e) { 
m.reply(`${fg}ð½ððððð ð ðððððððð ðððð ðð ððð ðð ðððððð ððÌðððð ðð ððððððððð`)
console.log(e)
/* conn.sendFile(m.chat, vn, 'descarga.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
*/
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
handler.register = true
handler.limit = 3
handler.exp = 100
export default handler
