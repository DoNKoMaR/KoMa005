import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
  
const { levelling } = '../lib/levelling.js'
//let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let { money } = global.db.data.users[m.sender]
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  
/*
const sections = [
{
title: `πππππΌ πΏπππππππΌπ½ππ`,
rows: [
{title: "βοΈ πππ£πͺ ππ§ππ£πππ₯ππ‘ βοΈ", description: null, rowId: `${usedPrefix}menu`},
{title: "β³οΈ πππ£πͺ πΎπ€π’π₯π‘ππ©π€ β³οΈ", description: null, rowId: `${usedPrefix}allmenu`},
{title: "β πΎπͺππ£π©ππ¨ πππππππ‘ππ¨ β", description: "ππ½πππ ππΌπ πππππππΌπΎπππ πΏπ THE LOLIBOT-ππΏ", rowId: `${usedPrefix}cuentasgatabot`},
{title: "π πΏπ€π£ππ§ π", description: "ππππΏππ πΌππππΌπ πΏπππΌππΏπ", rowId: `${usedPrefix}menu`},
{title: "π ππ§πͺπ₯π€π¨ πππππππ‘ππ¨ π", description: "πππππ πΌ ππΌ πΎππππππΏπΌπΏ LOLIBOT", rowId: `${usedPrefix}gruposgb`},
{title: "π° πππ¨π©π ππ ππ§πͺπ₯π€π¨ π°", description: "ππππππ ππ πΏπππΏπ The LOLIBOT-ππΏ ππΌ πππππππΌπΏπ", rowId: `${usedPrefix}listagrupos`},
{title: "π° ππ¨π©πππ€ π°", description: "πΎππππΎπ ππ ππππΌπΏπ π ππΌπ πππππππΌπΎπππ", rowId: `${usedPrefix}estado`},   
{title: "βοΈ ππ£ππ€π§π’ππππ€π£ πΎπ€π’π₯π‘ππ©π βοΈ", description: "πππππππΌπΎπππ πΏπππΌπππΌπΏπΌ", rowId: `${usedPrefix}infogata`},    
{title: "πͺ ππ£ππ€π§π’ππππ€π£ ππ π’π πΎπ§ππππ€π§ πͺ", description: "ππ πΎπππΌπΏππ", rowId: `${usedPrefix}creadora`},      
{title: "π πππ‘π€πππππ | πππ£π π", description: "πΎππππΎπ ππ πππππΎππΏπΌπΏ", rowId: `${usedPrefix}ping`},    
]}, ] */
//let name = await conn.getName(m.sender)
let pp = './media/menus/Menuvid1.mp4'  
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//let user = global.db.data.users[m.sender]
//user.registered = false

let menu = `
β­ββγ *${wm}* γβββ¬£
βπ *Β‘ππ€π‘π!* ${username}
βββββββββββββββββββ
βπππππππππ
ββͺ *ππ­π₯ππ§πππ£πππ | EXP βΊ ${exp}*
ββͺ *πππ«ππ‘ βΊ ${level}*
ββͺ *ππ€π‘ βΊ* ${role}
ββͺ *π‘π€π‘πππ€ππ£π¨ βΊ $ ${money}*
ββͺ *ππ¨πͺππ§ππ€π¨ βΊ ${Object.keys(global.db.data.users).length}* 
βπππππππππ
βββββββββββββββββββ
βγ ππ£ππ€π§π’ππππ€π£ ππ π’ππ£πͺ γ
βββββββββββββββββββ
βπ«βΊ _${usedPrefix}cuentaslolibot | cuentaslb_
βπ«βΊ _${usedPrefix}gruposgb | grupos | groupgb_
βπ«βΊ _${usedPrefix}donar | donate_
βπ«βΊ _${usedPrefix}listagrupos | grouplist_
βπ«βΊ _${usedPrefix}estado | status_
βπ«βΊ _${usedPrefix}infogata | infobot_
βπ«βΊ _${usedPrefix}creador | owner_
βπ«βΊ _${usedPrefix}velocidad | ping_
βπ«βΊ _Bot_ 
β°ββββββββββββββββββββ¬£`.trim()
conn.sendHydrated(m.chat, menu, wm, pp, 'https://github.com/elrebelde21/The-LoliBot-MD', 'β£βββββ BoTβ£', null, null, [
['πππ£πͺΜ ππ€π’π₯π‘ππ©π€ π«', '.allmenu'],
['πππ£πͺ πππ¨π₯π‘πππππ‘π π', '/menulista'],
['πππ£πͺ ππ§ππ£πππ₯ππ‘ β‘', '#menu']
], m,)
}

handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(infomenu)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
