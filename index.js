var typing = require('./module');

var receiver = '100007247612769';

var facebook = {
	cookie: 'datr=_tv9XOha8klYwjQc3APuQm1Q; fr=1Tc0EDIDcnEjnGvyT.AWW51qFVljYg-NoYomazXWWSKZ8.Bc_dv-.fv.AAA.0.0.Bc_dv-.AWWMmXEw; sb=_tv9XDn9R8Bz38prmLNqDOlR; c_user=100023719204668; xs=22%3Ayho-K5CeZw1iVw%3A2%3A1560140799%3A14204%3A6287; ',
	fb_dtsg: 'AQH2X5gZMaqU:AQEN36SSaBYl',
	user_id: '100023719204668'
};

typing(facebook, receiver)
.then(function(data){
	console.log('Typing : ' + receiver);
});

