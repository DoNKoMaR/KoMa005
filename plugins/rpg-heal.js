import { join } from 'path' 
import { promises } from 'fs'

let handler = async (m, { conn, args, usedPrefix, __dirname }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

let imgr = flaaa.getRandom()
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let user = global.db.data.users[m.sender]
    
if (user.health >= 100) return conn.sendButton(m.chat, `๐๐ ๐๐ผ๐๐๐ฟ ๐๐๐๐ผ ๐๐๐๐๐ผ โค๏ธ`, wm, imgr + `SALUD: ${user.health}`, [
[`๐๏ธ ๐ผ๐๐๐๐๐๐๐ผ๐`, `${usedPrefix}adventure`], [`๐ผ๐ซ๐๐ฃ๐ฉ๐ช๐ง๐๐ง  ๐๏ธ`, `${usedPrefix}adventure`]], fkontak, m)
    
const heal = 40 + (user.cat * 4)
let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((90 - user.health) / heal)))) * 1
    
if (user.potion < count) return conn.sendButton(m.chat,`${htki} ๐๐๐ ๐๐๐พ๐๐๐๐๐ ${htka}`, 
`๐๐๐พ๐๐๐๐๐ผ๐ ${count - user.potion} ๐๐๐พ๐๐๐ ๐ฅค ๐๐ผ๐๐ผ ๐พ๐๐๐ผ๐๐๐

๐๐ผ๐๐๐ฟ : ๐๐๐ผ๐๐๐ ยป ${user.health} โค๏ธ
๐๐๐พ๐๐๐ : ๐๐๐๐๐๐ ยป ${user.potion} ๐ฅค

๐พ๐๐๐๐๐ผ ๐๐๐พ๐๐๐ ๐ ๐๐๐ฟ๐๐๐ ๐ผ ๐ผ๐๐๐๐๐๐ ๐๐๐ ๐๐ ๐๐๐ผ๐๐๐๐๐๐๐ผ`.trim(), imgr + 'POCION BAJA:', [
[`๐พ๐ค๐ข๐ฅ๐ง๐๐ง ๐๐ค๐๐๐ค๐ฃ  ๐ฅค`, `${usedPrefix}buy potion ${count - user.potion}`],
[`๐๐๐๐๐ง ๐ผ๐ฎ๐ช๐๐ โ๏ธ`, `${usedPrefix}pedirayuda *Por Favor alguien ayudeme con ${count - user.potion} de POCION* ๐ฅค 
*ยป AYUDA TRANSFIRIENDO:*
*${usedPrefix}transfer potion ${count - user.potion}* @${conn.getName(m.sender)}`]], fkontak, m)
  
    user.potion -= count * 1 //1 potion = count (1) 
    user.health += heal * count
    
conn.sendButton(m.chat, `*โโโใ โ ๐๐ผ๐๐๐ฟ ๐พ๐๐๐๐๐๐๐ผ ใโโโ*`, `๐๐๐๐๐๐๐ผ๐๐๐๐๐ ๐๐๐ ${count} ๐ฟ๐ ๐๐๐พ๐๐๐ ๐ฅค ๐๐ผ๐๐ผ ๐๐๐พ๐๐๐๐๐ผ๐ ๐๐ ๐๐ผ๐๐๐ฟ', [
[`๐ผ๐ซ๐๐ฃ๐ฉ๐ช๐ง๐๐ง  ๐๏ธ`, `${usedPrefix}adventure`]], fkontak, m)
}

handler.help = ['heal']
handler.tags = ['rpg']
handler.level = 1
handler.limit = 1
handler.register = true
handler.command = /^(heal|curar)$/i

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}
