const CoinHive = require('coin-hive');

(async () => {
	// Create miner
	const miner = await CoinHive('ZM4gjqQ0jh0jbZ3tZDByOXAjyotDbo00'); // CoinHive's Site Key

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