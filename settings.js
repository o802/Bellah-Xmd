//base by DGXeon
//recode by GIDDY TENNOR 
//YouTube: @GIDDYTENNOR


const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


global.SESSION_ID = process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkpwOEZzOThYeWNIQ2NYelg1TWI5N0NWODhqZHBVRVpvMlJkUGZ6a21tOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMU5PdmdiZEp6bG5Rajkrd1hPdXovOHFlQ1J6bGFpem1aQVhYbzZsNlVHMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDTzhUV0RMTm5DdHl0RTlETGFWWWNvTy9SYjh6ZlpiS2xKcENzby9tT1cwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLeHVaanNuSEpNa3dVTDllL0VHcUtlRThrU081YTJtdmdXa082NWNsVUhvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFQY0ZjR2tjNHFMZmtQWDlDb0Q5RXpyYVFDT3ZIZmpicUF2MFdNSVcySDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtkMXlWbUtJRkdYSGVYWGw5dHBBWFErRDVwYlk3MEpKbm5vbkQ4VHlMVXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FNeFFMdHZIQTJXNnpXSk1MUmVtaDVld1lkTGFINjBFVUFYdWhBMmJuZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidm5FTVhJN2JscWdqeTI3TFJBWVUyZ3FlMWtYMkZJN09uWDVaSS9TVWRoQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhwaEF5TTdSbzh6eFhENy9QMWJxZXQvK0NXK2ZvT1ZGR1ZtT1BSbXRVazZrOGtJbUJ6T0dUeDBVejFma1BjN0QrZDhuWUtzTzJ2QmRpWGxHZW10akJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIxLCJhZHZTZWNyZXRLZXkiOiI1U2V6NVlyc2pWT3hvVmVGZlo1MjRGeERjQjJoeC9JWG5nQk1xUmZvZGpjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJDUDdjSjk5SFRqR21nOUhQZVd1NUN3IiwicGhvbmVJZCI6IjA1ZGNhZDE1LTY4N2QtNDE1Mi05YzkzLTMyZWM4ZDA0MDJjYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXbGRJSGNXNUNqQ2VDUitEWHZOSlN2R2kzNGs9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkM3dVVrb21TbXZuK056NTRadXpHa0VlMFZ6RT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05lUDBwa0hFTnEybThFR0dBMGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjJVRmZmK29ucjV5TVlaT3lqT29UVDJlY1NOU3c4ejJpdzg1TU9tQUpzQUU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IllhMkhhZk5OcVdJWWJXTGwzTTVRMUtFY2VOY1BPT0dRTEtIQ1lobEVtRUlmbk5LVXRMV3l1TTFDaERGRlFnRlhtVUtjb1RMdmlBdisrWkV0S1VwU0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJSNzRNQWZ0N0l1UlA1RmhpL2JtdkFsdmx6WWVQQWpaMVdZZ1gxcjVzWHUwU0w4QXI2elZjNVVZcTRZUmE2eE1IZktzak1TakI2cWxWSkQ4Y1pxTVdBdz09In0sIm1lIjp7ImlkIjoiMjM0NzAyNjEzODM4NDo2OUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE4NDMyMzE1MjA4MDk1MTo2OUBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzAyNjEzODM4NDo2OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkbEJYMy9xSjYrY2pHR1Rzb3pxRTA5bm5FalVzUE05b3NQT1REcGdDYkFCIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDczNzY5OTksImxhc3RQcm9wSGFzaCI6IjJHNEFtdSJ9' 
//owmner v card
global.ytname = "YT: GIDDYTENNOR" //ur yt chanel name
global.socialm = "IG: @GIDDYTENNOR" //ur github or insta name
global.location = "Kenya" //ur location

//new
global.botname = process.env.BOT_NAME ||'𝐁𝐞𝐥𝐥𝐚𝐡 𝐗𝐦𝐝' //enter your  bot name here
global.ownernumber = process.env.OWNER_NUMBER ||'2347026138384' //ur owner number
global.ownername = '© TENNOMODZ' //ur owner name
global.websitex = "https://whatsapp.com/channel/0029VaPZWbY1iUxVVRIIOm0D" //"https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES"
global.wagc = "https://chat.whatsapp.com/CzFlFQrkdzxFw0pxCBYM7H" //"https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES"
global.themeemoji = '🪀'
global.wm = "GIDDY TENNOR"
global.botscript = 'https://whatsapp.com/channel/0029VaPZWbY1iUxVVRIIOm0D' //'https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES' //script link
global.packname = process.env.PACK_NAME ||"VolTah Xmd" //enter your stickers author name here
global.author = "Giddy-Tennor"
global.creator = "254703726139@s.whatsapp.net"
global.xprefix = process.env.BOT_PREFIX ||'.'
global.hituet = 0

//bot settings 
global.autoblocknumber = process.env.AUTOBLOCK_NUMBER || '263,234' //set autoblock country code
global.antiforeignnumber = process.env.ANTIFOREIGN_NUMBER || '' //set anti foreign number country code
global.mode = process.env.MODE || 'private' //set bot public/private
const antilinkgc = process.env.ANTILINK_GC || 'TRUE';
global.anticall = process.env.ANTI_CALL || 'false' //bot blocks user when called
global.autostatusview = process.env.AUTOSW_VIEW || 'false' //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = process.env.GROUP_EVENT || 'false' //show update messages in group chat
//msg
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;

global.mess = {
	limit: 'Your limit is up <\>',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	owner: 'Bellah Xmd owner only<\>',
    admin: 'Bot is not admin<\>',
    group: 'feature for group only<\>',
    done: 'Done ✓',
    error: 'Error !',
    success: 'Succes •'
}
//thumbnail


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
