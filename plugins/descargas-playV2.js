import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, conn, text, usedPrefix }) => {
if (!text) throw `${mg}π€π¦πͺπ ππ¨π©π ππͺπ¨ππππ€?π€ ππ£ππ§ππ¨π ππ‘ π£π€π’ππ§π/π©ππ©πͺπ‘π€ ππ πππ£πππ€π£\ππππ’π₯π‘π€\n*${usedPrefix + command} Bad Bunny - am*`
try {
if (command == 'play') {
conn.reply(m.chat, `${eg}β³Procesandoβ³`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'The Lolibot-MD',
body: 'Super Bot WhatsApp',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://github.com/elrebelde21/The-LoliBot-MD`}}}) 
  
let res = await fetch("https://api.dhamzxploit.my.id/api/ytplaymp3?text="+text)
//https://leyscoders-api.herokuapp.com/api/playmp3?q=lebih%20baik%20darinya&apikey=Your_Key
  //("https://api.dhamzxploit.my.id/api/ytplaymp3?text="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play2') {
conn.reply(m.chat, `${eg}β³Procesandoβ³`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'β£βββββ BoTβ£',
body: 'ππͺπ₯ππ§ ππ€π© ππππ©π¨πΌπ₯π₯',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://github.com/elrebelde21/The-LoliBot-MD`}}})
  
let res = await fetch("https://api.dhamzxploit.my.id/api/ytplaymp4?text="+text) 
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp4', `${wm}`, m)}
}catch(e){
m.reply(`${fg}ππ£π©ππ£π©π ππ π£πͺππ«π€π¨`)
console.log(e)
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']
export default handler
