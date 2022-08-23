export const functionalSplice = <T>(
	array: T[],
	start: number,
	deleteCount: number,
	...items: T[]
): T[] => {
	const arrayLength = array.length;
	const _deleteCount = deleteCount < 0 ? 0 : deleteCount;
	let _start;
	if (start < 0) {
		if (Math.abs(start) > arrayLength) {
			_start = 0;
		} else {
			_start = arrayLength + start;
		}
	} else if (start > arrayLength) {
		_start = arrayLength;
	} else {
		_start = start;
	}
	return [...array.slice(0, _start), ...items, ...array.slice(_start + _deleteCount, arrayLength)];
};
