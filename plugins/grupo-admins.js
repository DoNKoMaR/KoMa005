let handler = async (m, { conn, participants, groupMetadata, args, usedPrefix, command }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/admins.jpg'
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `*ððð£ð¨ððð:* ${pesan}`
let text = 
`â­ââ[ *ðð£ð«ð¤ððð£ðð¤ ððð¢ðð£ð¨* ]ââââ¬£ 
${oi}

*ððð¢ðð£ð¨:*
${listAdmin}

ðð¨ðð§ ðð¡ ððð¨ð¤ ðð ðð¢ðð§ððð£ððð
â°ââââââ[ *ð  ${vs}* ]ââââââ¬£`.trim()

conn.sendHydrated(m.chat, text, `ððð¢ðð£ð¨ | ${wm}`, pp, 'https://github.com/elrebelde21/The-LoliBot-MD', 'â£âââââ BoTâ£', null, null, [
['ðð¤ð¡ð«ðð§ ðð¡ ððð£ðªÌ â', '.menu']
], m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })

//conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['admins <texto>']
handler.tags = ['group'] 
handler.command = /^(admins|@admins|dmins)$/i
handler.group = true
export default handler
