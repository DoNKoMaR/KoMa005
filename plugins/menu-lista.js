import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) 
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

let pp = '.media/menus/Menu2.jpg'
wm = global.wm
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
 
const sections = [
{
title: `πππ¨π©π πππ¨π₯π‘πππππ‘π`,
rows: [
      {title: "π° πΎπ§ππππ€π§ π°", description: null, rowId: `${usedPrefix}creadora`},
      {title: "β¨οΈ ππ£π¨π©ππ‘ππ§ ππ€π© β¨οΈ", description: null, rowId: `${usedPrefix}instalarbot`},
      {title: "π πππ‘π€πππππ π", description: null, rowId: `${usedPrefix}ping`},
      {title: "π πππ£πͺ ππ€π’π₯π‘ππ©π€ π", description: null, rowId: `${usedPrefix}allmenu`},
      {title: "π ππ£ππ€π§π’ππππ€Μπ£ π", description: null, rowId: `${usedPrefix}infomenu`},
      {title: "π ππ¨πͺππ§ππ€ π₯π§ππ’ππͺπ’ π", description: null, rowId: `${usedPrefix}listprem`},
      {title: "π‘ ππͺπππ€π¨ πππ£πΜπ’πππ€π¨ π‘", description: null, rowId: `${usedPrefix}juegosmenu`},
      {title: "π πππ£πͺ ππ ππͺπππ€π¨ π", description: null, rowId: `${usedPrefix}audios`},
      {title: "π§° πππ£πͺ π’π€πππππππ§ ππ ππͺπππ€ π§°", description: null, rowId: `${usedPrefix}audioefectomenu`},
      {title: "π° πππ£πͺ ππ ππ§πͺπ₯π€ π°", description: null, rowId: `${usedPrefix}grupomenu`},
      {title: "βοΈ πΎππ£π©π§π€ ππ ππ€π£ππππͺπ§ππππ€Μπ£ βοΈ", description: null, rowId: `${usedPrefix}enable`}, 
      {title: "π πππ£πͺ π¨π©πππ ππ§π¨ π? πππ‘π©π§π€ π", description: null, rowId: `${usedPrefix}stickermenu`},
      {title: "π°οΈ πππ£πͺ ππ€π£π«ππ§π©πππ€ π°οΈ", description: null, rowId: `${usedPrefix}convertidormenu`},
      {title: "β¨ πππ£πͺ πππππ©π€ π? π‘π€ππ€π¨ β¨", description: null, rowId: `${usedPrefix}makermenu`}, 
      {title: "π² πππ£πͺ πππ¨πππ§ππ π²", description: null, rowId: `${usedPrefix}descargasmenu`},
      {title: "π πππ£πͺ ππ ππͺΜπ¨π¦πͺπππ π", description: null, rowId: `${usedPrefix}buscarmenu`},
      {title: "β©οΈ πππ£ππ€π¬ ππ£ππ’π β©οΈ", description: null, rowId: `${usedPrefix}randommenu`},
      {title: "π πππ£πͺ ππ€π’ππ£ππ€ +18 π", description: null, rowId: `${usedPrefix}hornymenu`},
      {title: "π πππ£πͺ π₯π§π€π₯πππ©ππ§ππ€) π", description: null, rowId: `${usedPrefix}ownermenu`},
      {title: "π ππΜπ§π’ππ£π€π¨ π? ππ€π£πππππ€π£ππ¨ π", description: null, rowId: `tΓ©rminos`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: `*β­ββββββββββββββββββββββ*
β *β£βββββ BoTβ£*
ββββββββββββββββββ
ββ€ *ππ€π‘π ππ€Μπ’π€ ππ¨π©πΜ β¨ ${name}!!*
ββββββββββββββββββ
ββ€ *πͺππππππ πππ πππ: ππ πππππππ* 
ββ€ *π΅πΜππππ πππ πππππππ:* *wa.me/79773452127 (ΠΠ»Π°Π΄Π΅Π»Π΅Ρ)*
ββ€ *π΅πΜππππ πππ πππ πππππππ:* *wa.me/6283147342377*
ββββββββββββββββββ
ββ€ *π»πππππ ππππππ*
ββΊ ${uptime}
ββββββββββββββββββ
ββ€ *π»πππππ ππππππ:* 
ββΊ ${time}  
ββββββββββββββββββ
ββ€ *π½ππππππ πππ πππ πππππππ-π΄π«*
ββΊ ${vs}
β   βββββββββββββββββ
ββ€ *πΌππππππ(s)*
ββΊ ${Object.keys(global.db.data.users).length} 
β   βββββββββββββββββ
ββ€ *π΄πππ*
ββΊ ${global.opts['self'] ? 'πππππππ' : 'ππΜπππππ'}
β   βββββββββββββββββ
ββ€ *πͺπππ πππππππππ*
ββΊ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
β   βββββββββββββββββ
ββ€ *πΌππππππ πππππππππ*
ββΊ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
β°ββββββββββββββββββ`, footer: `${wm}`, pp,
title: null,
buttonText: "πΊπππππππΜπππ ππππΜ", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menΓΊ|memu|memΓΊ|help|info|comandos|2help|ΠΌΠ΅Π½Ρ1.2|ayuda|commands|commandos|m|\?)$/i
handler.exp = 50
//handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
