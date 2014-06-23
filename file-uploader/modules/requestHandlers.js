exports.start = function(){
	console.log('Start was called');
	function sleep(ms){
		var startTime = new Date().getTime();
		while(new Date().getTime() < startTime+ms);
	}

	sleep(10000);
	return "Hello Start";
}

exports.upload = function(){
	console.log('Upload was called');
	return "Hello Upload";
}