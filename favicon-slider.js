/*! Favicon Slider v1.0 by @dannyvankooten | MIT license */
;(function(root) {

		var faviconSlider = (function() {

			// create canvas, get context
			var interval = 0,
				canvas,
				ctx,
				iconText = "PARTY",
				currentCharIndex = 0,
				favicon = document.head.querySelector('link[rel="shortcut icon"], link[rel="icon"]'),
				speed = 1000,
				textColor = "#000",
				backgroundColor = "#fff";

			function createFavicon() {
				if( ! favicon ) {
					favicon = document.createElement('link');
					document.head.appendChild(favicon);
				}

				favicon.setAttribute('rel', 'icon');
				favicon.setAttribute('id', 'favicon');
				favicon.setAttribute('type','image/png');
			}

			function drawChar(char) {
				ctx.globalCompositeOperation = 'source-over';
				ctx.fillStyle = backgroundColor;
				ctx.fillRect(0, 0, 16, 16);
				ctx.fillStyle = textColor;
				ctx.textAlign = 'center';
				ctx.font = '16px "helvetica", sans-serif';
				ctx.fillText(char, 8, 14);
			}

			function drawNextChar() {
				if (currentCharIndex === iconText.length) {
					currentCharIndex = 0;
				}

				drawChar(iconText.charAt(currentCharIndex));
				replaceIcon();
				currentCharIndex++;
			}

			function replaceIcon() {
				var existingFavicon = document.getElementById('favicon');
				var newFavicon = existingFavicon.cloneNode(true);
				newFavicon.setAttribute('href', canvas.toDataURL('image/png'));

				existingFavicon.parentNode.replaceChild(newFavicon, existingFavicon);
			}

			function init() {

				// create canvas element
				canvas = document.createElement('canvas');
				canvas.width = 16;
				canvas.height = 16;

				// find context
				ctx = canvas.getContext('2d');

				createFavicon();

				// start interval
				start();
			}

			function stop() {
				window.clearInterval(interval);
			}

			function start() {
				drawNextChar();
				interval = window.setInterval(drawNextChar, speed);
				console.log("Starting. Interval ID: " + interval );
			}

			function setText(newText){
				iconText = newText;
				currentCharIndex = 0;
			}

			function setSpeed(newSpeed) {
				speed = newSpeed;
				stop();
				start();
			}

			function setBackgroundColor(newColor) {
				backgroundColor = newColor;
			}

			function setTextColor(newColor) {
				textColor = newColor;
			}

			init();

			// public methods
			return {
				setText: setText,
				setSpeed: setSpeed,
				setBackgroundColor: setBackgroundColor,
				setTextColor: setTextColor,
				stop: stop,
				start: start
			}
		})();

		// Play nice with AMD, CommonJS or a plain global object.
		if ( typeof define == 'function' && typeof define.amd == 'object' && define.amd ) {
			define(function() {
				return faviconSlider;
			});
		}	else if ( typeof exports === 'object' ) {
			exports.faviconSlider = faviconSlider;
		} else { // in Rhino or a web browser
			root.faviconSlider = faviconSlider;
		}

}(this));