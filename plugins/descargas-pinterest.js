import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg} ð¼ðð ðð ðð ððððððððð ðððððð\n*${usedPrefix + command} Loli*` 
const json = await pinterest(text)
await conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `
â°â±ðâ± *ð¬Ìðððð* â±ðâ±â®`.trim(), m)
  
  conn.sendHydrated(m.chat, `â¨ ð¹ððððððððð: ${text}`, `ððð£ð©ðð§ðð¨ð© | ${wm}`, null, md, 'â£âââââ BoTâ£', null, null, [
['ð ððððªððð£ð©ð', `/pinterest ${text}`],
['ð ðð¤ð¤ðð¡ð ', `#image ${text}`],
['ð ððð£ðª', `.menu`],  
], m)
                    }
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest|dlpinterest|pinterestdl)$/i
handler.exp = 25
export default handler
