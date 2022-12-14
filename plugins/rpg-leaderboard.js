let handler = async (m, { conn, args, participants, usedPrefix }) => {
  //let user = global.db.data.users[m.sender] 
   //user.registered = false
  let users = Object.entries(global.db.data.users).map(([key, value]) => {
    return {...value, jid: key}
  })
  let sortedExp = users.map(toNumber('exp')).sort(sort('exp'))
   let sortedLim = users.map(toNumber('limit')).sort(sort('limit'))
    let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
     let sortedRole = users.map(toNumber('role')).sort(sort('role'))
      let sortedMoney = users.map(toNumber('money')).sort(sort('money'))
     
      let usersExp = sortedExp.map(enumGetKey)
       let usersLim = sortedLim.map(enumGetKey)
        let usersLevel = sortedLevel.map(enumGetKey)
         let usersRole = sortedRole.map(enumGetKey)
          let usersMoney = sortedMoney.map(enumGetKey)
  console.log(participants)
  let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedExp.length)
  let text = `
       π πππππ ππ ππππππππππππΜπ
    
π  *ππΎπΏ ${len} ππΏ π―* 
TΓΊ : *${usersExp.indexOf(m.sender) + 1}* de *${usersExp.length} ππππππππ*

${sortedExp.slice(0, len).map(({ jid, exp }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${exp} Exp*`).join`\n`}
βββββββββββββββββ
π  *ππΎπΏ ${len} π³πΈπ°πΌπ°π½ππ΄π* 
TΓΊ : *${usersLim.indexOf(m.sender) + 1}* de *${usersLim.length} ππππππππ*

${sortedLim.slice(0, len).map(({ jid, limit }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${limit} Diamantes*`).join`\n`}
βββββββββββββββββ
π  *ππΎπΏ ${len} π½πΈππ΄π» πͺ* 
TΓΊ : *${usersLevel.indexOf(m.sender) + 1}* de *${usersLevel.length} ππππππππ*

${sortedLevel.slice(0, len).map(({ jid, level }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *Nivel ${level}*`).join`\n`}
βββββββββββββββββ
π  *ππΎπΏ ${len} ππΎπ» π* 
TΓΊ : *${usersRole.indexOf(m.sender) + 1}* de *${usersRole.length} ππππππππ*

${sortedRole.slice(0, len).map(({ jid, role }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ${role}`).join`\n`}
βββββββββββββββββ
π  *ππΎπΏ ${len} π»πΎπ»πΈπ²πΎπΈπ½π π*
TΓΊ : *${usersMoney.indexOf(m.sender) + 1}* de *${usersMoney.length} ππππππππ*

${sortedMoney.slice(0, len).map(({ jid, money }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${money} GataCoins*`).join`\n`}
`.trim()
  await conn.reply(m.chat, text, m, { 
    contextInfo: {
      mentionedJid: [...usersExp.slice(0, len), ...usersLim.slice(0, len), ...usersLevel.slice(0, len), ...usersRole.slice(0, len), ...usersMoney.slice(0, len)].filter(v => !participants.some(p => v === p.jid))
    }
  })
await conn.sendHydrated(m.chat, wm, `ππππππππ£ππ ππ πππππ πππ πππ πππππππ ππ πππππ | ππ ππ πππ πππππππ π πππ ππ πππππππ:\n${usedPrefix}nivel\n${usedPrefix}exp\n${usedPrefix}rol`, null, md, 'β£βββββ BoTβ£', null, null, [
['πππ£πͺ ππͺπππ€π¨ π‘', '#juegosmenu'],
['πππ£ππ€π¨ πΉ', '#rol'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', `${usedPrefix}menu`]
], m,)  
  
}
handler.help = ['top']
handler.tags = ['xp']
handler.command = ['leaderboard', 'lb', 'top'] 
handler.register = true
handler.fail = null
handler.exp = 0

export default handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}
