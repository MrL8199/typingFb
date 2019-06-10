var typing = require('./module');

var receiver = '';

var facebook = {
	cookie: '',
	fb_dtsg: '',
	user_id: ''
};

typing(facebook, receiver)
.then(function(data){
	console.log('Typing : ' + receiver);
});

