
let { WAConnection, MessageType, Mimetype} = require('@adiwajshing/baileys')
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
let qrcode = require('qrcode')
const fs = require('fs')

listjadibot = [];

const jadibot = async(reply,client,id, baterai, sender) => {
	client = new WAConnection()
    client.logger.level = 'warn'
    client.version = [2, 2143, 3]
    client.browserDescription = [ 'jadibot', '', '3.0' ]
    client.on('qr', async qr => {
    	let bot = await qrcode.toDataURL(qr, { scale: 8 })
    	let buffer = new Buffer.from(bot.replace('data:image/png;base64,', ''), 'base64')
     await fs.writeFileSync(`../jadibot@${sender}.jpg`, buffer)
     bot = await client.sendMessage(id,fs.readFileSync(`../jadibot@${sender}.jpg`),MessageType.image,{caption:'Scan QR Untuk menjadi bot\n*Rules:*\nQR akan diganti setiap 30 detik'})
  	setTimeout(() => {
       	client.deleteMessage(id, bot.key)
       },30000)
    })
    client.on('connecting', () => {
    })
    client.on('open', () => {
    	reply(`Sukses Jadi Bot\n\n*Device*:\n\n ${JSON.stringify(client.user,null,2)}`)
    })
    await client.connect({timeoutMs: 30 * 1000})
    listjadibot.push(client.user)
    client.on('chat-update', async (message) => {
        require('../ikyc.js')(client, message, baterai)
    })
}

const stopjadibot = (reply) => {
	client = new WAConnection();
	client.close()
	reply('Sukses stop jadibot')
}

module.exports = {
	jadibot,
	stopjadibot,
	listjadibot
}