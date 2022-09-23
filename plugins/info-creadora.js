import fs from 'fs'
function handler(m, { conn }) {
let vn = './media/creador.mp3'
let text = `
*КОНТАКТЫ* 
*Wa.me/79773452127 (Владелец и Создатель)*
*wa.me/79010070455 (Админ)*
*wa.me/6283147342377 (Бот)*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '☣ⓀⓞⓂⓐⓇ BoT☣',
body: '𝐂𝐫𝐞𝐚𝐝𝐨𝐫',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://wa.me/79773452127`}}})
  
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = './media/menus/Menu2.jpg'
let str = `🧡 *Eso son los contactos para ti.*`

conn.sendHydrated(m.chat, str, wm, pp, 'https://chat.whatsapp.com/DgzoifnqGE3A4ZmfapvflE', 'grupos', null, null, [
['🐈 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞ó𝙣', '.инфобот'],
['🎁 𝘿𝙤𝙣𝙖𝙧', '.донат'],
['☘ 𝙄𝙧 𝙖𝙡 𝙞𝙣𝙞𝙘𝙞𝙤', '/меню']
], m,)
conn.sendFile(m.chat, vn, 'creador.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|владелец|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i
export default handler
