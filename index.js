

// Load asynchronously, not in the build.

require(['./bear.js'], function(bear){
	// console.log(bear);
	document.body.appendChild(bear[0]);
});

