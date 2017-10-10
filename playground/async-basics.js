console.log('Starting app');



setTimeout(() => {
	console.log('Inside the callback');
}, 2000);


setTimeout(() => {
	console.log('Another callback');
}, 4000);

console.log('Finishing word');