let media = './media/menus/Menuvid2.mp4'
let vn = './media/cuenta.mp3'
let handler = async (m, { conn, command }) => {
let str = `
ð° ð½ðððððððð¿ð(ð¼) ð¼ ðð¼ð ð¾ððððð¼ð ðððð¾ðð¼ððð
âââââââââââââââââ
 ð¡ððºð²ð¿ð¼ ð±ð²ð¹ ð¯ð¼ð ð¼ð³ð°
ð° *wa.me/972529277479*
ð° *wa.me/12268879246*
ð° *wa.me/12262703138*
ð° *wa.me/573183650526*
âââââââââââââââââ
â ðð¶ððµðð¯
*${md}*
âââââââââââââââââ
â ðð¿ðð½ð¼ð ð¼ð³ð° ð±ð²ð¹ ð¯ð¼ð
1) *https://chat.whatsapp.com/DgzoifnqGE3A4ZmfapvflE*

2) *https://chat.whatsapp.com/IJmvzc45SVg1lbErQqysc8*
âââââââââââââââââ
âðð§ðªð¥ð¤ ð¤ðð ððð¡ ðð¤ð© (ðð¨ðð¨ð©ðð£ððð)
*https://chat.whatsapp.com/Byyrc8RJnUkJw6vvUgsbDF*

âââââââââââââââââ
â ðð¿ðð½ð¼ð ð³ð®ð°ð²ð¯ð¼ð¼ð¸ - ð®ðð¶ððð²ð»ð°ð¶ð®
*https://facebook.com/groups/721802642266362/*
âââââââââââââââââ
â grupo telegram
*https://t.me/+EcdN9fktnQQwY2Ex*
âââââââââââââââââ
â canal del YouTube oficial del bot
*https://youtube.com/channel/UCPSrzHooOjQMRmUK_2RLcSw*
âââââââââââââââââ
ðð ð©ððð£ðð£ ððªððð¨, ð¨ðªððð§ðð£ðððð¨, ð¤ ð¥ð§ðððªð£ð©ðð¨ ð²ðð°ð¿ð¶ð¯ð¶ ð½ð¼ð¿ ð²ð¹ ð´ð¿ðð½ð¼
`.trim()
conn.sendFile(m.chat, vn, 'cuenta.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
  
conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/elrebelde21/The-LoliBot-MD', 'â£âââââ BoTâ£', null, null, [
['ðð§ðªð¥ð¤ð¨ ððððððð¡ðð¨ ð°', '.grupos'],
['ð¾ð§ðððð¤ð§ ð', '#owner'],
['ðð¤ð¡ð«ðð§ ðð¡ ððð£ðªÌ âï¸', '/menu']
], m,)}

handler.command = /^cuentasoficiales|gataig|cuentaslb|cuentalb|accounts|loliiccounts|account|ilolii|cuentasdeloli|cuentasdelolibot|cuentalolibot|cuentaslolibot$/i
handler.exp = 35
export default handler
