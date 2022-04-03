/*
   * Create By Dika Ardnt.
   * Contact Me on wa.me/62882007331744
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Your Key',
}

// Other
global.owner = ['62882007331744','6288233481992','62882007331744']
global.premium = ['62882007331744']
global.ownername = 'Rafi Aji'
global.botname = 'Rafi-Md'
global.footer = 'Rafi'
global.ig = 'https://instagram.com/Asal'
global.email = 'Rafiaji20@gmail.com'
global.region = 'Indonesia'
global.sc = 'https://github.com/Rafiajiya/Chika-Md'
global.myweb = 'https://api-riychdwayne.herokuap.com'
global.packname = 'Rafi Bot'
global.author = 'WhatsApp Bot'
global.sessionName = 'chika'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Lu Bukan Admin Ye kontol',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./image/chika.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
