export const cards = [
	{ icon: '🎁', name: 'Gift', id: 0 },
	{ icon: '🎅', name: 'Santa', id: 1 },
	{ icon: '🎀', name: 'Ribbon', id: 2 },
	{ icon: '⚽', name: 'Ball', id: 3 },
	{ icon: '🍕', name: 'Pizza', id: 4 },
	{ icon: '💕', name: 'Hearts', id: 5 },
	{ icon: '✨', name: 'Stars', id: 6 },
	{ icon: '💻', name: 'Notebook', id: 7 },
	{ icon: '🎱', name: '8ball', id: 8 },
	{ icon: '🎪', name: 'Circus', id: 9 },
	{ icon: '🎵', name: 'Tune', id: 10 },
	{ icon: '☕', name: 'Coffee', id: 11 },
	{ icon: '🎁', name: 'Gift', id: 12 },
	{ icon: '🎅', name: 'Santa', id: 13 },
	{ icon: '🎀', name: 'Ribbon', id: 14 },
	{ icon: '⚽', name: 'Ball', id: 15 },
	{ icon: '🍕', name: 'Pizza', id: 16 },
	{ icon: '💕', name: 'Hearts', id: 17 },
	{ icon: '✨', name: 'Stars', id: 18 },
	{ icon: '💻', name: 'Notebook', id: 19 },
	{ icon: '🎱', name: '8ball', id: 20 },
	{ icon: '🎪', name: 'Circus', id: 21 },
	{ icon: '🎵', name: 'Tune', id: 22 },
	{ icon: '☕', name: 'Coffee', id: 23 },
]

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(cards)