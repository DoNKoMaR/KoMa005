let handler  = async (m, { conn, usedPrefix, command }) => {
let res = "https://recoders-area.caliph.repl.co/api/lolivid"
conn.sendHydrated(m.chat, null, null, res, null, null, null, null, [['πΊππππππππ π', `/${command}`]], m)}
handler.help = ['lolivid']
handler.tags = ['random']
handler.command = /^(lolivid|lolivideos|lolΓ­vid)$/i
export default handler
