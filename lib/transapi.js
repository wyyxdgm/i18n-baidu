const request = require('request');
const crypto = require('crypto');
const querystring = require('querystring');
const config = require('./config.js');

// const appid = config.appid;
// const key = config.key;
const url = config.url;
const salt = config.salt;

function signature(appid, query, salt, key) {
	let string = appid + query + salt + key;
	const md5 = crypto.createHash('md5');
	md5.update(string);
	return md5.digest('hex');
}

class Translate {
	constructor(appid, key) {
		this.appid = appid;
		this.key = key;
	}
	init(appid, key) {
		this.appid = appid;
		this.key = key;
	}
	translate(postData, cb) {
		let form = postData || {};
		let sign = signature(this.appid, form.q, salt, this.key);
		form.appid = this.appid;
		form.salt = salt;
		form.sign = sign;
		// console.log(querystring.stringify(form));
		request.post({
			url: url,
			form: querystring.stringify(form)
		}, function(err, httpResponse, body) {
			if (err) {
				return console.error(err);
			};
			cb(JSON.parse(body));
		});
	}
}

module.exports = Translate;