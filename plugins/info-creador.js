let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
*โโ ๐ด๐ป ๐ฝ๐๐ผ๐ด๐๐พ ๐ณ๐ด ๐ผ๐ธ ๐ฒ๐๐ด๐ฐ๐ณ๐พ๐ ๐ด๐ wa.me/51914865141*

*โโ ๐ด๐ป ๐ฝ๐๐ผ๐ด๐๐พ ๐ณ๐ด๐ป ๐ฒ๐พ๐ป๐ฐ๐ฑ๐พ๐๐ฐ๐ณ๐พ๐ 10 ๐ด๐ wa.me/51917545642*

*โโ ๐ด๐ป ๐ฒ๐พ๐ฝ๐๐ฐ๐ฒ๐๐พ ๐ณ๐ด ๐ป๐ฐ ๐ฒ๐พ๐ป๐ฐ๐ฑ๐พ๐๐ฐ๐ณ๐พ๐๐ฐ 11 ๐ด๐ https://instagram.com/ale.izn_20*
`.trim()   
let buttonMessage= {
'document': { url: `https://github.com/BrunoSobrino/TheMystic-Bot-MD` },
'mimetype': `application/${document}`,
'fileName': `ใ  ๐ฏ๐๐๐๐ ๐พ๐๐๐๐ ใ`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/BrunoSobrino/TheMystic-Bot-MD',
'mediaType': 2,
'previewType': 'pdf',
'title': 'แดส แดแดแดแดส สแดแด แดแด แดกสแดแดsแดแดแดโฉ',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA' }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '๐พ ๐ผ๐ด๐ฝ๐ ๐พ'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '๐ฎ ๐ณ๐พ๐ฝ๐ฐ๐ ๐ฎ'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;๐ฉ๐๐๐๐ ๐บ๐๐๐๐๐๐ ๐;;;\nFN:๐ฉ๐๐๐๐ ๐บ๐๐๐๐๐๐ ๐\nORG:๐ฉ๐๐๐๐ ๐บ๐๐๐๐๐๐ ๐\nTITLE:\nitem1.TEL;waid=5219996125657:+521 999 612 5657\nitem1.X-ABLabel:๐ฉ๐๐๐๐ ๐บ๐๐๐๐๐๐ ๐\nX-WA-BIZ-DESCRIPTION:[โ] แดแดษดแดแดแดแดแด แด แดsแดแด ษดแดแด แดแดสแด แดแดsแดs ษชแดแดแดสแดแดษดแดแดs.\nX-WA-BIZ-NAME:๐ฉ๐๐๐๐ ๐บ๐๐๐๐๐๐ ๐\nEND:VCARD`
//await conn.sendMessage(m.chat, { contacts: { displayName: 'Bruno Sobrino ๐', contacts: [{ vcard }] }}, {quoted: m})
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler
