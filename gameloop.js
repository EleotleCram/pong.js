const gameLoop = (mainLoop) => {
	const animationLoop = () => {
		mainLoop();
		requestAnimationFrame(animationLoop);
	}
	requestAnimationFrame(animationLoop);
};

export default gameLoop;
