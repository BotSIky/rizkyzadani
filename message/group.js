const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
const util = require('util')
const moment = require("moment-timezone");
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fs = require("fs");
const { color } = require("../lib/color");
const { banner, start, success, getGroupAdmins,close} = require("../lib/functions");
const fetch = require("node-fetch");
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const ngebucin = require("./messages.js");
const extream = ["6285156137901-1632578387@g.us","6285156137901-1633160194@g.us"]
Type1 = JSON.parse(fs.readFileSync('./settings.json')).setWelcome.welcomeType1
Type2 = JSON.parse(fs.readFileSync('./settings.json')).setWelcome.welcomeType2
Type3 = JSON.parse(fs.readFileSync('./settings.json')).setWelcome.welcomeType3
AutoWelcome = JSON.parse(fs.readFileSync('./settings.json')).setWelcome.autoWelcome
Background = JSON.parse(fs.readFileSync('./settings.json')).setWelcome.background


module.exports = async(client, anu) => {
try{
const fake1 = settings.copyright
const prefix = settings.prefix
const copyright = `© ${fake1}`  
const groupMet = await client.groupMetadata(anu.jid)
const groupName = groupMet.subject
const allmem = groupMet.participants.length
const mem = anu.participants[0];
const memNumber = mem.split("@")[0];
const timeWib = moment.tz("Asia/Jakarta").format("HH:mm");
const from = anu.jid
const cintakupadamu = ngebucin[Math.floor(Math.random() * ngebucin.length)]
const groupMembers = groupMet.participants;
const groupAdmins = getGroupAdmins(groupMembers);                        
const conts = client.contacts[mem] || { notify: anu.jid.replace(/@.+/, '') }
const pushname = conts.notify || conts.vname || conts.name || PhoneNumber('+' + mem.replace('@s.whatsapp.net', '')).getNumber('international').replace(new RegExp("[()+-/ +/]", "gi"), "")
const Add = anu.action == "add" 
const Remove = anu.action == "remove"
const onMe = !mem.includes(client.user.jid) 
const intro = `Name Group > ${groupName} \n\nHalo ${pushname} \n\nNama : \nUmur :\nGender : \nAsal : \n\nSekarang Group Memiliki ${groupMembers.length} Member \n\nSemoga Betah dan jangan lupa di isi\nAnd Following Rules Group`;
const outro = `Kok? Si ${pushname} Keluar dari Grub ${groupName} \nWadu Kenapa Dia :v \n\nSekarang Group Hanya Tersisa ${groupMembers.length} Member`
  
try {
var pp_user = await client.getProfilePicture(mem)
} catch (e) {
var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
};    
try {
pp_grup = await client.getProfilePicture(from);
} catch (e) {
pp_grup = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
}

//Button In    
butIn = [
{ buttonId: `${prefix}yoi`, 
buttonText: { 
displayText: "Nice Day" }, 
type: 1 },
{ buttonId: `${prefix}Yoii`, 
buttonText: { 
displayText: "Welcome" }, 
type: 1 } 
 ];         
 
//Button out
let butOut= [{ 
buttonId: `${prefix}biarin`, 
buttonText: { 
displayText: "Gws Bang" },
type: 1 }
];        
 
//Button imge2         
const sendButImage2 = async(id, text1, desc1, gam1, but = []) => {
imageMsg = ( await client.prepareMessageMedia(gam1, "imageMessage", {thumbnail: gam1})).imageMessage;
buttonsMessage = {
contentText: text1,
footerText: desc1,
imageMessage: imageMsg,
buttons: but,
headerType: 4,
};
prep = await client.prepareMessageFromContent(id, { buttonsMessage },{});
client.relayWAMessage(prep);
}
			
//Button image
const sendButImage = async(id, text1, desc1, gam1, but = []) => {
kma = gam1
mhan = await client.prepareMessage(from, kma, image, {thumbnail: kma})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage)
}
             
//Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = []) => {
kma = gam1
mhan = await client.prepareMessage(id, kma, MessageType.location, {thumbnail:kma})
buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage)
}
               
//Join Gc Extream dengan Bucin :v
if (anu.action == "add" && mem.includes(client.user.jid) && extream.includes(anu.jid)) {
client.sendMessage(anu.jid, `${cintakupadamu}\n\n salken yak gaes`, text);
}
             
//Group Update           
if (anu.action == "remove" && anu.participants.length === 1){
console.log(color("[GRUP UPDATE]", "magenta"), color(`${pushname} telah keluar dari gc`,`green`), color(`${groupName}`,`magenta`))
} else  if (anu.action == "add" && anu.participants.length === 1){ 
console.log(color("[GRUP UPDATE]", "magenta"), color(`${pushname} telah bergabung di gc`,`green`), color(`${groupName}`,`magenta`))
}

//Auto Welcome    
if(!AutoWelcome){
if(!JSON.parse(fs.readFileSync('./database/welkom.json')).includes(anu.jid)) return
console.log("Auto Welcome Off")
}      
 
//Welcome Type1        
if(Add && Type1 && onMe){
buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome?nama=${pushname}&descriminator=${groupMembers.length}&memcount=${allmem}&gcname=${encodeURI(groupName)}&pp=${pp_user}&bg=${Background}`)        
sendButImage2(from, intro, copyright, buff, butIn)
} else if (Remove && Type1 && onMe) {    	
buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye?nama=${pushname}&descriminator=${groupMembers.length}&memcount=${allmem}&gcname=${encodeURI(groupName)}&pp=${pp_user}&bg=${Background}`)       
sendButImage(from, outro, copyright, buff, butOut)
}

//welcome Type2          
if (Add && Type2 && onMe) {     
buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome2?nama=${pushname}&descriminator=${groupMembers.length}&memcount=${allmem}&gcname=${encodeURI(groupName)}&gcicon=${pp_grup}&pp=${pp_user}&bg=${Background}`)
sendButImage2(from, intro, copyright, buff, butIn)
} else if (Remove && Type2 && onMe) {       
buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye2?nama=${pushname}&descriminator=${groupMembers.length}&memcount=${allmem}&gcname=${encodeURI(groupName)}&gcicon=${pp_grup}&pp=${pp_user}&bg=${Background}`)
sendButImage(from, outro, copyright, buff, butOut)
}
  
//Welcome Type3   
if(Add && Type3 && onMe){ 
ppUser = await getBuffer(pp_user)  
sendButLocation(from, intro, copyright, ppUser, butIn)
} else if(Remove && Type3 && onMe){      
ppUser = await getBuffer(pp_user)  
sendButLocation(from, outro, copyright, ppUser, butOut)
}  

  
} catch (e) {
e = String(e)
if (!e.includes("this.isZero")) {
if (!e.includes("jid is not defined")) {
console.log(color('GROUP : %s', 'white'), color(e, 'green'))
}
}
}   
}



















