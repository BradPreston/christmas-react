import { useState, useEffect } from 'react';
import './App.css';
import { List } from './list';
import { Item } from './types';
import { supabase } from './supabase';
import KindleInstructions from './kindleInstructions';

function App() {
	const [books, setBooks] = useState<Item[]>([]);
	const [videoGames, setVideoGames] = useState<Item[]>([]);
	const [misc, setMisc] = useState<Item[]>([]);
	const [giftCards, setGiftCards] = useState<Item[]>([]);
	const [showInstructions, setShowInstructions] = useState<boolean>(false);

	console.log('show instructions? ', showInstructions);

	useEffect(() => {
		getBooks();
		getVideoGames();
		getMisc();
		getGiftCards();
	}, []);

	async function getBooks() {
		const { data } = await supabase.from('books').select();
		data?.sort((a: Item, b: Item) => a.id - b.id);
		if (data) setBooks(data);
	}

	async function getVideoGames() {
		const { data } = await supabase.from('video_games').select();
		data?.sort((a: Item, b: Item) => a.id - b.id);
		if (data) setVideoGames(data);
	}

	async function getMisc() {
		const { data } = await supabase.from('misc').select();
		data?.sort((a: Item, b: Item) => a.id - b.id);
		if (data) setMisc(data);
	}

	async function getGiftCards() {
		const { data } = await supabase.from('gift_cards').select();
		data?.sort((a: Item, b: Item) => a.id - b.id);
		if (data) setGiftCards(data);
	}

	return (
		<>
			<main className='container'>
				<h1>Brad's Christmas List</h1>
				<section>
					<h2>Books</h2>
					<p className='kindle-note'>
						<em>
							Books can either be purchased as a hard copy or a Kindle copy.
						</em>
					</p>
					<button
						id='open-kindle-instructions'
						onClick={() => setShowInstructions(true)}>
						How to purchase a Kindle copy as a gift
					</button>
					<List showButtons={true} items={books} />
				</section>
				<section>
					<h2>Video Games</h2>
					<List showButtons={true} items={videoGames} />
				</section>
				<section>
					<h2>Misc</h2>
					<List showButtons={true} items={misc} />
				</section>
				<section>
					<h2>Gift Cards</h2>
					<List showButtons={false} items={giftCards} />
				</section>
			</main>
			{showInstructions ? (
				<>
					<KindleInstructions
						closeInstructions={() => setShowInstructions(false)}
					/>
				</>
			) : null}
		</>
	);
}

export default App;
