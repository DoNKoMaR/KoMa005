let handler = async m => {
 let old = performance.now()
 let neww = performance.now()
 let speed = neww - old
 let txt = `${eg}*_๐พ๐๐๐๐๐๐ผ๐๐ฟ๐ ๐๐๐๐๐ฝ๐ผ ๐ฟ๐ ๐๐๐๐๐พ๐๐ฟ๐ผ๐ฟ..._*`.trim()
  m.reply(txt)

await m.reply('๐')
await m.reply('๐๐')
await m.reply('๐๐๐')
await m.reply(`โฐโฑโโฑ *๐๐๐จ๐ช๐ก๐ฉ๐๐๐ค* โฑโโฑโฎ`)
 
let veloz = 
`๐ *๐๐๐ก๐ค๐๐๐๐๐:*\n *${speed}* *Milisegundos*\n\n๐ *SPEED:*\n *${speed}* *Milliseconds*`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: 'โฃโโโโโ BoTโฃ', url: 'https://github.com/elrebelde21/The-LoliBot-MD'}},
{index: 2, urlButton: {displayText: '๐๐ฃ๐จ๐ฉ๐๐๐ง๐๐ข', url: 'https://www.instagram.com/gata_dios/'}},
{index: 3, quickReplyButton: {displayText: '๐๐ฉ๐ง๐ ๐ซ๐๐ฏ', id: '#ping'}},
{index: 4, quickReplyButton: {displayText: '๐๐ฃ๐๐ค๐ง๐ข๐๐๐รณ๐ฃ', id: '#infobot'}},
{index: 5, quickReplyButton: {displayText: '๐๐ค๐ก๐ซ๐๐ง ๐๐ก ๐๐๐ฃ๐ชฬ', id: '#menu'}},
]
let tm = {
text: veloz,
footer: global.wm,
templateButtons: templateButtonsReplyMessage
}
conn.sendMessage(m.chat, tm, m)
}
// let veloz = `${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`.trim() 
//conn.sendButton(m.chat, `${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`, wm, veloz, [['Vista', /${command}]], m)
                                               
//m.reply(`${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`)

 

handler.help = ['ping']
handler.tags = ['info']
handler.command = /^(ping|speed|velocidad|rapidez|velocity)$/i
export default handler
