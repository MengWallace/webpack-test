require('./world');
require('style-loader!css-loader!./style.css')
function hello(str) {
	document.write(str);
}
hello('hello world');