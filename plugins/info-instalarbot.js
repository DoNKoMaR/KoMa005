let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://i.imgur.com/lkch77g.jpeg' 
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
await m.reply(`â°â±ð°â± *ð°ðððððððððð* â±ð°â±â®`)
  //conn.sendButton(m.chat, str, author, await(await fetch(pp)).buffer(), [['Menu', '/menu']], m)
let texto1 = `
 ððð¨ð¤ ðð ð¡ð ðð£ð¨ð©ðð¡ðððð¤ð£
 â£âââââ BoTâ£ ðð ðððð ððððð ðððð ðð ððððððððððð

 ðð ððððððððð ððððð ððððð ðð ððððð ððð ððð

ð *https://chat.whatsapp.com/DgzoifnqGE3A4ZmfapvflE*

 ð¶ ððððððððð ðð wa.me/79773452127*
 ðððð ððð ðððð ððð ððð

ð ðððð ðððð ðððððððð ðð ððð ðð ðððððð
 
ð ðððð ðððððððð ðð ððð *https://chat.whatsapp.com/DgzoifnqGE3A4ZmfapvflE*

ð¸ ðððððððð 2 ðððð ðððð ðððð ðððððððð ðð ð¸ð¹
ð¸ ð°ððððððð ðððððð ðð ð®ððððð

 ðððð ðððððð 1*

ð¸ termux-setup-storage
    (ðð ððð ðð ððððððð)

ð¸  apt update 

ð¸  pkg upgrade 

ð¸ pkg install git -y

ð¸ pkg install nodejs -y

ð¸ pkg install ffmpeg -y

ð¸ pkg install imagemagick -y

ð¸ pkg install yarn

ð¸ git clone https://github.com/elrebelde21/The-LoliBot-MD

ð¸  cd The-LoliBot-MD

ð¸ npm install

ð¸ yarn install 

ð¸ npm install

ð¸ npm update

ð¸ ls

ð¸ npm start 
 (ð ððð ððð ððð ððððð ðð ð¸ð¹ ððððð ðð  ðððððð ðððð ððð ððððððð ð ððððððð  ð ðð ðððð ðððð ð ððððððð)

 ððððððððð ðððð ððððððð ðððð ððð ðððð ððð ðððð°ð¤
 ðºððððððð°ð¤`
let buttonMessage= {
'document': { url: `https://youtu.be/HyCqmXDHGeQ` },
'mimetype': `application/${document}`,
'fileName': `â£âââââ BoTâ£`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://youtu.be/HyCqmXDHGeQ',
'mediaType': 2,
'previewType': 'pdf',
'title': 'tutorial del instalaciÃ³n',
'body': wm,
 }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'â£âââââ BoTâ£'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^(instalarbot|instalarbot)$/i
export default handler
