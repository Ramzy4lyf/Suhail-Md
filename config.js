const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_13_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDYyLFxuICAgICAgICAzMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2NixcbiAgICAgICAgODMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA2OSxcbiAgICAgICAgOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDczLFxuICAgICAgICAxMzUsXG4gICAgICAgIDM4LFxuICAgICAgICA0MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDk4LFxuICAgICAgICA0NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDgsXG4gICAgICAgIDYzLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYyLFxuICAgICAgICA1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNixcbiAgICAgICAgMjI3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE1MixcbiAgICAgICAgNTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxODYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MixcbiAgICAgICAgNjEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMxLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjksXG4gICAgICAgIDYwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgyLFxuICAgICAgICA0MCxcbiAgICAgICAgODIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMixcbiAgICAgICAgOTgsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjU0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkxLFxuICAgICAgICA5MyxcbiAgICAgICAgMzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMSxcbiAgICAgICAgOCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDEwLFxuICAgICAgICA5MixcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzYsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAzNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVmFnZ0F5WnNYYzY1b213MHYyM2NUUUc5WE10MVNybnJTb2VDTFJkbTBCST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDY5MDU0MTM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUZEQzBCMUUzRkU0RUQ3QzVGNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE0MjcxOTlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiN0pUemdxZnVTRi1BWWJMdTROM3J4Z1wiLFxuICBcInBob25lSWRcIjogXCI5ZjExYjAyMC0xYWZlLTQ1NjMtOTJlYi0wMmU2OWE3ZDhmZDhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQxLFxuICAgICAgMTYwLFxuICAgICAgMTU2LFxuICAgICAgNTUsXG4gICAgICAxNDksXG4gICAgICAxNTksXG4gICAgICA4OCxcbiAgICAgIDE4MSxcbiAgICAgIDY5LFxuICAgICAgNTMsXG4gICAgICAzOSxcbiAgICAgIDE4NSxcbiAgICAgIDQwLFxuICAgICAgMixcbiAgICAgIDIwMSxcbiAgICAgIDc3LFxuICAgICAgMjI3LFxuICAgICAgMTM2LFxuICAgICAgMjMxLFxuICAgICAgMTg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNSxcbiAgICAgIDE0NSxcbiAgICAgIDk3LFxuICAgICAgMjI4LFxuICAgICAgMTMsXG4gICAgICAyMzEsXG4gICAgICAzNCxcbiAgICAgIDEyNSxcbiAgICAgIDI0NSxcbiAgICAgIDE3NCxcbiAgICAgIDE4NyxcbiAgICAgIDUsXG4gICAgICAxNjEsXG4gICAgICAxMzMsXG4gICAgICAxMDIsXG4gICAgICA4MCxcbiAgICAgIDE1NyxcbiAgICAgIDEwMixcbiAgICAgIDE0LFxuICAgICAgMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMUhUUlFCUUpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNjkwNTQxMzQ6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlJhbXp58JOFm1wiLFxuICAgIFwibGlkXCI6IFwiMjE0NDYwNjUyMzgwMzc0OjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTSs1cHRvRUVQYko2N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsYWw5VTI3MXI0MzBXcVB3SE5lRnJIY3QxVXduVHVXTzgwYlplWjBIYUE0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkJqOFp0c1RSZUdGckQ1Um9uSTdna1p4M0N1aGJwOTRSb1VnL05QQ2lPbThGV1NpeDE4ZU9tSGJwN25xYkxsN1R5ZVpjeGNaL1Y2OVk4V3ZzelZXU0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkVHdkFRR2tqcHVUWERhSGd2Z3NUYXp6QityZjNDekROc3luU3NhOWVaYTV4U2FNNEhDZ200NXAxZmZYWjdHV3kxMVZSYTBBbmFUMENaSWNHNHUxeGpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNjkwNTQxMzQ6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE0MjcxOTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJQnZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlCdi5qc29uIjogIntcImtleURhdGFcIjpcImpJaDFYc1ZtbkcwNFN2aVdKeXpNU1FXNmlZKzF3QVJUL05rZkVONGNlQW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI2MzExNTQ3MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzIxNDI3MTk0ODEwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
