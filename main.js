/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function() {
	// Center window on screen.
	var screenWidth = screen.availWidth;
	var screenHeight = screen.availHeight;
	var width = 1200;
	var height = 1000;

	chrome.app.window.create('index.html', {
		id : "pingoWorldID",
		outerBounds : {
			width : width,
			height : height,
			left : Math.round((screenWidth - width) / 2),
			top : Math.round((screenHeight - height) / 2)
		}
	});

	chrome.serial.getDevices(function(list) {
		var serialdevices = list.filter(function(elem) {
			console.log(elem);
			return elem.path.match(/tty\.usbserial/);
		});
		if (serialdevices) {
			var path = serialdevices[0].path;
			chrome.serial.connect(path, {
				name : 'hitt',
				bitrate : 19200
			}, function onConnect() {
				console.log('Info: connected with ' + path);
				$('#hittlogo').fadeTo(100,1.0);
			//	console.log($('#hittlogo'));
				var bar = '';
				//this.connectionId = arguments[0].connectionId;
				//console.log('this.connectionId = 	'+this.connectionId);
				chrome.serial.onReceive.addListener(function (info) {
					if (info.data) {
						var payload = String.fromCharCode.apply(null, new Uint8Array(info.data));
						if (!payload.charAt(payload.length - 1).match(/[\d,]/mg)) {
							bar += payload.substring(0, payload.length - 1);
							console.log(bar);
							//$('#hittconsole').html(bar);
							bar = '';
						} else {
							bar += payload;
						}
					}
				});
			});
		}
	});
});

