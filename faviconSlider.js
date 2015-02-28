window.faviconSlider = (function() {

	// create canvas, get context
	var canvas = document.createElement('canvas');
	canvas.width = 16;
	canvas.height = 16;
	var ctx = canvas.getContext('2d');
	var iconText = "DannyvanKooten";
	var currentCharIndex = 0;

	// start rotating through the characters
	drawNextChar();
	window.setInterval( drawNextChar, 1000 );

	function drawChar( char ) {
		ctx.globalCompositeOperation = 'source-over';
		ctx.fillStyle = '#fff';
		ctx.fillRect( 0,0,16,16 );
		ctx.fillStyle = "black";
		ctx.textAlign = 'center';
		ctx.font = '16px "helvetica", sans-serif';
		ctx.fillText( char, 8, 14 );
	}

	function drawNextChar() {
		if( currentCharIndex === iconText.length ) {
			currentCharIndex = 0;
		}

		drawChar( iconText.charAt(currentCharIndex) );
		replaceIcon();
		currentCharIndex++;
	}

	function replaceIcon() {
		var existingFavicon = document.getElementById('favicon');
		var newFavicon = existingFavicon.cloneNode(true);
		newFavicon.href = canvas.toDataURL('image/png');

		existingFavicon.parentNode.replaceChild( newFavicon, existingFavicon );
	}

	// public methods
	return {
		setText: function(text) {
			iconText = text;
			currentCharIndex = 0;
		}
	}
})();