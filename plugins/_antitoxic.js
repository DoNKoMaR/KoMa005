const toxicRegex = /pinga|joto|sape|nmms|calladito|calladita|mames|mamar|chigadamadre|hijueputa|chupa|kaka|caca|bobo|boba|loco|loca|chupapolla|estupido|estupida|estupidos|polla|pollas|idiota|maricon|chucha|verga|vrga|naco|zorra|zorro|zorras|zorros|pito|huevon|huevona|huevones|rctmre|mrd|ctm|csm|cp|hldv|ptm|baboso|babosa|babosos|babosas|webo|webos|mamawebos|calla|callese|cΓ‘llate|callate|chupame|bolas|qliao|imbecil|embeciles|kbrones|cabron|capullo|carajo|gore|gorre|gorreo|sapo|sapa|mierda|cerdo|cerda|puerco|puerca|perra|perro|dumb|fuck|shit|bullshit|cunt|cum|semen|bitch|motherfucker|foker|fucking/i

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner }) {
 
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup)
return !1
  let user = global.db.data.users[m.sender]
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  let img = 'https://telegra.ph/file/635b82df8d7abb4792eab.jpg'
 const isToxic = toxicRegex.exec(m.text)
    
if (isToxic && chat.antitoxic && !isOwner && !isAdmin) {
user.warn += 1
if (!(user.warn >= 4)) await conn.sendButton(m.chat,`${user.warn == 1 ? `π΅ππ!!! *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, π«ππππ ππππΜ πππππππ *(${isToxic})* π¬πππΜ πππππππππ ππ ππππ ππΜππππ(πΌ)\n\nπ€¬!!`, `*π¨ππππππππππ*\nβ οΈ *${user.warn}/4*\n\n${wm}`, img, [
[`π­ π³π ππππππ`, '.ok'],
['β’οΈ π«ππππππππ πππππππππ', '.off antitoxic'],
['βοΈ π΄πππ', '/menu']], false, { mentions: [m.sender] })}

if (user.warn >= 4) {
user.warn = 0
await m.reply(`π»π ππ πππππππΜ ππππππ πππππ!!\n*@${m.sender.split`@`[0]}* πΊππππππππ πππ *4* π¨ππππππππππ πππππ ππππΜ πππππππππ(πΌ) π`, false, { mentions: [m.sender] })
user.banned = true
await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
//await this.updateBlockStatus(m.sender, 'block')
}
return !1
}
