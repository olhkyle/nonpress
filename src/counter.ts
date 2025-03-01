export function setupCounter(element: HTMLButtonElement) {
	let counter = 0; // closure

	const setCounter = (count: number) => {
		counter = count;
		element.innerHTML = `count is ${counter}`;
	};
	element.addEventListener('click', () => setCounter(counter + 1));
	setCounter(0);
}
