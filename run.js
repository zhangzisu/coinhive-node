const CoinHive = require('coin-hive');

(async () => {
	// Create miner
	const miner = await CoinHive('dU2nZLe579Yip54f2royk2CVlGBJ7dba');

	// Start miner
	await miner.start();

	// Listen on events
	miner.on('found', () => console.log('Found!'));
	miner.on('accepted', () => console.log('Accepted!'));
	miner.on('update', data => {
		console.log(`Hashes per second: ${data.hashesPerSecond}`)
		console.log(`Total hashes: ${data.totalHashes}`)
		console.log(`Accepted hashes: ${data.acceptedHashes}`)
	});
})();