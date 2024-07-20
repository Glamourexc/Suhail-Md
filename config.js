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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348109802721";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_06_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA5NCxcbiAgICAgICAgMixcbiAgICAgICAgMTk4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQxLFxuICAgICAgICA5MixcbiAgICAgICAgMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDc4LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDksXG4gICAgICAgIDE0LFxuICAgICAgICAxMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA1NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODIsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY1LFxuICAgICAgICA2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI1LFxuICAgICAgICA1MyxcbiAgICAgICAgMzksXG4gICAgICAgIDMxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDUzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE3LFxuICAgICAgICA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwLFxuICAgICAgICA5NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDUsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgODEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDgyLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDk4LFxuICAgICAgICA4OSxcbiAgICAgICAgNixcbiAgICAgICAgODIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQxLFxuICAgICAgICA3NixcbiAgICAgICAgNzUsXG4gICAgICAgIDUyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2MixcbiAgICAgICAgMTczLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRUZCRzR5WXprZGp4VFE3YkhkZVNxZk5uSDNwdWFPWDVNUUI3L0dOY09XMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTA5ODAyNzIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4RkIxREMzQTc4N0E2MzcyRERBMjczMjhGNkI0M0QwQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE1MDU5OTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTA5ODAyNzIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFRjdCRUZEMjBDRUJBMDk4N0M3RTlFRThDMTk1NDkxRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE1MDU5OTNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWDRFaTVZUHZRaXkwWGVCemlxS00wQVwiLFxuICBcInBob25lSWRcIjogXCI2MDcxNzgyNy0xY2YxLTRmNDMtYTk5NS1kM2FmNTllYWI2MWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDIsXG4gICAgICA3OCxcbiAgICAgIDEzLFxuICAgICAgMixcbiAgICAgIDQ1LFxuICAgICAgOTEsXG4gICAgICAyMDUsXG4gICAgICAxOTQsXG4gICAgICAyMjAsXG4gICAgICA4NCxcbiAgICAgIDExMSxcbiAgICAgIDI0MyxcbiAgICAgIDcxLFxuICAgICAgMTg4LFxuICAgICAgMTIsXG4gICAgICAzMSxcbiAgICAgIDIzNixcbiAgICAgIDk4LFxuICAgICAgMjQyLFxuICAgICAgMjM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2LFxuICAgICAgMTEzLFxuICAgICAgMjI2LFxuICAgICAgMTA1LFxuICAgICAgNDMsXG4gICAgICAxNDUsXG4gICAgICA4MixcbiAgICAgIDcsXG4gICAgICAxNTIsXG4gICAgICAxOTcsXG4gICAgICAxNDUsXG4gICAgICAyMTEsXG4gICAgICA4MCxcbiAgICAgIDIxNCxcbiAgICAgIDIwMSxcbiAgICAgIDIyMSxcbiAgICAgIDIxMixcbiAgICAgIDE2MCxcbiAgICAgIDI0NixcbiAgICAgIDczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlkzMVlZSkhFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTA5ODAyNzIxOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NDA5NTU4Mjg4ODE1ODoxM0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJ+SX5cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQWFRzYUVHRUwreDhMUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkJmTmdTd0FmWnU2dmdTczBJdTlpMzBPejJWZDNhQ09zcjZMc3FGMzc1MDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiS2NWTDhseHNzREZ0NGtQOGRCTzVBc1RmbzVHNUx6M200NCthUU56SSsvVzZEWDJhejVyU3IxL3lSeGkrYW5vRVlPM0Q0UjQ0QkQrdVZ6RnNtcWNKRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT0liY2JtKzJlWFVmRSszV1dhWFJ5b0txcWIzNHhLckdnclh3WXhXenhKRStHQ0lIUjkzSG8vQkF2U1krM0U3Z0IrYk8zdzQxdUdybjZsRUJMUUp6Z1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwOTgwMjcyMToxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNTA1OTg3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR0VKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHRUouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYcEFJTi9Hdk9iMDJzT2Ztb1J1dW9qZmorY1NuT3QyRy9rdVpsL2lMQ0FFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2ODA2MzIzMDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDUxNjUyNDQyNlwifSIKfQ=="  // PUT your SESSION_ID 


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
