let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://i.imgur.com/lkch77g.jpeg' 
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `๐๐๐จ ๐๐ช๐ฃ๐๐๐ค๐ฃ๐๐จ #๐๐๐๐๐๐ค๐ฉ #๐๐ค๐ฉ๐จ #๐จ๐๐ง๐๐ค๐ฉ #๐จ๐ช๐๐๐ค๐ฉ #๐๐๐ฉ๐๐ค๐๐. ๐๐ค ๐๐จ๐ฉ๐๐ฃ ๐๐๐จ๐ฅ๐ค๐ฃ๐๐๐ก๐๐จ ๐๐ฃ โฃโโโโโ BoTโฃ  ๐จ๐ ๐ฆ๐ช๐๐๐ง๐ ๐๐๐๐๐ง๐ฉ๐ ๐๐ค๐ฉ ๐๐ฃ๐ฉ๐๐ฃ๐ฉ๐ ๐๐๐๐๐ง๐ก๐ค ๐ซ๐ค๐จ ๐ข๐๐จ๐ข๐ค ๐๐ฃ๐จ๐ฉ๐๐ก๐๐๐ค ๐ฅ๐ค๐ฃ๐๐ง #๐๐ฃ๐จ๐ฉ๐๐ก๐๐ง๐๐ค๐ฉ  ๐ฎ ๐จ๐ ๐ฃ๐๐๐๐จ๐๐ฉ๐๐จ ๐๐ฎ๐ช๐๐ ๐๐๐๐ก๐ ๐๐ค๐ฃ ๐๐ก ๐ค๐ฌ๐ฃ๐๐ง ๐๐๐ก ๐๐ค๐ฉ

*โโ ๐ท๐๐๐๐ ๐๐๐๐๐๐ ๐๐๐๐๐๐๐๐ ๐๐๐๐๐ ๐๐๐๐ ๐๐ ๐๐๐. ๐ฝ๐๐ ๐๐๐๐๐.
๐บ๐๐๐๐๐๐๐๐ ๐๐๐๐ ๐๐ฬ๐๐๐ ๐๐๐๐๐๐๐๐ ๐๐๐ ๐๐๐ ๐๐ ๐๐๐๐๐ ๐ป๐๐ ๐ณ๐๐๐๐๐๐-๐ด๐ซ
*โ https://youtu.be/wWyBHtKzx9Q*
ใค`
let buttonMessage= {
'document': { url: `https://youtu.be/gh5NajZOTA8` },
'mimetype': `application/${document}`,
'fileName': `โฃโโโโโ BoTโฃ`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://youtu.be/gh5NajZOTA8',
'mediaType': 2,
'previewType': 'pdf',
'title': 'แดส แดแดแดแดส สแดแด แดแด แดกสแดแดsแดแดแดโฉ',
'body': wm,
 }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}instalarbot`, buttonText: {displayText: '๐ธ๐ฝ๐๐๐ฐ๐ป๐ฐ๐๐ฑ๐พ๐'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^(jadibot|serbot|bots|subbots|getcode)/i
handler.limit = 1
export default handler

