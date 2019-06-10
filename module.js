var axios = require('axios');
var qs = require('querystring');


async function tyPing(dataFb, receiver){
	var formData = {
		typ: '1',
		to: receiver,
		fb_dtsg: dataFb.fb_dtsg
	};

	var config = {
		url: 'https://www.facebook.com/ajax/messaging/typ.php?dpr=1',
		method: 'post',
		data: formData,
		headers: {
			'accept': '*/*',
			'accept-encoding': 'gzip, deflate, sdch',
			'accept-language': 'en-US,en;q=0.8,en-AU;q=0.6',
			'cookie': dataFb.cookie,
		// 'dnt': '1',
		'origin': 'https://www.facebook.com',
		'referer': 'https://www.facebook.com/',
		'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
	},
	transformRequest: [
			function(data, headers) {
				return qs.stringify(data);
			}
		],
	};	
	var data = await axios(config);
	return data.data;
}

module.exports = tyPing;