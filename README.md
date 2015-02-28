# Favicon Slider

This library will throw a party in your browser bar. 

It will draw a new character as your favicon every second, so you can show a text message.

![Favicon Slider in action (GIF)](http://g.recordit.co/fKsPkebAXh.gif)

Usage
======

Just include the JavaScript file and you're good to go.

In a browser:
```html
<script src="favicon-slider.js"></script>
```

Using an AMD loader like RequireJS:
```js
require(['favicon-slider'], function (faviconSlider) {
	console.log(faviconSlider);
});
```

Configuration
=============

Favicon Slider comes with various options, which should speak for themselves.

```js
faviconSlider.setSpeed(1000);
faviconSlider.setText("YourText");
faviconSlider.setBackgroundColor("#000");
faviconSlider.setTextColor("#fff");
faviconSlider.stop();
faviconSlider.start();
```

A fully customised example utilising all the configuration options is given in `example.html`.

License
========

Favicon Slider is available under the [MIT License](http://opensource.org/licenses/MIT).


