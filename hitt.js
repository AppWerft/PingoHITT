alert('Start');
chrome.serial.getDevices(function(list){
      alert(list);
	 chrome.serial.connect('',{
	 	name:'hitt',
	 	bitrate: 19200,
	 	
	 });

});