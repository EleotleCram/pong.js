const gameLoop = (mainLoop) => {
	const animationLoop = () => {
		mainLoop();

		if(gameLoop.isRunning) {
			requestAnimationFrame(animationLoop);
		}
	}

	gameLoop.isRunning = true;
	requestAnimationFrame(animationLoop);
};

gameLoop.stop = () => {
	gameLoop.isRunning = false;
}

export default gameLoop;
