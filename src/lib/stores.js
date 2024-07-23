import { readable } from 'svelte/store';

export const MagicPathNames = readable({
	F: 'Fire',
	A: 'Air',
	W: 'Water',
	E: 'Earth',
	S: 'Astral',
	D: 'Death',
	N: 'Nature',
	G: 'Glamour',
	B: 'Blood'
});
